import Link from "next/link";

export default function TermsPage() {
    return (
        <main className="relative w-full overflow-hidden">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -right-1/4 -top-1/4 h-150 w-150 rounded-full bg-primary/3 blur-3xl" />
            </div>

            <section className="mx-auto w-full max-w-3xl px-4 py-13 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight">Allgemeine Geschäftsbedingungen</h1>

                <div className="mt-6 space-y-10 text-sm text-muted-foreground">
                    {/* Geltungsbereich */}
                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-foreground">1. Geltungsbereich</h2>
                        <p>
                            Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, Dienstleistungen
                            und sonstigen Leistungen zwischen
                        </p>
                        <p>
                            Finn Hendrik Kötting<br />
                            Einzelunternehmen (Kleinunternehmer gemäß § 19 UStG)
                        </p>
                        <p>
                            und seinen Kunden. Abweichende Bedingungen des Kunden finden keine Anwendung, sofern
                            ihrer Geltung nicht ausdrücklich schriftlich zugestimmt wurde.
                        </p>
                    </section>

                    {/* Vertragsabschluss */}
                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-foreground">2. Vertragsabschluss</h2>
                        <p>
                            Die Darstellung von Leistungen auf dieser Website stellt kein rechtlich bindendes
                            Angebot dar. Ein Vertrag kommt erst durch individuelle Absprache und Bestätigung
                            per E-Mail oder Telefon zustande.
                        </p>
                    </section>

                    {/* Leistungen */}
                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-foreground">3. Leistungen</h2>
                        <p>
                            Art und Umfang der Leistungen ergeben sich aus der jeweiligen individuellen Vereinbarung.
                            Änderungen oder Erweiterungen bedürfen der Absprache.
                        </p>
                    </section>

                    {/* Preise */}
                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-foreground">4. Preise und Zahlungsbedingungen</h2>
                        <p>
                            Alle angegebenen Preise sind Endpreise. Aufgrund der Anwendung der
                            Kleinunternehmerregelung gemäß § 19 UStG wird keine Umsatzsteuer ausgewiesen.
                        </p>
                        <p>
                            Zahlungsbedingungen werden individuell vereinbart und sind der jeweiligen Rechnung
                            zu entnehmen.
                        </p>
                    </section>

                    {/* Mitwirkungspflichten */}
                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-foreground">5. Mitwirkungspflichten des Kunden</h2>
                        <p>
                            Der Kunde verpflichtet sich, alle zur Durchführung des Auftrags erforderlichen
                            Informationen, Inhalte und Materialien rechtzeitig bereitzustellen.
                            Verzögerungen, die durch eine verspätete Mitwirkung entstehen, gehen nicht zu Lasten
                            des Auftragnehmers.
                        </p>
                    </section>

                    {/* Haftung */}
                    <section className="space-y-3">
                        <h2 className="text-base font-semibold text-foreground">6. Haftung</h2>
                        <p>
                            Der Auftragnehmer haftet uneingeschränkt bei Vorsatz und grober Fahrlässigkeit.
                            Bei einfacher Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung wesentlicher
                            Vertragspflichten (Kardinalpflichten) und beschränkt auf den vorhersehbaren Schaden.
                        </p>
                        <p>
                            Eine Haftung für entgangenen Gewinn, Datenverlust oder mittelbare Schäden ist
                            ausgeschlossen, soweit gesetzlich zulässig.
                        </p>
                    </section>

                    {/* Gewährleistung */}
                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-foreground">7. Gewährleistung</h2>
                        <p>
                            Mängel sind unverzüglich nach Kenntnisnahme anzuzeigen. Der Auftragnehmer ist berechtigt,
                            nach seiner Wahl nachzubessern oder Ersatz zu leisten.
                        </p>
                    </section>

                    {/* Urheberrecht */}
                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-foreground">8. Urheberrecht</h2>
                        <p>
                            Alle im Rahmen der Leistungserbringung erstellten Inhalte, Konzepte und Werke unterliegen
                            dem Urheberrecht. Eine Weitergabe oder Nutzung über den vereinbarten Zweck hinaus bedarf
                            der ausdrücklichen Zustimmung.
                        </p>
                    </section>

                    {/* Schlussbestimmungen */}
                    <section className="space-y-3">
                        <h2 className="text-base font-semibold text-foreground">9. Schlussbestimmungen</h2>
                        <p>
                            Es gilt das Recht der Bundesrepublik Deutschland.
                        </p>
                        <p>
                            Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein oder werden,
                            bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
                        </p>
                    </section>

                    {/* Stand */}
                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-foreground">10. Stand</h2>
                        <p>07.01.2026</p>
                    </section>

                    <div className="pt-2 flex gap-4">
                        <Link href="/imprint" className="text-primary hover:underline">
                            Impressum
                        </Link>
                        <Link href="/privacy-policy" className="text-primary hover:underline">
                            Datenschutzerklärung
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
