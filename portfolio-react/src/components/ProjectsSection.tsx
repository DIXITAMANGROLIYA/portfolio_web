'use client';

import { motion } from 'framer-motion';
import { FolderGit2, Sparkles, Star } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="scroll-mt-24">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Featured Work</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Production & Client Projects</h2>
        <p className="text-slate-400 text-base">
          Highlights of mobile applications built for real-world clients and end users.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-6 flex flex-col justify-between shadow-xl transition-all hover:-translate-y-1.5 group"
          >
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="p-3 rounded-xl bg-indigo-950/80 border border-indigo-800/60 text-indigo-400 group-hover:scale-110 transition-transform">
                  <FolderGit2 className="w-6 h-6" />
                </div>
                {project.highlight && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-300 bg-amber-950/70 border border-amber-800/60 px-2.5 py-1 rounded-full">
                    <Star className="w-3 h-3 fill-amber-300" />
                    <span>Featured</span>
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-indigo-400 mt-1">{project.subtitle}</p>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-mono border border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Bullet Descriptions */}
              <ul className="space-y-2 pt-2 text-slate-300 text-xs sm:text-sm leading-relaxed">
                {project.description.map((desc, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Highlight Note */}
            {project.highlight && (
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400 font-medium">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{project.highlight}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
