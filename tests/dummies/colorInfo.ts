import type { ColorInfo } from '@/types'

export const level0: ColorInfo = false

export const level1: ColorInfo = {
  level: 1,
  hasBasic: true,
  has256: false,
  has16m: false
}

export const level2: ColorInfo = {
  level: 2,
  hasBasic: true,
  has256: true,
  has16m: false
}

export const level3: ColorInfo = {
  level: 3,
  hasBasic: true,
  has256: true,
  has16m: true
}

export default {
  level0,
  level1,
  level2,
  level3
}
