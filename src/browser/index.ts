import main from './main'

const supportsColor = main

export const stdout = supportsColor().stdout
export const stderr = supportsColor().stderr

export default supportsColor()
