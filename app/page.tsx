import { Approach } from "@/components/home/Approach";
import { GetInvolved } from "@/components/home/GetInvolved";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Impact } from "@/components/home/Impact";
import { KitsPreview } from "@/components/home/KitsPreview";
import { LibraryPreview } from "@/components/home/LibraryPreview";
import { Newsletter } from "@/components/home/Newsletter";
import { TrustStrip } from "@/components/home/TrustStrip";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { getDictionary } from "@/lib/i18n";

export default function HomePage() {
  const { home } = getDictionary("en");

  return (
    <>
      <Hero content={home.hero} />
      <WhatWeDo content={home.whatWeDo} />
      <HowItWorks content={home.howItWorks} />
      <LibraryPreview content={home.library} />
      <KitsPreview content={home.kits} />
      <Approach content={home.approach} />
      <Impact content={home.impact} />
      <GetInvolved content={home.getInvolved} />
      <Newsletter content={home.newsletter} />
      <TrustStrip content={home.trust} />
    </>
  );
}
