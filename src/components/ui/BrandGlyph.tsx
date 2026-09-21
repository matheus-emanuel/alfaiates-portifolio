import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";

/**
 * Marcas de terceiros. O design system abre exceção para elas ("glifo de marca
 * de terceiro"), e é a única exceção: todo ícone de interface vem do `Icon`.
 *
 * WhatsApp é o glifo que já vinha desenhado no sistema (verde só no ícone,
 * conforme o guia). Os outros três vêm do Phosphor, porque o Lucide retirou os
 * ícones de marca do pacote.
 */

export interface GlyphProps {
  size?: number;
  className?: string;
}

export function WhatsAppGlyph({ size = 20, className }: GlyphProps) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24"
      fill="var(--verde-whatsapp)" className={className}
      aria-hidden="true" focusable="false" style={{ flex: "none" }}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.06c-.24.68-1.42 1.3-1.95 1.35-.53.05-1.03.24-3.47-.72-2.95-1.16-4.79-4.2-4.93-4.39-.14-.19-1.16-1.55-1.16-2.95 0-1.4.73-2.09.99-2.38.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.17.01.42-.07.65.5.24.58.8 1.98.87 2.12.07.15.12.32.02.51-.1.19-.17.31-.34.48-.17.17-.36.38-.5.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.35 1.46.29.14.46.12.63-.07.17-.19.73-.85.92-1.14.19-.29.39-.24.65-.15.26.1 1.66.79 1.95.93.29.15.48.22.55.34.07.12.07.7-.17 1.38Z" />
    </svg>
  );
}

export function LinkedInGlyph({ size = 18, className }: GlyphProps) {
  return <LinkedinLogo size={size} weight="fill" className={className} aria-hidden focusable="false" />;
}

export function GitHubGlyph({ size = 18, className }: GlyphProps) {
  return <GithubLogo size={size} weight="fill" className={className} aria-hidden focusable="false" />;
}

export function InstagramGlyph({ size = 18, className }: GlyphProps) {
  return <InstagramLogo size={size} className={className} aria-hidden focusable="false" />;
}
