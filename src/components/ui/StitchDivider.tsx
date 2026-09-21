import styles from "./StitchDivider.module.css";

export interface StitchDividerProps {
  tone?: "linha" | "malva" | "laranja";
  label?: string;
}

export function StitchDivider({ tone = "linha", label }: StitchDividerProps) {
  const toneClass = tone === "linha" ? "" : styles[tone];
  return (
    <div className={`${styles.stitch} ${toneClass}`} role="presentation">
      <span className={styles.line} />
      {label ? (
        <>
          <span className={styles.label}>{label}</span>
          <span className={styles.line} />
        </>
      ) : null}
    </div>
  );
}
