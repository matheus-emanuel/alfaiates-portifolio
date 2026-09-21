import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Icon, type IconName } from "@/components/ui/Icon";
import { servicos } from "@/content/site";

export function Services() {
  return (
    <Section tone="alternado" id="servicos">
      <div className="stack stack-6">
        <SectionHeading eyebrow={servicos.eyebrow} title={servicos.titulo} intro={servicos.intro} />
        <div className="grid-3">
          {servicos.itens.map((s) => (
            <ServiceCard
              key={s.titulo}
              icon={<Icon name={s.icone as IconName} />}
              title={s.titulo}
              benefit={s.beneficio}
              bullets={s.bullets}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
