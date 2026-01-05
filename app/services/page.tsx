import Link from "next/link";
import { Code2, Gauge, Wrench, ArrowUpRight } from "lucide-react";

const SERVICES = [
    {
        title: "Webentwicklung",
        desc: "Moderne Next.js-Websites und Web-Apps. Saubere Struktur, wartbar, skalierbar.",
        points: ["Landingpages", "Web-Apps", "Dashboards"],
        Icon: Code2,
    },
    {
        title: "Performance & SEO",
        desc: "Technisch saubere Umsetzung mit Fokus auf Core Web Vitals und Auffindbarkeit.",
        points: ["Core Web Vitals", "On-Page SEO", "Technisches SEO"],
        Icon: Gauge,
    },
    {
        title: "Automatisierung",
        desc: "Tools, APIs und Workflows zur Vereinfachung interner Prozesse und Abläufe.",
        points: ["Integrationen", "APIs & Webhooks", "Workflows"],
        Icon: Wrench,
    },
];

export default function ServicesPage() {
    return (
        <main className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-16">
            <div className="max-w-2xl">
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    Services
                </h1>
                <p className="mt-3 text-muted-foreground">
                    Klarer Fokus auf Qualität, Struktur und langfristige Wartbarkeit.
                </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {SERVICES.map(({ title, desc, points, Icon }) => (
                    <section key={title} className="rounded-2xl border bg-background p-6">
                        <div className="flex items-center gap-3">
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-background">
                                <Icon className="h-5 w-5" />
                            </span>
                            <h2 className="text-base font-medium">{title}</h2>
                        </div>

                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                            {desc}
                        </p>

                        <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                            {points.map((p) => (
                                <li key={p} className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50" />
                                    {p}
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>

            <div className="mt-12 rounded-2xl border bg-background p-6 sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="max-w-2xl">
                        <h2 className="text-base font-medium">Projekt besprechen</h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Kurze Anfrage reicht. Wir melden uns mit einem Vorschlag für die nächsten Schritte.
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
                    >
                        Kontakt <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </main>
    );
}
