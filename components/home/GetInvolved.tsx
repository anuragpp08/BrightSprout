import type { Dictionary } from "@/content/types";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/ButtonLink";

type GetInvolvedProps = {
  content: Dictionary["home"]["getInvolved"];
};

export function GetInvolved({ content }: GetInvolvedProps) {
  return (
    <Section id={content.id} title={content.title} intro={content.intro} tone="mist">
      <ul className="grid gap-4 sm:grid-cols-2">
        {content.cards.map((card) => (
          <li key={card.title} className="flex flex-col rounded-3xl bg-paper p-6 shadow-sm">
            <h3 className="text-2xl text-ink">{card.title}</h3>
            <p className="mt-3 flex-1 leading-relaxed text-muted">{card.body}</p>
            <div className="mt-6">
              <ButtonLink href={card.href} variant="secondary">
                {card.action}
              </ButtonLink>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
