import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle, Calendar } from "lucide-react";

export default function ContactCta() {
    return (
        <section id="contact" className="relative bg-linear-to-br from-primary/5 via-background to-accent/5">
            {/* Subtle divider */}
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />

            <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32 lg:py-55">
                <div className="mx-auto max-w-4xl">
                    {/* Header */}
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-medium text-primary">
                            <MessageCircle className="h-4 w-4" />
                            Ich konnte Ihr Interesse wecken?
                        </div>

                        <h2 className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            Lassen Sie uns sprechen
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                            Sie haben die Idee, ich die Technik. Gemeinsam können wir Ihr nächstes digitales Projekt
                            zum Erfolg führen. Kontaktieren Sie mich für ein unverbindliches Gespräch.
                        </p>
                    </div>

                    {/* Contact Options */}
                    <div className="mt-12 grid gap-6 sm:grid-cols-2">
                        <a
                            href="mailto:kontakt@finnkoetting.de"
                            className="group flex items-center gap-5 rounded-2xl card bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">E-Mail</p>
                                <p className="mt-1 text-lg font-medium">kontakt@finnkoetting.de</p>
                            </div>
                        </a>

                        <a
                            href="tel:+4916098536691"
                            className="group flex items-center gap-5 rounded-2xl card bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                <Phone className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Telefon</p>
                                <p className="mt-1 text-lg font-medium">+49 160 98536691</p>
                            </div>
                        </a>
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button asChild size="lg" className="w-full rounded-xl text-base sm:w-auto">
                            <Link href="/contact">
                                <Calendar className="mr-2 h-5 w-5" />
                                Termin vereinbaren
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
