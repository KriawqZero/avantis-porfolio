/**
 * Cases autorizados pelo Marcilio em 29/07/2026.
 *
 * Só entra aqui o que está no ar e pode ser aberto pelo visitante — a prova
 * da Avantis é link vivo, não depoimento. Os dois depoimentos que existem
 * pertencem a projetos não autorizados (Sushi do Verão, que ficou em demo, e
 * KyteApp, que é worker sem interface), então o site não tem prova social e
 * não deve simular uma.
 *
 * Regra ao editar: nada de número que não dê para verificar clicando. O
 * catálogo imobiliário mostra a quantidade de imóveis na própria home, e ela
 * muda — por isso não é citada aqui.
 */

export type Case = {
  id: string
  nome: string
  /** natureza do trabalho, dita sem enfeite */
  tipo: string
  ano: string
  /** o estado do negócio antes — na voz de quem vivia o problema */
  antes: string
  /** o que passou a acontecer, sem promessa de resultado */
  depois: string
  stack: string
  url: string
  imagem: string
  /** descrição da imagem para quem não a vê */
  alt: string
}

export const CASES: Case[] = [
  {
    id: 'imobiliario',
    nome: 'Catálogo e app de um corretor',
    tipo: 'Projeto sob medida · Corumbá e Ladário, MS',
    ano: '2026',
    antes:
      'As fotos chegavam soltas no WhatsApp e cada anúncio era escrito à mão, um a um, no fim do dia.',
    depois:
      'Um aplicativo manda foto e áudio direto da rua. O texto do anúncio é montado a partir disso e vai para o catálogo — o corretor publica sozinho, sem passar por ninguém técnico.',
    stack: 'Next.js · Expo · Prisma · MinIO · OpenAI',
    url: 'https://marciliobarbosacorretor.com.br',
    imagem: '/cases/imobiliario.webp',
    alt: 'Página inicial do catálogo de imóveis, com busca por cidade, tipo e bairro sobre uma foto aérea da cidade.',
  },
  {
    id: 'milion',
    nome: 'Milion Style',
    tipo: 'Vitrine própria · loja de streetwear',
    // Ano tirado do rodapé do próprio site (© 2026), não estimado.
    ano: '2026',
    antes:
      'A vitrine era o feed do Instagram: preço no direct, tamanho no direct, pedido no meio da conversa.',
    depois:
      'Catálogo próprio com preço à vista, filtro por categoria e contato direto — o cliente decide antes de puxar assunto, e a loja não depende do alcance de uma rede social.',
    // Stack verificada nos headers da resposta (server: Vercel, x-powered-by:
    // Next.js). Não há como afirmar mais que isso de fora.
    stack: 'Next.js · Vercel',
    url: 'https://milion.marciliortiz.dev.br',
    imagem: '/cases/milion.webp',
    alt: 'Página inicial da loja Milion Style, com foto de bermudas em destaque e grade de produtos por categoria.',
  },
  {
    id: 'vamoagendar',
    nome: 'VamoAgendar',
    tipo: 'Produto próprio · agendamento para autônomos',
    ano: '2026',
    antes:
      'O cliente pergunta "que horário você tem?", a resposta demora, e quando chega o horário já foi.',
    depois:
      'Um link mostra só os horários realmente livres, cruzando serviço, duração, feriado e a agenda que já existe. A confirmação sai sozinha.',
    stack: 'Next.js · Prisma · PostgreSQL · Mercado Pago',
    url: 'https://vamoagendar.com.br',
    imagem: '/cases/vamoagendar.webp',
    alt: 'Página do VamoAgendar com um painel de demonstração clicável mostrando serviços, duração e preço.',
  },
]
