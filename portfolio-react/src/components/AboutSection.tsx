'use client';

import { motion } from 'framer-motion';
import { Briefcase, Sparkles, UserCheck } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function AboutSection() {
  const { personalInfo, stats } = portfolioData;

  return (
    <section id="about" className="scroll-mt-24">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
          <UserCheck className="w-3.5 h-3.5" />
          <span>About Me</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Passionate Mobile Developer Building Scalable Apps
        </h2>
        <p className="text-slate-400 text-base">
          Delivering high-performing mobile experiences with clean code and modern state management.
        </p>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Bio Text Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 bg-slate-900/60 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl"
        >
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            <span>Professional Summary</span>
          </h3>
          <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              I am a Mobile Application Developer with <strong>2.5+ years of experience</strong> building production-ready mobile applications using <strong>Flutter</strong> and native <strong>Android (Kotlin)</strong>.
            </p>
            <p>
              My expertise centers around <strong>BLoC & GetX</strong> for scalable state management, RESTful API integrations, <strong>Firebase services</strong> (Authentication, Firestore), WebSockets for real-time messaging, and multi-flavor app architecture.
            </p>
            <p>
              I am experienced in agile collaboration, using Git, GitHub, Postman, and Jira. I focus on writing clean, maintainable, and performance-driven code to solve real-world problems.
            </p>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 grid grid-cols-2 gap-4"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-5 text-center space-y-1 transition-all hover:scale-105"
            >
              <p className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-medium text-slate-400">{stat.label}</p>
            </div>
          ))}

          {/* Quick Highlight Box */}
          <div className="col-span-2 bg-gradient-to-r from-indigo-950/60 to-purple-950/60 border border-indigo-800/50 rounded-2xl p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600/30 text-indigo-400 flex items-center justify-center shrink-0">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Production Projects</p>
              <p className="text-xs text-slate-400">FormulaP, MotoLap, ClimaPal, GoSomeplace</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
