import * as fs from 'fs'
import * as path from 'path'
import zipper from 'zip-local'
import { armour } from './data/armour'
import type { GameData, GameDataBundle } from './data/gamedatabundle'
import { gameDataBundle, gameItem } from './data/gamedatabundle'
import { items } from './data/items'
import { shields } from './data/shields'
import { weapons } from './data/weapons'

type BundleType = 'armour' | 'items' | 'shields' | 'weapons'

const { NODE_ENV, npm_package_version: version } = process.env
const isProduction = NODE_ENV === 'production'
const outputDir = 'dist'
const bundleOutputDir = isProduction
  ? path.join(outputDir, 'Needful Things', 'design', 'gamedata')
  : 'build'

const generateArmour = () => {
  const merchant = 'Store_03_Armorer' // Wanika
  const merchantUuid = '7f592fb9-e4c2-4091-a68c-3631e303640f'

  if (armour.length) {
    const bundle = {
      ...gameDataBundle,
    }
    bundle.GameDataObjects[0].Components[0].Items = getMerchantItems(armour)
    bundle.GameDataObjects[0].DebugName = merchant
    bundle.GameDataObjects[0].ID = merchantUuid

    saveGameDataBundle(bundle, 'armour')
  }
}

const generateItems = () => {
  const merchant = 'Store_07_Animancers' // Tiabo
  const merchantUuid = 'e886c4c5-5eac-4917-9f8d-12bd6e6e11e7'

  if (items.length) {
    const bundle = {
      ...gameDataBundle,
    }
    bundle.GameDataObjects[0].Components[0].Items = getMerchantItems(items)
    bundle.GameDataObjects[0].DebugName = merchant
    bundle.GameDataObjects[0].ID = merchantUuid

    saveGameDataBundle(bundle, 'items')
  }
}

const generateShields = () => {
  const merchant = 'Store_08_Orlan_Peddler'
  const merchantUuid = '1eea934a-679d-43d8-b24a-6de7ca23371e'

  if (shields.length) {
    const bundle = {
      ...gameDataBundle,
    }
    bundle.GameDataObjects[0].Components[0].Items = getMerchantItems(shields)
    bundle.GameDataObjects[0].DebugName = merchant
    bundle.GameDataObjects[0].ID = merchantUuid

    saveGameDataBundle(bundle, 'shields')
  }
}

const generateWeapons = () => {
  const merchant = 'Store_05_AD_Marihi'
  const merchantUuid = '7f072d26-8d4a-4033-bddc-ecb4128d2e97'

  if (weapons.length) {
    const bundle = {
      ...gameDataBundle,
    }
    bundle.GameDataObjects[0].Components[0].Items = getMerchantItems(weapons)
    bundle.GameDataObjects[0].DebugName = merchant
    bundle.GameDataObjects[0].ID = merchantUuid

    saveGameDataBundle(bundle, 'weapons')
  }
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

generateArmour()
generateItems()
generateShields()
generateWeapons()

if (isProduction) {
  packageExtension()
}
