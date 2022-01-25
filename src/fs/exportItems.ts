import * as fs from 'fs'
import * as path from 'path'
import { GameData } from '../bundles/gamedatabundle'
import { armour } from '../data/armour'
import { items } from '../data/items'
import { shields } from '../data/shields'
import { weapons } from '../data/weapons'
import { BundleType } from '../main'

interface DataLists {
  data: GameData
  label: string
  type: BundleType
}

/**
 * This will export a list of all items by type so that they can be used in the readme, the Steam Workshop, Nexus Mods etc.
 * The lists will be saved under "build"
 */
const dataLists: DataLists[] = [
  {
    data: armour,
    label: 'Armour',
    type: 'armour',
  },
  {
    data: items,
    label: 'Items',
    type: 'items',
  },
  {
    data: shields,
    label: 'Shields',
    type: 'shields',
  },
  {
    data: weapons,
    label: 'Weapons',
    type: 'weapons',
  },
]

dataLists.forEach((list) => {
  const { label, data, type } = list
  const items = data.map((i) => i.label)
  const content = `${label}
===

${items.sort().join('\n')}

As list:

* ${items.sort().join('\n* ')}`

  const filePath = path.join('build', `list_${type}.txt`)
  fs.writeFileSync(filePath, content)
})
