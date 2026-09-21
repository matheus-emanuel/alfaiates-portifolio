"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import styles from "./HeroBackground.module.css";

const HeroShader = dynamic(() => import("./HeroShader"), { ssr: false });

/** Abaixo disso, ou com poucos núcleos, o shader em tela cheia custa bateria e fps demais. */
const MIN_WIDTH = 768;
const MIN_CORES = 5;

/**
 * Fundo do hero. Sempre renderiza o fallback estático (papel + halo laranja):
 * é o que aparece no servidor, em celular, com movimento reduzido ou sem GPU.
 * O shader só entra por cima depois da hidratação, quando o aparelho aguenta.
 */
export function HeroBackground() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const wide = window.matchMedia(`(min-width: ${MIN_WIDTH}px)`);
    const strong = (navigator.hardwareConcurrency ?? 0) >= MIN_CORES;

    const update = () => setAnimated(strong && wide.matches && !reduced.matches);
    update();

    reduced.addEventListener("change", update);
    wide.addEventListener("change", update);
    return () => {
      reduced.removeEventListener("change", update);
      wide.removeEventListener("change", update);
    };
  }, []);

  return (
    <div className={styles.bg} aria-hidden="true">
      <div className={styles.fallback} />
      {animated ? (
        <div className={styles.shader}>
          <HeroShader onUnavailable={() => setAnimated(false)} />
        </div>
      ) : null}
      <div className={styles.veil} />
    </div>
  );
}
