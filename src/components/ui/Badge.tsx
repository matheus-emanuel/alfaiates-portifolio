import type { ReactNode } from "react";
import styles from "./Badge.module.css";

export type BadgeTone = "malva" | "rosa" | "laranja" | "sucesso" | "neutro";

export interface BadgeProps {
  children?: ReactNode;
  tone?: BadgeTone;
}

export function Badge({ children, tone = "malva" }: BadgeProps) {
  return <span className={`${styles.badge} ${styles[tone]}`}>{children}</span>;
}
