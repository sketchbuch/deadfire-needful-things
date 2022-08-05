import { isUuidValid } from './isUuidValid'

describe('isUuidValid()', () => {
  const validUuid = '54b1899b-13d0-4e2e-a1f6-35bada15554a'

  test('Valid UUID passes', () => {
    expect(isUuidValid(validUuid)).toBe(true)
  })

  test('Leading white space fails', () => {
    expect(isUuidValid(` ${validUuid}`)).toBe(false)
  })

  test('Trailing white space fails', () => {
    expect(isUuidValid(`${validUuid} `)).toBe(false)
  })

  test('Invalid UUID fails', () => {
    expect(isUuidValid(validUuid.replace('-', ''))).toBe(false)
    expect(isUuidValid(validUuid.slice(1))).toBe(false)
  })
})
