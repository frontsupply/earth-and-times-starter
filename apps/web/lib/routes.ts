export type NavRoute = {
  href: string;
  label: string;
  description: string;
  children?: readonly NavRoute[];
};

export const topLevelRoutes = [
  {
    href: "/",
    label: "Clock",
    description: "Immersive observatory view and biblical time state.",
  },
  {
    href: "/today",
    label: "Today",
    description: "A daily interpretation layer for the current moment.",
  },
  {
    href: "/times",
    label: "Times",
    description: "Chronology, calendar logic, feasts, and convergence.",
    children: [
      {
        href: "/times/chronology",
        label: "Chronology",
        description: "Adamic timeline, eras, and Anno Mundi structure.",
      },
      {
        href: "/times/appointed-times",
        label: "Appointed Times",
        description: "Calendar basics, feasts, and sacred rhythms.",
      },
      {
        href: "/times/convergence",
        label: "Convergence",
        description: "Patterns, boundary points, and current interpretation.",
      },
    ] as const,
  },
  {
    href: "/earth",
    label: "Earth",
    description: "Scriptural cosmology, structure, and luminaries.",
    children: [
      {
        href: "/earth/scriptural-architecture",
        label: "Scriptural Architecture",
        description: "A unified overview of the biblical world structure.",
      },
      {
        href: "/earth/firmament",
        label: "Firmament",
        description: "Rakia, the vault, and what is above.",
      },
      {
        href: "/earth/waters-above-and-below",
        label: "Waters Above and Below",
        description: "Tehom, separation, and layered creation.",
      },
      {
        href: "/earth/foundations-and-pillars",
        label: "Foundations and Pillars",
        description: "Texts describing the stability of the earth.",
      },
      {
        href: "/earth/fixed-earth",
        label: "Fixed Earth",
        description: "Witness passages on motion, stability, and frame.",
      },
      {
        href: "/earth/luminaries",
        label: "Luminaries",
        description: "Sun, moon, and stars within the heavens.",
      },
    ] as const,
  },
  {
    href: "/scripture",
    label: "Scripture",
    description: "Verse explorer by topic, lane, and theme.",
  },
  {
    href: "/studies",
    label: "Studies",
    description: "Long-form foundational and chronological studies.",
  },
  {
    href: "/about",
    label: "About",
    description: "What the project is and why it exists.",
  },
  {
    href: "/method",
    label: "Method",
    description: "How the app separates computation and interpretation.",
  },
  {
    href: "/glossary",
    label: "Glossary",
    description: "Shared vocabulary for recurring scriptural concepts.",
  },
  {
    href: "/sources",
    label: "Sources",
    description: "Source transparency for scripture, studies, and data.",
  },
] as const satisfies readonly NavRoute[];

export const navigationSections = [
  {
    title: "Primary",
    routes: topLevelRoutes.slice(0, 6),
  },
  {
    title: "Reference",
    routes: topLevelRoutes.slice(6),
  },
] as const;
