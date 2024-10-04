import type { ColorSupportLevel } from '../../types'
import type { Options, Stream } from '../types'

import { release } from 'node:os'

type GlobalThis = typeof globalThis & {
  readonly Deno?: {
    readonly args?: string[]
  }
}

const hasFlag = (
  flag: string,
  argv: string[] = (globalThis as GlobalThis).Deno?.args ?? process.argv
): boolean => {
  const prefix = '--' // flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--'
  const position = argv.indexOf(prefix + flag)
  const terminator = argv.indexOf('--')

  return position !== -1 && (terminator === -1 || position < terminator)
}

const supportsLevel = (stream: Stream, {
  streamIsTTY,
  sniffFlags = true
}: Options = {}): ColorSupportLevel => {
  const {
    FORCE_COLOR,
    TF_BUILD,
    AGENT_NAME,
    TERM,
    CI,
    TRAVIS,
    CIRCLECI,
    APPVEYOR,
    GITLAB_CI,
    BUILDKITE,
    DRONE,
    GITHUB_ACTIONS,
    GITEA_ACTIONS,
    CI_NAME,
    TEAMCITY_VERSION,
    COLORTERM,
    TERM_PROGRAM,
    TERM_PROGRAM_VERSION
  } = process.env

  /**
   * Use: FORCE_COLOR env
   */

  if (FORCE_COLOR === 'true' || FORCE_COLOR === '') return 1
  if (FORCE_COLOR === 'false') return 0

  const level = Math.min(parseInt(FORCE_COLOR ?? '', 10), 3)

  if (
    level === 0 ||
    level === 1 ||
    level === 2 ||
    level === 3
  ) return level

  /**
   * Use: Sniff Flags
   */

  if (sniffFlags) {
    if (
      hasFlag('no-color') ||
      hasFlag('no-colors') ||
      hasFlag('color=false') ||
      hasFlag('color=never')
    ) {
      return 0
    } else if (
      hasFlag('color') ||
      hasFlag('colors') ||
      hasFlag('color=true') ||
      hasFlag('color=always')
    ) {
      return 1
    } else if (hasFlag('color=256')) {
      return 2
    } else if (
      hasFlag('color=16m') ||
      hasFlag('color=full') ||
      hasFlag('color=truecolor')
    ) {
      return 3
    }
  }

  /**
   * Use: Azure
   */

  // Check for Azure DevOps pipelines.
  // Has to be above the `!streamIsTTY` check.
  if (TF_BUILD !== undefined && AGENT_NAME !== undefined) return 1

  /**
   * Use: TTY
   */

  if (typeof stream === 'object' && streamIsTTY !== true) return 0

  /**
   * Use: Dumb
   */

  if (TERM === 'dumb') return 0

  /**
   * Use: Windows
   */

  if (process.platform === 'win32') {
    // Windows 10 build 10586 is the first Windows release that supports 256.
    // Windows 10 build 14931 is the first release that supports 16m/TrueColor.
    const osRelease = release().split('.')

    if (
      Number(osRelease[0]) >= 10 &&
      Number(osRelease[2]) >= 10_586
    ) return Number(osRelease[2]) >= 14_931 ? 3 : 2

    return 1
  }

  /**
   * Use: CI
   */

  if (CI !== undefined) {
    if (
      GITHUB_ACTIONS !== undefined ||
      GITEA_ACTIONS !== undefined
    ) return 3

    if (
      [
        TRAVIS,
        CIRCLECI,
        APPVEYOR,
        GITLAB_CI,
        BUILDKITE,
        DRONE
      ].some(sign => sign !== undefined) ||
      CI_NAME === 'codeship'
    ) return 1

    return 0
  }
  /**
   * Use: Team City
   */

  if (
    TEAMCITY_VERSION !== undefined
  ) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(TEAMCITY_VERSION) ? 1 : 0

  /**
   * Use: Terminal
   */

  if (COLORTERM === 'truecolor') return 3
  if (TERM === 'xterm-kitty') return 3

  if (TERM_PROGRAM !== undefined) {
    const version = parseInt((TERM_PROGRAM_VERSION ?? '').split('.')[0], 10)

    switch (TERM_PROGRAM) {
      case 'iTerm.app': return version >= 3 ? 3 : 2
      case 'Apple_Terminal': return 2
      // No default
    }
  }

  if (/-256(color)?$/i.test(TERM ?? '')) return 2
  if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(TERM ?? '')) return 1
  if (COLORTERM !== undefined) return 1

  /**
   * Use: defualt
   */

  return 0
}

export default supportsLevel
