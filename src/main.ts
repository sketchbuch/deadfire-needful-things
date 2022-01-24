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
  const merchant = 'Store_09_PM_Tavern_Regen'
  const merchantUuid = '2b57b471-18fa-471c-b00b-098c0c6831fa'

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
  const merchant = 'Store_09_PM_Tavern_Regen'
  const merchantUuid = '2b57b471-18fa-471c-b00b-098c0c6831fa'

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
  const merchant = 'Store_09_PM_Tavern_Regen'
  const merchantUuid = '2b57b471-18fa-471c-b00b-098c0c6831fa'

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
  const merchant = 'Store_09_PM_Tavern_Regen'
  const merchantUuid = '2b57b471-18fa-471c-b00b-098c0c6831fa'

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
  fs.writeFileSync(
    path.join(bundleOutputDir, `needfullthings.${type}.gamedatabundle`),
    JSON.stringify(bundle)
  )
}

generateArmour()
generateItems()
generateShields()
generateWeapons()

if (isProduction) {
  packageExtension()
}
