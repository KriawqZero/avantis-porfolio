import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

export default function Services() {
  const { t } = useLanguage()

  const icons = [
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>,
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>,
  ]

  return (
    <section id="servicos" className="relative px-5 sm:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-[2px] w-8 rounded-full bg-gradient-to-r from-fuchsia-500 to-sky-500" />
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.45em] text-slate-300/60">
              {t.services.label}
            </p>
            <span className="h-[2px] w-8 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500" />
          </div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-sm text-slate-300/70 max-w-lg mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
          {t.services.items.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-7 sm:rounded-[2rem]"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-sky-500 opacity-50" />
              <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-[100px]" />
              </div>

              <div className="flex justify-center mb-4 text-fuchsia-300/70">
                {icons[index]}
              </div>

              <h3 className="text-lg font-bold text-white text-center">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300/70 text-center">{item.description}</p>

              <ul className="mt-5 space-y-2.5">
                {item.pillars.map((pillar) => (
                  <li key={pillar} className="flex items-center gap-2.5 text-sm text-slate-300/80">
                    <span className="inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-br from-fuchsia-400 to-sky-400" />
                    {pillar}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
