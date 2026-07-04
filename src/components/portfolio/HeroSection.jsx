import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";

const PROFILE_PHOTO = "https://media.base44.com/images/public/user_6971b3bc769db4b08518a023/1acc20bfe_WhatsAppImage2026-03-01at190152.jpg";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden font-inter bg-[#0a0a0f]">
      {/* Dot pattern in top left */}
      <div className="absolute top-20 left-20 grid grid-cols-6 gap-2 opacity-30">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-violet-500" />
        ))}
      </div>

      {/* Large purple glow orbs - Much bigger and more prominent */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4] 
        }} 
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-1/4 -left-40 w-[800px] h-[800px] rounded-full bg-violet-600/60 blur-[150px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5] 
        }} 
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 -right-40 w-[900px] h-[900px] rounded-full bg-purple-600/60 blur-[150px] pointer-events-none" 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex-1 text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-violet-400 text-sm font-medium tracking-wider mb-6 uppercase"
          >
            Hello, I'm
          </motion.div>

          {/* Large Name Display */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8"
          >
            <div className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-3">
              <span className="block text-white leading-none">
                Phunyezwa
              </span>
            </div>
            <div className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              <span className="block text-white/90 leading-tight">
                Mjoli.
              </span>
            </div>
          </motion.h1>

          {/* Tagline */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg text-white/60 leading-relaxed mb-4 max-w-lg"
          >
            I design and build modern websites
            <br />
            <span className="text-white/50">that help brands grow.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-4 flex-wrap mb-12"
          >
            <a 
              href="#projects"
              className="px-8 py-4 font-semibold rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:from-violet-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-violet-600/50 hover:shadow-violet-600/70 hover:scale-105"
            >
              Hire Me
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 font-semibold rounded-xl border-2 border-white/20 text-white/90 hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300"
            >
              Let's Talk
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-4"
          >
            {[
              { href: "https://github.com/Sphile2012/uphumeh", icon: Github },
              { href: "https://www.linkedin.com/in/phunyezwa-mjoli", icon: Linkedin },
              { href: "mailto:poomeigh503@gmail.com", icon: Mail },
            ].map(({ href, icon: Icon }) => (
              <a 
                key={href} 
                href={href} 
                target={href.startsWith("http") ? "_blank" : undefined} 
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-white/10 text-white/40 hover:text-violet-400 hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300 hover:scale-110"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Photo with DARK Silhouette Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="relative flex-shrink-0"
        >
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px]">
            {/* MASSIVE purple glow - Very prominent */}
            <motion.div 
              animate={{ 
                scale: [1, 1.15, 1],
                opacity: [0.6, 0.9, 0.6]
              }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-violet-600 rounded-full blur-[120px] scale-125 opacity-80" 
            />
            
            {/* Photo container with VERY DARK silhouette effect */}
            <div className="relative w-full h-full rounded-full overflow-hidden">
              {/* Photo with EXTREME darkening for silhouette */}
              <img
                src={PROFILE_PHOTO}
                alt="Phunyezwa Mjoli"
                className="w-full h-full object-cover"
                style={{
                  filter: 'brightness(0.15) contrast(1.5) saturate(0)',
                }}
              />
              {/* Strong purple gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/60 via-purple-600/50 to-violet-800/60 mix-blend-hard-light" />
              
              {/* Additional dark overlay for deeper silhouette */}
              <div className="absolute inset-0 bg-black/40" />
              
              {/* Purple glow from behind */}
              <div className="absolute inset-0 bg-gradient-to-t from-violet-600/30 via-transparent to-transparent" />
            </div>

            {/* Pulsing glow border */}
            <motion.div
              animate={{ 
                scale: [1, 1.02, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full shadow-[0_0_80px_rgba(139,92,246,0.8),inset_0_0_60px_rgba(139,92,246,0.5)]"
            />
          </div>
        </motion.div>
      </div>

      {/* "Featured Work" section teaser at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 text-center"
      >
        <div className="text-white/40 text-sm uppercase tracking-wider mb-2">✦ Featured Work</div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a 
        href="#about"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-violet-400 transition-colors"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.a>
    </section>
  );
}
