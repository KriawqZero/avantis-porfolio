import { useState } from 'react'
/* 
const birthDate = new Date('2006-09-01') */

/* function getAge() {
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }

  return age
}
 */
const navItems = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre a Avantis' },
  { id: 'especialidades', label: 'Skills & Stack' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'resultados', label: 'Resultados' },
  { id: 'contato', label: 'Contato' },
]

const stats = [
  {
    title: 'Anos de experiência',
    value: '7+',
    description: 'Construímos soluções end-to-end desde 2018, unindo backend, frontend e automações.',
  },
  {
    title: 'Projetos entregues',
    value: '30+',
    description: 'Produtos e MVPs entregues para escolas, empresas e iniciativas próprias.',
  },
  {
    title: 'Usuários impactados',
    value: '1000+',
    description: 'Pessoas atendidas por plataformas em produção que desenvolvemos e mantemos.',
  },
]

const specialties = [
  {
    title: 'Arquitetura e backend',
    description:
      'Planejamento técnico, APIs escaláveis e integrações seguras em múltiplas stacks.',
    pillars: ['Node.js, NestJS, TypeScript', 'Laravel, PHP, bancos relacionais e NoSQL', 'Clean Architecture & SOLID'],
  },
  {
    title: 'Frontend e experiência',
    description:
      'Interfaces modernas, design systems vivos e experiências responsivas em qualquer ecossistema.',
    pillars: ['React, Next.js e Vite', 'TailwindCSS, UI kits proprietários', 'Acessibilidade e performance Web'],
  },
  {
    title: 'DevOps & operações',
    description:
      'Pipelines com Docker, automações e infraestrutura sob medida para entregas confiáveis.',
    pillars: ['Docker & CI/CD orquestrado', 'AWS, DigitalOcean, Render', 'Logs, monitoramento e observabilidade'],
  },
]

const projects = [
  {
    name: 'Condy.com.br',
    summary:
      'Sistema de chamados com segurança em AWS S3 para empresas e condomínios, garantindo rastreabilidade e confidencialidade.',
    highlights: ['NestJS', 'PostgreSQL', 'AWS S3', 'Docker'],
    status: { label: 'Online', tone: 'success' },
    cta: { label: 'Ver site', href: 'https://condy.com.br', tone: 'primary' },
  },
  {
    name: 'SmartAssistant',
    summary:
      'IA integrada ao WhatsApp Business para automação de atendimento, com NLP e orquestração via Redis.',
    highlights: ['NestJS', 'OpenAI API', 'WhatsApp API', 'Redis'],
    status: { label: 'Em desenvolvimento', tone: 'warning' },
    cta: { label: 'Em desenvolvimento', href: undefined, tone: 'ghost' },
  },
  {
    name: 'Sistema IFMS',
    summary:
      'Automação de processos acadêmicos com mais de 1.000 usuários ativos, reduzindo em 80% o tempo de aprovação de certificados.',
    highlights: ['Laravel', 'MySQL', 'TailwindCSS', 'Alpine.js'],
    status: { label: 'Repositório público', tone: 'info' },
    cta: { label: 'Ver repositório', href: 'https://github.com/KriawqZero/IFMS-Sistema_CargaHoraria', tone: 'secondary' },
  },
]

const projectStatusStyles = {
  success: 'border-green-400/30 bg-green-400/10 text-green-200',
  warning: 'border-yellow-400/30 bg-yellow-400/10 text-yellow-200',
  info: 'border-sky-400/30 bg-sky-400/10 text-sky-200',
} as const

const projectCtaStyles = {
  primary:
    'rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-lg transition hover:scale-[1.03] hover:shadow-xl',
  secondary:
    'rounded-full border border-white/30 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-100 transition hover:border-white/60 hover:bg-white/10',
  ghost:
    'rounded-full border border-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300',
} as const

const experienceTimeline = [
  {
    period: '2025',
    title: 'Condy.com.br em produção',
    description:
      'Sistema de chamados corporativos lançado com segurança em AWS S3, workflows automatizados e monitoramento em tempo real.',
  },
  {
    period: '2024',
    title: 'Sistema IFMS para 1000+ alunos',
    description:
      'Plataforma acadêmica em produção reduzindo em 80% o tempo de validação de certificados e horas diversificadas.',
  },
  {
    period: '2024',
    title: 'Especialização em NestJS',
    description:
      'Domínio de microservices, guards, pipes e arquitetura modular para escalar produtos backend.',
  }
]

const results = [
  {
    quote:
      'Sistema IFMS em produção reduziu em 80% o tempo de processamento de certificados e atende 1000+ alunos continuamente.',
    author: 'Projeto IFMS',
    role: 'Automação acadêmica • Laravel + MySQL',
  },
  {
    quote:
      'Condy.com.br trouxe rastreabilidade total para chamados corporativos com armazenamento seguro em AWS S3.',
    author: 'Condy.com.br',
    role: 'Chamados corporativos • NestJS + AWS',
  },
  {
    quote:
      'SmartAssistant integra WhatsApp Business e IA generativa para responder clientes em segundos, em fase final de desenvolvimento.',
    author: 'SmartAssistant',
    role: 'Atendimento automatizado • OpenAI + Redis',
  },
]

const contactMethods = [
  {
    type: 'email',
    title: 'E-mail',
    value: 'marciliortizz@gmail.com',
    href: 'mailto:marciliortizz@gmail.com',
    icon: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    tone: 'rose',
  },
  {
    type: 'whatsapp',
    title: 'WhatsApp',
    value: '+55 (67) 9 8408-4389',
  
  },
  {
    type: 'linkedin',
    title: 'LinkedIn',
    value: '/in/marcilio-ortiz',
    href: 'https://www.linkedin.com/in/marcilio-ortiz/',
    icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z',
    tone: 'blue',
  },
  {
    type: 'github',
    title: 'GitHub',
    value: '@KriawqZero',
    href: 'https://github.com/KriawqZero',
    icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22',
    tone: 'slate',
  },
]

const contactToneStyles = {
  rose: 'border-pink-400/30 bg-pink-500/10 text-pink-200',
  green: 'border-emerald-400/30 bg-emerald-500/10 text-emerald-200',
  blue: 'border-sky-400/30 bg-sky-500/10 text-sky-200',
  slate: 'border-slate-400/30 bg-slate-500/10 text-slate-200',
} as const

const workModes = [
  {
    title: 'Projetos freelancer',
    description: 'Kickoff rápido, discovery focado e entregas semanais alinhadas ao negócio.',
    icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6',
  },
  {
    title: 'Trabalho CLT',
    description: 'Atuação plena em squads de produto com ownership e entregas contínuas.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m-2 0H7m0 0H5m2 0v-5a2 2 0 012-2h2a2 2 0 012 2v5',
  },
  {
    title: 'Remoto / Híbrido',
    description: 'Total flexibilidade para atuar remoto, híbrido ou presencial conforme necessidade.',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Mudança geográfica',
    description: 'Disponível para relocação mediante boas oportunidades e suporte ao deslocamento.',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
  },
]

const quickInfo = [
  { label: 'Localização', value: 'Corumbá - MS' },
  { label: 'Fuso horário', value: 'UTC-4 (Campo Grande)' },
  { label: 'Idiomas', value: 'Português • Inglês intermediário' },
  { label: 'Disponibilidade', value: 'Imediata' },
]

const socials = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/marcilio-ortiz/' },
  { label: 'GitHub', url: 'https://github.com/KriawqZero' },
  { label: 'Behance', url: 'https://www.behance.net' },
  { label: 'WhatsApp', url: 'https://wa.me/5567984084389' },
  { label: 'E-mail', url: 'mailto:marciliortizz@gmail.com' },
]

/* function Logo() {
  return (
    <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white/10 shadow-xl">
      <img
        src="/logo-simple.png"
        alt="Logotipo Avantis Studio"
        className="h-10 w-10 object-contain"
      />
      <span className="absolute inset-0 rounded-2xl border border-white/15" aria-hidden />
    </div>
  )
}
 */
export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-10%] h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/30 blur-[160px]" />
        <div className="absolute right-[-20%] top-[20%] h-[30rem] w-[30rem] rounded-full bg-indigo-500/30 blur-[180px]" />
        <div className="absolute bottom-[-15%] left-[20%] h-[32rem] w-[32rem] rounded-full bg-sky-500/20 blur-[180px]" />
        <div className="absolute bottom-[10%] right-[5%] h-[18rem] w-[18rem] rounded-full bg-rose-500/20 blur-[140px]" />
      </div>

      <div className="relative lg:flex lg:flex-row">
        <aside className="hidden border-r border-white/10 bg-white/5 px-7 py-10 shadow-[0_0_60px_-20px_rgba(99,102,241,0.6)] backdrop-blur-2xl lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:h-screen lg:w-64 lg:overflow-y-auto xl:w-72 xl:px-9">
          <div className="flex flex-1 flex-col h-full">
            <div>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-fuchsia-200/80">
                    Avantis Studio
                  </p>
                  <p className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-slate-300/70">
                    por Marcilio Ortiz
                  </p>
                </div>
              </div>
            </div>
            <nav className="flex-1 flex flex-col justify-center items-center mt-10 mb-10">
              <div className="w-full space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="group flex items-center gap-3 rounded-2xl border border-transparent px-4 py-2 text-sm font-medium text-slate-200/80 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                  >
                    <span className="h-1 w-10 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition group-hover:opacity-100" />
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>
            <div className="space-y-3 text-xs text-slate-400 mt-auto">
              <p className="font-semibold uppercase tracking-[0.35em] text-slate-500">Disponibilidade</p>
              <p>Projetos freelancer, CLT, remoto e mudança geográfica.</p>
            </div>
          </div>
        </aside>

        <div className="w-full lg:flex-1 lg:ml-64 lg:pl-8 xl:ml-72 xl:pl-12">
          <header className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-slate-950/70 px-4 py-3 backdrop-blur-xl sm:px-6 sm:py-4 lg:hidden">
            <div className="flex items-center gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-fuchsia-200/80">Avantis Studio</p>
                <p className="text-sm font-bold text-white">Produto &amp; Tecnologia</p>
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-slate-300/70">Fundador: Marcilio Ortiz</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsNavOpen((prev) => !prev)}
              className="rounded-full border border-white/20 bg-white/10 p-2 text-white shadow-lg backdrop-blur-xl"
              aria-label="Abrir navegação"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </header>

          {isNavOpen ? (
            <div className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-lg lg:hidden">
              <nav className="absolute inset-x-4 top-4 max-w-sm rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-2xl backdrop-blur-xl sm:right-6 sm:inset-auto sm:w-80">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-fuchsia-200/80">Avantis Studio</p>
                    <p className="text-base font-bold text-white">Produto &amp; Tecnologia</p>
                    <p className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-slate-300/70">Fundador: Marcilio Ortiz</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsNavOpen(false)}
                    className="rounded-full border border-white/20 bg-white/10 p-2 text-white"
                    aria-label="Fechar navegação"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6 18 12-12M18 18 6 6" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-3">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setIsNavOpen(false)}
                      className="block rounded-2xl border border-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          ) : null}

          <main className="relative z-10 mx-auto w-full max-w-6xl space-y-16 px-4 pb-16 pt-12 sm:space-y-24 sm:px-8 lg:max-w-7xl lg:space-y-28 lg:px-12 xl:px-16">
            <section
              id="inicio"
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-[0_0_80px_-30px_rgba(168,85,247,0.65)] backdrop-blur-3xl sm:rounded-[2.5rem] sm:p-10 lg:p-14"
            >
              <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/60 via-purple-500/40 to-transparent blur-3xl" />
              <div className="pointer-events-none absolute -left-28 bottom-0 h-64 w-64 rounded-full bg-gradient-to-br from-sky-500/40 to-transparent blur-3xl" />
              <div className="relative grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-center">
                <div className="space-y-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.5em] text-fuchsia-200/70">Avantis Studio • Produto &amp; Tecnologia</p>
                  <h1 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                    Construímos produtos digitais com estratégia, design e engenharia de alta qualidade.
                  </h1>
                  <p className="text-lg leading-relaxed text-slate-200/80">
                    Somos a Avantis Studio, liderada por Marcilio Ortiz. Temos +7 anos de experiência planejando e executando produtos complexos, do discovery à entrega, equilibrando arquitetura robusta, interfaces intuitivas e automações inteligentes.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="#projetos"
                      className="rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:shadow-xl"
                    >
                      Ver projetos selecionados
                    </a>
                    <a
                      href="#contato"
                      className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/60 hover:bg-white/10"
                    >
                      Agendar conversa
                    </a>
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <article className="relative col-span-1 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-inner backdrop-blur-2xl sm:col-span-2">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-fuchsia-500/10 via-indigo-500/10 to-transparent opacity-0 transition hover:opacity-100" aria-hidden />
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl border border-white/10">
                        <img src="/foto-perfil.JPEG" alt="Retrato de Marcilio Ortiz" className="h-full w-full object-cover" />
                        <span className="absolute inset-0 rounded-2xl border border-white/10" aria-hidden />
                      </div>
                      <div className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-fuchsia-200/70">Fundador &amp; Lead</p>
                        <p className="text-2xl font-bold text-white">Marcilio Ortiz</p>
                        <p className="text-sm leading-relaxed text-slate-200/80">
                          Marcilio Ortiz lidera a Avantis Studio, traduzindo objetivos de negócio em soluções full stack escaláveis, seguras e com ótima experiência.
                        </p>
                      </div>
                    </div>
                  </article>
                  {stats.map((item) => (
                    <article
                      key={item.title}
                      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-inner backdrop-blur-2xl"
                    >
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 transition hover:opacity-100" aria-hidden />
                      <p className="text-xs uppercase tracking-[0.4em] text-fuchsia-200/60">{item.title}</p>
                      <p className="mt-4 text-3xl font-black text-white">{item.value}</p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-200/80">{item.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section id="sobre" className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_0_80px_-40px_rgba(125,211,252,0.65)] backdrop-blur-2xl sm:rounded-[2.5rem] sm:p-10">
              <div className="pointer-events-none absolute -top-20 right-10 h-40 w-40 rounded-full bg-sky-400/30 blur-3xl" />
              <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-6 text-lg leading-relaxed text-slate-200/80">
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-10 rounded-full bg-gradient-to-r from-fuchsia-500 to-sky-500" />
                    <p className="text-xs font-semibold uppercase tracking-[0.45em] text-slate-200/70">Sobre a Avantis</p>
                  </div>
                  <p>
                    Somos a Avantis Studio, fundada e liderada por Marcilio Ortiz em Corumbá-MS. Criamos soluções end-to-end que unem APIs robustas, interfaces reativas e automações eficientes.
                  </p>
                  <p>
                    Como estúdio, acumulamos 7+ anos de experiência em 30+ projetos — incluindo plataformas em produção com 1000+ usuários ativos. Planejamos e construímos produtos escaláveis e fáceis de usar.
                  </p>
                  <p>
                    Atuamos com visão de negócio, discovery contínuo e entregas iterativas. Da arquitetura backend ao pixel final, cada detalhe é pensado para performance, acessibilidade e impacto.
                  </p>
                </div>
                <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.45em] text-slate-200/60">Manifesto</p>
                  <ul className="space-y-4 text-sm leading-relaxed text-slate-200/80">
                    <li className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner">
                      Especialização em NestJS, Node.js e arquitetura modular orientada a domínio.
                    </li>
                    <li className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner">
                      Infraestrutura com AWS, Docker e pipelines CI/CD para entregas seguras.
                    </li>
                    <li className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner">
                      Frontend moderno com React, Next.js e design systems tokenizados.
                    </li>
                    <li className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner">
                      Disponível para freelas, CLT, trabalho remoto e relocação segundo a oportunidade.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="especialidades" className="space-y-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_0_80px_-40px_rgba(244,114,182,0.6)] backdrop-blur-2xl sm:space-y-10 sm:rounded-[2.5rem] sm:p-10">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-10 rounded-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500" />
                <p className="text-xs font-semibold uppercase tracking-[0.45em] text-slate-200/70">Skills &amp; Stack</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {specialties.map((item) => (
                  <article
                    key={item.title}
                    className="group relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8"
                  >
                    <div className="absolute inset-x-0 top-0 h-1 rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-sky-500 opacity-60" />
                    <div className="absolute inset-0 -z-10 opacity-0 transition group-hover:opacity-100">
                      <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/20 blur-[120px]" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-slate-200/80">{item.description}</p>
                    <ul className="mt-6 space-y-3 text-sm text-slate-200/80">
                      {item.pillars.map((pillar) => (
                        <li key={pillar} className="flex items-center gap-2">
                          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-br from-fuchsia-400 to-sky-400" />
                          {pillar}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section id="projetos" className="space-y-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_0_80px_-40px_rgba(99,102,241,0.6)] backdrop-blur-2xl sm:space-y-10 sm:rounded-[2.5rem] sm:p-10">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-10 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-fuchsia-500" />
                <p className="text-xs font-semibold uppercase tracking-[0.45em] text-slate-200/70">Projetos</p>
              </div>
              <div className="space-y-8">
                {projects.map((project) => {
                  const statusClass = project.status
                    ? projectStatusStyles[project.status.tone as keyof typeof projectStatusStyles]
                    : ''
                  const ctaClass = project.cta
                    ? projectCtaStyles[project.cta.tone as keyof typeof projectCtaStyles]
                    : ''

                  return (
                    <article
                      key={project.name}
                      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8"
                    >
                      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white/0 via-white/5 to-white/10 opacity-0 transition group-hover:opacity-100" />
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="space-y-3">
                          {project.status ? (
                            <span
                              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] ${statusClass}`}
                            >
                              {project.status.label}
                            </span>
                          ) : null}
                          <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                        </div>
                        {project.cta ? (
                          project.cta.href ? (
                            <a href={project.cta.href} className={ctaClass} target="_blank" rel="noopener noreferrer">
                              {project.cta.label}
                            </a>
                          ) : (
                            <span className={ctaClass}>{project.cta.label}</span>
                          )
                        ) : null}
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-slate-200/80">{project.summary}</p>
                      <ul className="mt-6 flex flex-wrap gap-3 text-xs font-medium text-slate-100/80">
                        {project.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur"
                          >
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </article>
                  )
                })}
              </div>
            </section>

            <section id="experiencia" className="space-y-10 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_0_80px_-40px_rgba(14,165,233,0.6)] backdrop-blur-2xl sm:space-y-12 sm:rounded-[2.5rem] sm:p-10">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-10 rounded-full bg-gradient-to-r from-sky-500 via-teal-400 to-indigo-500" />
                <p className="text-xs font-semibold uppercase tracking-[0.45em] text-slate-200/70">Experiência</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {experienceTimeline.map((item) => (
                  <article key={item.period} className="rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-200/60">{item.period}</p>
                    <h3 className="mt-3 text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-200/80">{item.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="resultados" className="space-y-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_0_80px_-40px_rgba(59,130,246,0.6)] backdrop-blur-2xl sm:space-y-10 sm:rounded-[2.5rem] sm:p-10">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-10 rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500" />
                <p className="text-xs font-semibold uppercase tracking-[0.45em] text-slate-200/70">Resultados</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {results.map((testimonial) => (
                  <blockquote
                    key={testimonial.author}
                    className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8"
                  >
                    <div className="pointer-events-none absolute -top-10 right-16 h-32 w-32 rounded-full bg-white/10 blur-3xl" aria-hidden />
                    <p className="text-sm leading-relaxed text-slate-200/80">“{testimonial.quote}”</p>
                    <footer className="mt-6 text-sm font-semibold text-white">
                      {testimonial.author}
                      <span className="mt-1 block text-xs font-medium uppercase tracking-[0.35em] text-slate-200/60">
                        {testimonial.role}
                      </span>
                    </footer>
                  </blockquote>
                ))}
              </div>
            </section>

            <section
              id="contato"
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/60 via-slate-900/40 to-slate-900/20 p-6 shadow-[0_0_80px_-40px_rgba(147,197,253,0.65)] backdrop-blur-2xl sm:rounded-[2.5rem] sm:p-10"
            >
              <div className="pointer-events-none absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-sky-500/20 blur-[160px]" />
              <div className="relative grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.5em] text-slate-200/60">Contato</p>
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">
                      Vamos conversar sobre o seu próximo projeto.
                    </h2>
                    <p className="text-sm leading-relaxed text-slate-200/80">
                      Fale com a Avantis para discutir APIs escaláveis, produtos full stack, integrações com IA ou evoluções no seu stack atual. Respondemos em até 24 horas úteis.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {contactMethods.map((contact) => (
                      <a
                        key={contact.type}
                        href={contact.href}
                        target={contact.type === 'email' ? undefined : '_blank'}
                        rel={contact.type === 'email' ? undefined : 'noopener noreferrer'}
                        className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-4 transition hover:border-white/20 hover:bg-white/10 sm:p-5"
                      >
                        <div className={`mb-4 inline-flex rounded-lg border px-3 py-2 text-xs font-semibold uppercase tracking-[0.35em] ${contactToneStyles[contact.tone as keyof typeof contactToneStyles]}`}>
                          {contact.title}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-slate-200">
                          <svg className="h-5 w-5 text-slate-200/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={contact.icon} />
                          </svg>
                          <span className="font-medium group-hover:text-white transition">{contact.value}</span>
                        </div>
                      </a>
                    ))}
                  </div>

                  <div className="space-y-5 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                    <div className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-fuchsia-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-200/70">Modalidades de trabalho</h3>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {workModes.map((mode) => (
                        <div key={mode.title} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-slate-200/80">
                          <div className="mb-2 flex items-center gap-2 text-slate-100">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mode.icon} />
                            </svg>
                            <span className="font-semibold uppercase tracking-[0.25em]">{mode.title}</span>
                          </div>
                          <p className="leading-relaxed">{mode.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 text-xs font-medium text-slate-100/80">
                    {socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.url}
                        className="rounded-full border border-white/20 bg-white/5 px-5 py-2 uppercase tracking-[0.3em] transition hover:border-white/60 hover:bg-white/10"
                      >
                        {social.label}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 text-sm text-slate-200/80 backdrop-blur-xl sm:p-8">
                  <div className="space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.45em] text-slate-200/60">Informações rápidas</p>
                    <div className="grid gap-3">
                      {quickInfo.map((info) => (
                        <div key={info.label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                          <span className="text-xs uppercase tracking-[0.3em] text-slate-300">{info.label}</span>
                          <span className="text-sm font-medium text-white">{info.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-xs uppercase tracking-[0.35em] text-slate-100">
                    <p>Estamos disponíveis para novos desafios imediatamente.</p>
                    <p className="text-slate-300">Tempo médio de resposta: até 24 horas úteis.</p>
                  </div>

                  <div className="flex flex-col gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-100 sm:flex-row">
                    <a
                      href="mailto:marciliortizz@gmail.com"
                      className="flex-1 rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 px-6 py-3 text-center text-white shadow-lg transition hover:scale-[1.02] hover:shadow-xl"
                    >
                      Enviar e-mail
                    </a>
                    <a
                      href="https://wa.me/5567984084389"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-full border border-white/30 px-6 py-3 text-center text-slate-100 transition hover:border-white/60 hover:bg-white/10"
                    >
                      Falar no WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <footer className="flex flex-col gap-2 border-t border-white/10 pt-8 text-xs text-slate-400/80 sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} Avantis Studio • Marcilio Ortiz. Todos os direitos reservados.</p>
              <p className="uppercase tracking-[0.35em] text-slate-500/80">Construindo histórias com design e tecnologia.</p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  )
}

