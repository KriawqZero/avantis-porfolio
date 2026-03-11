import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()

  const contacts = [
    {
      label: t.contact.emailLabel,
      value: 'marciliortizz@gmail.com',
      href: 'mailto:marciliortizz@gmail.com',
      icon: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      color: 'text-pink-300/70',
    },
    {
      label: t.contact.linkedinLabel,
      value: 'Marcilio Ortiz',
      href: 'https://www.linkedin.com/in/marcilio-ortiz-barbosa-7b5a35165/',
      icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z',
      color: 'text-sky-300/70',
    },
    {
      label: t.contact.githubLabel,
      value: '@KriawqZero',
      href: 'https://github.com/KriawqZero',
      icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22',
      color: 'text-slate-300/70',
    },
    {
      label: t.contact.portfolioLabel,
      value: 'marciliortiz.dev.br',
      href: 'https://marciliortiz.dev.br',
      icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
      color: 'text-fuchsia-300/70',
    },
  ]

  return (
    <section id="contato" className="relative px-5 sm:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_60px_-20px_rgba(147,197,253,0.3)] backdrop-blur-2xl sm:p-10 sm:rounded-[2.5rem]">
            <div className="pointer-events-none absolute -bottom-16 right-0 h-48 w-48 rounded-full bg-sky-500/15 blur-[120px]" />
            <div className="pointer-events-none absolute -top-16 -left-10 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-[100px]" />

            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
              {/* Left */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-[2px] w-8 rounded-full bg-gradient-to-r from-fuchsia-500 to-sky-500" />
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.45em] text-slate-300/60">
                      {t.contact.label}
                    </p>
                  </div>
                  <h2 className="text-2xl font-bold text-white sm:text-3xl">
                    {t.contact.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300/70 max-w-md">
                    {t.contact.description}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {contacts.map((contact) => (
                    <a
                      key={contact.label}
                      href={contact.href}
                      target={contact.href.startsWith('mailto') ? undefined : '_blank'}
                      rel={contact.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                      className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/20 hover:bg-white/[0.06]"
                    >
                      <svg className={`h-5 w-5 flex-shrink-0 ${contact.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d={contact.icon} />
                      </svg>
                      <div className="min-w-0">
                        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-slate-400/70">{contact.label}</p>
                        <p className="text-sm font-medium text-slate-200 truncate group-hover:text-white transition">{contact.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col gap-5 justify-center">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <p className="text-sm font-semibold text-white">{t.contact.availability}</p>
                  </div>
                  <p className="text-xs text-slate-400">{t.contact.responseTime}</p>
                </div>

                <a
                  href="mailto:marciliortizz@gmail.com"
                  className="block w-full rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 px-6 py-3.5 text-center text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:shadow-xl"
                >
                  {t.contact.ctaEmail}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
