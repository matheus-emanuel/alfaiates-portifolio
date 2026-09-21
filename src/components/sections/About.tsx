import { Card } from "@/components/ui/Card";
import { StitchDivider } from "@/components/ui/StitchDivider";
import { Button } from "@/components/ui/Button";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { Section } from "@/components/ui/Section";
import { GitHubGlyph, InstagramGlyph, LinkedInGlyph } from "@/components/ui/BrandGlyph";
import { links, quemSomos } from "@/content/site";
import styles from "./About.module.css";

export function About() {
  return (
    <Section tone="papel" id="quem-somos">
      <div className="stack stack-7">
        <div className="about-grid">
          <div className="stack stack-4 align-start">
            <span className={styles.eyebrow}>{quemSomos.eyebrow}</span>
            <h2 className={styles.title}>{quemSomos.titulo}</h2>
            {quemSomos.paragrafos.map((p) => (
              <p key={p.slice(0, 24)} className={styles.body}>
                {p}
              </p>
            ))}
          </div>

          <Card roomy className={styles.metafora}>
            <StitchDivider tone="laranja" label={quemSomos.metafora.label} />
            <p style={{ margin: 0 }}>{quemSomos.metafora.corpo}</p>
            <p className={styles.fecho}>{quemSomos.metafora.fecho}</p>
          </Card>
        </div>

        <StitchDivider />

        <div className={styles.social}>
          <p className={styles.body}>{quemSomos.convite}</p>
          {links.instagram ? (
            <Button
              variant="secondary"
              size="sm"
              href={links.instagram}
              target="_blank"
              rel="noreferrer"
              icon={<InstagramGlyph />}
            >
              Ver no Instagram
            </Button>
          ) : null}
        </div>

        <div className="grid-3">
          {quemSomos.time.map((p) => {
            const primeiro = p.nome.split(" ")[0];
            return (
              <div key={p.id} className={styles.pessoa}>
                <PhotoSlot
                  src={p.foto || undefined}
                  alt={`Foto de ${p.nome}`}
                  width={132}
                  height={132}
                  shape="circle"
                  label={`Foto de ${primeiro}`}
                  className={styles.foto}
                />
                <h3 className={styles.nome}>{p.nome}</h3>
                <div className={styles.perfis}>
                  <ExternalLink href={p.linkedin || undefined} className={styles.perfil} aria-label={`LinkedIn de ${p.nome}`}>
                    <LinkedInGlyph size={16} />
                    LinkedIn
                  </ExternalLink>
                  <span className={styles.separador} aria-hidden="true" />
                  <ExternalLink href={p.github || undefined} className={styles.perfil} aria-label={`GitHub de ${p.nome}`}>
                    <GitHubGlyph size={16} />
                    GitHub
                  </ExternalLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
