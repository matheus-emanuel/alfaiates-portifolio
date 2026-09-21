import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { links } from "@/content/site";

/* TODO(cliente): revisar este texto com um advogado antes de publicar.
   Rascunho honesto do que o código faz hoje — ver src/app/actions.ts. */

export const metadata: Metadata = {
  title: "Privacidade"
};

export default function PrivacidadePage() {
  return (
    <LegalLayout eyebrow="Privacidade" title="Como a gente trata os seus dados" updated="janeiro de 2026">
      <section>
        <h2>O que a gente coleta</h2>
        <p>
          Quando você preenche o formulário de orçamento, a gente recebe seu nome, seu WhatsApp e, se você
          quiser contar, o segmento do seu negócio e o que está te travando hoje. Só nome e WhatsApp são
          obrigatórios.
        </p>
      </section>
      <section>
        <h2>Pra que serve</h2>
        <p>
          Só pra entender seu pedido e te chamar de volta no WhatsApp, pra marcar a conversa de
          diagnóstico. A gente não vende, aluga ou repassa essas informações pra ninguém.
        </p>
      </section>
      <section>
        <h2>Cookies e rastreamento</h2>
        <p>
          Esse site não usa cookie de propaganda nem ferramenta de rastreamento de terceiros. Não tem
          pixel, não tem Google Analytics, não tem nada parecido rodando aqui.
        </p>
      </section>
      <section>
        <h2>Quanto tempo guardamos</h2>
        <p>
          Guardamos seu pedido até a proposta fechar ou ser descartada. Se você quiser que a gente apague
          antes disso, é só pedir.
        </p>
      </section>
      <section>
        <h2>Seus direitos</h2>
        <p>
          Você pode pedir, a qualquer momento, pra saber o que a gente guardou sobre você, corrigir alguma
          informação ou apagar tudo. {links.whatsapp ? "Chama a gente no WhatsApp." : "Fala com a gente."}
        </p>
      </section>
    </LegalLayout>
  );
}
