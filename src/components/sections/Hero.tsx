import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { contato, hero } from "@/content/site";
import { HeroBackground } from "./HeroBackground";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="topo" className={styles.hero}>
      <HeroBackground />
      <div className={styles.inner}>
        <div className={styles.copy}>
          <Badge tone="laranja">{hero.badge}</Badge>
          <h1 className={styles.title}>{hero.titulo}</h1>
          <p className={styles.sub}>{hero.subtitulo}</p>
          <div className={styles.ctas}>
            <Button
              variant="primary"
              size="lg"
              href="#contato"
              iconRight={<Icon name="arrow-right" size={20} />}
            >
              {hero.ctaPrimario}
            </Button>
            <span className={styles.trust}>
              <Icon name="shield-check" size={18} />
              {contato.reforco}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
