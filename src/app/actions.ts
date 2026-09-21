"use server";

/**
 * Recebimento do pedido de orçamento.
 *
 * A validação roda no servidor, então o formulário funciona mesmo com o
 * JavaScript desligado: o navegador faz o POST e a página volta com os erros
 * no lugar certo.
 *
 * TODO(cliente): ligar a entrega do lead. Hoje o pedido é só registrado no log
 * do servidor. Escolher um destino e chamar aqui, dentro do try:
 *   - e-mail transacional (Resend, SendGrid…)
 *   - webhook do CRM
 *   - mensagem no WhatsApp Business API
 * Enquanto isso não existir, nenhum pedido chega em ninguém.
 */

import type { FormState } from "./form-state";

export async function pedirOrcamento(_prev: FormState, formData: FormData): Promise<FormState> {
  const values = {
    nome: String(formData.get("nome") ?? "").trim(),
    whatsapp: String(formData.get("whatsapp") ?? "").trim(),
    segmento: String(formData.get("segmento") ?? ""),
    dor: String(formData.get("dor") ?? "").trim()
  };

  const digitos = values.whatsapp.replace(/\D/g, "");
  const errors: FormState["errors"] = {};

  // Mensagem de erro é fala de gente, nunca jargão de validação.
  if (!values.nome) errors.nome = "Preenche esse aqui pra gente saber como te chamar";
  if (!digitos) errors.whatsapp = "Falta o número pra gente te responder";
  else if (digitos.length < 10) errors.whatsapp = "Esse número parece incompleto, confere o DDD";

  if (Object.keys(errors).length) {
    return { status: "erro", errors, values };
  }

  try {
    console.info("[orcamento] novo pedido", {
      nome: values.nome,
      whatsapp: digitos,
      segmento: values.segmento || "(não informado)",
      dor: values.dor || "(vazio)"
    });
  } catch {
    return {
      status: "erro",
      errors: {},
      values
    };
  }

  return { status: "ok", errors: {}, values };
}
