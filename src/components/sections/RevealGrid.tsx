"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./RevealGrid.module.css";

/**
 * "Faixas que se montam": contínuo, preso à rolagem da página — não uma
 * entrada única. Rolando pra baixo, cada item se acomoda em ordem, com um
 * atraso por índice; rolando de volta pra cima, desfaz na mesma proporção.
 * `p` é o progresso do grid inteiro atravessando a tela (0 quando ele
 * entra por baixo, 1 quando termina de sair por cima); cada item lê uma
 * fatia atrasada desse mesmo `p`, então nenhum tem o próprio scroll listener.
 */
export function RevealGrid({ children, className }: { children: ReactNode[]; className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ticking = false;

    const apply = () => {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const r = wrap.getBoundingClientRect();
      const alt = window.innerHeight || 800;
      const p = Math.min(1, Math.max(0, (alt - r.top) / (alt + r.height)));

      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const atraso = i * 0.12;
        const f = Math.min(1, Math.max(0, (p - atraso) / (1 - atraso)));
        const suave = 1 - Math.pow(1 - f, 3);
        const sentido = i % 2 ? 1 : -1;
        el.style.transform = `translateY(${sentido * (1 - suave) * 24}px)`;
        el.style.opacity = String(0.25 + suave * 0.75);
      });
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [children]);

  return (
    <div ref={wrapRef} className={className}>
      {children.map((child, i) => (
        <div
          key={i}
          ref={(el) => {
            itemRefs.current[i] = el;
          }}
          className={styles.item}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
