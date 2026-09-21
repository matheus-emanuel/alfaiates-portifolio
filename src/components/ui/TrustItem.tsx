import type { ReactNode } from "react";
import styles from "./TrustItem.module.css";

export interface TrustItemProps {
  icon: ReactNode;
  title: string;
  description?: string;
}

export function TrustItem({ icon, title, description }: TrustItemProps) {
  return (
    <div className={styles.item}>
      <span className={styles.chip}>{icon}</span>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        {description ? <p className={styles.desc}>{description}</p> : null}
      </div>
    </div>
  );
}
