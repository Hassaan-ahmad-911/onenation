import React from 'react';
import { MessageCircle, Calculator, PhoneCall } from 'lucide-react';

interface FloatingActionButtonsProps {
  onOpenEstimator: () => void;
}

export const FloatingActionButtons: React.FC<FloatingActionButtonsProps> = ({ onOpenEstimator }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-3 pointer-events-auto">
      {/* Quick Cost Estimator Floating Pill */}
      <button
        onClick={onOpenEstimator}
        className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/90 text-white border border-cyan-400/40 shadow-xl backdrop-blur-md hover:bg-slate-900 hover:border-cyan-400 hover:scale-105 transition-all text-xs font-bold cursor-pointer"
      >
        <Calculator className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
        <span>Price Estimator</span>
        <span className="px-1.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px]">Instant</span>
      </button>

      {/* Floating WhatsApp Button with pulsating ring */}
      <div className="relative group">
        <span className="animate-ping absolute inset-0 rounded-full bg-emerald-400 opacity-60 pointer-events-none" />
        <a
          href="https://wa.me/17204994013?text=Hello%20One%20Nation!%20I%20have%20a%20plumbing%20or%20HVAC%20question."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Chat"
          className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all cursor-pointer border-2 border-white"
        >
          <MessageCircle className="w-7 h-7" />
        </a>

        {/* Hover Tooltip */}
        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          Chat with a Specialist
        </div>
      </div>
    </div>
  );
};
