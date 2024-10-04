import './utils/index.test'
import './browser/index.test'
import './node/index.test'

import index, { stdout, stderr, createSupportsColor } from '.'

describe('Test all features:', () => {
  it('Should have a `stdout` property!', () => {
    expect(index).toHaveProperty('stdout')
  })

  it('Should have a `stderr` property!', () => {
    expect(index).toHaveProperty('stderr')
  })

  it('Should able to export `stdout` variable', () => {
    expect(stdout).not.toBe(undefined)
  })

  it('Should able to export `stderr` variable', () => {
    expect(stderr).not.toBe(undefined)
  })

  it('Should able to export `createSupportsColor` function', () => {
    expect(typeof createSupportsColor).toBe('function')
  })
})
