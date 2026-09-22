"use client";

import { useEffect, useRef } from "react";
import styles from "./WordSwap.module.css";

export interface WordSwapProps {
  words: readonly string[];
  /** Tempo parado em cada palavra, antes de trocar para a próxima. */
  interval?: number;
}

/**
 * Fita vertical dentro de uma janela de uma linha: a palavra desliza pra
 * cima até a próxima. A lista tem uma cópia da primeira palavra no fim —
 * ao chegar nela, a fita volta ao início sem transição, e como a cópia é
 * idêntica ao original, o corte não aparece.
 */
export function WordSwap({ words, interval = 1800 }: WordSwapProps) {
  const janelaRef = useRef<HTMLSpanElement>(null);
  const fitaRef = useRef<HTMLSpanElement>(null);
  const primeiraRef = useRef<HTMLSpanElement>(null);
  const seq = words.length > 1 ? [...words, words[0]] : words;

  useEffect(() => {
    const item = primeiraRef.current;
    const janela = janelaRef.current;
    if (item && janela) janela.style.height = `${item.offsetHeight}px`;
  }, [words]);

  useEffect(() => {
    const fita = fitaRef.current;
    if (!fita || words.length < 2) return;
    const itens = seq.length;
    let i = 0;

    const trocar = () => {
      i++;
      fita.style.transition = "transform 500ms cubic-bezier(0.16, 1, 0.3, 1)";
      fita.style.transform = `translateY(${(-i * 100) / itens}%)`;
      if (i === itens - 1) {
        window.setTimeout(() => {
          fita.style.transition = "none";
          fita.style.transform = "translateY(0)";
          i = 0;
        }, 520);
      }
    };

    const id = window.setInterval(trocar, interval);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words, interval]);

  return (
    <>
      <span ref={janelaRef} className={styles.janela} aria-hidden="true">
        <span ref={fitaRef} className={styles.fita}>
          {seq.map((w, idx) => (
            <span key={idx} className={styles.item} ref={idx === 0 ? primeiraRef : undefined}>
              {w}
            </span>
          ))}
        </span>
      </span>
      <span className={styles.srOnly}>{words.join(", ")}</span>
    </>
  );
}
