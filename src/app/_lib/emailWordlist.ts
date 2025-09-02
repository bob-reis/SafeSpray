export type EmailWordlistInput = {
  firstName?: string
  nickname?: string
  middleName?: string
  middleInitial?: string
  lastName?: string
  maidenName?: string
  knownUsernames?: string[]
  birthDate?: string // dd/mm/aaaa
  extraYearOrNumber?: string
  providers?: string[] // e.g., ['gmail.com','hotmail.com']
  customDomains?: string[] // e.g., ['empresa.com', 'corp.com.br']
  fatherName?: string
  petNames?: string[]
  childrenNames?: string[]
  spouseName?: string
  favoriteTeam?: string
}

const MAX_EMAILS = 5000
const MAX_PASSWORDS = 20000
const MAX_USERNAMES = 5000
const PREVIEW_LIMIT = 50

export const limits = { MAX_EMAILS, MAX_PASSWORDS, MAX_USERNAMES, PREVIEW_LIMIT }

// Basic normalization: remove diacritics and non-ascii, collapse spaces
export function normalize(str: string | undefined, lower = true): string {
  if (!str) return ''
  const s = str
    .normalize('NFD')
    // Remove combining diacritics (ES5-safe)
    .replace(/[\u0300-\u036f]/g, '')
    // Keep only safe ASCII letters/numbers and common symbols
    .replace(/[^A-Za-z0-9\s\-_.]/g, '')
    .trim()
  return lower ? s.toLowerCase() : s
}

function initial(s: string): string {
  return s ? s[0] : ''
}

function uniqueLimited(list: string[], max: number): string[] {
  const out: string[] = []
  const seen = new Set<string>()
  for (const item of list) {
    if (!item) continue
    if (!seen.has(item)) {
      seen.add(item)
      out.push(item)
      if (out.length >= max) break
    }
  }
  return out
}

export function generateEmails(input: EmailWordlistInput): string[] {
  const handles = buildHandles(input)

  const hasExplicit = Array.isArray(input.providers) || Array.isArray(input.customDomains)
  const baseProviders = hasExplicit ? (input.providers || []) : ['gmail.com','hotmail.com','yahoo.com']
  const providers = [
    ...baseProviders,
    ...(input.customDomains || []),
  ].map(p => normalize(p)).filter(Boolean)

  const emails: string[] = []
  for (let i = 0; i < handles.length && emails.length < MAX_EMAILS; i++) {
    const h = handles[i]
    for (let j = 0; j < providers.length && emails.length < MAX_EMAILS; j++) {
      const p = providers[j]
      emails.push(`${h}@${p}`)
    }
  }
  return uniqueLimited(emails, MAX_EMAILS)
}

// Wordlist generation rules (conservative subset per spec)
const leetMap: Record<string, string> = { a: '4', e: '3', i: '1', o: '0', s: '5', t: '7' }

function leetAll(s: string): string {
  return s.replace(/[aeiost]/g, c => leetMap[c] || c)
}

// Generate a limited set of leet variants to avoid explosion:
// - original string
// - replace first occurrence for each eligible char (e, a, i, o, s, t)
// - replace all eligible chars
function leetVariants(s: string): string[] {
  const lower = s.toLowerCase()
  const out = new Set<string>()
  out.add(lower)

  const seen = new Set<string>()
  for (const ch of lower) {
    const key = ch
    if (!leetMap[key]) continue
    if (seen.has(key)) continue
    seen.add(key)
    // replace first occurrence only
    const idx = lower.indexOf(ch)
    if (idx >= 0) {
      const v = lower.slice(0, idx) + leetMap[key] + lower.slice(idx + 1)
      out.add(v)
    }
  }

  out.add(leetAll(lower))
  return Array.from(out)
}

function caseVariants(s: string): string[] {
  const lower = s.toLowerCase()
  const title = lower.charAt(0).toUpperCase() + lower.slice(1)
  const upper = s.toUpperCase()
  return [lower, title, upper]
}

function yearCandidates(birthDate?: string, extra?: string): string[] {
  const years: string[] = []
  const now = new Date().getFullYear()
  if (birthDate) {
    const m = /(\d{2})\/(\d{2})\/(\d{4})/.exec(birthDate)
    if (m) {
      years.push(m[3])
      years.push(m[3].slice(2))
    }
  }
  // current year + two previous
  years.push(String(now))
  years.push(String(now - 1))
  years.push(String(now - 2))
  if (extra) {
    // Accept multiple numbers separated by any non-digit separator
    const tokens = extra.split(/[^0-9]+/).map(t => t.trim()).filter(Boolean)
    for (const t of tokens) {
      if (t.length >= 1 && t.length <= 6) years.push(t)
    }
  }
  return Array.from(new Set(years.filter(Boolean)))
}

function pushBaseCombos(base: string, years: string[], out: string[]) {
  for (const y of years) {
    out.push(`${base}${y}`)
    out.push(`${base}${y}!`)
    out.push(`${base}!${y}`)
  }
  out.push(`${base}123`)
  out.push(`${base}@123`)
  out.push(`${base}!`)
}

function expandSeed(seed: string, years: string[], out: string[]) {
  for (const variant of caseVariants(seed)) {
    const maybe = leetVariants(variant)
    for (const base of maybe) {
      pushBaseCombos(base, years, out)
    }
  }
}

function pushTeamCombos(team: string, years: string[], out: string[]) {
  for (const y of years) {
    out.push(`${team}${y}`)
    out.push(`${team}!${y}`)
    out.push(`${team}${y}!`)
    out.push(`${team}campeao`)
    out.push(`${team}campeao${y}`)
  }
  out.push(`${team}123`)
  out.push(`${team}!`)
}

function meetsPolicy(pw: string): boolean {
  if (pw.length < 6 || pw.length > 20) return false
  if (!/[A-Za-z]/.test(pw)) return false
  if (!/\d/.test(pw)) return false
  return true
}

export function generateWordlist(input: EmailWordlistInput): string[] {
  const seeds = [
    normalize(input.firstName, false),
    normalize(input.lastName, false),
    normalize(input.nickname, false),
    normalize(input.middleName, false),
    normalize(input.maidenName, false),
    ...(input.knownUsernames || []).map(u => normalize(u, false)),
    normalize(input.fatherName, false),
    normalize(input.spouseName, false),
    ...(input.petNames || []).map(n => normalize(n, false)),
    ...(input.childrenNames || []).map(n => normalize(n, false)),
    'admin',
    'senha',
    'empresa',
    'ti',
    'root',
    // keyboard walks
    'qwerty',
    'asdf',
    'asdfgh',
    'zxcvbn',
    '1q2w3e4r',
    'q1w2e3',
    '123',
    '1234',
    // English generics
    'password', 'welcome', 'admin', 'guest',
    'password1', 'admin123',
    // Affection/relationship
    'iloveyou', 'princess', 'angel', 'sunshine',
    // Religious terms (varied case; caseVariants will expand further)
    'Jesus', 'jesus', 'Cristo', 'cristo', 'god', 'allah', 'deus', 'Deus',
  ].filter(Boolean)

  const years = yearCandidates(input.birthDate, input.extraYearOrNumber)
  const out: string[] = []

  // Favorite team guesses if not provided
  const teams = (input.favoriteTeam ? [normalize(input.favoriteTeam)] : ['flamengo','corinthians','palmeiras','saopaulo'])
    .filter(Boolean)

  for (const seed of seeds) {
    expandSeed(seed, years, out)
    if (out.length > MAX_PASSWORDS * 2) break
  }

  // Team-based combos
  for (const team of teams) {
    pushTeamCombos(team, years, out)
  }

  const filtered = uniqueLimited(
    out.filter(meetsPolicy),
    MAX_PASSWORDS
  )
  // Always include these top common passwords (bypass policy)
  const ALWAYS_INCLUDE = [
    '123456','123456789','qwerty','password','12345','12345678','111111','123123','1234567890','iloveyou','1234','1q2w3e4r','000000','qwerty123','abc123','password1','123321','qwertyuiop','monkey','dragon','654321','superman','azerty','football','baseball','welcome','admin','princess','letmein','sunshine','flower','shadow','hottie','lovely','7777777','loveme','zaq12wsx','password123','jesus','blink182','jordan23','harley','pokemon','charlie','michael','michelle','daniel','ashley','jessica','pepper','hunter','cookie','naruto','summer','tigger','computer','whatever','donald','freedom','soccer','football1','passw0rd','hello','welcome1','starwars','dragon123','pokemon1','naruto123','fuckyou','love','cheese','internet','killer','ginger','thomas','george','snoopy','secret','bailey','master','hannah','maggie','samsung','silver','bitch','fuckyou1','mustang','jordan','liverpool','batman','andrew','buster','soccer123','jennifer','joshua','love123','robert','matthew','ashley1','nicole','banana','ginger1','pepper1','iloveyou1','fluffy'
  ]
  // Ensure final list respects policy for every entry
  const alwaysPolicyCompliant = ALWAYS_INCLUDE.filter(meetsPolicy)
  return uniqueLimited([...filtered, ...alwaysPolicyCompliant], MAX_PASSWORDS)
}

export function preview<T>(list: T[], limit = PREVIEW_LIMIT): T[] {
  return list.slice(0, limit)
}

export function generateUsernames(input: EmailWordlistInput): string[] {
  return uniqueLimited(buildHandles(input), MAX_USERNAMES)
}

function buildHandles(input: EmailWordlistInput): string[] {
  const first = normalize(input.firstName)
  const nick = normalize(input.nickname)
  const middle = normalize(input.middleName)
  const mid = normalize(input.middleInitial)
  const last = normalize(input.lastName)
  const users = (input.knownUsernames || []).map(u => normalize(u)).filter(Boolean)

  const f = initial(first)
  const l = initial(last)

  const handles: string[] = []
  const push = (h?: string) => h && handles.push(h)

  push(`${first}.${last}`)
  push(`${f}${last}`)
  push(`${first}${l}`)
  push(`${first}-${last}`)
  push(`${first}_${last}`)
  push(`${last}${f}`)
  push(`${f}.${last}`)
  push(`${first}${last}`.slice(0, 16))
  if (nick) push(nick)
  if (middle) {
    push(`${first}.${middle}.${last}`)
    push(`${first}${middle}${last}`.slice(0, 16))
  }
  if (mid) push(`${first}${mid}.${last}`)
  users.forEach(u => push(u))
  return handles
}
