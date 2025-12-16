import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/data/products";

export const revalidate = 60; // ISR: revalidate every 60s

const fallbackCurrency = "PKR";

function findProduct(slug: string) {
  // Use the product id as the slug to avoid duplicate slug fields.
  return products.find((p) => p.id === slug) || null;
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = findProduct(params.slug);
  if (!product) {
    return {
      title: "Product not found",
      description: "The requested product could not be found.",
    };
  }

  const { name, description, image } = product;

  return {
    title: `${name} | APS Products`,
    description,
    openGraph: {
      title: `${name} | APS Products`,
      description,
      images: image ? [{ url: image, width: 1200, height: 630 }] : undefined,
    },
    alternates: {
      canonical: `/products/${params.slug}`,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = findProduct(params.slug);
  if (!product) {
    notFound();
  }

  const currency = fallbackCurrency;
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [product.image],
    description: product.description,
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: "APS Power Systems",
    },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: currency,
      availability: "https://schema.org/InStock",
      url: `/products/${product.id}`,
    },
  };

  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <div className="space-y-2">
        <p className="text-sm uppercase text-zinc-400">Product</p>
        <h1 className="text-3xl font-semibold text-white">{product.name}</h1>
        <p className="text-zinc-200">{product.description}</p>
      </div>
      <div className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-6 text-zinc-100">
        <p className="text-lg font-medium">
          {currency} {product.price.toLocaleString()}
        </p>
        <p className="text-sm text-emerald-400">In stock</p>
        <p className="mt-2 text-sm text-zinc-400">SKU: {product.id}</p>
      </div>
    </main>
  );
}

