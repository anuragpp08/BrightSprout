import { ButtonLink } from "@/components/ui/ButtonLink";

type ComingSoonProps = {
  heading: string;
  body: string;
  anchors?: readonly string[];
  comingNext: string;
  backHome: string;
};

/** Shared layout for routes that exist in the navigation but are not built yet. */
export function ComingSoon({
  heading,
  body,
  anchors,
  comingNext,
  backHome,
}: ComingSoonProps) {
  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-sm font-semibold uppercase tracking-wide text-grove">{comingNext}</p>
      <h1 className="mt-3 text-4xl text-ink">{heading}</h1>
      <p className="mt-5 text-lg leading-relaxed text-muted">{body}</p>
      {anchors?.map((anchor) => (
        <div key={anchor} id={anchor} />
      ))}
      <div className="mt-8">
        <ButtonLink href="/" variant="secondary">
          {backHome}
        </ButtonLink>
      </div>
    </article>
  );
}
