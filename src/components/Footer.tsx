'use client';

import { Zap, MapPin, Phone, Globe, Shield, ExternalLink, ArrowRight, Cpu, Activity, Lock } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-[#020202] pt-40 pb-12 overflow-hidden selection:bg-[#DC2626] selection:text-white">
      
      {/* --- GOD-LEVEL AMBIANCE --- */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#DC2626]/40 to-transparent" />
      
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#3D3D6B]/15 rounded-full blur-[160px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#DC2626]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Fixed Technical Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, 
          backgroundSize: '60px 60px' 
        }} 
      />

      <div className="container relative z-20 mx-auto px-6">
        
        {/* HEADER: CINEMATIC LOGO & GLOBAL STATUS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-32">
          <div>
            <div className="flex items-center gap-6 group mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-[#DC2626] blur-2xl opacity-0 group-hover:opacity-30 transition-all duration-700" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-black border border-white/10 shadow-[0_0_40px_rgba(0,0,0,1)] group-hover:border-[#DC2626]/50 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3D3D6B]/20 to-transparent" />
                  <Zap className="h-10 w-10 text-white fill-white/10 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <div className="space-y-1">
                <h2 className="font-display text-5xl font-black tracking-tighter text-white uppercase italic">
                  APS<span className="text-[#DC2626] not-italic">.</span>
                </h2>
                <div className="flex items-center gap-2">
                  <div className="h-[2px] w-8 bg-[#3D3D6B]" />
                  <p className="text-[10px] uppercase tracking-[8px] text-white/40 font-bold">Power Intelligence</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-end gap-8 border-l border-white/5 md:border-none pl-6 md:pl-0">
            <div className="space-y-2">
              <p className="text-[10px] font-black text-[#3D3D6B] uppercase tracking-[4px]">Current_Load_Status</p>
              <div className="flex items-center gap-4">
                <Activity className="h-4 w-4 text-green-500" />
                <span className="text-2xl font-mono text-white/90">99.98% <span className="text-xs text-white/30 tracking-tighter uppercase">Uptime_Efficiency</span></span>
              </div>
            </div>
            <button className="group relative h-16 px-10 bg-white text-black font-black text-xs uppercase tracking-[4px] rounded-full overflow-hidden hover:scale-105 transition-all duration-500">
               <div className="absolute inset-0 bg-[#DC2626] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
               <span className="relative z-10 group-hover:text-white transition-colors">Initialize Project</span>
            </button>
          </div>
        </div>

        {/* CONTENT MESH */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-40">
          
          {/* COLUMN 1: VIRTUAL HQ */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h4 className="text-white text-[12px] font-black uppercase tracking-[5px] flex items-center gap-3">
                <div className="h-1 w-1 rounded-full bg-[#DC2626]" /> 01 // Nexus
              </h4>
              <p className="text-sm text-white/40 font-medium leading-loose uppercase tracking-widest italic">
                Office #205, Asad Business Centre,<br />Model Town, Lahore, PK
              </p>
            </div>
            <div className="pt-6 border-t border-white/5 space-y-2">
              <p className="text-[10px] text-[#3D3D6B] font-black uppercase tracking-[4px]">Comm_Channels</p>
              {/* UPDATED PHONE NUMBER */}
              <a href="tel:+923008112242" className="block text-lg font-bold text-white/80 hover:text-[#DC2626] transition-colors tracking-tight">
                +92 300 811 2242
              </a>
              <p className="text-[10px] text-white/20 font-mono tracking-widest">ENCRYPTED_VOIP_ACTIVE</p>
            </div>
          </div>

          {/* COLUMN 2: OPERATIONS */}
          <div className="space-y-10">
             <h4 className="text-white text-[12px] font-black uppercase tracking-[5px] flex items-center gap-3">
                <div className="h-1 w-1 rounded-full bg-[#DC2626]" /> 02 // Ops
              </h4>
              <ul className="space-y-6">
                {["System_Engineering", "Grid_Manufacturing", "Rapid_Deployment", "Energy_Audit"].map((link) => (
                  <li key={link} className="group overflow-hidden">
                    <a href="#" className="flex items-center justify-between text-[11px] font-black text-white/30 uppercase tracking-[4px] group-hover:text-white transition-all">
                      <span>{link}</span>
                      <ArrowRight className="h-3 w-3 -translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all text-[#DC2626]" />
                    </a>
                  </li>
                ))}
              </ul>
          </div>

          {/* COLUMN 3: AUTHENTICATION */}
          <div className="space-y-10">
             <h4 className="text-white text-[12px] font-black uppercase tracking-[5px] flex items-center gap-3">
                <div className="h-1 w-1 rounded-full bg-[#DC2626]" /> 03 // Trust
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl group hover:border-[#3D3D6B] transition-colors">
                  <Shield className="h-5 w-5 text-[#3D3D6B] mb-3" />
                  <p className="text-[9px] font-black text-white/40 uppercase tracking-widest">ISO_9001</p>
                </div>
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl group hover:border-[#DC2626] transition-colors">
                  <Lock className="h-5 w-5 text-[#DC2626] mb-3" />
                  <p className="text-[9px] font-black text-white/40 uppercase tracking-widest">SEC_GRID</p>
                </div>
              </div>
          </div>

          {/* COLUMN 4: GLOBAL POSITIONING */}
          <div className="relative group">
            <div className="absolute inset-0 bg-[#3D3D6B]/5 rounded-[40px] blur-2xl group-hover:bg-[#DC2626]/10 transition-all duration-700" />
            <div className="relative h-full w-full rounded-[40px] border border-white/10 bg-black/40 backdrop-blur-3xl p-8 flex flex-col justify-between overflow-hidden">
              <Globe className="absolute -right-4 -top-4 h-32 w-32 text-white/[0.02] group-hover:text-[#DC2626]/5 transition-colors duration-700" />
              <div>
                <h5 className="text-white font-bold text-sm tracking-widest uppercase mb-4">Nationwide Presence</h5>
                <p className="text-[10px] text-white/40 leading-relaxed tracking-wider uppercase">Active deployments across 14 industrial zones in Pakistan.</p>
              </div>
              <div className="space-y-4 pt-8">
                 <div className="h-[2px] w-full bg-white/5 overflow-hidden">
                    <div className="h-full w-2/3 bg-gradient-to-r from-[#3D3D6B] to-[#DC2626]" />
                 </div>
                 <button className="flex items-center gap-2 text-[10px] font-black text-[#DC2626] uppercase tracking-[3px]">
                   Network_Map <ExternalLink className="h-3 w-3" />
                 </button>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM LEGAL TERMINAL */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 pt-12 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <p className="text-[10px] font-mono text-white/10 uppercase tracking-[6px]">
              © APS POWER SYSTEMS // HARDWARE_REV_8.0 // {currentYear}
            </p>
          </div>
          <div className="flex gap-10">
              {["Security", "Protocols", "Liability"].map(item => (
                <a key={item} href="#" className="text-[10px] font-black text-white/20 hover:text-white uppercase tracking-[4px] transition-all">
                  {item}_PRTCL
                </a>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
export default Footer;