import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrustItem } from "@/components/ui/TrustItem";
import { Icon, type IconName } from "@/components/ui/Icon";
import { confianca } from "@/content/site";

export function Trust() {
  return (
    <Section tone="papel">
      <div className="stack stack-6">
        <SectionHeading eyebrow={confianca.eyebrow} title={confianca.titulo} />
        <div className="grid-2">
          {confianca.itens.map((t, i) => (
            <TrustItem
              key={t.titulo}
              icon={<Icon name={t.icone as IconName} size={20} />}
              title={t.titulo}
              description={t.descricao}
              group="confianca"
              defaultOpen={i === 0}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
