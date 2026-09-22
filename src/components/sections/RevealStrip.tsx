"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./RevealStrip.module.css";

/**
 * Entra uma vez (nunca "desaparece de novo" ao rolar pra cima — conteúdo
 * real não deveria sumir). Direção alterna par/ímpar, atraso escalonado
 * pelo índice. Sem IntersectionObserver disponível, mostra direto.
 */
export function RevealStrip({ index, children }: { index: number; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const par = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`${styles.strip} ${shown ? styles.shown : par ? styles.fromBottom : styles.fromTop}`}
      style={{ transitionDelay: `${Math.min(index, 5) * 70}ms` }}
    >
      {children}
    </div>
  );
}
