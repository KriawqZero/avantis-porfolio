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
 * A prova subiu para a posição 2. Antes vinham quatro seções de argumento
 * (problema, método, soluções, diagnóstico) antes de qualquer evidência — e
 * quem chega aqui já vive o problema, não precisa de quatro telas descrevendo
 * ele. Precisa ver que alguém resolveu isso para outra pessoa.
 */
export default function App() {
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
