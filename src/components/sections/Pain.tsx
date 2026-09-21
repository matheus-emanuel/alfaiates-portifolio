import { Section } from "@/components/ui/Section";
import { FlipWord } from "@/components/ui/FlipWord";
import { pain } from "@/content/site";
import styles from "./Pain.module.css";

export function Pain() {
  return (
    <Section tone="alternado">
      <div className="stack stack-7">
        <h2 className={styles.title}>
          <span>{pain.titulo}</span>
          <FlipWord words={pain.palavras} />
        </h2>
        <ul className={styles.list}>
          {pain.itens.map((t) => (
            <li key={t} className={styles.item}>
              <span className={styles.stitch} aria-hidden="true" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
