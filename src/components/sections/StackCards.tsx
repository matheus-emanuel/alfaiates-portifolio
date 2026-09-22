"use client";

import { useEffect, useRef } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import type { diferenciais } from "@/content/site";
import styles from "./StackCards.module.css";

const CHIP = { malva: styles.malva, rosa: styles.rosa, primary: styles.primary } as const;
const DOT = { malva: styles.dotMalva, rosa: styles.dotRosa, primary: styles.dotPrimary } as const;

type Item = (typeof diferenciais)["itens"][number];

/**
 * Cartões que empilham: todos grudam no mesmo `top` (`position: sticky`),
 * sem vão nem sobreposição entre eles no repouso. É a física do próprio
 * sticky que faz o resto: quando o de cima já está grudado, o de baixo
 * nasce exatamente na borda inferior dele (fluxo normal, sem gap) e sobe
 * naturalmente por cima conforme a rolagem continua — cobrir de propósito
 * com margem negativa faria isso acontecer de uma vez, antes mesmo da
 * seção começar a rolar. O JavaScript só mede o quanto o próximo já
 * alcançou o de baixo, e aplica escala + escurecimento proporcionais.
 */
export function StackCards({ itens }: { itens: readonly Item[] }) {
  const stackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ticking = false;

    const apply = () => {
      const stack = stackRef.current;
      const stickyTop = (stack && parseFloat(getComputedStyle(stack).getPropertyValue("--stack-top"))) || 96;

      for (let i = 0; i < itens.length - 1; i++) {
        const card = cardRefs.current[i];
        const next = cardRefs.current[i + 1];
        if (!card || !next) continue;

        const cardH = card.offsetHeight || 1;
        const nextTop = next.getBoundingClientRect().top;
        const preso = Math.min(1, Math.max(0, (stickyTop + cardH - nextTop) / cardH));

        card.style.transform = `scale(${1 - preso * 0.08})`;
        card.style.filter = `brightness(${1 - preso * 0.35})`;
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
  }, [itens]);

  return (
    <div ref={stackRef} className={styles.stack}>
      {itens.map((item, i) => (
        <div
          key={item.titulo}
          ref={(el) => {
            cardRefs.current[i] = el;
          }}
          className={styles.card}
          style={{ zIndex: i + 1 }}
        >
          <span className={`${styles.chip} ${CHIP[item.tom]}`}>
            <Icon name={item.icone as IconName} />
          </span>
          <div className={styles.body}>
            <h3 className={styles.title}>{item.titulo}</h3>
            <p className={styles.benefit}>{item.beneficio}</p>
            <ul className={styles.bullets}>
              {item.bullets.map((b) => (
                <li key={b} className={styles.bullet}>
                  <span className={`${styles.dot} ${DOT[item.tom]}`} aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
