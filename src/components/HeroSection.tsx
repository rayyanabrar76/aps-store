'use client';

import { Shield, Zap, Phone, Database } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  const videoSlides = [
    {
      title: "INDUSTRIAL",
      subtitle: "POWER SYSTEMS",
      description: "Engineering heavy-duty electrical infrastructure for Pakistan's most demanding industrial sectors.",
      stat: "3000",
      unit: "KVA",
      videoSrc: "/videos/slide-1.mp4",
    },
    {
      title: "UNINTERRUPTED",
      subtitle: "PRECISION",
      description: "Seamless 24/7 power management with Tier-1 reliability and real-time monitoring.",
      stat: "99.9",
      unit: "UPTIME",
      videoSrc: "/videos/slide-2.mp4",
    },
    {
      title: "LOCAL",
      subtitle: "ENGINEERING",
      description: "Lahore-based expertise delivering international standards in power distribution.",
      stat: "TIER-1",
      unit: "ASSETS",
      videoSrc: "/videos/slide-3.mp4",
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videoSlides.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isPlaying, videoSlides.length]);

  // Preload videos
  useEffect(() => {
    videoSlides.forEach((slide, idx) => {
      if (videoRefs.current[idx]) {
        videoRefs.current[idx].load();
      }
    });
  }, []);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 100);
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col bg-[#050505] overflow-hidden border-b border-white/5">
      
      {/* Header Spacer */}
      <div className="h-20 md:h-24 lg:h-28 w-full flex-shrink-0" aria-hidden="true" />

      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {videoSlides.map((slide, idx) => (
          <AnimatePresence key={idx} mode="wait">
            {currentSlide === idx && (
              <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 0.5, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                className="absolute inset-0"
              >
                <video 
                  ref={(el) => {
                    if (el) videoRefs.current[idx] = el;
                  }}
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                  aria-hidden="true"
                >
                  <source src={slide.videoSrc} type="video/mp4" />
                </video>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-[#3D3D6B]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-[#3D3D6B]/20 to-black/40 pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-12 flex-grow flex items-center py-12 lg:py-0">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-8 lg:gap-12">
          
          {/* Left Content */}
          <div className="max-w-2xl lg:max-w-4xl relative w-full">
            
            {/* Brand Tag */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 text-red-600 mb-6 md:mb-8 lg:mb-10"
            >
              <div className="h-[1px] w-8 md:w-12 bg-current" aria-hidden="true" />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] md:tracking-[0.4em]">
                APS Industrial • Lahore
              </span>
            </motion.div>

            {/* Animated Content Box */}
            <div className="relative min-h-[200px] sm:min-h-[240px] md:min-h-[280px] lg:min-h-[320px] mb-8 md:mb-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                  className="absolute inset-0 flex flex-col justify-start"
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-4 md:mb-6">
                    {videoSlides[currentSlide].title}
                    <br />
                    <span className="text-[#3D3D6B] font-light italic">
                      {videoSlides[currentSlide].subtitle}
                    </span>
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-xl leading-relaxed font-light">
                    {videoSlides[currentSlide].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link href="/inventory" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto rounded-none bg-white text-black hover:bg-gradient-to-r hover:from-red-600 hover:to-[#3D3D6B] active:bg-gradient-to-r active:from-red-700 active:to-[#3D3D6B] h-12 sm:h-14 md:h-16 px-6 md:px-10 text-[10px] md:text-xs font-bold tracking-widest transition-all duration-200">
                  <Database className="mr-2 h-4 w-4" /> 
                  EXPLORE INVENTORY
                </Button>
              </Link>

              <Button 
                asChild 
                className="w-full sm:w-auto rounded-none h-12 sm:h-14 md:h-16 px-6 md:px-10 text-[10px] md:text-xs font-bold tracking-widest transition-all duration-200 bg-white text-black border border-white hover:bg-gradient-to-r hover:from-red-600 hover:to-[#3D3D6B]"
              >
                <a href="tel:+923008440485">
                  <Phone className="mr-2 h-4 w-4" /> 
                  CONSULTATION
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right Content: Stats Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="hidden lg:flex flex-col gap-4 min-w-[300px] xl:min-w-[340px]"
          >
            {/* Primary Stat Card */}
            <div className="relative p-8 xl:p-10 bg-[#3D3D6B]/5 border border-[#3D3D6B]/20 backdrop-blur-2xl text-center overflow-hidden h-[180px] xl:h-[200px] flex items-center justify-center">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-red-600" aria-hidden="true" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <div className="text-6xl xl:text-8xl font-black text-white leading-none tracking-tighter">
                    {videoSlides[currentSlide].stat}
                  </div>
                  <div className="text-[10px] font-bold text-red-500 tracking-[0.4em] mt-3 xl:mt-4 uppercase">
                    {videoSlides[currentSlide].unit} PEAK
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Secondary Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-[#3D3D6B]/5 border border-[#3D3D6B]/10 text-center hover:bg-[#3D3D6B]/10 transition-colors duration-300">
                <Shield className="h-5 w-5 text-neutral-500 mx-auto mb-3" aria-hidden="true" />
                <div className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest">Certified</div>
                <div className="text-sm font-bold text-white uppercase mt-1">ISO-9001</div>
              </div>
              <div className="p-6 bg-[#3D3D6B]/5 border border-[#3D3D6B]/10 text-center hover:bg-[#3D3D6B]/10 transition-colors duration-300">
                <Zap className="h-5 w-5 text-neutral-500 mx-auto mb-3" aria-hidden="true" />
                <div className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest">Voltage</div>
                <div className="text-sm font-bold text-white uppercase mt-1">11KV Range</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide Navigation */}
      <nav 
        className="absolute bottom-6 md:bottom-8 lg:bottom-auto left-6 lg:left-auto lg:right-8 xl:right-12 lg:top-1/2 lg:-translate-y-1/2 flex lg:flex-col items-center gap-3 md:gap-4 lg:gap-6 z-30"
        aria-label="Slide navigation"
      >
        {videoSlides.map((slide, i) => (
          <button
            key={i}
            onClick={() => handleSlideChange(i)}
            className="group relative focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
            aria-label={`Go to slide ${i + 1}: ${slide.title} ${slide.subtitle}`}
            aria-current={i === currentSlide ? "true" : "false"}
          >
            <div 
              className={`h-[2px] lg:h-10 xl:lg:h-12 w-8 md:w-10 xl:w-12 lg:w-[2px] transition-all duration-700 ease-out ${
                i === currentSlide 
                  ? "bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.6)] scale-110" 
                  : "bg-white/20 group-hover:bg-white/40"
              }`}
            />
          </button>
        ))}
      </nav>
    </section>
  );
}

export { HeroSection };
export default HeroSection;
