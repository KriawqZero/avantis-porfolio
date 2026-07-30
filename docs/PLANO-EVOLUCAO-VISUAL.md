# Plano de evolução visual e de experiência — Avantis Studio

Documento de diagnóstico e direção. Escrito em 27/07/2026 a partir de leitura completa do
código (`src/App.tsx`, `src/index.css`, todos os componentes, `index.html`, `public/`),
navegação real do site em desktop (1440×900) e mobile (390×844), e comparação com
`/mnt/Files/Projetos/portfolio-react` (referência de nível de execução) e
`/mnt/Files/Projetos/avantis-render` (fonte do sistema visual da marca).

Nada foi implementado. Este arquivo é o único artefato produzido.

---

## 1. Diagnóstico da percepção atual

### O que o site comunica hoje

Ordem, sobriedade e alguém que sabe escrever. A copy é limpa, sem jargão, e o argumento
central ("seu negócio não precisa se adaptar ao software") é bom e defensável. Um visitante
sai da página entendendo o que a Avantis diz que faz.

### O que ele não comunica

Quem é a Avantis, o que já entregou, para quem, com que resultado, quanto custa começar,
quanto demora, onde fica. É um site de **posicionamento sem evidência**. O comprador é
convidado a confiar numa afirmação — "não vendemos templates" — que ele não tem como
verificar em nenhum ponto da página.

### Onde perde valor percebido

**1. Uma planta baixa repetida cinco vezes.**
`Problem`, `HowWeWork`, `Solutions`, `Diagnostic` e `Faq` usam o mesmo layout: coluna
esquerda de 1/3 com `lg:sticky lg:top-32`, título em Playfair, parágrafo cinza claro; coluna
direita de 2/3 com o conteúdo. O olho aprende o padrão na segunda seção e para de olhar a
partir da terceira.

Isso é literalmente o mesmo defeito que o `avantis-render` diagnosticou de si mesmo em
19/07/2026 e documentou em `docs/ARTE.md`: *"vinte imagens publicadas com a mesma planta
baixa, variando só o texto dentro dos buracos"*. O site institucional é a v1 do carrossel —
a marca já resolveu esse problema num lugar e ainda não aplicou no outro.

**2. Prova zero.**
Nenhum case, nenhuma tela de sistema, nenhum nome de cliente, nenhum depoimento, nenhum
número, nenhuma cidade, nenhum link para algo no ar. Para um comprador que vai contratar um
fornecedor desconhecido, prova não é enfeite: é a variável que decide. Hoje a única prova de
competência disponível é o próprio site — e o site é o mais fraco dos artefatos da marca,
abaixo dos carrosséis do Instagram.

**3. A superfície é um material só.**
Dois fundos quase idênticos (`#070611` e `#0D0B1D` — diferença imperceptível em tela comum),
cards de `rgba(255,255,255,0.03)` com borda de 6% e um fio roxo no topo. Não existe uma
segunda superfície, uma imagem, um bloco claro, uma tabela, um dado. Tudo é "texto branco
sobre preto com um toque roxo". Acabamento percebido vem de variedade controlada de
material; o site tem um material.

**4. Escala sem contraste tipográfico.**
Playfair em todo título, Inter light em todo corpo. Os H2 e o H1 são a mesma voz em tamanhos
diferentes. Falta um terceiro registro — técnico, pequeno, tabular — que dê textura e sinalize
engenharia. O carrossel da Avantis **tem** esse contraste (o destaque em Playfair itálico roxo,
que é a assinatura mais reconhecível da marca) e o site não usa em lugar nenhum.

**5. Ritmo lento, vazio no lugar errado.**
`py-32`/`py-48` mais colunas sticky produzem telas onde a metade inferior é vazia enquanto a
coluna esquerda repete o mesmo título por três rolagens. São 7.285px de altura em desktop e
8.082px em mobile para cerca de 1.200 palavras. Vazio é bom quando enquadra alguma coisa;
aqui ele enquadra ausência.

**6. A marca não aparece.**
Não há logo em nenhum ponto da interface — só o wordmark "AVANTIS STUDIO" em 12px, caixa
alta, `tracking-[0.3em]`, repetido em três lugares. Existe `public/logo-simple.png`,
referenciado no JSON-LD e nunca usado na tela. Pior: a `Navbar` nasce invisível
(`opacity-0 -translate-y-full`, só aparece após 20px de scroll). No primeiro paint — o único
momento em que o visitante decide se fica — a marca não está na tela.

**7. A melhor frase está na cor mais fraca.**
"Seu negócio não precisa se adaptar ao software" está em `text-avantis-text-ter` (`#7A7890`),
o cinza reservado a legenda. O único elemento saturado da página é o botão. A hierarquia de
cor está invertida no ponto de fechamento.

### O que é simplicidade útil (preservar)

- Jornada linear, sem menu profundo, sem modal, sem carrossel horizontal.
- Copy sem jargão. "Planilhas que não batem" é bom texto comercial.
- Um caminho de conversão claro (conversa) com um passo intermediário de baixo compromisso
  (diagnóstico) — o wizard é o melhor ativo do site.
- Contraste alto no texto principal; corpo em 18–20px no desktop.
- Poucas dependências, carga rápida.

### O que é apenas ausência (corrigir)

- Não ter imagem ≠ minimalismo. É não ter acervo.
- Não ter case ≠ discrição. É não ter prova.
- Não ter variação de layout ≠ consistência. É template.
- Não ter segunda superfície ≠ elegância. É paleta incompleta.
- Não ter dado ≠ honestidade. Dá para ser honesto e concreto ao mesmo tempo.

---

## 2. Público: perfil e necessidades reais

Dono ou gestor de PME, decide sozinho ou com um sócio. **Não é leigo digital**: usa WhatsApp
Business, iFood, banco no app, algum ERP ruim e uma planilha compartilhada. Ele sabe
exatamente o que é uma interface ruim porque sofre com uma todo dia. O que ele não tem é
vocabulário técnico e tempo.

Tratar esse público como "pouco tecnológico" produz o erro que o site já cometeu: baixar a
densidade visual até sobrar só texto. Ele não precisa de fonte maior — lê letra pequena no
celular o dia inteiro. Ele não tolera **ambiguidade**, e ambiguidade não é o mesmo que
densidade.

### Os cinco riscos que ele está avaliando

1. Pagar e o fornecedor sumir.
2. Receber algo que a equipe não vai usar.
3. Ficar refém — não conseguir trocar de fornecedor depois.
4. Não descobrir o preço até já estar comprometido.
5. Parecer bobo numa conversa técnica.

O FAQ atual endereça o 3 e o 5 bem, o 1 pela metade, e **não endereça o 2 nem o 4**. Nenhuma
tela é mostrada (2) e não há qualquer sinalização de faixa de investimento ou modelo de
contratação (4). Esses dois são os que mais travam decisão.

### A ordem em que ele lê

Quem é você → o que você já fez parecido com o meu caso → quanto custa → quanto demora →
como começo. A arquitetura atual entrega isso na ordem quase inversa: quatro seções de
argumento antes de qualquer evidência, e as respostas comerciais escondidas num acordeão no
fim da página.

---

## 3. Princípios de design

1. **Prova antes de promessa.** Toda seção que afirma capacidade fica a no máximo uma tela de
   algo verificável: uma tela real, um nome, um link, um número.
2. **Variação entre seções, coerência dentro da seção.** Regra emprestada do próprio
   `avantis-render`. É a regra que a Avantis já escreveu e ainda não aplicou aqui.
3. **Fundo profundo, um acento, e uma segunda superfície.** Manter o quase-preto e o roxo
   cirúrgico; introduzir uma superfície clara para exatamente uma virada — o mesmo mecanismo
   do "slide de virada" do carrossel, que existe justamente para quebrar a monotonia do scroll.
4. **Três registros tipográficos, não dois.** Serifa editorial para manchete, sans para
   leitura, e um registro técnico (caixa alta pequena com `tabular-nums`, ou mono) para dado,
   rótulo, stack, ano, número. É esse terceiro registro que faz um site parecer feito por
   engenheiro em vez de gerado.
5. **Movimento serve à leitura ou não existe.** Entrada suave uma vez, nunca em loop, nunca
   paralaxe decorativa, nunca scroll sequestrado. `prefers-reduced-motion` respeitado.
6. **Densidade calibrada, não vazio calibrado.** Cortar altura morta e usar o espaço
   recuperado para conteúdo real.
7. **Dois níveis de compromisso, sempre visíveis.** "Ver um exemplo" (baixo) e "falar" (alto).
   Hoje só existe o alto.
8. **Nada inventado.** Se não há depoimento autorizado, não há seção de depoimento. Ausência é
   melhor que decoração falsa — e mais barata de manter.

---

## 4. Narrativa e arquitetura de informação

### Hoje

Hero → Problema → Como trabalhamos → Soluções → Diagnóstico → FAQ → Contato.

Quatro seções de argumento antes da primeira evidência. O visitante que já entendeu o
problema — a maioria, porque ele vive o problema — não tem para onde correr.

### Proposta

| # | Seção | Origem | Função comercial |
|---|---|---|---|
| 1 | **Hero** | reformulado | Qualificar em 5 segundos, mostrar a marca, abrir dois caminhos |
| 2 | **O que já construímos** | **nova** | Transformar credibilidade em evidência antes de pedir qualquer coisa |
| 3 | **O problema** | `Problem`, encolhido | Espelhar a dor em meia tela — e ser a virada de superfície |
| 4 | **Soluções** | `Solutions`, reformatada | Dar nome ao que ele quer comprar |
| 5 | **Como funciona um projeto** | `HowWeWork` + parte do FAQ | Matar os riscos 1, 2 e 4: propriedade do código, ordem de entrega, modelo de contratação |
| 6 | **Diagnóstico** | `Diagnostic`, melhorado | Capturar quem ainda não quer falar |
| 7 | **FAQ** | `Faq`, encolhido | Limpar as objeções que sobraram |
| 8 | **Contato** | `Contact`, com corpo | Fechar, e dizer o que acontece depois |
| 9 | **Rodapé** | `Footer`, expandido | Identidade, navegação, canais |

**Manter:** hero, soluções, diagnóstico, FAQ, contato.
**Criar:** prova/cases (a lacuna mais cara do site hoje).
**Juntar:** `HowWeWork` com a metade comercial do FAQ. As respostas "o software é seu" e
"primeira versão em poucas semanas" são argumento de venda, não rodapé — hoje estão
escondidas atrás de um clique no fim da página.
**Encolher:** `Problem`, de seção de duas telas para um bloco de meia tela.
**Reordenar:** prova sobe para a posição 2.

---

## 5. Direção de arte

### Tipografia

Playfair Display fica, e ganha o que a marca já usa nos carrosséis e o site ignora:
**destaque em itálico no acento**. Está em `template.ts` e documentado em `ARTE.md`; é a
assinatura mais reconhecível da Avantis e custa uma variante de fonte. Hoje só o peso 700
romano é carregado — adicionar 700 italic.

Inter fica para corpo (400/500/600). O terceiro registro: Inter caixa alta 11–12px com
`letter-spacing: 0.16em` e `font-variant-numeric: tabular-nums` para rótulos técnicos, stack,
ano, número de case. Uma mono real (JetBrains Mono, IBM Plex Mono) resolve melhor, ao custo de
mais uma família — decisão em aberto (§11.6).

Escala fluida com `clamp()` no lugar dos saltos atuais (`text-3xl sm:text-5xl lg:text-6xl`):

```
H1     clamp(2.6rem, 6vw, 5rem)        line-height 1.04   tracking -0.02em
H2     clamp(2rem, 4vw, 3.25rem)       line-height 1.08
H3     clamp(1.35rem, 2.2vw, 1.85rem)
corpo  clamp(1.0625rem, 1.1vw, 1.1875rem)  line-height 1.65
técnico 0.6875rem–0.75rem, uppercase, tracking 0.16em
```

Medida de leitura travada em 62–68ch. Hoje `max-w-xl`, `max-w-2xl` e `max-w-4xl` aparecem sem
critério, produzindo linhas de 45 a 95 caracteres na mesma página.

### Grids

Hoje existe um arranjo só. Propor quatro e alternar, com a regra do `tokens.ts` — **nunca dois
arranjos iguais consecutivos**:

- **A. Manchete plena** — largura total, uma coluna, medida curta. Hero, virada.
- **B. Assimétrico 5/7** — narrativa à esquerda, tela + metadados à direita. Cases.
- **C. Faixa de dados** — 3 ou 4 colunas de número + rótulo. Prova factual.
- **D. Lista com régua** — linhas separadas por hairline. Processo, FAQ, contratação.

Container de 1200px (hoje `max-w-6xl`/`max-w-5xl`/`max-w-4xl` alternam entre seções sem razão
visível, e isso desalinha as margens verticalmente ao longo da página).

### Cor e superfícies

Base `#070611` mantida. Acrescentar:

- **Superfície elevada real** — `#12101F`–`#141227` com borda `rgba(255,255,255,.08)`.
  Os 3%/6% atuais são invisíveis fora de um monitor calibrado no escuro.
- **Uma superfície clara** para uma única seção: fundo `#EDE9FE`, texto `#160F2E`, acento
  `#6D28D9`. Todos esses valores **já existem** em `paletas.ts` (`violeta.claro`) — não é cor
  nova, é a paleta da marca que o site nunca usou por inteiro.
- Roxo `#8B5CF6` restrito a quatro papéis: destaque itálico, CTA primário, régua ativa, foco.
  Nunca como fundo de card inteiro.
- Aposentar `--color-avantis-blue` e `--color-avantis-pink`: declarados no `index.css`,
  usados em lugar nenhum. Se quiser um segundo acento para dado (ex.: um ganho de tempo),
  puxar âmbar ou menta de `paletas.ts` e usar com parcimônia.

### Ornamento

Já existe e é código: onda, topografia, grade, arcos, malha, órbita (`ornamentos.ts`). Portar
**dois** deles para SVG estático no site — um por seção-chave, opacidade ≤0.2, ancorado longe
do centro óptico — dá continuidade visual entre Instagram e site a custo zero de acervo.

A regra do `ARTE.md` vale aqui igual: *se um ornamento chamar mais atenção que a manchete, ele
está errado — não o texto*. Hoje o site usa um pontilhado base64 genérico no hero e nada no
resto da página.

### Imagens e mockups

O item mais caro e mais decisivo. Três níveis:

1. **Screenshot real** dos sistemas entregues, recortado em moldura reta e sóbria. Sem laptop
   3D flutuando, sem perspectiva, sem sombra dramática.
2. **Recorte de interface** — um pedaço da tela ampliado, com uma legenda curta apontando o
   que aquilo resolve. Mais legível em mobile que a tela inteira.
3. **Micro-demo** — 6 a 10 segundos, sem áudio, mostrando uma ação real (mudar um preço no
   painel e ver refletir no cardápio).

Nunca: banco de imagem, "equipe" genérica, ilustração isométrica de gente com laptop.

### Movimento

Fade + 8px de deslocamento, uma vez, 300–500ms, `ease-out`, stagger ≤80ms. Hover altera borda
e cor, sem `scale` em cartão. Régua de progresso do diagnóstico com transição de largura.
Zero paralaxe, zero pinning, zero cursor customizado — isso é vocabulário do portfólio
pessoal e não combina com a Avantis. `prefers-reduced-motion: reduce` desliga tudo, incluindo
o `scroll-behavior: smooth` global (hoje inexistente).

---

## 6. Como mostrar capacidade e prova

### Já existe — precisa de autorização e captura, não de produção do zero

Levantado em `portfolio-react/src/data/content.ts`:

- **Sushi do Verão** — ecossistema em produção (NestJS · Next.js · Expo · PostgreSQL), com
  depoimento do proprietário já registrado.
- **KyteApp Financial Worker** — cliente via Workana, rede de lojas, worker Playwright; com
  depoimento de "Rodrigo M. (Gerente de Operações)" já registrado.
- **Catálogo & app imobiliário** — `marciliobarbosacorretor.com.br`, no ar, público.
- **SISCO** — 200+ usuários ativos, IFMS.
- **VamoAgendar** — SaaS próprio, `vamoagendar.com.br`, no ar.
- **@avantis.dev no Instagram** — carrosséis próprios, prova de autoridade editorial.

### Precisa ser produzido

- Screenshots limpos, com dados anonimizados ou fictícios coerentes.
- Autorização escrita por cliente para nome, logo e citação.
- Uma frase de resultado por case — honesta e verificável. *"A equipe passou a alterar preço
  durante o pico sem chamar suporte"* é verdade demonstrável. *"Aumentamos o faturamento em
  38%"* não é, e não deve ser escrito.
- Logo em SVG (hoje só PNG).
- Um vídeo de 8 segundos, se o nível 3 entrar.

### Formatos, por custo/benefício

1. Case com tela + antes/depois em texto. Melhor razão impacto/custo.
2. Faixa de dados factuais (anos de operação, sistemas em produção, usuários no maior sistema).
3. Depoimento curto atribuído.
4. Micro-demo em vídeo.
5. "Bastidor" — um print de painel de deploy ou monitoramento. Prova operação continuada, não
   só entrega, e é o que diferencia estúdio de freelancer que some.

### Se nada for autorizado

Alternativa honesta: um **projeto-demonstração público** — mini-sistema navegável com dados
fictícios em `demo.avantis.dev`. Custa desenvolvimento, mas resolve prova sem depender de
terceiros e serve para sempre.

---

## 7. Propostas por seção

### Hero

Uma tela, entendível sem rolar. Contém, nesta ordem de peso:

- Marca visível no primeiro paint — logo + wordmark. A navbar não pode nascer invisível.
- Manchete com **destaque em itálico roxo** na palavra que carrega o sentido.
- Subtítulo de uma frase.
- Dois CTAs: primário "Fazer diagnóstico", secundário "Ver o que já construímos".
- **Faixa de prova logo abaixo** — três dados factuais ou três nomes de sistema no ar.

A metade direita hoje é vazia. Ou recebe um recorte de interface real, ou o hero vira coluna
única com medida curta. Meia tela vazia não é composição.

### Soluções

Manter as três. Trocar o card genérico por um bloco com: nome, uma frase do problema na voz do
cliente, o que o sistema faz, e um link "ver isso funcionando" apontando para o case
correspondente. Alternar o arranjo — não três cards iguais num grid.

### Prova

Arranjo B (5/7). Esquerda: narrativa em três linhas (problema → o que foi feito → o que
mudou). Direita: tela + metadados no registro técnico (stack, ano, tipo, link). É o formato
que o portfólio pessoal já validou; a diferença aqui é ser sóbrio e sem scroll pinning.

### Diagnóstico

Manter o wizard — é o melhor ativo de conversão do site. Corrigir:

- Botão voltar (hoje uma resposta errada é irreversível sem recarregar).
- Progresso visível também em mobile (a régua está em `hidden sm:block`).
- Revisão das respostas antes do envio.
- Corrigir o `\n` literal na mensagem (§14).

A tela final **não** deve tentar diagnosticar automaticamente. Cinco respostas não sustentam
uma afirmação sobre a operação, e o texto atual ("cinco respostas não dizem o que o seu
negócio precisa — mas já dizem por onde começar a conversa") já resolve isso da forma
honesta. O que falta ali é forma, não conteúdo.

### Contato

Deixar de ser um botão centralizado. Ganhar corpo institucional: nome, região de atendimento,
canais (WhatsApp, e-mail, Instagram) e três linhas sobre **o que acontece depois** que ele
mandar mensagem. Isso reduz o medo de ser abordado por vendedor, que é a razão silenciosa de
muita mensagem não enviada.

Sem promessa de prazo de resposta — veto de 28/07/2026, e correto: um estúdio de uma pessoa
não sustenta SLA. "Quem responde é quem desenvolve", que já está no site, faz o mesmo trabalho
de reduzir risco sem prometer nada.

---

## 8. Desktop e mobile

**Desktop.** Container 1200 fixo. Alternância de arranjos. Sticky apenas onde há conteúdo
longo pareado (um case), nunca para repetir um título por três telas. Altura total alvo:
5.000–5.500px, contra os 7.285px atuais com menos conteúdo.

**Mobile.** Coluna única, `px-5`, ordem visual igual à ordem de prioridade. Nenhum elemento
decorativo pode nascer fora do container — hoje as marcas `-left-6` da seção Problema tocam a
borda da tela. CTA fixo no rodapé após a primeira dobra (barra discreta, "Falar no WhatsApp"),
porque hoje o único caminho é rolar 8.082px até o fim. Alvos de toque ≥44px. Navbar mobile
ganha "Cases" e "Diagnóstico" — hoje só tem dois links, e `HowWeWork` e `Faq` sequer têm `id`.

**Acessibilidade e legibilidade** (todas regressões atuais):

- Restaurar `:focus-visible`. Hoje `focus:outline-none` no wizard e no FAQ sem substituto —
  navegação por teclado fica cega.
- FAQ com `aria-expanded` e `aria-controls`; trocar `max-h-96` por altura real (resposta longa
  clipa).
- Contraste ≥4.5:1 no corpo. `#7A7890` sobre `#070611` dá 4,7:1 — passa no AA, ao contrário do
  que uma primeira estimativa deste documento afirmava. Ainda assim vale subir para `#948EB3`
  (6,5:1), que é o tom `apoio` da família violeta em `paletas.ts`: é ganho de leitura em texto
  corrido, não correção de falha.
- Nunca usar o cinza terciário em frase principal — caso da manchete do Contato.
- `prefers-reduced-motion` desligando entradas e `scroll-behavior`.

---

## 9. Três conceitos criativos

### Conceito 1 — "Oficina" (registro técnico sóbrio)

O site parece o caderno de obra de uma engenharia. Régua fina, numeração explícita, dados
tabulares, rótulos em registro técnico, fundo escuro contínuo com uma única virada clara.
A prova aparece como ficha: sistema, cliente, ano, stack, o que mudou. Ornamentos: grade e
malha. Screenshots recortados em molduras retas, sem mockup 3D.

*Referências conceituais:* manual de equipamento industrial bem feito, documentação técnica de
fabricante, laudo.

**Prós** — mais barato de executar; funciona mesmo com pouco acervo de imagem; comunica "quem
faz isso sabe o que está fazendo"; alinha com o tom sóbrio já escolhido; envelhece bem.
**Contras** — pode ficar frio para um dono de restaurante; se o vocabulário escorregar, vira
"de dev para dev".
**Risco de execução: baixo.**

### Conceito 2 — "Antes e Depois" (narrativo/editorial)

A página é conduzida por pares de contraste. Cada bloco mostra o estado atual do negócio
(planilha, caderno, WhatsApp) e o estado depois (a tela do sistema). Usa a **virada de
superfície** como mecanismo estrutural, não como enfeite: o "antes" em superfície clara e
áspera, o "depois" em superfície escura e ordenada. Tipografia editorial forte, manchetes com
destaque itálico.

*Referências conceituais:* reportagem de revista com par de imagens; o próprio sistema de
slide de virada do `avantis-render`, que existe exatamente para essa função no feed.

**Prós** — é a forma que mais rápido converte um dono de negócio, porque ele se vê no "antes";
usa um mecanismo que a marca já validou no Instagram; alta memorabilidade.
**Contras** — depende inteiramente de conseguir bons "antes" e "depois". Sem acervo, vira
ilustração e perde a força toda.
**Risco de execução: médio-alto** — é o conceito que mais depende de produção de conteúdo.

### Conceito 3 — "Painel" (produto ao vivo)

O site demonstra em vez de descrever. Componentes reais embutidos na página: um mini-painel de
pedidos que atualiza, um seletor que muda um preço e reflete num cardápio ao lado. A prova de
competência é o próprio site funcionando.

*Referências conceituais:* páginas de produto de ferramentas técnicas que deixam mexer antes
de assinar.

**Prós** — prova capacidade sem depender de autorização de cliente; diferenciação altíssima;
resolve o problema de acervo de uma vez.
**Contras** — alto custo de desenvolvimento e manutenção; risco real de virar "confuso para
provar capacidade técnica", que é justamente o que este projeto proíbe; um demo que trava num
celular fraco destrói a credibilidade que deveria construir.
**Risco de execução: alto.**

### Recomendação

**Conceito 1 como base estrutural, com o mecanismo do Conceito 2 aplicado em exatamente dois
pontos.**

"Oficina" define grid, tipografia, superfícies e registro técnico. O par antes/depois é usado
duas vezes: na seção Problema — que vira a virada clara — e dentro de cada case, como duas
linhas de texto ("antes" / "depois") ao lado da tela do sistema.

Por quê: entrega memorabilidade sem apostar o projeto inteiro num acervo que ainda não existe,
e degrada bem — se as autorizações demorarem, "Oficina" continua funcionando só com texto,
dado e ornamento. O Conceito 3 fica disponível como P2, na forma de um único componente vivo
dentro de um case, se e quando fizer sentido.

---

## 10. Inventário de assets e conteúdo

### Já existe

Logo em PNG (`public/logo-simple.png`), favicons completos, OG image, wordmark, Playfair +
Inter, paleta completa em `paletas.ts`, seis geradores de ornamento em `ornamentos.ts`,
carrosséis publicados, textos dos cases em `portfolio-react/src/data/content.ts`, dois
depoimentos registrados.

### Falta produzir

| Item | Prioridade | Depende de |
|---|---|---|
| Logo em SVG | P0 | — |
| Playfair Display 700 italic | P0 | — |
| 6–10 screenshots limpos dos sistemas | P0 | autorização |
| Autorizações escritas (nome, logo, citação) | P0 | clientes |
| Uma frase de resultado por case | P0 | você |
| Texto de "como funciona um projeto" (prazo, propriedade, contratação) | P0 | você |
| 2–4 recortes de interface | P1 | screenshots |
| OG image nova, coerente com o hero novo | P1 | hero fechado |
| Micro-demo em vídeo (8s) | P2 | acesso a sistema |
| Política de privacidade | P2 | só se captar e-mail |

---

## 11. Backlog

### P0 — o site perde valor todo dia sem isso

- Seção de prova com 2–3 cases e tela real, na posição 2.
- Marca visível no primeiro paint (logo + navbar que não nasce invisível).
- Quebrar a repetição: no mínimo três arranjos de grid distintos.
- Segunda superfície elevada + a virada clara.
- Faixa de prova/dados no hero.
- Corrigir o `\n` literal da mensagem do WhatsApp e as envs de produção.
- Foco visível e `prefers-reduced-motion`.

### P1

- Fusão `HowWeWork` + comercial do FAQ em "como funciona um projeto", com modelo de
  contratação e ordem de entrega explícitos (sem prazo).
- Diagnóstico com voltar, revisão e leitura de resultado.
- Terceiro registro tipográfico, escala fluida, medida travada.
- Dois ornamentos da marca portados.
- Contato com corpo institucional e "o que acontece depois".
- CTA fixo em mobile.
- Higiene de SEO/manifest/sitemap (§12).

### P2

- Micro-demo em vídeo.
- Um componente vivo dentro de um case.
- Página dedicada por case, com URL própria (bom para SEO e para mandar no WhatsApp).
- Captura de e-mail no diagnóstico + follow-up.

### Sequência de implementação

1. **Conteúdo e autorizações.** Nada de design começa antes de saber quais cases entram — a
   direção de arte depende de quantas telas existem.
2. **Tokens e superfícies** no `index.css`: paleta completa, escala fluida, registro técnico.
3. **Hero + prova.** As duas telas que decidem.
4. **Reordenação e fusão** das seções restantes.
5. **Diagnóstico** reformado.
6. **Contato e rodapé.**
7. **Higiene técnica e acessibilidade.**
8. **Medição** — instrumentar cliques em CTA, conclusão do wizard e envio ao WhatsApp. Sem
   isso não há como saber se o redesign funcionou.

---

## 12. Critérios de aceite

**Visuais**
- Nenhum arranjo de grid se repete em seções consecutivas.
- Existe ao menos uma superfície clara e uma escura elevada, além do fundo base.
- Nenhuma tela em desktop com mais de 40% de área vazia sem função de enquadramento.
- O roxo saturado aparece em no máximo quatro papéis definidos.
- A marca é identificável em qualquer captura isolada de uma seção da página.

**Comerciais**
- Prova visível a no máximo uma tela do topo.
- Toda afirmação de capacidade tem evidência a ≤1 tela.
- Modelo de contratação e ordem de entrega respondidos sem abrir acordeão — sem prometer prazo.
- Dois níveis de compromisso disponíveis em qualquer ponto da página.

**Responsivos**
- 360–430px sem overflow horizontal e sem elemento decorativo cortado.
- Alvos de toque ≥44px.
- ~~Altura total em desktop ≤5.500px.~~ **Critério errado, revisado em 29/07/2026.** Ele foi
  escrito contra uma página de ~1.200 palavras sem prova nenhuma, onde 7.285px eram quase todos
  vazio. Depois de entrar a seção de cases com duas imagens, a faixa de dados, o bloco de
  contratação e um rodapé de verdade, a página tem 8.358px — e a medição por seção mostra
  distribuição sadia (hero 1 tela, cases 1,9, e nada mais passando de 1,3). Altura absoluta
  media a coisa errada. O critério correto é **nenhuma tela com mais de 40% de área vazia sem
  função de enquadramento**, que já está logo acima e é o que de fato importa.
- Linha de leitura entre 62 e 68 caracteres.

**Acessibilidade**
- Contraste ≥4.5:1 no corpo, ≥3:1 em texto grande.
- Foco visível em todo elemento interativo.
- FAQ e wizard operáveis por teclado com estado anunciado.
- `prefers-reduced-motion` desliga toda transição de entrada e o scroll suave.

**Performance**
- LCP < 2,0s em 4G simulado; CLS < 0,05.
- Fontes auto-hospedadas com `font-display: swap` e preload do que compõe o LCP. Hoje o
  `@import` do Google Fonts está **dentro** do `index.css`, o que encadeia dois round-trips
  bloqueantes antes do primeiro texto — e o `preconnect` do `index.html` aponta só para
  `fonts.gstatic.com`, não para `fonts.googleapis.com`.
- Imagens em AVIF/WebP com `width`/`height` declarados.
- JS total < 180KB gzip.

---

## 13. Decisões tomadas (29/07/2026)

As oito perguntas da §13 original foram respondidas. Registro aqui porque elas mudam
materialmente a proposta acima — em especial a estratégia de prova.

| Decisão | Resposta | Consequência |
|---|---|---|
| Cases com nome | Catálogo imobiliário + VamoAgendar | Sushi do Verão e KyteApp saem: o primeiro **ficou em demo, não foi para produção**; o segundo é worker sem interface para mostrar. Os dois viram estatística agregada, não case. |
| Depoimentos | Indisponíveis | Os dois depoimentos registrados pertencem justamente aos cases não autorizados. **O site não terá prova social.** A prova passa a ser link vivo navegável, que é verificável em vez de acreditável. |
| Voz | Marca institucional + responsável identificado, **sem foto** | Bloco de "quem responde" com nome e função. "Quem responde é quem desenvolve" já faz metade disso. |
| Público | PME em geral | Coerente com os cases liberados: corretor autônomo e SaaS de agendamento não são comércio local. Nichar em restaurante/loja deixaria a prova órfã da promessa. |
| Preço | Sem valor público | Explicar o modelo (por projeto, escopo fechado, software é do cliente) sem número. |
| Ousadia | Superfície clara + destaque itálico | Ambos aprovados. |
| Rotas | Página única | Stack mantida; cases estruturados como dado para permitir rotas depois sem retrabalho. |
| Higiene | Junto com o redesign | Corrigido nesta passada. |

### Números da faixa de prova — pendentes

Os quatro foram aprovados como formato, mas **os valores ainda não existem**. Nada entra no
site antes de o Marcilio confirmar, porque número inventado é o tipo de erro que não tem
conserto depois: tempo de atuação (ano inicial), sistemas em produção com usuário ativo hoje,
setores atendidos, e usuários no maior sistema.

### O que já foi implementado nesta sessão

**Sistema visual.** `src/index.css` reescrito: três superfícies (o par `#070611`/`#0D0B1D` era
imperceptível), escala fluida, registro técnico (`.tec`), realce itálico (`.realce`), medida
travada, `prefers-reduced-motion`, `:focus-visible`. Cores vindas de `paletas.ts`. Os tokens
antigos entraram como ponte e saíram quando o último componente migrou — nenhum resta.

**Estrutura.** Prova subiu para a posição 2 (`Prova.tsx`, nova). `Solutions` veio antes de
`HowWeWork`. Cada seção usa um arranjo distinto: hero em coluna única, cases em 5/7 alternado,
problema em largura plena sobre superfície clara, soluções em linhas numeradas, processo em
quatro colunas com régua, diagnóstico em 4/8, dúvidas em coluna estreita, contato em 7/5.

**Marca.** `logo-avantis.svg` (vetor, `viewBox` apertado para ler em 22px) na navbar e no
rodapé. A navbar não nasce mais invisível. Quatro links em vez de dois.

**Prova.** `data/cases.ts` e `data/dados.ts`. Três cases com tela real, par antes/depois, stack
no registro técnico e link que abre — catálogo imobiliário, Milion Style e VamoAgendar, os três
verificados respondendo 200 em 29/07/2026. Faixa de dados cobrindo o trabalho que não pode
virar case (worker de rede de lojas e sistema de restaurante entram só como setor).

A Milion Style entrou por decisão do Marcilio, com um risco registrado aqui porque ele é dele e
não meu: o logo da loja usa a silhueta do cavalo da Ralph Lauren e os produtos são anunciados
como "Ralph Lauren", "Lacoste" e "Diesel" a R$80–120, com etiquetas dessas marcas visíveis nas
fotos. Destacar isso como case em `avantis.dev` deixa de ser associação passiva (o rodapé da
loja já credita o desenvolvedor) e passa a anunciar que a Avantis constrói vitrine usando marca
de terceiro — para um público que compra confiança. Ele foi avisado e optou por incluir completa.

**Quem faz.** `Quem.tsx`, entre o processo e o diagnóstico. Curta de propósito: nome, o que a
marca é, o que isso muda para quem contrata, e link para o portfólio pessoal
(`marciliortiz.dev.br`) em vez de repetir trajetória. Sem foto, por decisão dele. O bloco
duplicado que existia dentro do Contato foi reduzido à linha que reduz risco na hora de enviar
a mensagem.

**Conversão.** `data/contato.ts` centraliza os canais: fallback inventado deu lugar a link
omitido + erro no console em dev. Bug do `\n` no resumo do WhatsApp corrigido e verificado
percorrendo o wizard num navegador real. Diagnóstico ganhou botão voltar, progresso visível no
mobile, revisão das respostas antes do envio e `role="progressbar"`. Contato ganhou "o que
acontece depois" e o bloco "quem responde". Rodapé virou rodapé.

**Acessibilidade.** `focus:outline-none` sem substituto removido dos dois lugares onde estava.
FAQ com `aria-expanded`/`aria-controls`, `inert` no painel fechado e altura animada por grid em
vez de `max-h-96`, que cortava resposta longa.

**Higiene.** Fontes fora do `@import` do CSS (o round-trip em série) e com a variante itálica;
`theme-color`, manifest e `sitemap.xml` corrigidos; `twitter:site` não verificado e e-mail
pessoal do JSON-LD removidos; Instagram no `sameAs`.

**Copy.** Preservada. Duas exceções, ambas levadas ao Marcilio: a resposta sobre preço foi
reescrita sem a comparação de custo que eu havia introduzido (era promessa de resultado, contra
o veto de 28/07), e a pergunta sobre dependência foi restaurada na redação original dele.

Verificado: `tsc -b` limpo, `vite build` ok, 110,73 kB gzip de JS e 6,3 kB de CSS, zero erro de
console, zero overflow horizontal em 390px, botão voltar do wizard testado em navegador.

### Nota de procedência

A descoberta original (§1 a §12) foi feita sobre a árvore **anterior** ao commit `c5c8afe`.
As críticas de copy daquele diagnóstico estão em boa parte desatualizadas: o commit já removeu
as três promessas de prazo/resultado, reescreveu o hero, a hierarquia de oferta e a tela final
do diagnóstico. O diagnóstico **estrutural** (layout repetido, ausência de prova, superfície
única, marca invisível, ritmo) não foi afetado, porque o commit mexeu em strings e não em
grid. As passagens obsoletas foram corrigidas inline.

## 14. Decisões que ainda dependem de você

1. **Confirmar dois números da faixa** (implementada em `src/data/dados.ts` com valores tirados
   do portfólio, mas dois deles têm ressalva):
   - **"Desde 2025"** — o portfólio se contradiz. `about.text` diz "atuo como freelancer há mais
     de um ano" (num texto de 2026, logo ~2025), mas o `archive` datou o site da Avantis em
     **2023**. Usei a data conservadora. Se a marca é de 2023, a faixa está subvendendo dois
     anos de trabalho.
   - **"3 sistemas em produção"** — verifiquei dois no ar (catálogo imobiliário e VamoAgendar).
     O terceiro é o SISCO, que eu não tenho como abrir. Se ele saiu do ar, o número é 2.

   **Ficaram de fora, de propósito:** `+30 projetos`, `+10 clientes`, `+500 commits`,
   `+1000 horas lendo documentação`, `+20k linhas`, `+5 tecnologias`. Os três últimos são
   métricas de desenvolvedor e não dizem nada a um dono de PME. Os dois primeiros mudam de
   significado ao sair do portfólio: "+30 projetos — aplicações web e desafios práticos" num
   site pessoal é honesto; num site comercial "30 projetos" é lido como 30 clientes. E "+10
   clientes" não sobrevive à pergunta "quais?", porque só dois podem ser mostrados — o que abre
   justamente a distância entre afirmação e evidência que esta seção existe para fechar.

2. ~~**E-mail corporativo.**~~ Resolvido em 29/07/2026: não existe. O `contactPoint` fica fora do
   JSON-LD — é campo opcional, e um Gmail pessoal em dado estruturado de `Organization` não
   agrega nada. O link de e-mail na página continua funcionando pela env.
3. **Envs de produção.** `VITE_WHATSAPP_NUMBER` e `VITE_CONTACT_EMAIL` caem para
   `5567999999999` e `contato@empresa.com` se não estiverem definidas. Confirmar que estão no
   build de produção — ou eu troco o fallback silencioso por falha visível.
4. **Hospedagem do case imobiliário.** `marciliobarbosacorretor.com.br` respondeu 200 em 2 de 3
   requisições via curl e falhou 4 de 6 no Chrome (`ERR_ADDRESS_UNREACHABLE`, IP
   69.46.46.107). Se ele vira prova principal, um link que cai no clique do comprador destrói
   exatamente a confiança que deveria construir. Vale investigar antes de destacar.
5. **Sushi do Verão no portfólio pessoal.** O `content.ts` do `portfolio-react`, que está no
   ar, descreve o projeto como entregue e em operação, com depoimento atribuído ao
   proprietário — mas ele ficou em demo. É uma afirmação pública que você não sustentaria numa
   conversa. Fora do escopo deste projeto, mas vale corrigir lá.

**Já decidido por mim, reversível:** terceiro registro tipográfico feito com Inter caixa alta e
`tabular-nums`, sem carregar uma fonte mono — a página já traz duas famílias e LCP é critério
de aceite. O VamoAgendar usa mono e funciona bem; se você preferir esse caminho, a troca é
barata.

---

## 15. Achados secundários

Incoerências encontradas na descoberta. Não são o projeto, mas algumas são comercialmente
caras e vale corrigir junto.

**Quebra funcional real**
- `Diagnostic.tsx:48,51` — a mensagem do WhatsApp usa `\\n` em string comum e template
  literal, o que produz **`\n` literal no texto**. O cliente recebe o resumo do diagnóstico com
  barras invertidas visíveis no lugar das quebras de linha. É o artefato de conversão mais
  importante do site.
- Fallbacks de env: `5567999999999` e `contato@empresa.com`. Se `VITE_WHATSAPP_NUMBER` ou
  `VITE_CONTACT_EMAIL` faltarem no build, os dois CTAs principais apontam para lugar nenhum,
  silenciosamente. Merece falhar ruidosamente.

**SEO e metadados** — ✅ corrigidos em 29/07/2026
- ~~`sitemap.xml` listava `#sobre`, `#especialidades`, `#projetos`, `#resultados`,
  `#experiencia`; nenhuma existe (âncoras do portfólio pessoal).~~
- ~~`site.webmanifest` com `theme_color: #6366f1` e `background_color: #111827`, e
  `<meta name="theme-color">` em `#0f172a` — três valores para a mesma coisa, nenhum da
  marca.~~ Também removido `purpose: "any maskable"`: o ícone é circular e o recorte
  maskable o cortaria.
- ~~JSON-LD com `marciliortizz@gmail.com` como contato institucional.~~ O `contactPoint` saiu
  inteiro; volta quando houver e-mail corporativo (§14.2).
- ~~`twitter:site`/`twitter:creator` apontando `@avantisstudio`, não verificado.~~ Removidos;
  `instagram.com/avantis.dev` entrou no `sameAs`.
- ~~`manifest.categories` com `"portfolio"` e `"developer"`.~~

**Identidade e navegação**
- `logo-simple.png` existe em `public/`, é citado no JSON-LD e nunca renderizado.
- `HowWeWork` e `Faq` não têm `id` — não são linkáveis, e a navbar só oferece dois destinos.
- `--color-avantis-blue` e `--color-avantis-pink` declarados no `index.css` e nunca usados.

**Projeto**
- `package.json` com `"name": "portfolio-novo"`.
- README instrui `npm install` / `npm run dev`; coexistem `package-lock.json` e `yarn.lock`
  num ambiente cuja regra é pnpm.
- O README descreve o resultado atual como se ele já entregasse a experiência pretendida
  ("elevando a experiência do usuário", "animações fluidas"). Vale reescrever depois do
  redesign, quando a descrição voltar a ser verdadeira.

**Acessibilidade** (detalhado em §8)
- `focus:outline-none` sem substituto no wizard e no FAQ.
- FAQ sem `aria-expanded`; `max-h-96` pode clipar resposta longa.
- Nenhum tratamento de `prefers-reduced-motion`.
