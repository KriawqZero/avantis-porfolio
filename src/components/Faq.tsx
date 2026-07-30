import { useState } from 'react'

/**
 * FAQ em coluna estreita, sem a coluna sticky de 1/3 que todas as seções usavam.
 *
 * Encolheu de conteúdo também: as duas perguntas comerciais (propriedade do
 * código e forma de cobrança) subiram para "Como funciona um projeto", onde são
 * argumento de venda em vez de rodapé atrás de um clique. Aqui ficam as objeções
 * que sobraram.
 *
 * Acessibilidade: `aria-expanded`/`aria-controls` na pergunta, `inert` no painel
 * fechado, e altura animada por grid em vez de `max-h-96` — que cortava resposta
 * longa, e as respostas ficaram longas justamente por serem honestas.
 */
export default function Faq() {
  const [aberta, setAberta] = useState<number | null>(null)

  const perguntas = [
    {
      pergunta: 'Desenvolvimento sob medida não é muito caro?',
      // Sem comparação de custo com mensalidade: seria promessa de resultado,
      // e o veto de 28/07/2026 vale para qualquer peça.
      resposta:
        'Cobramos pelo projeto, não por módulo nem por assento. O escopo é fechado antes de começar, e o que entra nele é o que a operação usa — não um pacote com partes que você nunca vai abrir.',
    },
    {
      // Copy original do Marcilio (c5c8afe), restaurada em 29/07/2026: o medo
      // dito na voz do comprador funciona melhor que o enquadramento de saída.
      pergunta: 'Vou ficar dependente da Avantis?',
      resposta:
        'Não. O software construído é seu. Entregamos a solução para você e você decide se quer manter um contrato de evolução e hospedagem conosco ou assumir a operação internamente no futuro.',
    },
    {
      pergunta: 'Demora muito para ficar pronto?',
      resposta:
        'Não existe prazo padrão: depende do escopo, e o escopo só fica claro depois de entender a operação. O que dá para combinar desde o início é a ordem — a parte que resolve o problema mais caro vem primeiro, e você acompanha em uso antes do resto ficar pronto. O prazo real é combinado por escrito quando o escopo estiver definido, não antes.',
    },
    {
      pergunta: 'Eu não entendo muito de tecnologia, vou conseguir usar?',
      resposta:
        'A interface é desenhada em cima do jeito que a sua equipe já trabalha, com as telas que a operação usa de verdade — e não com um catálogo de opções que ninguém abre. Na prática isso significa menos coisa na tela para aprender. Ainda assim, sistema novo tem período de adaptação, e faz parte do trabalho ajustar o que atrapalhar no uso.',
    },
  ]

  return (
    <section id="duvidas" className="relative py-[var(--espaco-secao)]">
      <div className="container-avantis">
        <div className="mx-auto max-w-3xl">
          <p className="tec text-acento-claro mb-5">Antes da primeira conversa</p>
          <h2 className="text-[length:var(--t-h2)] leading-[1.08] mb-14">
            O que costumam <span className="realce">perguntar</span>.
          </h2>

          <div className="border-t border-linha-forte">
            {perguntas.map((f, i) => {
              const estaAberta = aberta === i
              return (
                <div key={i} className="border-b border-linha">
                  <h3>
                    <button
                      onClick={() => setAberta(estaAberta ? null : i)}
                      aria-expanded={estaAberta}
                      aria-controls={`faq-resposta-${i}`}
                      id={`faq-pergunta-${i}`}
                      className="group flex w-full items-start justify-between gap-8 py-7 text-left"
                    >
                      <span className="text-[length:var(--t-corpo-g)] leading-snug text-texto-sec transition-colors group-hover:text-texto">
                        {f.pergunta}
                      </span>
                      <span className="mt-1 shrink-0 text-acento-claro">
                        <svg
                          className={`h-5 w-5 transition-transform duration-300 ${estaAberta ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          aria-hidden
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                  </h3>

                  <div
                    id={`faq-resposta-${i}`}
                    role="region"
                    aria-labelledby={`faq-pergunta-${i}`}
                    inert={!estaAberta}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      estaAberta ? 'grid-rows-[1fr] pb-8' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[length:var(--t-corpo)] leading-relaxed text-texto-sec medida pr-8">
                        {f.resposta}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
