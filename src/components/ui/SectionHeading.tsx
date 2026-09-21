import styles from "./SectionHeading.module.css";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  /** Para a faixa escura do CTA final. */
  invert?: boolean;
}

export function SectionHeading({ eyebrow, title, intro, align = "left", invert = false }: SectionHeadingProps) {
  return (
    <header className={`${styles.header} ${align === "center" ? styles.center : ""}`}>
      {eyebrow ? (
        <span className={`${styles.eyebrow} ${invert ? styles.eyebrowInvert : ""}`}>{eyebrow}</span>
      ) : null}
      <h2 className={`${styles.title} ${invert ? styles.titleInvert : ""}`}>{title}</h2>
      {intro ? <p className={`${styles.intro} ${invert ? styles.introInvert : ""}`}>{intro}</p> : null}
    </header>
  );
}
