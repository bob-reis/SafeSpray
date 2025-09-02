"use client"
import Link from 'next/link'
import { SITE } from '@/lib/site'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const NavLink = ({ href, label, icon }: { href: string; label: string; icon: string }) => {
  const pathname = usePathname()
  const active = pathname === href
  return (
    <Link
      href={href}
      className={`group flex items-center gap-2 px-4 py-2 rounded-lg transition-all transform hover:scale-105 border ${
        active 
          ? 'text-white bg-gradient-to-r from-primary/20 to-green-500/20 border-primary/40 shadow-lg' 
          : 'text-text-muted hover:text-white hover:bg-primary/10 border-transparent hover:border-primary/30'
      }`}
    >
      <span className="text-sm group-hover:animate-pulse">{icon}</span>
      <span className="hidden sm:inline font-medium">{label}</span>
      {active && <div className="w-1 h-1 bg-primary rounded-full animate-pulse ml-auto"></div>}
    </Link>
  )
}

export default function Header() {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { hour12: false }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b-2 border-primary/30 bg-dark/95 backdrop-blur-lg shadow-2xl">
      <nav className="container mx-auto flex items-center justify-between px-4 h-16">
        {/* Enhanced Logo and Status */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary via-green-400 to-blue-400 bg-clip-text text-transparent group-hover:animate-pulse">
                {SITE.name}
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-green-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center gap-2">
            <div className="bg-dark/80 border border-green-500/30 px-3 py-1 rounded-lg text-xs font-mono text-green-400 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                SYSTEM: OPERATIONAL
              </div>
            </div>
            <div className="bg-dark/80 border border-blue-500/30 px-3 py-1 rounded-lg text-xs font-mono text-blue-400 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                {currentTime}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Navigation */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <NavLink href="/" label="🛠️ Generator" icon="🎯" />
            <NavLink href="/docs" label="📚 Docs" icon="🎓" />
            <NavLink href="/about" label="ℹ️ About" icon="👤" />
          </div>
          
          {/* Mobile Navigation */}
          <div className="sm:hidden flex items-center gap-1">
            <NavLink href="/" label="" icon="🛠️" />
            <NavLink href="/docs" label="" icon="📚" />
            <NavLink href="/about" label="" icon="ℹ️" />
          </div>
          
          {/* Enhanced GitHub Link */}
          <a
            href={SITE.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-2 rounded-lg text-text-muted hover:text-white bg-dark/50 border border-purple-500/30 hover:bg-purple-500/10 hover:border-purple-500/50 transition-all transform hover:scale-105"
            title="View Source Code"
          >
            <span className="text-sm group-hover:animate-spin">⚡</span>
            <span className="hidden sm:inline font-medium">Source</span>
            <div className="absolute inset-0 bg-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
          </a>
        </div>
      </nav>

      {/* Enhanced scan line animation with multiple layers */}
      <div className="relative h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-30 animate-ping"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-40 animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>
    </header>
  )
}

