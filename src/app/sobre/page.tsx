import { SITE } from '@/lib/site'

export const metadata = {
  title: `${SITE.name} | Sobre o Projeto`,
}

export default function Sobre() {
  return (
    <main className="container mx-auto px-4 py-10 prose prose-invert max-w-none">
      <h1>Sobre o Projeto</h1>
      <p>
        {SITE.name} é uma ferramenta independente, focada em uso <strong>ético</strong> e <strong>educacional</strong>.
        Ela auxilia na geração controlada de e-mails, usernames e wordlists para estudos, conscientização
        e testes <em>autorizados</em> (pentest, OSINT e blue team). Todo o processamento ocorre localmente no navegador.
      </p>

      <h2>Missão</h2>
      <ul>
        <li>Promover segurança por meio da educação e boas práticas.</li>
        <li>Oferecer exemplos e limites que evitem abuso ou listas excessivas.</li>
        <li>Facilitar simulações legítimas para defesa e conscientização.</li>
      </ul>

      <h2>Autor</h2>
      <p>
        Sou profissional de tecnologia com foco em software livre, segurança e engenharia.
        Este projeto integra meu portfólio como ferramenta educacional.
      </p>
      <p>
        Conecte-se comigo em:
        {' '}<a href={SITE.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>,
        {' '}<a href={SITE.socials.twitter} target="_blank" rel="noopener noreferrer">Twitter/X</a>,
        {' '}<a href={SITE.socials.github} target="_blank" rel="noopener noreferrer">GitHub</a>.
      </p>

      <h2>Aviso Legal (Isenção)</h2>
      <p>
        O uso indevido é proibido. O autor e colaboradores não se responsabilizam por qualquer dano
        decorrente de uso não autorizado, ilegal ou fora do escopo acordado. Utilize sempre com
        consentimento formal, respeitando leis, políticas e privacidade.
      </p>
    </main>
  )
}

