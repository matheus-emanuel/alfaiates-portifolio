import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { WhatsAppGlyph } from "@/components/ui/BrandGlyph";
import { hero, links } from "@/content/site";
import { PanelMock } from "./PanelMock";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="topo" className={styles.hero}>
      <div className={`${styles.container} hero-grid`}>
        <div className={styles.copy}>
          <Badge tone="laranja">{hero.badge}</Badge>
          <h1 className={styles.title}>{hero.titulo}</h1>
          <p className={styles.sub}>{hero.subtitulo}</p>
          <div className={styles.ctas}>
            <Button variant="primary" size="lg" href="#contato">
              {hero.ctaPrimario}
            </Button>
            {links.whatsapp ? (
              <Button
                variant="secondary"
                href={links.whatsapp}
                target="_blank"
                rel="noreferrer"
                icon={<WhatsAppGlyph />}
              >
                {hero.ctaWhatsapp}
              </Button>
            ) : null}
          </div>
        </div>
        <PanelMock />
      </div>
    </section>
  );
}
