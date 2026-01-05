import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { PROJECTS } from "@/lib/projects";


export default function Projects() {
    return (
        <section className="border-t">
            <div className="mx-auto max-w-6xl px-4 py-14 sm:px-8 sm:py-20">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-2xl">
                        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                            Referenzen
                        </h2>
                        <p className="mt-2 text-muted-foreground">
                            Ausgewählte Projekte — klarer Fokus auf Struktur, Performance und Wartbarkeit.
                        </p>
                    </div>

                    <Link
                        href="/projects"
                        className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
                    >
                        Alle Projekte ansehen
                    </Link>
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-3">
                    {PROJECTS.map((p) => (
                        <Link
                            key={p.title}
                            href={`/projects/${p.slug}`}
                            className="group rounded-2xl border bg-background p-6 transition hover:bg-muted/40"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-base font-medium">{p.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                        {p.desc}
                                    </p>
                                </div>

                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border bg-background text-muted-foreground transition group-hover:text-foreground">
                                    <ArrowUpRight className="h-4 w-4" />
                                </span>
                            </div>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {p.tags.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
