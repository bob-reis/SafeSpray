import { describe, it, expect } from '@jest/globals'
import { normalize, generateEmails, generateUsernames, generateWordlist, preview, limits } from './emailWordlist'

describe('emailWordlist lib', () => {
  it('normalize removes diacritics and symbols', () => {
    expect(normalize('José da-Silva_99')).toBe('jose da-silva_99')
  })

  it('generateUsernames builds common handles', () => {
    const out = generateUsernames({ firstName: 'Alice', lastName: 'Smith', middleInitial: 'B' })
    expect(out).toEqual(expect.arrayContaining(['alice.smith', 'a.smith', 'alice_smith']))
  })

  it('generateUsernames slices long combined handle to 16 chars', () => {
    const out = generateUsernames({ firstName: 'abcdefghijklmnop', lastName: 'zzzz' })
    expect(out).toEqual(expect.arrayContaining(['abcdefghijklmnop']))
  })

  it('generateEmails combines handles with providers', () => {
    const emails = generateEmails({ firstName: 'Bob', lastName: 'Reis', providers: ['example.com'] })
    expect(emails[0]).toBe('bob.reis@example.com')
  })

  it('generateWordlist enforces policy and limits', () => {
    const pw = generateWordlist({ firstName: 'Alice', lastName: 'Smith', birthDate: '01/01/1990' })
    expect(pw.length).toBeLessThanOrEqual(limits.MAX_PASSWORDS)
    // all passwords must have letters and digits and length 6-20
    expect(pw.every(p => /[A-Za-z]/.test(p) && /\d/.test(p) && p.length >= 6 && p.length <= 20)).toBe(true)
  })

  it('generateWordlist includes favorite team combos when provided', () => {
    const out = generateWordlist({ favoriteTeam: 'Wolves', birthDate: '10/10/2010' })
    const joined = out.join(' ')
    expect(joined).toMatch(/wolves\d{2,4}/)
  })

  it('generateWordlist includes common passwords list (policy-compliant)', () => {
    const out = generateWordlist({})
    expect(out).toEqual(expect.arrayContaining(['password1']))
  })

  it('preview returns at most limit items', () => {
    const src = Array.from({ length: 100 }, (_, i) => String(i))
    expect(preview(src, 10)).toHaveLength(10)
  })
})
