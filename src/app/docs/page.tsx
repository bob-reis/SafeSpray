import { SITE } from '@/lib/site'

export const metadata = {
  title: `${SITE.name} | Tutorial e Documentação`,
}

export default function Docs() {
  return (
    <main className="container mx-auto px-4 py-10 prose prose-invert max-w-none">
      <h1>{SITE.name} – Tutorial & Documentation</h1>
      <p>
        This documentation explains how to use the tool responsibly with a focus on
        defensive security, learning, and authorized testing.
      </p>

      <h2>Purpose</h2>
      <ul>
        <li>Generate plausible variations of <strong>emails</strong>, <strong>usernames</strong>, and <strong>passwords</strong>.</li>
        <li>Support <strong>authorized pentesting</strong>, <strong>OSINT</strong>, and internal validation activities.</li>
        <li>Educate about <strong>security best practices</strong> like stronger password policies.</li>
      </ul>

      <h2>Ethical Use</h2>
      <ul>
        <li>Use only with <strong>formal authorization</strong> from the environment/account owner.</li>
        <li>Respect laws, usage policies, and privacy. You are responsible for your use.</li>
        <li>Processing is 100% local in the browser: no data is sent to servers.</li>
      </ul>

      <h2>How to Use</h2>
      <ol>
        <li>Fill in context fields (names, birth date, nicknames, etc.).</li>
        <li>Optional: add known <em>usernames</em> and valid corporate domains.</li>
        <li>Click <em>Generate</em> to preview emails, passwords, and usernames.</li>
        <li>Download the desired files for internal, authorized use.</li>
      </ol>

      <h2>Limits & Safety</h2>
      <ul>
        <li>Internal limits avoid excessive lists per session.</li>
        <li>Passwords follow a minimum filter (letters + numbers; 6–20 characters).</li>
        <li>Includes common examples for awareness and strength tests.</li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li>Avoid storing lists in unencrypted locations.</li>
        <li>Use only within the authorized scope and duration.</li>
        <li>Securely dispose of files after completion.</li>
      </ul>

      <h2>Mini Lesson: Pentest and OSINT with {SITE.name}</h2>
      <p>
        The goal is to show how to conduct ethical, authorized activities to assess authentication controls
        and raise awareness without causing harm.
      </p>
      <ol>
        <li>
          Ethical preparation: define scope, obtain formal authorization (targets, dates, attempt limits),
          and agree on success criteria and rollback.
        </li>
        <li>
          Controlled OSINT: identify public email patterns (e.g., <code>first.last@company.com</code>)
          and data deliberately disclosed by the target (events, corporate blog). Avoid sensitive data.
        </li>
        <li>
          Generation: provide names, nicknames, relevant year, and domains in {SITE.name}. Download only
          what is needed for scope. Respect UI limits.
        </li>
        <li>
          Controlled execution: use testing tools with rate/attempt limits (pre-agreed). Do not brute-force indiscriminately.
        </li>
        <li>
          Logging and disposal: document attempts/results for the report, store lists securely, and dispose
          of them after closure.
        </li>
        <li>
          For Blue Team: use lists to craft spray-detection rules, block weak patterns, and train users on strong passwords and MFA.
        </li>
      </ol>

      <h2>Use Cases</h2>
      <ul>
        <li>Authentication testing in controlled environments.</li>
        <li>Awareness simulations for user education.</li>
        <li>Detection and blocking rules creation (blue team).</li>
      </ul>

      <h2>Legal Notice</h2>
      <p>
        Misuse is prohibited. The author and contributors are not responsible for any damage arising from
        unauthorized or illegal use. Always operate with formal consent and within the law.
      </p>
    </main>
  )
}
