'use client';  // ← Add this line at the very top

// rest of your code stays the same
import React from "react";
import { Shield, Target, Zap, Users, Factory, Award, LucideIcon } from "lucide-react";

// Reusable Stat Card
interface StatCardProps {
  label: string;
  value: string;
  Icon: LucideIcon; // Correct typing for Lucide icons
}

const StatCard: React.FC<StatCardProps> = ({ label, value, Icon }) => (
  <div className="p-4 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm group hover:border-aps-red/50 transition-all duration-500 flex flex-col items-start">
    <Icon className="h-5 w-5 text-aps-red mb-2 sm:mb-4 group-hover:scale-110 transition-transform" />
    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">{label}</p>
    <p className="text-base sm:text-lg font-bold italic">{value}</p>
  </div>
);

// Reusable Info Card
interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  titleColor?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, children, titleColor }) => (
  <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/5">
    <h4 className={`text-xs font-black tracking-widest mb-4 uppercase ${titleColor ?? "text-aps-red"}`}>{title}</h4>
    <div className="text-sm text-white/60 leading-relaxed">{children}</div>
  </div>
);

export const WhoWeAre: React.FC = () => {
  const stats: StatCardProps[] = [
    { label: "Power Range", value: "8kVA - 2500kVA", Icon: Zap },
    { label: "Infrastructure", value: "ISO Ready", Icon: Factory },
    { label: "Tech Partners", value: "Global Elite", Icon: Shield },
    { label: "Experience", value: "Vast Domain", Icon: Award },
  ];

  const coreValues = ['Doing things the right way', 'Continuous Excellence', 'Innovation & Knowledge'];

  return (
    <div className="min-h-screen bg-aps-black text-white selection:bg-aps-red/30">
      {/* HERO SECTION */}
      <section className="relative pt-20 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] sm:h-[500px] bg-aps-red/10 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 animate-fade-in">
            <div className="h-[1px] w-8 sm:w-12 bg-aps-red" />
            <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[3px] sm:tracking-[5px] text-aps-red italic">
              System_Initiated // Core_Profile
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold italic tracking-tighter mb-6 sm:mb-8 leading-tight sm:leading-none">
            ENGINEERING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/20">
              POWER LIBERTY.
            </span>
          </h1>

          <p className="max-w-xl sm:max-w-2xl text-sm sm:text-lg text-white/60 font-light leading-relaxed mb-8 sm:mb-12">
            Advanced Power Solutions (APS) is a premier engineering and energy solution provider 
            based in Lahore. We architect resilient energy infrastructures that empower 
            industrial, commercial, and residential sectors across Pakistan.
          </p>

          {/* QUICK STATS HUD */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* VISION MATRIX */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 border-y border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 sm:gap-16 items-center">
          <div className="space-y-10 sm:space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold italic mb-4 sm:mb-6 flex items-center gap-3">
                <Target className="text-aps-red h-6 w-6 sm:h-8 sm:w-8" />
                OUR MISSION
              </h2>
              <p className="text-white/50 leading-relaxed italic border-l-2 border-aps-red pl-4 sm:pl-6">
                "To enhance the competitive advantage of our business clients by providing 
                innovative, cost-effective, and secure quality products. We strive for 
                professionalism at the most competitive rates."
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold italic mb-4 sm:mb-6 flex items-center gap-3">
                <Users className="text-aps-navy h-6 w-6 sm:h-8 sm:w-8" />
                OUR CORE VALUES
              </h2>
              <ul className="space-y-3 sm:space-y-4">
                {coreValues.map((val, i) => (
                  <li key={i} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold tracking-wide group">
                    <div className="h-1.5 w-1.5 rounded-full bg-aps-red group-hover:scale-150 transition-transform" />
                    {val.toUpperCase()}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CINEMATIC IMAGE */}
          <div className="relative aspect-square sm:aspect-[4/3] rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white/10 group">
            <div className="absolute inset-0 bg-aps-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
            <img 
              src="/images/aps-headquarters.png" 
              alt="APS Engineering Headquarters" 
              loading="lazy"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
            />
            <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-20">
              <p className="text-[6px] sm:text-[8px] font-mono text-white/40 tracking-[8px] sm:tracking-[10px]">OPERATIONAL_UNIT_01</p>
            </div>
          </div>
        </div>
      </section>

      {/* LOGISTICS DATA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block p-1 rounded-full bg-white/5 border border-white/10 mb-6 sm:mb-8">
            <p className="px-3 sm:px-4 py-1 text-[7px] sm:text-[9px] font-black uppercase tracking-[2px] sm:tracking-[3px]">Registered_Entity_v.2024</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 text-left max-w-md sm:max-w-4xl mx-auto">
            <InfoCard title="Headquarters">
              Office #205, 2nd Floor Asad Business Centre,<br />
              Block M, Model Town, Lahore, Pakistan.
            </InfoCard>
            <InfoCard title="Tax Compliance" titleColor="text-aps-navy">
              <p className="font-mono text-white/40">
                NTN: 3612366-8<br />
                STRN: 3277876180746
              </p>
            </InfoCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
