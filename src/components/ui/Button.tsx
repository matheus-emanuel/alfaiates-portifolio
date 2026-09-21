import type { ComponentProps, ReactNode } from "react";
import Link from "next/link";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "tertiary";
type Size = "sm" | "md" | "lg";

export interface ButtonProps {
  variant?: Variant;
  size?: Size;
  children?: ReactNode;
  /** Ícone à esquerda do rótulo. */
  icon?: ReactNode;
  /** Ícone à direita; desloca 2px no hover (microinteração de seta). */
  iconRight?: ReactNode;
  disabled?: boolean;
  /** Renderiza como <a> quando presente. */
  href?: string;
  /** Para o botão secundário sobre a faixa escura. */
  invert?: boolean;
  fullWidth?: boolean;
  className?: string;
}

type AnchorRest = Omit<ComponentProps<"a">, keyof ButtonProps | "ref">;
type ButtonRest = Omit<ComponentProps<"button">, keyof ButtonProps | "ref">;

export function Button({
  variant = "primary",
  size = "md",
  children,
  icon,
  iconRight,
  disabled = false,
  href,
  invert = false,
  fullWidth = false,
  className,
  ...rest
}: ButtonProps & (AnchorRest | ButtonRest)) {
  const classes = [
    styles.btn,
    styles[variant],
    styles[size],
    invert && variant === "secondary" ? styles.invert : "",
    fullWidth ? styles.fullWidth : "",
    className ?? ""
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      {icon ? <span className={styles.iconLeft}>{icon}</span> : null}
      {children}
      {iconRight ? <span className={styles.iconRight}>{iconRight}</span> : null}
    </>
  );

  if (href) {
    // Rota interna (começa com "/"): navegação client-side via next/link.
    // Âncora de página ("#...") e link externo seguem como <a> normal.
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={classes} {...(rest as AnchorRest)}>
          {inner}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} {...(rest as AnchorRest)}>
        {inner}
      </a>
    );
  }

  return (
    <button type="button" disabled={disabled} className={classes} {...(rest as ButtonRest)}>
      {inner}
    </button>
  );
}
