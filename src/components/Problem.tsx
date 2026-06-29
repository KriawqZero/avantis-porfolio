import { motion } from 'framer-motion'

export default function Problem() {
  const painPoints = [
    "Controle de estoque feito em planilhas que não batem;",
    "Gestão de pedidos misturada no meio do WhatsApp da empresa;",
    "Falta de histórico de clientes e atendimentos espalhados em papéis;",
    "Pagamento de mensalidades altas por sistemas que não se adaptam à sua rotina."
  ]

  return (
    <section className="relative px-5 sm:px-12 py-32 sm:py-48 bg-avantis-bg-sec border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32 mb-16 lg:mb-0"
          >
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading tracking-tight text-avantis-text leading-[1.1]">
              O papel e a planilha trouxeram sua empresa até aqui.
            </h2>
            <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-avantis-text-ter to-transparent opacity-20" />
            <p className="mt-8 text-lg sm:text-xl text-avantis-text-sec font-light leading-relaxed">
              Mas são eles que impedem você de crescer amanhã.
            </p>
          </motion.div>

          <div className="space-y-12 sm:space-y-20 pt-8 lg:pt-32">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="absolute -left-6 top-3 h-px w-3 bg-avantis-purple-light" />
                <p className="text-xl sm:text-3xl font-light leading-snug text-avantis-text-sec">
                  {point}
                </p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="pt-12"
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-avantis-purple-light">
                Se você se identificou, é hora de profissionalizar a operação.
              </p>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
