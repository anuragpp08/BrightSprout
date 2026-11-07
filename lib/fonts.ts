import { Fraunces, Nunito_Sans } from "next/font/google";

/** Body and UI. Add the "devanagari" subset when Hindi or Marathi text ships. */
export const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

/** Headings. A soft serif; it does not include Devanagari glyphs. */
export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});
