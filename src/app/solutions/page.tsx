"use client";

import React, { useRef, useEffect, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  Hospital,
  Wifi,
  Factory,
  Database,
  X,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Search,
  Code,
  HardHat,
  Anchor,
  GitCommit,
  Package,
  Car,
  Settings,
  ExternalLink,
} from "lucide-react";

// --- System Card Component ---
interface SystemCardProps {
  sysId: string;
  title: string;
  subtitle: string;
  specs: { label: string; value: string | JSX.Element }[];
  components: { label: string; asset: string; count: number }[];
  icon: JSX.Element;
}

const SystemArchitectureCard: React.FC<SystemCardProps> = ({
  sysId,
  title,
  subtitle,
  specs,
  components,
  icon,
}) => (
  <div className="border border-[#DC2626]/40 p-6 sm:p-8 bg-gray-900/50 backdrop-blur-sm shadow-2xl transition-all duration-300 hover:border-[#DC2626] hover:shadow-red-900/50 group flex flex-col justify-between">
    <div>
      <div className="flex items-start justify-between">
        <h3 className="text-3xl font-bold text-white mb-2 tracking-wider">{title}</h3>
        {icon}
      </div>
      <p className="text-lg text-[#DC2626] font-mono mb-4">{subtitle}</p>

      <div className="grid grid-cols-2 gap-y-3 gap-x-4 border-t border-b border-gray-700/50 py-3 mb-6">
        {specs.map((spec, index) => (
          <div key={index}>
            <p className="text-xs font-mono text-gray-400 uppercase">{spec.label}</p>
            <p className="text-sm font-semibold text-white">{spec.value}</p>
          </div>
        ))}
      </div>

      <p className="text-sm font-mono text-gray-300 mb-2">
        ARCHITECTED ASSET MATRIX // CORE_COMPONENTS:
      </p>
      <ul className="space-y-1 mb-4">
        {components.map((comp, index) => (
          <li
            key={index}
            className="flex justify-between items-center text-sm text-gray-400 font-mono border-b border-gray-800 pb-1"
          >
            <span className="text-white">{comp.label}</span>
            <span className="text-[#DC2626] font-semibold">{comp.count}x</span>
            <span className="text-xs text-gray-500">{comp.asset}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="mt-6 flex justify-between items-center">
      <Link
        href="#"
        className="flex items-center text-white bg-[#DC2626] py-2 px-4 text-sm font-semibold hover:bg-red-700 transition duration-300"
      >
        <Cpu size={16} className="mr-2" />
        REQUEST CONFIGURATION QUOTE
      </Link>
      <span className="text-xs font-mono text-gray-600 group-hover:text-gray-400">{sysId}</span>
    </div>
  </div>
);

// --- Process Step Component ---
interface ProcessStepProps {
  phase: string;
  title: string;
  detail: string;
  icon: JSX.Element;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ phase, title, detail, icon }) => (
  <div className="relative p-6 sm:p-8 border-l-2 border-[#DC2626] bg-gray-900/30">
    <div className="absolute -left-3 top-4 bg-gray-950 p-1 border-2 border-[#DC2626] text-white rounded-full">
      {icon}
    </div>
    <span className="text-xs font-mono text-[#DC2626] tracking-widest block mb-2">{phase}</span>
    <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
    <p className="text-gray-300 text-sm">{detail}</p>
  </div>
);

// --- Main Solutions Component ---
export default function Solutions() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => console.error("Video Error:", err));
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setStatus("idle");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setStatus("success");
          setIsSubmitting(false);
          formRef.current?.reset();
          setTimeout(() => setIsModalOpen(false), 3000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
          setIsSubmitting(false);
        }
      );
  };

  // --- Data ---
  const systemArchetypes: SystemCardProps[] = [
    {
      sysId: "SYS-ARCH-HC-850",
      title: "HOSPITAL CRITICAL OPS",
      subtitle: "Life-Safety & Redundancy Protocol",
      icon: <Hospital size={40} className="text-[#DC2626]" />,
      specs: [
        { label: "Redundancy", value: "N+1" },
        { label: "Uptime Target", value: "99.99%" },
        { label: "Transfer Latency", value: "<10ms" },
        { label: "Capacity Range", value: "500kVA - 1500kVA" },
      ],
      components: [
        { label: "Diesel Turbine Core", asset: "APS-500D", count: 2 },
        { label: "Logic Controller", asset: "ATS-400 (Dual)", count: 2 },
        { label: "Distribution Matrix", asset: "LT-3000", count: 1 },
        { label: "Acoustic Shield", asset: "S-200", count: 2 },
        { label: "Sustainment Protocol", asset: "24/7 SLA", count: 1 },
      ],
    },
    {
      sysId: "SYS-ARCH-TM-150",
      title: "TELECOM TOWER BACKBONE",
      subtitle: "Remote & Hybrid Power Grid",
      icon: <Wifi size={40} className="text-[#DC2626]" />,
      specs: [
        { label: "Deployment", value: "Remote/Sub-zero" },
        { label: "Fuel Type", value: "Hybrid (Gas/Diesel)" },
        { label: "Monitoring", value: "SCADA Telemetry" },
        { label: "Response", value: "4 Hour Critical" },
      ],
      components: [
        { label: "Gas Core", asset: "EcoStream 100NG", count: 1 },
        { label: "Diesel Backup Unit", asset: "APS-50D", count: 1 },
        { label: "Armored Transmission", asset: "Titan-95", count: 1 },
        { label: "Remote Monitoring", asset: "RMM-02", count: 1 },
        { label: "Enclosure", asset: "Weather Shield", count: 1 },
      ],
    },
    {
      sysId: "SYS-ARCH-MF-2200",
      title: "MANUFACTURING CONTINUOUS POWER",
      subtitle: "Synchronized Industrial Array",
      icon: <Factory size={40} className="text-[#DC2626]" />,
      specs: [
        { label: "Operation Mode", value: "Parallel Synch" },
        { label: "Load Capacity", value: "2.2MW+" },
        { label: "Harmonic Mitigation", value: "Active Filters" },
        { label: "Install Type", value: "Ground Floor/Rooftop" },
      ],
      components: [
        { label: "High-Cap Turbine Core", asset: "APS-800D", count: 3 },
        { label: "Synchronization Logic", asset: "SY-9000", count: 1 },
        { label: "Custom Distribution", asset: "PF/LT Matrix", count: 1 },
        { label: "Load Bank Testing", asset: "Protocol: 48hr", count: 1 },
        { label: "Maintenance Team", asset: "On-site SLA", count: 1 },
      ],
    },
    {
      sysId: "SYS-ARCH-DC-4000",
      title: "DATA CENTER TIER-3",
      subtitle: "2N Redundancy Multi-Unit System",
      icon: <Database size={40} className="text-[#DC2626]" />,
      specs: [
        { label: "Redundancy", value: "2N" },
        { label: "Uptime Target", value: "99.999%" },
        { label: "Deployment", value: "Modular/Scalable" },
        { label: "Capacity Range", value: "2000kVA - 4000kVA" },
      ],
      components: [
        { label: "Turbine Core (N)", asset: "APS-1000D", count: 4 },
        { label: "Transfer Logic", asset: "Dual Redundant ATS", count: 2 },
        { label: "Fuel Storage System", asset: "80,000L", count: 1 },
        { label: "BMS Integration", asset: "SCADA Link", count: 1 },
        { label: "Custom Panel Fabrication", asset: "In-House", count: 1 },
      ],
    },
  ];

  const deploymentProtocol = [
    {
      phase: "PHASE_01 // RECONNAISSANCE",
      title: "SITE ASSESSMENT & AUDIT",
      detail:
        "In-depth load analysis, grid stability auditing, site structural evaluation, and regulatory compliance check.",
      icon: <Search size={20} className="text-white" />,
    },
    {
      phase: "PHASE_02 // TACTICAL PLANNING",
      title: "SYSTEM ARCHITECTURE DESIGN",
      detail:
        "Custom CAD/BIM layout, electrical schematic generation, component selection, and full system redundancy modeling.",
      icon: <Code size={20} className="text-white" />,
    },
    {
      phase: "PHASE_03 // PROCUREMENT & CUSTOMIZATION",
      title: "IN-HOUSE PANEL FABRICATION",
      detail:
        "Manufacturing of custom ATS, PF, and LT panels up to 3000kVA. Asset procurement and quality verification.",
      icon: <Factory size={20} className="text-white" />,
    },
    {
      phase: "PHASE_04 // DEPLOYMENT",
      title: "INSTALLATION & INFRASTRUCTURE",
      detail:
        "Ground floor, rooftop, and multi-floor rigging and installation. Cable routing, power distribution, and auxiliary system integration.",
      icon: <HardHat size={20} className="text-white" />,
    },
    {
      phase: "PHASE_05 // ACTIVATION",
      title: "COMMISSIONING & LOAD TESTING",
      detail:
        "System-wide integration testing, live load bank testing, performance verification, and operator training/handover.",
      icon: <Anchor size={20} className="text-white" />,
    },
    {
      phase: "PHASE_06 // SUSTAINMENT",
      title: "MAINTENANCE & LIFECYCLE SUPPORT",
      detail:
        "24/7 emergency response, scheduled preventive maintenance, remote monitoring, and genuine parts supply contracts.",
      icon: <GitCommit size={20} className="text-white" />,
    },
  ];

  const caseStudies = [
    {
      title: "Metro Healthcare Facility - 850kVA Redundant System",
      detail:
        "Deployed dual-redundant 850kVA system with critical ATS controllers for life-safety compliance. Integrated with hospital BMS for seamless failover and silent operation enclosures.",
      sector: "Healthcare",
      capacity: "850kVA (N+1)",
      link: "#",
    },
    {
      title: "National Bank ATM Network - Distributed Power Grid",
      detail:
        "Engineered and deployed compact, remote-monitored power cores across 60+ branch locations using hybrid gas/diesel units for maximum efficiency and uptime for mission-critical banking operations.",
      sector: "Banking & Finance",
      capacity: "100kVA - 300kVA",
      link: "#",
    },
    {
      title: "Textile Manufacturing Plant - 2.2MW Synchronized Array",
      detail:
        "Installed and synchronized a 3-unit 2.2MW array to support continuous, heavy-load production lines. Included custom PF and LT distribution panels manufactured in-house.",
      sector: "Manufacturing",
      capacity: "2.2MW (Sync)",
      link: "#",
    },
  ];

  const engineeringCapabilities = [
    {
      title: "Custom Panel Manufacturing",
      desc: "ATS, PF, LT Panels up to 3000kVA. In-house fabrication ensures seamless integration and quality control.",
      icon: <Settings size={28} />,
    },
    {
      title: "Complex Installations",
      desc: "Rooftop rigging, multi-floor cable routing, and integration into existing industrial infrastructure. Certified for challenging environments.",
      icon: <HardHat size={28} />,
    },
    {
      title: "System Integration",
      desc: "Synchronization of multiple units, SCADA/BMS linking, and load shedding automation for intelligent power management.",
      icon: <Cpu size={28} />,
    },
  ];

  // --- JSX RETURN ---
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Inquiry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border-2 border-[#DC2626] max-w-lg w-full p-8 relative shadow-2xl shadow-red-900/50">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#DC2626]"
            >
              <X size={24} />
            </button>
            <h3 className="text-3xl font-bold mb-4 text-[#DC2626] border-b border-gray-700 pb-2">
              INITIATE SYSTEM DESIGN
            </h3>
            <p className="text-gray-300 mb-6 font-mono text-sm">
              Request a site assessment and architecture proposal. All fields required for system analysis.
            </p>

            {status === "success" ? (
              <div className="text-center p-8 bg-green-900/50 border border-green-700">
                <CheckCircle2 size={48} className="text-green-400 mx-auto mb-4" />
                <p className="text-lg font-semibold">Transmission Successful.</p>
                <p className="text-sm text-green-300">APS team will contact you within 24 hours.</p>
              </div>
            ) : status === "error" ? (
              <div className="text-center p-8 bg-red-900/50 border border-red-700">
                <AlertCircle size={48} className="text-red-400 mx-auto mb-4" />
                <p className="text-lg font-semibold">Transmission Error.</p>
                <p className="text-sm text-red-300">Please try again or call us directly.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Designator/Name"
                  required
                  className="w-full bg-gray-800 border border-gray-700 p-3 text-white placeholder-gray-500 focus:border-[#DC2626] focus:ring-[#DC2626]"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="System Contact Email"
                  required
                  className="w-full bg-gray-800 border border-gray-700 p-3 text-white placeholder-gray-500 focus:border-[#DC2626] focus:ring-[#DC2626]"
                />
                <input
                  type="tel"
                  name="user_phone"
                  placeholder="Secure Comms Channel (Phone)"
                  required
                  className="w-full bg-gray-800 border border-gray-700 p-3 text-white placeholder-gray-500 focus:border-[#DC2626] focus:ring-[#DC2626]"
                />
                <textarea
                  name="message"
                  placeholder="Project Specifications/Load Requirements (kVA)"
                  rows={4}
                  required
                  className="w-full bg-gray-800 border border-gray-700 p-3 text-white placeholder-gray-500 focus:border-[#DC2626] focus:ring-[#DC2626]"
                ></textarea>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center bg-[#DC2626] hover:bg-red-700 text-white font-semibold py-3 transition duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="mr-2 animate-spin" />
                      TRANSMITTING DATA...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      SECURE TRANSMISSION
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          src="/videos/slide-1.mp4"
        >
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 text-center p-4">
          <h1 className="text-7xl sm:text-9xl font-extrabold text-white uppercase tracking-tighter italic leading-none">
            ENGINEERED
          </h1>
          <h2 className="text-4xl sm:text-6xl font-light text-[#DC2626] mt-4 tracking-widest italic">
            POWER ARCHITECTURES
          </h2>
          <p className="text-gray-300 mt-6 max-w-3xl mx-auto text-xl font-mono">
            SYSTEM_DESIGN_MODE // ACTIVE. We architect mission-grade power systems composed of synchronized assets, custom control logic, distribution matrices, and 24/7 sustainment protocols.
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center bg-[#DC2626] text-white py-3 px-8 text-lg font-semibold hover:bg-red-700 transition duration-300 shadow-xl shadow-red-900/50"
            >
              <Cpu size={20} className="mr-2" />
              INITIATE SYSTEM DESIGN
            </button>
            <Link
              href="/store"
              className="flex items-center border border-white text-white py-3 px-8 text-lg font-semibold hover:bg-white/10 transition duration-300"
            >
              <Package size={20} className="mr-2" />
              DEPLOY FROM INVENTORY
            </Link>
          </div>
        </div>
      </div>

      {/* SOLUTIONS SECTIONS */}
      {/* SYSTEM PROFILES */}
      <section className="py-20 bg-gray-950/90 border-t border-b border-gray-800">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold italic text-white mb-3">SYSTEM PROFILES</h3>
          <p className="text-lg text-[#DC2626] font-mono mb-12">
            PRE-ENGINEERED ARCHETYPE DEPLOYMENT / SELECT YOUR MISSION
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {systemArchetypes.map((sys) => (
              <SystemArchitectureCard key={sys.sysId} {...sys} />
            ))}
          </div>
        </div>
      </section>

      {/* DEPLOYMENT PROTOCOL */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold italic text-white mb-3">DEPLOYMENT PROTOCOL</h3>
          <p className="text-lg text-[#DC2626] font-mono mb-12">
            THE SIX-PHASE MISSION SEQUENCE / END-TO-END TURNKEY DELIVERY
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deploymentProtocol.map((step, index) => (
              <ProcessStep key={index} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="py-20 bg-gray-950/90">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold italic text-white mb-3">CORE CAPABILITIES</h3>
          <p className="text-lg text-[#DC2626] font-mono mb-12">
            THE APS ADVANTAGE / IN-HOUSE PRECISION ENGINEERING
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engineeringCapabilities.map((cap, index) => (
              <div key={index} className="p-6 border border-gray-700 hover:border-white transition duration-300">
                <div className="text-[#DC2626] mb-3">{cap.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-2">{cap.title}</h4>
                <p className="text-gray-400 text-sm">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-20 bg-gray-900 border-t border-b border-gray-800">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold italic text-white mb-3">MISSION LOGS</h3>
          <p className="text-lg text-[#DC2626] font-mono mb-12">
            VERIFIED DEPLOYMENTS / REAL-WORLD PROBLEM SOLVING
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="p-6 bg-gray-950/70 border border-[#DC2626]/40 shadow-lg">
                <p className="text-xs font-mono text-[#DC2626] mb-1 uppercase">
                  {study.sector} // {study.capacity}
                </p>
                <h4 className="text-xl font-bold text-white mb-3">{study.title}</h4>
                <p className="text-gray-300 mb-4 text-sm">{study.detail}</p>
                <Link
                  href={study.link}
                  className="flex items-center text-white text-sm hover:text-[#DC2626] transition duration-300"
                >
                  <ExternalLink size={16} className="mr-2" />
                  VIEW FULL DEBRIEF
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPLOYMENT OPTIONS */}
      <section className="py-20 bg-gray-950/90">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold italic text-white mb-3">DEPLOYMENT OPTIONS</h3>
          <p className="text-lg text-[#DC2626] font-mono mb-12">PERMANENT INSTALLATION VS TEMPORARY RENTAL</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 border border-white/20 hover:border-[#DC2626] transition duration-300">
              <Database size={48} className="text-[#DC2626] mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-2">PERMANENT INTEGRATION</h4>
              <p className="text-gray-400 mb-4">
                Full turnkey design, custom panel fabrication, installation, and long-term sustainment contracts. Optimized for total system lifecycle and mission-critical uptime.
              </p>
              <ul className="text-sm text-gray-300 space-y-1 text-left inline-block">
                <li>
                  <CheckCircle2 size={16} className="inline mr-2 text-green-500" /> Custom Capacity (Up to 3000kVA+)
                </li>
                <li>
                  <CheckCircle2 size={16} className="inline mr-2 text-green-500" /> Full System Ownership & Warranty
                </li>
                <li>
                  <CheckCircle2 size={16} className="inline mr-2 text-green-500" /> Custom Panel Manufacturing
                </li>
              </ul>
            </div>
            <div className="p-8 border border-white/20 hover:border-[#DC2626] transition duration-300">
              <Car size={48} className="text-[#DC2626] mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-2">TEMPORARY RENTAL DEPLOYMENT</h4>
              <p className="text-gray-400 mb-4">
                Rapid deployment of portable units for construction, event coverage, or short-term backup requirements. Flexible contracts and rapid response setup.
              </p>
              <ul className="text-sm text-gray-300 space-y-1 text-left inline-block">
                <li>
                  <CheckCircle2 size={16} className="inline mr-2 text-green-500" /> Pre-Engineered Portable Units
                </li>
                <li>
                  <CheckCircle2 size={16} className="inline mr-2 text-green-500" /> Rapid Mobilization & Setup
                </li>
                <li>
                  <CheckCircle2 size={16} className="inline mr-2 text-green-500" /> Flexible Contract Duration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-[#DC2626] text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-5xl font-extrabold italic mb-4">SYSTEM DEPLOYMENT REQUIRED.</h3>
          <p className="text-xl mb-8 font-mono">
            Do not settle for component sales. Initiate a full-scale architectural review.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center mx-auto bg-gray-950 text-white py-4 px-10 text-xl font-semibold hover:bg-black transition duration-300 shadow-2xl shadow-black/50"
          >
            <ArrowRight size={24} className="mr-3" />
            INITIATE SYSTEM DESIGN CONSULTATION
          </button>
        </div>
      </section>
    </div>
  );
}
