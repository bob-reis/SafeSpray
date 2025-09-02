"use client"
import Link from 'next/link'
import { SITE } from '@/lib/site'
import { usePathname } from 'next/navigation'

const NavLink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname()
  const active = pathname === href
  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded hover:bg-primary/10 ${active ? 'text-white' : 'text-text-muted'}`}
    >
      {label}
    </Link>
  )
}

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-primary/20 bg-dark/80 backdrop-blur">
      <nav className="container mx-auto flex items-center justify-between px-4 h-14">
        <div className="flex items-center gap-3">
          <Link href="/" className="font-semibold text-white hover:underline">
            {SITE.name}
          </Link>
          <span className="hidden md:inline text-xs text-text-muted">{SITE.tagline}</span>
        </div>
        <div className="flex items-center gap-1">
          <NavLink href="/" label="Tool" />
          <NavLink href="/docs" label="Docs" />
          <NavLink href="/about" label="About" />
          <a
            href={SITE.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded text-text-muted hover:bg-primary/10"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  )
}

