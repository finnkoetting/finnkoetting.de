
import Link from "next/link";
import { Code2, Gauge, Wrench, ArrowRight, CheckCircle2, Server, Bot, Shield, Calendar, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const SERVICES = [
    {
        title: "Webentwicklung",
        desc: "Moderne Websites und Web-Apps mit Next.js – sauber strukturiert, performant und langfristig wartbar.",
        points: [
            "Landingpages & Corporate Sites",
            "Web-Apps & Dashboards",
            "E-Commerce & Portale"
        ],
        Icon: Code2,
    },
    {
        title: "Performance & SEO",
        desc: "Technisch optimierte Umsetzung mit Fokus auf Ladezeiten, Core Web Vitals und Suchmaschinen.",
        points: [
            "Core Web Vitals Optimierung",
            "Technisches & On-Page SEO",
            "Barrierefreiheit (a11y)"
        ],
        Icon: Gauge,
    },
    {
        title: "Automatisierung & APIs",
        desc: "Individuelle Automatisierungen zur Reduktion manueller Arbeit und Fehlerquellen.",
        points: [
            "API-Integrationen",
            "Webhooks & Workflows",
            "Individuelle Tools"
        ],
        Icon: Wrench,
    },
    {
        title: "Backend & SaaS",
        desc: "Skalierbare Backends und SaaS-Lösungen mit sauberer Architektur.",
        points: [
            "REST & Auth-Systeme",
            "Datenbanken & Modelle",
            "Dashboards"
        ],
        Icon: Server,
    },
    {
        title: "Discord & Bots",
        desc: "Maßgeschneiderte Discord-Bots und Community-Systeme für Support, Automatisierung und Wachstum.",
        points: [
            "Individuelle Bot-Features",
            "Konfiguration & Deployment",
            "Dashboard-Integration"
        ],
        Icon: Bot,
    },
    {
        title: "Hosting & Wartung",
        desc: "Zuverlässiger Betrieb deiner Anwendung – sicher, schnell und wartungsarm.",
        points: [
            "Server & Deployment",
            "Monitoring & Updates",
            "Backups & Sicherheit"
        ],
        Icon: Shield,
    },
];


export default function ServicesPage() {
    return (
        <main className="relative w-full overflow-hidden">
            {/* Background shapes like Hero */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            >
                <div className="absolute -right-1/4 -top-1/4 h-150 w-150 rounded-full bg-primary/3 blur-3xl" />
                <div className="absolute -left-1/4 bottom-0 h-125 w-125 rounded-full bg-accent/3 blur-3xl" />
            </div>

            <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-20">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Dienstleistungen
                    </h1>
                    <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                        Klarer Fokus auf Qualität, Struktur und langfristige Wartbarkeit —
                        ich liefere Lösungen, die im Alltag zuverlässig funktionieren.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="mt-10 sm:mt-16 grid gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map(({ title, desc, points, Icon }) => (
                        <article
                            key={title}
                            className="group relative flex flex-col rounded-3xl card bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/20"
                        >
                            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                <Icon className="h-7 w-7" />
                            </div>

                            <h2 className="text-xl font-semibold">{title}</h2>

                            <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">{desc}</p>

                            <ul className="mt-6 space-y-3">
                                {points.map((p) => (
                                    <li key={p} className="flex items-center gap-3 text-sm text-muted-foreground">
                                        <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                                        {p}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>

            <div className="mx-auto max-w-6xl px-4 sm:px-8 h-px bg-linear-to-r from-transparent via-border to-transparent" />

            <section id="process" className="relative">
                <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 mt-10">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-semibold">So läuft&apos;s ab</h2>
                        <p className="mt-2 text-muted-foreground">Ein klarer Ablauf: transparent, planbar und zuverlässig — so führe ich Projekte von der Idee zum Livegang.</p>
                    </div>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
                        <div className="flex flex-col items-start gap-4 rounded-2xl card bg-card p-6">
                            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Calendar className="h-5 w-5" />
                            </div>
                            <h3 className="text-lg font-semibold">Erstgespräch</h3>
                            <p className="text-sm text-muted-foreground">Kurzes Kennenlernen: Ziele, Umfang und Erwartungen klären.</p>
                        </div>

                        <div className="flex flex-col items-start gap-4 rounded-2xl card bg-card p-6">
                            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <FileText className="h-5 w-5" />
                            </div>
                            <h3 className="text-lg font-semibold">Konzept & Angebot</h3>
                            <p className="text-sm text-muted-foreground">Konkretes Konzept, Zeitplan und transparentes Angebot.</p>
                        </div>

                        <div className="flex flex-col items-start gap-4 rounded-2xl card bg-card p-6">
                            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Code2 className="h-5 w-5" />
                            </div>
                            <h3 className="text-lg font-semibold">Umsetzung</h3>
                            <p className="text-sm text-muted-foreground">Entwicklung, Tests und regelmäßige Reviews — transparent und iterativ.</p>
                        </div>

                        <div className="flex flex-col items-start gap-4 rounded-2xl card bg-card p-6">
                            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Shield className="h-5 w-5" />
                            </div>
                            <h3 className="text-lg font-semibold">Live & Wartung</h3>
                            <p className="text-sm text-muted-foreground">Rollout, Monitoring und kontinuierliche Pflege nach Bedarf.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="mx-auto max-w-6xl px-4 sm:px-8 h-px bg-linear-to-r from-transparent via-border to-transparent mt-20" />

            {/* CTA */}
            <div className="mt-16 sm:mt-24 lg:mt-30 mb-16 sm:mb-24 lg:mb-30 px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6 text-center">
                <h2 className="text-2xl font-semibold">Projekt besprechen?</h2>
                <p className="max-w-lg text-muted-foreground">
                    Kurze Anfrage reicht. Ich melde mich mit einem Vorschlag für die nächsten Schritte.
                </p>
                <Button asChild size="lg" className="rounded-xl">
                    <Link href="/contact">
                        Kontakt aufnehmen
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </main >
    );
}
