import * as fs from 'fs'
import * as path from 'path'
import { GameDataBundle } from '../bundles/gamedatabundle'
import { BundleType } from '../main'

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
  const filePath = path.join(bundleOutputDir, `needfullthings_${type}.gamedatabundle`)

  fs.writeFileSync(filePath, fileContent)
}
