import node from './node'

export type {
  ColorSupportLevel,
  ColorSupport,
  ColorInfo,
  SupportsColor
} from './types'

export {
  type Options,
  createSupportsColor,
  stdout,
  stderr,
  supportsColor
} from './node'

export default node
