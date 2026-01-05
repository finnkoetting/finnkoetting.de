import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/projects";

export default function ProjectsPage() {
    return (
        <main className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-16">
            <div className="max-w-2xl">
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    Projekte
                </h1>
                <p className="mt-3 text-muted-foreground">
                    Ausgewählte Arbeiten — Fokus auf Struktur, Performance und Wartbarkeit.
                </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {PROJECTS.map((p) => (
                    <Link
                        key={p.slug}
                        href={`/projects/${p.slug}`}
                        className="group rounded-2xl border bg-background p-6 transition hover:bg-muted/40"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h2 className="text-base font-medium">{p.title}</h2>
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
        </main>
    );
}
