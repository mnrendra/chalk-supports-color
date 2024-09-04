import type { SupportsColor } from '@/types'

import {
  level0 as lvl0,
  level1 as lvl1,
  level2 as lvl2,
  level3 as lvl3
} from './colorInfo'

export const level0: SupportsColor = {
  stdout: lvl0,
  stderr: lvl0
}

export const level1: SupportsColor = {
  stdout: lvl1,
  stderr: lvl1
}

export const level2: SupportsColor = {
  stdout: lvl2,
  stderr: lvl2
}

export const level3: SupportsColor = {
  stdout: lvl3,
  stderr: lvl3
}

export default {
  level0,
  level1,
  level2,
  level3
}
