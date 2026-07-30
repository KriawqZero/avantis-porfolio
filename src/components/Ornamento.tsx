import { useEffect, useMemo, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { sorteio, hashTexto } from '../lib/aleatorio'
import { geraOrnamento, TIPOS_ORNAMENTO } from '../lib/ornamentos'

const LARGURA = 1200
const ALTURA = 900

type Props = {
  /** nome da seção — deriva a seed, então a textura é estável entre visitas */
  seed: string
  /** brilho em "r, g, b" — o acento da família violeta por padrão */
  brilho?: string
  /**
   * Intensidade geral. O render dos carrosséis desenha em 1080×1350 com traço de
   * 1–1,6px; aqui o mesmo desenho é esticado para a largura da viewport com
   * `slice`, então o traço afina proporcionalmente e some. Este multiplicador
   * compensa isso — mexer nele é o jeito de calibrar por seção.
   */
  opacidade?: number
  /** ancoragem vertical do desenho dentro da seção */
  posicao?: 'topo' | 'centro' | 'base'
}

/**
 * A textura de fundo do site, gerada pelo mesmo código que produz a arte dos
 * carrosséis da Avantis (`src/lib/ornamentos.ts`, cópia de `avantis-render`).
 *
 * Cada seção passa o próprio nome como seed. Isso dá duas coisas ao mesmo tempo:
 * cada seção tem uma textura diferente — que é o que impede a página de parecer
 * a mesma seção repetida — e a textura de cada uma é sempre a mesma, porque o
 * sorteio é determinístico. O site tem personalidade sem ficar instável.
 *
 * O ponteiro desloca a camada alguns pixels, com amortecimento. É um sinal de
 * profundidade, não um efeito: se der para perceber que "tem um efeito ali", a
 * intensidade está alta demais.
 */
export default function Ornamento({
  seed,
  brilho = '139, 92, 246',
  opacidade = 1,
  posicao = 'centro',
}: Props) {
  const camadaRef = useRef<HTMLDivElement>(null)
  const semMovimento = useReducedMotion()

  const ornamento = useMemo(() => {
    const s = sorteio(hashTexto(seed))
    const tipo = s.escolhe(TIPOS_ORNAMENTO)
    return geraOrnamento(tipo, s, LARGURA, ALTURA, brilho)
  }, [seed, brilho])

  useEffect(() => {
    if (semMovimento) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const alvo = { x: 0, y: 0 }
    const atual = { x: 0, y: 0 }
    let raf = 0

    const aoMover = (e: PointerEvent) => {
      alvo.x = (e.clientX / window.innerWidth - 0.5) * 22
      alvo.y = (e.clientY / window.innerHeight - 0.5) * 14
    }

    const animar = () => {
      atual.x += (alvo.x - atual.x) * 0.06
      atual.y += (alvo.y - atual.y) * 0.06
      if (camadaRef.current) {
        camadaRef.current.style.transform = `translate3d(${atual.x.toFixed(2)}px, ${atual.y.toFixed(2)}px, 0)`
      }
      raf = requestAnimationFrame(animar)
    }

    window.addEventListener('pointermove', aoMover, { passive: true })
    raf = requestAnimationFrame(animar)
    return () => {
      window.removeEventListener('pointermove', aoMover)
      cancelAnimationFrame(raf)
    }
  }, [semMovimento])

  const alinhamento =
    posicao === 'topo' ? 'top' : posicao === 'base' ? 'bottom' : 'center'

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        ref={camadaRef}
        className="absolute inset-0 will-change-transform"
        style={{ opacity: ornamento.opacidade * opacidade }}
      >
        <svg
          viewBox={`0 0 ${LARGURA} ${ALTURA}`}
          preserveAspectRatio={`xMidY${alinhamento === 'center' ? 'Mid' : alinhamento === 'top' ? 'Min' : 'Max'} slice`}
          className="h-full w-full"
          // O traço não engrossa junto com o escalonamento do viewBox; sem isso
          // uma linha de 1px desenhada em 1200 de largura vira sub-pixel.
          vectorEffect="non-scaling-stroke"
        >
          {ornamento.primitivas.map((p, i) => {
            if (p.tipo === 'path') {
              return (
                <path
                  key={i}
                  d={p.d}
                  fill={p.preenche ? p.cor : 'none'}
                  stroke={p.preenche ? 'none' : p.cor}
                  strokeWidth={p.espessura}
                  opacity={p.opacidade}
                  vectorEffect="non-scaling-stroke"
                />
              )
            }
            if (p.tipo === 'circulo') {
              return (
                <circle
                  key={i}
                  cx={p.cx}
                  cy={p.cy}
                  r={p.r}
                  fill={p.espessura ? 'none' : p.cor}
                  stroke={p.espessura ? p.cor : 'none'}
                  strokeWidth={p.espessura}
                  opacity={p.opacidade}
                  vectorEffect="non-scaling-stroke"
                />
              )
            }
            return (
              <line
                key={i}
                x1={p.x1}
                y1={p.y1}
                x2={p.x2}
                y2={p.y2}
                stroke={p.cor}
                strokeWidth={p.espessura}
                opacity={p.opacidade}
                vectorEffect="non-scaling-stroke"
              />
            )
          })}
        </svg>
      </div>
    </div>
  )
}
