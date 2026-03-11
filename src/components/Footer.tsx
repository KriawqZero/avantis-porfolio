import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="px-5 sm:px-8 pb-10">
      <div className="mx-auto max-w-5xl flex flex-col gap-2 border-t border-white/10 pt-8 text-xs text-slate-400/70 sm:flex-row sm:items-center sm:justify-between">
        <p>{t.footer.rights}</p>
        <p className="uppercase tracking-[0.3em] text-slate-500/60">{t.footer.tagline}</p>
      </div>
    </footer>
  )
}
