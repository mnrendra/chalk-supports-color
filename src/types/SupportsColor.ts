import type ColorInfo from './ColorInfo'

interface SupportsColor {
  readonly stdout: ColorInfo
  readonly stderr: ColorInfo
}

export default SupportsColor
