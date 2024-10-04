import type { SupportsColor } from '../types'

import { translateLevel } from '../utils'
import { supportsLevel } from './utils'

const main = (): SupportsColor => {
  const level = supportsLevel()

  const colorSupport = translateLevel(level)

  return {
    stdout: colorSupport,
    stderr: colorSupport
  }
}

export default main
