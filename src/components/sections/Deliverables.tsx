import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard, type IconTone } from "@/components/ui/ServiceCard";
import { Icon, type IconName } from "@/components/ui/Icon";
import { entregas } from "@/content/site";

export function Deliverables() {
  return (
    <Section tone="alternado">
      <div className="stack stack-6">
        <SectionHeading eyebrow={entregas.eyebrow} title={entregas.titulo} intro={entregas.intro} />
        <div className="grid-4">
          {entregas.itens.map((e) => (
            <ServiceCard
              key={e.titulo}
              icon={<Icon name={e.icone as IconName} />}
              iconTone={e.tom as IconTone}
              title={e.titulo}
              benefit={e.beneficio}
              bullets={e.bullets}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
