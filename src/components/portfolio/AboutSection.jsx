import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Briefcase, MapPin } from "lucide-react";

const stats = [
  { icon: GraduationCap, label: "Current Study", value: "BSc Applied Mathematics & Computer Science", sub: "University of South Africa (UNISA) • 2024-2026 (Final Semester)", color: "from-violet-500 to-purple-600" },
  { icon: Award, label: "Certificate", value: "Software Development Certification", sub: "Zaio Coding Institute • 2025-2026", color: "from-cyan-500 to-blue-600" },
  { icon: GraduationCap, label: "Completed", value: "Higher Certificate Mathematical Sciences", sub: "UNISA • NQF Level 5 • 2022", color: "from-purple-500 to-pink-600" },
  { icon: Award, label: "Certifications", value: "IT Support & Computer Hardware", sub: "Accenture, Cisco, Alison, Worth Wealthy Me", color: "from-blue-500 to-indigo-600" },
  { icon: Briefcase, label: "Current Role", value: "Project Management Learnership", sub: "Umuzi • Jun 2026 - Present", color: "from-emerald-500 to-teal-600" },
  { icon: Briefcase, label: "Experience", value: "3 Years IT & Compliance Support", sub: "Hollywoodbets • Jan 2023 - Jan 2026", color: "from-orange-500 to-amber-600" },
  { icon: MapPin, label: "Location", value: "Durban, KwaZulu-Natal, South Africa", sub: "Open to Remote & Relocation", color: "from-pink-500 to-rose-600" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 font-inter relative overflow-hidden bg-[#0a0a0f]">
      <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="font-mono text-sm tracking-widest uppercase text-violet-400 mb-3">About Me</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="text-gradient">Software Developer</span>
            <span className="text-white"> | IT Support Specialist | Project Management Professional</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }} className="space-y-5">
            {[
              "Highly motivated technology professional with hands-on experience in software development, IT support, project coordination, and compliance operations. Proficient in JavaScript, TypeScript, React, and Node.js, with a strong foundation in Applied Mathematics and Computer Science. Currently in my last semester at UNISA, while gaining real-world project management experience through the Umuzi Project Management Learnership.",
              "I build full-stack applications that are clean, performant, and built to last. I've shipped projects using React, Firebase, Node.js, JavaScript, TypeScript, HTML5, CSS3, and Tailwind CSS, with a sharp focus on user experience and code quality. My IT support background at Hollywoodbets enhanced my troubleshooting skills and technical problem-solving abilities.",
              "Proven ability to troubleshoot technical issues, manage stakeholder communication, coordinate cross-functional logistics, and build data-driven financial models. Recent project coordination work includes mapping international travel logistics and creating dual-currency budget forecasts for the Black Pen NPO Project.",
              "I thrive in fast-moving teams, pick up new tools quickly, and care deeply about writing code that solves real problems. Seeking opportunities in Software Development, IT Support, Graduate Technology Programmes, and Project Management - ready to contribute from day one.",
            ].map((text, i) => (
              <p key={i} className="text-white/60 leading-relaxed text-base">{text}</p>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div key={i} whileHover={{ y: -4, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}
                className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all group cursor-pointer">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-xs text-white/40 uppercase tracking-wider mb-1">{stat.label}</p>
                <p className="text-white font-semibold text-sm">{stat.value}</p>
                <p className="text-white/50 text-xs mt-1">{stat.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}