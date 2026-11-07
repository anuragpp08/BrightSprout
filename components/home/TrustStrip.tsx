import type { Dictionary } from "@/content/types";

type TrustStripProps = {
  content: Dictionary["home"]["trust"];
};

export function TrustStrip({ content }: TrustStripProps) {
  const headingId = `${content.id}-heading`;

  return (
    <section id={content.id} aria-labelledby={headingId} className="bg-sand">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 id={headingId} className="text-3xl text-ink sm:text-4xl">
          {content.title}
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">{content.intro}</p>
        <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.facts.map((fact) => (
            <div key={fact.label} className="rounded-3xl bg-paper p-5">
              <dt className="text-sm font-semibold text-grove">{fact.label}</dt>
              <dd className="mt-1 text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>
        <p role="note" className="mt-8 max-w-3xl text-sm leading-relaxed text-ink">
          {content.disclaimer}
        </p>
      </div>
    </section>
  );
}
