import manifest from '../static/Needful Things/manifest.json'
import { bundles } from './bundles/bundles'
import { generateBundles } from './bundles/generateBundles'
import { packageExtension } from './fs/packageExtension'

const isProduction = process.env.NODE_ENV === 'production'
const outputDir = 'dist'

/**
 * Supplies! Get your supplies here!
 */

generateBundles(bundles, isProduction, outputDir)

if (isProduction) {
  packageExtension(outputDir, manifest.ModVersion)
}
