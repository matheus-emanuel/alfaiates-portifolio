import Link from "next/link";
import styles from "./Wordmark.module.css";

export interface WordmarkProps {
  size?: number;
  invert?: boolean;
  /** Quando presente, a assinatura vira âncora (uso na nav). */
  href?: string;
  "aria-label"?: string;
}

export function Wordmark({ size = 22, invert = false, href, ...rest }: WordmarkProps) {
  const classes = `${styles.wordmark} ${invert ? styles.invert : ""}`;
  // Na nav de celular a assinatura divide 390px com o CTA: ela cede primeiro.
  const fontSize = `clamp(17px, 4.6vw, ${size}px)`;
  const inner = (
    <>
      Alfaiates<span className={styles.second}>Sistemas</span>
    </>
  );
  if (href) {
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={classes} style={{ fontSize }} {...rest}>
          {inner}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} style={{ fontSize }} {...rest}>
        {inner}
      </a>
    );
  }
  return (
    <span className={classes} style={{ fontSize }} {...rest}>
      {inner}
    </span>
  );
}
