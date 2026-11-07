import type { Dictionary } from "@/content/types";
import { Section } from "@/components/ui/Section";

type ApproachProps = {
  content: Dictionary["home"]["approach"];
};

export function Approach({ content }: ApproachProps) {
  return (
    <Section id={content.id} title={content.title} intro={content.intro} tone="sand">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {content.points.map((point) => (
          <li key={point.title} className="rounded-3xl bg-paper p-6">
            <h3 className="text-xl text-ink">{point.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{point.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
