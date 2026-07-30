import { motion } from 'framer-motion'
import { CASES } from '../data/cases'
import Revelar from './Revelar'
import Ornamento from './Ornamento'

/**
 * Hero.
 *
 * O que mudou:
 *
 * - Coluna única com medida curta. A versão anterior usava metade da largura e
 *   deixava a outra metade vazia — vazio só funciona quando enquadra alguma
 *   coisa, e ali não enquadrava nada.
 * - Destaque em itálico roxo na manchete: é a assinatura que a Avantis usa em
 *   todo carrossel (avantis-render/template.ts) e que o site ignorava.
 * - Dois níveis de compromisso: fazer o diagnóstico, ou abrir um sistema e ver
 *   funcionando. Antes existia só o alto.
 * - Faixa de prova logo abaixo da manchete, com os três sistemas que estão no
 *   ar. O visitante clica e verifica, em vez de acreditar num número.
 *
 * A marca aparece na navbar desde o primeiro paint, então aqui o rótulo é
 * posicionamento, não assinatura.
 */
export default function Hero() {
  return (
    <section className="relative isolate flex min-h-svh flex-col justify-center overflow-hidden pt-32 pb-16">
      {/* Fundo: o ornamento gerado pelo mesmo código que produz a arte dos
          carrosséis, mais dois glows nos tons das pontas do gradiente do logo. */}
      <Ornamento seed="hero" posicao="centro" opacidade={1.6} />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-1/4 left-0 h-[80vh] w-[80vw]"
          style={{ background: 'radial-gradient(closest-side, rgba(139,92,246,0.16), transparent)' }}
        />
        <div
          className="absolute -bottom-1/3 right-0 h-[70vh] w-[60vw]"
          style={{ background: 'radial-gradient(closest-side, rgba(214,51,245,0.09), transparent)' }}
        />
      </div>

      <div className="container-avantis">
        <Revelar aoCarregar atraso={0.1} className="mb-8">
          <p className="tec text-acento-claro border-l border-acento/50 pl-4">
            Sistemas sob medida e automação
          </p>
        </Revelar>

        {/* Duas linhas reveladas em sequência: a segunda entra depois, e é onde
            mora o destaque em itálico. */}
        <h1 className="text-[length:var(--t-h1)] font-bold leading-[1.04] tracking-tight medida-curta mb-8">
          <Revelar aoCarregar atraso={0.22}>
            <span className="block">Software feito para a operação</span>
          </Revelar>
          <Revelar aoCarregar atraso={0.34}>
            <span className="block">
              que o seu negócio <span className="realce">já tem</span>.
            </span>
          </Revelar>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="text-[length:var(--t-corpo-g)] leading-relaxed text-texto-sec medida mb-12"
        >
          Para quem hoje resolve no papel, na planilha e no WhatsApp — sem obrigar
          o negócio a se adaptar a um sistema que não foi pensado para ele.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
        >
          <a
            href="#diagnostico"
            className="group inline-flex items-center justify-center gap-3 rounded-lg bg-acento px-8 py-4.5 text-sm font-semibold text-white transition-colors hover:bg-acento-escuro"
          >
            <span>Começar por 5 perguntas</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#cases"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-linha-forte px-8 py-4.5 text-sm font-medium text-texto transition-colors hover:border-acento/50 hover:bg-white/5"
          >
            Ver o que está no ar
          </a>
        </motion.div>

        {/* Prova imediata: dois sistemas que o visitante abre agora. */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="mt-16 sm:mt-20 border-t border-linha pt-6 flex flex-wrap items-center gap-x-8 gap-y-3"
        >
          <span className="tec text-texto-ter">No ar agora</span>
          {CASES.map((c) => (
            <a
              key={c.id}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-texto-sec underline decoration-linha-forte underline-offset-4 transition-colors hover:text-acento-claro"
            >
              {c.nome} ↗
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
