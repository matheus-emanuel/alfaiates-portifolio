"use client";

import type { MouseEvent, ReactNode } from "react";
import styles from "./MouseGlow.module.css";

/**
 * O JavaScript só escreve a posição do mouse em duas variáveis; o brilho em
 * si é um gradiente do CSS lendo `--mx`/`--my`. Não mexe no card por dentro
 * (`pointer-events: none` no brilho), então hover, foco e clique continuam
 * do jeito que já eram.
 */
export function MouseGlow({ children }: { children: ReactNode }) {
  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div className={styles.wrap} onMouseMove={onMouseMove}>
      {children}
    </div>
  );
}
