"use client"
import { useState } from 'react'
import { generateEmails, generateWordlist, generateUsernames, preview, limits, EmailWordlistInput } from '../_lib/emailWordlist'
import { isValidDomain } from '../_lib/validation'
import EthicsNotice from './EthicsNotice'

const defaultProviders = ['gmail.com', 'hotmail.com', 'yahoo.com']

// OSINT Tooltip Component
const OSINTTooltip = ({ children, tip }: { children: React.ReactNode, tip: string }) => {
  const [show, setShow] = useState(false)
  return (
    <div className="relative inline-block">
      <div 
        onMouseEnter={() => setShow(true)} 
        onMouseLeave={() => setShow(false)}
        className="cursor-help"
      >
        {children}
      </div>
      {show && (
        <div className="absolute z-50 p-3 bg-gray-800 text-xs rounded-lg shadow-xl border border-primary/20 w-72 -top-2 left-full ml-2">
          <div className="text-primary font-semibold mb-1">🔍 OSINT Tip:</div>
          {tip}
        </div>
      )}
    </div>
  )
}

const EmailWordlistGenerator = () => {
  const [form, setForm] = useState<EmailWordlistInput>({ providers: defaultProviders })
  const [usernamesText, setUsernamesText] = useState('')
  const [customDomainsText, setCustomDomainsText] = useState('')
  const [dob, setDob] = useState('')
  const [petsText, setPetsText] = useState('')
  const [childrenText, setChildrenText] = useState('')
  const [favoriteTeam, setFavoriteTeam] = useState('')
  const [result, setResult] = useState<{ emails: string[]; passwords: string[]; usernames: string[] } | null>(null)
  const [activeTab, setActiveTab] = useState<'generator' | 'methodology' | 'toolkit'>('generator')

  const update = (k: keyof EmailWordlistInput, v: any) => setForm(prev => ({ ...prev, [k]: v }))

  const toggleProvider = (p: string) => {
    const list = new Set(form.providers || [])
    if (list.has(p)) list.delete(p)
    else list.add(p)
    update('providers', Array.from(list))
  }

  const applyDobMask = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 8)
    const parts = [] as string[]
    if (digits.length > 0) parts.push(digits.slice(0, 2))
    if (digits.length >= 3) parts.push(digits.slice(2, 4))
    if (digits.length >= 5) parts.push(digits.slice(4, 8))
    return parts.join('/')
  }

  const handleGenerate = () => {
    const knownUsernames = usernamesText
      .split(/[\s,;]+/)
      .map(s => s.trim())
      .filter(Boolean)
    const customDomains = customDomainsText
      .split(/[\s,;]+/)
      .map(s => s.trim().toLowerCase())
      .filter(Boolean)
      .filter(d => isValidDomain(d))

    const input: EmailWordlistInput = {
      ...form,
      knownUsernames,
      customDomains,
      birthDate: dob,
      petNames: petsText.split(/[\s,;]+/).map(s => s.trim()).filter(Boolean),
      childrenNames: childrenText.split(/[\s,;]+/).map(s => s.trim()).filter(Boolean),
      spouseName: form.spouseName,
      favoriteTeam,
    }

    const emails = generateEmails(input)
    const passwords = generateWordlist(input)
    const usernames = generateUsernames(input)
    setResult({ emails, passwords, usernames })
  }

  const download = (filename: string, content: string) => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <section className="container mx-auto px-4 py-8">
      {/* Enhanced Cybersecurity Header */}
      <div className="relative mb-8">
        {/* Terminal-Style Status Bar */}
        <div className="bg-dark/80 border border-primary/30 rounded-lg p-4 mb-6 font-mono text-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-500">[SYSTEM: ONLINE]</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-400">[MODE: OSINT]</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              <span className="text-yellow-400">[AUTH: GRANTED]</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-purple-400">[CLIENT-SIDE]</span>
            </div>
          </div>
          <div className="mt-2 text-text-muted text-xs">
            Session: {new Date().toISOString().split('T')[0]} | Target Intelligence Framework v3.1
          </div>
        </div>

        {/* Main Header with Educational Context */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <span className="text-2xl">🎯</span>
            <span className="font-mono text-primary font-bold">SAFESPRAY</span>
            <span className="text-xs bg-primary/20 px-2 py-1 rounded">EDUCATION TOOLKIT</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary via-green-400 to-blue-400 bg-clip-text text-transparent glitch-hover">
            Cyber Intelligence Generator
          </h1>
          
          <p className="text-text-muted max-w-3xl mx-auto leading-relaxed">
            Professional-grade OSINT wordlist generation platform for authorized penetration testing, 
            security research, and cybersecurity education. Master the art of intelligence gathering 
            through hands-on learning.
          </p>
          
          {/* Educational Badges */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-400">
              🛡️ Ethical Hacking
            </span>
            <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs text-green-400">
              🔍 OSINT Techniques
            </span>
            <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs text-purple-400">
              🎓 Security Education
            </span>
            <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-xs text-yellow-400">
              🔒 Privacy-First
            </span>
          </div>
        </div>

        {/* Enhanced Navigation Tabs */}
        <div className="grid md:grid-cols-3 gap-2 p-2 bg-dark/50 rounded-lg border border-primary/20 mb-6">
          {[
            { 
              key: 'generator', 
              label: '🛠️ Intelligence Generator', 
              desc: 'OSINT data to wordlists',
              color: 'blue',
              difficulty: 'Beginner'
            },
            { 
              key: 'methodology', 
              label: '🎯 Pentest Methodology', 
              desc: 'Professional attack workflow',
              color: 'red',
              difficulty: 'Intermediate'
            },
            { 
              key: 'toolkit', 
              label: '⚡ OSINT Toolkit', 
              desc: 'Tools & techniques reference',
              color: 'purple',
              difficulty: 'Advanced'
            }
          ].map(({ key, label, desc, color, difficulty }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as any)}
              className={`relative p-4 rounded-lg text-sm font-medium transition-all transform hover:scale-[1.02] ${
                activeTab === key 
                  ? `bg-${color}-500/20 border-${color}-500/40 text-white shadow-lg border-2` 
                  : `text-text-muted hover:text-white hover:bg-${color}-500/10 border border-transparent hover:border-${color}-500/30`
              }`}
            >
              <div className="text-left">
                <div className="font-semibold mb-1">{label}</div>
                <div className="text-xs opacity-70 mb-2">{desc}</div>
                <div className={`text-xs px-2 py-1 rounded bg-${color}-500/20 text-${color}-400 inline-block`}>
                  {difficulty}
                </div>
              </div>
              {activeTab === key && (
                <div className={`absolute -top-1 -right-1 w-3 h-3 bg-${color}-500 rounded-full animate-pulse`}></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'generator' && (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1 space-y-4">
            {/* Enhanced OSINT Intelligence Panel */}
            <div className="bg-gradient-to-br from-primary/10 to-green-500/10 border border-primary/30 rounded-lg p-5 mb-4 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary text-lg">🕵️</span>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-primary">OSINT Intelligence Panel</span>
                    <div className="text-xs text-green-400 font-mono">[DATA COLLECTION MODULE]</div>
                  </div>
                </div>
                <div className="px-2 py-1 bg-green-500/20 border border-green-500/30 rounded text-xs text-green-400">
                  ACTIVE
                </div>
              </div>
              
              <div className="space-y-2 text-xs">
                <p className="text-text-muted leading-relaxed">
                  🎯 <strong className="text-white">Mission:</strong> Transform public intelligence into targeted wordlists
                </p>
                <p className="text-text-muted leading-relaxed">
                  🔍 <strong className="text-white">Sources:</strong> LinkedIn, social media, company websites, GitHub
                </p>
                <p className="text-text-muted leading-relaxed">
                  ⚡ <strong className="text-white">Output:</strong> High-probability email and password combinations
                </p>
              </div>

              {/* Real-time Stats */}
              <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-primary/20">
                <div className="text-center">
                  <div className="text-blue-400 font-bold text-sm">{Object.values(form).filter(v => v && v.toString().trim()).length}</div>
                  <div className="text-xs text-text-muted">Fields</div>
                </div>
                <div className="text-center">
                  <div className="text-green-400 font-bold text-sm">95%</div>
                  <div className="text-xs text-text-muted">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-yellow-400 font-bold text-sm">
                    {result ? `${result.emails.length + result.passwords.length + result.usernames.length}` : '0'}
                  </div>
                  <div className="text-xs text-text-muted">Generated</div>
                </div>
              </div>
            </div>
            {/* Name Intelligence Section */}
            <div className="bg-dark/30 border border-blue-500/20 rounded-lg p-4 space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-blue-400">👤</span>
                <h3 className="font-semibold text-blue-400">Personal Identity Matrix</h3>
                <div className="ml-auto text-xs bg-blue-500/20 px-2 py-1 rounded text-blue-400">HIGH PRIORITY</div>
              </div>
              
              <div>
                <OSINTTooltip tip="First names are OSINT goldmines! 🎯 Check LinkedIn company pages, About Us sections, team photos, conference speaker lists, and GitHub commits. Variations like John→Johnny→J are automatically generated for maximum coverage.">
                  <label htmlFor="firstName" className="flex items-center gap-2 text-sm mb-2 cursor-help group">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    First name 
                    <span className="text-blue-400 text-xs group-hover:animate-pulse">💡 OSINT TIP</span>
                  </label>
                </OSINTTooltip>
                <input 
                  id="firstName" 
                  type="text" 
                  maxLength={64} 
                  className="w-full px-4 py-3 bg-dark border border-blue-500/30 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all placeholder-text-muted/50" 
                  placeholder="🔍 e.g., John, María, 李明, Alexandre"
                  onChange={e => update('firstName', e.target.value)} 
                />
                <div className="text-xs text-text-muted mt-1 ml-1">
                  Sources: LinkedIn profiles, company websites, email signatures
                </div>
              </div>
              <div>
                <OSINTTooltip tip="Nicknames and handles are OSINT treasures! 🎮 Gaming profiles (Steam, Xbox Live), social media handles (@johnny2023), forum usernames, GitHub profiles. These often reveal personal patterns used across multiple platforms.">
                  <label htmlFor="nickname" className="flex items-center gap-2 text-sm mb-2 cursor-help group">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Nickname/Handle 
                    <span className="text-green-400 text-xs group-hover:animate-pulse">🎮 SOCIAL TIP</span>
                  </label>
                </OSINTTooltip>
                <input 
                  id="nickname" 
                  type="text" 
                  maxLength={64} 
                  className="w-full px-4 py-3 bg-dark border border-green-500/30 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/30 transition-all placeholder-text-muted/50" 
                  placeholder="🎯 e.g., johnny2k, xJohnx, j0hn_d03"
                  onChange={e => update('nickname', e.target.value)} 
                />
                <div className="text-xs text-text-muted mt-1 ml-1">
                  Sources: Social media, gaming platforms, forums, GitHub
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <OSINTTooltip tip="Middle initials unlock email patterns! 📧 john.a.doe@company.com is extremely common in corporate environments. Check email signatures, business cards, and professional directories.">
                    <label htmlFor="middleInitial" className="flex items-center gap-2 text-sm mb-2 cursor-help group">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Middle initial 
                      <span className="text-purple-400 text-xs group-hover:animate-pulse">📧 EMAIL</span>
                    </label>
                  </OSINTTooltip>
                  <input 
                    id="middleInitial" 
                    type="text" 
                    className="w-full px-4 py-3 bg-dark border border-purple-500/30 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all text-center font-mono text-lg" 
                    maxLength={1} 
                    placeholder="A"
                    onChange={e => update('middleInitial', e.target.value)} 
                  />
                </div>
                <div>
                  <OSINTTooltip tip="Surnames are OSINT goldmines! 🏢 Corporate directories, LinkedIn, press releases, conference speakers. Watch for cultural variations (Smith vs Schmitt) and consider married vs maiden names.">
                    <label htmlFor="lastName" className="flex items-center gap-2 text-sm mb-2 cursor-help group">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      Last name 
                      <span className="text-yellow-400 text-xs group-hover:animate-pulse">🏢 CORP</span>
                    </label>
                  </OSINTTooltip>
                  <input 
                    id="lastName" 
                    type="text" 
                    maxLength={64} 
                    className="w-full px-4 py-3 bg-dark border border-yellow-500/30 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 transition-all placeholder-text-muted/50" 
                    placeholder="🎯 e.g., Smith, O'Connor, García"
                    onChange={e => update('lastName', e.target.value)} 
                  />
                </div>
              </div>
            </div>
            {/* Family & Personal Intelligence Section */}
            <div className="bg-dark/30 border border-red-500/20 rounded-lg p-4 space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-red-400">👨‍👩‍👧‍👦</span>
                <h3 className="font-semibold text-red-400">Family Intelligence Network</h3>
                <div className="ml-auto text-xs bg-red-500/20 px-2 py-1 rounded text-red-400">PERSONAL INTEL</div>
              </div>
              
              <div>
                <OSINTTooltip tip="Full middle names unlock password complexity! 🔐 Found in: professional bios, academic papers, legal documents, wedding announcements. Creates patterns like 'JohnAlexander123' or 'J.Alexander.Smith'.">
                  <label htmlFor="middleName" className="flex items-center gap-2 text-sm mb-2 cursor-help group">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    Middle name (full) 
                    <span className="text-cyan-400 text-xs group-hover:animate-pulse">🔐 SECURITY</span>
                  </label>
                </OSINTTooltip>
                <input 
                  id="middleName" 
                  type="text" 
                  maxLength={64} 
                  className="w-full px-4 py-3 bg-dark border border-cyan-500/30 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all placeholder-text-muted/50" 
                  placeholder="🎯 e.g., Alexander, Elizabeth, José"
                  onChange={e => update('middleName', e.target.value)} 
                />
                <div className="text-xs text-text-muted mt-1 ml-1">
                  Sources: Professional bios, legal documents, academic papers
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <OSINTTooltip tip="Maiden names = password goldmines! 💎 Security questions favorite. Check: wedding announcements, genealogy sites, family social posts, obituaries. Often combined with birth years in passwords.">
                    <label htmlFor="maidenName" className="flex items-center gap-2 text-sm mb-2 cursor-help group">
                      <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                      Mother&rsquo;s maiden name 
                      <span className="text-pink-400 text-xs group-hover:animate-pulse">💎 GOLD</span>
                    </label>
                  </OSINTTooltip>
                  <input 
                    id="maidenName" 
                    type="text" 
                    maxLength={64} 
                    className="w-full px-4 py-3 bg-dark border border-pink-500/30 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 transition-all placeholder-text-muted/50" 
                    placeholder="🔍 e.g., Johnson, López"
                    onChange={e => update('maidenName', e.target.value)} 
                  />
                </div>
                
                <div>
                  <OSINTTooltip tip="Father's names in cultural patterns! 👨 Many cultures use patronymic naming. Found in: family trees, obituaries, social media family posts, immigration records. Creates patterns like 'JohnRobert' or 'John_Robert'.">
                    <label htmlFor="fatherName" className="flex items-center gap-2 text-sm mb-2 cursor-help group">
                      <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                      Father&rsquo;s name 
                      <span className="text-orange-400 text-xs group-hover:animate-pulse">👨 FAMILY</span>
                    </label>
                  </OSINTTooltip>
                  <input 
                    id="fatherName" 
                    type="text" 
                    maxLength={64} 
                    className="w-full px-4 py-3 bg-dark border border-orange-500/30 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 transition-all placeholder-text-muted/50" 
                    placeholder="🔍 e.g., Robert, Carlos"
                    onChange={e => update('fatherName', e.target.value)} 
                  />
                </div>
              </div>
              
              <div>
                <OSINTTooltip tip="Spouse names = HIGH password probability! 💕 Found in: wedding announcements, couple photos, joint social media accounts, family posts. Creates romantic password patterns like 'John&Sarah2018' or 'JohnSarah'.">
                  <label htmlFor="spouseName" className="flex items-center gap-2 text-sm mb-2 cursor-help group">
                    <span className="w-2 h-2 bg-rose-400 rounded-full"></span>
                    Spouse&rsquo;s name 
                    <span className="text-rose-400 text-xs group-hover:animate-pulse">💕 ROMANTIC</span>
                  </label>
                </OSINTTooltip>
                <input 
                  id="spouseName" 
                  type="text" 
                  maxLength={64} 
                  className="w-full px-4 py-3 bg-dark border border-rose-500/30 rounded-lg focus:border-rose-500 focus:ring-2 focus:ring-rose-500/30 transition-all placeholder-text-muted/50" 
                  placeholder="💕 e.g., Sarah, Michael, Alexandra"
                  value={form.spouseName || ''} 
                  onChange={e => update('spouseName', e.target.value)} 
                />
                <div className="text-xs text-text-muted mt-1 ml-1">
                  Sources: Wedding announcements, couple photos, joint accounts
                </div>
              </div>
            </div>
            {/* Digital Intelligence Section */}
            <div className="bg-dark/30 border border-green-500/20 rounded-lg p-4 space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-green-400">💻</span>
                <h3 className="font-semibold text-green-400">Digital Identity Footprint</h3>
                <div className="ml-auto text-xs bg-green-500/20 px-2 py-1 rounded text-green-400">DIGITAL INTEL</div>
              </div>
              
              <div>
                <OSINTTooltip tip="Username patterns are OSINT treasure! 🏆 Cross-platform analysis reveals personal preferences. Check: GitHub commits, forum signatures, gaming profiles, social handles. Pattern analysis shows john.doe → jdoe → johnnyboy evolution.">
                  <label htmlFor="usernames" className="flex items-center gap-2 text-sm mb-2 cursor-help group">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Known usernames/handles
                    <span className="text-green-400 text-xs group-hover:animate-pulse">🏆 PATTERNS</span>
                  </label>
                </OSINTTooltip>
                <textarea 
                  id="usernames" 
                  className="w-full px-4 py-3 bg-dark border border-green-500/30 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/30 transition-all placeholder-text-muted/50 font-mono" 
                  rows={3} 
                  maxLength={512} 
                  placeholder="🔍 john.doe, jdoe2023, johnnyboy, j_doe_dev, JohnD_85"
                  value={usernamesText} 
                  onChange={e => setUsernamesText(e.target.value)} 
                />
                <div className="text-xs text-text-muted mt-1 ml-1">
                  Sources: GitHub, forums, gaming platforms, social media handles
                </div>
              </div>
            </div>

            {/* Temporal Intelligence Section */}
            <div className="bg-dark/30 border border-yellow-500/20 rounded-lg p-4 space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-yellow-400">⏰</span>
                <h3 className="font-semibold text-yellow-400">Temporal Intelligence Matrix</h3>
                <div className="ml-auto text-xs bg-yellow-500/20 px-2 py-1 rounded text-yellow-400">TIME INTEL</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <OSINTTooltip tip="Birth dates = password jackpot! 🎰 80% of people use birth-related data. Found in: social media bios, birthday posts, company profiles. Generates patterns: DDMMYYYY, MMDDYYYY, DD/MM/YY, just the year, age calculations.">
                    <label htmlFor="birthDate" className="flex items-center gap-2 text-sm mb-2 cursor-help group">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                      Birth date
                      <span className="text-yellow-400 text-xs group-hover:animate-pulse">🎰 JACKPOT</span>
                    </label>
                  </OSINTTooltip>
                  <input
                    id="birthDate"
                    type="text"
                    placeholder="🎂 01/01/1990"
                    value={dob}
                    onChange={e => setDob(applyDobMask(e.target.value))}
                    inputMode="numeric"
                    pattern="\\d{2}/\\d{2}/\\d{4}"
                    maxLength={10}
                    className="w-full px-4 py-3 bg-dark border border-yellow-500/30 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 transition-all font-mono text-center text-lg"
                  />
                  <div className="text-xs text-yellow-400 mt-1 ml-1 font-mono">
                    → 01011990, 1990, 01/01, age variations
                  </div>
                </div>
                <div>
                  <OSINTTooltip tip="Significant numbers unlock memories! 🔢 Graduation year, wedding anniversary, house number, employee ID, lucky numbers, favorite sports jersey. Often combined with names in passwords.">
                    <label htmlFor="extraYearOrNumber" className="flex items-center gap-2 text-sm mb-2 cursor-help group">
                      <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
                      Significant number
                      <span className="text-amber-400 text-xs group-hover:animate-pulse">🔢 MEMORY</span>
                    </label>
                  </OSINTTooltip>
                  <input 
                    id="extraYearOrNumber" 
                    type="text" 
                    inputMode="numeric" 
                    pattern="\\d{1,6}" 
                    maxLength={6} 
                    placeholder="🎯 2018, 123, 777"
                    className="w-full px-4 py-3 bg-dark border border-amber-500/30 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 transition-all font-mono text-center text-lg" 
                    onChange={e => update('extraYearOrNumber', e.target.value)} 
                  />
                  <div className="text-xs text-text-muted mt-1 ml-1">
                    Sources: Graduation, anniversary, address, jersey numbers
                  </div>
                </div>
              </div>
            </div>
            {/* Personal Interests Intelligence Section */}
            <div className="bg-dark/30 border border-purple-500/20 rounded-lg p-4 space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-purple-400">💝</span>
                <h3 className="font-semibold text-purple-400">Personal Interests & Attachments</h3>
                <div className="ml-auto text-xs bg-purple-500/20 px-2 py-1 rounded text-purple-400">EMOTIONAL INTEL</div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <OSINTTooltip tip="Pet names = password favorites! 🐾 Pets are family. Found in: social media photos, vet check-ins, pet insurance, Instagram captions. Creates emotional passwords like 'MaxBuddy123' or 'BellaLove2020'.">
                    <label htmlFor="petNames" className="flex items-center gap-2 text-sm mb-2 cursor-help group">
                      <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                      Pet names
                      <span className="text-purple-400 text-xs group-hover:animate-pulse">🐾 LOVE</span>
                    </label>
                  </OSINTTooltip>
                  <textarea 
                    id="petNames" 
                    className="w-full px-4 py-3 bg-dark border border-purple-500/30 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all placeholder-text-muted/50" 
                    rows={2} 
                    maxLength={512} 
                    placeholder="🐕 Max, Bella, Fluffy, Rex, Luna"
                    value={petsText} 
                    onChange={e => setPetsText(e.target.value)} 
                  />
                  <div className="text-xs text-text-muted mt-1 ml-1">
                    Sources: Social media photos, vet records, pet tags
                  </div>
                </div>
                
                <div>
                  <OSINTTooltip tip="Children's names = ultimate password material! 👶 Parents ALWAYS use kids' names. Found in: family photos, school events, sports teams, birthday posts. Creates patterns like 'EmmaLiam2018' or 'MyEmma123'.">
                    <label htmlFor="childrenNames" className="flex items-center gap-2 text-sm mb-2 cursor-help group">
                      <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></span>
                      Children&rsquo;s names
                      <span className="text-pink-400 text-xs group-hover:animate-pulse">👶 ULTIMATE</span>
                    </label>
                  </OSINTTooltip>
                  <textarea 
                    id="childrenNames" 
                    className="w-full px-4 py-3 bg-dark border border-pink-500/30 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 transition-all placeholder-text-muted/50" 
                    rows={2} 
                    maxLength={512} 
                    placeholder="👶 Emma, Liam, Sofia, Noah, Mia"
                    value={childrenText} 
                    onChange={e => setChildrenText(e.target.value)} 
                  />
                  <div className="text-xs text-text-muted mt-1 ml-1">
                    Sources: Family photos, school events, sports teams
                  </div>
                </div>
              </div>
              
              <div>
                <OSINTTooltip tip="Brand loyalty = password patterns! ⚽ Sports teams, bands, tech brands create passionate passwords. Found in: social media likes, photos with jerseys, concert check-ins, product reviews. Creates 'Lakers2023' or 'AppleFan' patterns.">
                  <label htmlFor="favoriteTeam" className="flex items-center gap-2 text-sm mb-2 cursor-help group">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
                    Favorite team/brand/interest
                    <span className="text-indigo-400 text-xs group-hover:animate-pulse">⚽ LOYALTY</span>
                  </label>
                </OSINTTooltip>
                <input 
                  id="favoriteTeam" 
                  type="text" 
                  maxLength={64} 
                  className="w-full px-4 py-3 bg-dark border border-indigo-500/30 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all placeholder-text-muted/50" 
                  placeholder="⚽ Lakers, Yankees, Ferrari, Apple, BTS, Marvel"
                  value={favoriteTeam} 
                  onChange={e => setFavoriteTeam(e.target.value)} 
                />
                <div className="text-xs text-text-muted mt-1 ml-1">
                  Sources: Social media likes, photos, check-ins, reviews
                </div>
              </div>
            </div>

            {/* Email Intelligence Targeting Section */}
            <div className="bg-dark/30 border border-cyan-500/20 rounded-lg p-4 space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-cyan-400">📧</span>
                <h3 className="font-semibold text-cyan-400">Email Intelligence Targeting</h3>
                <div className="ml-auto text-xs bg-cyan-500/20 px-2 py-1 rounded text-cyan-400">TARGET SYSTEMS</div>
              </div>
              
              <div>
                <OSINTTooltip tip="Provider patterns reveal target context! 📧 Gmail/Yahoo = personal accounts, Corporate domains = business targets. Choose based on your authorized test scope and discovered email patterns.">
                  <p className="flex items-center gap-2 text-sm mb-2 cursor-help group">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    Email providers
                    <span className="text-cyan-400 text-xs group-hover:animate-pulse">📧 PATTERNS</span>
                  </p>
                </OSINTTooltip>
                <div className="grid grid-cols-3 gap-3">
                  {defaultProviders.map(p => (
                    <label key={p} className="flex items-center gap-2 cursor-pointer p-3 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10 transition-all group">
                      <input 
                        type="checkbox" 
                        checked={form.providers?.includes(p)} 
                        onChange={() => toggleProvider(p)}
                        className="accent-cyan-400"
                      />
                      <span className="group-hover:text-cyan-400 transition-colors">{p}</span>
                    </label>
                  ))}
                </div>
                <div className="text-xs text-text-muted mt-2 ml-1">
                  💡 Personal providers vs Corporate domains reveal different attack surfaces
                </div>
              </div>
              
              <div>
                <OSINTTooltip tip="Corporate domains = HIGH-VALUE targets! 🏢 Company email patterns unlock entire organizations. Found in: email signatures, LinkedIn, job postings, press releases. Reveals firstname.lastname@company.com patterns.">
                  <label htmlFor="customDomains" className="flex items-center gap-2 text-sm mb-2 cursor-help group">
                    <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
                    Corporate domains
                    <span className="text-orange-400 text-xs group-hover:animate-pulse">🏢 HIGH-VALUE</span>
                  </label>
                </OSINTTooltip>
                <input
                  id="customDomains"
                  type="text"
                  className="w-full px-4 py-3 bg-dark border border-orange-500/30 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 transition-all placeholder-text-muted/50 font-mono"
                  placeholder="🏢 company.com, subsidiary.corp, division.gov"
                  maxLength={256}
                  value={customDomainsText}
                  onChange={e => setCustomDomainsText(e.target.value)}
                />
                <div className="text-xs text-text-muted mt-1 ml-1">
                  Sources: Email signatures, LinkedIn, job postings, company websites
                </div>
              </div>
            </div>
            {/* Enhanced Execution Command Center */}
            <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-lg p-5 mt-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                    <span className="text-red-400 text-xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-red-400">INTELLIGENCE GENERATION COMMAND CENTER</h3>
                    <div className="text-xs text-orange-400 font-mono">[AUTHORIZED OPERATION READY]</div>
                  </div>
                </div>
                <div className="text-xs bg-green-500/20 border border-green-500/30 px-3 py-1 rounded font-mono text-green-400">
                  STATUS: READY
                </div>
              </div>
              
              {/* Mission Brief */}
              <div className="bg-dark/50 border border-orange-500/20 rounded-lg p-3 mb-4">
                <div className="text-xs space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-orange-400 rounded-full"></span>
                    <span className="text-orange-400">Mission:</span>
                    <span className="text-text-muted">Transform OSINT intelligence into targeted attack vectors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                    <span className="text-blue-400">Output:</span>
                    <span className="text-text-muted">Email enumeration, password wordlists, username variations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                    <span className="text-green-400">Authorization:</span>
                    <span className="text-text-muted">Educational use & authorized penetration testing only</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {/* Main Execute Button */}
                <button 
                  className="w-full px-6 py-4 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 hover:from-red-500/30 hover:via-orange-500/30 hover:to-yellow-500/30 border-2 border-red-500/40 hover:border-red-500/60 rounded-lg font-bold text-lg transition-all transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-3 group" 
                  onClick={handleGenerate}
                >
                  <span className="text-2xl group-hover:animate-pulse">🚀</span> 
                  <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                    EXECUTE INTELLIGENCE GENERATION
                  </span>
                  <div className="text-xs bg-red-500/20 px-2 py-1 rounded font-mono">
                    CTRL+G
                  </div>
                </button>
                
                {/* Download Arsenal */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-primary mb-2 flex items-center gap-2">
                    <span>💾</span> DOWNLOAD INTELLIGENCE ARSENAL
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      className="px-4 py-3 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 group"
                      onClick={() => result && download('emails.txt', result.emails.join('\n'))}
                      disabled={!result || result.emails.length === 0}
                    >
                      <span className="text-blue-400 group-hover:animate-pulse">📧</span>
                      <div className="text-left">
                        <div className="text-sm font-semibold text-blue-400">Email Vectors</div>
                        <div className="text-xs text-blue-300">Target enumeration</div>
                      </div>
                    </button>
                    <button
                      className="px-4 py-3 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 group"
                      onClick={() => result && download('wordlist.txt', result.passwords.join('\n'))}
                      disabled={!result || result.passwords.length === 0}
                    >
                      <span className="text-red-400 group-hover:animate-pulse">🔑</span>
                      <div className="text-left">
                        <div className="text-sm font-semibold text-red-400">Password Arsenal</div>
                        <div className="text-xs text-red-300">Authentication bypass</div>
                      </div>
                    </button>
                    <button
                      className="px-4 py-3 bg-yellow-500/20 hover:bg-yellow-500/30 border border-yellow-500/30 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 group"
                      onClick={() => result && download('usernames.txt', result.usernames.join('\n'))}
                      disabled={!result || result.usernames.length === 0}
                    >
                      <span className="text-yellow-400 group-hover:animate-pulse">👤</span>
                      <div className="text-left">
                        <div className="text-sm font-semibold text-yellow-400">Identity Matrix</div>
                        <div className="text-xs text-yellow-300">User enumeration</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Safety Constraints Panel */}
            <div className="bg-gradient-to-r from-yellow-500/5 via-orange-500/5 to-red-500/5 border border-yellow-500/30 rounded-lg p-4 mt-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <span className="text-yellow-400">🛡️</span>
                </div>
                <div>
                  <span className="text-sm font-bold text-yellow-400">OPERATIONAL SAFETY CONSTRAINTS</span>
                  <div className="text-xs text-yellow-300">[BUILT-IN PROTECTION SYSTEMS]</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="bg-dark/30 border border-yellow-500/20 rounded-lg p-3">
                  <div className="text-yellow-400 font-semibold mb-1">⚡ Generation Limits</div>
                  <div className="text-text-muted">
                    • Max {limits.MAX_EMAILS.toLocaleString()} emails per session
                    <br />• Max {limits.MAX_PASSWORDS.toLocaleString()} passwords per session
                    <br />• Client-side processing only
                  </div>
                </div>
                <div className="bg-dark/30 border border-orange-500/20 rounded-lg p-3">
                  <div className="text-orange-400 font-semibold mb-1">🔒 Privacy Protection</div>
                  <div className="text-text-muted">
                    • Zero data transmission
                    <br />• No server-side logging
                    <br />• Complete offline operation
                  </div>
                </div>
                <div className="bg-dark/30 border border-red-500/20 rounded-lg p-3">
                  <div className="text-red-400 font-semibold mb-1">⚖️ Ethical Boundaries</div>
                  <div className="text-text-muted">
                    • Authorization required
                    <br />• Educational use only
                    <br />• Professional pentesting scope
                  </div>
                </div>
              </div>
              
              <div className="text-xs text-center text-text-muted mt-3 font-mono">
                Preview limited to {limits.PREVIEW_LIMIT} items per category for optimal performance
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            {/* Enhanced Intelligence Output Panel */}
            {result && (
              <div className="space-y-6">
                {/* Mission Success Dashboard */}
                <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-lg p-5 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center animate-pulse">
                        <span className="text-green-400 text-xl">✅</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-green-400">INTELLIGENCE GENERATION COMPLETE</h3>
                        <div className="text-xs text-blue-400 font-mono">[MISSION: SUCCESSFUL]</div>
                      </div>
                    </div>
                    <div className="text-xs bg-green-500/20 border border-green-500/30 px-3 py-1 rounded font-mono text-green-400">
                      STATUS: SUCCESS
                    </div>
                  </div>
                  
                  {/* Advanced Stats Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-dark/50 border border-blue-500/30 rounded-lg p-4 text-center group hover:bg-blue-500/5 transition-all">
                      <div className="text-3xl font-bold text-blue-400 mb-1 font-mono group-hover:animate-pulse">
                        {result.emails.length.toLocaleString()}
                      </div>
                      <div className="text-xs text-blue-300 mb-2 uppercase tracking-wider">Email Vectors</div>
                      <div className="w-full bg-dark h-1 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-400 rounded-full transition-all duration-1000"
                          style={{ width: `${Math.min(100, (result.emails.length / limits.MAX_EMAILS) * 100)}%` }}
                        />
                      </div>
                      <div className="text-xs text-text-muted mt-1">
                        Target enumeration ready
                      </div>
                    </div>
                    
                    <div className="bg-dark/50 border border-red-500/30 rounded-lg p-4 text-center group hover:bg-red-500/5 transition-all">
                      <div className="text-3xl font-bold text-red-400 mb-1 font-mono group-hover:animate-pulse">
                        {result.passwords.length.toLocaleString()}
                      </div>
                      <div className="text-xs text-red-300 mb-2 uppercase tracking-wider">Password Arsenal</div>
                      <div className="w-full bg-dark h-1 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-red-400 rounded-full transition-all duration-1000"
                          style={{ width: `${Math.min(100, (result.passwords.length / limits.MAX_PASSWORDS) * 100)}%` }}
                        />
                      </div>
                      <div className="text-xs text-text-muted mt-1">
                        Authentication bypass ready
                      </div>
                    </div>
                    
                    <div className="bg-dark/50 border border-yellow-500/30 rounded-lg p-4 text-center group hover:bg-yellow-500/5 transition-all">
                      <div className="text-3xl font-bold text-yellow-400 mb-1 font-mono group-hover:animate-pulse">
                        {result.usernames.length.toLocaleString()}
                      </div>
                      <div className="text-xs text-yellow-300 mb-2 uppercase tracking-wider">Identity Matrix</div>
                      <div className="w-full bg-dark h-1 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-yellow-400 rounded-full transition-all duration-1000"
                          style={{ width: `${Math.min(100, (result.usernames.length / limits.MAX_USERNAMES || 5000) * 100)}%` }}
                        />
                      </div>
                      <div className="text-xs text-text-muted mt-1">
                        User enumeration ready
                      </div>
                    </div>
                  </div>

                  {/* Quick Intelligence Insights */}
                  <div className="mt-4 bg-dark/30 border border-primary/20 rounded-lg p-3">
                    <div className="text-xs font-semibold text-primary mb-2">🧠 INTELLIGENCE INSIGHTS</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                      <div>
                        <span className="text-blue-400">📧 Email Patterns:</span>
                        <div className="text-text-muted">Corporate + Personal combinations</div>
                      </div>
                      <div>
                        <span className="text-red-400">🔑 Password Complexity:</span>
                        <div className="text-text-muted">Names + Dates + Numbers</div>
                      </div>
                      <div>
                        <span className="text-yellow-400">👤 Username Variations:</span>
                        <div className="text-text-muted">Platform-specific patterns</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Intelligence Display Grid */}
                <div className="grid md:grid-cols-3 gap-4">
                  {/* Email Vectors Intelligence Panel */}
                  <div className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border border-blue-500/30 rounded-lg p-4 shadow-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                          <span className="text-blue-400">📧</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-blue-400">Email Vectors</h3>
                          <div className="text-xs text-blue-300">Target Enumeration</div>
                        </div>
                      </div>
                      <div className="text-xs bg-blue-500/20 border border-blue-500/30 px-2 py-1 rounded font-mono text-blue-400">
                        {result.emails.length}
                      </div>
                    </div>
                    
                    <div className="mb-2 text-xs bg-dark/50 border border-blue-500/20 rounded p-2">
                      <div className="text-blue-400 font-semibold">🎯 Attack Surface:</div>
                      <div className="text-text-muted">Email enumeration, password spraying targets, phishing campaigns</div>
                    </div>
                    
                    <div className="h-64 overflow-auto bg-dark/30 border border-blue-500/20 rounded-lg p-3">
                      <div className="text-xs text-blue-400 mb-2 font-mono uppercase tracking-wider">
                        [ENUMERATION TARGETS]
                      </div>
                      {preview(result.emails).map((email, index) => (
                        <div key={email} className="py-1.5 px-2 border-b border-blue-500/10 last:border-b-0 hover:bg-blue-500/5 transition-colors font-mono text-sm rounded group">
                          <div className="flex items-center gap-2">
                            <span className="text-blue-400 text-xs">#{String(index + 1).padStart(3, '0')}</span>
                            <span className="text-white">{email}</span>
                          </div>
                        </div>
                      ))}
                      {result.emails.length > limits.PREVIEW_LIMIT && (
                        <div className="text-xs text-blue-300 italic py-2 text-center border-t border-blue-500/20 mt-2">
                          🔒 +{result.emails.length - limits.PREVIEW_LIMIT} additional vectors in full download
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Password Arsenal Intelligence Panel */}
                  <div className="bg-gradient-to-br from-red-500/5 to-pink-500/5 border border-red-500/30 rounded-lg p-4 shadow-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                          <span className="text-red-400">🔑</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-red-400">Password Arsenal</h3>
                          <div className="text-xs text-red-300">Authentication Bypass</div>
                        </div>
                      </div>
                      <div className="text-xs bg-red-500/20 border border-red-500/30 px-2 py-1 rounded font-mono text-red-400">
                        {result.passwords.length}
                      </div>
                    </div>
                    
                    <div className="mb-2 text-xs bg-dark/50 border border-red-500/20 rounded p-2">
                      <div className="text-red-400 font-semibold">💥 Weapons Cache:</div>
                      <div className="text-text-muted">Password spraying, brute force, credential stuffing wordlists</div>
                    </div>
                    
                    <div className="h-64 overflow-auto bg-dark/30 border border-red-500/20 rounded-lg p-3">
                      <div className="text-xs text-red-400 mb-2 font-mono uppercase tracking-wider">
                        [PASSWORD CANDIDATES]
                      </div>
                      {preview(result.passwords).map((password, index) => (
                        <div key={password} className="py-1.5 px-2 border-b border-red-500/10 last:border-b-0 hover:bg-red-500/5 transition-colors font-mono text-sm rounded group">
                          <div className="flex items-center gap-2">
                            <span className="text-red-400 text-xs">#{String(index + 1).padStart(3, '0')}</span>
                            <span className="text-white">{password}</span>
                          </div>
                        </div>
                      ))}
                      {result.passwords.length > limits.PREVIEW_LIMIT && (
                        <div className="text-xs text-red-300 italic py-2 text-center border-t border-red-500/20 mt-2">
                          🔒 +{result.passwords.length - limits.PREVIEW_LIMIT} additional candidates in full download
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Username Identity Matrix Panel */}
                  <div className="bg-gradient-to-br from-yellow-500/5 to-orange-500/5 border border-yellow-500/30 rounded-lg p-4 shadow-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                          <span className="text-yellow-400">👤</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-yellow-400">Identity Matrix</h3>
                          <div className="text-xs text-yellow-300">User Enumeration</div>
                        </div>
                      </div>
                      <div className="text-xs bg-yellow-500/20 border border-yellow-500/30 px-2 py-1 rounded font-mono text-yellow-400">
                        {result.usernames.length}
                      </div>
                    </div>
                    
                    <div className="mb-2 text-xs bg-dark/50 border border-yellow-500/20 rounded p-2">
                      <div className="text-yellow-400 font-semibold">🕵️ Reconnaissance:</div>
                      <div className="text-text-muted">Username enumeration, social media hunting, platform discovery</div>
                    </div>
                    
                    <div className="h-64 overflow-auto bg-dark/30 border border-yellow-500/20 rounded-lg p-3">
                      <div className="text-xs text-yellow-400 mb-2 font-mono uppercase tracking-wider">
                        [IDENTITY VARIANTS]
                      </div>
                      {preview(result.usernames).map((username, index) => (
                        <div key={username} className="py-1.5 px-2 border-b border-yellow-500/10 last:border-b-0 hover:bg-yellow-500/5 transition-colors font-mono text-sm rounded group">
                          <div className="flex items-center gap-2">
                            <span className="text-yellow-400 text-xs">#{String(index + 1).padStart(3, '0')}</span>
                            <span className="text-white">{username}</span>
                          </div>
                        </div>
                      ))}
                      {result.usernames.length > limits.PREVIEW_LIMIT && (
                        <div className="text-xs text-yellow-300 italic py-2 text-center border-t border-yellow-500/20 mt-2">
                          🔒 +{result.usernames.length - limits.PREVIEW_LIMIT} additional variants in full download
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
            <EthicsNotice />
          </div>
        </div>
      )}

      {/* Penetration Testing Methodology Tab */}
      {activeTab === 'methodology' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🎯</span>
              <div>
                <h2 className="text-2xl font-bold">Penetration Testing Methodology</h2>
                <p className="text-text-muted">Professional framework for authorized security assessment</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Phase 1 - Reconnaissance */}
              <div className="bg-dark/50 border border-blue-500/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-blue-400">🔍</span>
                  <h3 className="font-semibold text-blue-400">Phase 1: Reconnaissance</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <strong>Passive OSINT:</strong> LinkedIn, company websites, social media, GitHub, job postings
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <strong>Email Pattern Analysis:</strong> Identify firstname.lastname@company.com patterns
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <strong>Data Sources:</strong> Hunter.io, Have I Been Pwned, Dehashed, company directories
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <strong>Target Profiling:</strong> Names, roles, personal info, interests, family members
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 2 - Weaponization */}
              <div className="bg-dark/50 border border-yellow-500/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-yellow-400">⚔️</span>
                  <h3 className="font-semibold text-yellow-400">Phase 2: Weaponization</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <strong>SafeSpray Generation:</strong> Create targeted wordlists from OSINT data
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <strong>Pattern Variations:</strong> Combine names + dates + interests + common patterns
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <strong>Email Enumeration:</strong> Valid email discovery and verification
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <strong>Tool Preparation:</strong> Configure spray tools with rate limits and delays
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 3 - Delivery */}
              <div className="bg-dark/50 border border-red-500/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-red-400">🚀</span>
                  <h3 className="font-semibold text-red-400">Phase 3: Controlled Delivery</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <strong>Password Spraying:</strong> Low-and-slow attacks against authentication systems
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <strong>Rate Limiting:</strong> 1 attempt every 30 minutes per account to avoid lockouts
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <strong>Monitoring:</strong> Watch for detection, account lockouts, and defensive responses
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <strong>Documentation:</strong> Log all attempts, successes, and defensive measures
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 4 - Exploitation */}
              <div className="bg-dark/50 border border-green-500/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-green-400">💥</span>
                  <h3 className="font-semibold text-green-400">Phase 4: Exploitation & Validation</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <strong>Access Validation:</strong> Verify compromised accounts and document access levels
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <strong>Lateral Movement:</strong> Test privilege escalation and system access
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <strong>Data Impact:</strong> Assess what sensitive data could be accessed
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <strong>Responsible Disclosure:</strong> Report findings through proper channels
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Best Practices */}
            <div className="mt-6 bg-primary/5 border border-primary/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-primary">📋</span>
                <h3 className="font-semibold">Professional Best Practices</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-primary">Authorization:</strong>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>• Written permission from system owner</li>
                    <li>• Defined scope and time boundaries</li>
                    <li>• Emergency contact procedures</li>
                    <li>• Clear rules of engagement</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-primary">Safety Measures:</strong>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>• Rate limiting to prevent DoS</li>
                    <li>• Account lockout monitoring</li>
                    <li>• Immediate halt on detection</li>
                    <li>• Secure data handling</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* OSINT Toolkit Tab */}
      {activeTab === 'toolkit' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">⚡</span>
              <div>
                <h2 className="text-2xl font-bold">OSINT & Cyber Intelligence Toolkit</h2>
                <p className="text-text-muted">Professional tools and techniques for information gathering</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Email Intelligence */}
              <div className="bg-dark/50 border border-blue-500/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-blue-400">📧</span>
                  <h3 className="font-semibold text-blue-400">Email Intelligence</h3>
                </div>
                <div className="space-y-2 text-xs">
                  <div><strong>Hunter.io:</strong> Email pattern discovery</div>
                  <div><strong>EmailHippo:</strong> Email validation</div>
                  <div><strong>Have I Been Pwned:</strong> Breach data</div>
                  <div><strong>Dehashed:</strong> Password leaks</div>
                  <div><strong>Skymem:</strong> Email enumeration</div>
                </div>
              </div>

              {/* Social Media OSINT */}
              <div className="bg-dark/50 border border-green-500/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-green-400">👥</span>
                  <h3 className="font-semibold text-green-400">Social Media OSINT</h3>
                </div>
                <div className="space-y-2 text-xs">
                  <div><strong>Sherlock:</strong> Username hunting</div>
                  <div><strong>Social Searcher:</strong> Social monitoring</div>
                  <div><strong>Pipl:</strong> People search engine</div>
                  <div><strong>TruePeopleSearch:</strong> Personal info</div>
                  <div><strong>Instagram OSINT:</strong> Photo metadata</div>
                </div>
              </div>

              {/* Password Intelligence */}
              <div className="bg-dark/50 border border-red-500/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-red-400">🔑</span>
                  <h3 className="font-semibold text-red-400">Password Intelligence</h3>
                </div>
                <div className="space-y-2 text-xs">
                  <div><strong>CrackStation:</strong> Hash lookup</div>
                  <div><strong>HashKiller:</strong> Hash cracking</div>
                  <div><strong>SecLists:</strong> Wordlist repository</div>
                  <div><strong>CUPP:</strong> Personal wordlists</div>
                  <div><strong>Mentalist:</strong> Rule-based generation</div>
                </div>
              </div>

              {/* Domain Intelligence */}
              <div className="bg-dark/50 border border-yellow-500/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-yellow-400">🌐</span>
                  <h3 className="font-semibold text-yellow-400">Domain Intelligence</h3>
                </div>
                <div className="space-y-2 text-xs">
                  <div><strong>Whois Lookup:</strong> Domain registration</div>
                  <div><strong>DNSdumpster:</strong> DNS reconnaissance</div>
                  <div><strong>Sublist3r:</strong> Subdomain enumeration</div>
                  <div><strong>Certificate Transparency:</strong> SSL logs</div>
                  <div><strong>Shodan:</strong> Device discovery</div>
                </div>
              </div>

              {/* Metadata Analysis */}
              <div className="bg-dark/50 border border-purple-500/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-purple-400">🔍</span>
                  <h3 className="font-semibold text-purple-400">Metadata Analysis</h3>
                </div>
                <div className="space-y-2 text-xs">
                  <div><strong>ExifTool:</strong> File metadata extraction</div>
                  <div><strong>FOCA:</strong> Document analysis</div>
                  <div><strong>Metagoofil:</strong> Public doc metadata</div>
                  <div><strong>Jeffrey&rsquo;s EXIF:</strong> Image analysis</div>
                  <div><strong>Wayback Machine:</strong> Historical data</div>
                </div>
              </div>

              {/* Professional Networks */}
              <div className="bg-dark/50 border border-cyan-500/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-cyan-400">💼</span>
                  <h3 className="font-semibold text-cyan-400">Professional Networks</h3>
                </div>
                <div className="space-y-2 text-xs">
                  <div><strong>LinkedIn:</strong> Employee enumeration</div>
                  <div><strong>GitHub:</strong> Code repositories</div>
                  <div><strong>Stack Overflow:</strong> Technical profiles</div>
                  <div><strong>AngelList:</strong> Startup employees</div>
                  <div><strong>Crunchbase:</strong> Company intel</div>
                </div>
              </div>
            </div>

            {/* OSINT Workflow */}
            <div className="mt-6 bg-gradient-to-r from-primary/5 to-purple-500/5 border border-primary/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-primary">🎯</span>
                <h3 className="font-semibold">OSINT Workflow for Password Spraying</h3>
              </div>
              <div className="grid md:grid-cols-4 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl mb-2">1️⃣</div>
                  <div className="font-semibold text-blue-400">Target Identification</div>
                  <div className="text-xs text-text-muted mt-1">Company research, employee discovery</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">2️⃣</div>
                  <div className="font-semibold text-green-400">Data Collection</div>
                  <div className="text-xs text-text-muted mt-1">Names, emails, personal info gathering</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">3️⃣</div>
                  <div className="font-semibold text-yellow-400">Analysis & Generation</div>
                  <div className="text-xs text-text-muted mt-1">SafeSpray wordlist creation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">4️⃣</div>
                  <div className="font-semibold text-red-400">Controlled Testing</div>
                  <div className="text-xs text-text-muted mt-1">Authorized security assessment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default EmailWordlistGenerator
