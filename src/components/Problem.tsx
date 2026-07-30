import { motion } from 'framer-motion'
import Revelar from './Revelar'
import Ornamento from './Ornamento'

/**
 * A virada.
 *
 * Esta é a única seção clara da página, e isso é estrutural, não decorativo: é o
 * mesmo mecanismo do "slide de virada" dos carrosséis da Avantis (ver
 * avantis-render/docs/ARTE.md), que existe porque um bloco claro no meio de um
 * scroll escuro é o que faz o olho parar. As cores vêm de paletas.ts:violeta.claro.
 *
 * Também encolheu. A versão antiga ocupava duas telas com quatro frases separadas
 * por 20vh de vazio — o argumento é forte e não precisava de tanto chão.
 */
export default function Problem() {
  const sintomas = [
    'Controle de estoque em planilhas que não batem',
    'Pedidos misturados no meio do WhatsApp da empresa',
    'Histórico de cliente espalhado em papel e na memória',
    'Mensalidade alta por um sistema que não se adapta',
  ]

  return (
    <section className="superficie-clara relative isolate py-[var(--espaco-secao)]">
      {/* Na superfície clara o ornamento usa o acento escuro da mesma família,
          senão o traço claro desaparece. */}
      <Ornamento seed="o-problema" brilho="109, 40, 217" posicao="base" opacidade={1.2} />

      <div className="container-avantis">
        <h2 className="text-[length:var(--t-h2)] leading-[1.08] medida-curta mb-6">
          <Revelar>
            <span className="block">O papel e a planilha trouxeram</span>
          </Revelar>
          <Revelar atraso={0.1}>
            <span className="block">
              sua empresa <span className="realce">até aqui</span>.
            </span>
          </Revelar>
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-[length:var(--t-corpo-g)] leading-relaxed text-claro-texto-sec medida mb-14 sm:mb-20"
        >
          Mas são eles que impedem você de crescer amanhã.
        </motion.p>

        <ul className="grid gap-x-12 gap-y-0 sm:grid-cols-2 border-t border-linha-clara">
          {sintomas.map((s, i) => (
            <motion.li
              key={s}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: Math.min(i, 3) * 0.06 }}
              className="flex gap-4 border-b border-linha-clara py-6"
            >
              <span className="tec text-acento-escuro pt-1.5 shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-[length:var(--t-corpo)] leading-snug text-claro-texto">
                {s}
              </span>
            </motion.li>
          ))}
        </ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="tec text-acento-escuro mt-12"
        >
          {/* Copy original do Marcilio. A minha versão ("o problema não é falta
              de esforço — é falta de sistema") era antítese pura. */}
          Se você se identificou, é hora de profissionalizar a operação.
        </motion.p>
      </div>
    </section>
  )
}
