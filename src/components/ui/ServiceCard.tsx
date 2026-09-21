import type { ReactNode } from "react";
import { Card } from "./Card";
import styles from "./ServiceCard.module.css";

export type IconTone = "primary" | "malva" | "rosa";

export interface ServiceCardProps {
  icon?: ReactNode;
  title: string;
  benefit?: string;
  bullets?: readonly string[];
  iconTone?: IconTone;
}

const DOT: Record<IconTone, string> = {
  primary: styles.dotPrimary,
  malva: styles.dotMalva,
  rosa: styles.dotRosa
};

export function ServiceCard({ icon, title, benefit, bullets = [], iconTone = "primary" }: ServiceCardProps) {
  return (
    <Card interactive className={styles.card}>
      {icon ? <span className={`${styles.chip} ${styles[iconTone]}`}>{icon}</span> : null}
      <h3 className={styles.title}>{title}</h3>
      {benefit ? <p className={styles.benefit}>{benefit}</p> : null}
      {bullets.length ? (
        <ul className={styles.bullets}>
          {bullets.map((b) => (
            <li key={b} className={styles.bullet}>
              <span className={`${styles.dot} ${DOT[iconTone]}`} aria-hidden="true" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </Card>
  );
}
