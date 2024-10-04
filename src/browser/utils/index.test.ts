import './supportsLevel.test'

import * as index from '.'

describe('Test browser utils:', () => {
  it('Should have a `supportsLevel` property!', () => {
    expect(index).toHaveProperty('supportsLevel')
  })
})
