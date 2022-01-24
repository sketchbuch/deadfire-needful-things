import { GameData, gameItem, GameItem } from './gamedatabundle'

export const getMerchantItems = (gameData: GameData) => {
  return gameData.map((data): GameItem => {
    const { uuid, item } = data

    return {
      ...gameItem,
      ...(item ? item : {}),
      ItemID: uuid,
    }
  })
}
