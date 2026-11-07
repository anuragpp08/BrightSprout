import type { Dictionary } from "@/content/types";
import { Section } from "@/components/ui/Section";

type WhatWeDoProps = {
  content: Dictionary["home"]["whatWeDo"];
};

export function WhatWeDo({ content }: WhatWeDoProps) {
  return (
    <Section id={content.id} title={content.title} intro={content.intro} tone="paper">
      <ul className="grid gap-4 sm:grid-cols-2">
        {content.cards.map((card) => (
          <li
            key={card.title}
            className="rounded-3xl border border-line bg-cream p-6"
          >
            <h3 className="text-2xl text-ink">{card.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{card.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
