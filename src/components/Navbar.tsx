import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

export default function Navbar() {
  const { locale, setLocale, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#servicos', label: t.nav.services },
    { href: '#contato', label: t.nav.contact },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-4 sm:py-5'
        }`}
        style={{
          background: scrolled ? 'rgba(2, 6, 23, 0.8)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 sm:px-8">
          <a href="#" className="flex items-center gap-2.5 group">
            <img
              src="/logo-simple.png"
              alt="Avantis Studio"
              className="h-7 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-fuchsia-200/80 hidden sm:block">
              Avantis Studio
            </span>
          </a>

          <div className="hidden sm:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-300 rounded-xl transition-colors hover:text-white hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="ml-3 flex items-center rounded-full border border-white/10 bg-white/5 p-0.5">
              <button
                onClick={() => setLocale('pt')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                  locale === 'pt'
                    ? 'bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                PT
              </button>
              <button
                onClick={() => setLocale('en')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                  locale === 'en'
                    ? 'bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="sm:hidden rounded-xl border border-white/10 bg-white/5 p-2 text-white backdrop-blur"
            aria-label="Menu"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-slate-950/80 backdrop-blur-sm sm:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-x-4 top-4 rounded-2xl border border-white/10 bg-slate-900/95 p-5 shadow-2xl backdrop-blur-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-fuchsia-200/80">
                  Avantis Studio
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl border border-white/10 bg-white/5 p-2 text-white"
                  aria-label="Fechar"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="space-y-2">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-xl border border-white/5 px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-0.5">
                <button
                  onClick={() => { setLocale('pt'); setMobileOpen(false) }}
                  className={`flex-1 px-3 py-2 rounded-full text-xs font-medium transition-all ${
                    locale === 'pt'
                      ? 'bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white'
                      : 'text-slate-400'
                  }`}
                >
                  Português
                </button>
                <button
                  onClick={() => { setLocale('en'); setMobileOpen(false) }}
                  className={`flex-1 px-3 py-2 rounded-full text-xs font-medium transition-all ${
                    locale === 'en'
                      ? 'bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white'
                      : 'text-slate-400'
                  }`}
                >
                  English
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
