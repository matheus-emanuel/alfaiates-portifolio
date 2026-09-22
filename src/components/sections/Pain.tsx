import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WordSwap } from "@/components/ui/WordSwap";
import { pain } from "@/content/site";
import { PanelMock } from "./PanelMock";
import styles from "./Pain.module.css";

export function Pain() {
  return (
    <Section tone="alternado">
      <div className="stack stack-7">
        <h2 className={styles.title}>
          <span>{pain.titulo}</span>
          <WordSwap words={pain.palavras} />
        </h2>
        <ul className={styles.list}>
          {pain.itens.map((t) => (
            <li key={t} className={styles.item}>
              <span className={styles.stitch} aria-hidden="true" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <div className={styles.demo}>
          <SectionHeading title={pain.demo.titulo} intro={pain.demo.intro} />
          <div className={styles.card}>
            <PanelMock />
          </div>
        </div>
      </div>
    </Section>
  );
}
