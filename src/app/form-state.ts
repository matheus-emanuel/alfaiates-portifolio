/**
 * Estado do formulário de orçamento.
 *
 * Mora fora de `actions.ts` de propósito: um módulo "use server" só pode
 * exportar funções assíncronas, então o valor inicial precisa vir daqui.
 */
/**
 * O pedido ainda não é entregue a ninguém: `actions.ts` valida e registra no
 * log do servidor, e só. Enquanto isso for verdade, a tela de sucesso não
 * promete retorno — ela manda a pessoa pro WhatsApp, que funciona hoje.
 *
 * Ao ligar a entrega (e-mail, CRM, WhatsApp API), virar esta constante para
 * `true`: a confirmação volta a ser "a gente chama no WhatsApp hoje".
 */
export const ENTREGA_ATIVA = false;

export interface FormState {
  status: "idle" | "ok" | "erro";
  errors: Partial<Record<"nome" | "whatsapp", string>>;
  values: { nome: string; whatsapp: string; segmento: string; dor: string };
}

export const estadoInicial: FormState = {
  status: "idle",
  errors: {},
  values: { nome: "", whatsapp: "", segmento: "", dor: "" }
};
