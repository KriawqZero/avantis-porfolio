import { motion } from 'framer-motion'
import { CASES } from '../data/cases'
import { DADOS, SETORES } from '../data/dados'

/**
 * A seção que faltava.
 *
 * O site inteiro afirmava capacidade e não mostrava nada. Aqui a afirmação vira
 * link: os dois sistemas abrem no navegador do visitante. É prova verificável em
 * vez de acreditável — o que importa ainda mais porque não há depoimento.
 *
 * O arranjo alterna lado a cada case. Não é enfeite: repetir a mesma planta baixa
 * é exatamente o defeito que o resto do site tinha.
 */
export default function Prova() {
  return (
    <section id="cases" className="relative py-[var(--espaco-secao-g)]">
      <div className="container-avantis">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-16 sm:mb-24"
        >
          <p className="tec text-acento-claro mb-5">O que já está no ar</p>
          <h2 className="text-[length:var(--t-h2)] leading-[1.08] medida-curta">
            Dá para <span className="realce">abrir e usar</span> agora.
          </h2>
        </motion.div>

        <div className="space-y-24 sm:space-y-32">
          {CASES.map((c, i) => (
            <motion.article
              key={c.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="grid gap-10 lg:grid-cols-12 lg:gap-14 items-center"
            >
              {/* A imagem troca de lado a cada case. */}
              <div
                className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-last' : ''}`}
              >
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
                <h3 className="text-[length:var(--t-h3)] leading-tight mb-8">
                  {c.nome}
                </h3>

                {/* O par antes/depois — o mesmo mecanismo que a marca já usa
                    no carrossel para quebrar o scroll, aqui em texto. */}
                <div className="space-y-6 border-l border-linha pl-6">
                  <div>
                    <p className="tec text-texto-ter mb-2">Antes</p>
                    <p className="text-[length:var(--t-corpo)] leading-relaxed text-texto-sec medida">
                      {c.antes}
                    </p>
                  </div>
                  <div>
                    <p className="tec text-acento-claro mb-2">Depois</p>
                    <p className="text-[length:var(--t-corpo)] leading-relaxed text-texto medida">
                      {c.depois}
                    </p>
                  </div>
                </div>

                <p className="tec text-texto-ter mt-8 !tracking-[0.1em] normal-case">
                  {c.stack}
                </p>
              </div>
            </motion.article>
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
