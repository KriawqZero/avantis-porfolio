import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contato" className="relative px-5 sm:px-12 py-32 sm:py-48 bg-avantis-bg">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-[2.5rem] sm:text-6xl md:text-7xl font-heading tracking-tight text-avantis-text mb-8 leading-[1.05]">
            Inicie uma conversa.
            <br />
            <span className="text-avantis-text-ter">Seu negócio não precisa <br className="hidden sm:block" /> se adaptar ao software.</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-avantis-text-sec font-light mb-16 max-w-2xl mx-auto leading-relaxed">
            Mande uma mensagem. Vamos entender juntos como a tecnologia pode ajudar sua empresa a trabalhar menos em tarefas manuais e ter mais autonomia operacional.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
            <a
              href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '5567999999999'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-avantis-purple-dark via-avantis-purple to-avantis-purple-light px-10 py-5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-95 w-full sm:w-auto justify-center shadow-[0_0_40px_-10px_rgba(139,92,246,0.4)] rounded-lg"
            >
              <span>Falar com Especialista</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            
            <a
              href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL || 'contato@empresa.com'}`}
              className="text-sm font-medium text-avantis-text-sec hover:text-white transition-colors"
            >
              Ou envie um e-mail corporativo
            </a>
          </div>
          
          <div className="mt-32 pt-12 border-t border-avantis-text-ter/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-avantis-text-ter font-light">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-avantis-purple" />
              <span>Respondemos em até 24h úteis.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

