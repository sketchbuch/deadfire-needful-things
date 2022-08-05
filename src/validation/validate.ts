/**
 * This script will validate that all UUIDs are correctly formed and that all URLs are the correct type.
 * Run only when there is a build directory.
 * This will not check that the UUIDs actually exist in Deadfire or that they point to an item/vendor.
 */

import { bundles } from '../bundles/bundles'
import { validateBundles } from './validateBundles'
import { validateItems } from './validateItems'

try {
  bundles.forEach(({ data, type }) => {
    validateItems(data, type)
  })
  console.info('Validation of items was successful!')

  validateBundles(bundles)
  console.info('Validation of bundles was successful!')
} catch (error) {
  throw error
}
