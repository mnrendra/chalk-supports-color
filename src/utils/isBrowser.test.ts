import useOri from '@tests/utils/useOri'

import isBrowser from './isBrowser'

describe('Test `isBrowser` util:', () => {
  const oriWindow = useOri(globalThis.window)

  afterEach(() => {
    globalThis.window = useOri(oriWindow)
  })

  describe('By mocking `globalThis.window.document` to `{}`:', () => {
    beforeEach(() => {
      globalThis.window = { document: {} } as any
    })

    it('Should return `true` when `globalThis.window.document` has a value!', () => {
      const received = isBrowser()
      const expected = true
      expect(received).toBe(expected)
    })
  })

  describe('By mocking `globalThis.window` to `undefined`:', () => {
    beforeEach(() => {
      globalThis.window = undefined as any
    })

    it('Should return `false` when `globalThis.window` has no value!', () => {
      const received = isBrowser()
      const expected = false
      expect(received).toBe(expected)
    })
  })
})
