import type { ReactNode } from "react";
import styles from "./TrustItem.module.css";

export interface TrustItemProps {
  icon: ReactNode;
  title: string;
  description?: string;
  /** Só um abre por vez: mesmo `name` em todo o grupo, sem JavaScript. */
  group?: string;
  defaultOpen?: boolean;
}

export function TrustItem({ icon, title, description, group, defaultOpen = false }: TrustItemProps) {
  return (
    <details className={styles.item} name={group} open={defaultOpen}>
      <summary className={styles.summary}>
        <span className={styles.chip}>{icon}</span>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.sign} aria-hidden="true" />
      </summary>
      {description ? <p className={styles.desc}>{description}</p> : null}
    </details>
  );
}
