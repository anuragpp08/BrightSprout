import type { MetadataRoute } from "next";
import { getDictionary } from "@/lib/i18n";

export default function robots(): MetadataRoute.Robots {
  const { site } = getDictionary("en");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", site.url).toString(),
  };
}
