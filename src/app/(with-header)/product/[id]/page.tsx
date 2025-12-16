import type { Metadata } from "next";
import ProductDetailsClient from "@/pages/ProductDetails";

export const metadata: Metadata = {
  title: "Product Details | APS Industrial Asset",
  description:
    "Detailed technical information and deployment parameters for an APS industrial power asset.",
};

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // FIXED: Await params before accessing its properties (Next.js 15 requirement)
  const resolvedParams = await params;
  
  return <ProductDetailsClient searchParams={{ id: resolvedParams.id }} />;
}