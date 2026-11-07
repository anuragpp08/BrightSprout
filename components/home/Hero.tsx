import Image from "next/image";
import type { Dictionary } from "@/content/types";
import { ButtonLink } from "@/components/ui/ButtonLink";

type HeroProps = {
  content: Dictionary["home"]["hero"];
};

export function Hero({ content }: HeroProps) {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <h1 className="text-4xl text-ink sm:text-5xl">{content.title}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            {content.body}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {content.actions.map((action) => (
              <ButtonLink key={action.href} href={action.href} variant={action.variant}>
                {action.label}
              </ButtonLink>
            ))}
          </div>
        </div>

        <figure className="overflow-hidden rounded-3xl border border-line bg-sand shadow-sm">
          <Image
            src="/images/hero-placeholder.png"
            alt={content.imageAlt}
            width={1200}
            height={900}
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-auto w-full"
          />
          <figcaption className="px-4 py-3 text-sm text-muted">
            {content.imageCaption}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
