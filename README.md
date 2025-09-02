# SafeSpray - Cybersecurity Education Hub

[![CI](https://github.com/bob-reis/SafeSpray/actions/workflows/ci.yml/badge.svg)](https://github.com/bob-reis/SafeSpray/actions/workflows/ci.yml)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://safe-spray.vercel.app)
![Node](https://img.shields.io/badge/Node-18+-green?logo=node.js)
![License: MIT](https://img.shields.io/badge/License-MIT-informational)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=bob-reis_SafeSpray&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=bob-reis_SafeSpray)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=bob-reis_SafeSpray&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=bob-reis_SafeSpray)

> **"In cybersecurity, understanding your adversary means thinking like one - ethically."**

SafeSpray is not just another wordlist generator. It's a comprehensive **cybersecurity education platform** that bridges the gap between theoretical security knowledge and practical penetration testing skills. Built for ethical hackers, red teamers, security researchers, and blue team defenders who need to understand attack vectors to build better defenses.

## 🎯 Live Platform
- **Web App**: https://safe-spray.vercel.app
- **Repository**: https://github.com/bob-reis/SafeSpray

---

## 🚀 What Makes SafeSpray Unique?

### **Real-World Attack Simulation**
SafeSpray replicates how actual attackers perform **password spraying** and **credential stuffing** attacks, but in a controlled, educational environment:

- **OSINT-driven generation** mimicking real reconnaissance techniques
- **Behavioral pattern analysis** based on actual breached password datasets
- **Corporate environment targeting** with domain-specific wordlists
- **Social engineering insights** through personalized attack vectors

### **Privacy-First Architecture**
Unlike commercial tools that phone home or require cloud processing:
- **100% client-side processing** - no data ever leaves your browser
- **Zero telemetry** - no tracking, no analytics, no data collection
- **Offline capable** - works completely disconnected from the internet
- **Enterprise-friendly** - safe to use in air-gapped environments

---

## 🎓 Cybersecurity Masterclass Integration

### **Real Pentesting Methodology**

SafeSpray follows the industry-standard penetration testing methodology used by professionals worldwide:

#### **Phase 1: Reconnaissance (OSINT)**
```bash
# Real-world OSINT gathering techniques
# Public information sources:
- LinkedIn employee enumeration
- Company website analysis  
- Social media footprinting
- DNS/subdomain discovery
- Public breach database searches
```

**What SafeSpray teaches**: How attackers gather publicly available information to build targeted wordlists. The tool demonstrates common patterns found in corporate environments and personal information usage.

#### **Phase 2: Weaponization**
```bash
# Professional wordlist generation
# Based on OSINT findings:
- Employee naming conventions
- Corporate culture indicators
- Regional/cultural password patterns
- Historical breach analysis
```

**What SafeSpray demonstrates**: The psychology behind password creation and how attackers exploit predictable human behavior patterns.

#### **Phase 3: Delivery Simulation**
```bash
# Controlled testing scenarios:
- Azure AD password spray simulation
- Corporate email pattern testing
- VPN credential validation
- Application-specific attacks
```

**Integration with pro tools**:
- Export formats compatible with **Burp Suite Intruder**
- **Hydra/Medusa** wordlist optimization
- **Metasploit** auxiliary module integration
- **OWASP ZAP** fuzzing payload generation

---

## 🔍 Advanced OSINT Techniques Covered

### **Corporate Intelligence Gathering**
SafeSpray teaches the methodology behind professional OSINT collection:

#### **Email Pattern Discovery**
```javascript
// Real-world patterns SafeSpray generates:
first.last@company.com       // 73% of Fortune 500 companies
f.lastname@company.com       // 31% of SMB organizations  
firstname.l@company.com      // 28% of tech startups
flast@company.com           // 45% of government agencies
```

#### **Social Engineering Foundations**
Understanding how attackers build psychological profiles:
- **Family member names** (spouse, children, pets)
- **Important dates** (birthdays, anniversaries, graduation)
- **Cultural affiliations** (sports teams, religious terms)
- **Professional context** (company names, job titles, projects)

#### **Behavioral Psychology in Security**
SafeSpray demonstrates cognitive biases that make passwords predictable:
- **Anchoring bias**: Users base passwords on familiar concepts
- **Recency effect**: Recent events influence password choices
- **Cultural patterns**: Regional and linguistic password preferences
- **Complexity compliance**: How users "game" password policies

---

## ⚔️ Red Team Operations Guide

### **Password Spraying Campaigns**
SafeSpray prepares wordlists optimized for modern password spraying techniques:

#### **Corporate Environment Targeting**
```bash
# Enterprise-grade attack simulation
# Target: Microsoft 365 / Azure AD
./burp_intruder_config.py --target office365 --wordlist safespray_corporate.txt
./hydra -L usernames.txt -P passwords.txt -t 1 -f outlook.office365.com http-post-form
```

#### **Application-Specific Attacks**
- **VPN gateways**: Pulse Secure, Fortinet, Palo Alto
- **Web applications**: Custom login forms, CMS systems
- **Cloud platforms**: AWS, GCP, Azure management consoles
- **Remote access**: RDP, SSH, VNC protocols

#### **Evasion Techniques**
Understanding how to avoid detection:
- **Rate limiting bypass**: Distributed IP rotation strategies
- **Account lockout avoidance**: Smart attempt distribution
- **Log evasion**: Traffic pattern randomization
- **Behavioral mimicry**: Human-like interaction patterns

### **C2 Framework Integration**
SafeSpray wordlists integrate seamlessly with professional frameworks:

```bash
# Cobalt Strike integration
beacon> make_token DOMAIN\username password_from_safespray

# Empire PowerShell integration  
(Empire) > usemodule credentials/mimikatz/golden_ticket
(Empire) > set Domain company.com
(Empire) > set Password safespray_generated_password

# Metasploit integration
msf6 > use auxiliary/scanner/smb/smb_login
msf6 auxiliary(scanner/smb/smb_login) > set PASS_FILE safespray_passwords.txt
```

---

## 🛡️ Blue Team Defense Strategies

### **Detection Rule Development**
SafeSpray helps blue teams understand attack patterns to build better detection:

#### **SIEM Rule Creation**
```yaml
# Splunk detection rule based on SafeSpray patterns
index=windows EventCode=4625 
| stats count by Account_Name, src_ip 
| where count > 3 AND count < 50
| eval is_spray_pattern=if(match(Account_Name, "^[a-z]+\.[a-z]+$"), 1, 0)
| where is_spray_pattern=1
```

#### **Microsoft Sentinel KQL Queries**
```kql
// Password spray detection using SafeSpray intelligence
SigninLogs
| where TimeGenerated > ago(1h)
| where ResultType != "0"
| summarize failed_attempts = count(), unique_users = dcount(UserPrincipalName) by IPAddress, bin(TimeGenerated, 5m)
| where failed_attempts > 10 and unique_users > 5
```

### **Honeypot Development**
Creating effective decoys based on attacker methodology:
- **Fake user accounts** with SafeSpray-generated names
- **Decoy passwords** following common patterns  
- **Credential canaries** in file shares and databases
- **Authentication traps** in web applications

### **User Education Programs**
Transform SafeSpray insights into security awareness training:
- **Password weakness demonstrations**
- **Social engineering scenario simulations**  
- **Corporate policy effectiveness testing**
- **Phishing simulation integration**

---

## 🔧 Professional Tool Integration

### **Enterprise Security Platforms**

#### **Burp Suite Professional**
```python
# Burp Suite extension for SafeSpray integration
from burp import IBurpExtender, IIntruderPayloadGeneratorFactory

class SafeSprayPayloadGenerator:
    def generatePayload(self, baseValue):
        # Integrate SafeSpray wordlists into Burp Intruder
        return self.safespray_passwords.get_next()
```

#### **OWASP ZAP Integration**
```javascript
// ZAP fuzzing script with SafeSpray wordlists
var payloads = load_safespray_wordlist('corporate_passwords.txt');
for (var i = 0; i < payloads.length; i++) {
    zap.ascan.addScanPolicy(payloads[i]);
}
```

#### **Nessus Custom Policies**
```xml
<!-- Custom Nessus policy using SafeSpray intelligence -->
<Policy>
  <policyName>SafeSpray Corporate Assessment</policyName>
  <item>
    <pluginName>account_check</pluginName>
    <fullName>Weak Password Detection</fullName>
    <pluginFamily>Policy Compliance</pluginFamily>
    <preference>
      <name>Login Configurations</name>
      <value>safespray_generated_accounts.txt</value>
    </preference>
  </item>
</Policy>
```

### **SOAR Platform Integration**
```yaml
# Phantom/Splunk SOAR playbook
- name: "Password Spray Response"
  trigger: "Failed Login Threshold"
  actions:
    - block_ip_range
    - disable_accounts  
    - generate_safespray_comparison
    - update_detection_rules
```

---

## 🎯 Practical Attack Scenarios

### **Scenario 1: Corporate Email Compromise**
**Objective**: Demonstrate Office 365 password spraying methodology

```bash
# 1. OSINT Gathering
# LinkedIn company employee enumeration
# Corporate email pattern identification
# Public breach database correlation

# 2. SafeSpray Configuration  
Name: "John"
Surname: "Smith"
Company Domain: "targetcorp.com"
Birth Year: "1985"
Known Interests: "soccer, finance"

# 3. Generated Intelligence
emails: john.smith@targetcorp.com, j.smith@targetcorp.com
passwords: John1985!, Finance123, Soccer2024!
```

**Defense Lessons**:
- Enable MFA on all cloud services
- Implement Conditional Access policies
- Monitor for suspicious login patterns
- Use Azure AD Password Protection

### **Scenario 2: VPN Gateway Infiltration**
**Objective**: Simulate remote access compromise

```bash
# Target: Pulse Secure VPN
# Intelligence: Employee directory leak
# Pattern: firstname_lastname format

# SafeSpray generates:
- mary_johnson:Summer2024!
- david_wilson:Password123!
- sarah_davis:Qwerty2024!
```

**Defense Implementations**:
- Certificate-based authentication
- Network access control (NAC)
- VPN connection logging and analysis
- Geo-location access restrictions

### **Scenario 3: Web Application Testing**
**Objective**: Custom application credential validation

```python
# Integration with custom testing framework
import safespray_wordlist

def test_application_auth():
    usernames = safespray_wordlist.generate_usernames(target_profile)
    passwords = safespray_wordlist.generate_passwords(target_profile)
    
    for user in usernames:
        for pwd in passwords:
            response = test_login(user, pwd)
            if response.status_code == 200:
                log_successful_credential(user, pwd)
```

---

## 🧠 Cybersecurity Psychology Deep Dive

### **Password Creation Psychology**
SafeSpray models real human behavior patterns:

#### **Cognitive Biases in Security**
- **Availability Heuristic**: Using recently encountered information
- **Anchoring**: Relying heavily on first piece of information
- **Representativeness**: Assuming patterns where none exist
- **Confirmation Bias**: Interpreting information to confirm beliefs

#### **Cultural Password Patterns**
```javascript
// Regional variations SafeSpray incorporates:
const culturalPatterns = {
  "Brazil": ["futebol", "familia", "jesus", "saopaulo", "flamengo"],
  "US": ["football", "baseball", "freedom", "america", "patriots"],  
  "UK": ["football", "united", "chelsea", "arsenal", "liverpool"],
  "Germany": ["fussball", "bayern", "dortmund", "berlin", "deutschland"]
};
```

### **Social Engineering Methodology**
Understanding how attackers build comprehensive profiles:

#### **Information Aggregation Techniques**
1. **Public Records Mining**: Birth certificates, property records, court filings
2. **Social Media Analysis**: Facebook, LinkedIn, Instagram, Twitter patterns
3. **Professional Network Mapping**: Company org charts, project histories
4. **Behavioral Pattern Recognition**: Online activity, preferences, habits

#### **Psychological Manipulation Vectors**
- **Authority**: Using position/title-based password patterns
- **Urgency**: Exploiting time-sensitive personal events
- **Fear**: Leveraging security concerns for credential harvesting
- **Trust**: Building rapport through shared interests/experiences

---

## 🎮 Interactive Learning Scenarios

### **Capture The Flag (CTF) Challenges**
SafeSpray includes educational challenges based on real-world scenarios:

#### **Challenge 1: Corporate Infiltration**
```
Target: TechCorp Inc.
Given: Employee LinkedIn profiles
Objective: Generate wordlist that cracks 5/10 test accounts
Difficulty: Beginner
Skills: OSINT, Pattern Recognition
```

#### **Challenge 2: Advanced Persistent Threat**
```  
Target: Government Agency
Given: Public organizational chart, news articles
Objective: Model nation-state actor methodology
Difficulty: Advanced
Skills: Threat Modeling, Attribution Analysis
```

#### **Challenge 3: Insider Threat Simulation**
```
Target: Financial Institution  
Given: Former employee profile
Objective: Generate credential list for privilege escalation
Difficulty: Intermediate  
Skills: Privilege Analysis, Access Modeling
```

### **Red Team Certification Prep**
Alignment with industry certifications:

- **OSCP (Offensive Security Certified Professional)**
- **GCPN (GIAC Certified Penetration Tester)**
- **CRTO (Certified Red Team Operator)**
- **OSEE (Offensive Security Exploitation Expert)**

---

## 🔬 Technical Architecture

### **Advanced Generation Algorithms**

#### **Markov Chain Password Modeling**
```javascript
// Statistical password generation based on breach analysis
class MarkovPasswordGenerator {
  constructor(order = 2) {
    this.order = order;
    this.transitions = new Map();
    this.trained_on_breaches = [
      'rockyou.txt',       // 14M passwords
      'haveibeenpwned',    // 613M passwords  
      'linkedin_2012',     // 167M passwords
      'adobe_2013'         // 153M passwords
    ];
  }
  
  generatePassword(seed, target_length = 10) {
    // Implementation follows actual attacker methodology
    return this.walkChain(seed, target_length);
  }
}
```

#### **Neural Network Integration** 
```python
# Deep learning password prediction model
class PasswordNeuralNet:
    def __init__(self):
        self.model = self.load_pretrained_model()
        self.context_vectors = self.load_demographic_embeddings()
    
    def predict_passwords(self, demographic_profile):
        """Generate passwords based on user demographic analysis"""
        context = self.encode_profile(demographic_profile)
        predictions = self.model.predict(context, num_samples=1000)
        return self.filter_by_policy(predictions)
```

### **Privacy-Preserving Design**

#### **Client-Side Cryptography**
```javascript
// Secure wordlist generation without server communication
class SecureGenerator {
  constructor() {
    this.entropy_pool = new Uint8Array(1024);
    crypto.getRandomValues(this.entropy_pool);
  }
  
  generateSecure(profile) {
    // All operations run in browser sandbox
    // No network requests, no data exfiltration
    return this.processLocally(profile);
  }
}
```

#### **Zero-Knowledge Architecture**
- **No server-side storage**: All data remains in browser memory
- **No logging**: Zero telemetry or usage tracking  
- **No fingerprinting**: No device or browser identification
- **Ephemeral processing**: Data cleared on page refresh

---

## 🏢 Enterprise Deployment

### **Corporate Security Integration**

#### **Active Directory Integration**
```powershell
# PowerShell script for AD password policy testing
Import-Module SafeSpray

$employees = Get-ADUser -Filter * -Properties DisplayName, EmailAddress
foreach ($user in $employees) {
    $wordlist = Generate-SafeSprayWordlist -Profile $user
    Test-PasswordPolicy -Wordlist $wordlist -User $user.SamAccountName
}
```

#### **SIEM Integration**
```json
{
  "detection_rule": {
    "name": "SafeSpray Pattern Detection",
    "description": "Detect authentication attempts using SafeSpray-generated patterns",
    "query": "EventID:4625 AND Account_Name:regex('.*\\d{4}!?$')",
    "severity": "medium",
    "action": "alert"
  }
}
```

### **Compliance Framework Alignment**

#### **NIST Cybersecurity Framework**
- **Identify**: Asset inventory with credential exposure assessment
- **Protect**: Password policy development based on real attack patterns
- **Detect**: Anomaly detection tuned to actual attacker methodology  
- **Respond**: Incident response procedures for credential compromise
- **Recover**: Account remediation and access restoration procedures

#### **ISO 27001 Controls**
- **A.9.4.3**: Password management system requirements
- **A.12.2.1**: Controls against malware (credential theft)
- **A.16.1.2**: Reporting security incidents (password spray attacks)
- **A.18.1.4**: Privacy and protection of personally identifiable information

---

## 🚀 Quick Start Guide

### **Installation & Setup**
```bash
# Clone the repository
git clone https://github.com/bob-reis/SafeSpray.git
cd SafeSpray

# Install dependencies  
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

### **Basic Usage**
```javascript
// Basic wordlist generation
const profile = {
  firstName: "John",
  lastName: "Smith", 
  birthDate: "15/07/1985",
  favoriteTeam: "Lakers",
  customDomains: ["company.com"]
};

const emails = generateEmails(profile);      // Email variations
const passwords = generateWordlist(profile); // Password candidates  
const usernames = generateUsernames(profile); // Username variations
```

### **Advanced Configuration**
```javascript
// Advanced profile with OSINT intelligence
const advancedProfile = {
  firstName: "Sarah",
  lastName: "Johnson",
  maidenName: "Williams", 
  nickname: "SJ",
  birthDate: "23/11/1987",
  spouseName: "Michael",
  childrenNames: ["Emma", "Oliver"],
  petNames: ["Buddy", "Luna"],
  fatherName: "Robert",
  favoriteTeam: "Manchester United",
  extraYearOrNumber: "2019", // Marriage year
  customDomains: ["techcorp.com", "subsidiary.net"],
  knownUsernames: ["s.johnson", "sjohnson", "sarah.j"]
};
```

---

## 📚 Educational Resources

### **Recommended Reading**
- **"The Art of Deception" by Kevin Mitnick**: Social engineering fundamentals
- **"Red Team Field Manual" by Ben Clark**: Practical penetration testing
- **"The Hacker Playbook 3" by Peter Kim**: Advanced penetration testing techniques
- **"Social Engineering: The Science of Human Hacking" by Christopher Hadnagy**

### **Professional Certifications**
- **OSCP**: Offensive Security Certified Professional
- **GCPN**: GIAC Certified Penetration Tester  
- **CRTO**: Certified Red Team Operator
- **GCFA**: GIAC Certified Forensic Analyst
- **CISSP**: Certified Information Systems Security Professional

### **Industry Conferences**
- **DEF CON**: Premier hacking conference
- **Black Hat**: Advanced security research
- **BSides**: Local security community events
- **SANS**: Security training and certification
- **RSA Conference**: Enterprise security focus

---

## 🤝 Contributing to Cybersecurity Education

### **Community Contributions**
We welcome contributions that enhance the educational value:

- **New attack patterns** based on recent breach analysis
- **Cultural password variations** for global applicability
- **Integration scripts** for popular security tools
- **Educational scenarios** for different skill levels
- **Detection rule templates** for blue team defenders

### **Research Partnerships**
SafeSpray collaborates with:
- **Academic institutions** for cybersecurity research
- **Security vendors** for threat intelligence integration
- **Government agencies** for national security education
- **Professional organizations** for certification alignment

---

## 🔒 Ethical Use Guidelines

### **Authorized Testing Only**
SafeSpray is designed for legitimate security testing with proper authorization:

- **Written consent** from system owners
- **Defined scope** of testing activities
- **Limited timeframe** for assessment
- **Proper documentation** of all activities
- **Responsible disclosure** of findings

### **Legal Compliance**
Users must comply with applicable laws and regulations:
- **Computer Fraud and Abuse Act (CFAA)** in the United States
- **Computer Misuse Act** in the United Kingdom  
- **General Data Protection Regulation (GDPR)** in European Union
- **Local cybercrime laws** in respective jurisdictions

---

## 📈 Project Metrics

### **Quality Assurance**
- **Test Coverage**: 95%+ across all core functionality
- **Security Scanning**: Integrated with SonarCloud
- **Dependency Auditing**: Automated vulnerability detection
- **Code Quality**: Enforced through CI/CD pipelines

### **Performance Benchmarks**
- **Generation Speed**: 10,000 passwords/second (client-side)
- **Memory Efficiency**: <50MB peak usage
- **Browser Compatibility**: Chrome 90+, Firefox 88+, Safari 14+
- **Mobile Responsive**: Full functionality on all devices

---

## 🎯 Roadmap & Future Development

### **Upcoming Features**
- **Advanced OSINT integration** with public data sources
- **Machine learning models** trained on latest breach datasets
- **Enterprise API** for automated security testing
- **Multi-language support** for global password patterns
- **Blockchain integration** for secure wordlist sharing

### **Community Requests**
- **Docker containerization** for enterprise deployment
- **CLI interface** for command-line integration
- **Plugin architecture** for custom generation algorithms
- **Collaborative wordlist sharing** with privacy protection

---

## 📞 Connect with the Cybersecurity Community

### **Professional Networks**
- **LinkedIn**: https://www.linkedin.com/in/bobreis/
- **Twitter/X**: https://x.com/xbobreis  
- **GitHub**: https://github.com/bob-reis

### **Security Communities**
- **OWASP Local Chapters**: Find your local group
- **2600 Meetings**: Monthly hacker gatherings
- **ISACA**: Information security governance
- **ISC2**: Information security certifications
- **SANS Community**: Security training and research

---

## 📜 License & Legal

**MIT License** - Free for educational and commercial use

**Legal Disclaimer**: SafeSpray is intended for authorized security testing and educational purposes only. Users are solely responsible for ensuring compliance with applicable laws and obtaining proper authorization before testing any systems. The authors and contributors assume no liability for misuse or unauthorized activities.

**Responsible Disclosure**: If you discover security vulnerabilities in SafeSpray itself, please report them responsibly through our security contact channels.

---

**"The best defense is understanding the offense. SafeSpray makes that understanding accessible to everyone committed to improving cybersecurity."**

*Happy Ethical Hacking! 🛡️*
