import type { WriteStream } from 'node:tty'

type Stream = Partial<WriteStream> & {
  readonly isTTY: boolean
}

export default Stream
