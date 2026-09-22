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
 * sem vão nem sobreposição entre eles no repouso.
 *
 * O progresso de cada cartão não é medido pela posição atual do próximo
 * (isso dependia do próprio `sticky` do vizinho, que só reflete sua posição
 * "real" enquanto grudado — rolando pra baixo, uma leitura ficava sempre um
 * quadro atrás, e o efeito só aparecia perto do fim). Em vez disso, mede-se
 * a posição NATURAL de cada cartão (a que ele teria sem `sticky`, lida uma
 * única vez com `position: static`) e compara com a rolagem atual da
 * página — puramente `scrollY`, sem depender do estado de mais nada.
 */
export function StackCards({ itens }: { itens: readonly Item[] }) {
  const stackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const naturaisRef = useRef<number[]>([]);

  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;
    const stickyTop = parseFloat(getComputedStyle(stack).getPropertyValue("--stack-top")) || 96;

    const medirNaturais = () => {
      naturaisRef.current = cardRefs.current.map((el) => {
        if (!el) return 0;
        const antes = el.style.position;
        el.style.position = "static";
        const y = el.getBoundingClientRect().top + window.scrollY;
        el.style.position = antes;
        return y;
      });
    };

    let ticking = false;
    const apply = () => {
      const naturais = naturaisRef.current;
      for (let i = 0; i < itens.length - 1; i++) {
        const card = cardRefs.current[i];
        if (!card) continue;

        const cardH = card.offsetHeight || 1;
        const preso = Math.min(1, Math.max(0, (window.scrollY + stickyTop - naturais[i]) / cardH));

        card.style.transform = `scale(${1 - preso * 0.1})`;
        card.style.filter = `brightness(${1 - preso * 0.4})`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(apply);
    };
    const onResize = () => {
      medirNaturais();
      apply();
    };

    medirNaturais();
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
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
