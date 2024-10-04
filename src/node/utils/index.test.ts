import './supportsLevel.test'
import './createSupportsColor.test'

import * as index from '.'

describe('Test node utils:', () => {
  it('Should have a `supportsLevel` property!', () => {
    expect(index).toHaveProperty('supportsLevel')
  })

  it('Should have a `createSupportsColor` property!', () => {
    expect(index).toHaveProperty('createSupportsColor')
  })
})
