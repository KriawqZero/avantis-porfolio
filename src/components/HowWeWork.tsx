import { motion } from 'framer-motion'

export default function HowWeWork() {
  const steps = [
    {
      num: '01',
      title: 'Entendemos o seu processo',
      description: 'Mapeamos como sua empresa funciona hoje e onde estão os gargalos operacionais e o retrabalho.'
    },
    {
      num: '02',
      title: 'Desenhamos a solução',
      description: 'Não vendemos templates. Projetamos a arquitetura do software especificamente para a sua realidade.'
    },
    {
      num: '03',
      title: 'Entregamos a primeira versão',
      description: 'A parte que resolve o problema mais caro vem primeiro e vai para uso real — antes do resto do sistema existir. Assim você julga o software funcionando, não uma promessa.'
    },
    {
      num: '04',
      title: 'Evoluímos com a empresa',
      description: 'O software cresce conforme as suas vendas crescem. Adicionamos novas camadas de automação no momento certo.'
    }
  ]

  return (
    <section className="relative px-5 sm:px-12 py-32 bg-avantis-bg">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 lg:sticky lg:top-32 mb-16 lg:mb-0"
          >
            <h2 className="text-3xl sm:text-5xl font-heading tracking-tight text-avantis-text mb-6">
              Engenharia Aplicada.
            </h2>
            <p className="text-lg text-avantis-text-sec font-light leading-relaxed">
              Primeiro entender como o negócio funciona hoje. Depois construir só o que a operação usa de verdade — na ordem que faz diferença para quem trabalha nela.
            </p>
          </motion.div>

          <div className="lg:w-2/3 relative border-l border-avantis-text-ter/10 pl-8 sm:pl-16 space-y-24 sm:space-y-32">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative group"
            >
              {/* Massive translucent number */}
              <div className="absolute -left-[5rem] sm:-left-[8rem] -top-10 sm:-top-16 text-[6rem] sm:text-[10rem] font-bold text-avantis-text-sec/[0.03] select-none group-hover:text-avantis-text-sec/[0.06] transition-colors duration-500 leading-none">
                {step.num}
              </div>
              
              <div className="relative z-10 max-w-2xl">
                <div className="absolute -left-[2.1rem] sm:-left-[4.1rem] top-3 h-[1px] w-4 bg-avantis-purple/30 transition-all duration-300 group-hover:w-8 group-hover:bg-avantis-purple" />
                <h3 className="text-2xl sm:text-4xl font-heading text-avantis-text mb-4 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-base sm:text-xl text-avantis-text-sec font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}

