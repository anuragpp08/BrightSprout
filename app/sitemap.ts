import type { MetadataRoute } from "next";
import { getDictionary } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const { site, navigation, footer } = getDictionary("en");
  const paths = [
    ...navigation.map((item) => item.href),
    footer.privacy.href,
    footer.terms.href,
  ];

  return [...new Set(paths)].map((path) => ({
    url: new URL(path, site.url).toString(),
  }));
}
