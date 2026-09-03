import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const title = `${site.name} — ${site.title}`;
const description =
  "Full-stack engineer building websites, web apps, dashboards and custom business systems for clients worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title,
  description,
  keywords: [
    "Muhammad Taha Sabir",
    "Full-Stack Engineer",
    "Next.js developer",
    "React developer",
    "Node.js developer",
    "Lahore software engineer",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title,
    description,
    url: site.siteUrl,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${interTight.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-bg text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
