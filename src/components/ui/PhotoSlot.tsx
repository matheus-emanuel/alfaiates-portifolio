import Image from "next/image";
import styles from "./PhotoSlot.module.css";

export interface PhotoSlotProps {
  /** Caminho em /public. Vazio = a foto ainda não foi entregue. */
  src?: string;
  alt: string;
  width: number;
  height: number;
  shape?: "circle" | "rounded" | "rect";
  /** O que deve entrar aqui, mostrado enquanto o slot está vazio. */
  label: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** Preenche o container em vez de reservar a caixa de width x height. */
  fill?: boolean;
}

export function PhotoSlot({
  src,
  alt,
  width,
  height,
  shape = "rounded",
  label,
  priority = false,
  sizes,
  className,
  fill = false
}: PhotoSlotProps) {
  const classes = [styles.slot, styles[shape], fill ? styles.fill : "", className ?? ""]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} style={fill ? undefined : { width, height }}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          {...(fill ? { fill: true } : { width, height })}
          sizes={sizes}
          priority={priority}
          className={styles.image}
        />
      ) : (
        <span className={styles.empty}>
          <span className={styles.emptyLabel}>{label}</span>
          <span className={styles.emptySize}>
            {width}×{height}
          </span>
        </span>
      )}
    </span>
  );
}
