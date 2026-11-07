import { navigation } from "./navigation";

export const footer = {
  blurb:
    "A charitable trust in Mumbai supporting parents as they raise healthy, happy children.",
  quickLinksLabel: "Quick links",
  contactLabel: "Contact",
  addressLabel: "Address",
  address: "Mumbai, Maharashtra, India",
  emailLabel: "Email",
  email: "To be added",
  phoneLabel: "Phone",
  phone: "To be added",
  socialLabel: "Social media",
  socialNote: "Profile links will be added here.",
  social: [
    { name: "Instagram" },
    { name: "Facebook" },
    { name: "YouTube" },
  ],
  privacy: { href: "/privacy", label: "Privacy policy" },
  terms: { href: "/terms", label: "Terms of use" },
  /** Update this each January. A live clock cannot be prerendered. */
  year: "2026",
  rights: "Bright Sprout. A charitable trust in Mumbai, India.",
  links: navigation,
};
