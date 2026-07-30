/**
 * Aleatoriedade determinística — a base da variação visual.
 *
 * Cópia fiel de `avantis-render/aleatorio.ts`, o gerador que produz a arte dos
 * carrosséis da Avantis. Está aqui para que o site seja texturizado pelo mesmo
 * sistema que a marca já usa no Instagram, em vez de por imagem de banco.
 *
 * Regra do sistema: a mesma seed produz SEMPRE a mesma arte. Aqui a seed sai do
 * nome da seção, então a textura de "cases" é sempre a mesma textura de "cases"
 * — o site não muda de cara a cada visita, e um screenshot continua válido
 * amanhã. `Math.random()` não aparece em lugar nenhum, de propósito.
 *
 * Se este arquivo divergir do original em `avantis-render`, o original manda.
 */

/** FNV-1a de 32 bits — hash estável de string, sem dependência externa. */
export function hashTexto(texto: string): number {
  let h = 0x811c9dc5
  for (let i = 0; i < texto.length; i++) {
    h ^= texto.charCodeAt(i)
    h = Math.imul(h, 0x01000193)
  }
  return h >>> 0
}

/** Gerador pseudoaleatório mulberry32: sequência estável a partir de uma seed. */
export type Sorteio = {
  /** próximo float em [0, 1) */
  fracao(): number
  /** float em [min, max) */
  entre(min: number, max: number): number
  /** inteiro em [min, max] */
  inteiro(min: number, max: number): number
  /** um item do array */
  escolhe<T>(itens: readonly T[]): T
  /** um item do array, com peso relativo por item (peso maior = mais provável) */
  escolhePonderado<T>(itens: readonly T[], peso: (item: T) => number): T
  /** true com a probabilidade dada */
  chance(probabilidade: number): boolean
}

export function sorteio(seed: number): Sorteio {
  let estado = seed >>> 0
  const fracao = () => {
    estado = (estado + 0x6d2b79f5) >>> 0
    let t = estado
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
  const entre = (min: number, max: number) => min + fracao() * (max - min)
  return {
    fracao,
    entre,
    inteiro: (min, max) => Math.floor(entre(min, max + 1)),
    escolhe: itens => itens[Math.floor(fracao() * itens.length)],
    escolhePonderado: (itens, peso) => {
      const total = itens.reduce((soma, item) => soma + Math.max(0, peso(item)), 0)
      if (total <= 0) return itens[Math.floor(fracao() * itens.length)]
      let alvo = fracao() * total
      for (const item of itens) {
        alvo -= Math.max(0, peso(item))
        if (alvo < 0) return item
      }
      return itens[itens.length - 1]
    },
    chance: probabilidade => fracao() < probabilidade,
  }
}

/** Deriva a seed de um post a partir do slug/tema. */
export function seedDoPost(identificador: string): number {
  return hashTexto(identificador.trim().toLowerCase())
}
