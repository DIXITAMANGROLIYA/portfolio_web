'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function ContactSection() {
  const { personalInfo } = portfolioData;
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="scroll-mt-24">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
          <Mail className="w-3.5 h-3.5" />
          <span>Get In Touch</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Let's Work Together</h2>
        <p className="text-slate-400 text-base">
          Have a project in mind or open mobile application engineering role? Drop a message!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info Side */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-4"
        >
          {/* Email Card */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-4 bg-slate-900/80 border border-slate-800 hover:border-indigo-500/60 p-5 rounded-2xl transition-all hover:scale-[1.02] group"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-400">Email Address</p>
              <p className="text-sm sm:text-base font-semibold text-white group-hover:text-indigo-300">
                {personalInfo.email}
              </p>
            </div>
          </a>

          {/* Location Card */}
          <div className="flex items-center gap-4 bg-slate-900/80 border border-slate-800 p-5 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-400">Location</p>
              <p className="text-sm sm:text-base font-semibold text-white">{personalInfo.location}</p>
            </div>
          </div>

          {/* LinkedIn Card */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 bg-slate-900/80 border border-slate-800 hover:border-indigo-500/60 p-5 rounded-2xl transition-all hover:scale-[1.02] group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-400">LinkedIn Profile</p>
              <p className="text-sm sm:text-base font-semibold text-white group-hover:text-indigo-300">
                linkedin.com/in/dixitamangroliya12
              </p>
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 bg-slate-900/80 border border-slate-800 hover:border-indigo-500/60 p-5 rounded-2xl transition-all hover:scale-[1.02] group"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-800 text-slate-200 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-400">GitHub Profile</p>
              <p className="text-sm sm:text-base font-semibold text-white group-hover:text-indigo-300">
                github.com/DIXITAMANGROLIYA
              </p>
            </div>
          </a>
        </motion.div>

        {/* Form Side */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl"
        >
          {formSubmitted ? (
            <div className="py-12 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
              <h3 className="text-2xl font-bold text-white">Thank You!</h3>
              <p className="text-slate-400 text-sm">
                Your message has been sent successfully. I'll get back to you soon!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 text-white text-sm focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 text-white text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your app project or job opportunity..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 text-white text-sm focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 hover:scale-[1.01] transition-all"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
