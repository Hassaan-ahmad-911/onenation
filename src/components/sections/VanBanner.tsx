import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Clock, ShieldCheck, Zap } from 'lucide-react';

export const VanBanner: React.FC = () => {
  return (
    <section className="py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 overflow-hidden p-8 sm:p-10 lg:p-12 text-white shadow-xl border border-cyan-500/20">
          {/* Subtle water caustics */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Ready for Dispatch
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                Need a Plumber Today?
              </h2>
              <p className="text-slate-300 text-base sm:text-lg max-w-xl">
                We're just a call away. Fast response, professional service, and fully equipped mobile workshops stocked with over 500 plumbing parts.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="tel:7204994013"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-base text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg shadow-orange-500/30 hover:scale-102 transition-all cursor-pointer"
                >
                  <Phone className="w-5 h-5 text-white" />
                  <span>Call 720-499-4013</span>
                </a>

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Avg arrival: under 30 minutes in Denver &amp; Aurora</span>
                </div>
              </div>
            </div>

            {/* Right Side: Plumber & Branded Van Visual */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-slate-800/50 p-2 border border-white/10 backdrop-blur-sm">
                <img
                  src="/images/van_banner.png"
                  alt="One Nation Service Vehicle and Technician"
                  className="w-full h-auto object-contain rounded-xl"
                  onError={(e) => {
                    // Fallback to high-res plumber van photo
                    (e.currentTarget as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=600&q=80';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
