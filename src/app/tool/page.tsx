import EmailWordlistGenerator from '../_components/EmailWordlistGenerator'
import { SITE } from '@/lib/site'

export const metadata = {
  title: `${SITE.name} | Ferramenta`,
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <EmailWordlistGenerator />
    </main>
  )
}
