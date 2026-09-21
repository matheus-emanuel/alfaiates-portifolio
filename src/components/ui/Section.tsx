import type { ReactNode } from "react";
import styles from "./Section.module.css";

export type SectionTone = "papel" | "alternado" | "escuro";

export interface SectionProps {
  tone?: SectionTone;
  children?: ReactNode;
  id?: string;
  /** Rotula a seção para leitores de tela quando ela não abre com um H2. */
  ariaLabel?: string;
}

export function Section({ tone = "papel", children, id, ariaLabel }: SectionProps) {
  return (
    <section id={id} aria-label={ariaLabel} className={`${styles.section} ${styles[tone]}`}>
      <div className={styles.container}>{children}</div>
    </section>
  );
}
