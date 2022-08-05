import * as fs from 'fs'
import * as path from 'path'
import { BundleType } from '../bundles/bundles'
import { GameDataBundle } from '../bundles/gamedata'

export const saveGameDataBundle = (
  bundle: GameDataBundle,
  type: BundleType,
  isProduction: boolean,
  outputDir: string
) => {
  const bundleOutputDir = isProduction
    ? path.join(outputDir, 'Needful Things', 'design', 'gamedata')
    : 'build'
  const fileContent = isProduction ? JSON.stringify(bundle) : JSON.stringify(bundle, null, 2)
  const filePath = path.join(bundleOutputDir, `needfullthings_${type}.bundgamedata`)

  fs.writeFileSync(filePath, fileContent)
}
