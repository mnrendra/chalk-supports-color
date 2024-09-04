import useOri from '@tests/utils/useOri'

import isNode from './isNode'

describe('Test `isNode` util:', () => {
  const oriProcesss = useOri(globalThis.process)

  afterEach(() => {
    globalThis.process = useOri(oriProcesss)
  })

  describe('By mocking `globalThis.process.versions.node` to `""`:', () => {
    beforeEach(() => {
      globalThis.process = { versions: { node: '' } } as any
    })

    it('Should return `true` when `globalThis.process.versions.node` has a value!', () => {
      const received = isNode()
      const expected = true
      expect(received).toBe(expected)
    })
  })

  describe('By mocking `globalThis.process` to `undefined`:', () => {
    beforeEach(() => {
      globalThis.process = undefined as any
    })

    it('Should return `false` when `globalThis.process` has no value!', () => {
      const received = isNode()
      const expected = false
      expect(received).toBe(expected)
    })
  })
})
