import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-5 sm:px-12 pt-28 pb-16 overflow-hidden">
      {/* Background Orgânico (Sede da Empresa) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10 bg-avantis-bg">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at top left, #2A184B 0%, transparent 45%)' }} />
        <div className="absolute right-0 bottom-0 w-[800px] h-[800px]" style={{ background: 'radial-gradient(circle at bottom right, rgba(139,92,246,.15), transparent 50%)' }} />

        {/* Grid muito fino para remeter a engenharia/estrutural */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CgkJPGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz4KPC9zdmc+')] opacity-50" />
      </div>

      <div className="relative mx-auto max-w-6xl w-full z-10">
        <div className="flex flex-col items-start max-w-4xl">

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-avantis-purple-light mb-8 sm:mb-12 border-l border-avantis-purple/50 pl-4"
          >
            {import.meta.env.VITE_COMPANY_NAME || 'Avantis Studio'}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading font-bold leading-[1.05] tracking-tight text-avantis-text mb-8 sm:mb-12"
          >
            Software feito para <br className="hidden sm:block" /> a operação que o seu <br className="hidden sm:block" /> negócio já tem.
          </motion.h1>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between w-full gap-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl leading-relaxed text-avantis-text-sec max-w-xl font-light"
            >
              Automação e sistemas sob medida para quem hoje resolve no papel, na planilha e no WhatsApp — sem obrigar o negócio a se adaptar a um sistema que não foi pensado para ele.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex-shrink-0"
            >
              <a
                href="#diagnostico"
                className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-avantis-purple-dark via-avantis-purple to-avantis-purple-light px-8 py-5 text-sm font-bold text-white transition-transform hover:scale-[1.02] active:scale-95 shadow-[0_0_40px_-10px_rgba(139,92,246,0.4)] rounded-lg"
              >
                <span>Começar por 5 perguntas</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
