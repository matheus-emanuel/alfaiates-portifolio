"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { hero, nav } from "@/content/site";
import styles from "./MobileMenu.module.css";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls="menu-mobile"
        onClick={() => setOpen(true)}
      >
        <Icon name="menu" size={18} />
        Menu
      </button>

      <div
        id="menu-mobile"
        className={`${styles.overlay} ${open ? styles.open : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!open}
      >
        <button type="button" className={styles.backdrop} aria-label="Fechar menu" onClick={close} tabIndex={-1} />
        <div className={styles.sheet}>
          <button type="button" className={styles.close} onClick={close}>
            <Icon name="x" size={18} />
            Fechar
          </button>
          <nav className={styles.links} aria-label="Seções da página">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className={styles.link} onClick={close}>
                {item.label}
              </a>
            ))}
          </nav>
          <Button
            variant="primary"
            size="lg"
            href="#contato"
            onClick={close}
            iconRight={<Icon name="arrow-right" size={20} />}
          >
            {hero.ctaPrimario}
          </Button>
        </div>
      </div>
    </>
  );
}
