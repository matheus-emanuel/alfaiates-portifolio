import { Button } from "@/components/ui/Button";
import { Wordmark } from "@/components/ui/Wordmark";
import { WhatsAppGlyph } from "@/components/ui/BrandGlyph";
import { links } from "@/content/site";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.wrap}>
      <Wordmark href="/" size={20} />
      <span className={styles.code} aria-hidden="true">
        404
      </span>
      <h1 className={styles.title}>Essa página não existe</h1>
      <p className={styles.body}>
        O link pode ter mudado ou a página saiu do ar. Volta pro início ou chama a gente no WhatsApp.
      </p>
      <div className={styles.ctas}>
        <Button variant="primary" href="/">
          Voltar pro início
        </Button>
        {links.whatsapp ? (
          <Button variant="secondary" href={links.whatsapp} target="_blank" rel="noreferrer" icon={<WhatsAppGlyph />}>
            Falar no WhatsApp
          </Button>
        ) : null}
      </div>
    </div>
  );
}
