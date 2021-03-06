import { GameData } from '../bundles/gamedatabundle'

const smallShields: GameData = [
  {
    label: "The Weyc's Oracular Focus",
    uuid: '01c88e8e-95a1-4273-af07-5bcc2723eab2',
  },
  {
    label: 'The Best Defense',
    uuid: 'a7c3fd20-97b2-4a98-8c2f-21fa08cbedfd',
  },
]
const mediumShields: GameData = [
  {
    label: 'Mundane Shell',
    uuid: 'c856724f-041f-44ea-a3ec-4546d35ef5b3',
  },
  {
    label: "Nerian's Ward",
    uuid: '784b6ce3-f19d-4f98-9d94-76808aee54a7',
  },
]

const largeShields: GameData = [
  {
    label: "Akola's Apex Ward",
    uuid: '8ea39d80-89ca-4c6b-a46e-e516b0c15757',
  },
  {
    label: "Bronlar's Phalanx",
    uuid: 'b375016e-a6d4-4e1e-b57f-578b7131a8c0',
  },
  {
    label: 'Wintertide Bulwark',
    uuid: '8f620341-704f-4dbf-8ec8-dcd9d61b3411',
  },
  {
    label: 'Cadhu Scalth',
    uuid: '31167607-7bfd-417c-8dd6-d1808e4e2bb9',
  },
  {
    label: 'Shining Bulwark',
    uuid: '1eca5bb1-d249-4bd5-b541-12d298562a22',
  },
]

export const shields: GameData = [...smallShields, ...mediumShields, ...largeShields]
