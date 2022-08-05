import { mock } from '@userlike/joke'
import { Bundles } from '../../bundles/bundles'
import { armour } from '../../data/armour'
import { validateBundles } from '../validateBundles'

const { isUrlValid } = mock(import('../isUrlValid'))
const { isUuidValid } = mock(import('../isUuidValid'))

describe('validateBundles()', () => {
  const bundles: Bundles = [
    {
      data: armour,
      label: "Wanika (Queen's Berth)",
      merchant: 'Store_03_Armorer',
      merchantUuid: '7f592fb9-e4c2-4091-a68c-3631e303640f',
      type: 'armour',
      url: 'https://pillarsofeternity.fandom.com/wiki/Wanika',
    },
  ]
  const type = 'armour'

  beforeEach(() => {
    isUrlValid.mockReturnValue(true)
    isUuidValid.mockReturnValue(true)
  })

  test('Does not throw if all valid', () => {
    expect(() => validateBundles(bundles)).not.toThrow()
    expect(isUrlValid).toHaveBeenCalledTimes(1)
    expect(isUuidValid).toHaveBeenCalledTimes(1)
  })

  test('Invalid URL throws an error', () => {
    isUrlValid.mockReturnValue(false)
    expect(() => validateBundles(bundles)).toThrow()
  })

  test('Invalid UUID throws an error', () => {
    isUuidValid.mockReturnValue(false)
    expect(() => validateBundles(bundles)).toThrow()
  })
})
