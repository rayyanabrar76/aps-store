'use client';

import { useState, useEffect } from "react";
import { ArrowLeft, ShoppingBag, Terminal, ShieldCheck, Activity, Search } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { CartItem } from "@/components/CartItem";
import { CheckoutForm } from "@/components/CheckoutForm";
// ❌ REMOVED: import { Footer } from "@/components/Footer";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Order } from "@/types/store";

const CartPage = () => {
  const { cart, updateQty, removeItem, clearCart, totalItems } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState<string | null>(null);

  // Calculate total price based on items in cart
  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [orderPlaced]);

  const handlePlaceOrder = async (formData: Omit<Order, 'items' | 'total'>) => {
    setIsProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    const orderId = `APS-${Date.now().toString(36).toUpperCase()}`;
    
    clearCart();
    setOrderPlaced(orderId);
    setIsProcessing(false);

    toast({
      title: "Authorization Successful",
      description: `Deployment ID ${orderId} has been queued for engineering review.`,
    });
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex flex-col bg-[#050505] selection:bg-accent selection:text-black">
        <Header cartCount={0} />
        <main className="flex-1 flex items-center justify-center pt-24 pb-12 px-4 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
          
          <div className="text-center max-w-xl mx-auto relative z-10">
            <div className="h-20 w-20 md:h-24 md:w-24 rounded-2xl md:rounded-3xl bg-accent flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-[0_0_50px_rgba(255,171,0,0.3)] rotate-3">
              <ShieldCheck className="h-10 w-10 md:h-12 md:w-12 text-black" />
            </div>
            <h1 className="font-display text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 uppercase italic tracking-tighter">
              Inquiry <span className="text-accent">Transmitted</span>
            </h1>
            <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl mb-8 backdrop-blur-xl">
               <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[3px] text-white/40 mb-2">Unique Deployment ID</p>
               <p className="font-mono text-xl md:text-3xl font-bold text-white mb-4 tracking-widest break-all">{orderPlaced}</p>
               <div className="h-[1px] w-full bg-white/10 my-4" />
               <p className="text-xs md:text-sm text-white/60 leading-relaxed font-light italic">
                 "Our engineering team has received your technical request. A project manager will contact you via the provided protocol within 24 hours."
               </p>
            </div>
            <Button variant="outline" className="w-full md:w-auto border-white/20 text-white hover:bg-accent hover:text-black hover:border-accent h-12 md:h-14 px-10 rounded-xl uppercase font-black tracking-widest text-[10px]" asChild>
              <Link href="/">Return to Dashboard</Link>
            </Button>
          </div>
        </main>
        {/* ❌ REMOVED: <Footer /> - Now comes from App.tsx layout */}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] selection:bg-accent selection:text-black">
      <Header cartCount={totalItems} />
      
      <main className="flex-1 pt-24 pb-12 md:pt-36 lg:pt-40 md:pb-20 relative">
        <div className="container max-w-7xl px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6 relative z-10">
            <div className="space-y-1">
                <Link href="/" className="group inline-flex items-center gap-2 text-white/40 hover:text-accent transition-all mb-2 text-[9px] md:text-[10px] font-black uppercase tracking-[2px]">
                    <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" /> Back to Core Systems
                </Link>
                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase italic tracking-tighter leading-none">
                    Deployment <span className="text-white/20 not-italic">Manifest</span>
                </h1>
            </div>
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-3 md:p-4 rounded-xl md:rounded-2xl backdrop-blur-md self-start md:self-center">
                <Activity className="h-4 w-4 md:h-5 md:w-5 text-accent animate-pulse" />
                <div className="flex flex-col">
                    <span className="text-[8px] md:text-[10px] font-black text-white/40 uppercase tracking-widest">System Status</span>
                    <span className="text-[10px] md:text-xs font-bold text-white italic">Active_Inquiry_Session</span>
                </div>
            </div>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-20 md:py-32 border border-dashed border-white/10 rounded-[2rem] md:rounded-[3rem] bg-white/[0.01] relative overflow-hidden px-6">
              <ShoppingBag className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 md:h-64 md:w-64 text-white/[0.02] -rotate-12 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="h-16 w-16 md:h-20 md:w-20 rounded-2xl md:rounded-[2rem] bg-white/5 flex items-center justify-center mx-auto mb-6 border border-white/10 shadow-2xl">
                  <Terminal className="h-6 w-6 md:h-8 md:w-8 text-white/20" />
                </div>
                <h2 className="font-display text-xl md:text-2xl font-black text-white mb-2 uppercase italic">
                  Manifest is Empty
                </h2>
                <p className="text-white/40 mb-8 md:mb-10 max-w-xs mx-auto text-[10px] md:text-[11px] font-bold uppercase tracking-widest leading-loose">
                  No industrial assets have been queued for deployment. Please review our database.
                </p>
                <Button className="w-full md:w-auto group bg-white text-black hover:bg-accent hover:scale-105 transition-all font-black uppercase tracking-[2px] text-[10px] h-14 md:h-16 px-10 md:px-12 rounded-xl md:rounded-2xl" asChild>
                  <Link href="/#products" className="flex items-center justify-center gap-3">
                    <Search className="h-4 w-4" />
                    Access Asset Catalog
                  </Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-7 space-y-4 md:space-y-6">
                <div className="flex items-center justify-between px-2 mb-2">
                   <span className="text-[9px] md:text-[10px] font-black text-white/20 uppercase tracking-[3px] md:tracking-[4px]">Active_Line_Items</span>
                   <div className="h-[1px] flex-1 mx-4 md:mx-6 bg-white/5" />
                   <span className="text-[9px] md:text-[10px] font-black text-accent uppercase tracking-[3px] md:tracking-[4px] whitespace-nowrap">{cart.length} Units</span>
                </div>
                <div className="space-y-4">
                  {cart.map((item) => (
                    <CartItem
                      key={item.productId}
                      item={item}
                      onUpdateQty={(delta) => updateQty(item.productId, delta)}
                      onRemove={() => removeItem(item.productId)}
                    />
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
                <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-1">
                  {/* Updated CheckoutForm with items and total props */}
                  <CheckoutForm
                    onPlaceOrder={handlePlaceOrder}
                    isProcessing={isProcessing}
                    items={cart}
                    total={totalAmount}
                  />
                </div>
                
                <div className="flex items-start gap-4 px-6 md:px-8 py-5 md:py-6 rounded-2xl md:rounded-[2rem] bg-white/[0.02] border border-white/5 group hover:border-accent/20 transition-all">
                    <ShieldCheck className="h-5 w-5 md:h-6 md:w-6 text-accent/40 group-hover:text-accent transition-colors shrink-0" />
                    <div className="space-y-1.5">
                      <p className="text-[9px] md:text-[10px] leading-relaxed text-white/30 uppercase font-black tracking-widest">
                        Authorized APS Terminal
                      </p>
                      <p className="text-[8px] md:text-[9px] leading-relaxed text-white/20 uppercase font-bold tracking-[1px]">
                        All deployment manifests are subject to site-specific technical verification by our engineering corps.
                      </p>
                    </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};


export default CartPage;