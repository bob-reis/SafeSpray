import { SITE } from '@/lib/site'

export const metadata = {
  title: `${SITE.name} | Tutorial e Documentação`,
}

export default function Docs() {
  return (
    <main className="container mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">📚</span>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">
              {SITE.name} – Cybersecurity Education Hub
            </h1>
            <p className="text-text-muted">
              Master OSINT techniques, penetration testing methodologies, and defensive security through hands-on learning.
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-green-500">Educational Content</span>
          <span className="text-text-muted">•</span>
          <span className="text-text-muted">Authorized Use Only</span>
          <span className="text-text-muted">•</span>
          <span className="text-text-muted">Ethical Hacking Focus</span>
        </div>
      </div>

      <div className="space-y-8">{/* Purpose Section */}
        <div className="bg-gradient-to-br from-primary/5 to-green-500/5 border border-primary/20 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-primary">🎯</span>
            <h2 className="text-xl font-bold">Mission & Purpose</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-dark/30 border border-blue-500/20 rounded-lg p-4">
              <div className="text-blue-400 text-2xl mb-2">📧</div>
              <h3 className="font-semibold text-blue-400 mb-2">Email Intelligence</h3>
              <p className="text-sm text-text-muted">Generate plausible email variations based on OSINT data for authorized testing scenarios.</p>
            </div>
            <div className="bg-dark/30 border border-yellow-500/20 rounded-lg p-4">
              <div className="text-yellow-400 text-2xl mb-2">👤</div>
              <h3 className="font-semibold text-yellow-400 mb-2">Username Enumeration</h3>
              <p className="text-sm text-text-muted">Create comprehensive username lists from personal information patterns.</p>
            </div>
            <div className="bg-dark/30 border border-red-500/20 rounded-lg p-4">
              <div className="text-red-400 text-2xl mb-2">🔑</div>
              <h3 className="font-semibold text-red-400 mb-2">Password Wordlists</h3>
              <p className="text-sm text-text-muted">Build targeted password dictionaries using psychological profiling techniques.</p>
            </div>
          </div>
        </div>

        {/* Complete OSINT Learning Guide */}
        <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-purple-400">🎓</span>
            <h2 className="text-xl font-bold">Complete OSINT & Password Spraying Course</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Phase 1: Reconnaissance */}
            <div className="bg-dark/30 border border-blue-500/20 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Phase 1: Information Gathering</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm mb-1">🔍 Passive OSINT Sources</h4>
                  <ul className="text-sm text-text-muted space-y-1 ml-4">
                    <li>• LinkedIn employee enumeration</li>
                    <li>• Company website contact pages</li>
                    <li>• Social media profiles and posts</li>
                    <li>• GitHub repositories and commits</li>
                    <li>• Job postings and team descriptions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">📧 Email Pattern Discovery</h4>
                  <ul className="text-sm text-text-muted space-y-1 ml-4">
                    <li>• Hunter.io pattern analysis</li>
                    <li>• Email signatures in documents</li>
                    <li>• Contact forms and support pages</li>
                    <li>• Press releases and news articles</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 2: Target Profiling */}
            <div className="bg-dark/30 border border-green-500/20 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-400 mb-3">Phase 2: Target Profiling</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm mb-1">👤 Personal Information</h4>
                  <ul className="text-sm text-text-muted space-y-1 ml-4">
                    <li>• Full names and nicknames</li>
                    <li>• Birth dates and important years</li>
                    <li>• Family members (spouse, children)</li>
                    <li>• Pet names from social media</li>
                    <li>• Hobbies and interests</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">🏢 Professional Information</h4>
                  <ul className="text-sm text-text-muted space-y-1 ml-4">
                    <li>• Job titles and departments</li>
                    <li>• Company culture and values</li>
                    <li>• Office locations and codes</li>
                    <li>• Employee ID patterns</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 3: Weaponization */}
            <div className="bg-dark/30 border border-yellow-500/20 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-yellow-400 mb-3">Phase 3: Weaponization with SafeSpray</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm mb-1">⚡ Wordlist Generation</h4>
                  <ul className="text-sm text-text-muted space-y-1 ml-4">
                    <li>• Input gathered intelligence data</li>
                    <li>• Generate targeted email lists</li>
                    <li>• Create custom password dictionaries</li>
                    <li>• Build username variation sets</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">🎯 Pattern Optimization</h4>
                  <ul className="text-sm text-text-muted space-y-1 ml-4">
                    <li>• Company-specific email formats</li>
                    <li>• Cultural password patterns</li>
                    <li>• Personal information combinations</li>
                    <li>• Common substitution rules</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 4: Execution */}
            <div className="bg-dark/30 border border-red-500/20 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-red-400 mb-3">Phase 4: Controlled Execution</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm mb-1">🚀 Password Spraying</h4>
                  <ul className="text-sm text-text-muted space-y-1 ml-4">
                    <li>• Low-and-slow attack methodology</li>
                    <li>• Rate limiting (1 attempt/30 min)</li>
                    <li>• Account lockout monitoring</li>
                    <li>• Success rate tracking</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">🛡️ Safety Measures</h4>
                  <ul className="text-sm text-text-muted space-y-1 ml-4">
                    <li>• Written authorization required</li>
                    <li>• Immediate halt on detection</li>
                    <li>• Secure evidence handling</li>
                    <li>• Professional reporting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools and Resources */}
        <div className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-cyan-400">🛠️</span>
            <h2 className="text-xl font-bold">Professional Toolkit & Resources</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-dark/30 border border-primary/20 rounded-lg p-4">
              <h3 className="font-semibold text-primary mb-3">OSINT Tools</h3>
              <ul className="text-sm space-y-1">
                <li><strong>Sherlock:</strong> Username hunting across platforms</li>
                <li><strong>theHarvester:</strong> Email and subdomain collection</li>
                <li><strong>Recon-ng:</strong> Full-featured OSINT framework</li>
                <li><strong>Maltego:</strong> Visual intelligence analysis</li>
                <li><strong>SpiderFoot:</strong> Automated OSINT collection</li>
              </ul>
            </div>
            
            <div className="bg-dark/30 border border-primary/20 rounded-lg p-4">
              <h3 className="font-semibold text-primary mb-3">Password Tools</h3>
              <ul className="text-sm space-y-1">
                <li><strong>Spray365:</strong> Office 365 password spraying</li>
                <li><strong>CrackMapExec:</strong> Network authentication testing</li>
                <li><strong>Hydra:</strong> Multi-protocol brute force</li>
                <li><strong>Burp Suite:</strong> Web application testing</li>
                <li><strong>John the Ripper:</strong> Password hash cracking</li>
              </ul>
            </div>
            
            <div className="bg-dark/30 border border-primary/20 rounded-lg p-4">
              <h3 className="font-semibold text-primary mb-3">Educational Resources</h3>
              <ul className="text-sm space-y-1">
                <li><strong>OWASP Testing Guide:</strong> Web security testing</li>
                <li><strong>PTES:</strong> Penetration testing execution standard</li>
                <li><strong>NIST Cybersecurity Framework:</strong> Security guidelines</li>
                <li><strong>SANS GPEN:</strong> Penetration testing certification</li>
                <li><strong>eLearnSecurity:</strong> Practical security training</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal and Ethical Framework */}
        <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-red-400">⚖️</span>
            <h2 className="text-xl font-bold">Legal & Ethical Framework</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-400 mb-3">✅ Authorized Activities</h3>
              <ul className="text-sm space-y-2">
                <li><strong>Bug Bounty Programs:</strong> Authorized security testing on platforms like HackerOne</li>
                <li><strong>Penetration Testing:</strong> Professional security assessments with written contracts</li>
                <li><strong>Red Team Exercises:</strong> Authorized adversarial simulations</li>
                <li><strong>Security Education:</strong> Training in controlled lab environments</li>
                <li><strong>Personal Research:</strong> Testing on your own systems and accounts</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-red-400 mb-3">❌ Illegal Activities</h3>
              <ul className="text-sm space-y-2">
                <li><strong>Unauthorized Access:</strong> Accessing systems without explicit permission</li>
                <li><strong>Data Theft:</strong> Stealing or exfiltrating sensitive information</li>
                <li><strong>Service Disruption:</strong> Causing downtime or system instability</li>
                <li><strong>Credential Abuse:</strong> Using compromised accounts for malicious purposes</li>
                <li><strong>Privacy Violation:</strong> Collecting personal data without consent</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
            <h3 className="font-semibold text-yellow-400 mb-2">📝 Documentation Requirements</h3>
            <p className="text-sm text-text-muted">
              Always maintain detailed documentation of authorization, scope, methodology, findings, and remediation.
              Professional penetration testing requires comprehensive reporting that demonstrates both technical
              expertise and ethical conduct.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
