export type Project = {
    slug: string;
    title: string;
    desc: string;
    tags: string[];
    year?: string;
    stack?: string[];
    highlights?: string[];
};

export const PROJECTS: Project[] = [
    {
        slug: "ticketer",
        title: "Ticketer",
        desc: "Discord Ticket-System mit Dashboard, Rollenlogik und Premium-Funktionen.",
        tags: ["SaaS", "Discord", "Dashboard"],
        year: "2025–2026",
        stack: ["Next.js", "TypeScript", "Discord.js", "MongoDB"],
        highlights: ["Rollen-/Rechte-Logik", "Premium Pläne", "Dashboard & Automationen"],
    },
    {
        slug: "auftragsmanagement",
        title: "Auftragsmanagement",
        desc: "Interne Web-App zur Verwaltung von Aufträgen, Status und Kundenabläufen.",
        tags: ["Web-App", "Prozess", "UI/UX"],
        year: "2026",
        stack: ["Next.js", "TypeScript", "Tailwind"],
        highlights: ["Status-Funnel", "Kundenübersicht", "Saubere UI-Struktur"],
    },
    {
        slug: "automations",
        title: "Automations",
        desc: "Workflows und Integrationen zur Automatisierung wiederkehrender Aufgaben.",
        tags: ["API", "Ops", "Automation"],
        year: "2026",
        stack: ["Node.js", "APIs", "Webhooks"],
        highlights: ["Integrationen", "Automatisierte Abläufe", "Weniger manuelle Arbeit"],
    },
];

export const getProject = (slug: string) => {
  const s = decodeURIComponent(slug).trim().toLowerCase();
  return PROJECTS.find((p) => p.slug.trim().toLowerCase() === s);
};
