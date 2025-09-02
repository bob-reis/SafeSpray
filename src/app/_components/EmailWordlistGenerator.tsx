"use client"
import { useState } from 'react'
import { generateEmails, generateWordlist, generateUsernames, preview, limits, EmailWordlistInput } from '../_lib/emailWordlist'
import { isValidDomain } from '../_lib/validation'
import EthicsNotice from './EthicsNotice'

const defaultProviders = ['gmail.com', 'hotmail.com', 'yahoo.com']

const EmailWordlistGenerator = () => {
  const [form, setForm] = useState<EmailWordlistInput>({ providers: defaultProviders })
  const [usernamesText, setUsernamesText] = useState('')
  const [customDomainsText, setCustomDomainsText] = useState('')
  const [dob, setDob] = useState('')
  const [petsText, setPetsText] = useState('')
  const [childrenText, setChildrenText] = useState('')
  const [spouseName, setSpouseName] = useState('')
  const [favoriteTeam, setFavoriteTeam] = useState('')
  const [result, setResult] = useState<{ emails: string[]; passwords: string[]; usernames: string[] } | null>(null)

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
      spouseName,
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
      <h1 className="text-2xl font-bold mb-2">Gerador de E-mails e Wordlists</h1>
      <p className="text-text-muted mb-6">Tudo client-side. Gere variações plausíveis de e-mails e senhas para pentest/OSINT/autoteste.</p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm mb-1">Primeiro nome</label>
            <input id="firstName" type="text" maxLength={64} className="w-full px-3 py-2 bg-dark border border-primary/20 rounded" onChange={e => update('firstName', e.target.value)} />
          </div>
          <div>
            <label htmlFor="nickname" className="block text-sm mb-1">Apelido</label>
            <input id="nickname" type="text" maxLength={64} className="w-full px-3 py-2 bg-dark border border-primary/20 rounded" onChange={e => update('nickname', e.target.value)} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="middleInitial" className="block text-sm mb-1">Inicial do meio</label>
              <input id="middleInitial" type="text" className="w-full px-3 py-2 bg-dark border border-primary/20 rounded" maxLength={1} onChange={e => update('middleInitial', e.target.value)} />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm mb-1">Sobrenome</label>
              <input id="lastName" type="text" maxLength={64} className="w-full px-3 py-2 bg-dark border border-primary/20 rounded" onChange={e => update('lastName', e.target.value)} />
            </div>
          </div>
          <div>
            <label htmlFor="middleName" className="block text-sm mb-1">Nome do meio (completo)</label>
            <input id="middleName" type="text" maxLength={64} className="w-full px-3 py-2 bg-dark border border-primary/20 rounded" onChange={e => update('middleName', e.target.value)} />
          </div>
          <div>
            <label htmlFor="maidenName" className="block text-sm mb-1">Nome de solteira da mãe</label>
            <input id="maidenName" type="text" maxLength={64} className="w-full px-3 py-2 bg-dark border border-primary/20 rounded" onChange={e => update('maidenName', e.target.value)} />
          </div>
          <div>
            <label htmlFor="fatherName" className="block text-sm mb-1">Nome do pai</label>
            <input id="fatherName" type="text" maxLength={64} className="w-full px-3 py-2 bg-dark border border-primary/20 rounded" onChange={e => update('fatherName', e.target.value)} />
          </div>
          <div>
            <label htmlFor="usernames" className="block text-sm mb-1">Usernames conhecidos (separe por vírgulas)</label>
            <textarea id="usernames" className="w-full px-3 py-2 bg-dark border border-primary/20 rounded" rows={2} maxLength={512} value={usernamesText} onChange={e => setUsernamesText(e.target.value)} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="birthDate" className="block text-sm mb-1">Data de nascimento</label>
              <input
                id="birthDate"
                type="text"
                placeholder="01/01/1990"
                value={dob}
                onChange={e => setDob(applyDobMask(e.target.value))}
                inputMode="numeric"
                pattern="\\d{2}/\\d{2}/\\d{4}"
                maxLength={10}
                className="w-full px-3 py-2 bg-dark border border-primary/20 rounded"
              />
            </div>
            <div>
              <label htmlFor="extraYearOrNumber" className="block text-sm mb-1">Ano/Número extra</label>
              <input id="extraYearOrNumber" type="text" inputMode="numeric" pattern="\\d{1,6}" maxLength={6} className="w-full px-3 py-2 bg-dark border border-primary/20 rounded" onChange={e => update('extraYearOrNumber', e.target.value)} />
            </div>
          </div>
          <div>
            <label htmlFor="petNames" className="block text-sm mb-1">Nomes dos pets (separe por vírgulas)</label>
            <textarea id="petNames" className="w-full px-3 py-2 bg-dark border border-primary/20 rounded" rows={2} maxLength={512} value={petsText} onChange={e => setPetsText(e.target.value)} />
          </div>
          <div>
            <label htmlFor="childrenNames" className="block text-sm mb-1">Nomes dos filhos (separe por vírgulas)</label>
            <textarea id="childrenNames" className="w-full px-3 py-2 bg-dark border border-primary/20 rounded" rows={2} maxLength={512} value={childrenText} onChange={e => setChildrenText(e.target.value)} />
          </div>
          <div>
            <label htmlFor="favoriteTeam" className="block text-sm mb-1">Time do coração</label>
            <input id="favoriteTeam" type="text" maxLength={64} className="w-full px-3 py-2 bg-dark border border-primary/20 rounded" value={favoriteTeam} onChange={e => setFavoriteTeam(e.target.value)} />
          </div>
          <div>
            <p className="text-sm mb-1">Provedores</p>
            <div className="flex flex-wrap gap-3 text-sm">
              {defaultProviders.map(p => (
                <label key={p} className="inline-flex items-center gap-2">
                  <input type="checkbox" checked={form.providers?.includes(p)} onChange={() => toggleProvider(p)} />
                  {p}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="customDomains" className="block text-sm mb-1">Domínios personalizados (separe por vírgulas ou espaço)</label>
            <input
              id="customDomains"
              type="text"
              className="w-full px-3 py-2 bg-dark border border-primary/20 rounded"
              placeholder="empresa.com, corp.com.br"
              maxLength={256}
              value={customDomainsText}
              onChange={e => setCustomDomainsText(e.target.value)}
            />
          </div>
          <div className="flex gap-3 mt-2">
            <button className="px-3 py-2 bg-primary/20 hover:bg-primary/30 rounded" onClick={handleGenerate}>
              Gerar
            </button>
            <button
              className="px-3 py-2 bg-primary/20 hover:bg-primary/30 rounded disabled:opacity-50"
              onClick={() => result && download('emails.txt', result.emails.join('\n'))}
              disabled={!result || result.emails.length === 0}
            >
              Baixar emails.txt
            </button>
            <button
              className="px-3 py-2 bg-primary/20 hover:bg-primary/30 rounded disabled:opacity-50"
              onClick={() => result && download('wordlist.txt', result.passwords.join('\n'))}
              disabled={!result || result.passwords.length === 0}
            >
              Baixar wordlist.txt
            </button>
            <button
              className="px-3 py-2 bg-primary/20 hover:bg-primary/30 rounded disabled:opacity-50"
              onClick={() => result && download('usernames.txt', result.usernames.join('\n'))}
              disabled={!result || result.usernames.length === 0}
            >
              Baixar usernames.txt
            </button>
          </div>
          <p className="text-xs text-text-muted">Limites de segurança: {limits.MAX_EMAILS} e-mails, {limits.MAX_PASSWORDS} senhas por sessão. Prévia mostra {limits.PREVIEW_LIMIT} itens.</p>
        </div>

        <div className="md:col-span-2">
          {result && (
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h2 className="font-semibold mb-2">E-mails (prévia)</h2>
                <div className="h-64 overflow-auto p-3 border border-primary/20 rounded text-sm">
                  <ul>
                    {preview(result.emails).map(e => (
                      <li key={e}>{e}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h2 className="font-semibold mb-2">Senhas (prévia)</h2>
                <div className="h-64 overflow-auto p-3 border border-primary/20 rounded text-sm">
                  <ul>
                    {preview(result.passwords).map(e => (
                      <li key={e}>{e}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h2 className="font-semibold mb-2">Usernames (prévia)</h2>
                <div className="h-64 overflow-auto p-3 border border-primary/20 rounded text-sm">
                  <ul>
                    {preview(result.usernames).map(e => (
                      <li key={e}>{e}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
          <EthicsNotice />
        </div>
      </div>
    </section>
  )
}

export default EmailWordlistGenerator

