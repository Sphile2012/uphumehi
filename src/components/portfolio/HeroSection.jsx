import React from "react";
import { motion } from "framer-motion";
import { Monitor, Zap, Code, Settings } from "lucide-react";

const PROFILE_PHOTO = "https://media.base44.com/images/public/user_6971b3bc769db4b08518a023/1acc20bfe_WhatsAppImage2026-03-01at190152.jpg";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden font-inter bg-[#0a0a0f] py-20">
      {/* Dot pattern in top left */}
      <div className="absolute top-20 left-20 grid grid-cols-6 gap-2 opacity-30">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-violet-500" />
        ))}
      </div>

      {/* Large purple glow orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3] 
        }} 
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-violet-600/40 blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4] 
        }} 
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-purple-600/40 blur-[120px] pointer-events-none" 
      />

      {/* Header Text */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 relative z-10"
      >
        <motion.h1 
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-extrabold italic">
            Modern
          </span>
          <span className="block text-white font-extrabold">
            PORTFOLIO
          </span>
          <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-extrabold">
            WEBSITE IDEAS
          </span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="inline-block border-2 border-white/30 px-6 py-2 mt-4"
        >
          <span className="text-white/80 text-sm tracking-widest">FOR 2026</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-3 mt-6 text-white/60 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-violet-500" />
            </div>
            <span>CLEAN</span>
          </div>
          <span>•</span>
          <span>MODERN</span>
          <span>•</span>
          <span>PROFESSIONAL</span>
        </motion.div>
      </motion.div>

      {/* Laptop Mockup with Portfolio Inside */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 w-full max-w-5xl px-6"
      >
        {/* Laptop Frame */}
        <div className="relative">
          {/* Screen */}
          <div className="relative bg-gradient-to-b from-gray-900 to-black rounded-t-2xl border-4 border-gray-800 shadow-2xl overflow-hidden">
            {/* Screen Content - Mini Portfolio */}
            <div className="aspect-[16/10] bg-gradient-to-br from-[#0d0d1a] via-[#141428] to-[#0d0d1a] p-8 relative overflow-hidden">
              {/* Purple glow inside laptop screen */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/30 rounded-full blur-[100px]" />
              
              {/* Navigation */}
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="text-white/80 text-xs font-semibold tracking-wider">PHUNYEZWA</div>
                <div className="flex gap-6 text-white/60 text-xs">
                  <span>HOME</span>
                  <span>ABOUT</span>
                  <span>WORK</span>
                  <span>EXPERIENCE</span>
                  <span>CONTACT</span>
                </div>
              </div>

              <div className="flex items-center gap-12 relative z-10">
                {/* Left Side - Text */}
                <div className="flex-1">
                  <div className="text-violet-400 text-xs mb-3 uppercase tracking-wider">Hello, I'm</div>
                  <h2 className="text-4xl font-bold text-white mb-2 leading-tight">
                    Phunyezwa
                    <br />
                    Mjoli.
                  </h2>
                  <p className="text-white/50 text-sm mb-6 leading-relaxed">
                    I design and build modern websites
                    <br />
                    that help brands grow.
                  </p>
                  <div className="flex gap-3">
                    <button className="px-6 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs rounded-lg font-semibold">
                      Hire Me
                    </button>
                    <button className="px-6 py-2 border border-white/20 text-white text-xs rounded-lg">
                      Let's Talk
                    </button>
                  </div>

                  {/* Featured Work Label */}
                  <div className="mt-12">
                    <div className="text-white/40 text-xs uppercase tracking-wider mb-4">✦ Featured Work</div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-gradient-to-br from-violet-600/20 to-purple-600/20 backdrop-blur border border-violet-500/20 rounded-lg p-3 aspect-[4/3] flex flex-col justify-between">
                        <div className="text-[8px] text-violet-400">Digital Agency</div>
                        <div className="h-1 w-full bg-gradient-to-r from-violet-500 to-purple-500 rounded" />
                      </div>
                      <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-3 aspect-[4/3] flex items-center justify-center">
                        <div className="text-xs text-white/60 font-bold">NATURE</div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 backdrop-blur border border-blue-500/20 rounded-lg p-3 aspect-[4/3]" />
                    </div>
                  </div>
                </div>

                {/* Right Side - Silhouette Photo with MASSIVE Purple Glow */}
                <div className="relative w-80 h-80 flex-shrink-0">
                  {/* MASSIVE Purple Glow */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 0.9, 0.6]
                    }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-br from-violet-500 via-purple-600 to-violet-500 rounded-full blur-[60px] scale-125"
                  />
                  
                  {/* Silhouette Photo */}
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <img
                      src={PROFILE_PHOTO}
                      alt="Profile"
                      className="w-full h-full object-cover"
                      style={{
                        filter: 'brightness(0.2) contrast(1.4) saturate(0)',
                      }}
                    />
                    {/* Purple overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/50 via-purple-600/40 to-transparent mix-blend-hard-light" />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Laptop Base */}
          <div className="relative h-6 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-2xl">
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-b from-transparent to-black/50 rounded-b-2xl" />
          </div>

          {/* Laptop Bottom/Stand */}
          <div className="relative">
            <div className="mx-auto w-[60%] h-3 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-lg shadow-2xl" />
            {/* Purple glow under laptop */}
            <motion.div
              animate={{ 
                opacity: [0.4, 0.7, 0.4],
                scaleX: [0.8, 1, 0.8]
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-violet-600/40 via-purple-600/30 to-transparent blur-2xl"
            />
          </div>
        </div>

        {/* Arrow pointing to laptop */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute top-1/4 -right-20 hidden xl:block"
        >
          <svg width="100" height="100" viewBox="0 0 100 100" className="text-violet-400">
            <path 
              d="M 10 30 Q 50 10, 70 50 L 60 45 M 70 50 L 65 60" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Bottom Feature Badges */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex flex-wrap items-center justify-center gap-6 mt-16 relative z-10"
      >
        <div className="flex items-center gap-3 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4">
          <Monitor className="w-6 h-6 text-violet-400" />
          <div>
            <div className="text-white text-sm font-semibold">MODERN</div>
            <div className="text-white/50 text-xs">Design</div>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4">
          <Monitor className="w-6 h-6 text-violet-400" />
          <div>
            <div className="text-white text-sm font-semibold">FULLY RESPONSIVE</div>
            <div className="text-white/50 text-xs">All Devices</div>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4">
          <Zap className="w-6 h-6 text-violet-400" />
          <div>
            <div className="text-white text-sm font-semibold">FAST & OPTIMIZED</div>
            <div className="text-white/50 text-xs">Performance</div>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4">
          <Code className="w-6 h-6 text-violet-400" />
          <div>
            <div className="text-white text-sm font-semibold">CLEAN CODE</div>
            <div className="text-white/50 text-xs">Best Practices</div>
          </div>
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-12 text-center relative z-10"
      >
        <div className="inline-block bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-1 rounded-full">
          <span className="text-white text-sm font-semibold">✨ AI MODIFIED - SAVE THIS PIN FOR LATER!</span>
        </div>
      </motion.div>

      {/* Floating Action Buttons (bottom right) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8 }}
        className="fixed bottom-8 right-8 flex flex-col gap-3 z-20"
      >
        <button className="w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-white hover:bg-white/20 transition-all">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
          </svg>
        </button>
        <button className="w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-white hover:bg-white/20 transition-all">
          <Settings className="w-6 h-6" />
        </button>
      </motion.div>
    </section>
  );
}
