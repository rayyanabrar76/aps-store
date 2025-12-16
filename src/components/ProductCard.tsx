'use client'; 

import Image from "next/image";
import { Info, ArrowUpRight, FileText, Cpu, Gauge, Layers } from "lucide-react";
import { Product } from "@/types/store";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col bg-aps-black rounded-[2.5rem] border border-white/[0.03] transition-all duration-700 hover:border-aps-red/30 hover:shadow-extreme overflow-hidden">
      
      {/* 1. CINEMATIC VISUAL CORE */}
      <div className="relative aspect-[16/11] overflow-hidden">
        {/* Deep Field Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-aps-navy/20 via-transparent to-aps-red/10 opacity-40 z-10" />
        
        {/* Interactive Laser Scanning Line */}
        <div className="absolute inset-0 w-full h-[1px] bg-aps-red/50 shadow-[0_0_15px_#DC2626] z-20 opacity-0 group-hover:opacity-100 group-hover:animate-scan pointer-events-none" />

        {/* The Image */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-all duration-1000 ease-out scale-105 group-hover:scale-100 saturate-[0.2] group-hover:saturate-100"
          priority={false}
        />

        {/* HUD: TOP DEPLOYMENT STATUS */}
        <div className="absolute top-5 left-5 right-5 flex justify-between items-start z-40">
           <div className="space-y-0.5">
              <p className="text-[8px] font-black text-aps-red uppercase tracking-[4px] animate-pulse">Live_Feed</p>
              <h4 className="text-[10px] font-bold text-white/80 uppercase tracking-widest">{product.category}</h4>
           </div>
           <div className="h-9 w-9 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10">
              <Layers className="h-4 w-4 text-white/40 group-hover:text-aps-red transition-colors" />
           </div>
        </div>

        {/* OPTICAL CENTER TRIGGER (ANALYZE BUTTON) */}
        <div className="absolute inset-0 flex items-center justify-center z-50 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-aps-black/40 backdrop-blur-[2px]">
          <Link href={`/product/${product.id}`} className="group/btn-circle relative">
              <div className="absolute inset-0 bg-aps-red blur-xl opacity-20 group-hover/btn-circle:opacity-40 transition-opacity" />
              <div className="relative h-20 w-20 flex flex-col items-center justify-center rounded-full border border-white/20 bg-black transition-all duration-500 group-hover/btn-circle:border-aps-red group-hover/btn-circle:scale-110">
                 <Info className="h-4 w-4 text-white mb-1" />
                 <span className="text-[7px] font-black uppercase tracking-tighter text-white/60">Analyze</span>
                 {/* SVG Radial Progress */}
                 <svg className="absolute inset-0 w-full h-full rotate-[-90deg] scale-110">
                   <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="1" fill="transparent" className="text-aps-red/20" />
                   <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="1" fill="transparent" className="text-aps-red transition-all duration-1000 [stroke-dasharray:240] [stroke-dashoffset:240] group-hover/btn-circle:[stroke-dashoffset:0]" />
                 </svg>
              </div>
          </Link>
        </div>
      </div>

      {/* 2. DATA CONTENT ARCHITECTURE */}
      <div className="flex flex-1 flex-col p-7 relative">
        <div className="absolute inset-0 bg-grid-white opacity-[0.02] pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
             <div className="h-[1px] w-6 bg-aps-navy" />
             <span className="text-[9px] font-black uppercase tracking-[3px] text-aps-navy group-hover:text-aps-red transition-colors italic">Architecture_v.01</span>
          </div>

          <h3 className="text-2xl font-bold text-white mb-3 tracking-tighter italic leading-tight group-hover:translate-x-2 transition-transform duration-500">
            {product.name}
          </h3>
          
          <p className="text-xs text-white/40 mb-8 line-clamp-2 font-light leading-relaxed">
            {product.description}
          </p>

          {/* PERFORMANCE BENTO BOXES */}
          <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="relative p-4 rounded-xl bg-white/[0.02] border border-white/5 overflow-hidden group/item">
                  <div className="absolute top-0 left-0 w-1 h-full bg-aps-red scale-y-0 group-hover/item:scale-y-100 transition-transform origin-top" />
                  <Gauge className="h-3.5 w-3.5 text-aps-red mb-2" />
                  <p className="text-[9px] font-black text-white/60 uppercase tracking-widest">Efficiency</p>
                  <p className="text-[10px] font-mono text-white/20 mt-0.5">98.4%_OPT</p>
              </div>
              <div className="relative p-4 rounded-xl bg-white/[0.02] border border-white/5 overflow-hidden group/item">
                  <div className="absolute top-0 left-0 w-1 h-full bg-aps-navy scale-y-0 group-hover/item:scale-y-100 transition-transform origin-top" />
                  <Cpu className="h-3.5 w-3.5 text-aps-navy mb-2" />
                  <p className="text-[9px] font-black text-white/60 uppercase tracking-widest">Processing</p>
                  <p className="text-[10px] font-mono text-white/20 mt-0.5">CORE_SYNC</p>
              </div>
          </div>
        </div>

        {/* 3. PROCUREMENT INTERFACE (REFINED BUTTON) */}
        <div className="mt-auto relative z-10">
          <Button 
            onClick={onAddToCart}
            className={cn(
                "group/btn relative w-full h-14 rounded-xl overflow-hidden transition-all duration-500",
                "bg-transparent border border-white/10 text-white",
                "hover:border-aps-red hover:shadow-[0_0_20px_rgba(220,38,38,0.15)]"
            )}
          >
            {/* Liquid Fill Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-aps-navy to-aps-red translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out" />
            
            <div className="relative z-10 flex items-center justify-between w-full px-5">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-white/5 group-hover/btn:bg-black/20 transition-all duration-700">
                  <FileText className="h-4 w-4" />
                </div>
                <div className="flex flex-col items-start leading-none text-left">
                  <span className="font-black uppercase tracking-[0px] text-xs">Secure Quote</span>
                  <span className="text-[7px] uppercase font-bold text-white/30 group-hover/btn:text-white/60 transition-colors mt-0.5">ISO_27001_READY</span>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 opacity-40 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
            </div>
          </Button>
          
          <div className="mt-6 flex items-center gap-3">
             <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
             <p className="text-[8px] font-mono text-white/10 tracking-[8px] uppercase">APS_SYSTEMS</p>
             <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}