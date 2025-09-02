import { describe, it, expect } from '@jest/globals'
import { isValidDomain } from './validation'

describe('validation', () => {
  it('validates domain syntax', () => {
    expect(isValidDomain('example.com')).toBe(true)
    expect(isValidDomain('corp.com.br')).toBe(true)
    expect(isValidDomain('-bad.com')).toBe(false)
    expect(isValidDomain('bad.')).toBe(false)
  })
})

