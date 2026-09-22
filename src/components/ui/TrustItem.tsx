import type { ReactNode } from "react";
import styles from "./TrustItem.module.css";

export interface TrustItemProps {
  icon: ReactNode;
  title: string;
  description?: string;
  open: boolean;
  onOpen: () => void;
}

export function TrustItem({ icon, title, description, open, onOpen }: TrustItemProps) {
  return (
    <button
      type="button"
      className={`${styles.item} ${open ? styles.open : ""}`}
      onMouseEnter={onOpen}
      onFocus={onOpen}
      onClick={onOpen}
      aria-expanded={open}
    >
      <span className={styles.chip}>{icon}</span>
      <span className={styles.body}>
        <span className={styles.title}>{title}</span>
        {description ? <span className={styles.desc}>{description}</span> : null}
      </span>
    </button>
  );
}
