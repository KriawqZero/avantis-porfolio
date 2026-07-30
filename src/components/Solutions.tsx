import { motion } from 'framer-motion'

/**
 * Arranjo de linhas largas numeradas — escolhido pelo Marcilio em 29/07/2026.
 *
 * A hierarquia de oferta definida em 28/07 (sistemas sob medida e automação são
 * a oferta principal; site com captação é secundária) continua sendo comunicada,
 * mas agora pela ORDEM e pela numeração, não por um card maior. Isso libera a
 * seção do grid de cards, que era o terceiro lugar da página a repetir a mesma
 * planta baixa.
 *
 * A copy é a do commit c5c8afe e não foi tocada.
 */
export default function Solutions() {
  const itens = [
    {
      num: '01',
      titulo: 'Sistemas sob medida',
      descricao:
        'Estoque, pedidos, clientes e o fechamento do mês num lugar só — com as telas que a sua operação usa de verdade, e sem os módulos que ninguém abre.',
      tags: ['Estoque e pedidos', 'Cadastro e histórico'],
    },
    {
      num: '02',
      titulo: 'Automação de tarefas repetidas',
      descricao:
        'A tarefa que alguém refaz todo dia — copiar pedido, conferir planilha, responder a mesma pergunta — passa a acontecer sozinha, no lugar certo.',
      tags: ['Menos retrabalho', 'Registro automático'],
    },
    {
      num: '03',
      titulo: 'Site com captação',
      descricao:
        'Presença própria, com o pedido ou o contato chegando direto para você. Um canal seu, sem depender só de plataforma de terceiro.',
      tags: ['Canal próprio', 'Contato direto'],
    },
  ]

  return (
    <section id="solucoes" className="relative py-[var(--espaco-secao-g)]">
      <div className="container-avantis">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-16 sm:mb-20 grid gap-8 lg:grid-cols-12"
        >
          <div className="lg:col-span-6">
            <p className="tec text-acento-claro mb-5">O que a gente constrói</p>
            <h2 className="text-[length:var(--t-h2)] leading-[1.08]">
              Onde a ferramenta pronta <span className="realce">para de servir</span>.
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 text-[length:var(--t-corpo)] leading-relaxed text-texto-sec self-end">
            Ferramenta pronta serve bem em muita coisa. O trabalho aqui começa onde
            ela não serve: a parte do seu negócio que continua no caderno, na
            planilha ou na cabeça de alguém.
          </p>
        </motion.div>

        <div>
          {itens.map((item, i) => (
            <motion.article
              key={item.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: Math.min(i, 2) * 0.08 }}
              className="grid gap-y-5 gap-x-8 border-t border-linha-forte py-10 sm:py-12 lg:grid-cols-12"
            >
              <p className="tec text-acento-claro lg:col-span-1">{item.num}</p>

              <h3 className="text-[length:var(--t-h3)] leading-tight lg:col-span-4">
                {item.titulo}
              </h3>

              <div className="lg:col-span-7">
                <p className="text-[length:var(--t-corpo)] leading-relaxed text-texto-sec medida mb-5">
                  {item.descricao}
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {item.tags.map((t) => (
                    <span key={t} className="tec text-texto-ter">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
          <div className="border-t border-linha-forte" />
        </div>
      </div>
    </section>
  )
}
