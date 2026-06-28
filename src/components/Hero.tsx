import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-5 sm:px-12 pt-28 pb-16 overflow-hidden">
      {/* Background Orgânico (Sede da Empresa) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-[#050511]" />
        
        {/* Blurs clássicos da Avantis */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -right-32 h-[40rem] w-[40rem] rounded-full bg-fuchsia-500/30 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 -left-32 h-[35rem] w-[35rem] rounded-full bg-indigo-500/25 blur-[140px]" 
        />
        
        {/* Grid muito fino para remeter a engenharia/estrutural */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CgkJPGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz4KPC9zdmc+')] opacity-50" />
      </div>

      <div className="relative mx-auto max-w-6xl w-full z-10">
        <div className="flex flex-col items-start max-w-4xl">
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-200/80 mb-8 sm:mb-12 border-l border-fuchsia-500/50 pl-4"
          >
            {import.meta.env.VITE_COMPANY_NAME || 'Avantis Studio'}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.05] tracking-tight text-white mb-8 sm:mb-12"
          >
            Desenvolvemos <br className="hidden sm:block" /> soluções tecnológicas para empresas <br className="hidden sm:block" /> que desejam autonomia.
          </motion.h1>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between w-full gap-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl leading-relaxed text-slate-300 max-w-xl font-light"
            >
              Profissionalize seus processos, reduza o retrabalho e não dependa mais de planilhas desorganizadas ou sistemas genéricos que limitam sua operação.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex-shrink-0"
            >
              <a
                href="#diagnostico"
                className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 px-8 py-5 text-sm font-bold text-white transition-transform hover:scale-[1.02] active:scale-95 shadow-[0_0_40px_-10px_rgba(168,85,247,0.4)]"
                style={{ borderRadius: '2px' }}
              >
                <span>Fazer Diagnóstico Operacional</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
