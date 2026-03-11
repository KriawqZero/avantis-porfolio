import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center px-5 sm:px-8 pt-20 pb-16">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-15%] top-[-10%] h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/25 blur-[160px]" />
        <div className="absolute right-[-15%] top-[15%] h-[26rem] w-[26rem] rounded-full bg-indigo-500/25 blur-[180px]" />
        <div className="absolute bottom-[-10%] left-[30%] h-[20rem] w-[20rem] rounded-full bg-sky-500/15 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-5xl w-full">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-16">
          {/* Left: Text */}
          <div className="space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-500/10 px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-fuchsia-200/80">
                <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
                {t.hero.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-black leading-[1.1] text-white sm:text-4xl lg:text-5xl"
            >
              {t.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base leading-relaxed text-slate-300/80 sm:text-lg max-w-xl"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 pt-1"
            >
              <a
                href="#contato"
                className="rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:shadow-xl"
              >
                {t.hero.cta}
              </a>
              <a
                href="#servicos"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/40 hover:bg-white/5"
              >
                {t.hero.ctaSecondary}
              </a>
            </motion.div>
          </div>

          {/* Right: Founder card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_0_60px_-20px_rgba(168,85,247,0.4)] backdrop-blur-2xl sm:p-8">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-transparent blur-3xl" />
              <div className="pointer-events-none absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-indigo-500/15 blur-3xl" />

              <div className="relative flex flex-col items-center text-center gap-5 sm:flex-row sm:text-left">
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 sm:h-24 sm:w-24">
                  <img
                    src="/foto-perfil.JPEG"
                    alt={t.hero.founderName}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-fuchsia-200/60">
                    {t.hero.founderLabel}
                  </p>
                  <p className="text-xl font-bold text-white">{t.hero.founderName}</p>
                  <p className="text-sm leading-relaxed text-slate-300/70">
                    {t.hero.founderRole}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <div className="h-8 w-5 rounded-full border border-white/20 flex items-start justify-center p-1">
            <div className="h-2 w-1 rounded-full bg-white/40" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
