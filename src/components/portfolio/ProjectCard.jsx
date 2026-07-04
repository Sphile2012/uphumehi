import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -6 }}
      className="group block glass rounded-2xl overflow-hidden border border-white/10 hover:border-violet-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/10"
    >
      {/* Screenshot */}
      <div className="relative overflow-hidden aspect-video bg-white/5">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a1e]/90 via-[#0d0a1e]/20 to-transparent" />
        <div className="absolute top-3 right-3 p-2 glass rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/20">
          <ArrowUpRight className="w-4 h-4 text-violet-300" />
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="text-2xl">{project.icon}</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-semibold text-white group-hover:text-violet-300 transition-colors mb-1.5">
          {project.title}
        </h3>
        <p className="text-sm text-white/50 leading-relaxed mb-3 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag}
              className="text-xs px-2.5 py-1 bg-violet-500/10 border border-violet-500/20 rounded-lg text-violet-300/80 font-mono">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}