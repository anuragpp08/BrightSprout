/**
 * Locale codes the site is prepared to speak.
 * Only English has a dictionary today. Add "hi" and "mr" dictionaries
 * in content/hi and content/mr, then register them in lib/i18n.ts.
 */
export const locales = ["en", "hi", "mr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
