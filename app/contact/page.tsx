"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";

const Cal = dynamic(() => import("@calcom/embed-react").then((mod) => mod.default), { ssr: false, loading: () => <div className="h-full w-full bg-muted/40" /> });

const NS = "contact";
const LINK = "koetting/contact";

export default function ContactPage() {
  useEffect(() => {
    (async function () {
      const mod = await import("@calcom/embed-react");
      const cal = await mod.getCalApi({ namespace: NS });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#6081ff" },
          dark: { "cal-brand": "#6081ff" },
        },
        hideEventTypeDetails: true,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <main className="relative w-full overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-1/4 -top-1/4 h-150 w-150 rounded-full bg-primary/3 blur-3xl" />
        <div className="absolute -left-1/4 bottom-0 h-125 w-125 rounded-full bg-accent/3 blur-3xl" />
      </div>

      <section className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Termin buchen</h1>

          <p className="mt-3 text-muted-foreground">
            Buche ein kurzes 20 Minütiges Erstgespräch. Wir klären Anforderungen, Zeitplan und den
            sinnvollsten nächsten Schritt. Das Gespräch ist unverbindlich und kostenlos.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mx-auto w-full max-w-screen-2xl">
          <div className="rounded-3xl border bg-background px-4 py-12 shadow-[0_12px_40px_rgba(0,0,0,0.04)] sm:px-8 sm:py-16">
            <div className="mt-8 h-150 w-full">
              <Cal
                namespace={NS}
                calLink={LINK}
                style={{ width: "100%", height: "100%", overflow: "hidden" }}
                config={{ layout: "month_view", theme: "light" }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
