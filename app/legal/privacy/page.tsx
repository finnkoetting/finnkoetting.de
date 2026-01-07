import Link from "next/link";

export default function PrivacyPolicyPage() {
    return (
        <main className="relative w-full overflow-hidden">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -right-1/4 -top-1/4 h-150 w-150 rounded-full bg-primary/3 blur-3xl" />
            </div>

            <section className="mx-auto w-full max-w-3xl px-4 py-13 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight">Datenschutzerklärung</h1>

                <div className="mt-6 space-y-10 text-sm text-muted-foreground">
                    {/* Verantwortlicher */}
                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-foreground">1. Verantwortlicher</h2>
                        <p>
                            Finn Hendrik Kötting<br />
                            Mittelstraße 61<br />
                            58285 Gevelsberg<br />
                            Deutschland
                        </p>
                        <p>
                            Telefon: +49 160 98536691<br />
                            E-Mail: kontakt@finnkoetting.de
                        </p>
                    </section>

                    {/* Allgemeine Hinweise */}
                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-foreground">2. Allgemeine Hinweise</h2>
                        <p>
                            Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Personenbezogene
                            Daten werden auf dieser Website nur im notwendigen Umfang verarbeitet und ausschließlich
                            auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TMG).
                        </p>
                    </section>

                    {/* Hosting */}
                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-foreground">3. Hosting</h2>
                        <p>
                            Diese Website wird auf einem eigenen Server bei der Contabo GmbH (Deutschland) betrieben.
                            Im Rahmen des Hostings werden personenbezogene Daten verarbeitet, die zur Bereitstellung
                            und Sicherheit der Website erforderlich sind.
                        </p>
                    </section>

                    {/* Server-Logs */}
                    <section className="space-y-3">
                        <h2 className="text-base font-semibold text-foreground">4. Server-Log-Dateien</h2>
                        <p>
                            Beim Aufruf dieser Website werden automatisch Informationen in sogenannten Server-Log-Dateien
                            erhoben und gespeichert. Dies sind insbesondere:
                        </p>
                        <ul className="list-disc pl-5">
                            <li>IP-Adresse</li>
                            <li>Datum und Uhrzeit der Anfrage</li>
                            <li>aufgerufene Seiten</li>
                            <li>Browsertyp und -version</li>
                            <li>Betriebssystem</li>
                        </ul>
                        <p>
                            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
                            an einem sicheren und stabilen Betrieb der Website).
                        </p>
                    </section>

                    {/* Cookies */}
                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-foreground">5. Cookies</h2>
                        <p>
                            Diese Website verwendet keine Cookies und kein Tracking.
                        </p>
                    </section>

                    {/* Kontakt */}
                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-foreground">6. Kontaktaufnahme</h2>
                        <p>
                            Bei einer Kontaktaufnahme per E-Mail oder Telefon werden Ihre Angaben zur Bearbeitung der
                            Anfrage verarbeitet. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
                            (vorvertragliche Maßnahmen).
                        </p>
                    </section>

                    {/* Terminbuchung */}
                    <section className="space-y-3">
                        <h2 className="text-base font-semibold text-foreground">7. Terminbuchung über Cal.com</h2>
                        <p>
                            Für die Online-Terminbuchung nutzen wir den Dienst Cal.com. Bei der Nutzung werden
                            personenbezogene Daten (z. B. Name, E-Mail-Adresse, Terminwunsch) verarbeitet.
                        </p>
                        <p>
                            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung
                            bzw. vorvertragliche Maßnahmen).
                        </p>
                        <p>
                            Weitere Informationen finden Sie in der Datenschutzerklärung von Cal.com.
                        </p>
                    </section>

                    {/* Social Media */}
                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-foreground">8. Social Media Links</h2>
                        <p>
                            Auf dieser Website befinden sich Verlinkungen zu externen sozialen Netzwerken
                            (Instagram, GitHub, LinkedIn, Discord). Beim Anklicken dieser Links verlassen Sie unsere
                            Website. Es gelten die Datenschutzbestimmungen der jeweiligen Anbieter.
                        </p>
                    </section>

                    {/* KI */}
                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-foreground">9. Einsatz von KI</h2>
                        <p>
                            Teile der auf dieser Website bereitgestellten Texte wurden mithilfe KI-gestützter Systeme
                            erstellt und anschließend geprüft. Es werden dabei keine personenbezogenen Daten von
                            Websitebesuchern an KI-Dienste übermittelt.
                        </p>
                    </section>

                    {/* Rechte */}
                    <section className="space-y-3">
                        <h2 className="text-base font-semibold text-foreground">10. Rechte der betroffenen Personen</h2>
                        <ul className="list-disc pl-5">
                            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                            <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
                        </ul>
                    </section>

                    {/* Widerruf */}
                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-foreground">11. Widerruf von Einwilligungen</h2>
                        <p>
                            Sofern Sie eine Einwilligung zur Verarbeitung personenbezogener Daten erteilt haben,
                            können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.
                        </p>
                    </section>

                    {/* Beschwerderecht */}
                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-foreground">12. Beschwerderecht</h2>
                        <p>
                            Ihnen steht ein Beschwerderecht bei der zuständigen Datenschutzaufsichtsbehörde zu.
                        </p>
                    </section>

                    {/* Stand */}
                    <section className="space-y-2">
                        <h2 className="text-base font-semibold text-foreground">13. Stand</h2>
                        <p>07.01.2026</p>
                    </section>

                    <div className="pt-2">
                        <Link href="/imprint" className="text-primary hover:underline">
                            Zum Impressum
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
