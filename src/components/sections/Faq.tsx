import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faq } from "@/content/site";
import styles from "./Faq.module.css";

export function Faq() {
  return (
    <Section tone="alternado" id="faq">
      <div className="stack stack-5">
        <SectionHeading eyebrow={faq.eyebrow} title={faq.titulo} />
        <div>
          {faq.itens.map((q, i) => (
            <details key={q.pergunta} className={styles.item} open={i === 0}>
              <summary className={styles.question}>
                <span>{q.pergunta}</span>
                <span className={styles.sign} aria-hidden="true" />
              </summary>
              <p className={styles.answer}>{q.resposta}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
