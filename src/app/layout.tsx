import type { ReactNode } from 'react'
import { SITE } from '@/lib/site'
import './globals.css'

export const metadata = {
  title: SITE.name,
  description: SITE.tagline,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
