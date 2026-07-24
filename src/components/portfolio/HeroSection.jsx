import React from "react";
import { motion } from "framer-motion";
import { Code, Laptop, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden font-inter bg-[#0a0d1a]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0d1a] via-[#0f1729] to-[#0a0d1a]">
        <div className="absolute inset-0 bg-mesh opacity-10" />
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

          {/* Professional Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full"
          >
            <Code className="w-5 h-5 text-blue-400" />
            <span className="text-white text-lg font-medium">Software Developer | IT Support | Project Management</span>
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

        {/* Right Side - Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative hidden lg:block"
        >
          <div className="relative">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
            
            {/* Profile Photo Container */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative"
            >
              <div className="relative w-[400px] h-[400px] mx-auto">
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-pulse" />
                <div className="absolute inset-4 rounded-full border-2 border-purple-500/20" />
                
                {/* Photo */}
                <img
                  src="/profile-photo.jpg"
                  alt="Phunyezwa Mjoli"
                  className="relative w-full h-full object-cover rounded-full border-4 border-blue-500/50 shadow-2xl shadow-blue-500/30"
                />
                
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 }}
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-xl font-semibold"
                >
                  Available for Work 🚀
                </motion.div>
              </div>
            </motion.div>

            {/* Floating code tags */}
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -left-10 top-20 text-blue-500/20 text-7xl font-bold"
            >
              {"</>"}
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -right-10 bottom-20 text-purple-500/20 text-7xl font-bold"
            >
              {"{ }"}
            </motion.div>
          </div>
        </motion.div>
      </div>


    </section>
  );
}
