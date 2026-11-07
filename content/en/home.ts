/**
 * Home page copy. Sample articles and kits are layout examples.
 * Do not present them as published programmes or measured results.
 */
export const home = {
  hero: {
    title: "Support for parents raising healthy, happy children.",
    body: "Bright Sprout is a Mumbai trust that offers parenting guidance, counselling, workshops, and age-wise kits for play and learning. We walk beside parents. We do not judge them.",
    imageAlt:
      "Image placeholder. Replace this with a photograph the trust has permission to use.",
    imageCaption: "Photograph placeholder",
    actions: [
      { href: "/support", label: "Get Support", variant: "primary" as const },
      { href: "/kits", label: "Explore Kits", variant: "secondary" as const },
      {
        href: "/get-involved",
        label: "Donate or Volunteer",
        variant: "clay" as const,
      },
    ],
  },
  whatWeDo: {
    id: "what-we-do",
    title: "Who we hope to walk with",
    intro:
      "We are here for parents and caregivers of children from birth to about twelve, in Mumbai and beyond, who want calm, practical company. You do not need to have everything figured out.",
    cards: [
      {
        title: "Awareness",
        body: "We share clear, kind information about everyday parenting, play, and children's emotional growth.",
      },
      {
        title: "Guidance and counselling",
        body: "A listening space for questions about routines, behaviour, and family life. You choose what feels useful. Nothing is forced.",
      },
      {
        title: "Workshops",
        body: "Small groups where parents can learn together, ask questions, and leave with a few ideas to try at home.",
      },
      {
        title: "Developmental kits",
        body: "Age-wise collections of toys, books, and activity material that encourage play, language, and time together.",
      },
    ],
  },
  howItWorks: {
    id: "how-it-works",
    title: "How it can work for a parent",
    intro:
      "There is no single right order. Start wherever you are. Each step is an offer, not a requirement.",
    stepLabel: "Step",
    steps: [
      {
        title: "Learn",
        body: "Browse short articles and videos in the parenting library, sorted by age and topic.",
      },
      {
        title: "Check in",
        body: "When the check-in tool is ready, use it as a gentle way to notice what your child is exploring. It will not be a test or a diagnosis.",
      },
      {
        title: "Get guidance",
        body: "Talk with a counsellor or join a workshop if you would like another person to think with you.",
      },
      {
        title: "Receive support",
        body: "Take home a few ideas, or a kit chosen for your child's age, to use in ordinary moments of play.",
      },
    ],
  },
  library: {
    id: "library",
    title: "From the parenting library",
    intro:
      "These three cards are samples, so you can see how articles will look. They are not the full library yet.",
    viewAll: "View all articles",
    viewAllHref: "/library",
    ageLabel: "Age group",
    articles: [
      {
        title: "Sitting together with a picture book",
        age: "0–2",
        topic: "Reading aloud",
        summary:
          "A few unhurried ways to share books with a baby or toddler, including when they want to chew the pages or turn them too fast.",
      },
      {
        title: "Play that follows your child's idea",
        age: "3–5",
        topic: "Play",
        summary:
          "Joining a preschooler's game, rather than directing it, can support imagination and the feeling that their ideas matter.",
      },
      {
        title: "Screens in the school years",
        age: "6–8 · 9–12",
        topic: "Screen habits",
        summary:
          "Ideas for agreeing family screen habits that leave room for sleep, play, and conversation. Every household finds its own balance.",
      },
    ],
  },
  kits: {
    id: "kits",
    title: "Kits by age",
    intro:
      "Sample kits for the layout. Each real kit will say which kind of play it supports. We do not claim a kit will change a child's development on its own.",
    viewAll: "View all kits",
    viewAllHref: "/kits",
    items: [
      {
        name: "Little Sprout kit",
        age: "0–2",
        skill: "Supports sensory play and shared attention between a child and a caregiver.",
      },
      {
        name: "Story and pretend kit",
        age: "3–5",
        skill: "Encourages language, stories, and imaginative play.",
      },
      {
        name: "Curious learner kit",
        age: "6–8",
        skill: "Supports reading together, making things, and settling into an activity.",
      },
    ],
  },
  approach: {
    id: "approach",
    title: "Our approach",
    intro:
      "We lean on ideas that families and child-development practice have trusted for a long time. We offer them as support, not as rules, and not as a promise of any particular outcome.",
    points: [
      {
        title: "Responsive parenting",
        body: "Noticing a child's cues, and responding when you can. Missed moments are part of ordinary family life.",
      },
      {
        title: "Play",
        body: "Everyday play is one of the ways children learn, practise feelings, and feel close to the people they love.",
      },
      {
        title: "Reading aloud",
        body: "Sharing stories supports language and is a quiet way to be together, even for a few minutes.",
      },
      {
        title: "Sleep",
        body: "A predictable evening rhythm can help a household feel more settled. Families differ, and that is all right.",
      },
      {
        title: "Nutrition",
        body: "Regular meals and familiar foods are part of daily care. We do not prescribe diets or judge what is on the plate.",
      },
      {
        title: "Healthy screen habits",
        body: "Agreed breaks and sometimes watching together, chosen by the family. Shame does not help anyone change a habit.",
      },
    ],
  },
  impact: {
    id: "impact",
    title: "Impact",
    intro:
      "This block shows where numbers and parent stories will sit. Nothing below is a real result.",
    badge: "Placeholder",
    counters: [
      {
        label: "Families supported",
        value: "—",
        note: "Not a real figure. A checked number will replace this dash.",
      },
      {
        label: "Workshops held",
        value: "—",
        note: "Not a real figure. A checked number will replace this dash.",
      },
      {
        label: "Kits shared",
        value: "—",
        note: "Not a real figure. A checked number will replace this dash.",
      },
    ],
    storiesLabel: "Stories",
    testimonials: [
      {
        quote:
          "A parent story will be placed here only after the family has agreed in writing. This sentence is a layout placeholder.",
        attribution: "Placeholder — no name, no place",
      },
      {
        quote:
          "A second story card, also empty on purpose. Please do not add a quotation that looks like a real person.",
        attribution: "Placeholder — no name, no place",
      },
    ],
    moreHref: "/impact",
    moreLabel: "How we will report impact",
  },
  getInvolved: {
    id: "get-involved",
    title: "Get involved",
    intro:
      "There will be a few ways to help. None of them take payment or sign-ups yet.",
    cards: [
      {
        title: "Donate",
        body: "Gifts will help us offer guidance and kits. Bank and tax details will be published before any money is collected.",
        href: "/get-involved#donate",
        action: "Donation details",
      },
      {
        title: "Sponsor a kit",
        body: "Later, you will be able to choose an age-wise kit for a family. That option is not open yet.",
        href: "/get-involved#sponsor",
        action: "Kit sponsorship",
      },
      {
        title: "Volunteer",
        body: "Time, skills, and a kind presence will be welcome. A volunteer form will come in a later step.",
        href: "/get-involved#volunteer",
        action: "Volunteering",
      },
      {
        title: "Partner with us",
        body: "Schools, clinics, and community groups will be able to talk with us about workshops and outreach.",
        href: "/get-involved#partner",
        action: "Partnerships",
      },
    ],
  },
  newsletter: {
    id: "newsletter",
    title: "Notes for parents",
    intro:
      "Occasional letters with library updates and workshop dates. When this is connected, you will be able to leave the list whenever you wish.",
    label: "Email address",
    placeholder: "you@example.com",
    button: "Join the list",
    note: "This form is not connected yet. Nothing you type is sent or stored.",
  },
  trust: {
    id: "trust",
    title: "Trust and transparency",
    intro:
      "These fields are waiting for the trust's official details. Do not treat the blanks as registrations.",
    facts: [
      { label: "Registration number", value: "To be added" },
      { label: "12A", value: "To be added" },
      { label: "80G", value: "To be added" },
      { label: "Trustees", value: "Names will be listed here" },
      { label: "Advisory panel", value: "Names will be listed here" },
    ],
    disclaimer:
      "Bright Sprout shares educational information for parents and caregivers. It is not a substitute for professional medical, mental health, or emergency care. If you are worried about a child's health or safety, please contact a qualified professional or local emergency services.",
  },
};
