"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Grid, Server, ChevronRight, Settings } from "lucide-react";

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
    <div className="flex flex-col w-full text-white bg-black">
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
            <span className="text-white">Materials</span> {/* Removed gradient-text since original looks white */}
          </motion.h1>
          <motion.p variants={fadeUp} className="text-gray-300 text-lg md:text-xl max-w-2xl px-4">
            Revolutionize your manufacturing process with our innovative advanced materials.
          </motion.p>
          <motion.button variants={fadeUp} className="mt-8 px-10 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all flex items-center justify-center text-sm tracking-wide">
            Explore 
          </motion.button>
        </motion.div>
      </section>

      {/* 2. LOREM IPSUM & LOGOS GRIDS */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto w-full relative">
        <div className="absolute left-0 top-0 w-[3px] h-full bg-gradient-to-b from-[#ff7e5f] to-[#9d4edd] hidden md:block" />
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="flex flex-col md:flex-row gap-16 md:pl-16"
        >
          <div className="flex-1">
            <h2 className="text-3xl md:text-[2.5rem] leading-snug font-light text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h2>
          </div>
          
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 md:mt-0">
            {/* Logos Placeholders */}
            <div className="bg-[#121212] rounded-2xl p-6 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity border border-white/5">
              <Grid size={32} />
            </div>
            <div className="bg-[#121212] rounded-2xl p-6 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity border border-white/5">
              <span className="text-xl font-bold tracking-widest uppercase">Idyllic</span>
            </div>
            <div className="bg-[#121212] rounded-2xl p-6 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity border border-white/5">
              <span className="text-3xl font-bold uppercase">MI</span>
            </div>
            <div className="bg-[#121212] rounded-2xl p-6 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity border border-white/5">
              <span className="text-xl font-bold tracking-widest uppercase">Idyllic</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. HIGHLIGHT CARD */}
      <section className="py-12 px-6 w-full max-w-6xl mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="rounded-[3rem] p-12 md:p-24 text-center flex flex-col items-center gap-6 relative overflow-hidden bg-gradient-to-r from-[#6a11cb]/80 to-[#2575fc]/80"
        >
          <div className="absolute inset-0 bg-[#8c52ff] opacity-40 blur-[80px]" />
          <h2 className="text-3xl md:text-5xl font-bold relative z-10 leading-tight">Our Journey Towards<br/>Innovation and Excellence</h2>
          <p className="text-[#e2e2e2] max-w-xl relative z-10 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.
          </p>
          <button className="relative z-10 mt-6 px-10 py-3 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition-all">
            Explore
          </button>
        </motion.div>
      </section>

      {/* 4. SOLUTIONS LIST */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto w-full relative">
        <div className="absolute left-0 top-0 w-[3px] h-1/2 bg-gradient-to-b from-[#ff8a00] to-transparent hidden md:block rounded-bl-[100px]" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:pl-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl font-bold leading-snug">Advanced Materials and <br/>Integrative Solutions</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-col gap-16 mt-4">
            <motion.div variants={fadeUp} className="flex gap-8 items-start">
              <div className="flex-shrink-0 mt-1">
                <span className="text-2xl font-bold tracking-widest uppercase">Idyllic</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#e0e0e0]">High-performance materials</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et.</p>
                <button className="text-xs uppercase bg-[#ff8a00] hover:bg-[#ff9a2b] transition-colors text-black px-6 py-2 rounded-full font-bold tracking-wide">Explore</button>
              </div>
            </motion.div>
            
            <div className="h-[1px] w-full bg-[#1a1a1a]" />

            <motion.div variants={fadeUp} className="flex gap-8 items-start">
              <div className="flex-shrink-0 mt-1">
                 <Server size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#e0e0e0]">Integration Services</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et.</p>
                <button className="text-xs uppercase bg-[#ff8a00] hover:bg-[#ff9a2b] transition-colors text-black px-6 py-2 rounded-full font-bold tracking-wide">Explore</button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. BUBBLES HERO */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/soap_bubbles.png" 
          alt="Luminescence Bubbles" 
          fill 
          className="object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10" />
        
        <motion.h2 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="relative z-20 text-3xl md:text-5xl lg:text-6xl font-bold text-center max-w-4xl px-4 leading-tight shadow-black drop-shadow-2xl"
        >
          Revolutionizing luminescence to power the next generation of technology
        </motion.h2>
      </section>

      {/* 6. SCIENCE CARDS GRID */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto w-full">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <h2 className="text-3xl md:text-4xl font-bold">The Science Behind Our<br/>Innovative Solutions</h2>
          <button className="text-xs uppercase bg-[#ff8a00] hover:bg-[#ff9a2b] text-black px-6 py-2.5 rounded-full font-bold tracking-widest transition-colors">
            Explore
          </button>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <motion.div variants={fadeUp} className="bg-[#111] rounded-3xl p-10 relative overflow-hidden group h-[320px] flex flex-col justify-end">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1200ff]/20 to-[#6a11cb]/20 opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="absolute -left-12 bottom-12 w-64 h-64 bg-blue-600 rounded-full blur-[90px] opacity-30" />
            <h3 className="text-xl font-bold mb-4 z-10">Pioneering materials</h3>
            <p className="text-gray-400 text-sm z-10 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </motion.div>
          {/* Card 2 */}
          <motion.div variants={fadeUp} className="bg-[#111] rounded-3xl p-10 relative overflow-hidden group h-[320px] flex flex-col justify-end">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff0f7b]/20 to-[#f89b29]/20 opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="absolute -right-12 bottom-12 w-64 h-64 bg-[#f89b29] rounded-full blur-[90px] opacity-30" />
            <h3 className="text-xl font-bold mb-4 z-10">Advanced nanotech</h3>
            <p className="text-gray-400 text-sm z-10 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </motion.div>
          {/* Card 3 */}
          <motion.div variants={fadeUp} className="bg-[#111] rounded-3xl p-10 relative overflow-hidden group h-[320px] flex flex-col justify-end">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00b09b]/20 to-[#96c93d]/20 opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-[#00b09b] rounded-full blur-[90px] opacity-30" />
            <h3 className="text-xl font-bold mb-4 z-10">Sustainable tech</h3>
            <p className="text-gray-400 text-sm z-10 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </motion.div>
          {/* Card 4 */}
          <motion.div variants={fadeUp} className="bg-[#111] rounded-3xl p-10 relative overflow-hidden group h-[320px] flex flex-col justify-end">
            <div className="absolute inset-0 bg-gradient-to-br from-[#c94b4b]/20 to-[#4b134f]/20 opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-[#ff0f7b] rounded-full blur-[90px] opacity-30" />
            <h3 className="text-xl font-bold mb-4 z-10">Next-gen alloys</h3>
            <p className="text-gray-400 text-sm z-10 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* 7. SUSTAINABILITY */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Sustainability at the heart<br/>of innovation</h2>
          <p className="text-[#c0c0c0] mb-8 max-w-lg leading-relaxed text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="px-8 py-3 bg-white text-black font-semibold text-sm rounded-full transition-all">
            Read More
          </button>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 1 }} variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }} className="flex-1 relative h-[500px] w-full">
          <Image src="/images/glass_shape.png" alt="Sustainability Glass Shape" fill className="object-contain" />
        </motion.div>
      </section>

      {/* 8. WHAT'S NEW IN TECH */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto w-full relative">
        <div className="absolute right-0 top-0 w-[3px] h-3/4 bg-gradient-to-t from-[#ff8a00] to-transparent hidden md:block rounded-tr-[50px] rounded-br-[50px] -scale-x-100 left-0" />
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="md:pl-16">
          <h2 className="text-3xl font-bold mb-16 flex items-center justify-between">
            What's New in Tech
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <motion.div key={item} variants={fadeUp} className="bg-[#0f0f0f] rounded-2xl overflow-hidden group cursor-pointer border border-[#222] transition-colors hover:border-[#444]">
                <div className="h-44 relative overflow-hidden bg-gradient-to-br from-purple-900/40 to-black p-6 flex flex-col justify-between">
                  {/* Mock thumbnail representation, normally an image but kept abstract in design */}
                  <Image src="/images/wave_thumbnail.png" alt="Article Thumbnail" fill className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60" />
                </div>
                <div className="p-6">
                  <span className="text-xs text-gray-500 tracking-wider mb-4 block">05 Apr 2024</span>
                  <h3 className="font-bold mb-3 leading-snug text-[#e5e5e5] h-[48px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                  <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed h-[42px] mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.
                  </p>
                  <div className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors flex items-center">
                    Read More 
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 9. CTA CARDS FOOTER */}
      <section className="py-12 px-6 md:px-16 max-w-7xl mx-auto w-full mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Big Let's Talk Card */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-8 bg-[#15151a] rounded-[2rem] p-10 md:p-14 flex flex-col justify-between relative overflow-hidden group cursor-pointer border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="absolute -right-24 -top-24 w-80 h-80 bg-blue-600 rounded-full blur-[100px] opacity-20" />
            <div className="absolute -left-24 bottom-0 w-80 h-80 bg-purple-600 rounded-full blur-[100px] opacity-20" />
            
            <div className="relative z-10 flex flex-col h-full justify-between gap-12">
              <h2 className="text-4xl md:text-5xl font-bold">Have Questions?<br/>Let's Talk!</h2>
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:justify-between">
                <span className="text-gray-400  max-w-xs text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                <button className="px-8 py-3 bg-white text-black font-semibold text-sm rounded-full transition-all self-start">
                  Explore
                </button>
              </div>
            </div>
          </motion.div>
          
          {/* Stacked Right Cards */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#111116] rounded-[2rem] p-8 md:p-10 flex-1 flex items-center justify-between group cursor-pointer border border-white/5 hover:border-white/20 transition-all">
              <h3 className="text-2xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#9d4edd] group-hover:to-[#55f]">Partnerships</h3>
              <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-500 group-hover:text-white group-hover:border-white transition-all">
                <ArrowRight size={20} />
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#111116] rounded-[2rem] p-8 md:p-10 flex-1 flex items-center justify-between group cursor-pointer border border-white/5 hover:border-white/20 transition-all">
              <h3 className="text-2xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#5f5fff] group-hover:to-[#3ec]">Careers</h3>
              <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-500 group-hover:text-white group-hover:border-white transition-all">
                 <ArrowRight size={20} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
