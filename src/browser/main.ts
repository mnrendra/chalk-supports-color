import type { SupportsColor } from '../types'

import translateLevel from '../utils/translateLevel'
import supportsLevel from './utils/supportsLevel'

const main = (): SupportsColor => {
  const level = supportsLevel()

  const colorSupport = translateLevel(level)

  return {
    stdout: colorSupport,
    stderr: colorSupport
  }
}

export default main
