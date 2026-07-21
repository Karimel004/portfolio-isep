import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karim EL AMRANI | Software Engineer",
  description: "Étudiant ingénieur à l'ISEP - À la recherche d'un stage de 6 mois en Software Engineering.",
  icons: {
    // Ton super Favicon emoji !
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">👨‍💻</text></svg>',
  },
  // La partie ajoutée spécialement pour LinkedIn, WhatsApp, etc.
  openGraph: {
    title: "Karim EL AMRANI | Software Engineer",
    description: "Étudiant à l'ISEP. Découvrez mes projets techniques (React, Node.js). À la recherche d'un stage de 6 mois en Software Engineering.",
    url: "https://portfolio-isep.vercel.app",
    siteName: "Portfolio de Karim EL AMRANI",
    images: [
      {
        url: "https://portfolio-isep.vercel.app/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Aperçu du portfolio de Karim EL AMRANI",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}