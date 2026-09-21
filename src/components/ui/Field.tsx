import { useId } from "react";
import styles from "./Field.module.css";

export interface FieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  /** Texto de apoio abaixo do campo. */
  hint?: string;
  /** Mensagem em linguagem de gente, ex.: "Preenche esse aqui". */
  error?: string;
  defaultValue?: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
  autoComplete?: string;
}

export function Field({
  label,
  name,
  type = "text",
  placeholder,
  hint,
  error,
  defaultValue,
  required = false,
  multiline = false,
  rows = 4,
  autoComplete
}: FieldProps) {
  const id = useId();
  const msgId = `${id}-msg`;
  const shared = {
    id,
    name,
    placeholder,
    defaultValue,
    required,
    autoComplete,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error || hint ? msgId : undefined
  } as const;

  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>
        {label}
        {required ? <span className={styles.required}> *</span> : null}
      </label>

      {multiline ? (
        <textarea {...shared} rows={rows} className={`${styles.control} ${styles.textarea}`} />
      ) : (
        <input {...shared} type={type} className={styles.control} />
      )}

      {error ? (
        <span id={msgId} role="alert" className={styles.error}>
          {error}
        </span>
      ) : hint ? (
        <span id={msgId} className={styles.hint}>
          {hint}
        </span>
      ) : null}
    </div>
  );
}
