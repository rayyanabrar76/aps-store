import type { Metadata } from "next";
import InventoryClient from "@/pages/Inventory";
import { products } from "@/data/products";

const categoryLabels: Record<string, string> = {
  power_core: "Power Core",
  control_logic: "Control Logic",
  distribution: "Distribution",
  armoring: "Armoring",
};

export function generateStaticParams() {
  const uniqueCategories = Array.from(
    new Set(products.map((p) => p.category?.toLowerCase())),
  ).filter(Boolean) as string[];

  return uniqueCategories.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  const key = params.category?.toLowerCase();
  const label = categoryLabels[key] || params.category;

  return {
    title: `${label} | APS Categories`,
    description: `Browse APS assets in category ${label}.`,
    alternates: {
      canonical: `/categories/${params.category}`,
    },
  };
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = params.category?.toUpperCase();
  return <InventoryClient initialCategory={category} />;
}

