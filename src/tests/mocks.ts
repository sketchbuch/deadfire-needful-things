import { Bundles } from '../bundles/bundles'
import { GameData, GameDataBundle } from '../bundles/gamedata'

export const mockData: GameData = [
  {
    label: 'Some Item',
    url: 'https://pillarsofeternity.fandom.com/wiki/Some_Item',
    uuid: '66f77403-092a-46be-a8b5-a4b4cd36e637',
  },
  {
    item: {
      LootListID: '11111111-2222-3333-4444-555555555555',
    },
    label: 'Another Item',
    url: 'https://pillarsofeternity.fandom.com/wiki/Another_Item',
    uuid: '4871decb-3312-4d46-8cf4-5e15e452d6ef',
  },
]

export const mockBundleList: Bundles = [
  {
    data: [...mockData],
    label: 'Test 1',
    merchant: 'Store_01',
    merchantUuid: '7f592fb9-e4c2-4091-a68c-3631e303640f',
    type: 'armour',
    url: 'https://pillarsofeternity.fandom.com/wiki/Test_1',
  },
]

export const mockGameDataBundle: GameDataBundle = {
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
          Items: [
            {
              Conditional: {
                Components: [],
                Operator: 0,
              },
              ItemID: mockData[0].uuid,
              LockedVisible: 'false',
              LootListID: '00000000-0000-0000-0000-000000000000',
              MaxCount: 1,
              MinCount: 1,
              OutputChance: 1,
              Weight: 1,
            },
            {
              Conditional: {
                Components: [],
                Operator: 0,
              },
              ItemID: mockData[1].uuid,
              LockedVisible: 'false',
              LootListID: mockData[1].item.LootListID,
              MaxCount: 1,
              MinCount: 1,
              OutputChance: 1,
              Weight: 1,
            },
          ],
          OutputChance: 1,
          OutputMode: 'All',
        },
      ],
    },
  ],
}
