"use client";

import { useEffect, useRef } from "react";
import styles from "./WordSwap.module.css";

export interface WordSwapProps {
  words: readonly string[];
  /** Tempo parado em cada palavra, antes de trocar para a próxima. */
  interval?: number;
}

/**
 * Fita vertical dentro de uma janela de uma linha: a palavra desliza até a
 * próxima. Ping-pong, não roleta: sobe palavra a palavra até a última, aí
 * volta descendo até a primeira, e repete — sem duplicar item nenhum nem
 * precisar de um reset instantâneo sem transição no fim da volta.
 */
export function WordSwap({ words, interval = 1800 }: WordSwapProps) {
  const janelaRef = useRef<HTMLSpanElement>(null);
  const fitaRef = useRef<HTMLSpanElement>(null);
  const primeiraRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const item = primeiraRef.current;
    const janela = janelaRef.current;
    const fita = fitaRef.current;
    if (!item || !janela) return;
    // Arredonda pra cima: a altura real do texto é fracionária, e um h
    // menor que ela deixava a última linha de pixels da palavra seguinte
    // vazar pela borda da janela.
    const h = Math.ceil(item.getBoundingClientRect().height) + 1;
    janela.style.height = `${h}px`;
    if (!fita || words.length < 2) return;
    // O espaçamento natural entre as palavras na fita vem do line-height de
    // cada uma (fracionário) — só coincidir com `h` por acaso. Fixando a
    // altura de cada item em exatamente `h` (com o texto centralizado
    // dentro), o passo do translateY bate com o clip da janela sempre,
    // sem sobra de subpixel na borda.
    Array.from(fita.children).forEach((el) => {
      (el as HTMLElement).style.height = `${h}px`;
    });

    const ultimo = words.length - 1;
    let i = 0;
    let sentido = 1;

    const trocar = () => {
      i += sentido;
      if (i >= ultimo) {
        i = ultimo;
        sentido = -1;
      } else if (i <= 0) {
        i = 0;
        sentido = 1;
      }
      fita.style.transition = "transform 500ms cubic-bezier(0.16, 1, 0.3, 1)";
      fita.style.transform = `translateY(${-i * h}px)`;
    };

    const id = window.setInterval(trocar, interval);
    return () => window.clearInterval(id);
  }, [words, interval]);

  return (
    <>
      <span ref={janelaRef} className={styles.janela} aria-hidden="true">
        <span ref={fitaRef} className={styles.fita}>
          {words.map((w, idx) => (
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
