import type { ColorInfo, ColorSupportLevel } from '../types'

const translateLevel = (
  level: ColorSupportLevel
): ColorInfo => {
  if (!Number.isInteger(level) || ![0, 1, 2, 3].includes(level)) {
    throw new Error('The `level` value should be an integer from 0 to 3!')
  }

  switch (level) {
    case 0:
      return false
    case 1:
      return {
        level: 1,
        hasBasic: true,
        has256: false,
        has16m: false
      }
    case 2:
      return {
        level: 2,
        hasBasic: true,
        has256: true,
        has16m: false
      }
    case 3:
      return {
        level: 3,
        hasBasic: true,
        has256: true,
        has16m: true
      }
  }
}

export default translateLevel
