import type { ColorSupportLevel } from '@/types'

import colorInfo from '@tests/dummies/colorInfo'

import translateLevel from './translateLevel'

describe('Test `translateLevel` util:', () => {
  it('Should return `false` when given `0`!', () => {
    const received = translateLevel(0)
    const expected = colorInfo.level0
    expect(received).toBe(expected)
  })

  it('Should return `colorInfo` level 1 when given `1`!', () => {
    const received = translateLevel(1)
    const expected = colorInfo.level1
    expect(received).toEqual(expected)
  })

  it('Should return `colorInfo` level 2 when given `2`!', () => {
    const received = translateLevel(2)
    const expected = colorInfo.level2
    expect(received).toEqual(expected)
  })

  it('Should return `colorInfo` level 3 when given `3`!', () => {
    const received = translateLevel(3)
    const expected = colorInfo.level3
    expect(received).toEqual(expected)
  })

  it('Should throw an error when given a non-integer value!', () => {
    const received = (): void => { translateLevel(2.4 as ColorSupportLevel) }
    const expected = new Error('The `level` value should be an integer from 0 to 3!')
    expect(received).toThrow(expected)
  })

  it('Should throw an error when given an integer less than `0`!', () => {
    const received = (): void => { translateLevel(-1 as ColorSupportLevel) }
    const expected = new Error('The `level` value should be an integer from 0 to 3!')
    expect(received).toThrow(expected)
  })

  it('Should throw an error when given an integer more than `3`!', () => {
    const received = (): void => { translateLevel(4 as ColorSupportLevel) }
    const expected = new Error('The `level` value should be an integer from 0 to 3!')
    expect(received).toThrow(expected)
  })
})
