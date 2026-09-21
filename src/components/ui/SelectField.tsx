import { useId } from "react";
import styles from "./Field.module.css";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectFieldProps {
  label: string;
  name: string;
  options: readonly SelectOption[];
  defaultValue?: string;
  hint?: string;
  error?: string;
  required?: boolean;
}

export function SelectField({ label, name, options, defaultValue, hint, error, required = false }: SelectFieldProps) {
  const id = useId();
  const msgId = `${id}-msg`;

  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>
        {label}
        {required ? <span className={styles.required}> *</span> : null}
      </label>

      <select
        id={id}
        name={name}
        defaultValue={defaultValue}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error || hint ? msgId : undefined}
        className={`${styles.control} ${styles.select}`}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>

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
