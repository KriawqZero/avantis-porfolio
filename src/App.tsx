import { useScrollSuave } from './hooks/useScrollSuave'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Prova from './components/Prova'
import Problem from './components/Problem'
import HowWeWork from './components/HowWeWork'
import Solutions from './components/Solutions'
import Quem from './components/Quem'
import Diagnostic from './components/Diagnostic'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'

/**
 * Ordem das seções.
 *
 * A prova está na posição 2, antes de qualquer argumento. Antes vinham quatro
 * seções descrevendo o problema, e quem chega aqui já vive o problema — precisa
 * ver que alguém resolveu isso para outra pessoa.
 */
export default function App() {
  useScrollSuave()

  return (
    <div className="relative min-h-screen w-full bg-fundo text-texto-sec flex flex-col font-corpo">
      <Navbar />
      <main>
        <Hero />
        <Prova />
        <Problem />
        <Solutions />
        <HowWeWork />
        {/* Depois do método, antes de pedir qualquer coisa: quem faz. */}
        <Quem />
        <Diagnostic />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
