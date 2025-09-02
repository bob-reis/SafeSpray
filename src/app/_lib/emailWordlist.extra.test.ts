import { describe, it, expect } from '@jest/globals'
import { generateUsernames, generateEmails, generateWordlist, normalize } from './emailWordlist'

describe('emailWordlist (extra coverage)', () => {
  it('usernames include middle name and initial patterns', () => {
    const users = generateUsernames({ firstName: 'Carol', middleName: 'Ann', middleInitial: 'A', lastName: 'Jones' })
    expect(users).toEqual(expect.arrayContaining(['carol.ann.jones', 'carola.jones', 'c.jones']))
  })

  it('emails include custom domains together with providers', () => {
    const emails = generateEmails({ firstName: 'Dan', lastName: 'Lee', providers: ['example.com'], customDomains: ['corp.com'] })
    const sample = emails.slice(0, 5).join(' ')
    expect(sample).toMatch(/dan\.lee@example\.com/)
    expect(sample).toMatch(/dan\.lee@corp\.com/)
  })

  it('wordlist incorporates spouse name and year combos', () => {
    const out = generateWordlist({ spouseName: 'Alex', birthDate: '02/03/1991' })
    const joined = out.join(' ')
    expect(joined).toMatch(/alex1991/)
    expect(joined).toMatch(/alex!1991/)
  })

  it('normalize supports keeping case when requested', () => {
    expect(normalize('Älîçé', false)).toBe('Alice')
  })
})

