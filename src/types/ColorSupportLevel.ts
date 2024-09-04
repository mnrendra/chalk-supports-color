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
type ColorSupportLevel = 0 | 1 | 2 | 3

export default ColorSupportLevel
