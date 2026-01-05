"use client";

import Script from "next/script";
import { Button } from "@/components/ui/button";

const NS = "contact";
const LINK = "koetting/contact";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-16">
      <header className="max-w-2xl">
        <p className="text-sm font-medium text-muted-foreground">Kontakt</p>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Termin buchen
        </h1>

        <p className="mt-3 text-muted-foreground">
          Buche ein kurzes Erstgespräch. Wir klären Anforderungen, Zeitplan und den
          sinnvollsten nächsten Schritt.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            className="rounded-xl"
            data-cal-link={LINK}
            data-cal-namespace={NS}
            data-cal-config={JSON.stringify({ layout: "month_view", theme: "light" })}
          >
            Termin auswählen
          </Button>

          <p className="text-sm text-muted-foreground">
            Dauer: 20 Minuten · Remote · Unverbindlich
          </p>
        </div>
      </header>

      {/* Cal element-click embed bootstrap + UI config */}
      <Script
        id="cal-element-click"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function (C, A, L) {
              let p = function (a, ar) { a.q.push(ar); };
              let d = C.document;
              C.Cal = C.Cal || function () {
                let cal = C.Cal;
                let ar = arguments;
                if (!cal.loaded) {
                  cal.ns = {};
                  cal.q = cal.q || [];
                  d.head.appendChild(d.createElement("script")).src = A;
                  cal.loaded = true;
                }
                if (ar[0] === L) {
                  const api = function () { p(api, arguments); };
                  const namespace = ar[1];
                  api.q = api.q || [];
                  if (typeof namespace === "string") {
                    cal.ns[namespace] = cal.ns[namespace] || api;
                    p(cal.ns[namespace], ar);
                    p(cal, ["initNamespace", namespace]);
                  } else p(cal, ar);
                  return;
                }
                p(cal, ar);
              };
            })(window, "https://app.cal.com/embed/embed.js", "init");

            Cal("init", "${NS}", { origin: "https://app.cal.com" });

            Cal.ns.${NS}("ui", {
              theme: "light",
              cssVarsPerTheme: {
                light: { "cal-brand": "#6c63ff" },
                dark: { "cal-brand": "#6c63ff" }
              },
              hideEventTypeDetails: false,
              layout: "month_view"
            });
          `,
        }}
      />
    </main>
  );
}
