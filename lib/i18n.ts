import { en } from "@/content/en";
import { defaultLocale, type Locale } from "@/content/locales";
import type { Dictionary } from "@/content/types";

/**
 * English is the only complete dictionary today.
 * When Hindi or Marathi copy is ready, add a matching object here.
 * Components should read text through getDictionary(), not inline strings.
 */
const dictionaries: Partial<Record<Locale, Dictionary>> = {
  en,
};

export function getDictionary(locale: Locale = defaultLocale): Dictionary {
  return dictionaries[locale] ?? en;
}
