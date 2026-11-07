import Link from "next/link";
import type { Dictionary } from "@/content/types";
import { Section } from "@/components/ui/Section";

type ImpactProps = {
  content: Dictionary["home"]["impact"];
};

export function Impact({ content }: ImpactProps) {
  return (
    <Section id={content.id} title={content.title} intro={content.intro}>
      <ul className="grid gap-4 sm:grid-cols-3">
        {content.counters.map((counter) => (
          <li key={counter.label} className="rounded-3xl bg-paper p-6 text-center shadow-sm">
            <p>
              <span className="rounded-full bg-sand px-2 py-1 text-xs font-semibold uppercase tracking-wide text-muted">
                {content.badge}
              </span>
            </p>
            <p className="mt-4 font-display text-5xl text-ink" aria-hidden="true">
              {counter.value}
            </p>
            <h3 className="mt-2 text-lg text-ink">{counter.label}</h3>
            <p className="mt-2 text-sm text-muted">{counter.note}</p>
          </li>
        ))}
      </ul>

      <h3 className="mt-12 text-2xl text-ink">{content.storiesLabel}</h3>
      <ul className="mt-4 grid gap-4 lg:grid-cols-2">
        {content.testimonials.map((story) => (
          <li key={story.quote} className="rounded-3xl border border-dashed border-line bg-paper p-6">
            <p>
              <span className="rounded-full bg-sand px-2 py-1 text-xs font-semibold uppercase tracking-wide text-muted">
                {content.badge}
              </span>
            </p>
            <blockquote className="mt-4 text-lg leading-relaxed text-ink">
              <p>{story.quote}</p>
              <footer className="mt-4 text-sm font-semibold text-muted">
                {story.attribution}
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
      <p className="mt-8">
        <Link
          href={content.moreHref}
          className="font-semibold text-grove underline decoration-grove/40 underline-offset-4"
        >
          {content.moreLabel}
        </Link>
      </p>
    </Section>
  );
}
