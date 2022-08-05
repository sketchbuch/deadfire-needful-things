import { armour } from '../data/armour'
import { grimoires } from '../data/grimoires'
import { items } from '../data/items'
import { shields } from '../data/shields'
import { weapons } from '../data/weapons'
import { GameData, Uuid } from './gamedata'

interface Bundle {
  data: GameData
  label: string // To help identify the Merchant, not included in bundle output
  merchant: string
  merchantUuid: Uuid
  type: BundleType
  url: string
}

export type Bundles = Bundle[]

export type BundleType = 'armour' | 'grimoires' | 'items' | 'shields' | 'weapons'

export const bundles: Bundles = [
  {
    data: armour,
    label: "Wanika (Queen's Berth)",
    merchant: 'Store_03_Armorer',
    merchantUuid: '7f592fb9-e4c2-4091-a68c-3631e303640f',
    type: 'armour',
    url: 'https://pillarsofeternity.fandom.com/wiki/Wanika',
  },
  {
    data: grimoires,
    label: "Emaita (Periki's Overlook)",
    merchant: 'Store_07_Animancers',
    merchantUuid: 'e886c4c5-5eac-4917-9f8d-12bd6e6e11e7',
    type: 'grimoires',
    url: 'https://pillarsofeternity.fandom.com/wiki/Emaita',
  },
  {
    data: items,
    label: 'Tiabo (Sacred Stair)',
    merchant: 'Store_07_Animancers',
    merchantUuid: 'e886c4c5-5eac-4917-9f8d-12bd6e6e11e7',
    type: 'items',
    url: 'https://pillarsofeternity.fandom.com/wiki/Tiabo',
  },
  {
    data: shields,
    label: 'Orlan Peddler (Brass Citadel)',
    merchant: 'Store_08_Orlan_Peddler',
    merchantUuid: '1eea934a-679d-43d8-b24a-6de7ca23371e',
    type: 'shields',
    url: 'https://pillarsofeternity.fandom.com/wiki/Orlan_peddler',
  },
  {
    data: weapons,
    label: "Marihi (Periki's Overlook)",
    merchant: 'Store_05_AD_Marihi',
    merchantUuid: '7f072d26-8d4a-4033-bddc-ecb4128d2e97',
    type: 'weapons',
    url: 'https://pillarsofeternity.fandom.com/wiki/Marihi',
  },
]