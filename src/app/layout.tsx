import type { Metadata, Viewport } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { site } from "@/data/site";
import "./globals.css";
import "./hero-intro.css";

const title = `${site.name} — Data & Software Engineer`;
const description = `Portfolio de ${site.name}, élève ingénieure à l'ENSA Khouribga. Projets Data Engineering, Business Intelligence, IA et Software Engineering.`;
export const metadata: Metadata = {
  title: { default: title, template: `%s | ${site.name}` },
  description,
  robots: { index: true, follow: true },
  keywords: ["Portfolio", "Data Engineering", "Business Intelligence", "Artificial Intelligence", "Software Engineering", "PFE 2027"],
  ...(site.url ? {metadataBase: new URL(site.url), alternates: {canonical: site.url}, openGraph: {title, description, type: "website" as const, url: site.url}} : {}),
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#1A1F2B" };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="fr" suppressHydrationWarning><body><ThemeProvider><a className="skip-link" href="#contenu">Aller au contenu</a><Navbar/>{children}<Footer/></ThemeProvider></body></html>;
}
