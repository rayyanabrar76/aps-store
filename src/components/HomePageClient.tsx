'use client';

import Image from "next/image";
import { Header } from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import WhoWeAre from "@/components/WhoWeAre";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import { toast } from "@/hooks/use-toast";
import { Product } from "@/types/store";
import { ShieldCheck, Zap, Cog, Globe } from "lucide-react";

function HomePageClient() {
  const { addToCart, totalItems } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });

    toast({
      title: "ASSET_INITIALIZED",
      description: `${product.name} appended to deployment manifest.`,
      duration: 400,
      className:
        "bg-[#0A0A0B] border-accent/50 text-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] border-l-4 border-l-accent font-mono transition-opacity duration-200",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] selection:bg-aps-red/30 text-white">
      {/* Background overlays */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,128,0.06))] bg-[length:100%_2px,3px_100%]"
      />
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[99] opacity-[0.1] mix-blend-overlay"
      >
        <Image
          src="https://grainy-gradients.vercel.app/noise.svg"
          alt="grainy background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <Header cartCount={totalItems} />

      <main className="flex-1 relative">
        <HeroSection />

        <div className="relative h-24 bg-gradient-to-b from-transparent to-[#050505] -mt-24 z-10" />

        <section className="bg-[#050505] border-y border-white/5 py-12 relative z-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              {[
                { icon: <ShieldCheck className="h-4 w-4" />, label: "ISO 9001 CERTIFIED" },
                { icon: <Cog className="h-4 w-4" />, label: "PRECISION ENGINEERING" },
                { icon: <Zap className="h-4 w-4" />, label: "3000 KVA CAPACITY" },
                { icon: <Globe className="h-4 w-4" />, label: "NATIONWIDE LOGISTICS" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left"
                >
                  <div className="p-2 rounded-lg bg-white/5 text-accent border border-white/5">
                    {stat.icon}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-[3px] text-white leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="relative scroll-mt-24">
          <ProductGrid products={products} onAddToCart={handleAddToCart} />
        </section>
      </main>

      <WhoWeAre />
      <Footer />
    </div>
  );
}

export default HomePageClient;
