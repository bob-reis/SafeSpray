const EthicsNotice = () => (
  <div className="mt-6 bg-gradient-to-br from-red-500/10 via-yellow-500/10 to-orange-500/10 border-2 border-red-500/30 rounded-lg p-6 shadow-xl">
    {/* Critical Alert Header */}
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-red-500/20 border-2 border-red-500/40 flex items-center justify-center animate-pulse">
          <span className="text-red-400 text-2xl">⚠️</span>
        </div>
        <div>
          <h3 className="font-bold text-xl text-white flex items-center gap-2">
            <span>CRITICAL: Ethical Use & Legal Responsibility</span>
            <span className="text-xs bg-red-500/20 border border-red-500/40 px-2 py-1 rounded font-mono">MANDATORY</span>
          </h3>
          <p className="text-sm text-red-300 font-semibold">⚖️ Unauthorized access is ILLEGAL and punishable by law</p>
        </div>
      </div>
      <div className="text-xs bg-yellow-500/20 border border-yellow-500/30 px-3 py-1 rounded font-mono text-yellow-400">
        LEGAL NOTICE
      </div>
    </div>

    {/* Legal Warning Banner */}
    <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-3 mb-4">
      <div className="text-xs font-mono text-red-400 text-center">
        [LEGAL WARNING] This tool generates attack vectors for AUTHORIZED security testing only.
        <br />Misuse may result in criminal prosecution under computer crime laws.
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      {/* Authorized Use Cases */}
      <div className="bg-gradient-to-br from-green-500/5 to-emerald-500/5 border border-green-500/30 rounded-lg p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
            <span className="text-green-400 text-lg">✅</span>
          </div>
          <div>
            <h4 className="font-bold text-green-400 text-lg">AUTHORIZED USE CASES</h4>
            <div className="text-xs text-green-300">[LEGAL & ETHICAL APPLICATIONS]</div>
          </div>
        </div>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-500/20 rounded border border-green-500/30 flex items-center justify-center mt-0.5">
              <span className="text-green-400 text-xs">🎯</span>
            </div>
            <div>
              <strong className="text-white">Professional Penetration Testing:</strong>
              <div className="text-sm text-text-muted mt-1">Written authorization, defined scope, rules of engagement</div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-500/20 rounded border border-green-500/30 flex items-center justify-center mt-0.5">
              <span className="text-green-400 text-xs">🎓</span>
            </div>
            <div>
              <strong className="text-white">Cybersecurity Education:</strong>
              <div className="text-sm text-text-muted mt-1">Training labs, academic research, skill development</div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-500/20 rounded border border-green-500/30 flex items-center justify-center mt-0.5">
              <span className="text-green-400 text-xs">🛡️</span>
            </div>
            <div>
              <strong className="text-white">Defensive Security Testing:</strong>
              <div className="text-sm text-text-muted mt-1">Blue team exercises, detection capability validation</div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-500/20 rounded border border-green-500/30 flex items-center justify-center mt-0.5">
              <span className="text-green-400 text-xs">💡</span>
            </div>
            <div>
              <strong className="text-white">Security Awareness Programs:</strong>
              <div className="text-sm text-text-muted mt-1">Demonstrating password risks, user education</div>
            </div>
          </li>
        </ul>
      </div>

      {/* Prohibited Activities */}
      <div className="bg-gradient-to-br from-red-500/5 to-pink-500/5 border border-red-500/30 rounded-lg p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
            <span className="text-red-400 text-lg">❌</span>
          </div>
          <div>
            <h4 className="font-bold text-red-400 text-lg">PROHIBITED ACTIVITIES</h4>
            <div className="text-xs text-red-300">[ILLEGAL & CRIMINAL ACTIONS]</div>
          </div>
        </div>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 bg-red-500/20 rounded border border-red-500/30 flex items-center justify-center mt-0.5">
              <span className="text-red-400 text-xs">⚖️</span>
            </div>
            <div>
              <strong className="text-white">Unauthorized System Access:</strong>
              <div className="text-sm text-text-muted mt-1">Attacking systems without explicit written permission</div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 bg-red-500/20 rounded border border-red-500/30 flex items-center justify-center mt-0.5">
              <span className="text-red-400 text-xs">📊</span>
            </div>
            <div>
              <strong className="text-white">Data Theft & Exfiltration:</strong>
              <div className="text-sm text-text-muted mt-1">Accessing, copying, or stealing sensitive information</div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 bg-red-500/20 rounded border border-red-500/30 flex items-center justify-center mt-0.5">
              <span className="text-red-400 text-xs">💥</span>
            </div>
            <div>
              <strong className="text-white">Service Disruption:</strong>
              <div className="text-sm text-text-muted mt-1">DoS attacks, system outages, business interruption</div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 bg-red-500/20 rounded border border-red-500/30 flex items-center justify-center mt-0.5">
              <span className="text-red-400 text-xs">🔐</span>
            </div>
            <div>
              <strong className="text-white">Credential Abuse:</strong>
              <div className="text-sm text-text-muted mt-1">Misusing compromised accounts for malicious purposes</div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    {/* Enhanced Privacy & Security Guarantees */}
    <div className="mt-6 bg-gradient-to-r from-primary/5 via-blue-500/5 to-cyan-500/5 border border-primary/30 rounded-lg p-5">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
          <span className="text-primary text-xl">🛡️</span>
        </div>
        <div>
          <h4 className="font-bold text-primary text-lg">PRIVACY & SECURITY GUARANTEES</h4>
          <div className="text-xs text-blue-400">[BUILT-IN PROTECTION SYSTEMS]</div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-dark/50 border border-primary/20 rounded-lg p-4 text-center group hover:bg-primary/5 transition-all">
          <div className="w-12 h-12 mx-auto mb-3 bg-primary/20 rounded-full flex items-center justify-center">
            <span className="text-primary text-2xl">🔒</span>
          </div>
          <div className="font-bold text-primary mb-1">100% Client-Side</div>
          <div className="text-xs text-text-muted mb-2">All processing happens in your browser</div>
          <div className="text-xs text-green-400 font-mono">[NO SERVER PROCESSING]</div>
        </div>
        
        <div className="bg-dark/50 border border-blue-500/20 rounded-lg p-4 text-center group hover:bg-blue-500/5 transition-all">
          <div className="w-12 h-12 mx-auto mb-3 bg-blue-500/20 rounded-full flex items-center justify-center">
            <span className="text-blue-400 text-2xl">🚫</span>
          </div>
          <div className="font-bold text-blue-400 mb-1">Zero Data Collection</div>
          <div className="text-xs text-text-muted mb-2">No telemetry, tracking, or analytics</div>
          <div className="text-xs text-green-400 font-mono">[COMPLETE PRIVACY]</div>
        </div>
        
        <div className="bg-dark/50 border border-cyan-500/20 rounded-lg p-4 text-center group hover:bg-cyan-500/5 transition-all">
          <div className="w-12 h-12 mx-auto mb-3 bg-cyan-500/20 rounded-full flex items-center justify-center">
            <span className="text-cyan-400 text-2xl">🌐</span>
          </div>
          <div className="font-bold text-cyan-400 mb-1">Offline Operation</div>
          <div className="text-xs text-text-muted mb-2">Works without internet connection</div>
          <div className="text-xs text-green-400 font-mono">[AIR-GAPPED READY]</div>
        </div>
      </div>
    </div>

    {/* Professional Legal Framework */}
    <div className="mt-6 bg-gradient-to-r from-yellow-500/5 to-red-500/5 border border-yellow-500/30 rounded-lg p-4">
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-yellow-400 text-lg">⚖️</span>
          <h4 className="font-bold text-yellow-400">PROFESSIONAL LEGAL FRAMEWORK</h4>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 text-xs">
          <div className="bg-dark/30 border border-yellow-500/20 rounded p-3">
            <div className="font-semibold text-yellow-400 mb-1">📋 Required Documentation:</div>
            <ul className="text-text-muted space-y-1">
              <li>• Written authorization from system owner</li>
              <li>• Defined scope and time boundaries</li>
              <li>• Rules of engagement agreement</li>
              <li>• Emergency contact procedures</li>
            </ul>
          </div>
          <div className="bg-dark/30 border border-red-500/20 rounded p-3">
            <div className="font-semibold text-red-400 mb-1">⚖️ Legal Compliance:</div>
            <ul className="text-text-muted space-y-1">
              <li>• Computer Fraud and Abuse Act (CFAA)</li>
              <li>• GDPR and data protection laws</li>
              <li>• Local cybercrime legislation</li>
              <li>• Professional ethical guidelines</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 mt-4">
          <div className="font-mono text-sm text-center">
            <strong className="text-red-400">⚠️ CRITICAL DISCLAIMER:</strong>
            <div className="text-text-muted mt-1">
              You are solely responsible for compliance with applicable laws and regulations.
              <br />
              The author and contributors assume <strong className="text-red-400">NO LIABILITY</strong> for misuse of this educational tool.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default EthicsNotice
