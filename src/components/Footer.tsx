export default function Footer() {
  return (
    <footer className="px-5 sm:px-8 pb-10">
      <div className="mx-auto max-w-5xl flex flex-col gap-2 border-t border-white/10 pt-8 text-xs text-avantis-text-sec/70 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {import.meta.env.VITE_COMPANY_NAME || 'Avantis Studio'}. Todos os direitos reservados.</p>
        <p className="uppercase tracking-[0.3em] text-avantis-text-ter">Construindo soluções com design e engenharia.</p>
      </div>
    </footer>
  )
}
