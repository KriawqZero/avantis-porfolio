import { motion } from 'framer-motion'

export default function Solutions() {
  // Hierarquia de oferta (28/07/2026): sistemas sob medida e automação são a
  // oferta principal; site com captação é secundária — por isso ela é o
  // último card e não o de destaque.
  const items = [
    {
      title: 'Sistemas sob medida',
      description: 'Estoque, pedidos, clientes e o fechamento do mês num lugar só — com as telas que a sua operação usa de verdade, e sem os módulos que ninguém abre.',
      tags: ['Estoque e pedidos', 'Cadastro e histórico']
    },
    {
      title: 'Automação de tarefas repetidas',
      description: 'A tarefa que alguém refaz todo dia — copiar pedido, conferir planilha, responder a mesma pergunta — passa a acontecer sozinha, no lugar certo.',
      tags: ['Menos retrabalho', 'Registro automático']
    },
    {
      title: 'Site com captação',
      description: 'Presença própria, com o pedido ou o contato chegando direto para você. Um canal seu, sem depender só de plataforma de terceiro.',
      tags: ['Canal próprio', 'Contato direto']
    },
  ]

  return (
    <section id="solucoes" className="relative px-5 sm:px-12 py-32 bg-avantis-bg-sec border-t border-avantis-text-ter/10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 lg:sticky lg:top-32 mb-12 lg:mb-0"
          >
            <h2 className="text-3xl sm:text-5xl font-heading tracking-tight text-avantis-text mb-6">
              O que a gente constrói.
            </h2>
            <div className="h-[1px] w-full max-w-md bg-gradient-to-r from-avantis-purple/30 to-transparent mb-8" />
            <p className="text-lg text-avantis-text-sec font-light leading-relaxed">
              Ferramenta pronta serve bem em muita coisa. O trabalho aqui começa onde ela não serve: a parte do seu negócio que continua no caderno, na planilha ou na cabeça de alguém.
            </p>
          </motion.div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8 sm:gap-12">
          {/* Main feature takes larger space */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 relative overflow-hidden bg-[rgba(255,255,255,0.03)] backdrop-blur-xl p-8 sm:p-16 border border-[rgba(255,255,255,0.06)] hover:border-avantis-purple/30 transition-colors group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity text-avantis-purple hidden sm:block">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M4 7V4h16v3M9 20h6M12 4v16"/></svg>
            </div>
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-avantis-purple to-avantis-purple-light opacity-20 group-hover:opacity-100 transition-opacity" />
            <div className="max-w-2xl relative z-10">
              <h3 className="text-2xl sm:text-4xl font-heading text-avantis-text mb-6 tracking-tight">{items[0].title}</h3>
              <p className="text-lg sm:text-xl text-avantis-text-sec font-light leading-relaxed mb-8">{items[0].description}</p>
              <div className="flex gap-4 flex-wrap">
                {items[0].tags.map(tag => (
                  <span key={tag} className="text-xs uppercase tracking-widest text-avantis-purple-light font-medium">{tag}</span>
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
              className="sm:col-span-1 relative overflow-hidden bg-[rgba(255,255,255,0.03)] backdrop-blur-xl p-8 sm:p-12 border border-[rgba(255,255,255,0.06)] hover:border-avantis-purple/30 transition-colors group"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-avantis-purple-dark to-avantis-purple opacity-20 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-xl sm:text-2xl font-heading text-avantis-text mb-4 tracking-tight">{item.title}</h3>
              <p className="text-base sm:text-lg text-avantis-text-sec font-light leading-relaxed mb-8">{item.description}</p>
              <div className="flex gap-4 flex-wrap">
                {item.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest text-avantis-purple-light font-medium">{tag}</span>
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

