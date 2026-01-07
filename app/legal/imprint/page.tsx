import Link from "next/link";

export default function ImprintPage() {
    return (
        <main className="relative w-full overflow-hidden">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -right-1/4 -top-1/4 h-150 w-150 rounded-full bg-primary/3 blur-3xl" />
            </div>

            <section className="mx-auto w-full max-w-3xl px-4 py-13 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight">Impressum</h1>

                <div className="mt-6 space-y-8 text-sm text-muted-foreground">
                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-foreground">Angaben gemäß § 5 TMG</h2>
                        <p>
                            Finn Hendrik Kötting
                            <br />
                            Mittelstraße 61
                            <br />
                            58285 Gevelsberg
                            <br />
                            Deutschland
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-foreground">Kontakt</h2>
                        <p>
                            Telefon:{" "}
                            <a className="text-primary hover:underline" href="tel:+4916098536691">
                                +49 160 98536691
                            </a>
                            <br />
                            E-Mail:{" "}
                            <a className="text-primary hover:underline" href="mailto:kontakt@finnkoetting.de">
                                kontakt@finnkoetting.de
                            </a>
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-foreground">Rechtsform</h2>
                        <p>Einzelunternehmen (Kleinunternehmer gemäß § 19 UStG)</p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-foreground">Umsatzsteuer</h2>
                        <p>
                            Gemäß § 19 UStG wird keine Umsatzsteuer berechnet und ausgewiesen.
                            <br />
                            (Umsatzsteuer-Identifikationsnummer: nicht vorhanden.)
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-foreground">Geltungsbereich</h2>
                        <p>
                            Dieses Impressum gilt für folgende Onlineangebote:
                            <br />
                            <a className="text-primary hover:underline" href="https://finnkoetting.de" target="_blank" rel="noreferrer">
                                https://finnkoetting.de
                            </a>
                            <br />
                            <a className="text-primary hover:underline" href="https://www.finnkoetting.de" target="_blank" rel="noreferrer">
                                https://www.finnkoetting.de
                            </a>
                            <br />
                            <a className="text-primary hover:underline" href="https://ticketer.bot" target="_blank" rel="noreferrer">
                                https://ticketer.bot
                            </a>
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-base font-semibold text-foreground">Haftung für Inhalte</h2>
                        <p>
                            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
                            Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
                            übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
                            eine rechtswidrige Tätigkeit hinweisen.
                        </p>
                        <p>
                            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
                            bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
                            konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
                            Inhalte umgehend entfernen.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-base font-semibold text-foreground">Haftung für Links</h2>
                        <p>
                            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
                            Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                        </p>
                        <p>
                            Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
                            Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
                            Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                            Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-base font-semibold text-foreground">Urheberrecht</h2>
                        <p>
                            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                            Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts
                            bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                        </p>
                        <p>
                            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit Inhalte
                            auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet und solche Inhalte
                            insbesondere als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                            bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte
                            umgehend entfernen.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-base font-semibold text-foreground">Hinweis zu KI-unterstützten Texten</h2>
                        <p>
                            Teile der Texte auf dieser Website wurden unter Nutzung KI-gestützter Systeme erstellt und anschließend geprüft und
                            überarbeitet. Für verbindliche Auskünfte wenden Sie sich bitte direkt an uns.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-base font-semibold text-foreground">Verfügbarkeit / technische Hinweise</h2>
                        <p>
                            Wir bemühen uns um einen möglichst unterbrechungsfreien Betrieb der Website. Trotz aller Sorgfalt können Ausfallzeiten
                            jedoch nicht ausgeschlossen werden. Wir behalten uns vor, das Angebot jederzeit zu ändern, zu ergänzen oder einzustellen.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-foreground">Stand</h2>
                        <p>07.01.2026</p>
                    </section>

                    <div className="pt-2">
                        <Link href="/contact" className="text-primary hover:underline">
                            Kontakt
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
