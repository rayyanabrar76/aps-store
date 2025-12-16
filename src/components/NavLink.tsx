'use client';  // ← Add this line at the very top

// rest of your code stays the same
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Zap, ShoppingCart, Menu, X, ArrowUpRight, Cpu, Globe } from "lucide-react";
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useSpring, 
  useTransform, 
  useMotionValue 
} from "framer-motion";

/**
 * APS BRAND CONSTANTS
 */
const BRAND = {
  NAVY: "#3D3D6B",
  RED: "#D64C54",
  WHITE: "#FFFFFF",
  DARK: "#0A0A0A",
  OFF_WHITE: "#F5F5F5"
};

/**
 * COMPONENT: MAGNETIC CLOSE BUTTON
 * Physics-based attraction for the mobile menu close trigger.
 */
const MagneticClose = ({ onClick }: { onClick: () => void }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.35);
    y.set((clientY - centerY) * 0.35);
  };

  return (
    <motion.button
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => { x.set(0); y.set(0); }}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      className="group relative h-20 w-20 flex items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white transition-colors duration-500 hover:border-[#D64C54] hover:bg-[#D64C54]"
    >
      <div className="absolute inset-0 rounded-full bg-[#D64C54]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <X size={32} strokeWidth={1} className="relative z-10" />
    </motion.button>
  );
};

/**
 * COMPONENT: DESKTOP NAVLINK
 * Features a cursor-tracking backlight glow.
 */
const NavLink = ({ href, children }: { href: string; children: ReactNode }) => {
  const pathname = usePathname();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onMouseMove={({ currentTarget, clientX, clientY }) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
      }}
      className="group relative px-6 py-3 outline-none"
    >
      <div className="relative flex items-center justify-center">
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(40px circle at ${mouseX}px ${mouseY}px, ${BRAND.RED}33, transparent 80%)`,
          }}
        />
        <span
          className={cn(
            "relative z-10 text-[10px] font-black uppercase tracking-[0.5em] transition-all duration-700",
            isActive ? "text-white" : "text-white/30 group-hover:text-white"
          )}
        >
          {children}
        </span>
        {isActive && (
          <motion.div
            layoutId="nav-underline"
            className="absolute -bottom-1 left-0 right-0 h-[1px]"
            style={{ background: `linear-gradient(90deg, transparent, ${BRAND.RED}, transparent)` }}
          />
        )}
      </div>
    </Link>
  );
};

/**
 * MAIN NAVBAR COMPONENT
 */
export function Navbar({ cartCount }: { cartCount: number }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, { stiffness: 100, damping: 30 });
  const navWidth = useTransform(smoothY, [0, 100], ["100%", "95%"]);
  const navBackground = useTransform(
    smoothY, 
    [0, 100], 
    ["rgba(10, 10, 10, 0)", "rgba(61, 61, 107, 0.15)"]
  );

  useEffect(() => {
    const unsub = scrollY.on("change", (latest) => setIsScrolled(latest > 30));
    return () => unsub();
  }, [scrollY]);

  const navLinks = ["Inventory", "Panels", "Projects", "Company"];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-4 md:pt-8 pointer-events-none">
      <motion.div
        style={{ width: navWidth, backgroundColor: navBackground }}
        className={cn(
          "pointer-events-auto relative mx-auto transition-all duration-1000 ease-spring overflow-hidden",
          isScrolled 
            ? "rounded-2xl border border-white/10 backdrop-blur-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] px-6 py-2" 
            : "rounded-none border-transparent px-8 py-4"
        )}
      >
        <div className="relative z-10 flex items-center justify-between">
          
          {/* LOGO SECTION */}
          <Link href="/" className="flex items-center gap-6 group">
            <div className="relative h-14 w-14 bg-black border border-white/10 rounded-full flex items-center justify-center overflow-hidden">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-20"
                style={{ background: `conic-gradient(from 0deg, transparent, ${BRAND.RED}, transparent)` }}
              />
              <Zap className="relative z-10 h-6 w-6 text-white group-hover:scale-125 transition-transform" fill={BRAND.RED} />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline">
                <span className="text-3xl font-black tracking-[-0.08em] text-white italic">APS</span>
                <span className="text-3xl font-light tracking-[-0.05em] text-white/40 italic ml-1">POWER</span>
              </div>
              <div className="h-[1px] w-full bg-gradient-to-r from-[#D64C54] to-transparent mt-1" />
              <span className="text-[6px] font-black tracking-[0.8em] text-white/30 uppercase mt-1">Global Industrial Grid</span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden xl:flex items-center bg-white/[0.02] border border-white/5 rounded-sm p-1">
            {navLinks.map((link) => (
              <NavLink key={link} href={`/${link.toLowerCase()}`}>{link}</NavLink>
            ))}
          </nav>

          {/* ACTION BUTTONS */}
          <div className="flex items-center gap-8">
            <div className="hidden lg:flex items-center gap-6 text-[9px] font-bold text-white/20 uppercase tracking-[0.3em]">
               <div className="flex items-center gap-2 hover:text-white transition-colors cursor-crosshair">
                 <Globe size={12} className="text-[#D64C54]" />
                 <span>Status: Optimal</span>
               </div>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/cart" className="relative">
                <button className="h-12 w-12 rounded-full border border-white/5 bg-white/[0.03] flex items-center justify-center text-white hover:border-[#D64C54]/50 transition-all group">
                  <ShoppingCart size={18} strokeWidth={1.5} />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 h-5 w-5 bg-[#D64C54] text-[9px] font-black rounded-full flex items-center justify-center shadow-[0_0_15px_#D64C54]">
                      {cartCount}
                    </span>
                  )}
                </button>
              </Link>

              <button className="group relative h-12 px-10 rounded-full bg-white text-black overflow-hidden hidden sm:block">
                <div className="absolute inset-0 bg-[#D64C54] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <a href="tel:+923008440485" className="relative z-10 flex items-center gap-3 font-black text-[10px] uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                  Establish Contact <ArrowUpRight size={14} />
                </a>
              </button>

              <button onClick={() => setMobileOpen(true)} className="xl:hidden p-4 text-white hover:text-[#D64C54] transition-colors">
                <Menu size={32} strokeWidth={1} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* MOBILE FULLSCREEN COMMAND CENTER */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-[#0A0A0A] flex flex-col pointer-events-auto overflow-y-auto"
          >
            <div className="sticky top-0 z-20 p-8 md:p-12 flex justify-between items-start pointer-events-none">
               <div className="text-sm font-black italic text-white/20 select-none tracking-[0.5em] pt-4">APS_COMMAND_01</div>
               <div className="pointer-events-auto">
                  <MagneticClose onClick={() => setMobileOpen(false)} />
               </div>
            </div>

            <div className="flex-1 flex flex-col justify-center px-8 md:px-24 py-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link}
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.8, ease: "circOut" }}
                  className="mb-2"
                >
                  <Link 
                    href={`/${link.toLowerCase()}`}
                    onClick={() => setMobileOpen(false)}
                    className="group flex items-baseline gap-6 text-6xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter text-white/5 hover:text-white transition-all duration-700"
                  >
                    <span className="text-xs font-mono text-[#D64C54] opacity-0 group-hover:opacity-100">0{i + 1}</span>
                    <span className="group-hover:italic group-hover:translate-x-4 transition-transform duration-500">{link}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="p-10 md:p-24 border-t border-white/5 bg-[#3D3D6B]/5 mt-auto">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                     <p className="text-[10px] text-[#D64C54] font-black tracking-[0.5em] uppercase mb-4 opacity-70">Contact Protocol</p>
                     <a href="tel:+923008440485" className="text-3xl text-white font-light tracking-tighter hover:text-[#D64C54] transition-colors underline underline-offset-8 decoration-white/5">+92 300 8440485</a>
                  </div>
                  <div className="pb-12 md:pb-0 opacity-40">
                     <p className="text-[10px] text-white font-black tracking-[0.5em] uppercase mb-4">System Identity</p>
                     <div className="flex items-center gap-4 text-white">
                        <Cpu size={24} strokeWidth={1} />
                        <div className="flex flex-col">
                          <span className="text-[9px] font-mono uppercase">Node: APS-PK-LHR</span>
                          <span className="text-[9px] font-mono uppercase">Status: Secure Line</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}