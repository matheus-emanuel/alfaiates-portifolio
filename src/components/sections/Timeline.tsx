"use client";

import { useEffect, useRef, useState } from "react";
import { StepNumber } from "@/components/ui/StepNumber";
import { comoFunciona } from "@/content/site";
import styles from "./Timeline.module.css";

const TOTAL = comoFunciona.passos.length;

/** Progresso de 0 a 1: começa quando o TOPO do bloco cruza uma linha de
 * leitura a 65% da tela, termina quando a BASE do bloco cruza uma segunda
 * linha a 30% — ainda claramente visível, na metade de cima da tela, bem
 * longe de sumir. As duas linhas são pontos fixos da tela (não uma fração
 * da altura do bloco): a base só coincidir com "quase saindo" foi o que
 * fazia o traço terminar de desenhar tarde demais pra notar. */
function progressoDeLeitura(el: HTMLElement) {
  const r = el.getBoundingClientRect();
  const vh = window.innerHeight || 800;
  const linha = vh * 0.65;
  const saida = vh * 0.3;
  const faixa = linha - saida + r.height;
  return Math.min(1, Math.max(0, (linha - r.top) / faixa));
}

export function Timeline() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const [lit, setLit] = useState(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    let ticking = false;
    let last = -1;

    const apply = () => {
      const p = progressoDeLeitura(el);
      fillRef.current?.style.setProperty("transform", `scaleX(${p})`);
      const passos = Math.min(TOTAL, Math.floor(p * TOTAL + 0.5));
      if (passos !== last) {
        last = passos;
        setLit(passos);
      }
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
  }, []);

  return (
    <div ref={wrapRef} className={styles.timeline}>
      <div className={styles.track}>
        <div ref={fillRef} className={styles.fill} />
      </div>
      <div className="grid-4">
        {comoFunciona.passos.map((p, i) => (
          <StepNumber key={p.titulo} n={i + 1} title={p.titulo} description={p.descricao} lit={i < lit} />
        ))}
      </div>
    </div>
  );
}
