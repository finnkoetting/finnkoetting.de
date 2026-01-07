export type Project = {
    slug: string;
    title: string;
    desc: string;
    tags: string[];
    year?: string;
    stack?: string[];
    highlights?: string[];
    link?: string;
};

const thisYear = new Date().getFullYear();

export const PROJECTS: Project[] = [
    {
        slug: "ticketer",
        title: "Ticketer",
        desc: "Programmierung eines Discord-Ticket-Systems mit benutzerfreundlicher Oberfläche und effizienten Verwaltungsfunktionen.",
        tags: ["Discord Bot", "Support System", "TypeScript"],
        year: `2023–${thisYear}`,
        stack: ["Next.js", "Tailwind", "Figma", "Node.js", "TypeScript", "MongoDB"],
        highlights: ["Benutzerfreundliche Oberfläche", "Performance-optimiert", "Simple Verwaltung"],
        link: "https://ticketer.bot/",
    },
    {
        slug: "wouldyou",
        title: "Would You",
        desc: "Entwicklung des interaktiven \"Higher-Lower\"-Spiels für den Discord-Bot WouldYouBot – mit Fokus auf Performance und Nutzererlebnis.",
        tags: ["Discord Bot", "Gaming", "TypeScript"],
        year: `2022–${thisYear}`,
        stack: ["Next.js", "Tailwind", "Figma", "Node.js", "TypeScript", "MongoDB"],
        highlights: ["Interaktives Spiel", "Performance-optimiert", "Hohe Nutzerzahlen"],
        link: "https://wouldyoubot.gg/",
    },
    {
        slug: "tribe-island",
        title: "Tribe Island",
        desc: "Gestaltung und technische Umsetzung der Website für das Indie-Spiel Tribe Island – Fokus auf Performance und ansprechendes Design.",
        tags: ["Webentwicklung", "Indie Game", "Performance"],
        year: `2026`,
        stack: ["Next.js"],
        highlights: ["Ansprechendes Design", "Performance-optimiert", "Spielpräsentation"],
        link: "",
    },
    {
        slug: "casa-raschke",
        title: "Casa Raschke",
        desc: "Entwurf und Planung einer Vereinswebsite mit modernem Design – inklusive Konzept für ein Forum.",
        tags: ["Webdesign", "Verein", "Forum"],
        year: `2025`,
        stack: ["Figma"],
        highlights: ["Modernes Design", "Forum-Konzept", "Community-Fokus"],
    }
];

export const getProject = (slug: string) => {
    const s = decodeURIComponent(slug).trim().toLowerCase();
    return PROJECTS.find((p) => p.slug.trim().toLowerCase() === s);
};
