import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { agendaMock } from "@/content/site";
import styles from "./PanelMock.module.css";

export function PanelMock() {
  return (
    <Card flush radius="card">
      <div className={styles.head}>
        <span className={styles.headTitle}>{agendaMock.titulo}</span>
        <span className={styles.clock}>{agendaMock.relogio}</span>
      </div>

      <div>
        {agendaMock.linhas.map((l) => (
          <div key={l.hora} className={styles.row}>
            <span className={styles.hour}>{l.hora}</span>
            <span className={styles.who}>
              <span className={styles.name}>{l.nome}</span>
              <span className={styles.service}>{l.servico}</span>
            </span>
            <Badge tone={l.status === "PIX OK" ? "sucesso" : "neutro"}>{l.status}</Badge>
          </div>
        ))}
      </div>

      <div className={styles.foot}>
        <span className={styles.footLabel}>{agendaMock.rodapeLabel}</span>
        <span className={styles.footValue}>{agendaMock.rodapeValor}</span>
      </div>
    </Card>
  );
}
