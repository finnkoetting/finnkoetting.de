"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { SheetDescription } from "@/components/ui/sheet";
import Logo from "@/components/shared/logo";
import { useScroll } from "@/lib/use-scroll";

const NAV = [
    { label: "Start", href: "/" },
    { label: "Leistungen", href: "/services" },
    { label: "Projekte", href: "/projects" },
    { label: "Über Mich", href: "/about" },
];

export default function Navbar() {
    const pathname = usePathname();
    const scrolled = useScroll(10);
    const [sheetOpen, setSheetOpen] = useState(false);

    return (
        <header
            className={[
                "sticky top-0 z-50 w-full border-b backdrop-blur transition",
                scrolled
                    ? "bg-background/90 shadow-sm"
                    : "bg-background/70",
            ].join(" ")}
        >
            <div
                className={[
                    "mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-8 transition-[height] duration-200",
                    scrolled ? "h-14" : "h-16",
                ].join(" ")}
            >
                {/* Logo */}
                <Logo />

                {/* Desktop Nav */}
                <nav className="hidden items-center gap-1 md:flex">
                    {NAV.map((item) => {
                        const active =
                            item.href === "/"
                                ? pathname === "/"
                                : pathname?.startsWith(item.href) ?? false;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                aria-current={active ? "page" : undefined}
                                className={[
                                    "rounded-xl px-3 py-2 text-sm font-medium transition",
                                    active
                                        ? "bg-background text-foreground font-semibold"
                                        : "text-muted-foreground hover:text-foreground hover:font-semibold",
                                ].join(" ")}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right side */}
                <div className="flex items-center gap-2">
                    <Button asChild className="hidden rounded-xl md:inline-flex">
                        <Link href="/contact">Kontakt</Link>
                    </Button>

                    {/* Mobile Menu */}
                    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="md:hidden rounded-xl"
                                aria-label="Menü öffnen"
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="right" className="p-6 sm:p-4">
                            <SheetHeader>
                                <SheetTitle>Menü</SheetTitle>
                                <SheetDescription className="sr-only">Hauptnavigation</SheetDescription>
                            </SheetHeader>

                            <div className="mt-6 flex flex-col gap-3">
                                {NAV.map((item) => {
                                    const active =
                                        item.href === "/"
                                            ? pathname === "/"
                                            : pathname?.startsWith(item.href) ?? false;

                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            aria-current={active ? "page" : undefined}
                                            onClick={() => setSheetOpen(false)}
                                            className={[
                                                "rounded-xl px-4 py-3 text-base font-medium transition",
                                                active
                                                    ? "bg-background text-foreground font-semibold"
                                                    : "text-muted-foreground hover:text-foreground hover:font-semibold",
                                            ].join(" ")}
                                        >
                                            {item.label}
                                        </Link>
                                    );
                                })}

                                <Button asChild className="mt-4 rounded-xl w-full">
                                    <Link href="/contact" onClick={() => setSheetOpen(false)}>Anfrage senden</Link>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
