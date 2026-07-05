import React from "react";
import { motion } from "framer-motion";
import { Code, Laptop, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden font-inter bg-[#0a0d1a]">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=1080&fit=crop&q=80"
          alt="Workspace"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0d1a]/95 via-[#0a0d1a]/80 to-[#0a0d1a]/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Hi, I'm */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-4xl sm:text-5xl font-bold text-blue-400 font-['Brush_Script_MT',cursive] italic">Hi</span>
            <br />
            <span className="text-3xl sm:text-4xl text-white font-light">I'm</span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold leading-none">
              <span className="block text-white">Phunyezwa</span>
              <span className="block text-blue-500 border-b-4 border-blue-500 inline-block pb-2">Mjoli</span>
            </h1>
          </motion.div>

          {/* Software Engineer Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full"
          >
            <Code className="w-5 h-5 text-blue-400" />
            <span className="text-white text-lg font-medium">Full-Stack Developer</span>
            <Laptop className="w-5 h-5 text-blue-400" />
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="space-y-2"
          >
            <p className="text-2xl sm:text-3xl text-white font-light">
              I make web development
            </p>
            <p className="text-3xl sm:text-4xl font-bold">
              <span className="text-blue-400 border-b-2 border-blue-400">simple</span>
              <span className="text-white">.</span>
            </p>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-3 text-blue-400"
          >
            <ArrowRight className="w-5 h-5 animate-pulse" />
            <p className="text-lg">
              Follow for real projects
              <br />
              <span className="text-white/80">& easy coding 🚀</span>
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105 flex items-center gap-2"
            >
              View Projects
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-white/20 hover:border-blue-500/50 hover:bg-blue-500/10 text-white font-semibold rounded-xl transition-all"
            >
              Contact Me
            </a>
          </motion.div>

          {/* AI Modified Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="inline-block"
          >
            <div className="px-6 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
              <span className="text-white/60 text-sm">✨ Modern Portfolio</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Workspace Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative hidden lg:block"
        >
          {/* Decorative Elements */}
          <div className="relative">
            {/* Code snippet overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="absolute -right-10 top-20 bg-[#1e1e1e]/90 backdrop-blur-xl border border-blue-500/30 rounded-xl p-6 shadow-2xl"
            >
              <div className="space-y-2 font-mono text-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-blue-400">✓ Plan</div>
                <div className="text-green-400">✓ Code</div>
                <div className="text-yellow-400">✓ Test</div>
                <div className="text-purple-400">✓ Launch</div>
                <div className="text-white/60 flex items-center gap-2 mt-3">
                  <span>💙</span>
                </div>
              </div>
            </motion.div>

            {/* Floating code tags */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute left-10 bottom-10 text-blue-500/30 text-9xl font-bold"
            >
              {"</>"}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating action buttons (bottom right) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8 }}
        className="fixed bottom-8 right-8 flex flex-col gap-3 z-20"
      >
        <button className="w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
          </svg>
        </button>
        <button className="w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </button>
      </motion.div>
    </section>
  );
}
