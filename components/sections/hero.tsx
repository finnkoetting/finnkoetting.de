"use client";

import React, { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero({ imageSrc }: { imageSrc?: string | StaticImageData }) {
    const img = imageSrc ?? "/brand.svg";
    const ref = useRef<HTMLDivElement | null>(null);
    const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");

    function handleMove(e: React.MouseEvent<HTMLDivElement>) {
        const el = ref.current ?? e.currentTarget;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const halfW = rect.width / 2;
        const halfH = rect.height / 2;
        const rotY = ((x - halfW) / halfW) * 1;
        const rotX = -((y - halfH) / halfH) * 1;
        setTransform(`perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.01)`);
    }

    function handleLeave() {
        setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
    }

    return (
        <section className="relative min-h-screen flex items-center">
            {/* Subtle background gradient */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            >
                <div className="absolute -right-1/4 -top-1/4 h-40 w-40 sm:h-80 sm:w-80 lg:h-96 lg:w-96 rounded-full bg-primary/3 blur-3xl" />
                <div className="absolute -left-1/4 bottom-0 h-32 w-32 sm:h-72 sm:w-72 lg:h-80 lg:w-80 rounded-full bg-accent/3 blur-3xl" />
            </div>

            <div className="mx-auto w-full max-w-screen-2xl px-0 py-12 sm:py-16 lg:py-24 mb-20">
                <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
                    {/* Text Column */}
                    <div className="space-y-5">
                        <div className="inline-flex items-center gap-2 rounded-full border border-green-400/10 bg-green-400/5 px-4 py-2 text-sm font-medium text-green-400">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                            Verfügbar für neue Projekte
                        </div>

                        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                            Web- & Softwarelösungen
                            <span className="mt-1 block text-primary">für Ihr Unternehmen</span>
                        </h1>

                        <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
                            Schnell online, sicher gehostet, skalierbar. Ich unterstütze Unternehmen
                            und Startups dabei, digitale Projekte strukturiert und professionell umzusetzen.
                        </p>

                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center mt-1">
                            <Button asChild size="lg" className="rounded-xl text-base">
                                <Link href="/contact">
                                    Jetzt Kontaktieren
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Image Column with 3D effect */}
                    <div className="lg:order-last">
                        <div
                            ref={ref}
                            onMouseMove={handleMove}
                            onMouseLeave={handleLeave}
                            className="relative w-full h-64 sm:h-80 lg:h-[490px] mx-auto overflow-visible border-0"
                            style={{ perspective: 1000 }}
                        >
                            <div
                                className="relative h-full w-full overflow-hidden rounded-3xl border-gray-200 border-2 bg-card shadow-2xl shadow-primary/5"
                                style={{ transform, transition: "transform 250ms ease-out", transformStyle: "preserve-3d" }}
                            >
                                <Image
                                    src={img}
                                    alt="Web- und Softwarelösungen von Finn Kötting"
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 420px"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <ChevronDown className="h-5 w-5 animate-bounce" />
                </div>
            </div>
        </section>
    );
}
