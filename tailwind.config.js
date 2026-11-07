/**
 * Warm Grove — the Bright Sprout colour palette.
 *
 * Cream and paper keep the page calm. Grove green is for text emphasis,
 * links, and primary actions. Clay is reserved for giving (the Donate button)
 * so it stays easy to find. Gold is a decorative accent only; do not use it
 * for small text.
 *
 * Fonts (loaded in lib/fonts.ts, wired in app/globals.css):
 * - Fraunces — headings. A soft serif that feels warm and literary.
 * - Nunito Sans — body and interface. Open, readable, and comfortable on a phone.
 *
 * Tailwind v4 reads this file through `@config` in app/globals.css.
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        cream: "#F7F3EC",
        paper: "#FFFCF8",
        sand: "#EFE6D8",
        mist: "#E5EFE8",
        line: "#DDD2C3",
        ink: "#1C2B24",
        muted: "#3E5148",
        grove: "#1E4D3A",
        "grove-dark": "#163C2D",
        clay: "#8C3F2E",
        "clay-dark": "#732F22",
        "clay-soft": "#F8E8E2",
        gold: "#A6843D",
      },
    },
  },
};
