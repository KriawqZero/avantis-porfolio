import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Scroll suave com Lenis.
 *
 * É o efeito que mais muda a sensação de "site cuidado" sem tocar em nada visual
 * — a página passa a ter inércia, e o olho acompanha o texto em vez de pular.
 *
 * Duas diferenças em relação ao hook do portfólio pessoal, que serviu de
 * referência:
 *
 * 1. `prefers-reduced-motion` desliga o Lenis inteiro. Scroll sequestrado é
 *    justamente o que mais incomoda quem tem sensibilidade vestibular, e a
 *    versão do portfólio instancia o Lenis antes de checar isso.
 * 2. Sem GSAP. O portfólio sincroniza o Lenis com o ScrollTrigger no ticker do
 *    GSAP; aqui o `requestAnimationFrame` resolve, e o framer-motion (que já
 *    estava no projeto) cuida das animações de entrada.
 */
export function useScrollSuave() {
  useEffect(() => {
    const consulta = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (consulta.matches) return

    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true })

    let raf = 0
    const tick = (tempo: number) => {
      lenis.raf(tempo)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    // Âncoras precisam ser tratadas pelo Lenis: com o scroll assumido por ele, o
    // comportamento nativo do browser pula direto e desfaz a inércia.
    const aoClicar = (e: MouseEvent) => {
      const alvo = e.target as HTMLElement | null
      const ancora = alvo?.closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!ancora) return
      const id = ancora.getAttribute('href')
      if (!id || id === '#') return
      const destino = document.querySelector(id)
      if (!destino) return
      e.preventDefault()
      lenis.scrollTo(destino as HTMLElement, { offset: -72 })
    }

    document.addEventListener('click', aoClicar)

    return () => {
      document.removeEventListener('click', aoClicar)
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])
}
