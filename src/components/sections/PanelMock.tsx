"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Badge, type BadgeTone } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Icon, type IconName } from "@/components/ui/Icon";
import { STATUS_PIX, agendaMock, type StatusPix } from "@/content/site";
import styles from "./PanelMock.module.css";

const TONE: Record<StatusPix, BadgeTone> = {
  "PIX OK": "sucesso",
  "A RECEBER": "neutro",
  "PIX ATRASADO": "erro"
};

const ICON: Record<StatusPix, IconName> = {
  "PIX OK": "circle-check",
  "A RECEBER": "circle",
  "PIX ATRASADO": "circle-alert"
};

const STATE_CLASS: Record<StatusPix, string> = {
  "PIX OK": styles.ok,
  "A RECEBER": styles.pending,
  "PIX ATRASADO": styles.late
};

const brl = (n: number) => `R$ ${Math.round(n).toLocaleString("pt-BR")}`;

/** Conta de um valor até o outro em ~320ms; com movimento reduzido, troca seco. */
function useTween(target: number) {
  const [shown, setShown] = useState(target);
  const from = useRef(target);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = from.current;
    const t0 = performance.now();
    let raf = 0;

    const step = (now: number) => {
      const p = reduced ? 1 : Math.min(1, (now - t0) / 320);
      const eased = 1 - Math.pow(1 - p, 3);
      const v = start + (target - start) * eased;
      from.current = v;
      setShown(v);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target]);

  return shown;
}

interface PickerProps {
  value: StatusPix;
  nome: string;
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
  onPick: (s: StatusPix) => void;
}

function StatusPicker({ value, nome, open, onToggle, onClose, onPick }: PickerProps) {
  const trigger = useRef<HTMLButtonElement>(null);
  const items = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (open) items.current[STATUS_PIX.indexOf(value)]?.focus();
    // Só na abertura: trocar `value` com o menu aberto não deve mover o foco.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const move = (to: number) => items.current[(to + STATUS_PIX.length) % STATUS_PIX.length]?.focus();

  const onKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
    const i = items.current.findIndex((el) => el === document.activeElement);
    if (e.key === "ArrowDown") { e.preventDefault(); move(i + 1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); move(i - 1); }
    else if (e.key === "Home") { e.preventDefault(); move(0); }
    else if (e.key === "End") { e.preventDefault(); move(STATUS_PIX.length - 1); }
    else if (e.key === "Escape") { e.preventDefault(); onClose(); trigger.current?.focus(); }
    else if (e.key === "Tab") onClose();
  };

  return (
    <div className={styles.picker} data-picker>
      <button
        ref={trigger}
        type="button"
        className={styles.trigger}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Status do pix de ${nome}: ${value}. Mudar`}
        onClick={onToggle}
      >
        <Badge tone={TONE[value]}>
          {value}
          <Icon name="chevron-down" size={14} className={open ? styles.chevronOpen : styles.chevron} />
        </Badge>
      </button>

      {open ? (
        <ul className={styles.menu} role="menu" aria-label={`Status do pix de ${nome}`} onKeyDown={onKeyDown}>
          {STATUS_PIX.map((s, i) => (
            <li key={s} role="none">
              <button
                ref={(el) => { items.current[i] = el; }}
                type="button"
                role="menuitemradio"
                aria-checked={s === value}
                className={`${styles.option} ${STATE_CLASS[s]}`}
                onClick={() => { onPick(s); onClose(); trigger.current?.focus(); }}
              >
                <Icon name={ICON[s]} size={16} />
                {s}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function PanelMock() {
  const [status, setStatus] = useState<StatusPix[]>(() => agendaMock.linhas.map((l) => l.status));
  const [openRow, setOpenRow] = useState<number | null>(null);

  useEffect(() => {
    if (openRow === null) return;
    const onDown = (e: PointerEvent) => {
      if (!(e.target as Element).closest("[data-picker]")) setOpenRow(null);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [openRow]);

  const paid = agendaMock.linhas.reduce((n, l, i) => n + (status[i] === "PIX OK" ? l.valor : 0), 0);
  const total = agendaMock.linhas.reduce((n, l) => n + l.valor, 0);
  const open = total - paid;
  const paidCount = status.filter((s) => s === "PIX OK").length;
  const lateCount = status.filter((s) => s === "PIX ATRASADO").length;
  const received = agendaMock.recebidoAntes + paid;
  const shownReceived = useTween(received);

  return (
    <Card flush radius="card">
      <div className={styles.head}>
        <span className={styles.headTitle}>{agendaMock.titulo}</span>
        <span className={styles.clock}>{agendaMock.relogio}</span>
      </div>

      <div className={styles.progress}>
        <div className={styles.progressText}>
          <span>
            {paidCount} de {status.length} recebidos
          </span>
          {lateCount ? <span className={styles.lateNote}>{lateCount} atrasado{lateCount > 1 ? "s" : ""}</span> : null}
        </div>
        <div
          className={styles.track}
          role="progressbar"
          aria-label="Pagamentos recebidos"
          aria-valuemin={0}
          aria-valuemax={status.length}
          aria-valuenow={paidCount}
        >
          <div className={styles.fill} style={{ transform: `scaleX(${paidCount / status.length})` }} />
        </div>
      </div>

      <div>
        {agendaMock.linhas.map((l, i) => (
          <div key={l.hora} className={styles.row}>
            <span key={status[i]} className={`${styles.state} ${STATE_CLASS[status[i]]}`}>
              <Icon name={ICON[status[i]]} size={18} />
            </span>
            <span className={styles.hour}>{l.hora}</span>
            <span className={styles.who}>
              <span className={styles.name}>{l.nome}</span>
              <span className={styles.service}>{l.servico}</span>
            </span>
            <StatusPicker
              value={status[i]}
              nome={l.nome}
              open={openRow === i}
              onToggle={() => setOpenRow(openRow === i ? null : i)}
              onClose={() => setOpenRow(null)}
              onPick={(s) => setStatus((prev) => prev.map((p, j) => (j === i ? s : p)))}
            />
          </div>
        ))}
      </div>

      <div className={styles.foot}>
        <span className={styles.footInfo}>
          <span className={styles.footLabel}>{agendaMock.rodapeLabel}</span>
          <span className={styles.footSub}>A receber {brl(open)}</span>
        </span>
        <span className={styles.footValue} aria-hidden="true">
          {brl(shownReceived)}
        </span>
        <span className={styles.srOnly} aria-live="polite">
          {agendaMock.rodapeLabel}: {brl(received)}. A receber: {brl(open)}.
        </span>
      </div>
    </Card>
  );
}
