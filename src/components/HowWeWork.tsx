import { motion } from 'framer-motion'

/**
 * Arranjo D — lista com régua, largura plena.
 *
 * Trocou o 1/3 sticky + 2/3 que TODAS as outras seções usavam. A regra vem do
 * tokens.ts do avantis-render: nunca dois arranjos iguais seguidos. Era o que
 * fazia o olho parar de olhar a partir da terceira seção.
 *
 * Absorveu também a parte comercial que estava escondida no FAQ. Propriedade do
 * código e forma de cobrança são argumento de venda, não rodapé — e são
 * exatamente os dois riscos que travam a decisão de quem vai contratar um
 * fornecedor desconhecido.
 *
 * Sem prazo, em nenhum lugar: veto de 28/07/2026.
 */
export default function HowWeWork() {
  const passos = [
    {
      num: '01',
      titulo: 'Entender o processo',
      texto: 'Como a empresa funciona hoje, onde está o retrabalho e o que custa caro sem aparecer na conta.',
    },
    {
      num: '02',
      titulo: 'Desenhar a solução',
      texto: 'Nada de template. A arquitetura é projetada para a operação que existe, não para uma média de mercado.',
    },
    {
      num: '03',
      titulo: 'Entregar a parte que dói',
      texto: 'O que resolve o problema mais caro vai para uso real antes do resto existir. Você julga o software funcionando, não uma promessa.',
    },
    {
      num: '04',
      titulo: 'Evoluir junto',
      texto: 'O sistema cresce com o negócio. Camada nova entra quando faz diferença, não quando cabe no contrato.',
    },
  ]

  const contratacao = [
    {
      titulo: 'O software é seu',
      texto: 'O que for construído fica com você. Manter a evolução e a hospedagem aqui é escolha, não amarra.',
    },
    {
      titulo: 'Cobrança por projeto',
      texto: 'Escopo fechado e combinado por escrito. Sem mensalidade obrigatória e sem módulo que ninguém abre.',
    },
    {
      titulo: 'Sem prazo antes do escopo',
      texto: 'Prazo só é honesto depois de entender a operação. O que dá para combinar desde o início é a ordem da entrega.',
    },
  ]

  return (
    <section id="processo" className="relative py-[var(--espaco-secao-g)]">
      <div className="container-avantis">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-16 sm:mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
        >
          <div>
            <p className="tec text-acento-claro mb-5">Como funciona um projeto</p>
            <h2 className="text-[length:var(--t-h2)] leading-[1.08] medida-curta">
              Primeiro entender. <span className="realce">Depois construir</span>.
            </h2>
          </div>
          <p className="text-[length:var(--t-corpo)] leading-relaxed text-texto-sec medida lg:max-w-sm lg:text-right">
            Só o que a operação usa de verdade, na ordem que faz diferença para
            quem trabalha nela.
          </p>
        </motion.div>

        {/* Quatro colunas com régua no topo — nada de coluna sticky. */}
        <div className="grid gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-4 mb-24 sm:mb-32">
          {passos.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: Math.min(i, 3) * 0.07 }}
              className="border-t border-linha-forte pt-6"
            >
              <p className="tec text-acento-claro mb-4">{p.num}</p>
              <h3 className="text-[length:var(--t-h3)] leading-tight mb-3">{p.titulo}</h3>
              <p className="text-[length:var(--t-corpo)] leading-relaxed text-texto-sec">
                {p.texto}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="border border-linha bg-fundo-elev p-8 sm:p-12"
        >
          <p className="tec text-texto-ter mb-8">Como a contratação funciona</p>
          <div className="grid gap-10 sm:gap-12 md:grid-cols-3">
            {contratacao.map((c) => (
              <div key={c.titulo}>
                <h3 className="font-corpo text-base font-semibold text-texto mb-2.5">
                  {c.titulo}
                </h3>
                <p className="text-[length:var(--t-corpo)] leading-relaxed text-texto-sec">
                  {c.texto}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
