import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Software Development",
    gradient: "from-violet-500 to-purple-600",
    skills: [
      { name: "JavaScript", level: 85, icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "React", level: 85, icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Node.js", level: 75, icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "HTML5 & CSS3", level: 90, icon: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "Tailwind CSS", level: 80, icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "Firebase", level: 80, icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
    ],
  },
  {
    title: "IT Support & Tools",
    gradient: "from-cyan-500 to-blue-600",
    skills: [
      { name: "Technical Troubleshooting", level: 85, icon: "https://cdn.simpleicons.org/codementor/000000" },
      { name: "Zendesk", level: 80, icon: "https://cdn.simpleicons.org/zendesk/03363D" },
      { name: "Salesforce", level: 80, icon: "https://cdn.simpleicons.org/salesforce/00A1E0" },
      { name: "System Optimization", level: 80, icon: "https://cdn.simpleicons.org/microsoft/00A4EF" },
      { name: "Customer Support", level: 85, icon: "https://cdn.simpleicons.org/helpscout/1292EE" },
    ],
  },
  {
    title: "Project Management",
    gradient: "from-pink-500 to-rose-600",
    skills: [
      { name: "Project Planning", level: 75, icon: "https://cdn.simpleicons.org/trello/0052CC" },
      { name: "Agile & Scrum", level: 75, icon: "https://cdn.simpleicons.org/jira/0052CC" },
      { name: "Stakeholder Communication", level: 85, icon: "https://cdn.simpleicons.org/slack/4A154B" },
      { name: "Risk Management", level: 70, icon: "https://cdn.simpleicons.org/asana/F06A6A" },
      { name: "Budget Analysis", level: 75, icon: "https://cdn.simpleicons.org/microsoftexcel/217346" },
    ],
  },
  {
    title: "Development & Core Skills",
    gradient: "from-emerald-500 to-teal-600",
    skills: [
      { name: "REST APIs", level: 75, icon: "https://cdn.simpleicons.org/fastapi/009688" },
      { name: "Git & GitHub", level: 85, icon: "https://cdn.simpleicons.org/git/F05032" },
      { name: "Problem Solving", level: 90, icon: "https://cdn.simpleicons.org/leetcode/FFA116" },
      { name: "Communication", level: 90, icon: "https://cdn.simpleicons.org/googlemeet/00897B" },
      { name: "Teamwork", level: 90, icon: "https://cdn.simpleicons.org/googlegroups/4285F4" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 font-inter relative overflow-hidden bg-[#0a0a0f]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="font-mono text-sm tracking-widest uppercase text-cyan-400 mb-3">Skills</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">What I <span className="text-gradient">Build With</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div key={cat.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${cat.gradient}`} />
                <h3 className="text-base font-semibold text-white">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5 items-center gap-2">
                      <div className="flex items-center gap-2">
                        <img src={skill.icon} alt={skill.name} className="w-5 h-5 skill-icon" />
                        <span className="text-sm text-white/60">{skill.name}</span>
                      </div>
                      <span className="text-xs font-mono text-white/40">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${cat.gradient} shadow-sm`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}