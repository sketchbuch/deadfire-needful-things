import { mock } from '@userlike/joke'
import { GameData } from '../../bundles/gamedata'
import { validateItems } from '../validateItems'

const { isUrlValid } = mock(import('../isUrlValid'))
const { isUuidValid } = mock(import('../isUuidValid'))

describe('validateItems()', () => {
  const data: GameData = [
    {
      label: "Effigy's Husk",
      url: 'https://pillarsofeternity.fandom.com/wiki/Effigy%27s_Husk',
      uuid: '54b1899b-13d0-4e2e-a1f6-35bada15554a',
    },
  ]
  const type = 'armour'

  beforeEach(() => {
    isUrlValid.mockReturnValue(true)
    isUuidValid.mockReturnValue(true)
  })

  test('Does not throw if all valid', () => {
    expect(() => validateItems(data, type)).not.toThrow()
    expect(isUrlValid).toHaveBeenCalledTimes(1)
    expect(isUuidValid).toHaveBeenCalledTimes(1)
  })

  test('Invalid URL throws an error', () => {
    isUrlValid.mockReturnValue(false)
    expect(() => validateItems(data, type)).toThrow()
  })

  test('Invalid UUID throws an error', () => {
    isUuidValid.mockReturnValue(false)
    expect(() => validateItems(data, type)).toThrow()
  })
})
