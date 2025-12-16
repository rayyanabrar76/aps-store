"use client";

import React, { useState } from "react";
import { 
  Network, Zap, Cpu, Server, Shield, Box, Code, Layers, 
  ChevronRight, Bolt, GitFork, TrendingUp, Minimize2, CheckCircle, Factory // <-- ADDED Factory HERE
} from "lucide-react";

// -------------------- Types --------------------

interface PanelType {
  title: string;
  subtitle: string;
  icon: JSX.Element;
  description: string;
  features: string[];
  color: string;
  seoKeywords: string[];
}

interface ManufacturingFeature {
  feature: string;
  detail: string;
  icon: JSX.Element;
}

// -------------------- Data --------------------

const panelTypes: PanelType[] = [
  {
    title: "Automatic Transfer Switch (ATS) Panels",
    subtitle: "Seamless Source Switching",
    icon: <Zap size={32} />,
    description: "Our custom-built ATS panels manage the instantaneous and safe transfer of load between utility mains and the generator set. Essential for uninterrupted power supply and Tier IV data center compliance.",
    features: [
      "Open and Closed Transition Options (Soft Transfer)",
      "Digital Controller Integration (e.g., ComAp, Deep Sea)",
      "Motorized Circuit Breaker or Contactor-based switching",
      "Source Priority Selection and Load Shedding capabilities",
      "Integrated Bypass-Isolation Switches (Optional)"
    ],
    color: "#DC2626",
    seoKeywords: ["ATS panel", "automatic transfer switch", "closed transition ATS", "power transfer switch", "uninterrupted power supply"],
  },
  {
    title: "Automatic Mains Failure (AMF) Panels",
    subtitle: "Generator Set Automation",
    icon: <Cpu size={32} />,
    description: "AMF panels are the brain of the generator system, monitoring utility supply and initiating automatic start/stop and protection sequences upon grid failure, ensuring absolute reliability.",
    features: [
      "Grid Voltage and Frequency Monitoring",
      "Automatic Engine Start/Stop Sequencing",
      "Multi-point Engine and Alternator Protection",
      "Full Diagnostic Display and Event Logging",
      "Remote SCADA Communication (Modbus RTU/TCP)"
    ],
    color: "#3D3D6B",
    seoKeywords: ["AMF panel", "automatic generator start", "mains failure panel", "generator automation", "remote start controller"],
  },
  {
    title: "Digital Paralleling Switchgear (PSM)",
    subtitle: "Scalable Power Capacity",
    icon: <Server size={32} />,
    description: "High-capacity switchgear designed for synchronizing multiple generators to the busbar or to the utility grid (G-to-G / G-to-Utility). Essential for multi-megawatt installations.",
    features: [
      "Digital Synchronization and Load Sharing Algorithms",
      "High-Speed Breaker Actuation (Less than 100ms)",
      "Custom Busbar Systems up to 4000A",
      "Utility Parallel Operation (Peak Shaving/Load Management)",
      "Selectivity and Arc Flash Mitigation Integration"
    ],
    color: "#DC2626",
    seoKeywords: ["paralleling switchgear", "generator synchronization", "multi-megawatt power", "load sharing panel", "utility parallel"],
  },
  {
    title: "Power Factor Correction (APFC) Units",
    subtitle: "Efficiency and Compliance",
    icon: <TrendingUp size={32} />,
    description: "Automatic Power Factor Correction units monitor power quality in real-time and inject capacitance to maintain an optimal power factor, reducing penalties and improving system efficiency.",
    features: [
      "Real-Time Reactive Power Monitoring",
      "Automatic Stepped Capacitance Switching",
      "Harmonic Filtering Reactors (Optional)",
      "Reduces Power Utility Penalties and Energy Loss",
      "Extends Lifespan of Generator and Electrical Components"
    ],
    color: "#3D3D6B",
    seoKeywords: ["APFC panel", "power factor correction", "harmonic filtering", "reactive power compensation", "electrical efficiency"],
  },
];

const manufacturingFeatures: ManufacturingFeature[] = [
  {
    feature: "In-House Fabrication & Assembly",
    detail: "Total control over the manufacturing process from CAD design to final wiring, ensuring precision and quality control over every switchgear panel.",
    icon: <Factory size={24} />,
  },
  {
    feature: "IEC/UL Certified Compliance",
    detail: "All electrical panels are built to stringent international safety standards (IEC 61439, UL 508A, or local equivalents) for guaranteed regulatory acceptance.",
    icon: <CheckCircle size={24} />,
  },
  {
    feature: "Robust Enclosure Design (IP Rated)",
    detail: "Heavy-duty sheet metal enclosures, powder-coated, and rated IP4X/IP54 for maximum protection against dust and moisture in harsh industrial environments.",
    icon: <Shield size={24} />,
  },
  {
    feature: "Arc Flash Mitigation Design",
    detail: "Designing panels with enhanced busbar separation and safety features to minimize the risk and impact of potentially catastrophic arc flash incidents.",
    icon: <Minimize2 size={24} />,
  },
];

// -------------------- Component --------------------

const PanelsPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans antialiased overflow-x-hidden">

      {/* 1. HERO SECTION (SEO Optimized for "ATS AMF Panel Manufacturing," "Custom Switchgear") */}
      <section className="relative pt-48 pb-32 px-6 bg-[#151515] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/switchgear-pattern.png')] opacity-10" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#DC2626]" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/60">Electrical Engineering Excellence</span>
            <div className="h-px w-12 bg-[#DC2626]" />
          </div>
          
          <h1 className="text-7xl md:text-8xl font-black italic uppercase leading-[0.9] tracking-tighter mb-6">
            Custom <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">Control Panels & Switchgear.</span>
          </h1>
          
          <p className="text-white/60 text-lg max-w-4xl leading-relaxed">
            We specialize in the design and manufacturing of highly reliable ATS, AMF, and Digital Switchgear panels. Engineered in-house to strict IEC/UL standards, our electrical panels are the core of resilient critical power infrastructure.
          </p>
        </div>
      </section>

      {/* 2. CORE PANEL TYPES (SEO Focus on Product Names) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-4">
              Our Core <span className="text-[#DC2626]">Panel Solutions.</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              From generator automation to multi-megawatt synchronization, we provide the intelligent controls required for maximum system efficiency and uptime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {panelTypes.map((panel, i) => (
              <div key={i} className="bg-[#070707] p-10 rounded-lg border-l-8 transition-all hover:bg-[#0E0E0E] shadow-xl" style={{ borderColor: panel.color }}>
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-white/5 mr-4 text-white" style={{ color: panel.color }}>{panel.icon}</div>
                  <div>
                    <h3 className="text-3xl font-black italic uppercase tracking-tight text-white">{panel.title}</h3>
                    <p className="text-sm font-semibold text-white/50">{panel.subtitle}</p>
                  </div>
                </div>

                <p className="text-white/60 text-sm leading-relaxed mb-6">{panel.description}</p>
                
                <h4 className="text-base font-bold text-[#DC2626] mb-3 flex items-center">
                  <GitFork size={16} className="mr-2" /> Key Technical Features
                </h4>
                
                <ul className="space-y-2">
                  {panel.features.map((feature, j) => (
                    <li key={j} className="flex items-start text-xs text-white/70">
                      <ChevronRight size={14} className="text-[#3D3D6B] mt-0.5 flex-shrink-0 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Internal SEO Keywords */}
                <div className="mt-6 pt-4 border-t border-white/10">
                    <span className="text-xs uppercase tracking-wider text-white/40 block mb-2">Target Applications</span>
                    <div className="flex flex-wrap gap-2">
                        {panel.seoKeywords.map((keyword, k) => (
                            <span key={k} className="text-xs px-3 py-1 bg-white/5 rounded text-white/60">{keyword}</span>
                        ))}
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MANUFACTURING AND QUALITY (Technical Credibility) */}
      <section className="py-32 px-6 bg-[#090909]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-4">
              Manufacturing <span className="text-[#3D3D6B]">Standards.</span>
            </h2>
            <div className="h-2 w-24 bg-[#DC2626] mb-6" />
            <p className="text-white/60 max-w-3xl">
              We maintain absolute control over the quality of our custom switchgear through specialized in-house panel manufacturing, guaranteeing compliance with the most demanding global standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {manufacturingFeatures.map((item, i) => (
              <div key={i} className="p-6 border-t-4 border-[#3D3D6B] bg-[#0E0E0E] flex flex-col items-start transition-all hover:bg-[#121212]">
                <div className="text-[#DC2626] mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold uppercase mb-3 text-white">{item.feature}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 4. TECHNICAL DEEP DIVE: BUSBARS AND CABLING (Advanced SEO) */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-4">
              Busbar & <span className="text-[#DC2626]">Cabling.</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Precision engineered electrical pathways for maximum conductivity and safety, from power entry to distribution points.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-[#070707] rounded-lg border-l-4 border-[#3D3D6B]">
              <Layers size={32} className="text-[#3D3D6B] mb-3" />
              <h3 className="text-2xl font-bold mb-2">High-Capacity Busbar Systems</h3>
              <p className="text-white/70 text-sm">Custom copper or aluminum busbar solutions up to 4000 Amps, electro-tinned and sleeved for superior conductivity, minimal resistance, and fault protection. Designed for optimal thermal performance.</p>
            </div>
            <div className="p-8 bg-[#070707] rounded-lg border-l-4 border-[#3D3D6B]">
              <Code size={32} className="text-[#3D3D6B] mb-3" />
              <h3 className="text-2xl font-bold mb-2">Precision Wiring & Coding</h3>
              <p className="text-white/70 text-sm">All control and power cabling is meticulously routed, labeled, and terminated using certified compression lugs. Adherence to strict wire sizing and color-coding standards (IEC/NEC) is mandatory.</p>
            </div>
            <div className="p-8 bg-[#070707] rounded-lg border-l-4 border-[#3D3D6B]">
              <Bolt size={32} className="text-[#3D3D6B] mb-3" />
              <h3 className="text-2xl font-bold mb-2">Load Testing & Validation</h3>
              <p className="text-white/70 text-sm">Before deployment, every control panel undergoes rigorous factory acceptance testing (FAT), including continuity checks, hi-pot testing, and functional simulation of all control logic.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION / SEO Anchor */}
      <section className="py-20 px-6 bg-[#DC2626] text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black italic uppercase mb-4 text-white">
            Custom Switchgear for Unrivaled Power Control
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Need a custom paralleling switchgear solution for a multi-megawatt project, or bespoke ATS panel manufacturing? Contact our electrical engineering team today.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-[#DC2626] bg-white hover:bg-gray-100 transition-colors shadow-xl"
          >
            Design My Custom Panel <ChevronRight size={20} className="ml-2" />
          </a>
        </div>
      </section>

      {/* 6. SEO Keyword Block (Hidden but highly effective) */}
      <section className="p-6 mt-16 text-white/5 bg-[#0A0A0A]">
        <h2 className="sr-only">SEO Keywords for Custom Electrical Panels and Switchgear</h2>
        <p className="text-xs">
          We are the leading ATS panel manufacturer and supplier of 
          
          AMF panels
          
           for 
          
          industrial generator sets
          
          . Our expertise covers custom 
          
          digital paralleling switchgear
          
           for 
          
          multi-megawatt synchronization and peak shaving applications. All electrical panels and switchgear panels are built in-house to IEC 61439 and UL 508A compliance standards, featuring advanced arc flash mitigation and high-capacity copper busbar systems up to 4000A. We deliver reliable power factor correction (APFC) units and closed transition ATS for zero-interruption critical power infrastructure. Contact us for bespoke control panel solutions and generator automation needs.
        </p>
      </section>

    </main>
  );
};

export default PanelsPage;