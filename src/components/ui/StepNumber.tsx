import styles from "./StepNumber.module.css";

export interface StepNumberProps {
  n: number;
  title: string;
  description?: string;
}

export function StepNumber({ n, title, description }: StepNumberProps) {
  return (
    <div className={styles.step}>
      <span className={styles.n} aria-hidden="true">
        {n}
      </span>
      <h3 className={styles.title}>{title}</h3>
      {description ? <p className={styles.desc}>{description}</p> : null}
    </div>
  );
}
