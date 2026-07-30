import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { linkWhatsApp } from '../data/contato'

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
    // `slice(0, currentStep)` em vez de append: sem isso, voltar e responder de
    // novo empilhava as duas respostas e o resumo saía com a pergunta duplicada.
    const novas = [
      ...answers.slice(0, currentStep),
      { questionId: questions[currentStep].id, text: optionText },
    ]
    setAnswers(novas)
    setTimeout(() => setCurrentStep(currentStep + 1), 300)
  }

  const voltar = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1)
  }

  const generateWhatsAppLink = () => {
    // `\\n` numa string JS é barra invertida + n, não quebra de linha: o resumo
    // chegava no WhatsApp com "\n" visível no meio do texto.
    let message = "Olá! Fiz a Avaliação de Processos no site e gostaria de conversar.\n\n*Resumo da Operação:*\n"
    answers.forEach((ans, index) => {
      message += `*${questions[index].title}*\n=> ${ans.text}\n\n`
    })
    message += "Podemos agendar um bate-papo de 15 minutos?"
    
    return linkWhatsApp(message)
  }

  return (
    <section id="diagnostico" className="relative isolate py-[var(--espaco-secao-g)]">
      <div className="container-avantis">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <p className="tec text-acento-claro mb-5">Diagnóstico operacional</p>
            <h2 className="text-[length:var(--t-h2)] leading-[1.08] mb-6">
              Cinco perguntas sobre <span className="realce">a sua rotina</span>.
            </h2>
            <p className="text-[length:var(--t-corpo)] leading-relaxed text-texto-sec medida">
              No fim, você decide se quer conversar — nada é enviado sem você clicar.
            </p>
          </div>

          <div className="lg:col-span-8 relative min-h-[420px]">
          {/* Barra de progresso. Antes era uma régua vertical em `hidden sm:block`:
              quem respondia no celular — a maioria — não via progresso nenhum. */}
          <div
            className="mb-10 h-px w-full bg-linha"
            role="progressbar"
            aria-valuenow={Math.min(currentStep, questions.length)}
            aria-valuemin={0}
            aria-valuemax={questions.length}
            aria-label="Progresso do diagnóstico"
          >
            <div
              className="h-px bg-acento transition-[width] duration-500 ease-out"
              style={{ width: `${(Math.min(currentStep, questions.length) / questions.length) * 100}%` }}
            />
          </div>

          <AnimatePresence mode="wait">
            {currentStep < questions.length ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="mb-8 flex items-center gap-5">
                  <span className="tec text-acento-claro">
                    {String(currentStep + 1).padStart(2, '0')} / {String(questions.length).padStart(2, '0')}
                  </span>
                  {currentStep > 0 && (
                    <button
                      onClick={voltar}
                      className="tec text-texto-ter transition-colors hover:text-texto"
                    >
                      ← Voltar
                    </button>
                  )}
                </div>

                <h3 className="text-[length:var(--t-h3)] leading-tight mb-10">
                  {questions[currentStep].title}
                </h3>
                
                <div className="flex flex-col gap-3">
                  {questions[currentStep].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleSelect(option)}
                      className="group flex items-center justify-between text-left w-full py-4 sm:py-6 border-b border-linha hover:border-acento transition-colors"
                    >
                      <span className="text-[length:var(--t-corpo-g)] text-texto-sec group-hover:text-texto transition-colors">
                        {option}
                      </span>
                      <svg className="w-5 h-5 shrink-0 text-acento opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
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
                <h3 className="text-[length:var(--t-h3)] leading-tight mb-6">Respostas registradas</h3>
                {/* Sem diagnóstico automático: cinco respostas não permitem
                    afirmar o que a operação precisa. O honesto é dizer que o
                    resumo vai junto e que a leitura acontece na conversa. */}
                <p className="text-[length:var(--t-corpo)] leading-relaxed text-texto-sec medida mb-10">
                  Cinco respostas não dizem o que o seu negócio precisa — mas já dizem por onde começar a conversa.
                  <br /><br />
                  O botão abaixo abre o WhatsApp com esse resumo pronto. Se preferir, é só fechar esta página: nada foi enviado.
                </p>

                {/* Revisão antes de enviar: o resumo vai no WhatsApp, então o
                    visitante precisa ver o que está prestes a mandar. */}
                <ul className="mb-10 border-t border-linha">
                  {answers.map((a, i) => (
                    <li key={i} className="border-b border-linha py-4">
                      <p className="tec text-texto-ter mb-1.5">{questions[i].title}</p>
                      <p className="text-[length:var(--t-corpo)] text-texto">{a.text}</p>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setCurrentStep(questions.length - 1)}
                  className="tec text-texto-ter transition-colors hover:text-texto mb-8 block"
                >
                  ← Corrigir a última resposta
                </button>

                <div className="flex flex-col sm:flex-row gap-6">
                  {generateWhatsAppLink() && (
                    <a
                      href={generateWhatsAppLink()!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-lg bg-acento px-8 py-4.5 text-sm font-semibold text-white transition-colors hover:bg-acento-escuro"
                    >
                      <span>Abrir conversa no WhatsApp</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                  )}
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

