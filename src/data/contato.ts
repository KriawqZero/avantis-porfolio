/**
 * Canais de contato.
 *
 * Antes cada componente lia a env por conta própria e caía num fallback
 * inventado (`5567999999999`, `contato@empresa.com`). Se a variável faltasse no
 * build de produção, os dois CTAs principais apontavam para um número que não
 * existe — e ninguém ficava sabendo, porque o site continuava parecendo certo.
 *
 * Aqui a ausência é barulhenta em desenvolvimento e o link é omitido em vez de
 * apontar para lugar nenhum. Falta de contato é um problema visível; contato
 * errado é um problema invisível, que é pior.
 */

function obrigatoria(nome: string, valor: string | undefined): string | null {
  if (valor && valor.trim()) return valor.trim()
  if (import.meta.env.DEV) {
    console.error(
      `[avantis] ${nome} não está definida. O CTA correspondente não vai renderizar. ` +
        `Defina no .env antes de publicar.`,
    )
  }
  return null
}

export const WHATSAPP = obrigatoria('VITE_WHATSAPP_NUMBER', import.meta.env.VITE_WHATSAPP_NUMBER)
export const EMAIL = obrigatoria('VITE_CONTACT_EMAIL', import.meta.env.VITE_CONTACT_EMAIL)

export const linkWhatsApp = (mensagem?: string): string | null =>
  WHATSAPP
    ? `https://wa.me/${WHATSAPP}${mensagem ? `?text=${encodeURIComponent(mensagem)}` : ''}`
    : null
