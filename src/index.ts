import { createSupportsColor } from './node'
import main from './main'

export type {
  ColorSupportLevel,
  ColorSupport,
  ColorInfo,
  SupportsColor,
  Options
} from './types'

const supportsColor = main()

const { stdout, stderr } = supportsColor

export {
  stdout,
  stderr,
  createSupportsColor
}

Object.defineProperties(supportsColor, {
  stdout: {
    value: stdout,
    enumerable: true,
    writable: true,
    configurable: false
  },
  stderr: {
    value: stderr,
    enumerable: true,
    writable: true,
    configurable: false
  },
  createSupportsColor: {
    value: createSupportsColor,
    enumerable: false,
    writable: true,
    configurable: false
  },
  default: {
    value: supportsColor,
    enumerable: false,
    writable: true,
    configurable: false
  }
})

export default supportsColor
