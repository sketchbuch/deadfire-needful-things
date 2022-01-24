import * as path from 'path'
import zipper from 'zip-local'

export const packageExtension = (outputDir: string, version) => {
  zipper.sync
    .zip(outputDir)
    .compress()
    .save(path.join(outputDir, `needful_things_v${version}.zip`))
}
