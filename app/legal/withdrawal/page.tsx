import Link from "next/link";

export default function WithdrawalPage() {
    return (
        <main className="relative w-full overflow-hidden">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -right-1/4 -top-1/4 h-150 w-150 rounded-full bg-primary/3 blur-3xl" />
            </div>

            <section className="mx-auto w-full max-w-3xl px-4 py-13 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight">Widerrufsbelehrung</h1>

                <div className="mt-6 space-y-10 text-sm text-muted-foreground">
                    {/* Widerrufsrecht */}
                    <section className="space-y-3">
                        <h2 className="text-base font-semibold text-foreground">1. Widerrufsrecht</h2>
                        <p>
                            Verbraucher haben das Recht, einen Vertrag innerhalb von vierzehn (14) Tagen ohne Angabe
                            von Gründen zu widerrufen.
                        </p>
                        <p>
                            Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
                        </p>
                    </section>

                    {/* Ausübung */}
                    <section className="space-y-3">
                        <h2 className="text-base font-semibold text-foreground">
                            2. Ausübung des Widerrufsrechts
                        </h2>
                        <p>
                            Um Ihr Widerrufsrecht auszuüben, müssen Sie uns
                        </p>
                        <p>
                            Finn Hendrik Kötting<br />
                            Mittelstraße 61<br />
                            58285 Gevelsberg<br />
                            Deutschland<br />
                            E-Mail: kontakt@finnkoetting.de
                        </p>
                        <p>
                            mittels einer eindeutigen Erklärung (z. B. per E-Mail) über Ihren Entschluss informieren,
                            diesen Vertrag zu widerrufen.
                        </p>
                    </section>

                    {/* Folgen */}
                    <section className="space-y-3">
                        <h2 className="text-base font-semibold text-foreground">
                            3. Folgen des Widerrufs
                        </h2>
                        <p>
                            Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen
                            erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag
                            zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf bei uns eingegangen ist.
                        </p>
                    </section>

                    {/* Ausschluss */}
                    <section className="space-y-3">
                        <h2 className="text-base font-semibold text-foreground">
                            4. Ausschluss bzw. vorzeitiges Erlöschen des Widerrufsrechts
                        </h2>
                        <p>
                            Das Widerrufsrecht erlischt vorzeitig, wenn wir mit der Ausführung der Dienstleistung
                            begonnen haben, nachdem Sie ausdrücklich zugestimmt haben, dass wir vor Ablauf der
                            Widerrufsfrist mit der Ausführung beginnen, und Sie Ihre Kenntnis davon bestätigt haben,
                            dass Sie durch Ihre Zustimmung mit Beginn der Ausführung Ihr Widerrufsrecht verlieren.
                        </p>
                    </section>

                    {/* Hinweis */}
                    <section className="space-y-3">
                        <h2 className="text-base font-semibold text-foreground">5. Hinweis</h2>
                        <p>
                            Verträge kommen ausschließlich nach individueller Absprache per E-Mail oder Telefon
                            zustande. Über diese Website erfolgt kein direkter Vertragsabschluss.
                        </p>
                    </section>

                    {/* Stand */}
                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-foreground">6. Stand</h2>
                        <p>07.01.2026</p>
                    </section>

                    <div className="pt-2 flex gap-4">
                        <Link href="/imprint" className="text-primary hover:underline">
                            Impressum
                        </Link>
                        <Link href="/privacy-policy" className="text-primary hover:underline">
                            Datenschutzerklärung
                        </Link>
                        <Link href="/terms" className="text-primary hover:underline">
                            AGB
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
