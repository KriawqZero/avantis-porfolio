/**
 * Ornamentos de fundo — a camada gráfica que muda de seção para seção.
 *
 * Cópia fiel de `avantis-render/ornamentos.ts`. Seis famílias de textura, cada
 * uma função pura da seed: o tipo é sorteado e a geometria dentro dele também.
 * No render dos carrosséis isso existe para que o feed não vire um bloco
 * repetido; aqui serve ao mesmo propósito entre seções da página.
 *
 * A regra herdada é a mais importante: nenhum ornamento pode competir com o
 * texto. Opacidade baixa, traço fino, tudo ancorado longe do centro óptico. Se
 * um ornamento chamar mais atenção que a manchete, ele está errado.
 *
 * Devolve primitivas serializáveis (sem JSX) — `Ornamento.tsx` converte em SVG.
 */

import type { Sorteio } from './aleatorio'

export type Primitiva =
  | { tipo: 'path'; d: string; cor: string; espessura: number; preenche?: boolean; opacidade?: number }
  | { tipo: 'circulo'; cx: number; cy: number; r: number; cor: string; espessura?: number; opacidade?: number }
  | { tipo: 'linha'; x1: number; y1: number; x2: number; y2: number; cor: string; espessura: number; opacidade?: number }

export type Ornamento = {
  nome: string
  /** desenhado no canvas inteiro, atrás do texto */
  primitivas: Primitiva[]
  opacidade: number
}

export const TIPOS_ORNAMENTO = ['onda', 'topografia', 'grade', 'arcos', 'malha', 'orbita'] as const
export type TipoOrnamento = (typeof TIPOS_ORNAMENTO)[number]

const rgba = (brilho: string, alfa: number) => `rgba(${brilho}, ${alfa.toFixed(3)})`

/** Curva suave horizontal com N cristas, altura e fase sorteadas. */
function curva(s: Sorteio, largura: number, yBase: number, amplitude: number, cristas: number): string {
  const passo = largura / cristas
  let d = `M0 ${yBase.toFixed(1)}`
  let y = yBase
  for (let i = 0; i < cristas; i++) {
    const x0 = i * passo
    const x1 = x0 + passo
    const proximoY = yBase + s.entre(-amplitude, amplitude)
    const c1 = x0 + passo * s.entre(0.25, 0.45)
    const c2 = x0 + passo * s.entre(0.55, 0.75)
    d += ` C ${c1.toFixed(1)} ${y.toFixed(1)}, ${c2.toFixed(1)} ${proximoY.toFixed(1)}, ${x1.toFixed(1)} ${proximoY.toFixed(1)}`
    y = proximoY
  }
  return d
}

/** Ondas na base — a assinatura histórica da marca, agora com geometria variável. */
function onda(s: Sorteio, largura: number, altura: number, brilho: string): Primitiva[] {
  const quantidade = s.inteiro(2, 4)
  const base = altura * s.entre(0.78, 0.9)
  const primitivas: Primitiva[] = []
  for (let i = 0; i < quantidade; i++) {
    primitivas.push({
      tipo: 'path',
      d: curva(s, largura, base + i * s.entre(38, 64), s.entre(28, 62), s.inteiro(2, 4)),
      cor: rgba(brilho, 0.22 - i * 0.05),
      espessura: i === 0 ? 1.6 : 1,
    })
  }
  return primitivas
}

/** Curvas de nível empilhadas, tipo mapa topográfico — ocupa um canto inteiro. */
function topografia(s: Sorteio, largura: number, altura: number, brilho: string): Primitiva[] {
  const linhas = s.inteiro(7, 12)
  const doTopo = s.chance(0.5)
  const inicio = doTopo ? altura * s.entre(-0.05, 0.08) : altura * s.entre(0.62, 0.78)
  const espaco = s.entre(26, 44)
  return Array.from({ length: linhas }, (_, i) => ({
    tipo: 'path' as const,
    d: curva(s, largura, inicio + i * espaco, s.entre(16, 34), s.inteiro(2, 3)),
    cor: rgba(brilho, 0.2 - i * 0.014),
    espessura: 1,
  }))
}

/** Grade de pontos que esmaece na diagonal — textura discreta, muito legível. */
function grade(s: Sorteio, largura: number, altura: number, brilho: string): Primitiva[] {
  const passo = s.entre(46, 68)
  const raio = s.entre(1.6, 2.6)
  const cantoX = s.chance(0.5) ? 0 : largura
  const cantoY = s.chance(0.5) ? 0 : altura
  const primitivas: Primitiva[] = []
  for (let x = passo / 2; x < largura; x += passo) {
    for (let y = passo / 2; y < altura; y += passo) {
      const dist = Math.hypot(x - cantoX, y - cantoY) / Math.hypot(largura, altura)
      const alfa = 0.3 * Math.max(0, 1 - dist * 1.5)
      if (alfa < 0.02) continue
      primitivas.push({ tipo: 'circulo', cx: x, cy: y, r: raio, cor: rgba(brilho, alfa) })
    }
  }
  return primitivas
}

/** Arcos concêntricos gigantes saindo de um canto — dá escala e movimento. */
function arcos(s: Sorteio, largura: number, altura: number, brilho: string): Primitiva[] {
  const cx = s.chance(0.5) ? largura * s.entre(-0.1, 0.12) : largura * s.entre(0.88, 1.1)
  const cy = s.chance(0.5) ? altura * s.entre(-0.08, 0.1) : altura * s.entre(0.9, 1.08)
  const quantidade = s.inteiro(5, 9)
  const passo = s.entre(105, 165)
  const raioInicial = s.entre(180, 320)
  return Array.from({ length: quantidade }, (_, i) => ({
    tipo: 'circulo' as const,
    cx,
    cy,
    r: raioInicial + i * passo,
    cor: rgba(brilho, 0.17 - i * 0.016),
    espessura: 1.2,
  }))
}

/** Malha de linhas paralelas inclinadas — a mais gráfica das texturas. */
function malha(s: Sorteio, largura: number, altura: number, brilho: string): Primitiva[] {
  const passo = s.entre(52, 86)
  const inclinacao = s.entre(0.35, 1.1) * (s.chance(0.5) ? 1 : -1)
  const primitivas: Primitiva[] = []
  const alcance = largura + Math.abs(inclinacao) * altura
  for (let i = -alcance; i < alcance; i += passo) {
    const x1 = i
    const x2 = i + inclinacao * altura
    const t = (i + alcance) / (2 * alcance)
    const alfa = 0.16 * Math.sin(t * Math.PI)
    if (alfa < 0.015) continue
    primitivas.push({ tipo: 'linha', x1, y1: 0, x2, y2: altura, cor: rgba(brilho, alfa), espessura: 1 })
  }
  return primitivas
}

/** Elipses orbitais sobrepostas — a mais "espacial", boa para capa. */
function orbita(s: Sorteio, largura: number, altura: number, brilho: string): Primitiva[] {
  const quantidade = s.inteiro(3, 5)
  return Array.from({ length: quantidade }, (_, i) => {
    const cx = largura * s.entre(0.2, 0.85)
    const cy = altura * s.entre(0.15, 0.85)
    return {
      tipo: 'circulo' as const,
      cx,
      cy,
      r: s.entre(220, 520),
      cor: rgba(brilho, 0.14 - i * 0.02),
      espessura: s.entre(1, 1.8),
    }
  })
}

const GERADORES: Record<TipoOrnamento, (s: Sorteio, l: number, a: number, b: string) => Primitiva[]> = {
  onda,
  topografia,
  grade,
  arcos,
  malha,
  orbita,
}

export function geraOrnamento(
  tipo: TipoOrnamento,
  s: Sorteio,
  largura: number,
  altura: number,
  brilho: string,
): Ornamento {
  return {
    nome: tipo,
    primitivas: GERADORES[tipo](s, largura, altura, brilho),
    opacidade: s.entre(0.55, 0.95),
  }
}
