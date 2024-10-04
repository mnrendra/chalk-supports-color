interface Options {
  /**
   * Whether `process.argv` should be sniffed for `--color` and `--no-color`
   * flags.
   *
   * @default true
   */
  readonly sniffFlags?: boolean

  /**
   * Whether `isTTY` true or false.
   */
  readonly streamIsTTY?: boolean
}

export default Options
