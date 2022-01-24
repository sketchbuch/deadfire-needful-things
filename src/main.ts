import { GameData, Uuid } from './bundles/gamedatabundle'
import { generateBundles } from './bundles/generateBundles'
import { armour } from './data/armour'
import { items } from './data/items'
import { shields } from './data/shields'
import { weapons } from './data/weapons'
import { packageExtension } from './fs/packageExtension'

interface Bundle {
  data: GameData
  label: string // To help identify the Merchant, not included in bundle output
  merchant: string
  merchantUuid: Uuid
  type: BundleType
}

export type BundleType = 'armour' | 'items' | 'shields' | 'weapons'

export type Bundles = Bundle[]

const { NODE_ENV, npm_package_version: version } = process.env
const isProduction = NODE_ENV === 'production'
const outputDir = 'dist'

const bundleList: Bundles = [
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

/**
 * Supplies! Get your Supplies!
 */

generateBundles(bundleList, isProduction, outputDir)

if (isProduction) {
  packageExtension(outputDir, version)
}
