import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, PhoneCall, Wrench, CheckCircle, ArrowRight, Settings } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../../data/plumbingData';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calendar':
        return <Calendar className="w-6 h-6 text-blue-600" />;
      case 'PhoneCall':
        return <PhoneCall className="w-6 h-6 text-cyan-600" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-indigo-600" />;
      case 'CheckCircle':
        return <CheckCircle className="w-6 h-6 text-emerald-600" />;
      default:
        return <Wrench className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Settings className="w-3.5 h-3.5 text-blue-600" />
            <span>How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Get Your Plumbing Service in{' '}
            <span className="text-blue-600">4 Easy Steps</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Simple, transparent, and hassle-free from your first contact to project completion.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="relative">
          {/* Desktop Connecting Line behind cards */}
          <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-1 bg-gradient-to-r from-blue-200 via-cyan-300 to-emerald-300 -translate-y-12 -z-0 rounded-full" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative flex flex-col items-center text-center p-6 rounded-3xl bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-cyan-400 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Step Number Top Badge */}
                <div className="w-10 h-10 rounded-full bg-white border-2 border-cyan-500 shadow-sm flex items-center justify-center font-black text-sm text-cyan-700 mb-4 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                  {step.number}
                </div>

                {/* Central Step Icon Circle */}
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-slate-100">
                  {getStepIcon(step.icon)}
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm font-semibold text-slate-700 mb-2">
                  {step.description}
                </p>

                {/* Detailed Description */}
                <p className="text-xs text-slate-500 leading-relaxed">
                  {step.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA prompt below steps */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-base text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <span>Book Your Service Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
