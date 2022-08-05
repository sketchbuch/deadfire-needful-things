import { capitalise } from './capitalise'

describe('capitalise()', () => {
  test('Capitalises correctly', () => {
    expect(capitalise('deadfire')).toBe('Deadfire')
  })
})
