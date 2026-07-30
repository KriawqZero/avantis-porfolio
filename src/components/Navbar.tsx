import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * A navbar antiga nascia invisível (`opacity-0 -translate-y-full`) e só aparecia
 * depois de 20px de scroll. No primeiro paint — o único momento em que o
 * visitante decide se fica — não havia marca nenhuma na tela. Agora ela está
 * presente desde o começo e só ganha fundo quando o conteúdo passa por baixo.
 *
 * O logo é vetor (`/logo-avantis.svg`); antes o site só tinha o wordmark em 12px
 * e o PNG da marca ficava em `public/` sem nunca ser usado.
 */
export default function Navbar() {
  const [rolou, setRolou] = useState(false)
  const [menuAberto, setMenuAberto] = useState(false)

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  // Trava o scroll do fundo enquanto o menu está aberto.
  useEffect(() => {
    document.body.style.overflow = menuAberto ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuAberto])

  const links = [
    { href: '#cases', label: 'Cases' },
    { href: '#solucoes', label: 'O que construímos' },
    { href: '#quem', label: 'Quem faz' },
    { href: '#diagnostico', label: 'Diagnóstico' },
    { href: '#contato', label: 'Contato' },
  ]

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
          rolou
            ? 'bg-fundo/85 backdrop-blur-xl border-b border-linha'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="container-avantis flex items-center justify-between py-4">
          <a
            href="#"
            className="flex items-center gap-2.5"
            aria-label="Avantis Studio — início"
          >
            <img
              src="/logo-avantis.svg"
              alt=""
              width={22}
              height={18}
              className="h-[22px] w-auto"
            />
            <span className="tec text-texto">Avantis Studio</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3.5 py-2 text-sm font-medium text-texto-sec rounded-lg transition-colors hover:text-texto hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMenuAberto(true)}
            className="md:hidden rounded-lg border border-linha bg-white/5 p-2.5 text-texto"
            aria-label="Abrir menu"
            aria-expanded={menuAberto}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuAberto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[60] bg-fundo/90 backdrop-blur-sm md:hidden"
            onClick={() => setMenuAberto(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-x-4 top-4 rounded-2xl border border-linha bg-fundo-elev p-5 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="flex items-center gap-2.5">
                  <img src="/logo-avantis.svg" alt="" width={20} height={16} className="h-5 w-auto" />
                  <span className="tec text-texto">Avantis Studio</span>
                </span>
                <button
                  onClick={() => setMenuAberto(false)}
                  className="rounded-lg border border-linha bg-white/5 p-2.5 text-texto"
                  aria-label="Fechar menu"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="space-y-1.5">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuAberto(false)}
                    className="block rounded-lg border border-linha px-4 py-3.5 text-base font-medium text-texto-sec transition-colors hover:bg-white/5 hover:text-texto"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
