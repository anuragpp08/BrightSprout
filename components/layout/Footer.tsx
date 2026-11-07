import Link from "next/link";
import type { Dictionary } from "@/content/types";
import { Logo } from "@/components/layout/Logo";

type FooterProps = {
  content: Dictionary["footer"];
  logoAlt: string;
};

function SocialIcon({ name }: { name: string }) {
  const common = {
    "aria-hidden": true as const,
    viewBox: "0 0 24 24",
    className: "h-5 w-5",
    fill: "none",
  };

  if (name === "Instagram") {
    return (
      <svg {...common}>
        <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17" cy="7" r="0.8" fill="currentColor" />
      </svg>
    );
  }

  if (name === "Facebook") {
    return (
      <svg {...common}>
        <path
          d="M14 9h2V6h-2c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.2l.8-3H13v-2c0-.6.4-1 1-1Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M11 10.5v3l3-1.5-3-1.5Z" fill="currentColor" />
    </svg>
  );
}

export function Footer({ content, logoAlt }: FooterProps) {
  return (
    <footer className="border-t border-line bg-grove text-cream">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link
            href="/"
            aria-label={logoAlt}
            className="inline-flex rounded-2xl bg-paper px-3 py-2"
          >
            <Logo className="h-14 w-auto" />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-cream">{content.blurb}</p>
        </div>

        <nav aria-label={content.quickLinksLabel}>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-sand">
            {content.quickLinksLabel}
          </h2>
          <ul className="mt-4 space-y-2">
            {content.links.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-cream hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-sand">
            {content.contactLabel}
          </h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="text-sand">{content.addressLabel}</dt>
              <dd>{content.address}</dd>
            </div>
            <div>
              <dt className="text-sand">{content.emailLabel}</dt>
              <dd>{content.email}</dd>
            </div>
            <div>
              <dt className="text-sand">{content.phoneLabel}</dt>
              <dd>{content.phone}</dd>
            </div>
          </dl>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-sand">
            {content.socialLabel}
          </h2>
          <p className="mt-4 text-sm text-cream">{content.socialNote}</p>
          <ul className="mt-4 flex gap-3">
            {content.social.map((item) => (
              <li key={item.name}>
                <span
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/30"
                  aria-label={`${item.name}. ${content.socialNote}`}
                >
                  <SocialIcon name={item.name} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {content.year} {content.rights}
          </p>
          <ul className="flex gap-4">
            <li>
              <Link href={content.privacy.href} className="hover:underline">
                {content.privacy.label}
              </Link>
            </li>
            <li>
              <Link href={content.terms.href} className="hover:underline">
                {content.terms.label}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
