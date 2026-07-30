import { motion } from 'framer-motion'
import Revelar from './Revelar'
import Ornamento from './Ornamento'

const PORTFOLIO = 'https://www.marciliortiz.dev.br'

/**
 * Quem faz.
 *
 * A primeira versão abria com "Avantis é a marca. O trabalho é meu." O Marcilio
 * reprovou por soar como texto gerado, e estava certo: é a construção de
 * antítese — afirmar negando o oposto — que dá impressão de precisão sem custar
 * informação. O vício estava espalhado por várias seções e foi corrigido junto.
 *
 * Estrutura nova: em vez de definir o que a Avantis é, a seção lista o que muda
 * na prática de quem contrata, com o custo dito na mesma altura do benefício. O
 * histórico completo fica no portfólio pessoal, que é onde ele já existe bem
 * feito — repetir trajetória aqui competiria com a única coisa que esta página
 * precisa fazer.
 *
 * Sem foto, por decisão dele em 29/07/2026.
 */
export default function Quem() {
  const pontos = [
    {
      titulo: 'Uma pessoa do começo ao fim',
      texto:
        'A conversa em que você explica a operação e o código que sai dela são da mesma pessoa. Nada do que você contar precisa ser repassado adiante.',
    },
    {
      titulo: 'Escopo antes de preço',
      texto:
        'Primeiro entender o que trava a operação, depois dizer o que dá para construir e quanto custa. Por escrito, antes de qualquer compromisso.',
    },
    {
      titulo: 'Poucos projetos por vez',
      texto:
        'Um estúdio pequeno atende menos gente ao mesmo tempo. Se a agenda estiver cheia, você vai saber disso na primeira conversa.',
    },
  ]

  return (
    <section id="quem" className="relative isolate py-[var(--espaco-secao-g)]">
      <Ornamento seed="quem-faz" posicao="base" opacidade={1.5} />

      <div className="container-avantis">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Revelar>
              <p className="tec text-acento-claro mb-5">Quem faz</p>
            </Revelar>
            {/* Nome sem realce: italicizar um sobrenome lê como erro de
                digitação, não como acento. O destaque itálico da marca só cai em
                palavra que carrega sentido. */}
            <Revelar atraso={0.08}>
              <h2 className="text-[length:var(--t-h2)] leading-[1.08] mb-8">
                Marcilio Ortiz
              </h2>
            </Revelar>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-[length:var(--t-corpo-g)] leading-relaxed text-texto medida mb-6">
                Desenvolvedor. Trabalho sob a marca Avantis desde 2025, com
                sistemas em produção em imobiliário, moda, varejo, educação e
                serviços.
              </p>
              <p className="text-[length:var(--t-corpo)] leading-relaxed text-texto-sec medida mb-8">
                A trajetória inteira, com os projetos que não cabem aqui, está no
                meu site pessoal.
              </p>

              <a
                href={PORTFOLIO}
                target="_blank"
                rel="noopener noreferrer"
                className="tec inline-flex items-center gap-2 text-texto underline decoration-linha-forte underline-offset-[6px] transition-colors hover:text-acento-claro"
              >
                marciliortiz.dev.br ↗
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="tec text-texto-ter mb-8">O que isso muda na prática</p>
            <div className="border-t border-linha">
              {pontos.map((p, i) => (
                <motion.div
                  key={p.titulo}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: Math.min(i, 2) * 0.09 }}
                  className="border-b border-linha py-6"
                >
                  <h3 className="font-corpo text-base font-semibold text-texto mb-2">
                    {p.titulo}
                  </h3>
                  <p className="text-[length:var(--t-corpo)] leading-relaxed text-texto-sec">
                    {p.texto}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
