import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, PROJECTS } from "@/lib/projects";

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

    return (
        <main className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-16">
            <div className="max-w-3xl">
                <Link
                    href="/projects"
                    className="text-sm font-medium text-muted-foreground underline-offset-4 hover:underline"
                >
                    Zurück zu Projekten
                </Link>

                <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                    {p.title}
                </h1>

                {p.year ? (
                    <p className="mt-2 text-sm text-muted-foreground">{p.year}</p>
                ) : null}

                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    {p.desc}
                </p>

                {p.tags?.length ? (
                    <div className="mt-8 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                            <span
                                key={t}
                                className="rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                ) : null}

                {p.stack?.length ? (
                    <section className="mt-10">
                        <h2 className="text-base font-medium">Stack</h2>
                        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                            {p.stack.map((s) => (
                                <li key={s} className="rounded-xl border bg-background px-4 py-3 text-sm">
                                    {s}
                                </li>
                            ))}
                        </ul>
                    </section>
                ) : null}

                {p.highlights?.length ? (
                    <section className="mt-10">
                        <h2 className="text-base font-medium">Highlights</h2>
                        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                            {p.highlights.map((h) => (
                                <li key={h}>{h}</li>
                            ))}
                        </ul>
                    </section>
                ) : null}
            </div>
        </main>
    );
}
