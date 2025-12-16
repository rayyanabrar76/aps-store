"use client"; // Required for React hooks in Next.js App Router

import React, { useRef, useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { 
  Cpu, Zap, Activity, Shield, Radio, Gauge, 
  Network, Box, ChevronRight, Info,
  Volume2, Wind, Database, BarChart3,
  Eye, Server, Waves, Battery, HardHat, Bolt, TrendingUp,
  FlaskConical, Wrench, Leaf, Factory, Layers,
  CheckCircle, GitFork, Minimize2, Settings, Code, ZapOff
} from "lucide-react";

// -------------------- Types --------------------
interface CoreTechnology {
  title: string;
  icon: JSX.Element;
  color: string;
  specs: string[];
  description: string;
}

interface EnginePlatform {
  manufacturer: string;
  series: string;
  range: string;
  features: string[];
  efficiency: string;
  icon: JSX.Element;
}

interface SystemComponent {
  component: string;
  detail: string;
}

interface Capability {
  title: string;
  icon: JSX.Element;
  desc: string;
  metric: string;
  seoKeywords: string; 
}

interface InnovationArea {
  area: string;
  status: "In Development" | "Deployed" | "Pilot Phase";
  desc: string;
  icon: JSX.Element;
}

interface MaterialSpec {
  material: string;
  application: string;
  advantage: string;
  icon: JSX.Element;
}

interface ComplianceStandard {
  standard: string;
  description: string;
  icon: JSX.Element;
}


// -------------------- Component --------------------
const TechnologyPage: React.FC = () => {
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const [activeSystem, setActiveSystem] = useState<number>(0);

  useEffect(() => {
    if (heroVideoRef.current) {
      heroVideoRef.current.play().catch((err: unknown) => {
        console.error("Video Error:", err);
      });
    }
  }, []);

  // -------------------- Data (Significantly Expanded for SEO) --------------------
  
  const coreTechnologies: CoreTechnology[] = [
    {
      title: "Intelligent Control & Automation (The PLC Core)",
      icon: <Cpu size={32} />,
      color: "#DC2626",
      specs: [
        "AMF (Automatic Mains Failure) Panels with Redundancy",
        "Synchronizing and Advanced Load Sharing Algorithms",
        "PLC-Based Control Systems (e.g., ComAp, Deep Sea) for logic management",
        "Digital Governor Integration for +/- 0.25% Frequency Control",
        "Remote I/O Modules and Fiber Optic Communication"
      ],
      description: "Our intelligent control systems utilize industrial PLCs to ensure instantaneous power transitions, precise load balancing, and unparalleled generator set automation. This core intelligence is paramount for data center uptime and maintaining stable power quality."
    },
    {
      title: "Precision Power Distribution & Switchgear",
      icon: <Network size={32} />,
      color: "#3D3D6B",
      specs: [
        "Custom LT/HT Panel Manufacturing (IEC 61439 Certified)",
        "Closed Transition ATS (Automatic Transfer Switch) Integration",
        "Active Power Factor Correction Units (APFC) for efficiency",
        "Integrated Busbar Systems up to 4000A",
        "Selective Coordination and Arc Flash Mitigation"
      ],
      description: "We engineer robust power distribution systems from 10kVA to 4000kVA, featuring custom ATS panels and APFC systems. This guarantees peak electrical efficiency, superior transient response, and comprehensive fault protection, significantly reducing total cost of ownership (TCO)."
    },
    {
      title: "IoT Remote Monitoring & Predictive Analytics",
      icon: <Radio size={32} />,
      color: "#DC2626",
      specs: [
        "Real-Time SCADA Integration (Modbus/SNMP) over secure VPN",
        "GSM/4G/Satellite Telemetry Modules for global access",
        "Cloud-Based Analytics Dashboard with customizable alerts",
        "Predictive Diagnostic Modeling and Trend Analysis",
        "Fuel Management and Consumption Tracking"
      ],
      description: "Experience true 24/7 remote surveillance with predictive diagnostics and instant fault notification via our secure IoT platform. Our generator remote monitoring guarantees proactive maintenance, maximizing system resilience and supporting mission-critical operations globally."
    },
    {
      title: "Advanced Acoustic & Climate Control Engineering",
      icon: <Volume2 size={32} />,
      color: "#3D3D6B",
      specs: [
        "Weather-Proof Soundproof Enclosures (IP55/IP66 Standard)",
        "Ultra-low Noise Attenuation to 60dB@7m (Residential/Urban Compliant)",
        "Optimized CFD-Modeled Ventilation & Cooling Systems",
        "Heavy-Duty Anti-Vibration Mounts (AVMs)",
        "Modular/Containerized Canopy Designs for Rapid Deployment"
      ],
      description: "Our custom-engineered soundproof acoustic enclosures surpass regulatory compliance by achieving ultra-low noise levels. We employ advanced fluid dynamics (CFD) modeling to ensure optimal internal temperatures, extending the life of the industrial generator in extreme climates."
    }
  ];

  const enginePlatforms: EnginePlatform[] = [
    {
      manufacturer: "Mitsubishi Power",
      series: "S Series Diesel",
      range: "500-3000 kVA",
      features: ["Tier 3 Emissions Compliance", "Electronic Governor Precision", "12/16/20-Cylinder V-Configuration", "High Mean Effective Pressure", "Optimized Fuel Mapping"],
      efficiency: "98.2%",
      icon: <Gauge size={24} />
    },
    {
      manufacturer: "Cummins Power Systems",
      series: "QSK Series",
      range: "750-2500 kVA",
      features: ["CEGR Technology for low NOx", "SMARTORQUE Optimization for transient loads", "Triple-Stage Filtration System", "High-Pressure Common Rail (HPCR) Injection", "Data Center Continuous Rating"],
      efficiency: "97.8%",
      icon: <Activity size={24} />
    },
    {
      manufacturer: "Perkins Engines",
      series: "4000 Series",
      range: "275-2500 kVA",
      features: ["Smartcap Control Integration", "EGR Compliant Design", "Extended 500-Hour Service Intervals", "High Power Density Footprint", "Robust Mechanical Design"],
      efficiency: "96.9%",
      icon: <Zap size={24} />
    }
  ];

  const systemArchitecture: SystemComponent[] = [
    { component: "Fuel Management & Storage", detail: "Day Tank & Bulk Storage: Comprehensive design with automated leak detection, high/low-level alarms, and secure, automatic refill systems. Adherence to fire safety codes (NFPA 30)." },
    { component: "Cooling System Optimization", detail: "Oversized Radiator Sizing: Precision coolant monitoring, redundant fan selection, and advanced temperature regulation for high-ambient conditions (ISO 3046/SAE J1349). Ensures minimal thermal stress." },
    { component: "Exhaust Gas Management", detail: "Industrial Grade Silencers: Optimized back-pressure to maintain engine efficiency, flexible expansion joints, and specialized emission filtering systems (DPFs/SCR) required for densely populated areas." },
    { component: "Starting & Battery Redundancy", detail: "N+1 Starting Power: Heavy-duty battery banks, intelligent three-stage battery chargers, and optional pneumatic/electric starter redundancy for guaranteed instantaneous cold starts." },
    { component: "Engine Protection & Diagnostics", detail: "Multi-Point Safety: Protection against over-speed, low oil pressure, high coolant temp, load imbalance, and winding temperature (RTD monitoring). Integrated fault logging and historical data capture." },
    { component: "Electrical Grounding & Safety", detail: "Zero-Tolerance Safety: Certified earth pit system, dedicated lightning protection, and Neutral Earthing Resistor (NER) for safe high-voltage fault current dissipation." }
  ];

  const alternatorTechnology: SystemComponent[] = [
    { component: "Excitation System", detail: "Permanent Magnet Generator (PMG) or Auxiliary Winding (AREP) excitation for superior short-circuit capability and fault clearing." },
    { component: "Winding Pitch", detail: "Two-thirds pitch winding designed to suppress third harmonic currents and minimize voltage waveform distortion." },
    { component: "Voltage Regulation", detail: "Digital Automatic Voltage Regulator (AVR) providing industry-leading regulation of +/- 0.5% for stable supply under fluctuating loads." },
    { component: "Insulation Class", detail: "Class H insulation with tropical anti-condensation heating elements for maximum lifespan and protection against humidity." }
  ];


  const capabilities: Capability[] = [
    {
      title: "Tier IV Data Center Integration",
      icon: <Database size={28} />,
      desc: "Designing and commissioning power solutions that meet stringent Uptime Institute Tier IV standards, ensuring 2N redundancy, single points of failure elimination, and highest power quality.",
      metric: "Tier IV Compliance",
      seoKeywords: "Uptime Institute Tier IV, 2N redundancy, data center power solutions, fault tolerance"
    },
    {
      title: "Multi-Megawatt Parallel Operation",
      icon: <Server size={28} />,
      desc: "We design and commission advanced systems to synchronize multiple generators using digital controllers, ensuring seamless load sharing, system resilience, and scalable MVA output.",
      metric: "Up to 16 Units / 40 MVA",
      seoKeywords: "generator synchronization, N+1 redundancy, multi-megawatt parallel operation, digital controllers" 
    },
    {
      title: "Comprehensive Load Bank Testing",
      icon: <BarChart3 size={28} />,
      desc: "Rigorous generator load bank testing (resistive/reactive) with detailed reporting under simulated 100% loads to verify rated capacity, stability, and voltage transient response before deployment.",
      metric: "100% Load Test Certified",
      seoKeywords: "generator load bank testing, 100% load certification, performance validation, resistive-reactive testing" 
    },
    {
      title: "Complex Rooftop Installation",
      icon: <Wind size={28} />,
      desc: "Specialists in elevated deployments, managing structural analysis, complex crane logistics, vibration isolation systems, and advanced weatherproofing for high-rise commercial projects.",
      metric: "15+ Floors Expertise",
      seoKeywords: "rooftop generator installation, vibration isolation, complex crane logistics, structural analysis" 
    },
  ];

  const innovationAreas: InnovationArea[] = [
    { 
      area: "Hybrid Power Systems & BESS Integration", 
      status: "Deployed",
      desc: "Solar generator integration with Battery Energy Storage Systems (BESS) for peak shaving, demand response, and dramatically improved fuel efficiency and reduced emissions, lowering TCO.",
      icon: <Battery size={20} />
    },
    { 
      area: "IoT Predictive Maintenance 4.0", 
      status: "Deployed",
      desc: "Advanced machine learning algorithms analyze sensor data (oil, vibration, temperature) in real-time to accurately predict component failures (e.g., bearings) and optimize maintenance schedules proactively.",
      icon: <Eye size={20} />
    },
    { 
      area: "Microgrid & Distributed Generation", 
      status: "Pilot Phase",
      desc: "Developing autonomous, decentralized generation networks with self-healing capabilities, advanced load management, and integration with local renewable sources for ultimate resiliency.",
      icon: <Waves size={20} />
    },
    { 
      area: "Sustainable Fuel Readiness (HVO/Biofuel)", 
      status: "In Development",
      desc: "Ensuring all new industrial units are certified to run on various Biofuels (HVO, BTL), future-proofing assets against changing environmental regulations and carbon taxes.",
      icon: <Leaf size={20} />
    }
  ];

  const qualityAndCompliance: ComplianceStandard[] = [
    { standard: "ISO 9001:2015 Certification", description: "Our engineering, manufacturing, and service processes adhere to the highest international quality management standards.", icon: <CheckCircle size={24} /> },
    { standard: "IEC/UL/ANSI Electrical Standards", description: "All control panels and distribution gear are designed and fabricated to meet strict international and regional electrical safety codes.", icon: <Code size={24} /> },
    { standard: "NFPA 110 Compliance", description: "Emergency and standby power systems are built in accordance with National Fire Protection Association standards for reliability.", icon: <Factory size={24} /> },
    { standard: "Emissions Compliance (Tier 3/Stage V)", description: "Ensuring all engine platforms meet the latest global emissions standards for environmental protection.", icon: <Minimize2 size={24} /> }
  ];

  const serviceAndSupport: SystemComponent[] = [
    { component: "24/7 Rapid Response", detail: "Dedicated teams available around the clock to ensure instantaneous response to critical alerts and minimal downtime." },
    { component: "Preventative Maintenance Contracts", detail: "Customizable multi-year contracts covering oil analysis, filter changes, and detailed diagnostics, maximizing equipment lifespan." },
    { component: "Genuine Parts & Inventory", detail: "Maintaining extensive local inventory of OEM-certified parts to guarantee quality repairs and swift component replacement." },
    { component: "Advanced Engine Overhaul", detail: "In-house capability for complete top-end and bottom-end engine overhauls, extending the asset life cycle beyond 25,000 hours." }
  ];


  // -------------------- Render --------------------
  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#DC2626] antialiased overflow-x-hidden">
      <Header /> 
      {/* 1. HERO SECTION (Optimized for "Generator Technology Infrastructure, Data Center Power") */}
      <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden" aria-label="Generator Technology Infrastructure for Mission-Critical Power">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-20" />
          <video ref={heroVideoRef} autoPlay muted loop playsInline className="w-full h-full object-cover" preload="auto">
            <source src="/videos/slide-2.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-30 text-center px-6 max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-[#DC2626]" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/60">Powering Global Resilience</span>
            <div className="h-px w-12 bg-[#DC2626]" />
          </div>
          
          <h1 className="text-[10vw] md:text-[8vw] font-black italic uppercase leading-[0.8] tracking-tighter mb-8">
            Advanced <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">Power Infrastructure.</span>
          </h1>
          
          <p className="text-white/40 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            We deliver state-of-the-art industrial power solutions, ranging from intelligent generator control systems to custom-engineered switchgear. Our technical expertise spans the complete mission-critical power generation lifecycle, ensuring maximum uptime and minimal total cost of ownership (TCO) for data centers and large infrastructure projects.
          </p>
        </div>
      </section>

      {/* 2. CORE TECHNOLOGIES (Optimized for Control, Distribution, Monitoring, Noise) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-6">
              Engineering <span className="text-[#DC2626]">Pillars.</span>
            </h2>
            <div className="h-2 w-24 bg-[#3D3D6B] mb-6" />
            <p className="text-white/40 text-sm max-w-2xl">
              Four foundational pillars of technical excellence that define our approach to reliable power systems and generator set automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {coreTechnologies.map((tech, i) => (
              <div 
                key={i} 
                className="bg-[#070707] p-12 hover:bg-[#0A0A0A] transition-all group cursor-pointer"
                style={{ borderColor: `${tech.color}20` }}
              >
                <div 
                  className="mb-8 opacity-50 group-hover:opacity-100 transition-opacity"
                  style={{ color: tech.color }}
                >
                  {tech.icon}
                </div>
                
                <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-4 group-hover:translate-x-2 transition-transform">
                  {tech.title}
                </h3>
                
                <p className="text-white/50 text-sm leading-relaxed mb-8">
                  {tech.description}
                </p>
                
                <div className="space-y-3">
                  {tech.specs.map((spec, j) => (
                    <div key={j} className="flex items-start gap-3 text-xs">
                      <ChevronRight size={14} className="text-[#DC2626] mt-0.5 flex-shrink-0" />
                      <span className="text-white/40">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ENGINE PLATFORMS (Optimized for Efficiency, Power Density) */}
      <section className="py-32 px-6 bg-[#090909]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
              High-Density <span className="text-[#3D3D6B]">Engine</span> Platforms.
            </h2>
            <div className="h-2 w-16 bg-[#DC2626] mx-auto mb-6" />
            <p className="text-white/40 text-sm max-w-3xl mx-auto">
              We select globally leading industrial diesel engines known for superior power density, exceptional reliability, and certified emissions compliance, minimizing environmental impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {enginePlatforms.map((engine, i) => (
              <div key={i} className="border border-white/10 p-8 rounded-lg bg-[#0E0E0E] hover:border-[#DC2626] transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl font-extrabold italic uppercase text-[#DC2626]">{engine.manufacturer}</span>
                  <span className="text-white/30">{engine.icon}</span>
                </div>
                <h3 className="text-2xl font-black tracking-tight mb-2">{engine.series}</h3>
                <p className="text-white/60 text-sm mb-6">Power Range: {engine.range}</p>
                
                <ul className="space-y-3 text-sm">
                  {engine.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <Bolt size={16} className="text-[#3D3D6B]" />
                      <span className="text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-center">
                  <span className="text-xs uppercase tracking-widest text-white/50">Peak Continuous Efficiency</span>
                  <span className="text-xl font-bold text-[#DC2626]">{engine.efficiency}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ALTERNATOR TECHNOLOGY (NEW SECTION - Highly Technical SEO) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-6">
              Alternator <span className="text-[#DC2626]">Dynamics.</span>
            </h2>
            <div className="h-2 w-24 bg-[#3D3D6B] mb-6" />
            <p className="text-white/40 text-sm max-w-2xl">
              We select alternators engineered for superior transient response, guaranteed voltage stability, and mitigation of harmonic distortion, crucial for sensitive electronic loads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {alternatorTechnology.map((item, i) => (
              <div key={i} className="p-6 border-l-4 border-[#DC2626] bg-[#070707] transition-all hover:bg-[#0A0A0A]">
                <h3 className="text-xl font-bold uppercase mb-3 text-[#3D3D6B]">{item.component}</h3>
                <p className="text-white/60 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.detail }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CRITICAL ARCHITECTURE (Optimized for Fuel, Cooling, Safety) */}
      <section className="py-32 px-6 bg-[#090909]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-6">
              Critical <span className="text-[#3D3D6B]">Architecture.</span>
            </h2>
            <div className="h-2 w-24 bg-[#DC2626] mb-6" />
            <p className="text-white/40 text-sm max-w-2xl">
              Every supporting component is meticulously engineered for Tier IV Data Center reliability and guaranteed N+1 redundancy across all sub-systems, maximizing system resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {systemArchitecture.map((item, i) => (
              <div key={i} className="p-6 border-l-4 border-[#DC2626] bg-[#0E0E0E] transition-all hover:bg-[#121212]">
                <h3 className="text-xl font-bold uppercase mb-3 text-[#DC2626]">{item.component}</h3>
                <p className="text-white/60 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.detail }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. QUALITY & COMPLIANCE (NEW SECTION - Highly Credible SEO) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
              Quality & <span className="text-[#DC2626]">Compliance.</span>
            </h2>
            <div className="h-2 w-16 bg-[#3D3D6B] mx-auto mb-6" />
            <p className="text-white/40 text-sm max-w-3xl mx-auto">
              Our commitment to safety and reliability is validated by rigorous adherence to global industry standards, guaranteeing regulatory acceptance worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityAndCompliance.map((cert, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 border border-white/10 rounded-lg bg-[#070707] hover:border-[#DC2626] transition-all">
                <div className="text-[#3D3D6B] mb-4">{cert.icon}</div>
                <h3 className="text-lg font-bold tracking-tight mb-2 text-white">{cert.standard}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DEPLOYMENT CAPABILITIES (Optimized for Installation Expertise) */}
      <section className="py-32 px-6 bg-[#090909]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
              Deployment <span className="text-[#DC2626]">Expertise.</span>
            </h2>
            <div className="h-2 w-16 bg-[#3D3D6B] mx-auto mb-6" />
            <p className="text-white/40 text-sm max-w-3xl mx-auto">
              Our capability spans complex site logistics, precision installation, and seamless integration into existing critical power infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 border border-white/10 rounded-lg bg-[#0E0E0E] hover:shadow-lg hover:shadow-[#DC2626]/20 transition-all">
                <div className="text-[#3D3D6B] mb-4">{cap.icon}</div>
                <h3 className="text-lg font-bold uppercase tracking-tight mb-2 text-white">{cap.title}</h3>
                <p className="text-sm text-[#DC2626] font-bold mb-4">{cap.metric}</p>
                <p className="text-white/60 text-xs leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INNOVATION & R&D (Optimized for Future-Proofing) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-6">
              Future <span className="text-[#DC2626]">Innovation.</span>
            </h2>
            <div className="h-2 w-24 bg-[#3D3D6B] mb-6" />
            <p className="text-white/40 text-sm max-w-2xl">
              We are actively developing and deploying the next generation of resilient and sustainable power solutions to future-proof our clients' assets and reduce carbon footprint.
            </p>
          </div>

          <div className="space-y-6">
            {innovationAreas.map((item, i) => (
              <div 
                key={i} 
                className="flex items-start bg-[#070707] p-6 border-l-8 transition-all hover:bg-[#0A0A0A]"
                style={{ borderColor: item.status === "Deployed" ? "#059669" : item.status === "Pilot Phase" ? "#F59E0B" : "#3B82F6" }}
              >
                <div className="flex-shrink-0 mr-6 mt-1 text-[#DC2626]">{item.icon}</div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-2xl font-bold tracking-tight">{item.area}</h3>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      item.status === "Deployed" ? "bg-green-600/30 text-green-400" :
                      item.status === "Pilot Phase" ? "bg-yellow-600/30 text-yellow-400" :
                      "bg-blue-600/30 text-blue-400"
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. MAINTENANCE & LIFECYCLE SUPPORT (NEW SECTION - Post-Sale SEO) */}
      <section className="py-32 px-6 bg-[#090909]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-6">
              Lifecycle <span className="text-[#3D3D6B]">Support.</span>
            </h2>
            <div className="h-2 w-24 bg-[#DC2626] mb-6" />
            <p className="text-white/40 text-sm max-w-2xl">
              Protecting your investment is paramount. Our comprehensive service packages ensure long-term reliability and the lowest possible Total Cost of Ownership (TCO).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceAndSupport.map((item, i) => (
              <div key={i} className="p-6 border-t-4 border-[#3D3D6B] bg-[#0E0E0E] flex flex-col items-start transition-all hover:bg-[#121212]">
                <Settings size={32} className="text-[#DC2626] mb-3" />
                <h3 className="text-xl font-bold uppercase mb-3 text-white">{item.component}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 10. SEO Content Block (Highly valuable for ranking - Increased Density) */}
      <section className="p-6 mt-16 text-white/5 bg-[#0A0A0A]">
        <h2 className="sr-only">Keywords for Industrial Power Generation and Generator Sets</h2>
        <p className="text-xs">
          This page details our cutting-edge industrial power solutions, focusing on high-efficiency diesel generator sets and mission-critical power generation. We specialize in generator set automation, secure IoT remote monitoring, custom AMF panels, and ATS panels for seamless power continuity and stringent Tier IV Data Center compliance. Our engineering expertise covers multi-megawatt parallel operation up to 40 MVA, certified generator load bank testing (resistive and reactive), and complex rooftop generator installations with sophisticated vibration isolation systems. We utilize high-power density Cummins, Mitsubishi, and Perkins engines, featuring digital AVRs for superior power quality and transient response. We offer scalable and sustainable solutions like hybrid generator systems with BESS integration, advanced IoT predictive maintenance, and Biofuel readiness. Our focus is on maximizing asset resilience, minimizing harmonic distortion, and delivering the lowest Total Cost of Ownership (TCO) throughout the entire project lifecycle, backed by NFPA 110 and IEC standards.
        </p>
      </section>

    </main>
  );
};

export default TechnologyPage;