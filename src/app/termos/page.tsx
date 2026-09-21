import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";

/* TODO(cliente): revisar este texto com um advogado antes de publicar. */

export const metadata: Metadata = {
  title: "Termos"
};

export default function TermosPage() {
  return (
    <LegalLayout eyebrow="Termos" title="As regras básicas do site e dos projetos" updated="janeiro de 2026">
      <section>
        <h2>Sobre o site</h2>
        <p>
          Esse site apresenta os serviços da Alfaiates Sistemas: sites e sistemas sob medida pra pequenos
          negócios.
        </p>
      </section>
      <section>
        <h2>Orçamento e proposta</h2>
        <p>
          Todo projeto começa com uma conversa de diagnóstico, sem custo. Depois, você recebe uma proposta
          por escrito com escopo, prazo e preço fechados antes de qualquer linha de código.
        </p>
      </section>
      <section>
        <h2>Projetos no portfólio</h2>
        <p>
          Os projetos mostrados em &ldquo;Trabalhos&rdquo; pertencem aos respectivos clientes. Os links levam pra fora
          desse site, pros sistemas reais em produção.
        </p>
      </section>
      <section>
        <h2>Uso do conteúdo</h2>
        <p>O conteúdo desse site — textos, marca e layout — é da Alfaiates Sistemas. Não reproduz sem autorização.</p>
      </section>
      <section>
        <h2>Alterações</h2>
        <p>Esses termos podem mudar. Se mudar algo relevante, a gente atualiza essa página.</p>
      </section>
    </LegalLayout>
  );
}
