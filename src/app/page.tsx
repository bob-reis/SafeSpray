import { SITE } from '@/lib/site'
import EmailWordlistGenerator from './_components/EmailWordlistGenerator'

export const metadata = {
  title: `${SITE.name} | Email and Wordlist Generator`,
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <EmailWordlistGenerator />
    </main>
  )
}
