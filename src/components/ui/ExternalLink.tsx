import type { ReactNode } from "react";
import styles from "./ExternalLink.module.css";

export interface ExternalLinkProps {
  href?: string;
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
}

/**
 * Link externo que não mente: sem URL real (ver `content/site.ts`), o rótulo é
 * renderizado como texto inerte em vez de uma âncora que não leva a lugar
 * nenhum. Trocar por uma URL de verdade faz o link voltar sozinho.
 */
export function ExternalLink({ href, children, className, ...rest }: ExternalLinkProps) {
  if (!href) {
    return (
      <span className={`${styles.link} ${styles.pendente} ${className ?? ""}`} title="URL pendente">
        {children}
      </span>
    );
  }
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`${styles.link} ${className ?? ""}`} {...rest}>
      {children}
    </a>
  );
}
