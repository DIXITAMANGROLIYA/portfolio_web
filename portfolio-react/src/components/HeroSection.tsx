'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, MapPin, Smartphone } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function HeroSection() {
  const { personalInfo } = portfolioData;

  return (
    <section id="home" className="pt-8 sm:pt-16 pb-12 flex flex-col justify-center min-h-[85vh]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6 text-center lg:text-left"
        >
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-300 text-xs sm:text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
            <span>2.5+ Years Exp | Open to Mobile Developer Roles</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 flex items-center justify-center lg:justify-start gap-2">
              <Smartphone className="w-6 h-6 text-indigo-400 hidden sm:inline" />
              <span>{personalInfo.title}</span>
            </h2>
          </div>

          {/* Tech Tag Pills */}
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Specialized in crafting high-performance, cross-platform mobile apps with{' '}
            <strong className="text-slate-200">Flutter & BLoC</strong> architecture, alongside native{' '}
            <strong className="text-slate-200">Android (Kotlin)</strong>, Firebase, REST APIs, and WebSocket integration.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
            {['Flutter', 'Dart', 'BLoC', 'Kotlin', 'Firebase', 'REST APIs', 'WebSockets'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md bg-slate-800/80 text-slate-300 text-xs font-mono border border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-indigo-600/30 hover:scale-[1.02] transition-all"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm sm:text-base border border-slate-800 hover:border-slate-700 transition-all"
            >
              <span>View Projects</span>
            </a>
          </div>

          {/* Social Links & Location */}
          <div className="flex items-center justify-center lg:justify-start gap-6 pt-2 text-slate-400 text-sm">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-indigo-400" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 hover:text-purple-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Avatar Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative group">
            {/* Glowing Backdrop Circle */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-xl opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse-slow" />

            {/* Profile Frame */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden bg-slate-900 border-2 border-indigo-500/40 p-2 shadow-2xl">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold">
                📱
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Flutter & Android</p>
                <p className="text-[11px] text-slate-400">Production Ready Apps</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
