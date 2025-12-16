'use client';

import { Phone, Zap, ChevronRight, Menu, X, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeaderProps {
  cartCount?: number;
}

export function Header({ cartCount = 0 }: HeaderProps) {
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const pathname = usePathname();
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile && headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }
    };
    window.addEventListener("scroll", handleScroll);
    if (!isMobile) window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
  }, [mobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 z-[100] w-full transition-all duration-1000 px-4 md:px-10",
        scrolled ? "py-4" : "py-6 md:py-10"
      )}
    >
      {/* ATMOSPHERIC GLOW */}
      {!isMobile && (
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-700"
          style={{
            background: `radial-gradient(1000px circle at ${mousePos.x}px ${mousePos.y}px, rgba(220,38,38,0.08), rgba(61,61,107,0.05) 45%, transparent 80%)`,
          }}
        />
      )}

      <div
        className={cn(
          "container mx-auto flex h-16 md:h-20 items-center justify-between rounded-[1.5rem] md:rounded-[2.5rem] relative overflow-hidden transition-all duration-1000 glass-stealth px-4 md:px-8",
          scrolled ? "scale-[0.98]" : "scale-100"
        )}
      >
        {/* LIQUID LIGHT SWEEP */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-[#3D3D6B]/5 animate-liquid" />
        </div>

        {/* LOGO SECTION */}
        <div className="flex items-center gap-3 md:gap-6 relative z-10 lg:min-w-[240px]">
          <Link href="/" className="flex items-center gap-3 group/logo">
            <img src="/aps-logo.png" alt="APS" className="h-8 md:h-12 w-auto animate-bloom transition-transform duration-500 group-hover/logo:scale-105" />
            <div className="hidden sm:flex flex-col border-l border-white/10 pl-4 py-1">
              <span className="text-[9px] tracking-[0.5em] font-black uppercase text-white/40 group-hover/logo:text-red-600 transition-colors">Engineered</span>
              <span className="text-[9px] tracking-[0.5em] font-black uppercase text-white/20">Excellence</span>
            </div>
          </Link>
        </div>

        {/* CENTER NAV */}
        {!isMobile && (
          <nav className="hidden lg:flex flex-1 justify-center items-center gap-1 relative z-10 px-4">
            <div className="flex items-center gap-1 bg-black/20 border border-white/5 p-1.5 rounded-full backdrop-blur-2xl">
              {["Inventory", "Solutions", "Technology", "Company"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className={cn(
                    "px-4 xl:px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] transition-all relative group/nav whitespace-nowrap",
                    pathname === `/${item.toLowerCase()}` ? "text-white" : "text-white/40 hover:text-white"
                  )}
                >
                  <span className="relative z-10">{item}</span>
                  <span className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover/nav:scale-100 transition-transform duration-500 ease-out" />
                  {pathname === `/${item.toLowerCase()}` && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-4 rounded-full bg-red-600 shadow-[0_0_15px_#dc2626]" />
                  )}
                </Link>
              ))}
            </div>
          </nav>
        )}

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-2 md:gap-6 relative z-10 lg:min-w-[240px] justify-end">
          <div className="hidden xl:flex flex-col items-end">
             <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse shadow-[0_0_8px_#dc2626]" />
                <span className="text-[9px] font-black uppercase tracking-widest text-white/60">System Ready</span>
             </div>
             <a href="tel:+923008440485" className="text-[10px] font-bold text-white/30 hover:text-white transition-colors tracking-tighter">
                +92-300-8440485
             </a>
          </div>

          <Link href="/cart">
            <Button
              variant="outline"
              className={cn(
                "h-10 md:h-12 px-3 md:px-6 rounded-xl md:rounded-2xl border-white/10 transition-all duration-500 relative flex items-center active:scale-95",
                cartCount > 0 
                  ? "bg-gradient-to-r from-red-600 to-[#3D3D6B] border-red-500 shadow-[0_0_25px_rgba(220,38,38,0.4)] text-white" 
                  : "bg-white/[0.03] text-white hover:bg-white/[0.08]"
              )}
            >
              <Zap className={cn("h-4 w-4", cartCount > 0 && "fill-white")} />
              <span className="ml-2 md:ml-3 text-[10px] font-black uppercase tracking-widest text-white">Portal</span>
              {cartCount > 0 && (
                <Badge className="absolute -top-1.5 -right-1.5 bg-white text-black h-5 w-5 flex items-center justify-center p-0 text-[10px] font-black animate-bloom">
                  {cartCount}
                </Badge>
              )}
            </Button>
          </Link>

          {isMobile && (
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-1 text-white/60">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobile && mobileMenuOpen && (
        <div className="fixed inset-0 z-[90] bg-black/98 backdrop-blur-3xl p-8 pt-32 overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-500 border-t border-[#3D3D6B]/20">
          <button onClick={() => setMobileMenuOpen(false)} className="absolute top-10 left-8 flex items-center gap-2 text-red-600 font-black uppercase text-[10px] tracking-[0.3em]">
            <ArrowLeft size={16} /> Return
          </button>

          <div className="flex flex-col gap-4">
            {["Inventory", "Solutions", "Technology", "Company"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl font-black uppercase tracking-tighter text-white/40 flex justify-between items-center py-6 border-b border-[#3D3D6B]/10 group"
              >
                {item} <ChevronRight className="text-red-600 transition-transform group-hover:translate-x-2" />
              </Link>
            ))}
            
            <div className="mt-10 mb-10 bg-[#3D3D6B]/5 p-8 rounded-3xl border border-[#3D3D6B]/10">
               <div className="flex items-center gap-3 mb-4">
                  <Phone size={14} className="text-red-600" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Direct Support</span>
               </div>
               <a href="tel:+923008440485" className="text-2xl font-black text-white hover:text-red-600 transition-colors">+92 300 8440485</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}