import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, CheckCircle2, Clock, Siren, Droplets, ShieldAlert } from 'lucide-react';

export const EmergencyBanner: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-950 relative overflow-hidden text-white">
      {/* Dynamic Animated Water Light & Radial Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-cyan-600/25 via-blue-600/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-blue-700/20 via-sky-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Industrial pipe background graphic overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border border-cyan-500/30 p-8 sm:p-12 lg:p-14 shadow-2xl shadow-cyan-950/50 relative overflow-hidden">
          {/* Subtle water caustic wave */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/15 border border-red-500/40 text-red-400 text-xs font-bold uppercase tracking-wider">
                <Siren className="w-3.5 h-3.5 text-red-400 animate-bounce" />
                <span>24/7 Rapid Emergency Dispatch</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Plumbing Emergency?{' '}
                <span className="bg-gradient-to-r from-cyan-300 to-sky-400 bg-clip-text text-transparent">
                  We're Ready to Help!
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Burst pipe? Major leak? Blocked drain? Don't wait for water damage to destroy your floors. Our emergency master plumbers are on standby with 30-minute arrival guaranteed.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="tel:7204994013"
                  className="group inline-flex items-center gap-3 px-7 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-102 transition-all cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <span>Call Now: 720-499-4013</span>
                </a>

                <a
                  href="https://wa.me/17204994013?text=EMERGENCY%20PLUMBING%20OR%20HVAC%20ASSISTANCE%20NEEDED"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-7 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:scale-102 transition-all cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <span>WhatsApp / Text Dispatch</span>
                </a>
              </div>

              {/* Checklist Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800 text-xs font-semibold text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Quick Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Skilled Technicians</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Fully Equipped</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Anytime, Anywhere</span>
                </div>
              </div>
            </div>

            {/* Right Side: 24/7 Available Neon Glowing Badge & Metallic Pipe Illustration */}
            <div className="lg:col-span-4 flex items-center justify-center relative">
              {/* Outer pulsing neon ring */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full flex items-center justify-center">
                {/* Glowing Aura */}
                <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-2xl animate-pulse" />
                <div className="absolute inset-2 rounded-full border-2 border-dashed border-cyan-400/40 animate-spin [animation-duration:20s]" />
                
                {/* Metallic Badge Core */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 border-4 border-cyan-400/80 shadow-[0_0_40px_rgba(34,211,238,0.35)] flex flex-col items-center justify-center text-center p-4">
                  <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center mb-1.5 shadow-md animate-pulse">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-wider">
                    24/7
                  </div>
                  <div className="text-xs sm:text-sm font-black text-cyan-400 tracking-widest uppercase mt-0.5">
                    AVAILABLE
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1 uppercase font-semibold">
                    Always On Duty
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
