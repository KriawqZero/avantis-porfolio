import { motion } from 'framer-motion'

export default function Solutions() {
  const items = [
    {
      title: 'Gestão de Estoque e Compras',
      description: 'Tenha controle absoluto das suas entradas e saídas. Saiba o que comprar, quando comprar e quanto do seu capital está parado na prateleira.',
      tags: ['Controle Financeiro', 'Previsibilidade']
    },
    {
      title: 'Automação de Atendimento',
      description: 'Pare de perder clientes porque o WhatsApp estava congestionado. Digitalize o fluxo de atendimento, agendamentos e respostas rápidas.',
      tags: ['Agendamentos', 'Histórico de Clientes']
    },
    {
      title: 'Plataforma Própria de Vendas',
      description: 'Liberte-se das taxas de aplicativos de delivery (iFood, etc). Venda diretamente com sua marca através do seu próprio canal.',
      tags: ['Sem Taxas Extras', 'Independência']
    },
  ]

  return (
    <section id="solucoes" className="relative px-5 sm:px-12 py-32 bg-[#050511] border-t border-fuchsia-500/5">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 lg:sticky lg:top-32 mb-12 lg:mb-0"
          >
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-6">
              Onde criamos impacto.
            </h2>
            <div className="h-[1px] w-full max-w-md bg-gradient-to-r from-fuchsia-500/20 to-indigo-500/5 mb-8" />
            <p className="text-lg text-slate-400 font-light leading-relaxed">
              Construímos ferramentas para centralizar as operações críticas da sua empresa, focando exclusivamente no ganho de autonomia.
            </p>
          </motion.div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8 sm:gap-12">
          {/* Main feature takes larger space */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 relative overflow-hidden bg-slate-900/40 p-8 sm:p-16 border border-fuchsia-500/10 hover:border-fuchsia-500/30 transition-colors group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity text-fuchsia-400 hidden sm:block">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M4 7V4h16v3M9 20h6M12 4v16"/></svg>
            </div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fuchsia-500 to-indigo-500 opacity-20 group-hover:opacity-100 transition-opacity" />
            <div className="max-w-2xl relative z-10">
              <h3 className="text-2xl sm:text-4xl font-medium text-white mb-6 tracking-tight">{items[0].title}</h3>
              <p className="text-lg sm:text-xl text-slate-400 font-light leading-relaxed mb-8">{items[0].description}</p>
              <div className="flex gap-4 flex-wrap">
                {items[0].tags.map(tag => (
                  <span key={tag} className="text-xs uppercase tracking-widest text-fuchsia-200/70 font-medium">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Secondary features side by side */}
          {items.slice(1).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="sm:col-span-1 relative overflow-hidden bg-slate-900/20 p-8 sm:p-12 border border-indigo-500/10 hover:border-indigo-500/30 transition-colors group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-fuchsia-500 opacity-20 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-xl sm:text-2xl font-medium text-white mb-4 tracking-tight">{item.title}</h3>
              <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed mb-8">{item.description}</p>
              <div className="flex gap-4 flex-wrap">
                {item.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest text-indigo-200/70 font-medium">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}

