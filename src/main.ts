import * as fs from 'fs'
import * as path from 'path'
import zipper from 'zip-local'
import { armour } from './data/armour'
import type { GameData, GameDataBundle, Uuid } from './data/gamedatabundle'
import { gameDataBundle, gameItem } from './data/gamedatabundle'
import { items } from './data/items'
import { shields } from './data/shields'
import { weapons } from './data/weapons'

interface Bundle {
  data: GameData
  label: String // To help identify the Merchant, not included in bundle output
  merchant: String
  merchantUuid: Uuid
  type: BundleType
}

type BundleType = 'armour' | 'items' | 'shields' | 'weapons'

type Bundles = Bundle[]

const { NODE_ENV, npm_package_version: version } = process.env
const isProduction = NODE_ENV === 'production'
const outputDir = 'dist'
const bundleOutputDir = isProduction
  ? path.join(outputDir, 'Needful Things', 'design', 'gamedata')
  : 'build'

const bundles: Bundles = [
  {
    data: armour,
    label: "Wanika (Queen's Berth)",
    merchant: 'Store_03_Armorer',
    merchantUuid: '7f592fb9-e4c2-4091-a68c-3631e303640f',
    type: 'armour',
  },
  {
    data: items,
    label: 'Tiabo (Sacred Stair)',
    merchant: 'Store_07_Animancers',
    merchantUuid: 'e886c4c5-5eac-4917-9f8d-12bd6e6e11e7',
    type: 'items',
  },
  {
    data: shields,
    label: 'Orlan Peddler (Brass Citadel)',
    merchant: 'Store_08_Orlan_Peddler',
    merchantUuid: '1eea934a-679d-43d8-b24a-6de7ca23371e',
    type: 'shields',
  },
  {
    data: weapons,
    label: "Marihi (Periki's Overlook)",
    merchant: 'Store_05_AD_Marihi',
    merchantUuid: '7f072d26-8d4a-4033-bddc-ecb4128d2e97',
    type: 'weapons',
  },
]

const generateBundles = () => {
  bundles.forEach((bundle) => {
    const { data, merchant, merchantUuid, type } = bundle

    if (data.length) {
      const bundle = {
        ...gameDataBundle,
      }
      bundle.GameDataObjects[0].Components[0].Items = getMerchantItems(data)
      bundle.GameDataObjects[0].DebugName = merchant
      bundle.GameDataObjects[0].ID = merchantUuid

      saveGameDataBundle(bundle, type)
    }
  })
}

const getMerchantItems = (gameData: GameData) => {
  return gameData.map((data) => {
    const { uuid, item } = data

    return {
      ...gameItem,
      ...(item ? item : {}),
      ItemID: uuid,
    }
  })
}

const packageExtension = () => {
  zipper.sync
    .zip(outputDir)
    .compress()
    .save(path.join(outputDir, `needful_things_v${version}.zip`))
}

const saveGameDataBundle = (bundle: GameDataBundle, type: BundleType) => {
  const fileContent = isProduction ? JSON.stringify(bundle) : JSON.stringify(bundle, null, 2)
  const filePath = path.join(bundleOutputDir, `needfullthings_${type}.gamedatabundle`)

  fs.writeFileSync(filePath, fileContent)
}

/**
 * Supplies! Get your Supplies!
 */

generateBundles()

if (isProduction) {
  packageExtension()
}
