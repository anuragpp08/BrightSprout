import type { Metadata } from "next";
import { ComingSoon } from "@/components/site/ComingSoon";
import type { Dictionary } from "@/content/types";
import { getDictionary } from "@/lib/i18n";

type PageKey = keyof Dictionary["pages"];

/** Builds a placeholder route from the English dictionary so new pages stay thin. */
export function placeholderPage(key: PageKey) {
  const dictionary = getDictionary("en");
  const page = dictionary.pages[key];
  const anchors = "anchors" in page ? page.anchors : undefined;

  const metadata: Metadata = {
    title: page.title,
    description: page.description,
  };

  function Page() {
    return (
      <ComingSoon
        heading={page.heading}
        body={page.body}
        anchors={anchors}
        comingNext={dictionary.site.comingNext}
        backHome={dictionary.site.backHome}
      />
    );
  }

  return { metadata, Page };
}
