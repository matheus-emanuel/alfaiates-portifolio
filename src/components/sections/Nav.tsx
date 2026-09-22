"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { WhatsAppGlyph } from "@/components/ui/BrandGlyph";
import { Wordmark } from "@/components/ui/Wordmark";
import { links, nav } from "@/content/site";
import { MobileMenu } from "./MobileMenu";
import styles from "./Nav.module.css";

/**
 * A cor do pill acompanha o scroll: cheia no topo, esvaindo até o fim do
 * hero, transparente daí em diante — e volta a ganhar cor se o usuário
 * rolar pra cima. É `--nav-chrome` (0 a 1) que o CSS lê pro fundo, pra
 * borda e pra sombra; o conteúdo (marca, links, botão) nunca perde opacidade.
 *
 * Sem fundo, o texto escuro passa a flutuar direto sobre a seção por baixo —
 * e a página tem uma faixa escura (o CTA final). `onDarkChange` avisa quando
 * a nav entra ou sai dessa faixa, pra trocar o texto pra claro nesse trecho.
 * Só dispara re-render quando o estado realmente muda (raro), não a cada
 * quadro de scroll como o chrome.
 */
function useNavScroll(ref: React.RefObject<HTMLElement | null>, onDarkChange: (dark: boolean) => void) {
  useEffect(() => {
    const hero = document.getElementById("topo");
    const escura = document.getElementById("contato");
    if (!hero) return;

    let heroBottom = 0;
    let escuraTop = Infinity;
    let dark = false;
    let ticking = false;

    const measure = () => {
      heroBottom = hero.getBoundingClientRect().bottom + window.scrollY;
      escuraTop = escura ? escura.getBoundingClientRect().top + window.scrollY : Infinity;
    };

    const apply = () => {
      const chrome = heroBottom > 0 ? 1 - Math.min(1, Math.max(0, window.scrollY / heroBottom)) : 1;
      ref.current?.style.setProperty("--nav-chrome", chrome.toFixed(3));

      const nextDark = window.scrollY >= escuraTop;
      if (nextDark !== dark) {
        dark = nextDark;
        onDarkChange(dark);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(apply);
    };

    measure();
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, [ref, onDarkChange]);
}

export function Nav() {
  const headerRef = useRef<HTMLElement>(null);
  const [dark, setDark] = useState(false);
  useNavScroll(headerRef, setDark);

  return (
    <header ref={headerRef} className={`${styles.header} ${dark ? styles.dark : ""}`}>
      <div className={styles.wrap}>
        <div className={styles.bar}>
          <div className={styles.left}>
            <Wordmark size={20} href="#topo" invert={dark} aria-label="Alfaiates Sistemas, ir para o início" />
            <nav className={styles.links} aria-label="Seções da página">
              {nav.map((item) => (
                <a key={item.href} href={item.href} className={styles.link}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className={styles.right}>
            {links.whatsapp ? (
              <div className={styles.ctaSlot}>
                <Button
                  variant="secondary"
                  size="sm"
                  href={links.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  icon={<WhatsAppGlyph />}
                  className={styles.cta}
                  invert={dark}
                >
                  <span className={styles.ctaLabel}>Falar agora no WhatsApp</span>
                </Button>
              </div>
            ) : null}
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
