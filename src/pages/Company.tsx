"use client";

import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { 
  ArrowRight, Cpu, Activity, Zap, ShieldCheck, 
  Settings, Database, X, Send, 
  Loader2, CheckCircle2, AlertCircle, ChevronRight,
  Search, Filter, Download, Info, ExternalLink, Package
} from "lucide-react";

function CompanyProfile() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const aboutVideoRef = useRef<HTMLVideoElement>(null);
  const ctaVideoRef = useRef<HTMLVideoElement>(null);
  
  // State Management
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  // Auto-play video logic
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => console.error("Video Error:", err));
    }
    if (aboutVideoRef.current) {
      aboutVideoRef.current.play().catch((err) => console.error("Video Error:", err));
    }
    if (ctaVideoRef.current) {
      ctaVideoRef.current.play().catch((err) => console.error("Video Error:", err));
    }
  }, []);

  // Data Definitions
  const productCategories = [
    { 
      label: "Industrial Diesel", 
      range: "Up to 2500kVA", 
      sub: "Heavy Duty Series",
      color: "hover:bg-red-950/20",
      icon: <Database size={32} />,
      count: "4+ Models",
      description: "High-capacity diesel generators for mission-critical operations"
    },
    { 
      label: "Clean Gas", 
      range: "Up to 125kVA", 
      sub: "Sustainable Series",
      color: "hover:bg-[#3D3D6B]/20",
      icon: <Zap size={32} />,
      count: "3+ Models",
      description: "Eco-friendly gas-powered solutions for sustainable energy"
    },
    { 
      label: "Portable Petrol", 
      range: "Up to 10kVA", 
      sub: "Rapid Series",
      color: "hover:bg-white/5",
      icon: <Activity size={32} />,
      count: "3+ Models",
      description: "Compact portable generators for mobile operations"
    },
  ];

  const services = [
    { title: "Turnkey Power Solutions", desc: "Complete design, installation, and commissioning of generator systems from 10kVA to 2500kVA+", icon: <Database size={20} /> },
    { title: "Preventive Maintenance", desc: "Scheduled inspections, oil analysis, and performance testing to maximize uptime", icon: <Settings size={20} /> },
    { title: "Emergency Response", desc: "24/7 rapid deployment teams for critical power failures and system breakdowns", icon: <Zap size={20} /> },
    { title: "Load Bank Testing", desc: "Comprehensive testing protocols ensuring generators meet specified performance criteria", icon: <Activity size={20} /> },
    { title: "Synchronization Systems", desc: "Parallel operation configurations for scalable and redundant power architectures", icon: <Cpu size={20} /> },
    { title: "Remote Monitoring", desc: "Real-time telemetry and diagnostics for proactive issue detection", icon: <ShieldCheck size={20} /> },
  ];

  const sectors = [
    { name: "Telecommunications", detail: "Carrier-grade backup for tower sites and data centers" },
    { name: "Healthcare", detail: "Mission-critical power for hospitals and medical facilities" },
    { name: "Manufacturing", detail: "Continuous operation support for production lines" },
    { name: "Banking & Finance", detail: "Uninterrupted power for ATM networks and branches" },
    { name: "Hospitality", detail: "Seamless guest experience during grid instability" },
    { name: "Construction", detail: "Portable power for remote and temporary sites" },
  ];

  const milestones = [
    { year: "1998", event: "Founded in Lahore with 3 engineers and a single service van" },
    { year: "2005", event: "Deployed first 1000kVA+ system for telecommunications sector" },
    { year: "2012", event: "Expanded to nationwide coverage with 8 regional service centers" },
    { year: "2018", event: "Achieved ISO 9001:2015 certification for quality management" },
    { year: "2023", event: "Surpassed 850MW cumulative installed capacity across Pakistan" },
  ];

  const techSpecs = [
    { parameter: "Standby Power", value: "2500 kVA", icon: <Zap size={14} /> },
    { parameter: "Prime Power", value: "2250 kVA", icon: <Activity size={14} /> },
    { parameter: "Engine", value: "Mitsubishi", icon: <Cpu size={14} /> },
    { parameter: "Frequency", value: "50Hz", icon: <Settings size={14} /> },
  ];

  const stats = [
    { label: "MW Delivered", value: "850+" },
    { label: "Active Sites", value: "1.2k" },
    { label: "Engineers", value: "45+" },
    { label: "Support", value: "24/7" },
  ];

  // EmailJS Logic
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    emailjs.sendForm(
      "service_dp4ba72", 
      "template_8psbbh2",
      formRef.current!, 
      "mkG8cTQ0vwWahC6JO"
    )
    .then(() => {
      setStatus("success");
      setIsSubmitting(false);
      setTimeout(() => {
        setIsModalOpen(false);
        setStatus("idle");
      }, 3000);
    })
    .catch((_error) => {
      // Silence noisy console errors in production; surface status via UI state instead.
      setStatus("error");
      setIsSubmitting(false);
    });
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#DC2626] antialiased overflow-x-hidden">
      
      {/* --- INQUIRY MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={() => !isSubmitting && setIsModalOpen(false)} />
          <div className="relative w-full max-w-xl bg-[#0A0A0A] border border-white/10 p-8 md:p-12 shadow-2xl animate-in zoom-in-95 duration-300">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-white/20 hover:text-[#DC2626] transition-colors">
              <X size={24} />
            </button>

            {status === "success" ? (
              <div className="py-20 text-center space-y-6">
                <CheckCircle2 size={60} className="text-green-500 mx-auto animate-pulse" />
                <h3 className="text-2xl font-black italic uppercase tracking-tighter">Transmission Confirmed</h3>
                <p className="text-white/40 text-[10px] uppercase tracking-[0.3em]">Project brief logged to APS Central Command.</p>
              </div>
            ) : (
              <>
                <div className="mb-10">
                  <p className="text-[#DC2626] text-[10px] font-black uppercase tracking-[0.5em] mb-2">// SECURE CHANNEL</p>
                  <h2 className="text-4xl font-black italic uppercase tracking-tighter">Project <span className="text-white/20">Briefing.</span></h2>
                </div>

                <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input name="user_name" required placeholder="NAME" className="bg-white/5 border border-white/10 p-4 text-xs font-bold uppercase tracking-widest focus:border-[#DC2626] outline-none transition-all" />
                    <input name="user_email" required type="email" placeholder="EMAIL" className="bg-white/5 border border-white/10 p-4 text-xs font-bold uppercase tracking-widest focus:border-[#DC2626] outline-none transition-all" />
                  </div>
                  <select name="power_range" required className="text-5-1 bg-white/5 border border-white/10 p-4 text-xs font-bold uppercase tracking-widest focus:border-[#DC2626] outline-none appearance-none">
                    <option value="" className="bg-black">SELECT KVA RANGE</option>
                    <option value="10-100kVA" className="bg-black">10 - 100 kVA</option>
                    <option value="100-500kVA" className="bg-black">100 - 500 kVA</option>
                    <option value="500-2500kVA+" className="bg-black">500 - 2500+ kVA</option>
                  </select>
                  <textarea name="message" required rows={4} placeholder="OPERATIONAL BRIEF..." className="w-full bg-white/5 border border-white/10 p-4 text-xs font-bold uppercase tracking-widest focus:border-[#DC2626] outline-none resize-none" />
                  
                  {status === "error" && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2"><AlertCircle size={14} /> Error: Check Signal Connection.</p>}
                  
                  <button disabled={isSubmitting} className="w-full group relative py-6 bg-[#DC2626] overflow-hidden transition-all active:scale-[0.98] disabled:bg-white/10">
                    <span className="relative z-10 flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[0.5em]">
                      {isSubmitting ? <Loader2 className="animate-spin" /> : <>Transmit Briefing <Send size={14} /></>}
                    </span>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* --- HERO SECTION --- */}
      <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-20" />
          <video ref={videoRef} autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/videos/slide-2.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-30 text-center px-6">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-[#DC2626]" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/60">Advanced Power Solutions</span>
            <div className="h-px w-12 bg-[#DC2626]" />
          </div>
          <h1 className="text-[12vw] md:text-[9vw] font-black italic uppercase leading-[0.8] tracking-tighter mb-12">
            Prime <br /> <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">Engineering.</span>
          </h1>
          <button onClick={() => setIsModalOpen(true)} className="group relative px-16 py-6 border border-white/10 bg-black/20 backdrop-blur-xl transition-all hover:border-[#DC2626]">
            <div className="absolute inset-0 bg-[#DC2626] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.5em]">Initialize Briefing</span>
          </button>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="bg-white text-black py-20 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="text-4xl md:text-6xl font-black italic mb-2 leading-none">{s.value}</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- ASSETS SECTION --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-20">
            <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-6 text-white">
              The <span className="text-[#3D3D6B]">Assets.</span>
            </h2>
            <div className="h-2 w-24 bg-[#DC2626] mb-6" />
            <p className="text-white/40 text-sm max-w-2xl">
              From compact portable units to industrial-scale power plants. Explore our complete range of power generation solutions.
            </p>
          </div>

          {/* Product Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 mb-16">
            {productCategories.map((category, i) => (
              <div key={i} className={`group relative h-[500px] md:h-[650px] bg-[#070707] transition-all duration-700 ${category.color}`}>
                <div className="p-12 h-full flex flex-col justify-between relative z-10">
                  <div>
                    <div className="text-[#DC2626] mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                      {category.icon}
                    </div>
                    <h3 className="text-4xl font-black italic uppercase tracking-tighter group-hover:translate-x-4 transition-transform mb-4">
                      {category.label}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed">{category.description}</p>
                  </div>
                  <div>
                    <p className="text-5xl font-black text-white/[0.02] group-hover:text-white/10 transition-colors mb-4">
                      {category.range}
                    </p>
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 flex items-center gap-3 mb-6">
                      {category.sub} <ChevronRight size={12} className="text-[#DC2626]" />
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/60">{category.count}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA to Inventory */}
          <div className="text-center bg-gradient-to-r from-[#DC2626]/10 via-[#3D3D6B]/10 to-[#DC2626]/10 border border-white/10 p-12 md:p-16">
            <div className="max-w-3xl mx-auto space-y-8">
              <div>
                <p className="text-[#DC2626] text-[10px] font-black uppercase tracking-[0.5em] mb-4">// FULL TECHNICAL ARCHIVE</p>
                <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-tight mb-4">
                  Explore Complete <span className="text-white/20">Product Line</span>
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  Browse our full catalog with detailed specifications, engine models, technical data sheets, and instant quote requests for over 10+ power generation solutions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/inventory"
                  className="group relative px-12 py-6 bg-[#DC2626] overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]"
                >
                  <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.5em] flex items-center gap-4 justify-center">
                    View Full Catalog <Package size={16} className="group-hover:rotate-12 transition-transform" />
                  </span>
                </Link>
                
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-12 py-6 border-2 border-white/20 text-[10px] font-black uppercase tracking-[0.5em] hover:border-[#DC2626] hover:bg-[#DC2626]/10 transition-all"
                >
                  Request Custom Quote
                </button>
              </div>

              <div className="flex items-center justify-center gap-8 text-white/20 text-xs pt-6 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <Database size={14} />
                  <span>10+ Models</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={14} />
                  <span>5kVA - 2500kVA</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} />
                  <span>OEM Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TECHNICAL SPECS SECTION --- */}
      <section className="py-32 px-6 bg-[#08080C] relative border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.9]">
              2500<span className="text-[#3D3D6B]">kVA</span> <br /> Output <br /> Protocol.
            </h2>
            <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] leading-loose max-w-sm">
              Standardized synchronization for data centers and high-scale industrial clusters.
            </p>
          </div>
          <div className="bg-black/40 border border-white/10 backdrop-blur-3xl">
            {techSpecs.map((spec, i) => (
              <div key={i} className="flex justify-between items-center p-8 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                <div className="flex items-center gap-4">
                  <span className="text-[#3D3D6B]">{spec.icon}</span>
                  <p className="text-white/30 text-[10px] uppercase tracking-widest">{spec.parameter}</p>
                </div>
                <p className="text-xl font-black italic uppercase tracking-tighter">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <video ref={aboutVideoRef} autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/videos/slide-3.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="max-w-7xl mx-auto relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-20">
            <div className="lg:col-span-2">
              <p className="text-[#DC2626] text-[10px] font-black uppercase tracking-[0.5em] mb-4">// ESTABLISHED 1998</p>
              <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.9] mb-8">
                Who We <span className="text-white/20">Are.</span>
              </h2>
              <div className="h-2 w-16 bg-[#3D3D6B]" />
            </div>
            <div className="lg:col-span-3 space-y-8 text-white/60 leading-relaxed">
              <p className="text-lg">
                Advanced Power Solutions (APS) is Pakistan's leading provider of industrial generator systems and power continuity solutions. For over 25 years, we've been the backbone of mission-critical operations across telecommunications, healthcare, manufacturing, and infrastructure sectors.
              </p>
              <p>
                What started as a three-person operation in Lahore has grown into a nationwide network of 45+ certified engineers, 8 regional service centers, and over 850 megawatts of deployed generating capacity. We don't just supply generators—we engineer complete power ecosystems tailored to each client's operational reality.
              </p>
              <p>
                Our technical expertise spans the full spectrum: from compact 10kVA portable units for construction sites to synchronized 2500kVA+ parallel systems powering data centers. Every installation is backed by our 24/7 emergency response protocol and predictive maintenance programs designed to maximize uptime.
              </p>
              <p className="text-white/40 text-sm italic">
                APS holds ISO 9001:2015 certification and maintains strategic partnerships with global OEMs including Mitsubishi, Cummins, and Perkins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="py-32 px-6 bg-[#08080C] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-6">
              Core <span className="text-[#DC2626]">Capabilities.</span>
            </h2>
            <p className="text-white/30 text-sm max-w-2xl">
              End-to-end power solutions engineered for reliability, deployed with precision, maintained for longevity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {services.map((s, i) => (
              <div key={i} className="bg-[#050505] p-10 hover:bg-[#0A0A0A] transition-colors group">
                <div className="text-[#3D3D6B] mb-6 group-hover:text-[#DC2626] transition-colors">{s.icon}</div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-4">{s.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTORS SECTION --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-6">
              Trusted <span className="text-[#3D3D6B]">Sectors.</span>
            </h2>
            <p className="text-white/30 text-sm">Industries that depend on APS for uninterrupted power</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, i) => (
              <div key={i} className="border border-white/10 p-8 hover:border-[#DC2626] transition-all group">
                <h3 className="text-2xl font-black italic mb-3 group-hover:text-[#DC2626] transition-colors">{sector.name}</h3>
                <p className="text-white/40 text-sm">{sector.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TIMELINE SECTION --- */}
      <section className="py-32 px-6 bg-black border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-6">
              The <span className="text-white/20">Journey.</span>
            </h2>
            <div className="h-2 w-24 bg-[#DC2626] mx-auto" />
          </div>
          <div className="space-y-16">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-12 items-start group">
                <div className="text-6xl font-black italic text-[#DC2626] group-hover:scale-110 transition-transform min-w-[140px]">{m.year}</div>
                <div className="pt-4 border-l-2 border-white/10 pl-8 group-hover:border-[#DC2626] transition-colors">
                  <p className="text-white/60 leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY APS SECTION --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.9] mb-12">
              Why <span className="text-[#3D3D6B]">Choose</span> <br /> APS?
            </h2>
          </div>
          <div className="space-y-8">
            <div className="border-l-4 border-[#DC2626] pl-8 py-4">
              <h3 className="text-xl font-black mb-2">Engineering Excellence</h3>
              <p className="text-white/50">45+ certified power systems engineers with deep OEM training and field experience across diverse industrial environments.</p>
            </div>
            <div className="border-l-4 border-[#3D3D6B] pl-8 py-4">
              <h3 className="text-xl font-black mb-2">Proven Track Record</h3>
              <p className="text-white/50">850+ MW deployed across 1,200+ active sites with documented uptime rates exceeding 99.7% for critical installations.</p>
            </div>
            <div className="border-l-4 border-white/20 pl-8 py-4">
              <h3 className="text-xl font-black mb-2">Rapid Response</h3>
              <p className="text-white/50">24/7/365 emergency dispatch with guaranteed 4-hour response times for metro areas and 12-hour nationwide coverage.</p>
            </div>
            <div className="border-l-4 border-white/10 pl-8 py-4">
              <h3 className="text-xl font-black mb-2">Lifecycle Support</h3>
              <p className="text-white/50">From initial site assessment to long-term maintenance contracts, we manage every phase of your power infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/80 z-10" />
          <video ref={ctaVideoRef} autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/videos/slide-1.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-30">
          <p className="text-[#DC2626] text-[10px] font-black uppercase tracking-[0.5em] mb-6">// POWER YOUR OPERATIONS</p>
          <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.9] mb-12">
            Ready to Deploy <br /> <span className="text-white/20">Reliability?</span>
          </h2>
          <button onClick={() => setIsModalOpen(true)} className="group relative px-20 py-8 border-2 border-[#DC2626] bg-[#DC2626]/10 backdrop-blur-xl hover:bg-[#DC2626] transition-all">
            <span className="text-[11px] font-black uppercase tracking-[0.5em] flex items-center gap-4 justify-center">
              Start Project Brief <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </span>
          </button>
        </div>
      </section>
    </main>
  );
}

export default CompanyProfile;