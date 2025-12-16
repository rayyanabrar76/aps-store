import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Advanced Power Solutions",
  url: siteUrl,
  logo: `${siteUrl}/aps-logo.png`,
  sameAs: [
    "https://www.linkedin.com",
    "https://www.facebook.com",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office #205, Asad Business Centre, Model Town",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+923008440485",
      contactType: "customer service",
      areaServed: "PK",
      availableLanguage: ["English", "Urdu"],
    },
  ],
  brand: "APS Power Systems",
};

export const metadata: Metadata = {
  title: "Industrial Power Systems & Energy Solutions | APS",
  description:
    "Heavy-duty generators, ATS logic controllers, and distribution systems engineered for mission-critical uptime across Pakistan.",
  openGraph: {
    title: "Industrial Power Systems & Energy Solutions | APS",
    description:
      "Discover APS industrial generators, ATS panels, and distribution gear engineered for uninterrupted performance.",
    url: "/",
    images: [
      {
        url: "/images/aps-headquarters.png",
        width: 1200,
        height: 630,
        alt: "APS Power Systems headquarters",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <HomePageClient />
    </>
  );
}

