import type ColorSupportLevel from './ColorSupportLevel'

/**
 * Detect whether the terminal supports color.
 *
 * @see https://github.com/chalk/supports-color
 */
interface BaseColorSupport {
  /**
   * The color level:
   *
   * `0` = All colors disabled.
   *
   * `1` = ANSI Basic 16 colors support.
   *
   * `2` = ANSI 256 colors support.
   *
   * `3` = ANSI Truecolor 16 million colors support.
   *
   * @see https://github.com/chalk/supports-color
   */
  readonly level: ColorSupportLevel

  /**
   * Whether ANSI Basic 16 colors are supported.
   *
   * @see https://github.com/chalk/supports-color
   */
  readonly hasBasic: boolean

  /**
   * Whether ANSI 256 colors are supported.
   *
   * @see https://github.com/chalk/supports-color
   */
  readonly has256: boolean

  /**
   * Whether ANSI Truecolor 16 million colors are supported.
   *
   * @see https://github.com/chalk/supports-color
   */
  readonly has16m: boolean
}

interface ColorSupportLevel1 extends BaseColorSupport {
  level: 1
  hasBasic: true
  has256: false
  has16m: false
}

interface ColorSupportLevel2 extends BaseColorSupport {
  level: 2
  hasBasic: true
  has256: true
  has16m: false
}

interface ColorSupportLevel3 extends BaseColorSupport {
  level: 3
  hasBasic: true
  has256: true
  has16m: true
}

type ColorSupport =
| ColorSupportLevel1
| ColorSupportLevel2
| ColorSupportLevel3

export default ColorSupport
