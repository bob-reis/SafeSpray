import { SITE } from '@/lib/site'

export const metadata = {
  title: `${SITE.name} | About`,
}

export default function About() {
  return (
    <main className="container mx-auto px-4 py-10 prose prose-invert max-w-none">
      <h1>About SafeSpray - Cybersecurity Education Hub</h1>
      
      <blockquote className="text-xl italic border-l-4 border-blue-500 pl-6 my-8">
        &ldquo;In cybersecurity, understanding your adversary means thinking like one - ethically.&rdquo;
      </blockquote>

      <p className="text-lg">
        {SITE.name} is not just another wordlist generator. It&rsquo;s a comprehensive <strong>cybersecurity education platform</strong>{' '}
        that bridges the gap between theoretical security knowledge and practical penetration testing skills. 
        Built for ethical hackers, red teamers, security researchers, and blue team defenders who need to 
        understand attack vectors to build better defenses.
      </p>

      <h2>🎯 Mission & Vision</h2>
      <div className="grid md:grid-cols-2 gap-6 not-prose">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-blue-400 mb-4">Educational Excellence</h3>
          <ul className="text-gray-300 space-y-2">
            <li>• Promote security through practical education</li>
            <li>• Demonstrate real-world attack methodologies</li>
            <li>• Enable hands-on learning in controlled environments</li>
            <li>• Bridge theory-to-practice gap in cybersecurity</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-green-400 mb-4">Ethical Standards</h3>
          <ul className="text-gray-300 space-y-2">
            <li>• Authorized testing environments only</li>
            <li>• Privacy-first architecture (100% client-side)</li>
            <li>• Built-in safety limits and controls</li>
            <li>• Responsible disclosure practices</li>
          </ul>
        </div>
      </div>

      <h2>🔬 What Makes SafeSpray Unique</h2>
      <p>
        Unlike commercial wordlist generators that simply produce random combinations, SafeSpray is built on 
        <strong>actual attacker methodology</strong>{' '}and{' '}<strong>behavioral psychology research</strong>. 
        It replicates how real-world adversaries conduct reconnaissance, build target profiles, and generate 
        credential attack lists.
      </p>

      <h3>Real-World Attack Simulation</h3>
      <ul>
        <li><strong>OSINT-driven generation:</strong>{' '}Mimics actual reconnaissance techniques used by professional penetration testers</li>
        <li><strong>Behavioral pattern analysis:</strong>{' '}Based on analysis of actual breached password datasets (RockYou, LinkedIn, Adobe, etc.)</li>
        <li><strong>Corporate environment targeting:</strong>{' '}Generates domain-specific wordlists following real naming conventions</li>
        <li><strong>Social engineering insights:</strong>{' '}Demonstrates how attackers exploit personal information</li>
      </ul>

      <h3>Privacy-First Architecture</h3>
      <ul>
        <li><strong>Zero telemetry:</strong>{' '}No tracking, analytics, or data collection</li>
        <li><strong>100% client-side processing:</strong>{' '}Data never leaves your browser</li>
        <li><strong>Offline capable:</strong>{' '}Works completely disconnected from the internet</li>
        <li><strong>Enterprise-friendly:</strong>{' '}Safe to use in air-gapped environments</li>
      </ul>

      <h2>🎓 Educational Framework</h2>
      <p>
        SafeSpray follows industry-standard penetration testing methodologies and integrates with 
        professional security frameworks used by organizations worldwide:
      </p>

      <div className="grid md:grid-cols-3 gap-4 not-prose my-8">
        <div className="bg-red-900/30 p-4 rounded-lg border border-red-500">
          <h4 className="font-bold text-red-400 mb-2">🔍 Red Team Operations</h4>
          <p className="text-sm text-gray-300">Offensive security techniques, C2 framework integration, evasion strategies</p>
        </div>
        <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-500">
          <h4 className="font-bold text-blue-400 mb-2">🛡️ Blue Team Defense</h4>
          <p className="text-sm text-gray-300">SIEM rule development, honeypot creation, detection engineering</p>
        </div>
        <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-500">
          <h4 className="font-bold text-purple-400 mb-2">🧠 Behavioral Analysis</h4>
          <p className="text-sm text-gray-300">Password psychology, social engineering patterns, cognitive bias exploitation</p>
        </div>
      </div>

      <h2>🔧 Professional Tool Integration</h2>
      <p>SafeSpray generates wordlists optimized for integration with industry-standard security tools:</p>
      <ul>
        <li><strong>Burp Suite Professional:</strong>{' '}Intruder payload integration</li>
        <li><strong>Metasploit Framework:</strong>{' '}Auxiliary module compatibility</li>
        <li><strong>OWASP ZAP:</strong>{' '}Fuzzing payload generation</li>
        <li><strong>Hydra/Medusa:</strong>{' '}Credential attack optimization</li>
        <li><strong>Cobalt Strike:</strong>{' '}C2 framework integration</li>
        <li><strong>Custom SIEM platforms:</strong>{' '}Detection rule development</li>
      </ul>

      <h2>👨‍💻 About the Author</h2>
      <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 not-prose">
        <h3 className="text-cyan-400 font-semibold mb-3 text-xl">Bob - Cybersecurity Specialist</h3>
        <p className="text-cyan-300 italic mb-4 text-lg">
          &ldquo;I prefer logs over pretty PowerPoints.&rdquo;
        </p>
        <p className="text-gray-300 mb-4">
          I&rsquo;m a cybersecurity specialist who over the past years has led teams, built cloud infrastructure,
          protected sensitive data, analyzed malware, deployed XDR solutions, and automated just about everything
          (coffee... not yet). I invest heavily in what most ignore:{' '}<strong className="text-white">real security from the first line of code</strong>.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-900 p-4 rounded border border-green-500/30">
            <h4 className="text-green-400 font-semibold mb-3">🏗️ Technical Focus</h4>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>• <strong>DevSecOps Architect</strong></li>
              <li>• <strong>AppSec Solutions Builder</strong></li>
              <li>• <strong>OSINT Investigator</strong></li>
              <li>• <strong>Red/Blue Teamer at heart</strong></li>
            </ul>
          </div>
          <div className="bg-slate-900 p-4 rounded border border-purple-500/30">
            <h4 className="text-purple-400 font-semibold mb-3">⚡ Hands-on Experience</h4>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>• <strong>Malware analysis</strong></li>
              <li>• <strong>XDR deployment</strong></li>
              <li>• <strong>Pipeline automation</strong></li>
              <li>• <strong>Incident response</strong></li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 mb-4">
          I work as a DevSecOps architect, AppSec solutions builder, OSINT investigator, and an all-around red/blue teamer.
          I like building my own tools, hacking my own code, using AI to accelerate investigations, and turning chaos into{' '}
          <strong className="text-cyan-300">automated pipelines that keep working even under attack</strong>.
        </p>
        <p className="text-gray-300 mb-6">
          I&rsquo;ve uncovered fraud, helped companies through critical incidents, and built cybersecurity infrastructure focused on
          prevention, response, and visibility — always with{' '}<strong className="text-green-300">ethics, methodology, and a touch of calculated rebellion</strong>.
        </p>
        <div className="bg-slate-900 p-4 rounded border border-cyan-500/30 mb-6">
          <p className="text-cyan-300 font-medium">
            <strong>💡 Philosophy:</strong>{' '}If you&rsquo;re looking for someone who understands the underground, knows the tools,
            thinks like an attacker and defends like an architect, we should talk.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a 
            href={SITE.socials.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white no-underline transition-colors font-medium"
          >
            💼 LinkedIn
          </a>
          <a 
            href={SITE.socials.twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-slate-600 hover:bg-slate-700 px-4 py-2 rounded-lg text-white no-underline transition-colors font-medium"
          >
            🐦 Twitter/X
          </a>
          <a 
            href={SITE.socials.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded-lg text-white no-underline transition-colors font-medium"
          >
            💻 GitHub
          </a>
        </div>
      </div>

      <h2>🏆 Industry Recognition & Certifications</h2>
      <p>SafeSpray aligns with industry-leading cybersecurity frameworks and certification requirements:</p>
      <div className="grid md:grid-cols-2 gap-4 not-prose">
        <div>
          <h4 className="font-bold text-green-400 mb-2">Professional Certifications</h4>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>• OSCP (Offensive Security Certified Professional)</li>
            <li>• GCPN (GIAC Certified Penetration Tester)</li>
            <li>• CRTO (Certified Red Team Operator)</li>
            <li>• CISSP (Certified Information Systems Security Professional)</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-blue-400 mb-2">Framework Compliance</h4>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>• NIST Cybersecurity Framework</li>
            <li>• ISO 27001 Information Security Management</li>
            <li>• OWASP Testing Guide v4.2</li>
            <li>• PTES (Penetration Testing Execution Standard)</li>
          </ul>
        </div>
      </div>

      <h2>🤝 Community & Collaboration</h2>
      <p>
        SafeSpray is part of a larger cybersecurity education initiative. We actively collaborate with:
      </p>
      <ul>
        <li><strong>Academic institutions</strong>{' '}for cybersecurity curriculum development</li>
        <li><strong>Security vendors</strong>{' '}for threat intelligence integration</li>
        <li><strong>Government agencies</strong>{' '}for national security education programs</li>
        <li><strong>Professional organizations</strong>{' '}(ISACA, ISC2, SANS) for certification alignment</li>
        <li><strong>Open source communities</strong>{' '}for continuous improvement and innovation</li>
      </ul>

      <h2>⚖️ Legal Notice & Ethical Guidelines</h2>
      <div className="bg-red-900/20 border border-red-500 p-6 rounded-lg not-prose">
        <h3 className="text-red-400 font-bold mb-4">⚠️ Important Legal Disclaimer</h3>
        <div className="text-gray-300 space-y-3">
          <p>
            <strong>SafeSpray is intended EXCLUSIVELY for authorized security testing and educational purposes.</strong> 
            Any unauthorized use is strictly prohibited and may violate local and international laws.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-green-400 mb-2">✅ Authorized Uses</h4>
              <ul className="text-sm space-y-1">
                <li>• Penetration testing with written authorization</li>
                <li>• Security awareness training programs</li>
                <li>• Academic research and education</li>
                <li>• Personal learning in isolated environments</li>
                <li>• Blue team defense strategy development</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-red-400 mb-2">❌ Prohibited Uses</h4>
              <ul className="text-sm space-y-1">
                <li>• Unauthorized access attempts</li>
                <li>• Malicious credential harvesting</li>
                <li>• Social engineering attacks</li>
                <li>• Privacy violations or stalking</li>
                <li>• Any illegal or unethical activities</li>
              </ul>
            </div>
          </div>
          <p className="text-sm italic">
            By using SafeSpray, you acknowledge that you are solely responsible for ensuring compliance 
            with all applicable laws and regulations. You must obtain proper authorization before testing 
            any systems you do not own or have explicit permission to test.
          </p>
        </div>
      </div>

      <h2>📞 Contact & Support</h2>
      <p>
        For questions about ethical use, educational partnerships, or technical support, 
        please reach out through the appropriate channels:
      </p>
      <div className="not-prose">
        <ul className="text-gray-300">
          <li><strong>General inquiries:</strong>{' '}LinkedIn or Twitter/X</li>
          <li><strong>Security issues:</strong>{' '}Responsible disclosure via GitHub</li>
          <li><strong>Educational partnerships:</strong>{' '}LinkedIn professional network</li>
          <li><strong>Technical contributions:</strong>{' '}GitHub pull requests and issues</li>
        </ul>
      </div>

      <div className="mt-12 text-center not-prose">
        <p className="text-xl italic text-blue-400">
          &ldquo;The best defense is understanding the offense. SafeSpray makes that understanding accessible to everyone committed to improving cybersecurity.&rdquo;
        </p>
        <p className="text-gray-400 mt-4">Keep Learning to Keep Hacking. Happy Ethical Hacking!</p>
      </div>
    </main>
  )
}
