export interface GameConditional {
  Components: []
  Operator: 0 | 1
}

export interface GameDataBundle {
  GameDataObjects: [
    {
      $type: String
      DebugName: String
      Components: GameDataComponent[]
      ID: String
    }
  ]
}

export interface GameDataComponent {
  $type: String
  Conditional: GameConditional
  Items: GameItem[]
  OutputChance: Number
  OutputMode: 'All' | 'OneRandom'
}

export interface GameItem {
  Conditional: GameConditional
  ItemID: String
  LockedVisible: 'false' | 'true'
  LootListID: Uuid
  MaxCount: Number
  MinCount: Number
  OutputChance: Number
  Weight: Number
}

export type GameData = GameDataItem[]

export interface GameDataItem {
  item?: Partial<GameItem>
  label: String
  uuid: String
}

export type Uuid = String

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
