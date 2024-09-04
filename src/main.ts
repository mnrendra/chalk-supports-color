import type { SupportsColor } from './types'

import { isBrowser, isNode } from './utils'

import browser from './browser'
import node from './node'

const main = (): SupportsColor => {
  if (isBrowser()) return browser()
  if (isNode()) return node()

  return {
    stdout: false,
    stderr: false
  }
}

export default main
