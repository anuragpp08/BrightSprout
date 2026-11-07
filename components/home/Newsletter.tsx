"use client";

import type { Dictionary } from "@/content/types";

type NewsletterProps = {
  content: Dictionary["home"]["newsletter"];
};

/**
 * Front-end only. preventDefault stops a navigation, and there is no
 * action, fetch, or storage. Connect this when an email service is chosen.
 */
export function Newsletter({ content }: NewsletterProps) {
  return (
    <section id={content.id} aria-labelledby="newsletter-heading" className="bg-grove text-cream">
      <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 id="newsletter-heading" className="text-3xl text-white sm:text-4xl">
          {content.title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-cream">{content.intro}</p>
        <form
          className="mt-8 flex flex-col gap-3 sm:flex-row"
          onSubmit={(event) => {
            event.preventDefault();
          }}
          noValidate
        >
          <div className="flex-1">
            <label htmlFor="newsletter-email" className="text-sm font-semibold text-sand">
              {content.label}
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              placeholder={content.placeholder}
              className="mt-2 min-h-11 w-full rounded-full border border-cream/40 bg-paper px-4 text-ink placeholder:text-muted"
            />
          </div>
          <button
            type="submit"
            className="mt-auto inline-flex min-h-11 items-center justify-center rounded-full bg-clay px-5 font-semibold text-white hover:bg-clay-dark"
          >
            {content.button}
          </button>
        </form>
        <p className="mt-4 text-sm text-sand" role="status">
          {content.note}
        </p>
      </div>
    </section>
  );
}
