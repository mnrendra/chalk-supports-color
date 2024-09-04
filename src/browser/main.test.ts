import '@/utils/index.test'

import colorSupports from '@tests/dummies/colorSupports'
import useOri from '@tests/utils/useOri'

import main from './main'

describe('Test `main` browser support:', () => {
  const oriNavigator = useOri(globalThis.navigator)

  afterEach(() => {
    globalThis.navigator = useOri(oriNavigator)
  })

  describe('By mocking `globalThis.navigator` to have no value:', () => {
    beforeEach(() => {
      globalThis.navigator = undefined as any
    })

    it('Should return `colorSupport` level 0!', () => {
      const received = main()
      const expected = colorSupports.level0
      expect(received).toEqual(expected)
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

    it('Should return `colorSupport` level 3!', () => {
      const received = main()
      const expected = colorSupports.level3
      expect(received).toEqual(expected)
    })
  })

  describe('By mocking `globalThis.navigator.userAgent` to have a supported value that begin with `Chromium/`:', () => {
    beforeEach(() => {
      globalThis.navigator = {
        userAgent: 'Chromium/'
      } as any
    })

    it('Should return `colorSupport` level 1!', () => {
      const received = main()
      const expected = colorSupports.level1
      expect(received).toEqual(expected)
    })
  })

  describe('By mocking `globalThis.navigator.userAgent` to have a supported value that does not begin with `Chromium/`:', () => {
    beforeEach(() => {
      globalThis.navigator = {
        userAgent: 'Chromium'
      } as any
    })

    it('Should return `colorSupport` level 0!', () => {
      const received = main()
      const expected = colorSupports.level0
      expect(received).toEqual(expected)
    })
  })
})
