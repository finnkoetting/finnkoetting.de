"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <section id="about" className="relative">
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />

            <div className="mx-auto max-w-screen-2xl px-0 py-8">
                {/* Section Header */}
                <div className="mx-auto max-w-5xl text-center">
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-3xl lg:text-3xl">
                        Guten Tag 👋, ich bin Finn Kötting
                    </h2>
                    <p className="mt-2 text-lm leading-relaxed text-muted-foreground">
                        Als leidenschaftlicher Programmierer helpfe ich ihrem Unternehmen dabei,
                        digitale Lösungen zu entwickeln, die nicht nur technisch einwandfrei sind,
                        sondern auch echten Mehrwert bieten.
                    </p>
                </div>

                {/* Rowed layout: profile + job text side-by-side */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-7xl mx-auto items-center">
                    {/* Profile (left) */}
                    <div className="flex items-center gap-6">
                        <div className="relative h-32 w-32 overflow-hidden rounded-full ring-1 ring-border">
                            <Image src="/portrait.jpeg" alt="Finn Kötting" fill className="object-cover" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Finn Kötting</h3>
                            <p className="text-lm text-muted-foreground">Fachinformatiker für Anwendungsentwicklung</p>
                        </div>
                    </div>

                    {/* Job text (right) */}
                    <div className="mt-4 max-w-6xl text-right sm:mt-0">
                        <Link href="/about" className="text-lm font-medium text-primary underline text-right">Mehr erfahren</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
