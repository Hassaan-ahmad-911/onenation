import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Eye, Wrench, Award, CheckCircle2, Users, HeartHandshake } from 'lucide-react';
import { STATS_DATA } from '../../data/plumbingData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase with Master Plumbers & Tools */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-lg">
              {/* Back Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 via-blue-500/10 to-indigo-500/15 rounded-3xl blur-2xl transform -rotate-2" />

              {/* Main Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-100 shadow-2xl bg-slate-900 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1000&q=80"
                  alt="AquaFix Master Certified Plumber at Work"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                    Licensed Master Technicians
                  </div>
                  <div className="text-base font-bold">
                    Over 5 Years of Precision Plumbing Excellence
                  </div>
                </div>
              </div>

              {/* Overlapping Mini Floating Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xl flex items-center gap-3 max-w-xs">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-500/30">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Our Promise
                  </div>
                  <div className="text-sm font-extrabold text-slate-900 leading-tight">
                    100% Guaranteed Workmanship
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Company Story, Mission, Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>About One Nation Plumbing, Heating &amp; Air</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Your Trusted{' '}
              <span className="text-blue-600">Plumbing &amp; HVAC Experts</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Proudly serving Denver, Aurora, and the greater Colorado Front Range, One Nation Plumbing, Heating, and Air is built on honest pricing, certified master craftsmanship, and prompt, dependable customer care.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-2.5">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Our Mission</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  To provide rapid, durable, and transparent plumbing solutions that safeguard homes and empower communities.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-9 h-9 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-2.5">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Our Vision</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Setting the modern benchmark in clean water systems, smart leak detection, and 24/7 customer satisfaction.
                </p>
              </div>
            </div>

            {/* Core Values checklist */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              {[
                'Fully licensed, background-checked master plumbers',
                'Advanced thermal leak cameras and hydro-jetting machinery',
                'Upfront, transparent pricing with no hidden charges',
                'Clean work promise: shoe covers and spotless cleanup',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
