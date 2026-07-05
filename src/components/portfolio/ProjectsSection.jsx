import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Salon Booking System",
    description: "Modern salon management platform with online booking, appointment scheduling, and service management.",
    url: "https://phumeh-interview.netlify.app/",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&auto=format&fit=crop&q=60",
    icon: "💇",
    tags: ["React", "Booking System", "UI/UX"],
  },
  {
    title: "Instagram Clone",
    description: "Full-featured social media platform with photo sharing, stories, real-time messaging, and user interactions.",
    url: "https://instphum.netlify.app/",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60",
    icon: "📷",
    tags: ["React", "Firebase", "Social Media"],
  },
  {
    title: "Fraud Education System",
    description: "Full-stack fraud detection dashboard with real-time analytics, transaction monitoring, and alert management.",
    url: "https://fraudeducationsystem.netlify.app",
    image: "https://media.base44.com/images/public/69b953316c6a6f44abed30f4/2e16a7404_generated_b85dd651.png",
    icon: "🛡️",
    tags: ["React", "Firebase", "Dashboard"],
  },
  {
    title: "Netflix Clone",
    description: "Streaming platform clone with dynamic content loading, responsive layout, and rich media display.",
    url: "https://netfflixeducation.netlify.app",
    image: "https://media.base44.com/images/public/69b953316c6a6f44abed30f4/52ff413c4_generated_dac2906c.png",
    icon: "🎬",
    tags: ["React", "CSS", "API"],
  },
  {
    title: "Tesla Landing Page",
    description: "Pixel-perfect Tesla landing page with smooth scroll animations and responsive car showcase sections.",
    url: "https://phumetesla.netlify.app",
    image: "https://media.base44.com/images/public/69b953316c6a6f44abed30f4/1da6668f5_generated_d187e295.png",
    icon: "🚗",
    tags: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "YouTube Clone",
    description: "YouTube features overview app with video playback, category filtering, and responsive design.",
    url: "https://phumeyoutube.netlify.app",
    image: "https://media.base44.com/images/public/69b953316c6a6f44abed30f4/c572bab7e_generated_9f91ff25.png",
    icon: "▶️",
    tags: ["React", "API", "Responsive"],
  },
  {
    title: "Amazon Landing Page",
    description: "E-commerce landing page with user authentication, Google sign-in, and modern UI design.",
    url: "https://amazonstorres.netlify.app",
    image: "https://media.base44.com/images/public/69b953316c6a6f44abed30f4/1cbfe6ced_generated_0c1b87f1.png",
    icon: "🛒",
    tags: ["React", "Firebase", "Auth"],
  },
  {
    title: "Twitter Clone",
    description: "Social media platform clone with tweet feed, trending topics, user profiles, and real-time updates.",
    url: "https://fwwitter.netlify.app",
    image: "https://media.base44.com/images/public/69b953316c6a6f44abed30f4/8b77bc7c7_generated_ba18212a.png",
    icon: "🐦",
    tags: ["React", "CSS", "State Management"],
  },
  {
    title: "Google Keep Notes",
    description: "Note-taking application inspired by Google Keep with create, edit, and organize notes functionality.",
    url: "https://googlekeepnoteapp.netlify.app",
    image: "https://media.base44.com/images/public/69b953316c6a6f44abed30f4/3ea4a05df_generated_d124c971.png",
    icon: "📝",
    tags: ["React", "CRUD", "UI"],
  },
  {
    title: "Airbnb Clone",
    description: "Vacation rental platform with search, filtering, property listings, and booking interface.",
    url: "https://phumehbnb.netlify.app",
    image: "https://media.base44.com/images/public/69b953316c6a6f44abed30f4/7b563288d_generated_6c3abc9a.png",
    icon: "🏠",
    tags: ["React", "Responsive", "API"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 font-inter relative overflow-hidden bg-[#0a0a0f]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm tracking-widest uppercase text-violet-400 mb-3">Portfolio</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto">
            A showcase of full-stack web applications demonstrating expertise in React, Firebase, modern APIs, and responsive design principles.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}