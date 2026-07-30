/**
 * Faixa de dados factuais.
 *
 * É aqui que entram os trabalhos que não podem virar case: o worker de uma rede
 * de lojas (sem interface para mostrar) e o sistema de um restaurante (que ficou
 * em demo). Eles contam como alcance, sem nome e sem tela — foi o que o Marcilio
 * pediu em 29/07/2026 ao dizer que "viram estatística".
 *
 * Critério para entrar: o número tem que sobreviver à pergunta "quais?" numa
 * conversa. Por isso o portfólio pessoal tem dez estatísticas e aqui só há
 * quatro — ver docs/PLANO-EVOLUCAO-VISUAL.md §14 para o que ficou de fora e por
 * quê. Número que o comprador não consegue verificar não constrói confiança:
 * abre distância entre o que o site afirma e o que ele mostra, que é exatamente
 * o problema que esta seção existe para resolver.
 *
 * Fonte: portfolio-react/src/data/content.ts (trajectory, about, freelance).
 */

export type Dado = {
  valor: string
  rotulo: string
  /** de onde o número sai — para conferir antes de mexer */
  origem: string
}

export const DADOS: Dado[] = [
  {
    valor: 'Desde 2025',
    rotulo: 'Entregando sistemas para clientes',
    origem: 'Primeiros trabalhos com registro: worker de rede de lojas e SISCO, ambos 2025.',
  },
  {
    valor: '4',
    rotulo: 'Sistemas em produção com uso diário',
    origem:
      'Catálogo imobiliário, Milion Style e VamoAgendar (os três verificados no ar em 29/07/2026) e SISCO, confirmado pelo Marcilio.',
  },
  {
    valor: '200+',
    rotulo: 'Pessoas usando o maior deles',
    origem: 'SISCO, no IFMS — alunos e coordenadores.',
  },
]

/** Setores onde já houve trabalho entregue. Sem nome de cliente. */
export const SETORES = ['Imobiliário', 'Moda', 'Varejo', 'Educação', 'Serviços'] as const
