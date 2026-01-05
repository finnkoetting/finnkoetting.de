import Link from "next/link";
import { Code2, Gauge, Wrench } from "lucide-react";

const SERVICES = [
    {
        title: "Webentwicklung",
        desc: "Moderne Next.js-Websites mit sauberer Struktur, hoher Performance und guter Wartbarkeit.",
        Icon: Code2,
    },
    {
        title: "Performance & SEO",
        desc: "Technisch saubere Umsetzung mit Fokus auf Ladezeiten, Core Web Vitals und Auffindbarkeit.",
        Icon: Gauge,
    },
    {
        title: "Automatisierung",
        desc: "Individuelle Tools, APIs und Workflows zur Vereinfachung interner Prozesse.",
        Icon: Wrench,
    },
];

export default function Services() {
    return (
        <section>
            <div className="mx-auto max-w-6xl px-4 py-14 sm:px-8 sm:py-20">
                <div className="max-w-2xl">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                        Leistungen
                    </h2>
                    <p className="mt-2 text-muted-foreground">
                        Klarer Fokus auf Technik, Qualität und langfristige Wartbarkeit.
                    </p>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map(({ title, desc, Icon }) => (
                        <div
                            key={title}
                            className="rounded-2xl border bg-background p-6 transition hover:bg-muted/40"
                        >
                            <div className="flex items-center gap-3">
                                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-background">
                                    <Icon className="h-5 w-5 text-foreground" />
                                </span>
                                <h3 className="text-base font-medium">{title}</h3>
                            </div>

                            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                                {desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-10">
                    <Link
                        href="/services"
                        className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
                    >
                        Alle Leistungen ansehen
                    </Link>
                </div>
            </div>
        </section>
    );
}
