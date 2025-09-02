import Link from 'next/link'
import { SITE } from '@/lib/site'

export const metadata = {
  title: `${SITE.name} | Gerador de E-mails e Wordlists`,
}

export default function SprayHome() {
  return (
    <main className="container mx-auto px-4 py-10">
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{SITE.name} – E-mails, Usernames e Wordlists</h1>
        <p className="text-text-muted max-w-3xl">
          Ferramenta focada em estudos, conscientização e apoio a profissionais de segurança
          na criação de listas controladas para testes autorizados (pentest, OSINT e blue team).
          Todo o processamento ocorre no navegador — nada é enviado para servidores.
        </p>
      </section>

      <section className="mb-10 grid md:grid-cols-3 gap-6">
        <Link href="/tool" className="block p-5 border border-primary/30 rounded hover:bg-primary/5">
          <h2 className="font-semibold mb-1">Abrir Ferramenta</h2>
          <p className="text-sm text-text-muted">Gerar e pré-visualizar e-mails, usernames e senhas.</p>
        </Link>
        <Link href="/docs" className="block p-5 border border-primary/30 rounded hover:bg-primary/5">
          <h2 className="font-semibold mb-1">Tutorial e Documentação</h2>
          <p className="text-sm text-text-muted">Como usar de forma ética e segura.</p>
        </Link>
        <Link href="/sobre" className="block p-5 border border-primary/30 rounded hover:bg-primary/5">
          <h2 className="font-semibold mb-1">Sobre</h2>
          <p className="text-sm text-text-muted">Autor, objetivos e isenção de responsabilidade.</p>
        </Link>
        <a href={SITE.socials.github} target="_blank" rel="noopener noreferrer" className="block p-5 border border-primary/30 rounded hover:bg-primary/5">
          <h2 className="font-semibold mb-1">Código no GitHub</h2>
          <p className="text-sm text-text-muted">Acompanhe o desenvolvimento e contribua.</p>
        </a>
      </section>

      <section className="p-6 border border-primary/20 rounded bg-primary/5">
        <h3 className="text-xl font-semibold mb-2">Sobre o Autor</h3>
        <p className="text-text-muted mb-3 max-w-3xl">
          Sou profissional de tecnologia com foco em software livre, segurança e engenharia.
          Este projeto compõe meu portfólio como uma ferramenta educacional e de conscientização.
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
