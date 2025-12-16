import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductGrid } from "@/components/ProductGrid";
import { WhoWeAre } from "@/components/WhoWeAre";
import { products } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import { Product } from "@/types/store";
import { toast } from "@/hooks/use-toast";
import { ShieldCheck, Zap, Cog, Globe } from "lucide-react";

const Index = () => {
  const { addToCart, totalItems } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price, // Will be 0 per our Quote model
      image: product.image,
    });
    
    toast({
      title: "ASSET_INITIALIZED",
      description: `${product.name} appended to deployment manifest.`,
      duration: 400, // Notification will now disappear after 0.4 seconds
      className: "bg-[#0A0A0B] border-accent/50 text-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] border-l-4 border-l-accent font-mono transition-opacity duration-200",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] selection:bg-accent selection:text-black">
      {/* 1. SYSTEM OVERLAYS */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,128,0.06))] bg-[length:100%_2px,3px_100%]" />
      <div className="fixed inset-0 pointer-events-none z-[99] opacity-[0.1] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <Header cartCount={totalItems} />
      
      <main className="flex-1 relative">
        {/* 2. HERO SECTION */}
        <HeroSection />

        {/* 3. TRANSITION DIVIDER */}
        <div className="relative h-24 bg-gradient-to-b from-transparent to-[#050505] -mt-24 z-10" />

        {/* 4. TRUST BAR */}
        <section className="bg-[#050505] border-y border-white/5 py-12 relative z-20">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
               {[ 
                 { icon: <ShieldCheck className="h-4 w-4" />, label: "ISO 9001 CERTIFIED" },
                 { icon: <Cog className="h-4 w-4" />, label: "PRECISION ENGINEERING" },
                 { icon: <Zap className="h-4 w-4" />, label: "3000 KVA CAPACITY" },
                 { icon: <Globe className="h-4 w-4" />, label: "NATIONWIDE LOGISTICS" }
               ].map((stat, i) => (
                 <div key={i} className="flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left">
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

        {/* 5. PRODUCT GRID */}
        <section id="products" className="relative scroll-mt-24">
           <ProductGrid products={products} onAddToCart={handleAddToCart} />
        </section>
      </main>

      {/* 6. WHO WE ARE SECTION */}
      <WhoWeAre />

      {/* 7. GLOBAL FLOATING CTA (WhatsApp Support) */}
      <a 
        href="https://wa.me/923008440485" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] group"
      >
        <div className="absolute inset-0 bg-[#DC2626] rounded-full animate-ping opacity-20 group-hover:opacity-40 transition-opacity" />
        <div className="relative bg-[#DC2626] p-4 rounded-2xl shadow-[0_10px_30px_rgba(220,38,38,0.4)] text-black transition-transform group-hover:scale-110 active:scale-90">
          <Zap className="h-6 w-6 fill-current" />
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black text-[10px] font-black py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-all pointer-events-none uppercase tracking-widest whitespace-nowrap border-b-2 border-[#DC2626]">
            Priority Hotline
          </span>
        </div>
      </a>
    </div>
  );
};

export default Index;
