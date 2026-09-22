import styles from "./StepNumber.module.css";

export interface StepNumberProps {
  n: number;
  title: string;
  description?: string;
  /** Acende (laranja) quando a linha do tempo da seção chega nele. Sem a prop, fica sempre aceso. */
  lit?: boolean;
}

export function StepNumber({ n, title, description, lit = true }: StepNumberProps) {
  return (
    <div className={styles.step}>
      <span className={`${styles.n} ${lit ? styles.lit : ""}`} aria-hidden="true">
        {n}
      </span>
      <h3 className={styles.title}>{title}</h3>
      {description ? <p className={styles.desc}>{description}</p> : null}
    </div>
  );
}
