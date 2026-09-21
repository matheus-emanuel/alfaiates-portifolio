import type { ReactNode } from "react";
import styles from "./Card.module.css";

export interface CardProps {
  children?: ReactNode;
  /** Eleva no hover e no foco. Só quando o card inteiro é clicável. */
  interactive?: boolean;
  /** Remove o padding, para cards que embrulham uma tabela ou imagem. */
  flush?: boolean;
  /** Respiro maior, para o card que carrega um bloco de texto. */
  roomy?: boolean;
  radius?: "card" | "lg";
  className?: string;
  id?: string;
}

export function Card({ children, interactive = false, flush = false, roomy = false, radius = "card", className, id }: CardProps) {
  const classes = [
    styles.card,
    interactive ? styles.interactive : "",
    flush ? styles.flush : "",
    roomy ? styles.roomy : "",
    radius === "lg" ? styles.radiusLg : "",
    className ?? ""
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div id={id} className={classes}>
      {children}
    </div>
  );
}
