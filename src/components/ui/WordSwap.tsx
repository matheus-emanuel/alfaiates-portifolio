"use client";

import { useEffect, useState } from "react";
import styles from "./WordSwap.module.css";

export interface WordSwapProps {
  words: readonly string[];
  /** Tempo parado em cada palavra, antes de trocar para a próxima. */
  interval?: number;
}

/**
 * Palavra em destaque dentro de um badge, alternando com um fade + 2px de
 * translação (mesmo vocabulário de movimento do resto do sistema). Sem
 * fundo escuro, sem textura: é o mesmo highlight usado no resto da página,
 * só que trocando de palavra.
 */
export function WordSwap({ words, interval = 2600 }: WordSwapProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [words, interval]);

  return (
    <span className={styles.box}>
      <span key={words[index]} className={styles.word}>
        {words[index]}
      </span>
    </span>
  );
}
