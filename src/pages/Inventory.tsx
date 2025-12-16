"use client";

import { useEffect, useState } from "react";
import { ProductGrid } from "@/components/ProductGrid";
import { products } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import { toast } from "@/hooks/use-toast";
import { Database, LayoutGrid, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Spark {
  id: number;
  x: number;
  y: number;
}

type InventoryProps = {
  initialCategory?: string;
};

const Inventory = ({ initialCategory = "ALL" }: InventoryProps) => {
  const { addToCart, totalItems } = useCart();
  const normalizedInitial = initialCategory.toUpperCase();
  const [activeFilter, setActiveFilter] = useState(normalizedInitial);
  const [showPortal, setShowPortal] = useState(false);
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    setActiveFilter(normalizedInitial);
  }, [normalizedInitial]);

  const filteredProducts = (products || []).filter(p => {
    if (activeFilter === "ALL") return true;
    return p.category?.toUpperCase() === activeFilter;
  });

  const categories = ["ALL", "POWER_CORE", "CONTROL_LOGIC", "DISTRIBUTION", "ARMORING"];

  const handleAddToCart = (product: any, event?: React.MouseEvent) => {
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });

    if (event) {
      const newSpark = {
        id: Date.now(),
        x: event.clientX,
        y: event.clientY,
      };
      setSparks((prev) => [...prev, newSpark]);
      setTimeout(() => {
        setSparks((prev) => prev.filter((s) => s.id !== newSpark.id));
      }, 800);
    }

    toast({
      title: "ASSET_INITIALIZED",
      description: `${product.name} synced to portal.`,
      className: "bg-[#0A0A0B] border-[#DC2626] text-white font-mono border-l-4 shadow-[0_0_20px_rgba(220,38,38,0.2)]",
      duration: 500,
    });

    setShowPortal(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col text-white selection:bg-[#DC2626] selection:text-black overflow-x-hidden">
      <div
        className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <main className="flex-1 pt-32 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 animate-fade-in">
            <div className="flex items-center gap-2 text-[#DC2626]/70 mb-2">
              <Database className="h-3.5 w-3.5" />
              <span className="text-[9px] font-bold tracking-[3px] uppercase opacity-70">Archive_v5.0</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-tight">
              Technical <span className="text-[#DC2626] not-italic">Archive</span>
            </h1>
            <p className="text-white/30 text-[10px] uppercase tracking-[2px] mt-2 font-medium">
              Advanced Power Solutions Deployment Fleet
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-10 border-y border-white/10 py-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={cn(
                    "px-4 py-1.5 text-[9px] font-black tracking-widest uppercase transition-all border rounded-sm relative overflow-hidden",
                    activeFilter === cat 
                      ? "bg-[#DC2626] text-black border-[#DC2626] shadow-[0_0_20px_rgba(220,38,38,0.3)]" 
                      : "bg-white/5 text-white/40 border-white/10 hover:border-white/20 hover:text-white"
                  )}
                >
                  {cat.replace("_", " ")}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-4 text-white/20 border-l border-white/10 lg:pl-6 pl-0">
               <LayoutGrid className="h-3.5 w-3.5" />
               <span className="text-[9px] font-mono uppercase tracking-widest">
                 Fleet_Count: {filteredProducts.length}
               </span>
            </div>
          </div>

          <div className="animate-fade-in-up">
            <ProductGrid 
                products={filteredProducts} 
                onAddToCart={handleAddToCart} 
            />
          </div>
        </div>
      </main>

      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="fixed pointer-events-none z-[200] animate-fly-to-portal"
          style={{ left: spark.x, top: spark.y }}
        >
          <div className="h-4 w-4 bg-red-600 rounded-full blur-[3px] shadow-[0_0_20px_#dc2626]" />
          <div className="h-1.5 w-1.5 bg-white rounded-full absolute inset-0 m-auto shadow-[0_0_10px_#fff]" />
        </div>
      ))}

      <style>{`
        @keyframes flyToPortal {
          0% { transform: translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(calc(85vw - var(--start-x, 50vw)), calc(-90vh)) scale(0.1); opacity: 0; }
        }
        .animate-fly-to-portal {
          animation: flyToPortal 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default Inventory;
