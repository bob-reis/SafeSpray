import { SITE } from '@/lib/site'

export const metadata = {
  title: `${SITE.name} | About`,
}

export default function About() {
  return (
    <main className="container mx-auto px-4 py-10 prose prose-invert max-w-none">
      <h1>About the Project</h1>
      <p>
        {SITE.name} is an independent tool focused on <strong>ethical</strong> and <strong>educational</strong> use.
        It helps generate controlled emails, usernames, and wordlists for learning, awareness,
        and <em>authorized</em> testing (pentest, OSINT, and blue team). All processing happens locally in the browser.
      </p>

      <h2>Mission</h2>
      <ul>
        <li>Promote security through education and best practices.</li>
        <li>Provide examples and limits that discourage abuse or excessive lists.</li>
        <li>Enable legitimate simulations for defense and awareness.</li>
      </ul>

      <h2>Author</h2>
      <p>
        I am a technology professional focused on open source, security, and engineering.
        This project is part of my portfolio as an educational tool.
      </p>
      <p>
        Connect with me on
        {' '}<a href={SITE.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>,
        {' '}<a href={SITE.socials.twitter} target="_blank" rel="noopener noreferrer">Twitter/X</a>,
        {' '}<a href={SITE.socials.github} target="_blank" rel="noopener noreferrer">GitHub</a>.
      </p>

      <h2>Legal Notice (Disclaimer)</h2>
      <p>
        Misuse is prohibited. The author and contributors are not responsible for any damage resulting from
        unauthorized, illegal, or out-of-scope use. Always obtain formal consent and respect laws, policies, and privacy.
      </p>
    </main>
  )
}
