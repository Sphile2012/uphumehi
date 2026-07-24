import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Project Management Learnership",
    company: "Umuzi",
    period: "Jun 2026 – Present",
    location: "Remote",
    gradient: "from-violet-500 to-purple-600",
    highlights: [
      "Support project planning and coordination activities across cross-functional teams",
      "Learn project lifecycle management, Agile methodologies, stakeholder engagement, and risk management",
      "Participate in project documentation, reporting, and team collaboration activities",
      "Develop skills in project scheduling, communication, and project delivery",
    ],
  },
  {
    title: "FICA Compliance Consultant & IT Support",
    company: "Hollywoodbets",
    period: "Jan 2023 – Jan 2026",
    location: "Umhlanga, South Africa",
    gradient: "from-cyan-500 to-blue-600",
    highlights: [
      "Enhanced customer satisfaction by 15% through timely technical assistance and support, utilizing Zendesk, Salesforce, and LiveChat",
      "Utilized troubleshooting techniques, SQL, and CRM software to enhance system efficiency and operational performance, significantly reducing downtime",
      "Spearheaded comprehensive compliance verification and documentation audits with Arbutus software, identifying critical gaps and strengthening regulatory adherence",
      "Optimized data management processes through comprehensive tracking and quality control measures, enhancing decision-making efficiency",
      "Streamlined operational processes by leveraging project management software and Lean Six Sigma techniques",
    ],
  },
  {
    title: "Teller & Customer Service Consultant",
    company: "Woolworths",
    period: "Jan 2018 – Dec 2023",
    location: "Durban, South Africa",
    gradient: "from-amber-500 to-orange-600",
    highlights: [
      "Facilitated the accurate processing of over 100 customer transactions daily utilizing Salesforce, ensuring high operational efficiency",
      "Elevated customer satisfaction and retention rates by addressing inquiries with active listening and problem-solving skills",
      "Enhanced customer loyalty by efficiently managing over 100 daily inquiries through effective interpersonal communication",
      "Transformed operational processes by applying Lean Six Sigma and Agile methodologies, resulting in streamlined workflow",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 font-inter relative overflow-hidden bg-[#0a0a0f]">
      <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="font-mono text-sm tracking-widest uppercase text-pink-400 mb-3">Journey</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Professional <span className="text-gradient">Background</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.01, y: -2 }}
              className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className={`w-1 rounded-full bg-gradient-to-b ${exp.gradient} self-stretch hidden sm:block`} style={{ minHeight: "100%" }} />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className={`text-xs font-mono px-2.5 py-1 rounded-lg bg-gradient-to-r ${exp.gradient} text-white/90`}>
                      {exp.period}
                    </span>
                    <span className="text-xs text-white/40">{exp.location}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-0.5">{exp.title}</h3>
                  <p className="text-sm text-violet-300/80 mb-4">{exp.company}</p>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-white/55">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-violet-400 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}