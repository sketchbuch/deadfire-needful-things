export interface GameConditional {
  Components: []
  Operator: 0 | 1
}

export interface GameDataBundle {
  GameDataObjects: [
    {
      $type: string
      DebugName: string
      Components: GameDataComponent[]
      ID: string
    }
  ]
}

export interface GameDataComponent {
  $type: string
  Conditional: GameConditional
  Items: GameItem[]
  OutputChance: number
  OutputMode: 'All' | 'OneRandom'
}

export interface GameItem {
  Conditional: GameConditional
  ItemID: string
  LockedVisible: 'false' | 'true'
  LootListID: Uuid
  MaxCount: number
  MinCount: number
  OutputChance: number
  Weight: number
}

export type GameData = GameDataItem[]

export interface GameDataItem {
  item?: Partial<GameItem>
  label: string
  url: string
  uuid: string
}

export type Uuid = string

export const gameDataBundle: GameDataBundle = {
  GameDataObjects: [
    {
      $type: 'Game.GameData.LootListGameData, Assembly-CSharp',
      DebugName: '',
      ID: '',
      Components: [
        {
          $type: 'Game.GameData.LootListComponent, Assembly-CSharp',
          Conditional: {
            Components: [],
            Operator: 0,
          },
          Items: [],
          OutputChance: 1,
          OutputMode: 'All',
        },
      ],
    },
  ],
}

export const gameItem: GameItem = {
  Conditional: {
    Components: [],
    Operator: 0,
  },
  ItemID: '',
  LockedVisible: 'false',
  LootListID: '00000000-0000-0000-0000-000000000000',
  MaxCount: 1,
  MinCount: 1,
  OutputChance: 1,
  Weight: 1,
}
