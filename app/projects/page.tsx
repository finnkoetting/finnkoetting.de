import Link from "next/link";
import { ArrowUpRight, ArrowRight, Calendar, ExternalLink, CheckCircle2 } from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
    const featuredProject = PROJECTS[0];
    const otherProjects = PROJECTS.slice(1);

    return (
        <main className="relative w-full overflow-hidden">
            {/* Background shapes */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -right-1/4 -top-1/4 h-150 w-150 rounded-full bg-primary/3 blur-3xl" />
                <div className="absolute -left-1/4 bottom-0 h-125 w-125 rounded-full bg-accent/3 blur-3xl" />
            </div>

            {/* Hero/Header */}
            <section className="mx-auto w-full max-w-screen-2xl px-0 py-32 lg:py-20">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Meine Projekte</h1>

                    <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                        Ausgewählte Arbeiten aus Webentwicklung, Bot-Entwicklung und Automatisierung —
                        mit Fokus auf Struktur, Performance und Wartbarkeit.
                    </p>
                </div>
            </section>

            {/* Featured Project */}
            <section className="mx-auto w-full max-w-screen-2xl px-0 pb-20">
                <div className="mx-auto w-full max-w-screen-2xl">
                    <h2 className="text-sm font-medium uppercase tracking-widest text-primary mb-6">Aktuelles Projekt</h2>

                    <Link
                        href={`/projects/${featuredProject.slug}`}
                        className="group relative block rounded-3xl border border-gray-200 bg-card p-8 sm:p-10 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-primary/20"
                    >
                        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                                        <Calendar className="h-3 w-3" />
                                        {featuredProject.year}
                                    </span>
                                    {featuredProject.link && (
                                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                                            <ExternalLink className="h-3 w-3" />
                                            Live
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-2xl font-bold sm:text-3xl">{featuredProject.title}</h3>
                                <p className="mt-4 text-muted-foreground leading-relaxed">{featuredProject.desc}</p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {featuredProject.tags.map((t) => (
                                        <span key={t} className="inline-flex items-center rounded-full bg-muted/60 px-3 py-1 text-xs text-muted-foreground">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                {featuredProject.stack && (
                                    <div>
                                        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">Tech Stack</p>
                                        <div className="flex flex-wrap gap-2">
                                            {featuredProject.stack.map((s) => (
                                                <span key={s} className="inline-flex items-center rounded-lg border bg-background px-3 py-1.5 text-sm font-medium">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {featuredProject.highlights && (
                                    <div>
                                        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">Highlights</p>
                                        <ul className="space-y-2">
                                            {featuredProject.highlights.map((h) => (
                                                <li key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div className="pt-4">
                                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:underline">
                                        Mehr erfahren <ArrowRight className="h-4 w-4" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Divider */}
                <div className="mx-auto w-full max-w-screen-2xl h-px bg-linear-to-r from-transparent via-border to-transparent" />

            {/* Other Projects Grid */}
            <section className="mx-auto w-full max-w-screen-2xl px-0 py-32 lg:py-20">
                <div className="mx-auto w-full max-w-screen-2xl">
                    <h2 className="text-sm font-medium uppercase tracking-widest text-primary mb-8">Weitere Projekte</h2>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {otherProjects.map((p) => (
                            <Link
                                key={p.slug}
                                href={`/projects/${p.slug}`}
                                className="group relative flex flex-col rounded-2xl border border-gray-200 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/20"
                            >
                                <div className="flex items-start justify-between gap-3 mb-4">
                                    <span className="inline-flex items-center gap-1 rounded-full bg-muted/60 px-2 py-1 text-xs text-muted-foreground">
                                        <Calendar className="h-3 w-3" />
                                        {p.year}
                                    </span>

                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border bg-background text-muted-foreground transition group-hover:border-primary/40 group-hover:text-foreground">
                                        <ArrowUpRight className="h-4 w-4" />
                                    </span>
                                </div>

                                <h3 className="text-lg font-semibold">{p.title}</h3>
                                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {p.tags.slice(0, 2).map((t) => (
                                        <span key={t} className="inline-flex items-center rounded-full bg-muted/60 px-2 py-1 text-xs text-muted-foreground">
                                            {t}
                                        </span>
                                    ))}
                                    {p.tags.length > 2 && (
                                        <span className="inline-flex items-center rounded-full bg-muted/60 px-2 py-1 text-xs text-muted-foreground">
                                            +{p.tags.length - 2}
                                        </span>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative mx-auto w-full max-w-screen-2xl px-0 pb-40">
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />

                <div className="mx-auto max-w-3xl pt-20 text-center">
                    <h2 className="text-2xl font-semibold">Eigenes Projekt starten?</h2>
                    <p className="mt-4 text-muted-foreground">
                        Lass uns über dein Vorhaben sprechen. Ich melde mich mit einem konkreten Vorschlag.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button asChild size="lg" className="rounded-xl">
                            <Link href="/contact">
                                Projekt besprechen
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>

                        <Button asChild variant="outline" size="lg" className="rounded-xl">
                            <Link href="/services">
                                Services ansehen
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
