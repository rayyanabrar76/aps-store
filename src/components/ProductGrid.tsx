'use client'; // 1. Added this for Next.js interactive features

import { Product } from "@/types/store";
import { ProductCard } from "./ProductCard";
import { Layers, Settings2 } from "lucide-react";
import { useRouter } from "next/navigation"; // 2. Correct import for Next.js 15

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

function ProductGrid({ products, onAddToCart }: ProductGridProps) {
  const router = useRouter(); // 3. Changed navigate to router

  return (
    <section
      id="products"
      className="relative py-24 md:py-32 bg-black overflow-hidden scroll-mt-32 border-t border-white/5"
    >
      {/* 1. KINETIC BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* 2. HEADER: MISSION CONTROL STYLE */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4 animate-fade-in">
              <div className="h-[2px] w-12 bg-red-600" />
              <span className="text-xs font-black uppercase tracking-[4px] text-red-600">
                Heavy Equipment Catalog
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black text-white leading-none tracking-tighter uppercase italic">
              Power <span className="text-neutral-500 not-italic">Infrastructure</span>
            </h2>
          </div>

          <div className="hidden lg:flex items-center gap-6 border border-white/10 bg-white/[0.03] rounded-xl px-6 py-4 backdrop-blur-md">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-neutral-600 uppercase font-bold tracking-widest">
                Active Filters
              </span>
              <span className="text-sm text-white font-medium flex items-center gap-2">
                <Settings2 className="h-3 w-3 text-red-600" /> All Systems
              </span>
            </div>
            <div className="h-10 w-[1px] bg-white/10" />
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-neutral-600 uppercase font-bold tracking-widest">
                Available Units
              </span>
              <span className="text-sm text-white font-medium flex items-center gap-2">
                <Layers className="h-3 w-3 text-red-600" /> {products.length} Models
              </span>
            </div>
          </div>
        </div>

        {/* 3. THE PRODUCT GRID: PRECISION LAYOUT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="relative group animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-red-600 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20" />

              <ProductCard
                product={product}
                onAddToCart={() => onAddToCart(product)}
              />

              <div className="mt-6 flex items-center justify-between px-2">
                <span className="text-[9px] font-mono text-white/20 tracking-widest uppercase">
                  SYS-UID: {product.id.split('-')[0] || 'APS'}-{index + 100}
                </span>
                <div className="h-[1px] flex-1 mx-4 bg-white/10" />
                <span className="text-[9px] font-mono text-red-600 font-bold">
                  [ {(index + 1).toString().padStart(2, '0')} ]
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 4. FOOTER: LOADING STATE / ACTION */}
        <div className="mt-24 text-center">
          <button
            onClick={() => router.push("/inventory")} // 4. Updated function call
            className="group relative px-12 py-5 bg-transparent border border-white/10 overflow-hidden transition-all hover:border-red-600"
          >
            <div className="absolute inset-0 bg-red-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 text-[10px] font-black uppercase tracking-[5px] text-white group-hover:text-black transition-colors">
              Initialize Full Archive
            </span>
          </button>
          <p className="mt-6 text-[9px] font-mono text-white/20 uppercase tracking-widest">
            End of priority asset sequence
          </p>
        </div>
      </div>
    </section>
  );
}

export { ProductGrid };
export default ProductGrid;