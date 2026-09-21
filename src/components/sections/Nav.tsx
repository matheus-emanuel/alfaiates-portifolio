import { Button } from "@/components/ui/Button";
import { Wordmark } from "@/components/ui/Wordmark";
import { nav } from "@/content/site";
import styles from "./Nav.module.css";

export function Nav() {
  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Wordmark size={20} href="#topo" aria-label="Alfaiates Sistemas, ir para o início" />
        <nav className={styles.links} aria-label="Seções da página">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
        </nav>
        <Button variant="primary" size="sm" href="#contato">
          <span className={styles.ctaLongo}>Pedir orçamento</span>
          <span className={styles.ctaCurto}>Orçamento</span>
        </Button>
      </div>
    </header>
  );
}
