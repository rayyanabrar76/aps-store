"use client";

import React, { useState } from "react";
import { 
  Building2, Server, Hospital, Factory, Wind, Waves, 
  MapPin, CheckCircle, ChevronRight, Zap, TrendingUp,
  HardHat
} from "lucide-react";

// -------------------- Types --------------------

interface ProjectCaseStudy {
  id: number;
  title: string;
  sector: "Data Center" | "Healthcare" | "Industrial" | "Commercial" | "Utility";
  location: string;
  icon: JSX.Element;
  challenge: string;
  solution: string;
  outcome: string;
  capacity: string; // e.g., "15 MVA"
  keywords: string[];
}

interface SectorHighlight {
  sector: ProjectCaseStudy['sector'];
  icon: JSX.Element;
  description: string;
  stats: string;
  color: string;
}

interface TechnicalPartner {
    name: string;
    category: string;
    color: string;
}

// -------------------- Data --------------------

const sectorHighlights: SectorHighlight[] = [
  {
    sector: "Data Center",
    icon: <Server size={32} />,
    description: "Achieving Tier IV compliance and 2N redundancy is our mandate for hyperscale and co-location facilities.",
    stats: "99.995% Uptime Solutions",
    color: "#DC2626",
  },
  {
    sector: "Healthcare",
    icon: <Hospital size={32} />,
    description: "Zero-tolerance for power disruption in hospitals and critical care units, demanding NFPA 110 compliance.",
    stats: "Instantaneous Power Transfer (ATS)",
    color: "#3D3D6B",
  },
  {
    sector: "Industrial",
    icon: <Factory size={32} />,
    description: "High-capacity power for manufacturing and processing plants, often involving co-generation and continuous rating.",
    stats: "Up to 30 MVA Site Capacity",
    color: "#DC2626",
  },
  {
    sector: "Utility",
    icon: <Waves size={32} />,
    description: "Supporting grid stability through peak shaving, microgrids, and black-start generation capabilities.",
    stats: "Grid Stabilization Services",
    color: "#3D3D6B",
  },
];

const technicalPartners: TechnicalPartner[] = [
    { name: "Cummins", category: "Engine/Gensets", color: "#DC2626" },
    { name: "Perkins", category: "Engine/Gensets", color: "#3D3D6B" },
    { name: "Volvo Penta", category: "Engine/Gensets", color: "#5488A0" },
    { name: "Leroy-Somer", category: "Alternators", color: "#B8860B" },
    { name: "Stamford", category: "Alternators", color: "#A0522D" },
    { name: "DSE", category: "Control Systems", color: "#FBBF24" }, // Using yellow-500 equivalent
    { name: "ComAp", category: "Paralleling", color: "#DC2626" },
    { name: "ABB / Schneider", category: "Switchgear", color: "#3D3D6B" },
];

const caseStudies: ProjectCaseStudy[] = [
  {
    id: 1,
    title: "Karachi Cloud Data Facility",
    sector: "Data Center",
    location: "Karachi, Pakistan",
    icon: <Server size={20} />,
    challenge: "Deliver a power system providing 2N redundancy for a new 15MW facility with a transient response time under 50 milliseconds.",
    solution: "Integrated eight 2.5 MVA Cummins QSK-Series generators with digital paralleling switchgear (PSM) and closed-transition ATS panels. Implemented PMG alternators for superior short-circuit capability.",
    outcome: "Achieved certified uptime and demonstrated load acceptance and stability well within required tolerances. Guaranteed 99.995% uptime.",
    capacity: "20 MVA (N+1)",
    keywords: ["Tier IV", "2N Redundancy", "Digital Switchgear", "Karachi Data Center"],
  },
  {
    id: 2,
    title: "Lahore Commercial Rooftop Plant",
    sector: "Commercial",
    location: "Lahore, Pakistan",
    icon: <Building2 size={20} />,
    challenge: "Install a high-capacity generator set on a high-rise rooftop with ultra-low noise requirements (60dB at boundary) and high-ambient temperature operation.",
    solution: "Designed a modular, containerized canopy using CFD modeling for cooling. Installed triple-stage vibration isolation mounts and custom acoustic baffles. Managed crane logistics for elevated lift.",
    outcome: "Successfully commissioned the plant, meeting the stringent 60 dB acoustic limit and maintaining peak performance in 50°C summer conditions. Project delivered ahead of schedule.",
    capacity: "3.5 MVA",
    keywords: ["Rooftop Installation", "Acoustic Attenuation", "High-Ambient Cooling", "Vibration Isolation", "Lahore Commercial"],
  },
  {
    id: 3,
    title: "Islamabad Medical Center Upgrade",
    sector: "Healthcare",
    location: "Islamabad, Pakistan",
    icon: <Hospital size={20} />,
    challenge: "Replace an aging backup system without any interruption to hospital power supply (zero downtime migration). Must be HVO biofuel-ready.",
    solution: "Utilized a temporary rental fleet operating in synchronization (hot cutover) while installing new Perkins 4000 Series engines and NFPA 110 compliant ATS. Certified system for HVO operation.",
    outcome: "System migrated and fully tested with no interruption to critical patient care systems. New system provides N+2 redundancy for emergency circuits and future-proofed for sustainability.",
    capacity: "5 MVA (N+2)",
    keywords: ["Healthcare Power", "NFPA 110", "Zero Downtime Migration", "HVO Biofuel", "Islamabad Hospital"],
  },
  {
    id: 4,
    title: "Lahore Automotive Manufacturing Plant",
    sector: "Industrial",
    location: "Lahore, Pakistan",
    icon: <Factory size={20} />,
    challenge: "Provide continuous power generation to mitigate grid instability, integrating waste heat recovery (CHP) for operational efficiency.",
    solution: "Installed a 10 MVA diesel plant operating in island mode, coupled with a Combined Heat and Power (CHP) system. Developed a custom SCADA system for remote load management and fault prediction.",
    outcome: "Reduced factory energy costs by 25% through waste heat utilization. The generator plant has maintained 100% operational uptime for two years, stabilizing production lines.",
    capacity: "10 MVA (Continuous)",
    keywords: ["Industrial Power", "CHP System", "Island Mode", "Continuous Power", "Lahore Manufacturing"],
  },
  // --- New Case Studies ---
  {
    id: 5,
    title: "Remote Wind Farm Microgrid",
    sector: "Utility",
    location: "Sindh, Pakistan (Coastal)",
    icon: <Wind size={20} />,
    challenge: "Integrate a 4 MVA diesel backup with an existing wind farm to provide seamless black-start capability and stabilize the microgrid during low wind periods. Site is remote with extreme humidity.",
    solution: "Installed three 1.5 MVA Volvo Penta gensets in highly corrosion-resistant enclosures. Implemented a ComAp InteliSys NTC system for advanced load sharing, fast synchronization, and droop control necessary for microgrid stability. Conducted extensive island-mode testing.",
    outcome: "The system successfully provides reliable spinning reserve and black-start functionality, reducing the wind farm's reliance on the national grid and improving power quality for local community feeders. Zero control failures reported in 12 months of operation.",
    capacity: "4.5 MVA (N+1)",
    keywords: ["Microgrid", "Black-Start", "Island Mode", "Droop Control", "Utility Stabilization", "Coastal Environment"],
  },
  {
    id: 6,
    title: "Faisalabad Textile Co-Generation",
    sector: "Industrial",
    location: "Faisalabad, Pakistan",
    icon: <Factory size={20} />,
    challenge: "Design and install a captive power plant using natural gas engines to provide base-load power (15 MVA) and utilize waste heat for industrial boilers, maximizing efficiency.",
    solution: "Supplied and commissioned five 3 MVA Jenbacher JGS 420 natural gas engine units with integrated heat exchangers for CHP. Developed a sophisticated PLC-based system to manage heat flow between jacket water, exhaust, and the client's steam circuit.",
    outcome: "Achieved a total system efficiency of over 85% (electrical + thermal), resulting in an estimated $500,000 annual reduction in utility costs. Provides continuous, stable power supply to all manufacturing processes.",
    capacity: "15 MVA (Base Load)",
    keywords: ["Natural Gas Engine", "CHP", "Co-Generation", "High Efficiency", "Base Load", "PLC Control"],
  },
];

// -------------------- Component --------------------

const ProjectsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProjectCaseStudy['sector'] | 'All'>('All');
  const filteredProjects = caseStudies.filter(project => activeTab === 'All' ? true : project.sector === activeTab);

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans antialiased overflow-x-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative pt-48 pb-32 px-6 bg-cover bg-center" style={{ backgroundImage: "url('/images/project-hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#DC2626]" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/60">Local Expertise</span>
            <div className="h-px w-12 bg-[#DC2626]" />
          </div>
          
          <h1 className="text-7xl md:text-8xl font-black italic uppercase leading-[0.9] tracking-tighter mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">Mission-Critical</span><br/>
            Projects in Pakistan
          </h1>
          
          <p className="text-white/60 text-lg max-w-4xl leading-relaxed mb-6">
            We deliver industrial power solutions across Karachi, Lahore, and Islamabad. Our projects ensure zero downtime, high reliability, and compliance with global standards adapted for Pakistan's energy landscape.
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-3 text-white/70 text-sm">
            <div><TrendingUp size={18} className="inline mr-1 text-[#DC2626]" /> 20+ Projects Completed</div>
            <div><CheckCircle size={18} className="inline mr-1 text-[#DC2626]" /> 99.995% Uptime Achieved</div>
            <div><Zap size={18} className="inline mr-1 text-[#DC2626]" /> 50+ MW Total Capacity Installed</div>
          </div>
        </div>
      </section>

      {/* 2. HOW WE WORK */}
      <section className="py-24 px-6 bg-[#090909]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-4">How We Work</h2>
          <p className="text-white/60 max-w-2xl mx-auto">Our structured methodology ensures safe, efficient, and reliable power project delivery across Pakistan.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <div className="bg-[#070707] p-6 rounded-lg">
            <Server size={32} className="mb-4 text-[#DC2626]" />
            <h3 className="font-bold mb-2">Site Survey</h3>
            <p className="text-white/60 text-sm">Detailed assessment of client site, load requirements, and energy challenges.</p>
          </div>
          <div className="bg-[#070707] p-6 rounded-lg">
            <Building2 size={32} className="mb-4 text-[#DC2626]" />
            <h3 className="font-bold mb-2">Design & Planning</h3>
            <p className="text-white/60 text-sm">Custom power system design including generator sizing, ATS selection, and infrastructure layout.</p>
          </div>
          <div className="bg-[#070707] p-6 rounded-lg">
            <Factory size={32} className="mb-4 text-[#DC2626]" />
            <h3 className="font-bold mb-2">Installation</h3>
            <p className="text-white/60 text-sm">Expert installation of generators, switchgear, and control systems with minimal disruption.</p>
          </div>
          <div className="bg-[#070707] p-6 rounded-lg">
            <CheckCircle size={32} className="mb-4 text-[#DC2626]" />
            <h3 className="font-bold mb-2">Testing & Handover</h3>
            <p className="text-white/60 text-sm">Thorough commissioning, load testing, and client handover with documentation and training.</p>
          </div>
        </div>
      </section>

      {/* 3. SECTOR HIGHLIGHTS */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-4">Sector Expertise</h2>
          <p className="text-white/60 max-w-2xl mx-auto">Specialized power solutions for diverse Pakistani industries, ensuring reliability where it matters most.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {sectorHighlights.map((sector, i) => (
            <div key={i} className="bg-[#070707] p-8 rounded-lg border-t-4 transition-all hover:bg-[#0E0E0E]" style={{ borderColor: sector.color }}>
              <div className="text-[#DC2626] mb-4">{sector.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{sector.sector}</h3>
              <p className="text-white/60 text-sm mb-4">{sector.description}</p>
              <div className="flex items-center text-xs uppercase tracking-widest text-white/50">
                <TrendingUp size={16} className="mr-2 text-[#3D3D6B]" />
                {sector.stats}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* 4. ADVANCED PROJECT EXECUTION CAPABILITIES */}
      <section className="py-24 px-6 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto text-center mb-16">
              <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-4">Mastering <span className="text-[#DC2626]">Complex Execution</span></h2>
              <p className="text-white/60 max-w-2xl mx-auto">We deploy specialized tools and methodologies to overcome the toughest site, cooling, and power integration challenges in Pakistan.</p>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
              
              {/* Capability 1: CFD & Acoustic Modeling */}
              <div className="bg-[#070707] p-8 rounded-lg shadow-2xl border border-white/10">
                  <h3 className="text-3xl font-black italic uppercase tracking-tight mb-3 text-[#DC2626]">CFD and Acoustic Analysis</h3>
                  <p className="text-white/70 mb-4">We use 
                  Computational Fluid Dynamics (CFD) modeling
                   to simulate airflow and heat rejection, guaranteeing the generator maintains peak efficiency even in 50°C ambient temperatures. Simultaneously, we use acoustic modeling to design custom attenuators, meeting strict urban noise limits (e.g., 60 dB at property line).</p>
                  
                  <ul className="list-disc list-inside text-white/60 space-y-1 text-sm mt-3">
                      <li>
                        Thermal Guarantee:
                         Proactively preventing overheating.</li>
                      <li>
                        Noise Compliance:
                         Essential for commercial and residential adjacency.</li>
                  </ul>
              </div>

              {/* Capability 2: Heavy-Lift Logistics & Installation */}
              <div className="bg-[#070707] p-8 rounded-lg shadow-2xl border border-white/10">
                  <h3 className="text-3xl font-black italic uppercase tracking-tight mb-3 text-[#3D3D6B]">Heavy-Lift Logistics & Rigging</h3>
                  <p className="text-white/70 mb-4">Specialized expertise in managing the complex logistics of high-capacity generator sets (up to 30 MVA) into challenging locations, including 
                  rooftop installations
                   and confined basement areas in major cities. We manage all crane operations, site permits, and vibration isolation mounting.</p>
                  
                  <ul className="list-disc list-inside text-white/60 space-y-1 mt-3 text-sm">
                      <li>
                        Urban Rigging:
                         Expertise in high-rise crane lifts.</li>
                      <li>
                        Vibration Control:
                         Triple-stage mounts for structural integrity.</li>
                  </ul>
              </div>
              
              {/* Capability 3: Digital Paralleling Switchgear */}
              <div className="bg-[#070707] p-8 rounded-lg shadow-2xl border border-white/10 md:col-span-2">
                  <h3 className="text-3xl font-black italic uppercase tracking-tight mb-3 text-yellow-500">Digital Paralleling & SCADA Integration</h3>
                  <p className="text-white/70 mb-4">The core of mission-critical power: using programmable logic controllers (PLCs) and digital switchgear (like ComAp or DSE) to perfectly synchronize multiple generators. This enables 
                  redundancy (N+1, 2N)
                  , 
                  load sharing
                  , and seamless transfer between utility and backup power (
                    closed-transition ATS
                  ). The system is fully integrated with SCADA for remote health monitoring and fault diagnosis.</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm mt-4">
                      <span className="px-3 py-1 bg-white/5 rounded text-white/70">Load Management</span>
                      <span className="px-3 py-1 bg-white/5 rounded text-white/70">Seamless Transfer</span>
                      <span className="px-3 py-1 bg-white/5 rounded text-white/70">Remote Diagnostics</span>
                  </div>
              </div>

          </div>
      </section>

      {/* 5. TECHNOLOGY & GLOBAL PARTNERS */}
      <section className="py-24 px-6 bg-[#070707] border-t border-b border-white/10">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-4">Powered by <span className="text-[#DC2626]">Global Technology</span></h2>
            <p className="text-white/60 max-w-2xl mx-auto">We engineer solutions using certified equipment from the world's leading industrial power manufacturers, ensuring reliability and serviceability.</p>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 justify-items-center">
              {technicalPartners.map((partner, index) => (
                  <div key={index} className="p-4 rounded-lg flex flex-col items-center justify-center h-full w-full bg-[#050505] transition-transform hover:scale-105 border border-white/5 shadow-xl">
                      <h4 className="text-xl font-black mb-1 text-white/90" style={{ color: partner.color }}>{partner.name.split('/')[0]}</h4>
                      <p className="text-[10px] uppercase tracking-widest text-white/50">{partner.category}</p>
                  </div>
              ))}
            </div>
          </div>
      </section>

      {/* 6. PROJECT FILTER AND LIST */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto mb-12">
          <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-4">Our <span className="text-[#3D3D6B]">Portfolio</span></h2>
          <p className="text-white/60 max-w-2xl">Filter our generator installation projects by industry to see relevant solutions and technical specifications.</p>
        </div>
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-white/10 pb-4 max-w-7xl mx-auto">
          {['All', ...sectorHighlights.map(s => s.sector)].map(sector => (
            <button
              key={sector}
              onClick={() => setActiveTab(sector as ProjectCaseStudy['sector'] | 'All')}
              className={`py-2 px-6 rounded-full font-semibold transition-colors duration-200 text-sm uppercase tracking-wider
                ${activeTab === sector 
                  ? 'bg-[#DC2626] text-white' 
                  : 'bg-white/5 text-white/60 hover:bg-white/10'}` 
              }
            >
              {sector}
            </button>
          ))}
        </div>

        {/* Project List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-[#070707] p-8 rounded-lg border border-white/10 transition-all hover:border-[#DC2626] shadow-lg hover:shadow-[#DC2626]/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-black italic uppercase tracking-tight">{project.title}</h3>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#3D3D6B]/30 text-[#3D3D6B] border border-[#3D3D6B]">
                  {project.sector}
                </span>
              </div>
              <div className="flex items-center text-white/70 text-sm mb-6 gap-4">
                  <div className="flex items-center"><MapPin size={16} className="mr-2 text-[#DC2626]" /> {project.location}</div>
                  <div className="flex items-center"><Zap size={16} className="mr-2 text-[#DC2626]" /> Capacity: {project.capacity}</div>
              </div>

              <div className="space-y-6">
                  <div className="border-l-4 border-yellow-500/80 pl-4">
                      <p className="text-lg font-bold text-white mb-1 flex items-center"><ChevronRight size={18} className="mr-2 text-yellow-500" /> The Challenge</p>
                      <p className="text-white/60 text-sm italic">{project.challenge}</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500/80 pl-4">
                      <p className="text-lg font-bold text-white mb-1 flex items-center"><ChevronRight size={18} className="mr-2 text-blue-500" /> Our Solution</p>
                      <p className="text-white/60 text-sm">{project.solution}</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500/80 pl-4">
                      <p className="text-lg font-bold text-white mb-1 flex items-center"><CheckCircle size={18} className="mr-2 text-green-500" /> The Outcome</p>
                      <p className="text-white/60 text-sm font-semibold">{project.outcome}</p>
                  </div>
              </div>

              {/* Technical Keywords */}
              <div className="mt-6 pt-4 border-t border-white/10">
                  <span className="text-xs uppercase tracking-wider text-white/40 block mb-2">Technical Focus</span>
                  <div className="flex flex-wrap gap-2">
                      {project.keywords.map((keyword, k) => (
                          <span key={k} className="text-xs px-3 py-1 bg-white/5 rounded text-white/70">{keyword}</span>
                      ))}
                  </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. COMPLIANCE & CERTIFICATION STANDARDS */}
      <section className="py-24 px-6 bg-[#050505] border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-4">Compliance & <span className="text-[#3D3D6B]">Certifications</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto">Our commitment to safety and reliability is validated by adherence to the world's most stringent power standards, adapted for Pakistan's regulatory environment.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Standard 1: NFPA 110 */}
          <div className="bg-[#070707] p-6 rounded-lg border-l-4 border-[#DC2626]">
            <Hospital size={32} className="mb-4 text-[#DC2626]" />
            <h3 className="text-xl font-bold mb-2">NFPA 110 (Healthcare)</h3>
            <p className="text-white/70 text-sm">Mandatory for all critical emergency power systems, ensuring the generator starts, accepts load, and transfers power within 
            10 seconds
            .</p>
            <div className="mt-3 text-xs uppercase tracking-wider text-white/50">Required for hospitals, fire systems, and emergency lighting.</div>
          </div>
          
          {/* Standard 2: Uptime Tier IV */}
          <div className="bg-[#070707] p-6 rounded-lg border-l-4 border-yellow-500">
            <Server size={32} className="mb-4 text-yellow-500" />
            <h3 className="text-xl font-bold mb-2">Uptime Institute Tier IV (Data Centers)</h3>
            <p className="text-white/70 text-sm">Achieving 
            2N redundancy
             and 
            Fault Tolerance
            . Our designs ensure system resilience even during maintenance or equipment failure.</p>
            <div className="mt-3 text-xs uppercase tracking-wider text-white/50">Guarantees 99.995% uptime (26.3 minutes of downtime per year).</div>
          </div>
          
          {/* Standard 3: Local & Safety (ISO) */}
          <div className="bg-[#070707] p-6 rounded-lg border-l-4 border-[#3D3D6B]">
            <HardHat size={32} className="mb-4 text-[#3D3D6B]" />
            <h3 className="text-xl font-bold mb-2">ISO & Local Certification</h3>
            <p className="text-white/70 text-sm">We maintain ISO 9001 (Quality) and ISO 45001 (Safety) certifications, ensuring project execution meets global quality and worker safety benchmarks.</p>
            <div className="mt-3 text-xs uppercase tracking-wider text-white/50">Compliance with NEPRA and local electrical codes.</div>
          </div>
        </div>
      </section>

      {/* 8. EXPANDED TECHNICAL SERVICES */}
      <section className="py-24 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-4">Our <span className="text-[#DC2626]">Advanced</span> Technical Services</h2>
          <p className="text-white/60 max-w-2xl mx-auto">End-to-end power solutions covering the full project lifecycle, from initial concept engineering to long-term asset management.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Service 1: Engineering and Design */}
          <div className="bg-[#070707] p-8 rounded-lg border-t-4 border-[#3D3D6B] hover:bg-[#0E0E0E] transition-all">
            <Server size={32} className="mb-4 text-[#DC2626]" />
            <h3 className="text-2xl font-bold mb-3">Power System Engineering</h3>
            <ul className="list-disc list-inside text-white/70 space-y-2 text-sm">
              <li>
                Load Flow & Transient Analysis:
                 Accurate generator sizing and system response modeling.</li>
              <li>
                Acoustic & CFD Modeling:
                 Custom canopy design for noise compliance and optimal cooling.</li>
              <li>
                Single Line Diagrams (SLDs):
                 Detailed, approved schematics for complex paralleling systems.</li>
              <li>
                NFPA 110 & Tier IV Compliance:
                 Design validation against global mission-critical standards.</li>
            </ul>
          </div>
          
          {/* Service 2: Installation and Commissioning */}
          <div className="bg-[#070707] p-8 rounded-lg border-t-4 border-[#DC2626] hover:bg-[#0E0E0E] transition-all">
            <Factory size={32} className="mb-4 text-[#DC2626]" />
            <h3 className="text-2xl font-bold mb-3">Installation & Commissioning</h3>
            <ul className="list-disc list-inside text-white/70 space-y-2 text-sm">
              <li>
                Digital Paralleling Switchgear (PSM):
                 Integration of multi-megawatt systems for load management.</li>
              <li>
                Zero-Downtime Migration:
                 Hot cutovers for existing infrastructure upgrades (e.g., hospitals).</li>
              <li>
                Full Load Bank Testing:
                 Comprehensive commissioning to validate system capacity and transient response.</li>
              <li>
                SCADA & Remote Monitoring:
                 Setup for real-time performance tracking and fault prediction.</li>
            </ul>
          </div>
          
          {/* Service 3: Maintenance and Support */}
          <div className="bg-[#070707] p-8 rounded-lg border-t-4 border-yellow-500 hover:bg-[#0E0E0E] transition-all">
            <CheckCircle size={32} className="mb-4 text-[#DC2626]" />
            <h3 className="text-2xl font-bold mb-3">Maintenance & Aftercare (AMC)</h3>
            <ul className="list-disc list-inside text-white/70 space-y-2 text-sm">
              <li>
                Annual Maintenance Contracts (AMC):
                 Tailored agreements for preventive and predictive maintenance.</li>
              <li>
                24/7 Rapid Response:
                 Guaranteed call-out times for critical power failures across Karachi, Lahore, and Islamabad.</li>
              <li>
                Genuine Spares Management:
                 Access to certified parts to ensure long-term system integrity.</li>
              <li>
                Fuel & Fluid Analysis:
                 Optimization services to maintain engine efficiency and longevity.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 9. SUSTAINABILITY & FUTURE FOCUS */}
      <section className="py-24 px-6 bg-[#090909]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-4">Sustainable Power Solutions</h2>
          <p className="text-white/60 max-w-2xl mx-auto">Future-proofing your energy infrastructure through high-efficiency systems, biofuel compatibility, and reducing the environmental footprint of critical power generation.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {/* Focus 1: HVO & Biofuels */}
          <div className="bg-[#070707] p-8 rounded-lg border-l-4 border-green-500">
            <Waves size={32} className="mb-4 text-green-500" />
            <h3 className="text-2xl font-bold mb-3">HVO Biofuel Ready Systems</h3>
            <p className="text-white/70 text-sm leading-relaxed">We specialize in commissioning and certifying modern industrial engines (Perkins, Cummins, etc.) to run on 
            Hydrotreated Vegetable Oil (HVO)
            , a 
            fossil-free diesel alternative
             that can reduce net CO2 emissions by up to 90% without requiring engine modifications or performance reduction.</p>
            
            <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 bg-white/5 rounded text-green-500">90% CO2 Reduction</span>
                <span className="text-xs px-3 py-1 bg-white/5 rounded text-white/70">No Engine Modification</span>
            </div>
          </div>
          
          {/* Focus 2: CHP & Efficiency */}
          <div className="bg-[#070707] p-8 rounded-lg border-l-4 border-[#3D3D6B]">
            <Zap size={32} className="mb-4 text-[#3D3D6B]" />
            <h3 className="text-2xl font-bold mb-3">Combined Heat and Power (CHP)</h3>
            <p className="text-white/70 text-sm leading-relaxed">Our CHP solutions capture and utilize the waste heat generated during electricity production (from exhaust and jacket water) to power industrial processes, heating, or cooling. This dramatically increases 
            fuel efficiency to over 85%
             and significantly reduces operational costs.</p>
            
            <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 bg-white/5 rounded text-[#3D3D6B]">85%+ Efficiency</span>
                <span className="text-xs px-3 py-1 bg-white/5 rounded text-white/70">Cost Reduction</span>
            </div>
          </div>
        </div>
      </section>

      {/* 10. LONG-TERM VALUE, AFTERCARE, & FINANCIAL MODELS (NEW SECTION) */}
      <section className="py-24 px-6 bg-[#050505] border-t border-white/10">
          <div className="max-w-7xl mx-auto text-center mb-16">
              <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-4">Long-Term Value & Risk Mitigation</h2>
              <p className="text-white/60 max-w-2xl mx-auto">Our partnership extends far beyond installation, focusing on maximizing asset lifespan, minimizing downtime risk, and optimizing Total Cost of Ownership (TCO).</p>
          </div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Focus 1: Predictive Maintenance (Risk) */}
              <div className="bg-[#070707] p-8 rounded-lg border-t-4 border-[#DC2626]">
                  <Zap size={32} className="mb-4 text-[#DC2626]" />
                  <h3 className="text-2xl font-bold mb-3">Predictive Maintenance & Spares</h3>
                  <p className="text-white/70 text-sm">We use data from SCADA systems to move from reactive repairs to predictive intervention. Our 
                  guaranteed genuine spares inventory
                   reduces lead times and ensures the long-term integrity of high-value components (engine, alternator, controls).</p>
                  <ul className="list-disc list-inside text-white/60 space-y-1 mt-3 text-xs">
                      <li>
                        Oil & Coolant Analysis:
                         Detecting early engine wear.</li>
                      <li>
                        Guaranteed Parts Availability:
                         Stocking critical spares locally.</li>
                  </ul>
              </div>

              {/* Focus 2: Financial Models (Clarity) */}
              <div className="bg-[#070707] p-8 rounded-lg border-t-4 border-[#3D3D6B]">
                  <TrendingUp size={32} className="mb-4 text-[#3D3D6B]" />
                  <h3 className="text-2xl font-bold mb-3">TCO Analysis & Financial Models</h3>
                  <p className="text-white/70 text-sm">We provide detailed Total Cost of Ownership (TCO) models, comparing OPEX (Maintenance/Fuel) vs. CAPEX (Initial Investment) over a 15-year lifecycle. We also offer flexible 
                  Power Purchase Agreements (PPA)
                   for qualifying projects.</p>
                  <ul className="list-disc list-inside text-white/60 space-y-1 mt-3 text-xs">
                      <li>
                        TCO Projections:
                         Transparency in long-term expenditure.</li>
                      <li>
                        PPA Options:
                         Off-balance sheet financing for power generation.</li>
                  </ul>
              </div>
              
              {/* Focus 3: Uptime Guarantee (Trust) */}
              <div className="bg-[#070707] p-8 rounded-lg border-t-4 border-green-500">
                  <CheckCircle size={32} className="mb-4 text-green-500" />
                  <h3 className="text-2xl font-bold mb-3">SLA and Uptime Guarantee</h3>
                  <p className="text-white/70 text-sm">For mission-critical installations, our service level agreements (SLAs) include contractual guarantees on maximum response time, repair time, and system availability. This transfers the risk of downtime from your operations to our service team.</p>
                  <ul className="list-disc list-inside text-white/60 space-y-1 mt-3 text-xs">
                      <li>
                        Guaranteed 2-Hour Response
                         for critical failures.</li>
                      <li>
                        Contractual Availability:
                         E.g., 99.9% or better.</li>
                  </ul>
              </div>
          </div>
      </section>

      {/* 11. TESTIMONIALS / PARTNERS */}
      <section className="py-24 px-6 bg-[#090909]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-4">Client Testimonials</h2>
          <p className="text-white/60 max-w-3xl mx-auto">Trusted by leading organizations across Pakistan's healthcare, data center, and industrial sectors.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto text-white/80">
          <div className="bg-[#070707] p-6 rounded-lg">“Exceptional execution and zero downtime for our hospital backup system.” – Islamabad Medical Center</div>
          <div className="bg-[#070707] p-6 rounded-lg">“Reliable power for our data center in Karachi with 2N redundancy.” – Karachi Cloud Facility</div>
          <div className="bg-[#070707] p-6 rounded-lg">“Industrial generator installation completed ahead of schedule with minimal disruption.” – Lahore Automotive Plant</div>
        </div>
      </section>

      {/* 12. CALL TO ACTION */}
      <section className="py-20 px-6 bg-[#DC2626] text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black italic uppercase mb-4 text-white">
            Ready for your next Mission-Critical Project?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Partner with experts in industrial generator installation and critical power solutions. From data center power systems to custom rooftop installations, we ensure project success and long-term reliability.
          </p>
          <a 
            href="tel:03008112242" 
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-[#DC2626] bg-white hover:bg-gray-100 transition-colors shadow-xl"
          >
            Call Now: 03008112242 <ChevronRight size={20} className="ml-2" />
          </a>
        </div>
      </section>

      {/* 13. SEO Keywords (Revised and Expanded) */}
      <section className="p-6 mt-16 text-white/5 bg-[#0A0A0A]">
        <h2 className="sr-only">Comprehensive SEO Keywords for Critical Power and Generator Installation in Pakistan</h2>
        <p className="text-xs">
          Our projects showcase world-class 
          industrial generator installation
           and 
          critical power infrastructure
           across Pakistan, including 
          Karachi, Lahore, and Islamabad
          . We specialize in 
          data center power solutions
           meeting 
          Uptime Institute Tier IV
           standards, ensuring 
          2N redundancy
           and 
          99.995% uptime
          . We offer expertise in 
          zero downtime migration for hospitals
           (fully compliant with 
          NFPA 110
          ), large-scale 
          multi-megawatt paralleling
           using advanced 
          digital switchgear
          , and 
          microgrid
           integration with 
          black-start
           capability. We provide 
          high-efficiency CHP systems
           (
            Combined Heat and Power
          ) and are certified for 
          HVO biofuel-ready systems
          , promoting 
          sustainable power solutions
           and a reduced carbon footprint. Our services cover 
          rooftop generator systems
          , 
          heavy-lift logistics
          , exceptional 
          acoustic attenuation
           via 
          CFD modeling
          , superior 
          transient response
          , and optimizing the 
          total cost of ownership (TCO)
           for clients in the commercial, healthcare, industrial, and utility sectors.
        </p>
      </section>

    </main>      
  );
};

export default ProjectsPage;