import type { Metadata } from "next";
import CompanyProfileClient from "@/pages/Company";

export const metadata: Metadata = {
  title: "Company Profile & Industrial Power Services | APS",
  description:
    "Learn about Advanced Power Solutions (APS), our industrial power engineering capabilities, sectors served, and 25+ years of experience.",
  alternates: {
    canonical: "/company",
  },
};

export default function CompanyPage() {
  return <CompanyProfileClient />;
}

