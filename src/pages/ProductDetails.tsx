"use client";

import Link from "next/link";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import { toast } from "@/hooks/use-toast";
import { 
  ArrowLeft, ShieldCheck, FileText, 
  Zap, Cpu, HardDrive, DownloadCloud,
  ChevronRight
} from "lucide-react";

type ProductDetailsProps = {
  searchParams?: { id?: string };
};

export default function ProductDetails({ searchParams }: ProductDetailsProps) {
  const id = searchParams?.id;
  const { addToCart, totalItems } = useCart();
  const product = products.find((p) => p.id === id);

  // Filter for related products (same category, excluding current)
  const relatedProducts = products
    .filter((p) => p.category === product?.category && p.id !== id)
    .slice(0, 3);

  const handleRequestQuote = () => {
    if (!product) return;
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast({
      title: "PROTOCOL_ENGAGED",
      description: "Asset successfully integrated into manifest.",
      className: "bg-black/90 backdrop-blur-xl border-aps-red/50 text-white font-mono border-l-4",
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-white p-6 font-mono">
        <div className="animate-pulse text-aps-red mb-2 text-xs">{"[ ! ] SYSTEM_NULL"}</div>
        <h1 className="text-xl font-black mb-6 uppercase tracking-[0.3em] opacity-50">Data_Missing</h1>
        <Button variant="outline" asChild className="border-white/10 hover:border-aps-red transition-all duration-500">
          <Link href="/inventory">Return to Terminal</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-aps-red/30 selection:text-white overflow-x-hidden">
      <Header cartCount={totalItems} />

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
        <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-aps-red/5 blur-[100px] rounded-full" />
      </div>

      <main className="container max-w-7xl pt-32 pb-12 md:pt-48 relative z-10 px-6 mx-auto">
        
        {/* Navigation Breadcrumb Bar */}
        <div className="flex flex-col gap-6 mb-10 md:mb-16">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/5">
            <Link href="/inventory" className="group flex items-center gap-3 text-white/40 hover:text-white transition-all">
              <div className="h-8 w-8 flex items-center justify-center rounded-full border border-white/10 group-hover:border-aps-red/40 transition-all">
                <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Exit_to_Archive</span>
            </Link>
            
            <div className="flex items-center gap-4">
               <Badge className="bg-aps-red/10 text-aps-red border border-aps-red/20 text-[9px] font-bold px-3 py-1 rounded-none uppercase tracking-[0.15em]">
                 {product.category}
               </Badge>
               <span className="font-mono text-[9px] text-white/20 tracking-[0.3em] hidden sm:block">
                 ASSET_ID::{product.id}
               </span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 md:gap-20 items-start mb-24">
          {/* LEFT COLUMN: Visual Assets */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8 lg:sticky lg:top-40">
            <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0A] p-1 shadow-2xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#0F0F0F]">
                <div className="absolute inset-0 w-full h-[1px] bg-aps-red z-20 animate-scan opacity-30 shadow-[0_0_10px_aps-red]" />
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out" 
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
               {[
                 { icon: <Cpu className="h-3.5 w-3.5" />, label: "Process", val: "v8.4" },
                 { icon: <Zap className="h-3.5 w-3.5" />, label: "Grid", val: "High" },
                 { icon: <ShieldCheck className="h-3.5 w-3.5" />, label: "Status", val: "Verify" }
               ].map((item, i) => (
                 <div key={i} className="bg-white/[0.02] border border-white/5 p-4 rounded-xl flex flex-col gap-2 backdrop-blur-sm">
                    <div className="text-aps-red/60">{item.icon}</div>
                    <div>
                      <div className="text-[7px] font-black uppercase text-white/20 tracking-widest">{item.label}</div>
                      <div className="text-[10px] font-bold text-white/70 uppercase truncate">{item.val}</div>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Content */}
          <div className="lg:col-span-7 space-y-10 md:space-y-12">
            <section className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.85] text-white">
                {product.name}<span className="text-aps-red animate-pulse">_</span>
              </h1>
              <div className="relative pl-6 md:pl-8 border-l border-aps-red/40">
                <p className="text-sm md:text-base text-white/40 max-w-xl leading-relaxed font-light">
                  {product.description}
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-4">
                 <div className="h-[1px] w-8 bg-aps-red" />
                 <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">Registry_Values</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 border border-white/5 overflow-hidden rounded-sm">
                {[
                  { key: "Thermal_Limit", val: "55°C Industrial" },
                  { key: "Logic_Board", val: "DeepSea_v8" },
                  { key: "Lead_Time", val: "72h Global" },
                  { key: "Casing", val: "IP23 Aluminum" },
                  { key: "Firmware", val: "Encrypted v4.2" },
                  { key: "Interface", val: "APS_Core Link" },
                ].map((row, i) => (
                  <div key={i} className="flex flex-col gap-1 p-5 bg-[#050505] hover:bg-white/[0.02] transition-colors">
                    <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest">{row.key}</span>
                    <span className="text-xs font-bold text-white/80">{row.val}</span>
                  </div>
                ))}
              </div>
            </section>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={handleRequestQuote}
                className="relative h-14 flex-[2] group overflow-hidden bg-white text-black font-black uppercase text-[10px] tracking-[0.2em] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="absolute inset-0 bg-aps-red translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <div className="relative z-10 flex items-center justify-center gap-3 group-hover:text-white transition-colors">
                  <FileText className="h-4 w-4" />
                  Initialize Deployment
                </div>
              </button>

              <button className="h-14 flex-1 border border-white/10 hover:border-white/40 bg-white/[0.02] transition-all flex items-center justify-center gap-3 text-white/60 hover:text-white group">
                <DownloadCloud className="h-4 w-4 group-hover:text-aps-red transition-colors" />
                <span className="text-[9px] font-bold uppercase tracking-widest">Data_Sheet.PDF</span>
              </button>
            </div>
          </div>
        </div>

        {/* RELATED ASSETS SECTION */}
        {relatedProducts.length > 0 && (
          <section className="pt-24 border-t border-white/5">
            <div className="flex items-center justify-between mb-12">
              <div className="space-y-1">
                <h3 className="text-xl font-black uppercase tracking-tighter">Related_Assets</h3>
                <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">Cross-Referencing Module {product.category}</p>
              </div>
              <Link href="/inventory" className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-aps-red transition-colors flex items-center gap-2">
                View All <ChevronRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <Link 
                  key={rel.id} 
                  href={`/product/${rel.id}`}
                  className="group relative bg-white/[0.02] border border-white/5 p-4 rounded-xl hover:border-aps-red/30 transition-all overflow-hidden"
                >
                  <div className="aspect-video overflow-hidden rounded-lg mb-4 grayscale group-hover:grayscale-0 transition-all">
                    <img src={rel.image} alt={rel.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h4 className="font-black uppercase text-xs tracking-tight group-hover:text-aps-red transition-colors">{rel.name}</h4>
                      <span className="text-[8px] font-mono text-white/20">{rel.id}</span>
                    </div>
                    <p className="text-[10px] text-white/40 line-clamp-1">{rel.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="pt-20 flex items-center gap-4 opacity-30">
            <HardDrive className="h-3 w-3" />
            <span className="text-[8px] font-mono tracking-[0.3em]">SECURED_BY_APS_TERMINAL_V.8.0</span>
        </div>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { transform: translateY(-50px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(600px); opacity: 0; }
        }
      `}} />
    </div>
  );
}