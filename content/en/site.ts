/**
 * Site-wide facts and chrome labels.
 * Replace the url before launch so Open Graph and the sitemap use the real domain.
 */
export const site = {
  name: "Bright Sprout",
  title: "Bright Sprout · Parenting support in Mumbai",
  description:
    "Bright Sprout is a charitable trust in Mumbai that supports parents with guidance, counselling, workshops, and age-wise developmental kits. Our approach is kind and never judgmental.",
  /** Replace with the live site URL before launch. */
  url: "https://example.com",
  locale: "en_IN",
  skipToContent: "Skip to content",
  logoAlt: "BrightSprout, womb to 18, early-life development",
  language: {
    label: "Language",
    note: "Hindi and Marathi are coming later.",
    /** Codes must stay aligned with content/locales.ts. */
    options: [
      { code: "en" as const, short: "EN", name: "English", available: true },
      { code: "hi" as const, short: "HI", name: "Hindi", available: false },
      { code: "mr" as const, short: "MR", name: "Marathi", available: false },
    ],
  },
  menuOpen: "Open menu",
  menuClose: "Close menu",
  primaryNavLabel: "Primary",
  mobileNavLabel: "Mobile",
  donateLabel: "Donate",
  donateHref: "/get-involved#donate",
  comingNext: "Coming next",
  backHome: "Back to home",
};
