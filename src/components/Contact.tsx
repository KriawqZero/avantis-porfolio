import { motion } from 'framer-motion'
import { EMAIL, linkWhatsApp } from '../data/contato'
import Revelar from './Revelar'
import Ornamento from './Ornamento'

/**
 * Fechamento.
 *
 * Três mudanças em relação à versão anterior:
 *
 * 1. A frase que carrega o argumento da marca ("seu negócio não precisa se
 *    adaptar ao software") estava em `text-avantis-text-ter`, o cinza de
 *    legenda. Era a hierarquia de cor invertida no ponto de fechar.
 * 2. Ganhou corpo institucional: quem responde, por onde, e o que acontece
 *    depois da mensagem. O medo de "vou ser abordado por vendedor" é uma razão
 *    silenciosa de mensagem não enviada.
 * 3. Sem promessa de prazo de resposta — veto de 28/07/2026, e correto: um
 *    estúdio de uma pessoa não sustenta SLA.
 */
export default function Contact() {
  const passos = [
    'Você manda uma mensagem contando o que trava a operação hoje.',
    'A gente conversa para entender como o negócio funciona de verdade.',
    'Se fizer sentido para os dois lados, o escopo e o preço vão por escrito.',
  ]

  return (
    <section id="contato" className="relative isolate py-[var(--espaco-secao-g)]">
      <Ornamento seed="proximo-passo" posicao="centro" opacidade={1.2} />

      <div className="container-avantis">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <Revelar>
              <p className="tec text-acento-claro mb-5">Próximo passo</p>
            </Revelar>
            <h2 className="text-[length:var(--t-h1)] leading-[1.04] medida-curta mb-8">
              <Revelar atraso={0.08}>
                <span className="block">Seu negócio não precisa</span>
              </Revelar>
              <Revelar atraso={0.18}>
                <span className="block">
                  <span className="realce">se adaptar</span> ao software.
                </span>
              </Revelar>
            </h2>
            <p className="text-[length:var(--t-corpo-g)] leading-relaxed text-texto-sec medida mb-12">
              Mande uma mensagem contando o que atrapalha o dia a dia. A conversa
              começa por aí — entender a operação antes de falar de sistema.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              {linkWhatsApp() && (
                <a
                  href={linkWhatsApp()!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 rounded-lg bg-acento px-8 py-4.5 text-sm font-semibold text-white transition-colors hover:bg-acento-escuro"
                >
                  <span>Conversar sobre a sua operação</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              )}
              {EMAIL && (
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm font-medium text-texto-sec underline decoration-linha-forte underline-offset-4 transition-colors hover:text-texto"
                >
                  Ou mande um e-mail
                </a>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 lg:border-l lg:border-linha lg:pl-12"
          >
            <p className="tec text-texto-ter mb-6">O que acontece depois</p>
            <ol className="space-y-5 mb-12">
              {passos.map((p, i) => (
                <li key={i} className="flex gap-4">
                  <span className="tec text-acento-claro pt-1 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[length:var(--t-corpo)] leading-relaxed text-texto-sec">
                    {p}
                  </span>
                </li>
              ))}
            </ol>

            {/* A apresentação completa vive em `Quem.tsx`, mais acima na página.
                Aqui fica só o que reduz risco no momento de mandar a mensagem. */}
            <div className="border-t border-linha pt-8">
              <p className="text-sm leading-relaxed text-texto-sec mb-6">
                Quem responde é quem desenvolve — sem intermediário comercial no
                meio do caminho.
              </p>
              <a
                href="https://instagram.com/avantis.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="tec inline-flex items-center gap-2 text-texto-sec transition-colors hover:text-acento-claro"
              >
                instagram.com/avantis.dev ↗
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
