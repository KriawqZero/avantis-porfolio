import { useState } from 'react'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Desenvolvimento sob medida não é muito caro?',
      answer: 'Entendemos que pequenos e médios negócios precisam de soluções acessíveis. Por isso, cobramos apenas pelo projeto desenvolvido, focando no que gera valor real, sem vender módulos inúteis.'
    },
    {
      question: 'Vou ficar dependente da Avantis?',
      answer: 'Não. O software construído é seu. Entregamos a solução para você e você decide se quer manter um contrato de evolução e hospedagem conosco ou assumir a operação internamente no futuro.'
    },
    {
      question: 'Demora muito para ficar pronto?',
      answer: 'Não existe prazo padrão: depende do escopo, e o escopo só fica claro depois de entender a operação. O que dá para combinar desde o início é a ordem — a parte que resolve o problema mais caro vem primeiro, e você acompanha em uso antes do resto ficar pronto. O prazo real é combinado por escrito quando o escopo estiver definido, não antes.'
    },
    {
      question: 'Eu não entendo muito de tecnologia, vou conseguir usar?',
      answer: 'A interface é desenhada em cima do jeito que a sua equipe já trabalha, com as telas que a operação usa de verdade — e não com um catálogo de opções que ninguém abre. Na prática isso significa menos coisa na tela para aprender. Ainda assim, sistema novo tem período de adaptação, e faz parte do trabalho ajustar o que atrapalhar no uso.'
    }
  ]

  return (
    <section className="relative px-5 sm:px-12 py-32 bg-avantis-bg-sec border-t border-white/5">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <h2 className="text-3xl sm:text-4xl font-heading tracking-tight text-avantis-text mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-avantis-text-sec font-light">
              Tudo o que você precisa saber antes de iniciarmos nossa primeira conversa.
            </p>
          </div>

          <div className="lg:w-2/3 border-t border-avantis-text-ter/20">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-avantis-text-ter/20 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-8 text-left flex items-start justify-between gap-8 focus:outline-none group"
                >
                  <span className="text-lg sm:text-xl font-light text-avantis-text-sec group-hover:text-avantis-text transition-colors">{faq.question}</span>
                  <div className="mt-1 flex-shrink-0">
                    <svg
                      className={`w-5 h-5 text-avantis-purple-light transform transition-transform duration-500 ${openIndex === index ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100 mb-8' : 'max-h-0 opacity-0 mb-0'
                  }`}
                >
                  <p className="text-base text-avantis-text-ter font-light leading-relaxed pr-8">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
