import { isUrlValid, urlPrefix } from './isUrlValid'

describe('isUrlValid()', () => {
  const validUrl = `${urlPrefix}Effigy%27s_Husk`

  test('Valid URL passes', () => {
    expect(isUrlValid(validUrl)).toBe(true)
  })

  test('Leading white space fails', () => {
    expect(isUrlValid(` ${validUrl}`)).toBe(false)
  })

  test('Trailing white space fails', () => {
    expect(isUrlValid(`${validUrl} `)).toBe(false)
  })

  test('Url missing the page name fails', () => {
    expect(isUrlValid(`${urlPrefix}`)).toBe(false)
  })
})
