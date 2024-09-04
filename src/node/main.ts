import type { SupportsColor } from '../types'

import { isatty } from 'node:tty'

import { createSupportsColor } from './utils'

const main = (): SupportsColor => {
  return {
    stdout: createSupportsColor({ isTTY: isatty(1) }),
    stderr: createSupportsColor({ isTTY: isatty(2) })
  }
}

export default main
