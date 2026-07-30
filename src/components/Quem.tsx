import { motion } from 'framer-motion'

const PORTFOLIO = 'https://www.marciliortiz.dev.br'

/**
 * Quem está por trás.
 *
 * Deliberadamente curta. O Marcilio já tem um portfólio pessoal completo, e
 * repetir trajetória aqui competiria com a única coisa que esta página precisa
 * fazer: dar confiança suficiente para começar uma conversa. Então: nome, o que
 * faz, o que isso significa na prática para quem contrata — e a porta para quem
 * quiser se aprofundar.
 *
 * Sem foto, por decisão dele em 29/07/2026.
 */
export default function Quem() {
  return (
    <section id="quem" className="relative py-[var(--espaco-secao)]">
      <div className="container-avantis">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-start border-t border-linha-forte pt-10"
        >
          <div className="lg:col-span-4">
            <p className="tec text-acento-claro mb-5">Quem está por trás</p>
            <h2 className="text-[length:var(--t-h3)] leading-tight">
              Avantis é a marca.{' '}
              <span className="realce">O trabalho é meu</span>.
            </h2>
          </div>

          <div className="lg:col-span-8 lg:pl-12 lg:border-l lg:border-linha">
            <p className="text-[length:var(--t-corpo-g)] leading-relaxed text-texto medida mb-5">
              Sou o Marcilio Ortiz, desenvolvedor. A Avantis é o nome sob o qual
              entrego os projetos — não uma agência com equipe de vendas no meio
              do caminho.
            </p>
            <p className="text-[length:var(--t-corpo)] leading-relaxed text-texto-sec medida mb-8">
              Na prática isso muda duas coisas para quem contrata: a pessoa que
              entende o problema é a mesma que escreve o código, e não existe
              telefone sem fio entre o que você explica e o que é construído. Em
              troca, você fala com um estúdio pequeno — o que significa escopo
              combinado com cuidado, e não dez projetos ao mesmo tempo.
            </p>

            <a
              href={PORTFOLIO}
              target="_blank"
              rel="noopener noreferrer"
              className="tec inline-flex items-center gap-2 text-texto underline decoration-linha-forte underline-offset-[6px] transition-colors hover:text-acento-claro"
            >
              Ver minha trajetória em marciliortiz.dev.br ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
