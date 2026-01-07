import Link from "next/link";
import Logo from "@/components/shared/logo";
import { Mail, Phone, MapPin } from "lucide-react";

const LINKS = [
    { label: "Start", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Projekte", href: "/projects" },
    { label: "Kontakt", href: "/contact" },
];

const LEGAL = [
    { label: "Impressum", href: "/legal/imprint" },
    { label: "Datenschutz", href: "/legal/privacy" },
    { label: "AGB", href: "/legal/terms" },
    { label: "Widerrufsbelehrung", href: "/legal/withdrawal" },
];

export default function Footer() {
    return (
        <footer className="border-t">
            <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Logo />
                        <p className="mt-4 max-w-xs text-sm text-muted-foreground">
                            Web- & Softwarelösungen für Unternehmen. Schnell online, sicher gehostet, skalierbar.
                        </p>
                        <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            Made with ❤️ in Gevelsberg
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <p className="text-sm font-medium">Navigation</p>
                        <ul className="mt-4 space-y-2">
                            {LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground transition hover:text-foreground"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <p className="text-sm font-medium">Rechtliches</p>
                        <ul className="mt-4 space-y-2">
                            {LEGAL.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground transition hover:text-foreground"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="text-sm font-medium">Kontakt</p>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <a
                                    href="mailto:kontakt@finnkoetting.de"
                                    className="flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
                                >
                                    <Mail className="h-4 w-4" />
                                    kontakt@finnkoetting.de
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+4916098536691"
                                    className="flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
                                >
                                    <Phone className="h-4 w-4" />
                                    +49 160 98536691
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Finn Hendrik Kötting. Alle Rechte vorbehalten.
                    </p>
                    <div className="flex gap-4">
                        {LEGAL.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-xs text-muted-foreground transition hover:text-foreground"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
