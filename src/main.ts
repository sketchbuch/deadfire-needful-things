import * as fs from 'fs'
import { armour } from './data/armour'
import { GameData, GameDataBundle, gameDataBundle, gameItem } from './data/gamedatabundle'
import { items } from './data/items'
import { shields } from './data/shields'
import { weapons } from './data/weapons'

type BundleType = 'armour' | 'items' | 'shields' | 'weapons'

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

    writeGameDataBundle(bundle, 'armour')
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

    writeGameDataBundle(bundle, 'items')
  }
}

const generateShields = () => {
  const merchant = 'Store_09_PM_Tavern_Regen'
  const merchantUuid = '2b57b471-18fa-471c-b00b-098c0c6831fa'

  if (weapons.length) {
    const bundle = {
      ...gameDataBundle,
    }
    bundle.GameDataObjects[0].Components[0].Items = getMerchantItems(shields)
    bundle.GameDataObjects[0].DebugName = merchant
    bundle.GameDataObjects[0].ID = merchantUuid

    writeGameDataBundle(bundle, 'shields')
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

    writeGameDataBundle(bundle, 'weapons')
  }
}

const getMerchantItems = (gameData: GameData) => {
  return gameData.map((data) => {
    const { uuid, item } = data

    return {
      ...gameItem,
      ItemID: uuid,
      ...(item ? item : {}),
    }
  })
}

const writeGameDataBundle = (bundle: GameDataBundle, type: BundleType) => {
  const basePath = process.env.NODE_ENV === 'test' ? 'build' : 'dist/design/gamedata'
  fs.writeFileSync(`${basePath}/needfullthings.${type}.gamedatabundle`, JSON.stringify(bundle))
}

generateArmour()
generateItems()
generateShields()
generateWeapons()
