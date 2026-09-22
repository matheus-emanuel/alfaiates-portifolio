"use client";

import { useEffect, useRef, useState } from "react";
import { StepNumber } from "@/components/ui/StepNumber";
import { comoFunciona } from "@/content/site";
import styles from "./Timeline.module.css";

const TOTAL = comoFunciona.passos.length;

/** Distância de rolagem em que a linha se desenha por completo. Fixa, e não
 * a altura do bloco: os quatro passos juntos medem só ~200px, e usar a
 * própria altura fazia o traço pular de 0 a 100% numa rolagem de nada. */
const FAIXA = 480;

/** Progresso de 0 a 1 conforme o topo do bloco atravessa uma linha de leitura
 * fixa (65% da tela) ao longo de `FAIXA` pixels de rolagem. */
function progressoDeLeitura(el: HTMLElement) {
  const r = el.getBoundingClientRect();
  const linha = (window.innerHeight || 800) * 0.65;
  return Math.min(1, Math.max(0, (linha - r.top) / FAIXA));
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
