'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, MapPin } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function ExperienceSection() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="scroll-mt-24">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Work History</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Professional Experience</h2>
        <p className="text-slate-400 text-base">
          Hands-on career journey in software companies and production app development.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-indigo-900/60 ml-4 sm:ml-8 lg:ml-12 space-y-10 pl-6 sm:pl-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group"
          >
            {/* Timeline Dot Icon */}
            <div
              className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 ${
                exp.isCurrent
                  ? 'bg-indigo-600 border-indigo-400 shadow-lg shadow-indigo-600/50 animate-pulse'
                  : 'bg-slate-900 border-slate-700 text-slate-400'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
            </div>

            {/* Experience Card */}
            <div className="bg-slate-900/70 border border-slate-800 hover:border-indigo-500/40 rounded-2xl p-6 space-y-4 shadow-xl transition-all">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {exp.position}
                  </h3>
                  <p className="text-base font-semibold text-indigo-400">{exp.company}</p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities list */}
              <ul className="space-y-2.5 pt-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
