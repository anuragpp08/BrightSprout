type SectionProps = {
  id: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  tone?: "cream" | "paper" | "mist" | "sand";
};

const tones = {
  cream: "bg-cream",
  paper: "bg-paper",
  mist: "bg-mist",
  sand: "bg-sand",
} as const;

/** A home-page section with one h2 and a readable measure for the introduction. */
export function Section({
  id,
  title,
  intro,
  children,
  tone = "cream",
}: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`${tones[tone]} py-16 sm:py-20`}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2
            id={headingId}
            className="text-3xl text-ink sm:text-4xl"
          >
            {title}
          </h2>
          {intro ? (
            <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>
          ) : null}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
