import { saveGameDataBundle } from '../fs/saveGameDataBundle'
import { Bundles } from './bundles'
import { gameDataBundle } from './gamedata'
import { getMerchantItems } from './getMerchantItems'

export const generateBundles = (bundles: Bundles, isProduction: boolean, outputDir: string) => {
  bundles.forEach((bundle) => {
    const { data, merchant, merchantUuid, type } = bundle

    if (data.length) {
      const bundle = {
        ...gameDataBundle,
      }

      const dataObject = bundle.GameDataObjects[0]

      if (dataObject) {
        const lootList = dataObject.Components[0]

        if (lootList) {
          lootList.Items = getMerchantItems(data)
          dataObject.DebugName = merchant
          dataObject.ID = merchantUuid

          saveGameDataBundle(bundle, type, isProduction, outputDir)
        }
      }
    }
  })
}
