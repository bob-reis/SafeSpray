import type { ReactNode } from 'react'
import { SITE } from '@/lib/site'
import './globals.css'
import Header from './_components/Header'

export const metadata = {
  title: SITE.name,
  description: SITE.tagline,
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
