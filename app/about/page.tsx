import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="relative w-full overflow-hidden">
            {/* Background shapes */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -right-1/4 -top-1/4 h-150 w-150 rounded-full bg-primary/3 blur-3xl" />
                <div className="absolute -left-1/4 bottom-0 h-125 w-125 rounded-full bg-accent/3 blur-3xl" />
            </div>

            {/* Header */}
            <section className="mx-auto w-full max-w-screen-2xl px-0 py-32 lg:py-20">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Über mich
                    </h1>
                    <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                        Entwickler mit Fokus auf sauberen Code, durchdachte Strukturen und Lösungen, die wirklich funktionieren.
                    </p>
                </div>
            </section>

            {/* Profile Section */}
            <section className="mx-auto w-full max-w-screen-2xl px-0 pb-16">
                <div className="mx-auto w-full max-w-screen-2xl">
                    <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-10 items-start">
                        {/* Avatar */}
                        <div className="relative mx-auto sm:mx-0">
                            <div className="relative h-48 w-48 overflow-hidden rounded-full ring-1 ring-border">
                                <Image
                                    src="/portrait.jpeg"
                                    alt="Finn Kötting"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Bio */}
                        <div>
                            <h2 className="text-2xl font-semibold">Guten Tag 👋, ich bin Finn Kötting</h2>
                            <p className="mt-2 text-muted-foreground">Fachinformatiker für Anwendungsentwicklung</p>
                            
                            <p className="mt-6 text-muted-foreground leading-relaxed">
                                Als leidenschaftlicher Programmierer helfe ich Unternehmen dabei, digitale Lösungen 
                                zu entwickeln, die nicht nur technisch einwandfrei sind, sondern auch echten Mehrwert bieten.
                            </p>
                            <p className="mt-4 text-muted-foreground leading-relaxed">
                                Seit mehreren Jahren entwickle ich Websites, Discord Bots und Automatisierungen 
                                für verschiedenste Projekte. Was mich antreibt? Komplexe Probleme in elegante 
                                Lösungen zu verwandeln.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="mx-auto max-w-6xl px-4 sm:px-8 h-px bg-linear-to-r from-transparent via-border to-transparent" />

            {/* Approach Section */}
            <section className="mx-auto w-full max-w-screen-2xl px-0 py-16">
                <div className="mx-auto w-full max-w-screen-2xl">
                    <h2 className="text-xl font-semibold mb-8">Mein Ansatz</h2>

                    <div className="grid gap-6 sm:grid-cols-3">
                        <div className="rounded-3xl border border-gray-200 bg-card p-6 shadow-sm">
                            <h3 className="font-medium">Fokus</h3>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                Weniger ist mehr. Klare, fokussierte Lösungen statt Feature-Bloat.
                            </p>
                        </div>
                        <div className="rounded-3xl border border-gray-200 bg-card p-6 shadow-sm">
                            <h3 className="font-medium">Performance</h3>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                Schnelle, optimierte Ergebnisse die Nutzer begeistern.
                            </p>
                        </div>
                        <div className="rounded-3xl border border-gray-200 bg-card p-6 shadow-sm">
                            <h3 className="font-medium">Wartbarkeit</h3>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                Code der auch morgen noch verständlich und erweiterbar ist.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
