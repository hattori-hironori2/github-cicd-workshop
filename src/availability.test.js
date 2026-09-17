import { describe, expect, it } from 'vitest'
import { formatAvailability } from './availability.js'

describe('formatAvailability', () => {
  it('空席が4席以上なら通常の残席表示をする', () => {
    expect(formatAvailability(20, 12)).toBe('残り 8 席')
  })

  it('空席が1〜3席なら残席わずかと表示する', () => {
    expect(formatAvailability(10, 9)).toBe('残席わずか（残り 1 席）')
    expect(formatAvailability(10, 7)).toBe('残席わずか（残り 3 席）')
  })

  it('定員に達している場合は満席と表示する', () => {
    expect(formatAvailability(10, 10)).toBe('満席')
  })

  it('参加者数が定員を超えても負の空席数を表示しない', () => {
    expect(formatAvailability(10, 12)).toBe('満席')
  })
})
