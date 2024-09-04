import type { ColorSupport, Options } from '../../types'
import type { Stream } from '../types'

import { translateLevel } from '../../utils'
import supportsLevel from './supportsLevel'

const createSupportsColor = (stream: Stream, {
  streamIsTTY,
  sniffFlags = true
}: Options = {}): ColorSupport | false => {
  const level = supportsLevel(stream, {
    streamIsTTY: streamIsTTY ?? stream.isTTY,
    sniffFlags
  })

  return translateLevel(level)
}

export default createSupportsColor
