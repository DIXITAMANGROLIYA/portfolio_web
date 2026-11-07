'use client';

import { motion } from 'framer-motion';
import { Cpu, Layers, Server, Wrench } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  'Mobile & Frameworks': <Cpu className="w-5 h-5 text-indigo-400" />,
  'State & Architecture': <Layers className="w-5 h-5 text-purple-400" />,
  'Backend & Cloud Services': <Server className="w-5 h-5 text-blue-400" />,
  'Tools & Workflow': <Wrench className="w-5 h-5 text-emerald-400" />,
};

export default function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="scroll-mt-24">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
          <Cpu className="w-3.5 h-3.5" />
          <span>Technical Expertise</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Skills & Technologies</h2>
        <p className="text-slate-400 text-base">
          Proven tech stack and libraries I use to build robust mobile applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-slate-900/70 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 space-y-4 shadow-lg transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                {iconMap[group.category] || <Cpu className="w-5 h-5 text-indigo-400" />}
              </div>
              <h3 className="text-lg font-bold text-white">{group.category}</h3>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-1">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-800/90 text-slate-200 text-xs sm:text-sm font-medium border border-slate-700/50 hover:bg-indigo-600/20 hover:border-indigo-500/60 hover:text-white transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
