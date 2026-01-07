import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Finn Kötting – Web- & Softwarelösungen",
    template: "%s | Finn Kötting",
  },
  icons: {
    icon: "/brand.svg",
  },
  description:
    "Web- und Softwarelösungen für Ihr Unternehmen. Schnell online, sicher gehostet, skalierbar. Moderne Webentwicklung, Server-Systeme und individuelle Software.",
  keywords: [
    "Webentwicklung",
    "Softwareentwicklung",
    "Webdesign",
    "Server Hosting",
    "Fachinformatiker",
    "Finn Kötting",
    "Gevelsberg",
    "NRW",
  ],
  authors: [{ name: "Finn Kötting" }],
  creator: "Finn Kötting",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://finnkoetting.de",
    siteName: "Finn Kötting",
    title: "Finn Kötting – Web- & Softwarelösungen",
    description:
      "Web- und Softwarelösungen für Ihr Unternehmen. Schnell online, sicher gehostet, skalierbar.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finn Kötting – Web- & Softwarelösungen",
    description:
      "Web- und Softwarelösungen für Ihr Unternehmen. Schnell online, sicher gehostet, skalierbar.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
