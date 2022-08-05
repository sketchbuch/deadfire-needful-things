import { Bundles } from '../bundles/bundles'
import { isUrlValid } from './isUrlValid'
import { isUuidValid } from './isUuidValid'

export const validateBundles = (bundles: Bundles) => {
  bundles.forEach(({ label, merchantUuid, url }) => {
    if (!isUuidValid(merchantUuid)) {
      throw new Error(`bundles data contains an invalid UUID for "${label}"`)
    } else if (!isUrlValid(url)) {
      throw new Error(`bundles data contains an invalid URL for "${label}"`)
    }
  })
}
