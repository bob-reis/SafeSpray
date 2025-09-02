import { SITE } from '@/lib/site'

export const metadata = {
  title: `${SITE.name} | Tutorial e Documentação`,
}

export default function Docs() {
  return (
    <main className="container mx-auto px-4 py-10 prose prose-invert max-w-none">
      <h1>{SITE.name} – Tutorial e Documentação</h1>
      <p>
        Esta documentação explica como utilizar a ferramenta de forma responsável e com foco em
        segurança defensiva, aprendizado e testes autorizados.
      </p>

      <h2>Objetivo</h2>
      <ul>
        <li>Gerar variações plausíveis de <strong>e-mails</strong>, <strong>usernames</strong> e <strong>senhas</strong>.</li>
        <li>Auxiliar equipes em atividades de <strong>pentest autorizado</strong>, <strong>OSINT</strong> e validações internas.</li>
        <li>Educar sobre <strong>boas práticas de segurança</strong>, como políticas de senhas mais fortes.</li>
      </ul>

      <h2>Uso Ético</h2>
      <ul>
        <li>Utilize apenas com <strong>autorização formal</strong> do responsável pelo ambiente/conta.</li>
        <li>Respeite leis, políticas de uso e privacidade. Você é o responsável pelo uso.</li>
        <li>O processamento é 100% local no navegador: nenhum dado é enviado a servidores.</li>
      </ul>

      <h2>Como Usar</h2>
      <ol>
        <li>Preencha os campos de contexto (nomes, data de nascimento, apelidos, etc.).</li>
        <li>Opcional: adicione <em>usernames</em> já conhecidos e domínios corporativos válidos.</li>
        <li>Clique em <em>Gerar</em> para visualizar prévias de e-mails, senhas e usernames.</li>
        <li>Baixe os arquivos desejados para uso interno e autorizado.</li>
      </ol>

      <h2>Limites e Segurança</h2>
      <ul>
        <li>Limites internos evitam listas excessivas por sessão.</li>
        <li>As senhas seguem um filtro mínimo (letras + números; 6–20 caracteres).</li>
        <li>Incluímos exemplos comuns para conscientização e testes de força.</li>
      </ul>

  <h2>Boas Práticas</h2>
  <ul>
    <li>Evite armazenar listas em locais não criptografados.</li>
    <li>Use apenas no escopo e duração do teste autorizado.</li>
    <li>Descarte os arquivos de forma segura ao finalizar.</li>
  </ul>

      <h2>Mini Aula: Pentest e OSINT com {SITE.name}</h2>
      <p>
        O objetivo é demonstrar como conduzir atividades éticas e autorizadas para avaliar
        controles de autenticação e conscientizar usuários, sem causar dano.
      </p>
      <ol>
        <li>
          Preparação ética: defina o escopo, obtenha autorização formal (alvos, datas, limites
          de tentativas) e combine critérios de sucesso e rollback.
        </li>
        <li>
          Coleta (OSINT controlado): identifique padrões de e-mail públicos (ex.: <code>nome.sobrenome@empresa.com</code>)
          e dados divulgados pelo próprio alvo (eventos, blog corporativo). Evite dados sensíveis.
        </li>
        <li>
          Geração: informe nomes, apelidos, ano relevante e domínios no {SITE.name}. Baixe apenas
          o necessário para o escopo. Respeite os limites mostrados na UI.
        </li>
        <li>
          Execução controlada: utilize ferramentas de teste com limitação de taxa e de tentativas
          (acordadas previamente). Não faça brute force indiscriminado.
        </li>
        <li>
          Registro e descarte: documente tentativas e resultados para o relatório, armazene listas de
          forma segura e descarte-as após o encerramento.
        </li>
        <li>
          Para Blue Team: use as listas para criar regras de detecção de spraying, bloquear padrões
          fracos e treinar usuários sobre senhas fortes e MFA.
        </li>
      </ol>

      <h2>Casos de Uso</h2>
      <ul>
        <li>Testes de autenticação em ambientes controlados.</li>
        <li>Simulações de ataque para conscientização de usuários.</li>
        <li>Criação de regras de bloqueio e detecção (blue team).</li>
      </ul>

  <h2>Aviso Legal</h2>
      <p>
        O uso indevido é proibido. O autor e colaboradores não se responsabilizam por danos
        decorrentes de uso não autorizado ou ilegal. Utilize sempre com consentimento formal e dentro da lei.
      </p>
    </main>
  )
}
