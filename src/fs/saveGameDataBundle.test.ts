import * as fs from 'fs'
import * as path from 'path'
import { mockGameDataBundle } from '../tests/mocks'
import { saveGameDataBundle } from './saveGameDataBundle'

jest.mock('fs', () => {
  const actual = jest.requireActual('fs')

  return {
    ...actual,
    writeFileSync: jest.fn((filePath: string, fileContent: string) => {}),
  }
})

describe('saveGameDataBundle()', () => {
  const OUTPUT_DIR = 'dist'
  const TYPE = 'armour'
  const { sep } = path

  test('Calls writeFileSync correctly for production', () => {
    const spy = jest.spyOn(fs, 'writeFileSync')
    saveGameDataBundle(mockGameDataBundle, TYPE, true, OUTPUT_DIR)

    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith(
      `${OUTPUT_DIR}${sep}Needful Things${sep}design${sep}gamedata${sep}needfullthings_${TYPE}.gamedatabundle`,
      JSON.stringify(mockGameDataBundle)
    )

    spy.mockReset()
  })

  test('Calls writeFileSync correctly for test', () => {
    const spy = jest.spyOn(fs, 'writeFileSync')
    saveGameDataBundle(mockGameDataBundle, TYPE, false, OUTPUT_DIR)

    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith(
      `build${sep}needfullthings_${TYPE}.gamedatabundle`,
      JSON.stringify(mockGameDataBundle, null, 2)
    )

    spy.mockReset()
  })
})
