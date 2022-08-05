import { mockData } from '../tests/mocks'
import { getMerchantItems } from './getMerchantItems'

describe('getMerchantItems()', () => {
  test('Items have the correct shape', () => {
    const result = getMerchantItems(mockData)

    expect(result).toHaveLength(2)
    expect(JSON.stringify(result)).toMatchSnapshot()
  })

  test('Items have their IDs correctly set', () => {
    const result = getMerchantItems(mockData)

    expect(result[0].ItemID).toBe(mockData[0].uuid)
    expect(result[1].ItemID).toBe(mockData[1].uuid)
  })

  test('Item properties can be over-ridden', () => {
    const result = getMerchantItems(mockData)

    if (mockData[1].item) {
      expect(result[1].LootListID).toBe(mockData[1].item.LootListID)
    }
  })
})
