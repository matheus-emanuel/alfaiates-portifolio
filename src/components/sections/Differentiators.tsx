import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon, type IconName } from "@/components/ui/Icon";
import { diferenciais } from "@/content/site";
import styles from "./Differentiators.module.css";

const CHIP = { malva: styles.malva, rosa: styles.rosa, primary: styles.primary } as const;
const DOT = { malva: styles.dotMalva, rosa: styles.dotRosa, primary: styles.dotPrimary } as const;

export function Differentiators() {
  return (
    <Section tone="papel">
      <div className="split-sticky">
        <div className="sticky-head">
          <SectionHeading eyebrow={diferenciais.eyebrow} title={diferenciais.titulo} />
        </div>

        <div className={styles.rows}>
          {diferenciais.itens.map((item) => (
            <div key={item.titulo} className={styles.row}>
              <span className={`${styles.chip} ${CHIP[item.tom]}`}>
                <Icon name={item.icone as IconName} />
              </span>
              <div className={styles.body}>
                <h3 className={styles.title}>{item.titulo}</h3>
                <p className={styles.benefit}>{item.beneficio}</p>
                <ul className={styles.bullets}>
                  {item.bullets.map((b) => (
                    <li key={b} className={styles.bullet}>
                      <span className={`${styles.dot} ${DOT[item.tom]}`} aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
