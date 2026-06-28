import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowWeWork from './components/HowWeWork'
import Solutions from './components/Solutions'
import Diagnostic from './components/Diagnostic'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <Problem />
      <HowWeWork />
      <Solutions />
      <Diagnostic />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}

