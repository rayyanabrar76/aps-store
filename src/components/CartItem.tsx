'use client';  // ← Add this line at the very top

// rest of your code stays the same
import { Minus, Plus, Trash2, Cpu, FileSearch } from "lucide-react";
import { CartItem as CartItemType } from "@/types/store";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface CartItemProps {
  item: CartItemType;
  onUpdateQty: (delta: number) => void;
  onRemove: () => void;
}

export function CartItem({ item, onUpdateQty, onRemove }: CartItemProps) {
  return (
    /**
     * LAYOUT FIXES:
     * 1. z-0 & isolate: Prevents the card from jumping over your Header during scroll.
     * 2. flex-col sm:flex-row: Stacks vertically on mobile, horizontal on desktop.
     */
    <div className="group relative z-0 isolate flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 bg-[#0F0F11] rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-500 overflow-hidden">
      
      {/* BACKGROUND DECORATION - Lowered z-index to stay behind content */}
      <div className="absolute top-2 right-4 text-[40px] font-black text-white/[0.02] pointer-events-none italic uppercase select-none hidden lg:block -z-10">
        Asset_Manifest
      </div>

      {/* 1. IMAGE CONTAINER 
          - Aspect-video on mobile for a "hero" feel 
          - Aspect-square on desktop for a compact "list" feel
      */}
      <div className="relative aspect-video sm:aspect-square w-full sm:h-28 sm:w-28 rounded-xl overflow-hidden bg-white/5 shrink-0 border border-white/10 group-hover:border-accent/50 transition-colors">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        {/* Dark overlay for industrial look */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F11] to-transparent opacity-60" />
        
        {/* Quantity Badge */}
        <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/80 backdrop-blur-md border border-white/10 rounded text-[9px] font-mono text-accent">
          QTY_{item.qty.toString().padStart(2, '0')}
        </div>
      </div>

      {/* 2. SPECIFICATIONS & TEXT AREA */}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Cpu className="h-3.5 w-3.5 text-accent animate-pulse" />
            <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[2px] text-accent/60">
              Procurement Node
            </span>
          </div>
          
          <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-accent transition-colors truncate italic">
            {item.name}
          </h3>
          
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <Badge variant="outline" className="border-accent/30 text-accent bg-accent/5 text-[8px] font-black tracking-widest uppercase py-0 px-2 rounded-sm">
              Quote_Required
            </Badge>
            <div className="flex items-center gap-1.5 text-[9px] font-mono text-white/30 italic">
               <FileSearch className="h-3 w-3" />
               <span className="hidden xs:inline">Technical review pending</span>
               <span className="xs:hidden">Pending Review</span>
            </div>
          </div>
        </div>

        {/* 3. QUANTITY & SYSTEM CONTROLS */}
        <div className="flex items-center justify-between mt-6 sm:mt-4 gap-2">
          
          {/* Quantity Stepper */}
          <div className="flex items-center bg-white/5 p-1 rounded-lg border border-white/5">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-white/40 hover:text-white hover:bg-white/10"
              onClick={() => onUpdateQty(-1)}
              disabled={item.qty <= 1}
            >
              <Minus className="h-3.5 w-3.5" />
            </Button>
            
            <div className="w-10 text-center text-xs sm:text-sm font-black text-white font-mono">
              {item.qty}
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-white/40 hover:text-accent hover:bg-white/10"
              onClick={() => onUpdateQty(1)}
            >
              <Plus className="h-3.5 w-3.5" />
            </Button>
          </div>

          {/* Pricing Status & Delete */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex flex-col items-end">
              <span className="text-[8px] font-black uppercase tracking-widest text-white/20">Valuation</span>
              <span className="font-mono text-[10px] sm:text-sm font-bold text-white/60 tracking-tighter uppercase">
                POA_Pending
              </span>
            </div>
            
            <div className="h-8 w-[1px] bg-white/10" />
            
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 text-white/20 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all group/del"
              onClick={onRemove}
            >
              <Trash2 className="h-4 w-4 sm:h-5 w-5 transition-transform group-hover/del:scale-110" />
            </Button>
          </div>
        </div>
      </div>

      {/* 4. SCAN LINE ANIMATION 
          Only visible on desktop/hover to keep mobile scrolling smooth.
      */}
      <div className="absolute top-0 left-0 w-[2px] h-full bg-accent/40 -translate-x-full group-hover:animate-scan transition-all hidden sm:block pointer-events-none" />
    </div>
  );
}