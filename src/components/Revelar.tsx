import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  /** atraso em segundos, para encadear linhas */
  atraso?: number
  /** roda na entrada da viewport (padrão) ou já na carga da página */
  aoCarregar?: boolean
  className?: string
}

/**
 * Revelação por máscara: o texto sobe de dentro de um recorte, em vez de
 * aparecer com opacidade.
 *
 * É o gesto que faz uma manchete parecer composta por alguém — é o mesmo
 * mecanismo do portfólio pessoal (`.mask-text` + `translateY(100%)`), aqui feito
 * com o framer-motion que já estava no projeto em vez de GSAP.
 *
 * O padding negativo compensa o `overflow: hidden`: sem ele, acentos e
 * descendentes (o "ç" de "operação", o "g" de "negócio") são cortados pela
 * borda do recorte.
 */
export default function Revelar({
  children,
  atraso = 0,
  aoCarregar = false,
  className = '',
}: Props) {
  const semMovimento = useReducedMotion()

  if (semMovimento) return <div className={className}>{children}</div>

  const transicao = {
    duration: 0.9,
    delay: atraso,
    ease: [0.16, 1, 0.3, 1] as const,
  }

  const animacao = { y: '0%' }
  const inicial = { y: '105%' }

  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{ paddingBlock: '0.14em', marginBlock: '-0.14em' }}
    >
      <motion.div
        initial={inicial}
        {...(aoCarregar
          ? { animate: animacao }
          : { whileInView: animacao, viewport: { once: true, margin: '-12%' } })}
        transition={transicao}
      >
        {children}
      </motion.div>
    </div>
  )
}
