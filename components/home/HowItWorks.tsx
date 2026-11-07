import type { Dictionary } from "@/content/types";
import { Section } from "@/components/ui/Section";

type HowItWorksProps = {
  content: Dictionary["home"]["howItWorks"];
};

export function HowItWorks({ content }: HowItWorksProps) {
  return (
    <Section id={content.id} title={content.title} intro={content.intro}>
      <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {content.steps.map((step, index) => (
          <li key={step.title} className="rounded-3xl bg-paper p-6 shadow-sm">
            <p className="font-display text-3xl text-grove" aria-hidden="true">
              {index + 1}
            </p>
            <h3 className="mt-3 text-xl text-ink">
              <span className="sr-only">
                {content.stepLabel} {index + 1}:{" "}
              </span>
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
