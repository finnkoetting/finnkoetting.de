import Link from "next/link";

export default function LegalIndex() {
    return (
        <main className="relative w-full overflow-hidden">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -right-1/4 -top-1/4 h-150 w-150 rounded-full bg-primary/3 blur-3xl" />
            </div>

            <div className="mx-auto w-full max-w-3xl px-4 py-13 text-center sm:px-6 lg:px-8">
                <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                    Rechtliches
                </h1>

                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                    Hier findest du alle rechtlich relevanten Informationen zu dieser Website.
                </p>

                <div className="mt-10 space-y-4 text-left">
                    <Link
                        href="/legal/imprint"
                        className="block rounded-lg p-4 transition hover:bg-muted/20"
                    >
                        Impressum
                    </Link>

                    <Link
                        href="/legal/privacy"
                        className="block rounded-lg p-4 transition hover:bg-muted/20"
                    >
                        Datenschutzerklärung
                    </Link>

                    <Link
                        href="/legal/terms"
                        className="block rounded-lg p-4 transition hover:bg-muted/20"
                    >
                        Allgemeine Geschäftsbedingungen (AGB)
                    </Link>

                    <Link
                        href="/legal/withdrawal"
                        className="block rounded-lg p-4 transition hover:bg-muted/20"
                    >
                        Widerrufsbelehrung
                    </Link>
                </div>
            </div>
        </main>
    );
}
