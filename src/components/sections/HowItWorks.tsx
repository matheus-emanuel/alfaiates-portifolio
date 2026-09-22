import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { comoFunciona } from "@/content/site";
import { Timeline } from "./Timeline";

export function HowItWorks() {
  return (
    <Section tone="papel" id="como">
      <div className="stack stack-6">
        <SectionHeading eyebrow={comoFunciona.eyebrow} title={comoFunciona.titulo} />
        <Timeline />
      </div>
    </Section>
  );
}
