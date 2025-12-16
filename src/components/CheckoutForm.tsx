'use client';  // ← Add this line at the very top

// rest of your code stays the same
import { useState } from "react";
import { Mail, Phone, MapPin, Building2, ShieldCheck, Cpu, Zap, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

import { Order, CartItem } from "@/types/store";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import emailjs from '@emailjs/browser';

interface CheckoutFormProps {
  onPlaceOrder: (order: Omit<Order, 'items' | 'total'>) => void;
  isProcessing: boolean;
  items: CartItem[];
  total: number;
}

export function CheckoutForm({
  onPlaceOrder,
  isProcessing: parentProcessing,
  items,
  total
}: CheckoutFormProps) {
  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    address: "",
    email: "",
    notes: "",
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // --- Validation ---
    if (!formData.customerName.trim() || !formData.phone.trim() || !formData.address.trim()) {
      toast({
        title: "DATA_INCOMPLETE",
        description: "All procurement fields are mandatory.",
        variant: "destructive",
        className: "bg-red-950 border-red-500 text-white font-mono"
      });
      return;
    }

    const phoneRegex = /^(\+92|0)?3[0-9]{9}$/;
    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      toast({
        title: "PROTOCOL_ERROR",
        description: "Invalid Pakistani contact sequence.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsProcessing(true);

      // --- Format Items for Email ---
      const formattedItems = items
        .map((item) => `- ${item.name} (Qty: ${item.qty}) - Price: ${item.price}`)
        .join("\n");

      // --- Prepare EmailJS Params ---
      const templateParams = {
        customerName: formData.customerName,
        phone: formData.phone,
        address: formData.address,
        email: formData.email,
        notes: formData.notes,
        order_items: formattedItems,
        total_amount: total.toLocaleString(),
      };

      await emailjs.send(
        'service_dp4ba72',
        'template_1cxkr6u',
        templateParams,
        'mkG8cTQ0vwWahC6JO'
      );

      toast({
        title: "SUCCESS",
        description: "Your request has been transmitted successfully. Deployment ID: APS-" + Math.random().toString(36).substring(2, 10).toUpperCase(),
        variant: "default",
      });

      // Call parent logic
      onPlaceOrder(formData);

      // Reset form
      setFormData({
        customerName: "",
        phone: "",
        address: "",
        email: "",
        notes: "",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "EMAIL_ERROR",
        description: "Failed to send your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative space-y-6 md:space-y-8 bg-[#0A0A0B] p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] border border-white/5 shadow-2xl overflow-hidden"
    >
      {/* HUD Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="p-1.5 sm:p-2 bg-accent/10 rounded-lg">
            <FileText className="h-3.5 w-3.5 sm:h-4 w-4 text-accent" />
          </div>
          <div>
            <span className="block text-[8px] sm:text-[10px] font-black uppercase tracking-[2px] sm:tracking-[3px] text-white/40 leading-none">Procurement_Form</span>
            <span className="text-[7px] sm:text-[8px] font-mono text-accent uppercase">Rev_5.0_Secure</span>
          </div>
        </div>
        <div className="flex items-center gap-2 px-2 sm:px-3 py-1 bg-white/[0.03] border border-white/5 rounded-full">
          <div className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[7px] sm:text-[8px] font-mono text-white/40 uppercase tracking-tight">Active</span>
        </div>
      </div>

      <div className="space-y-5 sm:space-y-6">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tighter uppercase italic leading-none">
          Engineering <span className="text-white/20">Manifest</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-2 group">
            <Label className="text-[8px] sm:text-[9px] uppercase tracking-widest text-white/30 font-black ml-1">Authority Name</Label>
            <Input
              className="bg-white/[0.03] border-white/5 text-white h-12 sm:h-14 rounded-xl sm:rounded-2xl focus:ring-accent transition-all"
              placeholder="e.g. Director Operations"
              value={formData.customerName}
              onChange={(e) => setFormData(prev => ({ ...prev, customerName: e.target.value }))}
            />
          </div>

          <div className="space-y-2 group">
            <Label className="text-[8px] sm:text-[9px] uppercase tracking-widest text-white/30 font-black ml-1">Primary Contact (Mobile)</Label>
            <Input
              className="bg-white/[0.03] border-white/5 text-white h-12 sm:h-14 rounded-xl sm:rounded-2xl focus:ring-accent transition-all font-mono"
              placeholder="03XX-XXXXXXX"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            />
          </div>
        </div>

        <div className="space-y-2 group">
          <Label className="text-[8px] sm:text-[9px] uppercase tracking-widest text-white/30 font-black ml-1">Installation Site / HQ Address</Label>
          <div className="relative">
            <Input
              className="bg-white/[0.03] border-white/5 text-white h-12 sm:h-14 pl-10 sm:pl-12 rounded-xl sm:rounded-2xl focus:ring-accent transition-all"
              placeholder="Provide full site address"
              value={formData.address}
              onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
            />
            <MapPin className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 w-5 text-white/20" />
          </div>
        </div>

        <div className="space-y-2 group">
          <Label className="text-[8px] sm:text-[9px] uppercase tracking-widest text-white/30 font-black ml-1">Technical Notes (Optional)</Label>
          <Textarea
            className="bg-white/[0.03] border-white/5 text-white min-h-[80px] sm:min-h-[100px] rounded-xl sm:rounded-2xl focus:ring-accent transition-all text-sm"
            placeholder="KVA rating, soundproofing, etc."
            value={formData.notes}
            onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
          />
        </div>
      </div>

      <div className="pt-4 sm:pt-6 border-t border-white/5">
        <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-accent/5 border border-accent/10 mb-6 sm:mb-8">
          <ShieldCheck className="h-5 w-5 text-accent shrink-0" />
          <div className="space-y-1">
            <h4 className="text-[10px] sm:text-[11px] font-black uppercase text-accent">Data Protection Protocol</h4>
            <p className="text-[8px] sm:text-[9px] leading-relaxed text-white/30 uppercase font-bold tracking-[0.5px]">
              APS will contact you within 24 hours with a custom quotation.
            </p>
          </div>
        </div>

        <Button
          type="submit"
          disabled={isProcessing || parentProcessing}
          className="w-full h-16 sm:h-20 bg-white text-black hover:bg-accent font-black uppercase tracking-[2px] sm:tracking-[4px] text-[10px] sm:text-xs rounded-xl sm:rounded-2xl transition-all active:scale-[0.98] group/submit"
        >
          {isProcessing || parentProcessing ? (
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="h-4 w-4 sm:h-5 w-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              <span>Transmitting...</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 sm:gap-3">
              <Zap className="h-4 w-4 sm:h-5 w-5 fill-current" />
              <span>Request Official Quotation</span>
            </div>
          )}
        </Button>
      </div>

      <p className="text-center text-[7px] sm:text-[8px] font-mono text-white/10 uppercase tracking-[2px] sm:tracking-[4px]">
        APS © 2025 | Industrial Transmission
      </p>
    </form>
  );
}
