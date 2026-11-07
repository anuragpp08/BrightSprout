import Link from "next/link";

const variants = {
  primary: "bg-grove text-white hover:bg-grove-dark",
  secondary: "border border-grove bg-paper text-grove hover:bg-mist",
  clay: "bg-clay text-white hover:bg-clay-dark",
} as const;

export type ButtonVariant = keyof typeof variants;

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

/** A pill-shaped link used for the main actions on the site. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-center text-base font-semibold transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
