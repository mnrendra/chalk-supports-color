import useOri from '@tests/utils/useOri'

import supportsLevel from './supportsLevel'

describe('Test `supportsLevel` util:', () => {
  const oriNavigator = useOri(globalThis.navigator)

  afterEach(() => {
    globalThis.navigator = useOri(oriNavigator)
  })

  describe('By mocking `globalThis.navigator` to have no value:', () => {
    beforeEach(() => {
      globalThis.navigator = undefined as any
    })

    it('Should return `0`', () => {
      const received = supportsLevel()
      const expected = 0
      expect(received).toBe(expected)
    })
  })

  describe('By mocking `globalThis.navigator.userAgentData` to have a supported value:', () => {
    beforeEach(() => {
      globalThis.navigator = {
        userAgentData: {
          brands: [{ brand: 'Chromium', version: '94' }]
        }
      } as any
    })

    it('Should return `3`', () => {
      const received = supportsLevel()
      const expected = 3
      expect(received).toBe(expected)
    })
  })

  describe('By mocking `globalThis.navigator.userAgent` to have a supported value that begin with `Chromium/`:', () => {
    beforeEach(() => {
      globalThis.navigator = {
        userAgent: 'Chromium/'
      } as any
    })

    it('Should return `1`', () => {
      const received = supportsLevel()
      const expected = 1
      expect(received).toBe(expected)
    })
  })

  describe('By mocking `globalThis.navigator.userAgent` to have a supported value that does not begin with `Chromium/`:', () => {
    beforeEach(() => {
      globalThis.navigator = {
        userAgent: 'Chromium'
      } as any
    })

    it('Should return `0`', () => {
      const received = supportsLevel()
      const expected = 0
      expect(received).toBe(expected)
    })
  })
})
