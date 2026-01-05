import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, PROJECTS } from "@/lib/projects";
import { ArrowLeft, ArrowRight, Calendar, ExternalLink, CheckCircle2, Code2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
    return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const p = getProject(slug);

    if (!p) return notFound();

    // Find prev/next projects for navigation
    const currentIndex = PROJECTS.findIndex((proj) => proj.slug === slug);
    const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null;
    const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null;

    return (
        <main className="relative w-full overflow-hidden">
            {/* Background shapes */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -right-1/4 -top-1/4 h-150 w-150 rounded-full bg-primary/3 blur-3xl" />
                <div className="absolute -left-1/4 bottom-0 h-125 w-125 rounded-full bg-accent/3 blur-3xl" />
            </div>

            {/* Header */}
            <section className="mx-auto w-full max-w-screen-2xl px-0 pt-32 pb-12">
                <div className="mx-auto w-full max-w-screen-2xl">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Alle Projekte
                    </Link>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                            <Sparkles className="h-4 w-4" />
                            Projekt
                        </span>

                        {p.year && (
                            <span className="inline-flex items-center gap-2 rounded-full bg-muted/60 px-3 py-1.5 text-sm text-muted-foreground">
                                <Calendar className="h-4 w-4" />
                                {p.year}
                            </span>
                        )}

                        {p.link && (
                            <a
                                href={p.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-muted/60 px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-primary/10 hover:text-primary"
                            >
                                <ExternalLink className="h-4 w-4" />
                                Live ansehen
                            </a>
                        )}
                    </div>

                    <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        {p.title}
                    </h1>

                    <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl">
                        {p.desc}
                    </p>

                    {p.tags?.length ? (
                        <div className="mt-8 flex flex-wrap gap-2">
                            {p.tags.map((t) => (
                                <span
                                    key={t}
                                    className="inline-flex items-center rounded-full bg-muted/60 px-3 py-1 text-sm text-muted-foreground"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    ) : null}
                </div>
            </section>

            {/* Divider */}
            <div className="mx-auto max-w-6xl px-4 sm:px-8 h-px bg-linear-to-r from-transparent via-border to-transparent" />

            {/* Content Cards */}
            <section className="mx-auto w-full max-w-screen-2xl px-0 py-16">
                <div className="mx-auto w-full max-w-screen-2xl grid gap-8 lg:grid-cols-2">
                    {/* Stack Card */}
                    {p.stack?.length ? (
                        <div className="rounded-3xl border border-gray-200 bg-card p-8 shadow-sm">
                            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />

                            <div className="flex items-center gap-3 mb-6">
                                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Code2 className="h-5 w-5" />
                                </span>
                                <h2 className="text-lg font-semibold">Tech Stack</h2>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {p.stack.map((s) => (
                                    <span
                                        key={s}
                                        className="inline-flex items-center rounded-lg border bg-background px-4 py-2 text-sm font-medium"
                                    >
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ) : null}

                    {/* Highlights Card */}
                    {p.highlights?.length ? (
                        <div className="rounded-3xl border border-gray-200 bg-card p-8 shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                                    <CheckCircle2 className="h-5 w-5" />
                                </span>
                                <h2 className="text-lg font-semibold">Highlights</h2>
                            </div>

                            <ul className="space-y-3">
                                {p.highlights.map((h) => (
                                    <li key={h} className="flex items-start gap-3 text-muted-foreground">
                                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <span>{h}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : null}
                </div>
            </section>

            {/* Project Navigation */}
            <section className="mx-auto w-full max-w-screen-2xl px-0 pb-20">
                <div className="mx-auto w-full max-w-screen-2xl">
                    <div className="mx-auto max-w-6xl px-4 sm:px-8 h-px bg-linear-to-r from-transparent via-border to-transparent mb-8" />

                    <div className="flex items-center justify-between gap-4">
                        {prevProject ? (
                            <Link
                                href={`/projects/${prevProject.slug}`}
                                className="group flex items-center gap-3 text-muted-foreground transition hover:text-foreground"
                            >
                                <ArrowLeft className="h-5 w-5 transition group-hover:-translate-x-1" />
                                <div className="text-left">
                                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Vorheriges</p>
                                    <p className="font-medium">{prevProject.title}</p>
                                </div>
                            </Link>
                        ) : (
                            <div />
                        )}

                        {nextProject ? (
                            <Link
                                href={`/projects/${nextProject.slug}`}
                                className="group flex items-center gap-3 text-muted-foreground transition hover:text-foreground text-right"
                            >
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Nächstes</p>
                                    <p className="font-medium">{nextProject.title}</p>
                                </div>
                                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                            </Link>
                        ) : (
                            <div />
                        )}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative mx-auto w-full max-w-screen-2xl px-0 pb-40">
                <div className="mx-auto w-full max-w-screen-2xl">
                    <div className="relative rounded-3xl border border-gray-200 bg-card p-10 sm:p-14 shadow-lg text-center overflow-hidden">

                        <h2 className="text-2xl font-semibold sm:text-3xl">Gefällt dir was du siehst?</h2>
                        <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
                            Lass uns über dein Projekt sprechen. Ich freue mich auf deine Nachricht.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button asChild size="lg" className="rounded-xl">
                                <Link href="/contact">
                                    Kontakt aufnehmen
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>

                            <Button asChild variant="outline" size="lg" className="rounded-xl">
                                <Link href="/projects">
                                    Mehr Projekte
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
