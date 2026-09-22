"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrustItem } from "@/components/ui/TrustItem";
import { Icon, type IconName } from "@/components/ui/Icon";
import { confianca } from "@/content/site";
import styles from "./Trust.module.css";

export function Trust() {
  const [open, setOpen] = useState(0);

  return (
    <Section tone="papel">
      <div className="stack stack-6">
        <SectionHeading eyebrow={confianca.eyebrow} title={confianca.titulo} />
        <div className={styles.row}>
          {confianca.itens.map((t, i) => (
            <TrustItem
              key={t.titulo}
              icon={<Icon name={t.icone as IconName} size={20} />}
              title={t.titulo}
              description={t.descricao}
              open={open === i}
              onOpen={() => setOpen(i)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
