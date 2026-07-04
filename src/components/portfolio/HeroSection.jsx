import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Globe, Monitor, Rocket, Layers, Code, Star } from "lucide-react";

const PROFILE_PHOTO = "https://media.base44.com/images/public/user_6971b3bc769db4b08518a023/1acc20bfe_WhatsAppImage2026-03-01at190152.jpg";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden font-inter bg-gradient-to-br from-[#0a0d2c] via-[#151736] to-[#1a1a3e]">
      {/* Animated background stars/particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Large gradient orbs */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1], 
          opacity: [0.2, 0.4, 0.2] 
        }} 
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-violet-600/30 blur-[150px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 1.3, 1], 
          opacity: [0.3, 0.5, 0.3] 
        }} 
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-purple-500/30 blur-[150px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.4, 1], 
          opacity: [0.2, 0.4, 0.2] 
        }} 
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 6 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[120px] pointer-events-none" 
      />

      {/* Floating UI Cards */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute top-20 left-10 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl w-64"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-white/90 font-semibold text-sm">Code Quality</div>
              <div className="text-white/40 text-xs">Clean & Maintainable</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-white/50 text-xs">React • TypeScript</div>
            <div className="text-white/50 text-xs">Tailwind • Firebase</div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute top-32 right-10 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl w-56"
        >
          <div className="text-white/40 text-xs mb-2">const skills = {</div>
          <div className="pl-4 space-y-1">
            <div className="text-violet-400 text-xs">frontend: <span className="text-white/60">"Expert"</span>,</div>
            <div className="text-violet-400 text-xs">backend: <span className="text-white/60">"Advanced"</span>,</div>
            <div className="text-violet-400 text-xs">design: <span className="text-white/60">"Creative"</span></div>
          </div>
          <div className="text-white/40 text-xs">}</div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-32 left-16 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-2xl"
        >
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400" />
            <div className="text-white/90 text-sm font-semibold">5+ Projects</div>
          </div>
        </motion.div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 text-left max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-violet-300 text-sm font-medium tracking-wider mb-6"
          >
            HELLO, I'M
          </motion.div>

          {/* Large heading with gradient */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6"
          >
            <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-2">
              <span className="block bg-gradient-to-r from-white via-violet-200 to-purple-300 bg-clip-text text-transparent leading-tight">
                Phunyezwa
              </span>
            </div>
            <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold">
              <span className="block text-white/90 leading-tight">
                Mjoli.
              </span>
            </div>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Full-Stack
            </span>
            <br />
            <span className="text-white/80">Web Developer</span>
          </motion.div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-base text-white/50 leading-relaxed mb-8 max-w-lg"
          >
            I transform ideas into exceptional digital experiences.
            Specialized in modern web technologies and clean code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-4 flex-wrap mb-8"
          >
            <a 
              href="#projects"
              className="px-8 py-4 font-semibold rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:from-violet-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-violet-600/50 hover:shadow-violet-600/70 hover:scale-105"
            >
              View Projects
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 font-semibold rounded-xl border-2 border-white/20 text-white/90 hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300 backdrop-blur-sm"
            >
              Let's Talk
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-3"
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
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/40 hover:text-violet-400 hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300 backdrop-blur-sm hover:scale-110"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Hexagonal Photo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="relative flex-shrink-0"
        >
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px]">
            {/* Large blue/purple glow behind */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.6, 0.4]
              }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-br from-blue-500/50 via-violet-600/50 to-purple-600/50 blur-[100px] scale-110" 
            />
            
            {/* Hexagon container */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div 
                className="relative w-[85%] h-[85%] overflow-hidden"
                style={{
                  clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                }}
              >
                {/* Photo */}
                <img
                  src={PROFILE_PHOTO}
                  alt="Phunyezwa Mjoli"
                  className="w-full h-full object-cover"
                />
                {/* Blue/purple overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-violet-600/30 to-purple-600/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d2c]/60 via-transparent to-transparent" />
              </div>

              {/* Hexagon border glow */}
              <div 
                className="absolute inset-0 flex items-center justify-center"
              >
                <div 
                  className="w-[85%] h-[85%] border-4 border-violet-500/50"
                  style={{
                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                    boxShadow: '0 0 40px rgba(139, 92, 246, 0.6), inset 0 0 40px rgba(139, 92, 246, 0.3)'
                  }}
                />
              </div>

              {/* Rotating glow ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div 
                  className="w-[90%] h-[90%]"
                  style={{
                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                    background: 'conic-gradient(from 0deg, transparent 0%, rgba(139,92,246,0.5) 10%, transparent 20%, transparent 80%, rgba(139,92,246,0.5) 90%, transparent 100%)',
                  }}
                />
              </motion.div>
            </div>
          </div>

          {/* Feature badges around photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute -bottom-4 -right-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-4 shadow-xl hidden lg:block"
          >
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-white" />
              <div className="text-white text-sm font-semibold">Multilingual Support</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.7 }}
            className="absolute -top-4 -left-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl hidden lg:block"
          >
            <div className="flex items-center gap-2">
              <Monitor className="w-5 h-5 text-violet-400" />
              <div className="text-white text-sm font-semibold">Responsive Design</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom section with features */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 right-10 space-y-3 hidden xl:block"
      >
        {[
          { icon: Rocket, text: "Easy Deployment" },
          { icon: Layers, text: "Clean Design" },
        ].map(({ icon: Icon, text }, i) => (
          <motion.div
            key={text}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2 + i * 0.2 }}
            className="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-3 pr-6"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500/20 to-purple-600/20 flex items-center justify-center border border-violet-500/30">
              <Icon className="w-5 h-5 text-violet-400" />
            </div>
            <div className="text-white/70 text-sm font-medium">{text}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a 
        href="#about"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 2.5 }}
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
