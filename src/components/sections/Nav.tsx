import { Button } from "@/components/ui/Button";
import { WhatsAppGlyph } from "@/components/ui/BrandGlyph";
import { Wordmark } from "@/components/ui/Wordmark";
import { links, nav } from "@/content/site";
import { MobileMenu } from "./MobileMenu";
import styles from "./Nav.module.css";

export function Nav() {
  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <div className={styles.bar}>
          <div className={styles.left}>
            <Wordmark size={20} href="#topo" aria-label="Alfaiates Sistemas, ir para o início" />
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
              <Button
                variant="secondary"
                size="sm"
                href={links.whatsapp}
                target="_blank"
                rel="noreferrer"
                icon={<WhatsAppGlyph />}
                className={styles.cta}
              >
                Falar agora no WhatsApp
              </Button>
            ) : null}
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
