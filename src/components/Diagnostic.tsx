import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Answer = { questionId: number; text: string }

export default function Diagnostic() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])

  const questions = [
    {
      id: 1,
      title: 'Qual é o segmento da sua empresa?',
      options: ['Restaurante / Alimentação', 'Loja / Varejo', 'Oficina / Serviços', 'Clínica / Saúde', 'Distribuidora', 'Outro'],
    },
    {
      id: 2,
      title: 'Como você controla a operação do seu negócio hoje?',
      options: ['Tudo no Papel', 'Planilhas', 'Pelo WhatsApp', 'Sistema Genérico', 'Sistema Próprio'],
    },
    {
      id: 3,
      title: 'Qual atividade mais consome tempo no seu dia a dia?',
      options: ['Controle de Estoque', 'Gestão de Pedidos', 'Atendimento ao Cliente', 'Financeiro e Cobranças', 'Cadastro e Histórico'],
    },
    {
      id: 4,
      title: 'O método atual atende completamente às suas necessidades?',
      options: ['Sim, atende bem', 'Parcialmente', 'Não, é engessado demais', 'Não utilizo nenhum método'],
    },
    {
      id: 5,
      title: 'Você pretende profissionalizar esses processos nos próximos meses?',
      options: ['Sim, com certeza', 'Talvez, preciso avaliar', 'Ainda não, só pesquisando'],
    },
  ]

  const handleSelect = (optionText: string) => {
    const newAnswers = [...answers, { questionId: questions[currentStep].id, text: optionText }]
    setAnswers(newAnswers)

    if (currentStep < questions.length) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300)
    }
  }

  const generateWhatsAppLink = () => {
    let message = "Olá! Fiz a Avaliação de Processos no site e gostaria de conversar.\\n\\n*Resumo da Operação:*\\n"
    answers.forEach((ans, index) => {
      message += `*${questions[index].title}*\\n=> ${ans.text}\\n\\n`
    })
    message += "Podemos agendar um bate-papo de 15 minutos?"
    
    const encoded = encodeURIComponent(message)
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5567999999999'
    return `https://wa.me/${whatsappNumber}?text=${encoded}`
  }

  return (
    <section id="diagnostico" className="relative px-5 sm:px-12 py-32 sm:py-48 bg-[#02020a]">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          <div className="lg:w-1/3 lg:sticky lg:top-32 mb-8 lg:mb-0">
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-6">
            Diagnóstico Operacional
          </h2>
          <p className="text-lg text-slate-400 font-light max-w-xl">
            Uma avaliação gratuita em 5 passos para descobrir os maiores gargalos do seu negócio.
          </p>
          </div>

          <div className="lg:w-2/3 relative min-h-[400px]">
          {/* Subtle line indicator */}
          <div className="absolute -left-5 top-0 h-full w-[1px] bg-white/5 hidden sm:block">
            <div 
              className="w-full bg-gradient-to-b from-fuchsia-500 to-indigo-500 transition-all duration-700 ease-out shadow-[0_0_15px_rgba(168,85,247,0.5)]"
              style={{ height: `${(currentStep / questions.length) * 100}%` }}
            />
          </div>

          <AnimatePresence mode="wait">
            {currentStep < questions.length ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <div className="mb-8">
                  <span className="text-xs font-semibold tracking-[0.2em] text-fuchsia-400 uppercase">
                    0{currentStep + 1} / 0{questions.length}
                  </span>
                </div>
                
                <h3 className="text-2xl sm:text-4xl font-medium text-white mb-12 tracking-tight leading-tight">
                  {questions[currentStep].title}
                </h3>
                
                <div className="flex flex-col gap-3">
                  {questions[currentStep].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleSelect(option)}
                      className="group flex items-center justify-between text-left w-full py-4 sm:py-6 border-b border-white/10 hover:border-fuchsia-500/50 transition-colors focus:outline-none"
                    >
                      <span className="text-lg sm:text-xl text-slate-400 group-hover:text-fuchsia-100 transition-colors font-light">
                        {option}
                      </span>
                      <svg className="w-5 h-5 text-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="py-12"
              >
                <h3 className="text-3xl sm:text-5xl font-medium text-white mb-8 tracking-tight">Avaliação Concluída</h3>
                <p className="text-lg sm:text-xl text-slate-400 font-light leading-relaxed mb-12 max-w-2xl">
                  Identificamos oportunidades reais para automatizar seus processos, reduzir tarefas manuais repetitivas e devolver eficiência para a sua operação. 
                  <br /><br />
                  O próximo passo é uma conversa estratégica.
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 px-8 py-5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] shadow-[0_0_40px_-10px_rgba(168,85,247,0.4)]"
                  >
                    <span>Receber Diagnóstico no WhatsApp</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        </div>
      </div>
    </section>
  )
}

