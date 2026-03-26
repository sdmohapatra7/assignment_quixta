"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Box, Cpu, ChevronRight, MessageSquare, Briefcase, Zap } from "lucide-react";

export default function Home() {
  const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="flex flex-col w-full text-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero_bg.png" 
            alt="Abstract Background" 
            fill 
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10" />
        </div>
        
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="relative z-20 max-w-4xl mx-auto flex flex-col items-center gap-6"
        >
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Future of Advanced <br/>
            <span className="gradient-text">Materials</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg md:text-xl max-w-2xl px-4">
            Revolutionize your manufacturing process with our innovative advanced materials.
          </motion.p>
          <motion.button variants={fadeUp} className="mt-8 px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all flex items-center gap-2 group">
            Explore 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </section>

      {/* 2. LOREM IPSUM & LOGOS GRIDS */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto w-full relative">
        <div className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-[#ff5e62] to-[#9d4edd] opacity-50 hidden md:block" />
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="flex flex-col md:flex-row gap-16 md:pl-12"
        >
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-light text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h2>
          </div>
          
          <div className="flex-1 grid grid-cols-2 gap-4">
            {/* Logos Placeholders */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="glass-card rounded-2xl p-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 hover:border-white/20">
                <span className="text-xl font-bold opacity-60">IDYLLIC</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 3. HIGHLIGHT CARD */}
      <section className="py-12 px-6 w-full max-w-6xl mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="relative rounded-3xl overflow-hidden p-1 bg-gradient-to-r from-[#9d4edd] to-[#ff5e62]"
        >
          <div className="bg-[#120b1f] rounded-[22px] p-12 md:p-20 text-center flex flex-col items-center gap-6 relative overflow-hidden">
            <div className="absolute -inset-24 bg-[#9d4edd] opacity-20 blur-[100px]" />
            <h2 className="text-3xl md:text-5xl font-bold relative z-10">Our Journey Towards<br/>Innovation and Excellence</h2>
            <p className="text-gray-400 max-w-xl relative z-10">
              Discover how our advanced materials are shaping the future across industries globally.
            </p>
            <button className="relative z-10 mt-6 px-8 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition-transform">
              Start Tour
            </button>
          </div>
        </motion.div>
      </section>

      {/* 4. SOLUTIONS LIST */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl font-bold leading-tight">Advanced Materials and <br/>Integrative Solutions</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-col gap-12">
            <motion.div variants={fadeUp} className="flex gap-6">
              <div className="w-12 h-12 shrink-0 rounded-full bg-[#9d4edd]/20 flex items-center justify-center text-[#9d4edd]">
                <Box size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Idyllic</h3>
                <p className="text-gray-400 mb-6">Cutting-edge materials designed for extreme environments and high performance applications.</p>
                <button className="text-xs tracking-wider uppercase bg-[#f6aa1c] text-black px-4 py-1.5 rounded-full font-bold">Discover</button>
              </div>
            </motion.div>
            
            <div className="h-[1px] w-full bg-white/10" />

            <motion.div variants={fadeUp} className="flex gap-6">
              <div className="w-12 h-12 shrink-0 rounded-full bg-[#f6aa1c]/20 flex items-center justify-center text-[#f6aa1c]">
                <Cpu size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Integrative Solutions</h3>
                <p className="text-gray-400 mb-6">Seamless integration of advanced materials into your existing manufacturing workflows.</p>
                <button className="text-xs tracking-wider uppercase bg-[#f6aa1c] text-black px-4 py-1.5 rounded-full font-bold">Learn More</button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. BUBBLES HERO */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/soap_bubbles.png" 
          alt="Luminescence Bubbles" 
          fill 
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent z-10" />
        
        <motion.h2 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="relative z-20 text-4xl md:text-6xl lg:text-7xl font-bold text-center max-w-5xl px-4 leading-tight shadow-black drop-shadow-2xl"
        >
          Revolutionizing luminescence to power the next generation of technology
        </motion.h2>
      </section>

      {/* 6. SCIENCE CARDS GRID */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto w-full">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex justify-between items-end mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">The Science Behind Our<br/>Innovative Solutions</h2>
          <button className="text-[#f6aa1c] hover:text-white transition-colors uppercase tracking-widest text-sm font-bold flex items-center gap-1">
            View All <ChevronRight size={16} />
          </button>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <motion.div variants={fadeUp} className="glass-card rounded-3xl p-8 relative overflow-hidden group h-[300px] flex flex-col justify-end">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500 rounded-full blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity" />
            <h3 className="text-xl font-bold mb-3 z-10">Advanced Polymers</h3>
            <p className="text-gray-400 text-sm z-10">Pioneering new polymer structures that offer unprecedented strength-to-weight ratios.</p>
          </motion.div>
          {/* Card 2 */}
          <motion.div variants={fadeUp} className="glass-card rounded-3xl p-8 relative overflow-hidden group h-[300px] flex flex-col justify-end">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-red-500 rounded-full blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity" />
            <h3 className="text-xl font-bold mb-3 z-10">Nanotechnology Integration</h3>
            <p className="text-gray-400 text-sm z-10">Seamlessly integrating nanoscale structures to enhance macroscopic material properties.</p>
          </motion.div>
          {/* Card 3 */}
          <motion.div variants={fadeUp} className="glass-card rounded-3xl p-8 relative overflow-hidden group h-[300px] flex flex-col justify-end">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-emerald-500 rounded-full blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity" />
            <h3 className="text-xl font-bold mb-3 z-10">Smart Coatings</h3>
            <p className="text-gray-400 text-sm z-10">Developing responsive surfaces that adapt to environmental stimuli and changes.</p>
          </motion.div>
          {/* Card 4 */}
          <motion.div variants={fadeUp} className="glass-card rounded-3xl p-8 relative overflow-hidden group h-[300px] flex flex-col justify-end">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-pink-500 rounded-full blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity" />
            <h3 className="text-xl font-bold mb-3 z-10">Biomimetic Design</h3>
            <p className="text-gray-400 text-sm z-10">Drawing inspiration from nature to solve complex engineering and material challenges.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* 7. SUSTAINABILITY */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex-1">
          <h2 className="text-4xl font-bold mb-8">Sustainability at the heart<br/>of Innovation</h2>
          <p className="text-gray-400 mb-8 max-w-lg">
            Our commitment to the environment drives us to create materials that are not only high-performing but also sustainable and eco-friendly from production to end-of-life.
          </p>
          <button className="px-6 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
            Read More
          </button>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 1 }} variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }} className="flex-1 relative h-[500px] w-full">
          <Image src="/images/glass_shape.png" alt="Sustainability Glass Shape" fill className="object-contain" />
        </motion.div>
      </section>

      {/* 8. WHAT'S NEW IN TECH */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto w-full relative">
        <div className="absolute left-0 bottom-0 w-[2px] h-1/2 bg-gradient-to-t from-[#f6aa1c] to-[#9d4edd] opacity-50 hidden md:block" />
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="md:pl-12">
          <h2 className="text-3xl font-bold mb-12 text-center md:text-left">What's New in Tech</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <motion.div key={item} variants={fadeUp} className="glass-card rounded-2xl overflow-hidden group cursor-pointer hover:border-white/20 transition-all">
                <div className="h-40 relative overflow-hidden">
                  <Image src="/images/wave_thumbnail.png" alt="Article Thumbnail" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <span className="text-xs text-[#9d4edd] font-bold tracking-wider uppercase mb-2 block">15 Apr 2024</span>
                  <h3 className="font-bold mb-3 line-clamp-2">Breakthrough in Quantum Dot Displays</h3>
                  <p className="text-gray-400 text-sm line-clamp-3">
                    New research shows promising results for vastly improved color accuracy and energy efficiency in next-gen screens.
                  </p>
                  <div className="mt-4 text-sm font-semibold flex items-center gap-1 group-hover:text-[#f6aa1c] transition-colors">
                    Read Article <ChevronRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 9. CTA CARDS FOOTER */}
      <section className="py-12 px-6 md:px-16 max-w-7xl mx-auto w-full mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Big Let's Talk Card */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass-card rounded-[2rem] p-10 md:p-14 flex flex-col justify-between relative overflow-hidden group cursor-pointer bg-gradient-to-br from-purple-900/20 to-blue-900/10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col h-full justify-between gap-12">
              <h2 className="text-4xl md:text-5xl font-bold">Have Questions?<br/>Let's Talk!</h2>
              <div className="flex items-center gap-4">
                <span className="text-gray-400 group-hover:text-white transition-colors">Reach out to our experts</span>
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-[#f6aa1c] transition-colors">
                  <MessageSquare size={20} />
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Stacked Right Cards */}
          <div className="flex flex-col gap-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass-card rounded-[2rem] p-8 md:p-10 flex-1 flex items-center justify-between group cursor-pointer hover:border-white/20 transition-all">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white">
                  <Zap size={24} />
                </div>
                <h3 className="text-2xl font-bold">Partnerships</h3>
              </div>
              <ChevronRight size={24} className="text-gray-500 group-hover:text-white transition-colors" />
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass-card rounded-[2rem] p-8 md:p-10 flex-1 flex items-center justify-between group cursor-pointer hover:border-white/20 transition-all">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-2xl font-bold">Careers</h3>
              </div>
              <ChevronRight size={24} className="text-gray-500 group-hover:text-white transition-colors" />
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
