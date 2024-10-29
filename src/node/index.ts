import main from './main'

export type { Options } from './types'

export { createSupportsColor } from './utils'

export const supportsColor = main

export const stdout = supportsColor().stdout
export const stderr = supportsColor().stderr

export default supportsColor()
