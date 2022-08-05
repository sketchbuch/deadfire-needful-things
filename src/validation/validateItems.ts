import { BundleType } from '../bundles/bundles'
import { GameData } from '../bundles/gamedata'
import { isUrlValid } from './isUrlValid'
import { isUuidValid } from './isUuidValid'

export const validateItems = (items: GameData, type: BundleType) => {
  items.forEach(({ label, uuid, url }) => {
    if (!isUuidValid(uuid)) {
      throw new Error(`${type} data contains an invalid UUID for "${label}"`)
    } else if (!isUrlValid(url)) {
      throw new Error(`${type} data contains an invalid URL for "${label}"`)
    }
  })
}
