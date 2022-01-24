import * as fs from '../fs/saveGameDataBundle'
import { mockBundleList } from '../tests/mocks'
import { generateBundles } from './generateBundles'
import * as bundles from './getMerchantItems'

describe('generateBundles()', () => {
  const OUTPUT_DIR = 'dist'

  test('Generates bundles as expected', () => {
    const merchant = jest.spyOn(bundles, 'getMerchantItems')
    const save = jest.spyOn(fs, 'saveGameDataBundle')
    const bundleData = mockBundleList[0]

    generateBundles(mockBundleList, false, OUTPUT_DIR)

    expect(merchant).toHaveBeenCalledTimes(1)
    expect(merchant).toHaveBeenCalledWith(bundleData.data)

    expect(save).toHaveBeenCalledTimes(1)
    const saveArgs = save.mock.calls[0]
    expect(saveArgs[0].GameDataObjects[0].DebugName).toBe(bundleData.merchant)
    expect(saveArgs[0].GameDataObjects[0].ID).toBe(bundleData.merchantUuid)
    expect(saveArgs[1]).toBe(bundleData.type)
    expect(saveArgs[2]).toBe(false)
    expect(saveArgs[3]).toBe(OUTPUT_DIR)

    merchant.mockReset()
    save.mockReset()
  })
})
