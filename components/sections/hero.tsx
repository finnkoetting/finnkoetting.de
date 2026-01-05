import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="border-b">
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-24">
                <div className="max-w-2xl">
                    <p className="text-sm font-medium text-muted-foreground">
                        Webentwicklung & Automatisierung
                    </p>

                    <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
                        Websites & Systeme,
                        <span className="block">die professionell wirken.</span>
                    </h1>

                    <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                        Wir entwickeln moderne Next.js-Websites und digitale Tools —
                        schnell, sauber und wartbar. Fokus auf Performance, SEO und
                        einen klaren Auftritt.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <Button asChild className="rounded-xl">
                            <Link href="/contact">Projekt anfragen</Link>
                        </Button>

                        <Button asChild variant="outline" className="rounded-xl">
                            <Link href="/projects">Referenzen ansehen</Link>
                        </Button>
                    </div>

                    <p className="mt-6 text-sm text-muted-foreground">
                        Next.js · TypeScript · Tailwind · SEO-ready
                    </p>
                </div>
            </div>
        </section>
    );
}
