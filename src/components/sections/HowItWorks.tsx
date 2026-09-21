import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StepNumber } from "@/components/ui/StepNumber";
import { StitchDivider } from "@/components/ui/StitchDivider";
import { comoFunciona } from "@/content/site";

export function HowItWorks() {
  return (
    <Section tone="papel" id="como">
      <div className="stack stack-6">
        <SectionHeading eyebrow={comoFunciona.eyebrow} title={comoFunciona.titulo} />
        <StitchDivider />
        <div className="grid-4">
          {comoFunciona.passos.map((p, i) => (
            <StepNumber key={p.titulo} n={i + 1} title={p.titulo} description={p.descricao} />
          ))}
        </div>
      </div>
    </Section>
  );
}
