import type originalModule from 'node:tty'

import type mockedModule from '@tests/mocks/isatty'

type OriginalModule = typeof originalModule
type MockedModule = typeof mockedModule

const unmock = (
  mockedModule: MockedModule
): void => {
  const actualModule: OriginalModule = jest.requireActual('node:tty')
  mockedModule.mockImplementation(actualModule.isatty)
}

export default unmock
