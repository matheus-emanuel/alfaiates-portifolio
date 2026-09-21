"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./FlipWord.module.css";

const SEQ = " ABCDEFGHIJKLMNOPQRSTUVWXYZÁÂÃÀÉÊÍÓÔÕÚÇ0123456789";
const TICK = 62; // ms por virada de aleta
const BASE_TRAVEL = 5; // viradas mínimas na primeira coluna
const STAGGER = 1; // viradas a mais por coluna, da esquerda para a direita

const pad = (word: string, n: number) => {
  const s = (word || "").toUpperCase();
  const left = Math.floor((n - s.length) / 2);
  return (" ".repeat(Math.max(0, left)) + s).padEnd(n, " ").slice(0, n);
};

/** Fila fechada de letras que a coluna percorre até parar no alvo. */
const queueFor = (from: string, target: string, travel: number) => {
  if (from === target && target === " ") return [];
  const end = Math.max(0, SEQ.indexOf(target));
  const out: string[] = [];
  for (let k = travel - 1; k >= 0; k--) out.push(SEQ[(end - k + SEQ.length * 2) % SEQ.length]);
  return out;
};

function Flap({ char, prev, tick }: { char: string; prev: string; tick: number }) {
  const moving = prev !== char;
  return (
    <span className={styles.flap}>
      <span className={`${styles.half} ${styles.top}`}>
        <span className={`${styles.glyph} ${styles.glyphTop}`}>{char}</span>
      </span>
      <span className={`${styles.half} ${styles.bottom}`}>
        <span className={`${styles.glyph} ${styles.glyphBottom}`}>{moving ? prev : char}</span>
      </span>
      {moving ? (
        <>
          <span key={`t${tick}`} className={`${styles.half} ${styles.top} ${styles.flipTop}`}>
            <span className={`${styles.glyph} ${styles.glyphTop}`}>{prev}</span>
          </span>
          <span key={`b${tick}`} className={`${styles.half} ${styles.bottom} ${styles.flipBottom}`}>
            <span className={`${styles.glyph} ${styles.glyphBottom}`}>{char}</span>
          </span>
        </>
      ) : null}
      <span aria-hidden="true" className={styles.sheen} />
      <span aria-hidden="true" className={styles.seam} />
    </span>
  );
}

/** O que a tela mostra: só isso entra em estado. */
interface Frame {
  chars: string[];
  prev: string[];
  ticks: number[];
  word: string;
}

/** O que o ticker precisa para andar: nada disso é lido durante o render. */
interface Machine extends Frame {
  queues: string[][];
  index: number;
  idle: number;
}

export interface FlipWordProps {
  words: readonly string[];
  /** Tempo parado em cada palavra, antes de virar para a próxima. */
  interval?: number;
}

/**
 * Painel split-flap. Um único ticker conduz o ciclo inteiro dentro do efeito:
 * o estado da máquina mora numa ref que só o intervalo toca, e o render lê
 * apenas o frame em estado. Com `prefers-reduced-motion` as palavras trocam
 * secas, sem virar as aletas.
 */
export function FlipWord({ words, interval = 3000 }: FlipWordProps) {
  const cols = words.reduce((m, w) => Math.max(m, w.length), 0) || 1;

  const [frame, setFrame] = useState<Frame>(() => {
    const start = pad(words[0] ?? "", cols).split("");
    return { chars: start, prev: start.slice(), ticks: new Array(cols).fill(0), word: words[0] ?? "" };
  });

  const machine = useRef<Machine | null>(null);

  useEffect(() => {
    if (words.length < 2) return;

    const start = pad(words[0], cols).split("");
    machine.current = {
      chars: start,
      prev: start.slice(),
      ticks: new Array(cols).fill(0),
      word: words[0],
      queues: [],
      index: 0,
      idle: 0
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const idleTicks = Math.max(1, Math.round(interval / TICK));

    const id = window.setInterval(() => {
      const st = machine.current;
      if (!st) return;

      const busy = st.queues.some((q) => q && q.length);

      if (!busy) {
        st.idle += 1;
        if (st.idle < idleTicks) return;
        st.idle = 0;
        st.index = (st.index + 1) % words.length;
        const target = pad(words[st.index], cols).split("");

        if (reduced) {
          st.prev = target.slice();
          st.chars = target.slice();
          st.word = words[st.index];
          setFrame({ chars: st.chars.slice(), prev: st.prev.slice(), ticks: st.ticks.slice(), word: st.word });
          return;
        }

        st.queues = st.chars.map((c, i) => queueFor(c, target[i], BASE_TRAVEL + i * STAGGER));
        return;
      }

      const prev = st.chars;
      const next = prev.slice();
      const ticks = st.ticks.slice();
      for (let i = 0; i < cols; i++) {
        const q = st.queues[i];
        if (!q || !q.length) continue;
        next[i] = q.shift() as string;
        ticks[i] += 1;
      }
      st.prev = prev;
      st.chars = next;
      st.ticks = ticks;
      if (!st.queues.some((q) => q && q.length)) st.word = words[st.index];

      setFrame({ chars: next.slice(), prev: prev.slice(), ticks: ticks.slice(), word: st.word });
    }, TICK);

    return () => {
      window.clearInterval(id);
      machine.current = null;
    };
  }, [words, interval, cols]);

  return (
    <>
      <span className={styles.panel} aria-hidden="true">
        {frame.chars.map((c, i) => (
          <Flap key={i} char={c} prev={frame.prev[i] ?? " "} tick={frame.ticks[i]} />
        ))}
      </span>
      {/* O título precisa ser legível como texto: as aletas são decoração. */}
      <span className={styles.srOnly}>{frame.word}</span>
    </>
  );
}
