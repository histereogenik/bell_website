const BELL_WHATSAPP_NUMBER = "5511987884722";

export const whatsappLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

export function createBellWhatsAppHref(message: string) {
  return `https://wa.me/${BELL_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
