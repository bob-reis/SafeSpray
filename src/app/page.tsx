import Link from 'next/link'
import { SITE } from '@/lib/site'

export const metadata = {
  title: `${SITE.name} | Email and Wordlist Generator`,
}

export default function SprayHome() {
  return (
    <main className="container mx-auto px-4 py-10">
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{SITE.name} – Emails, Usernames and Wordlists</h1>
        <p className="text-text-muted max-w-3xl">
          A tool for learning, awareness and supporting security professionals
          in creating controlled lists for authorized testing (pentest, OSINT, and blue team).
          All processing happens in the browser — nothing is sent to servers.
        </p>
      </section>

      <section className="mb-10 grid md:grid-cols-3 gap-6">
        <Link href="/tool" className="block p-5 border border-primary/30 rounded hover:bg-primary/5">
          <h2 className="font-semibold mb-1">Open Tool</h2>
          <p className="text-sm text-text-muted">Generate and preview emails, usernames, and passwords.</p>
        </Link>
        <Link href="/docs" className="block p-5 border border-primary/30 rounded hover:bg-primary/5">
          <h2 className="font-semibold mb-1">Tutorial & Documentation</h2>
          <p className="text-sm text-text-muted">How to use ethically and safely.</p>
        </Link>
        <Link href="/about" className="block p-5 border border-primary/30 rounded hover:bg-primary/5">
          <h2 className="font-semibold mb-1">About</h2>
          <p className="text-sm text-text-muted">Author, goals, and legal disclaimer.</p>
        </Link>
        <a href={SITE.socials.github} target="_blank" rel="noopener noreferrer" className="block p-5 border border-primary/30 rounded hover:bg-primary/5">
          <h2 className="font-semibold mb-1">Source on GitHub</h2>
          <p className="text-sm text-text-muted">Track development and contribute.</p>
        </a>
      </section>

      <section className="p-6 border border-primary/20 rounded bg-primary/5">
        <h3 className="text-xl font-semibold mb-2">About the Author</h3>
        <p className="text-text-muted mb-3 max-w-3xl">
          I’m a technology professional focused on open source, security, and engineering.
          This project is part of my portfolio as an educational and awareness tool.
        </p>
        <div className="flex gap-4 text-sm">
          <a className="text-primary hover:underline" href={SITE.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="text-primary hover:underline" href={SITE.socials.twitter} target="_blank" rel="noopener noreferrer">Twitter/X</a>
          <a className="text-primary hover:underline" href={SITE.socials.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </section>
    </main>
  )
}
