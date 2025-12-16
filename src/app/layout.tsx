import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Advanced Power Solutions | Industrial Energy Systems",
    template: "%s | APS Power Systems",
  },
  description:
    "Advanced Power Solutions (APS) delivers industrial-grade generators, transfer switches, and distribution systems engineered for 24/7 reliability across Pakistan.",
  keywords: [
    "industrial generators",
    "power solutions Pakistan",
    "ATS panels",
    "energy infrastructure",
    "backup power",
    "diesel generators",
    "grid integration",
  ],
  openGraph: {
    title: "Advanced Power Solutions | Industrial Energy Systems",
    description:
      "Engineering resilient energy infrastructures, ISO-ready hardware, and mission-critical power systems for industrial and commercial clients.",
    url: "/",
    siteName: "APS Power Systems",
    images: [
      {
        url: "/images/aps-headquarters.png",
        width: 1200,
        height: 630,
        alt: "APS Power Systems headquarters and industrial equipment",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "APS Power Systems | Industrial Energy Experts",
    description:
      "ISO-ready industrial generators, ATS logic, and distribution systems built for uptime.",
    images: ["/images/aps-headquarters.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#050505] text-white antialiased">
        {children}
      </body>
    </html>
  );
}