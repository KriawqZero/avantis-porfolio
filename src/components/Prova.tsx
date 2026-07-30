import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { CASES } from '../data/cases'
import type { Case } from '../data/cases'
import { DADOS, SETORES } from '../data/dados'
import Revelar from './Revelar'
import Ornamento from './Ornamento'

/**
 * Um case. O par antes/depois é conduzido pelo scroll: conforme o bloco atravessa
 * a tela, o "antes" perde peso e o "depois" assume.
 *
 * Sem pinar a viewport. O portfólio pessoal trava a tela e troca o texto — fica
 * mais cinematográfico e custa 250vh por case, o que aqui somaria três telas e
 * meia só de rolagem vazia. A leitura conduzida é a mesma; o scroll continua
 * sendo do visitante.
 */
function CaseBloco({ c, indice }: { c: Case; indice: number }) {
  const ref = useRef<HTMLElement>(null)
  const semMovimento = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'center 0.45'],
  })

  const antesOpacidade = useTransform(scrollYProgress, [0, 0.75], [1, 0.35])
  const depoisOpacidade = useTransform(scrollYProgress, [0.2, 0.9], [0.35, 1])
  const depoisY = useTransform(scrollYProgress, [0.2, 0.9], [10, 0])

  const antes = semMovimento ? {} : { opacity: antesOpacidade }
  const depois = semMovimento ? {} : { opacity: depoisOpacidade, y: depoisY }

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="grid gap-10 lg:grid-cols-12 lg:gap-14 items-center"
    >
      {/* A imagem troca de lado a cada case. */}
      <div className={`lg:col-span-7 ${indice % 2 === 1 ? 'lg:order-last' : ''}`}>
        <a
          href={c.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block group relative overflow-hidden border border-linha hover:border-acento/40 transition-colors"
        >
          <img
            src={c.imagem}
            alt={c.alt}
            width={1200}
            height={675}
            loading="lazy"
            decoding="async"
            className="w-full h-auto"
          />
          <span className="tec absolute bottom-0 right-0 bg-fundo/90 px-4 py-3 text-texto group-hover:text-acento-claro transition-colors">
            Abrir ↗
          </span>
        </a>
      </div>

      <div className="lg:col-span-5">
        <p className="tec text-texto-ter mb-4">
          {c.tipo} · {c.ano}
        </p>
        <h3 className="text-[length:var(--t-h3)] leading-tight mb-8">{c.nome}</h3>

        <div className="space-y-6 border-l border-linha pl-6">
          <motion.div style={antes}>
            <p className="tec text-texto-ter mb-2">Antes</p>
            <p className="text-[length:var(--t-corpo)] leading-relaxed text-texto-sec medida">
              {c.antes}
            </p>
          </motion.div>
          <motion.div style={depois}>
            <p className="tec text-acento-claro mb-2">Depois</p>
            <p className="text-[length:var(--t-corpo)] leading-relaxed text-texto medida">
              {c.depois}
            </p>
          </motion.div>
        </div>

        <p className="tec text-texto-ter mt-8 !tracking-[0.1em] normal-case">
          {c.stack}
        </p>
      </div>
    </motion.article>
  )
}

/**
 * A seção que faltava.
 *
 * O site afirmava capacidade sem mostrar nada. Aqui a afirmação vira link: os
 * três sistemas abrem no navegador do visitante, que verifica em vez de
 * acreditar — o que pesa mais ainda porque não há depoimento disponível.
 *
 * O arranjo alterna de lado a cada case, pela mesma razão que o ornamento muda
 * de seção: planta baixa repetida é o defeito que o resto do site tinha.
 */
export default function Prova() {
  return (
    <section id="cases" className="relative isolate py-[var(--espaco-secao-g)]">
      <Ornamento seed="cases-no-ar" posicao="topo" opacidade={1.4} />

      <div className="container-avantis">
        <div className="mb-16 sm:mb-24">
          <Revelar>
            <p className="tec text-acento-claro mb-5">O que já está no ar</p>
          </Revelar>
          <h2 className="text-[length:var(--t-h2)] leading-[1.08] medida-curta">
            <Revelar atraso={0.08}>
              <span className="block">
                Dá para <span className="realce">abrir e usar</span> agora.
              </span>
            </Revelar>
          </h2>
        </div>

        <div className="space-y-24 sm:space-y-32">
          {CASES.map((c, i) => (
            <CaseBloco key={c.id} c={c} indice={i} />
          ))}
        </div>

        {/* Arranjo C — faixa de dados. Cobre o trabalho que não pode virar case:
            o worker de uma rede de lojas não tem interface para mostrar, e o
            sistema de um restaurante ficou em demo. Aqui eles contam como
            alcance, sem nome e sem tela. */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mt-24 sm:mt-32 border-t border-linha-forte pt-10"
        >
          <div className="grid gap-10 sm:grid-cols-3 mb-12">
            {DADOS.map((d) => (
              <div key={d.rotulo}>
                <p className="font-titulo text-[length:var(--t-h3)] leading-none text-texto mb-3 tabular-nums">
                  {d.valor}
                </p>
                <p className="text-sm leading-relaxed text-texto-sec">{d.rotulo}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2 border-t border-linha pt-8">
            <span className="tec text-texto-ter">Setores atendidos</span>
            {SETORES.map((s, i) => (
              <span key={s} className="text-sm text-texto-sec">
                {s}
                {i < SETORES.length - 1 && <span className="text-texto-ter"> ·</span>}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
