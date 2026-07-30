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
 * "Numa conversa" é literal, e vale a leitura estrita (30/07/2026): o número
 * precisa ser sustentável quando alguém pergunta, não precisa ser inteiramente
 * clicável. Projeto entregue e em uso diário conta mesmo sem vitrine pública —
 * foi por confundir as duas coisas que a contagem de projetos ficou em 4 por
 * um tempo. Quem for revisar para baixo, leia o campo `origem` antes.
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
    valor: '+10',
    rotulo: 'Projetos entregues e em uso diário',
    origem:
      'Contagem do Marcilio em 30/07/2026, alinhada com a bio do Instagram. ' +
      'Era 4 e subiu porque a conta anterior só considerava trabalho com vitrine ' +
      'pública. Entram aqui: os três com case aberto (catálogo imobiliário, Milion ' +
      'Style e VamoAgendar, verificados no ar em 29/07/2026), o SISCO, o KyteApp ' +
      '(worker, sem interface) e o sistema de reajuste de valores em ' +
      'projeto_reajuste_valor_fernando — em uso diário há mais de um ano numa ' +
      'empresa de assistência técnica em SP. ATENÇÃO: o nome desse cliente NÃO está ' +
      'autorizado para uso público — não citar em site, bio, post ou legenda.',
  },
  {
    valor: '200+',
    rotulo: 'Pessoas usando o maior deles',
    origem: 'SISCO, no IFMS — alunos e coordenadores.',
  },
]

/** Setores onde já houve trabalho entregue. Sem nome de cliente. */
export const SETORES = ['Imobiliário', 'Moda', 'Varejo', 'Educação', 'Serviços'] as const
