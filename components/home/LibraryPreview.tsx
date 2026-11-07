import Link from "next/link";
import type { Dictionary } from "@/content/types";
import { Section } from "@/components/ui/Section";

type LibraryPreviewProps = {
  content: Dictionary["home"]["library"];
};

export function LibraryPreview({ content }: LibraryPreviewProps) {
  return (
    <Section id={content.id} title={content.title} intro={content.intro} tone="mist">
      <ul className="grid gap-4 lg:grid-cols-3">
        {content.articles.map((article) => (
          <li key={article.title} className="flex flex-col rounded-3xl bg-paper p-6 shadow-sm">
            <p className="text-sm font-semibold text-grove">
              <span className="sr-only">{content.ageLabel}: </span>
              {article.age}
              <span aria-hidden="true"> · </span>
              <span className="font-medium text-muted">{article.topic}</span>
            </p>
            <h3 className="mt-3 text-2xl text-ink">{article.title}</h3>
            <p className="mt-3 flex-1 leading-relaxed text-muted">{article.summary}</p>
          </li>
        ))}
      </ul>
      <p className="mt-8">
        <Link
          href={content.viewAllHref}
          className="font-semibold text-grove underline decoration-grove/40 underline-offset-4"
        >
          {content.viewAll}
        </Link>
      </p>
    </Section>
  );
}
