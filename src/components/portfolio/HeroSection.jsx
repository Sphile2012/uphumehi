import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Database, Shield, Globe, Code2 } from "lucide-react";

const PROFILE_PHOTO = "https://media.base44.com/images/public/user_6971b3bc769db4b08518a023/1acc20bfe_WhatsAppImage2026-03-01at190152.jpg";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden font-inter bg-gradient-to-br from-[#0a1628] via-[#0d1b35] to-[#1a2642]">
      {/* Animated background with subtle grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Large gradient orbs */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1], 
          opacity: [0.15, 0.3, 0.15] 
        }} 
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-cyan-500/30 blur-[150px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          x: [0, -30, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1], 
          opacity: [0.2, 0.35, 0.2] 
        }} 
        transition={{ repeat: Infinity, duration: 25, ease: "easeInOut", delay: 5 }}
        className="absolute bottom-0 left-1/4 w-[700px] h-[700px] rounded-full bg-blue-600/30 blur-[150px] pointer-events-none" 
      />

      {/* Floating Cards - Top Left */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute top-20 left-10 hidden xl:block"
      >
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-2xl border border-cyan-400/30 rounded-3xl p-8 shadow-2xl w-80"
        >
          <div className="text-cyan-300 text-sm font-medium mb-3 uppercase tracking-wider">About Me</div>
          <h3 className="text-white text-2xl font-bold mb-4">BACKEND DEVELOPER</h3>
          <p className="text-white/60 text-sm leading-relaxed">
            Full-stack & backend developer passionate about creating reliable and scalable systems. I specialize in building efficient server applications.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-2.5 bg-cyan-500 text-white rounded-lg font-semibold text-sm hover:bg-cyan-600 transition-colors"
          >
            Download CV
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Floating Cards - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="absolute bottom-32 left-16 hidden xl:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0], rotate: [0, -1, 0] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
          className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 backdrop-blur-2xl border border-blue-400/20 rounded-2xl p-6 shadow-2xl w-72"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-white font-bold text-lg">45+</div>
              <div className="text-white/50 text-xs">GITHUB PROJECTS</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Cards - Top Right */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute top-24 right-16 hidden xl:block"
      >
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -2, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-2xl border border-cyan-400/20 rounded-2xl p-6 shadow-2xl w-80"
        >
          <div className="text-cyan-300 text-xs font-semibold mb-3 uppercase tracking-wider">Secure Apps</div>
          <p className="text-white/70 text-sm leading-relaxed mb-4">
            Developed & deployed multiple full-stack web applications using JWT-based authentication and secure API endpoints.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-5 py-2 border-2 border-cyan-400/50 text-cyan-300 rounded-lg text-sm font-medium hover:bg-cyan-400/10 transition-all"
          >
            View work →
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Floating Cards - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 1 }}
        className="absolute bottom-20 right-20 hidden xl:block space-y-4"
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          className="bg-gradient-to-br from-blue-800/30 to-cyan-800/30 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-5 shadow-xl w-64"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-600/30 flex items-center justify-center border border-cyan-400/30">
              <Database className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <div className="text-white font-semibold">Database</div>
              <div className="text-white/50 text-xs">Firebase & MongoDB</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
          className="bg-gradient-to-br from-blue-800/30 to-cyan-800/30 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-5 shadow-xl w-64"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-600/30 flex items-center justify-center border border-cyan-400/30">
              <Shield className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <div className="text-white font-semibold">Security</div>
              <div className="text-white/50 text-xs">Authentication & Auth</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 2 }}
          className="bg-gradient-to-br from-blue-800/30 to-cyan-800/30 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-5 shadow-xl w-64"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-600/30 flex items-center justify-center border border-cyan-400/30">
              <Globe className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <div className="text-white font-semibold">Github</div>
              <div className="text-white/50 text-xs">Version Control</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Main Content Center */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 text-left max-w-xl"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cyan-400 text-sm font-semibold tracking-widest mb-4 uppercase"
          >
            Hi, I'm Phunyezwa
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6"
          >
            <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-2 leading-tight">
              <span className="block text-white">
                BACKEND
              </span>
              <span className="block text-white">
                DEVELOPER
              </span>
            </div>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-base text-white/60 leading-relaxed mb-8"
          >
            I build scalable backend systems, APIs, and data-driven solutions that power modern applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-4 flex-wrap"
          >
            <a 
              href="#contact"
              className="px-8 py-4 font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105"
            >
              Contact Me
            </a>
            <a 
              href="#projects"
              className="px-8 py-4 font-semibold rounded-xl border-2 border-cyan-400/40 text-cyan-300 hover:border-cyan-400/70 hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-sm"
            >
              My Work
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-3 mt-10"
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
                className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 hover:text-cyan-200 hover:border-cyan-400/50 hover:bg-cyan-500/20 transition-all duration-300 backdrop-blur-sm hover:scale-110"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Circular Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="relative flex-shrink-0"
        >
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]">
            {/* Large cyan/blue glow behind */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 via-blue-600/40 to-cyan-500/40 rounded-full blur-[80px] scale-110" 
            />
            
            {/* Photo container with circular border */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-400/40 shadow-2xl shadow-cyan-500/30">
              <img
                src={PROFILE_PHOTO}
                alt="Phunyezwa Mjoli"
                className="w-full h-full object-cover"
              />
              {/* Subtle cyan overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-600/10" />
            </div>

            {/* Rotating ring effect */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{ 
                background: "conic-gradient(from 0deg, transparent 0%, rgba(34, 211, 238, 0.4) 10%, transparent 20%, transparent 80%, rgba(34, 211, 238, 0.4) 90%, transparent 100%)",
              }}
            />

            {/* Pulse effect */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a 
        href="#about"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-300/50 hover:text-cyan-400 transition-colors"
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
