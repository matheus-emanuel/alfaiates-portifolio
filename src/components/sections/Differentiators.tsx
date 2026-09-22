import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { diferenciais } from "@/content/site";
import { StackCards } from "./StackCards";

export function Differentiators() {
  return (
    <Section tone="papel">
      <div className="split-sticky">
        <div className="sticky-head">
          <SectionHeading eyebrow={diferenciais.eyebrow} title={diferenciais.titulo} />
        </div>
        <StackCards itens={diferenciais.itens} />
      </div>
    </Section>
  );
}
