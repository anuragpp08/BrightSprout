import Link from "next/link";
import type { Dictionary } from "@/content/types";
import { Section } from "@/components/ui/Section";

type KitsPreviewProps = {
  content: Dictionary["home"]["kits"];
};

export function KitsPreview({ content }: KitsPreviewProps) {
  return (
    <Section id={content.id} title={content.title} intro={content.intro} tone="paper">
      <ul className="grid gap-4 lg:grid-cols-3">
        {content.items.map((kit) => (
          <li key={kit.name} className="rounded-3xl border border-line bg-cream p-6">
            <p className="inline-flex rounded-full bg-mist px-3 py-1 text-sm font-semibold text-grove">
              {kit.age}
            </p>
            <h3 className="mt-4 text-2xl text-ink">{kit.name}</h3>
            <p className="mt-3 leading-relaxed text-muted">{kit.skill}</p>
          </li>
        ))}
      </ul>
      <p className="mt-8">
        <Link
          href={content.viewAllHref}
          className="font-semibold text-grove underline decoration-grove/40 underline-offset-4"
        >
          {content.viewAll}
        </Link>
      </p>
    </Section>
  );
}
