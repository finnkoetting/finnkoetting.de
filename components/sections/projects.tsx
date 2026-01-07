import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

import { PROJECTS } from "@/lib/projects";

export default function Projects() {
    return (
        <section id="projects" className="relative">
            {/* Subtle divider */}
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />

            <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32 lg:py-55">
                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-medium uppercase tracking-widest text-primary">
                        Erfahrungen
                    </p>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Ausgewählte Projekte
                    </h2>
                    <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                        Mit verschiedenen Unternehmen konnte ich bereits wertvolle Projekte erfolgreich umsetzen.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="mt-10 sm:mt-14 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {PROJECTS.slice(0, 2).map((p) => (
                        <div
                            key={p.title}
                            className="group relative flex flex-col rounded-3xl card bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            {/* Accent bar */}
                            <div className="absolute left-0 top-0 h-full w-1 rounded-l-3xl from-primary via-primary/60 to-accent/50" />

                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-xl font-semibold">{p.title}</h3>
                                        {p.year && (
                                            <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                                                {p.year}
                                            </span>
                                        )}
                                    </div>
                                    <p className="mt-4 leading-relaxed text-muted-foreground">
                                        {p.desc}
                                    </p>
                                </div>

                                {p.link ? (
                                    <a
                                        href={p.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border bg-background text-muted-foreground transition hover:border-primary/40 hover:text-primary"
                                        aria-label={`${p.title} öffnen`}
                                    >
                                        <ExternalLink className="h-5 w-5" />
                                    </a>
                                ) : (
                                    <Link
                                        href={`/projects/${p.slug}`}
                                        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border bg-background text-muted-foreground transition hover:border-primary/40 hover:text-primary"
                                        aria-label={`${p.title} Details`}
                                    >
                                        <ArrowUpRight className="h-5 w-5" />
                                    </Link>
                                )}
                            </div>

                            <div className="flex flex-wrap gap-2 self-end mt-auto">
                                {p.tags.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* CTA Card */}
                    <div className="group relative flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-primary/30 bg-primary/5 p-8 text-center transition-all duration-300 hover:border-primary/50 hover:bg-primary/10">
                        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <span className="text-3xl">?</span>
                        </div>
                        <h3 className="text-xl font-semibold">Ihr Unternehmen</h3>
                        <p className="mt-3 text-muted-foreground">
                            Hier könnte eines Ihrer Projekte stehen. Kontaktieren Sie mich für weitere Informationen!
                        </p>
                        <Button asChild variant="outline" className="mt-6 rounded-xl">
                            <Link href="/contact">
                                Kontaktieren
                                <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <Button asChild variant="outline" size="lg" className="rounded-xl">
                        <Link href="/projects">
                            Alle Erfahrungen ansehen
                            <ArrowUpRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
        
    );
}
