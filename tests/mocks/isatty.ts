import * as originalModule from 'node:tty'

const { isatty } = originalModule as jest.Mocked<typeof originalModule>

export default isatty
