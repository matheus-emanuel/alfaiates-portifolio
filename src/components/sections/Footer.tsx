import Link from "next/link";
import { StitchDivider } from "@/components/ui/StitchDivider";
import { Wordmark } from "@/components/ui/Wordmark";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { InstagramGlyph } from "@/components/ui/BrandGlyph";
import { links, site } from "@/content/site";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <StitchDivider tone="malva" />
        <div className={styles.row}>
          <Wordmark invert size={20} />
          <div className={styles.meta}>
            <span className={styles.tagline}>
              {site.tagline} · {site.cidade}
            </span>
            {links.instagram ? (
              <ExternalLink
                href={links.instagram}
                className={styles.social}
                aria-label={`Instagram da ${site.nome}`}
              >
                <InstagramGlyph />
                Instagram
              </ExternalLink>
            ) : null}
          </div>
        </div>
        <div className={styles.legalRow}>
          <span className={styles.legal}>
            © {new Date().getFullYear()} {site.nome}. Todos os direitos reservados.
          </span>
          <div className={styles.legalLinks}>
            <Link href="/privacidade" className={styles.legalLink}>
              Privacidade
            </Link>
            <Link href="/termos" className={styles.legalLink}>
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
