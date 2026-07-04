import React from "react";
import { motion } from "framer-motion";
import { Monitor, Zap, Code, Settings, ArrowRight, Sparkles, Award, Briefcase } from "lucide-react";

const PROFILE_PHOTO = "https://media.base44.com/images/public/user_6971b3bc769db4b08518a023/1acc20bfe_WhatsAppImage2026-03-01at190152.jpg";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden font-inter bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] py-20">
      {/* Animated dot grid pattern */}
      <div className="absolute top-20 left-20 grid grid-cols-8 gap-2 opacity-20">
        {[...Array(32)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-violet-500"
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 3, delay: i * 0.1, repeat: Infinity }}
          />
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

      {/* Hero Introduction */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10 max-w-5xl px-6"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 rounded-full px-5 py-2 mb-8"
        >
          <Sparkles className="w-4 h-4 text-violet-400" />
          <span className="text-violet-300 text-sm font-medium">Available for Hire</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
        >
          <span className="text-white/90">Hi, I'm </span>
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Phunyezwa Mjoli
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
        >
          <span className="text-white">Full-Stack Developer</span>
          <span className="text-violet-400"> & </span>
          <span className="text-white">IT Expert</span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-3xl mx-auto mb-10"
        >
          Transforming ideas into powerful digital solutions. Specialized in building scalable web applications with modern technologies, clean code, and exceptional user experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-violet-600/50 hover:shadow-violet-600/70 hover:scale-105 flex items-center gap-2"
          >
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300 backdrop-blur-sm"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-12"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30 flex items-center justify-center">
              <Code className="w-6 h-6 text-violet-400" />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-white">8+</div>
              <div className="text-sm text-white/50">Projects</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30 flex items-center justify-center">
              <Award className="w-6 h-6 text-violet-400" />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-white">BSc</div>
              <div className="text-sm text-white/50">Degree</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-violet-400" />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-sm text-white/50">Dedicated</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Laptop Mockup with Portfolio Preview */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 w-full max-w-6xl px-6 mb-20"
      >
        {/* Laptop Frame */}
        <div className="relative">
          {/* Screen */}
          <div className="relative bg-gradient-to-b from-gray-900 to-black rounded-t-3xl border-8 border-gray-800 shadow-2xl overflow-hidden">
            {/* Screen Content - Portfolio Preview */}
            <div className="aspect-[16/10] bg-gradient-to-br from-[#0d0d1a] via-[#1a1a2e] to-[#0d0d1a] p-8 sm:p-12 relative overflow-hidden">
              {/* Purple glow inside screen */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ repeat: Infinity, duration: 8 }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/30 rounded-full blur-[100px]" 
              />

              <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10 h-full justify-center">
                {/* Left Side - Text Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="text-violet-400 text-xs sm:text-sm mb-4 uppercase tracking-wider font-medium">
                    Welcome to my portfolio
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                    Phunyezwa
                    <br />
                    <span className="text-white/90">Mjoli</span>
                  </h2>
                  <p className="text-white/60 text-sm sm:text-base mb-8 leading-relaxed max-w-md">
                    Creating innovative digital experiences through clean code, modern design, and cutting-edge technology.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    <button className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:scale-105 transition-transform">
                      View Projects
                    </button>
                    <button className="px-6 py-3 border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-all">
                      Contact Me
                    </button>
                  </div>

                  {/* Tech Stack Preview */}
                  <div className="mt-8 hidden lg:block">
                    <div className="text-white/40 text-xs uppercase tracking-wider mb-3">Tech Stack</div>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Node.js', 'Firebase', 'Tailwind', 'TypeScript'].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side - BRIGHT Visible Photo with Glow */}
                <div className="relative flex-shrink-0">
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                    {/* MASSIVE Purple Glow Behind Photo */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.15, 1],
                        opacity: [0.6, 0.9, 0.6]
                      }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gradient-to-br from-violet-500 via-purple-600 to-pink-500 rounded-full blur-[80px] scale-125"
                    />
                    
                    {/* Photo - BRIGHT and VISIBLE */}
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-violet-500/30 shadow-2xl shadow-violet-600/50">
                      <img
                        src={PROFILE_PHOTO}
                        alt="Phunyezwa Mjoli"
                        className="w-full h-full object-cover"
                        style={{
                          filter: 'brightness(1.1) contrast(1.1) saturate(1.2)',
                        }}
                      />
                      {/* Subtle gradient overlay for aesthetics */}
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-purple-600/10" />
                    </div>

                    {/* Animated Ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                      className="absolute inset-0 rounded-full"
                      style={{ 
                        background: "conic-gradient(from 0deg, transparent 0%, rgba(139,92,246,0.5) 10%, transparent 20%, transparent 80%, rgba(139,92,246,0.5) 90%, transparent 100%)",
                      }}
                    />

                    {/* Pulsing Border */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.05, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      className="absolute inset-0 rounded-full border-2 border-violet-400/50"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Laptop Base */}
          <div className="relative h-8 bg-gradient-to-b from-gray-700 to-gray-900 rounded-b-3xl shadow-2xl">
            <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-b from-transparent to-black/50 rounded-b-3xl" />
          </div>

          {/* Laptop Stand */}
          <div className="relative">
            <div className="mx-auto w-[60%] h-4 bg-gradient-to-b from-gray-800 to-gray-950 rounded-b-xl shadow-2xl" />
            {/* Purple glow under laptop */}
            <motion.div
              animate={{ 
                opacity: [0.4, 0.7, 0.4],
                scaleX: [0.8, 1, 0.8]
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute inset-x-0 -bottom-4 h-32 bg-gradient-to-t from-violet-600/50 via-purple-600/30 to-transparent blur-3xl"
            />
          </div>
        </div>
      </motion.div>

      {/* Feature Badges */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="flex flex-wrap items-center justify-center gap-4 px-6 relative z-10"
      >
        {[
          { icon: Monitor, title: "Responsive Design", desc: "Mobile-First Approach" },
          { icon: Zap, title: "Fast Performance", desc: "Optimized Code" },
          { icon: Code, title: "Clean Code", desc: "Best Practices" },
          { icon: Settings, title: "Modern Stack", desc: "Latest Tech" },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 + i * 0.1 }}
            className="flex items-center gap-3 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4 hover:border-violet-500/30 hover:bg-white/10 transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500/20 to-purple-600/20 flex items-center justify-center border border-violet-500/30">
              <item.icon className="w-5 h-5 text-violet-400" />
            </div>
            <div>
              <div className="text-white text-sm font-semibold">{item.title}</div>
              <div className="text-white/50 text-xs">{item.desc}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
