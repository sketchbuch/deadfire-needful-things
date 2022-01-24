/**
 * This script will validate that all UUIDs are correctly formed.
 * Run only when there is a build directory.
 * This will not check that the UUIDs actually exist in Deadfire or that they point to an item.
 */

import { armour } from '../data/armour'
import { items } from '../data/items'
import { shields } from '../data/shields'
import { weapons } from '../data/weapons'
import { bundleList, BundleType } from '../main'
import { GameData } from './gamedatabundle'

// https://gist.github.com/bugventure/f71337e3927c34132b9a
const uuidV4Regex = /^[A-F\d]{8}-[A-F\d]{4}-4[A-F\d]{3}-[89AB][A-F\d]{3}-[A-F\d]{12}$/i

const validateUuids = (data: GameData, type: BundleType) => {
  data.forEach((i) => {
    if (!uuidV4Regex.test(i.uuid)) {
      throw new Error(`${type} data contains an invalid UUID for "${i.label}"`)
    }
  })
}

try {
  validateUuids(armour, 'armour')
  validateUuids(items, 'items')
  validateUuids(shields, 'shields')
  validateUuids(weapons, 'weapons')

  bundleList.forEach((i) => {
    if (!uuidV4Regex.test(i.merchantUuid)) {
      throw new Error(`bundleList data contains an invalid UUID for "${i.label}"`)
    }
  })

  console.info('Validation of UUIDs was successful!')
} catch (error) {
  throw error
}
