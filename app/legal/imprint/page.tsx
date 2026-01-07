import Link from "next/link";

export default function ImpressumPage() {
    return (
        <main className="relative w-full overflow-hidden">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -right-1/4 -top-1/4 h-150 w-150 rounded-full bg-primary/3 blur-3xl" />
            </div>

            <section className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 py-13">
                <h1 className="text-3xl font-bold">Impressum</h1>

                <div className="mt-6 space-y-4 text-sm text-muted-foreground">
                    <p>Angaben gemäß §5 TMG:</p>
                    <p>Finn Kötting<br/>Musterstraße 1<br/>12345 Musterstadt</p>
                    <p>Kontakt: info@beispiel.de</p>

                    <p>
                        Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die
                        Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine
                        Gewähr übernommen werden.
                    </p>

                    <p>
                        <Link href="/contact" className="text-primary">Kontakt</Link>
                    </p>
                </div>
            </section>
        </main>
    );
}
