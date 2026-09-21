import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Icon, type IconName } from "@/components/ui/Icon";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { portfolio } from "@/content/site";
import styles from "./Portfolio.module.css";

export function Portfolio() {
  return (
    <Section tone="alternado" id="portfolio">
      <div className="stack stack-6">
        <SectionHeading eyebrow={portfolio.eyebrow} title={portfolio.titulo} intro={portfolio.intro} />
        <div className="grid-2">
          {portfolio.casos.map((c) => (
            <a key={c.id} href={c.href} target="_blank" rel="noreferrer" className={styles.card}>
              <div className={styles.frame}>
                <span className={styles.shot}>
                  <PhotoSlot
                    src={c.imagem || undefined}
                    alt={`Tela do sistema de ${c.negocio}`}
                    width={1600}
                    height={758}
                    shape="rect"
                    fill
                    label={`Print do ${c.negocio}`}
                    sizes="(max-width: 900px) 100vw, 540px"
                  />
                </span>
              </div>

              <div className={styles.body}>
                <div className={styles.head}>
                  <span className={styles.chip}>
                    <Icon name={c.icone as IconName} size={19} />
                  </span>
                  <h3 className={styles.title}>{c.negocio}</h3>
                </div>
                <p className={styles.note}>{c.nota}</p>
                <div className={styles.foot}>
                  <Badge>{c.segmento}</Badge>
                  <span className={styles.go}>Ver funcionando →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
