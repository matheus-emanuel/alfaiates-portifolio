"use client";

import { useActionState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Field } from "@/components/ui/Field";
import { SelectField } from "@/components/ui/SelectField";
import { pedirOrcamento } from "@/app/actions";
import { ENTREGA_ATIVA, estadoInicial } from "@/app/form-state";
import { WhatsAppGlyph } from "@/components/ui/BrandGlyph";
import { contato, links } from "@/content/site";
import styles from "./ContactForm.module.css";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(pedirOrcamento, estadoInicial);

  if (state.status === "ok") {
    return (
      <div className={styles.recebido}>
        {ENTREGA_ATIVA ? (
          <>
            <Badge tone="sucesso">Recebido</Badge>
            <h3 className={styles.recebidoTitle}>A gente chama no WhatsApp hoje</h3>
            <p className={styles.recebidoBody}>
              Se preferir adiantar, manda uma mensagem e já começamos por lá.
            </p>
          </>
        ) : (
          <>
            <h3 className={styles.recebidoTitle}>Chama a gente no WhatsApp</h3>
            <p className={styles.recebidoBody}>
              É por lá que a conversa começa, e a resposta sai no mesmo dia.
            </p>
            {links.whatsapp ? (
              <Button href={links.whatsapp} target="_blank" rel="noreferrer" icon={<WhatsAppGlyph />}>
                {contato.ctaWhatsapp}
              </Button>
            ) : null}
          </>
        )}
      </div>
    );
  }

  return (
    <form action={formAction} className={styles.form} noValidate>
      <h3 className={styles.title}>{contato.formTitulo}</h3>

      <Field
        label="Seu nome"
        name="nome"
        placeholder="Como te chamam"
        autoComplete="name"
        required
        defaultValue={state.values.nome}
        error={state.errors.nome}
      />
      <Field
        label="WhatsApp"
        name="whatsapp"
        type="tel"
        placeholder="(00) 00000-0000"
        hint="A gente chama por aqui mesmo"
        autoComplete="tel"
        required
        defaultValue={state.values.whatsapp}
        error={state.errors.whatsapp}
      />
      <SelectField
        label="Segmento"
        name="segmento"
        options={contato.segmentos}
        defaultValue={state.values.segmento}
      />
      <Field
        label="O que te trava hoje"
        name="dor"
        multiline
        rows={3}
        placeholder="Escreve do jeito que você falaria"
        defaultValue={state.values.dor}
      />

      <Button variant="primary" type="submit" fullWidth disabled={pending}>
        {pending ? "Enviando…" : "Enviar"}
      </Button>

      {state.status === "erro" && !Object.keys(state.errors).length ? (
        <p role="alert" className={styles.falhou}>
          Não conseguimos registrar agora. Tenta de novo, ou chama no WhatsApp.
        </p>
      ) : null}
    </form>
  );
}
