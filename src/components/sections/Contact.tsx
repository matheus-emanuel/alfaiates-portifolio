import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { WhatsAppGlyph } from "@/components/ui/BrandGlyph";
import { contato, links } from "@/content/site";
import { ContactForm } from "./ContactForm";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <Section tone="escuro" id="contato">
      <div className="contact-grid">
        <div className={styles.copy}>
          <SectionHeading invert eyebrow={contato.eyebrow} title={contato.titulo} intro={contato.intro} />
          {links.whatsapp ? (
            <Button
              variant="secondary"
              invert
              href={links.whatsapp}
              target="_blank"
              rel="noreferrer"
              icon={<WhatsAppGlyph />}
            >
              {contato.ctaWhatsapp}
            </Button>
          ) : null}
          <span className={styles.reforco}>
            <Icon name="ruler" size={16} strokeColor="var(--accent-warm)" />
            {contato.reforco}
          </span>
        </div>

        <div className={styles.box}>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
