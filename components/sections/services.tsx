import Link from "next/link";
import { Code2, Server, Brain, ArrowRight, CheckCircle2, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const SERVICES = [
    {
        title: "Webdesign & Entwicklung",
        desc: "Moderne Websites und Web-Apps, die schnell laden, sauber aufgebaut sind und Kunden überzeugen – Design und Code aus einer Hand.",
        Icon: Code2,
        features: ["Next.js Frontends", "Responsive & UI/UX", "Skalierbar erweiterbar"],
    },
    {
        title: "Hosting & Betrieb",
        desc: "Ich bringe dein Projekt stabil online und halte es sicher am Laufen – Setup, Updates, Backups und Monitoring inklusive.",
        Icon: Server,
        features: ["Setup & Deployment", "Updates & Backups", "Monitoring & Sicherheit"],
    },
    {
        title: "Softwareentwicklung",
        desc: "Individuelle Lösungen, Erweiterungen und technische Optimierung – pragmatisch umgesetzt, ohne Umwege.",
        Icon: Brain,
        features: ["Features & Integrationen", "Debugging & Fixes", "Technische Beratung"],
    },
];

export default function Services() {
    return (
        <section id="services" className="relative">
            {/* Subtle divider */}
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />

            <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-40">
                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-medium uppercase tracking-widest text-primary">
                        Dienstleistungen
                    </p>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Was ich anbiete
                    </h2>
                    <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                        Klarer Fokus auf saubere Technik, Sicherheit und Lösungen, die lange tragfähig bleiben.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="mt-10 sm:mt-14 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map(({ title, desc, Icon, features }) => (
                        <div
                            key={title}
                            className="group relative flex flex-col rounded-3xl card bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            {/* Icon */}
                            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                <Icon className="h-7 w-7" />
                            </div>

                            <h3 className="text-xl font-semibold">{title}</h3>

                            <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">
                                {desc}
                            </p>

                            <ul className="mt-8 space-y-3">
                                {features.map((f) => (
                                    <li
                                        key={f}
                                        className="flex items-center gap-3 text-muted-foreground"
                                    >
                                        <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div
                        key={"contact"}
                        className="group relative flex flex-col rounded-3xl card bg-card p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:col-span-2 lg:col-span-3"
                    >
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center">
                            {/* Icon */}
                            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                <MailIcon className="h-7 w-7" />
                            </div>

                            <div className="flex flex-col gap-0">
                                <h3 className="text-xl font-semibold">Kontakt</h3>

                                <p className="mt-1 flex-1 leading-relaxed text-muted-foreground">
                                    Ich konnte Ihr Interesse wecken? Lassen Sie uns über Ihr Projekt sprechen und die nächsten Schritte planen.
                                </p>
                            </div>
                        </div>

                        <Button asChild size="lg" className="rounded-xl text-base w-fit mt-8">
                            <Link href="/contact">
                                Jetzt Kontaktieren
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <Button asChild variant="outline" size="lg" className="rounded-xl">
                        <Link href="/services">
                            Alle Leistungen ansehen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
