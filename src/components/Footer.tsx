import { EMAIL, linkWhatsApp } from '../data/contato'

/**
 * Rodapé de verdade.
 *
 * O anterior tinha só o copyright e a frase "Construindo soluções com design e
 * engenharia" — que não diz nada que o resto da página já não diga melhor. Quem
 * chega ao fim sem ter clicado em nada precisa de uma última saída, não de uma
 * assinatura decorativa.
 */
export default function Footer() {
  const navegacao = [
    { href: '#cases', label: 'Cases' },
    { href: '#solucoes', label: 'O que construímos' },
    { href: '#processo', label: 'Como funciona' },
    { href: '#quem', label: 'Quem faz' },
    { href: '#diagnostico', label: 'Diagnóstico' },
    { href: '#contato', label: 'Contato' },
  ]

  const wa = linkWhatsApp()

  return (
    <footer className="border-t border-linha">
      <div className="container-avantis py-14 sm:py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#" className="inline-flex items-center gap-2.5 mb-5">
              <img
                src="/logo-avantis.svg"
                alt=""
                width={20}
                height={16}
                className="h-5 w-auto"
              />
              <span className="tec text-texto">Avantis Studio</span>
            </a>
            <p className="text-sm leading-relaxed text-texto-sec medida">
              Sistemas sob medida e automação para pequenas e médias empresas.
            </p>
          </div>

          <nav className="lg:col-span-3 lg:col-start-7" aria-label="Rodapé">
            <p className="tec text-texto-ter mb-4">Navegar</p>
            <ul className="space-y-2.5">
              {navegacao.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-texto-sec transition-colors hover:text-texto"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="tec text-texto-ter mb-4">Falar com a gente</p>
            <ul className="space-y-2.5">
              {wa && (
                <li>
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-texto-sec transition-colors hover:text-texto"
                  >
                    WhatsApp
                  </a>
                </li>
              )}
              {EMAIL && (
                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-sm text-texto-sec transition-colors hover:text-texto"
                  >
                    E-mail
                  </a>
                </li>
              )}
              <li>
                <a
                  href="https://instagram.com/avantis.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-texto-sec transition-colors hover:text-texto"
                >
                  Instagram ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-14 border-t border-linha pt-8 text-xs text-texto-ter">
          © {new Date().getFullYear()} Avantis Studio
        </p>
      </div>
    </footer>
  )
}
