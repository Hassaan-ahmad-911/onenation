import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Droplets,
  RotateCw,
  CheckCircle2,
  Flame,
  Layers,
  Siren,
  Sparkles,
} from 'lucide-react';
import { QUICK_SERVICES } from '../../data/plumbingData';

interface QuickServiceMenuProps {
  onSelectService: (serviceId: string) => void;
}

export const QuickServiceMenu: React.FC<QuickServiceMenuProps> = ({ onSelectService }) => {
  // Mapping of service id to icon and image
  const serviceVisuals: Record<string, { icon: React.ReactNode; imgFallback: string }> = {
    'leak-detection': {
      icon: <Droplets className="w-7 h-7 text-cyan-500" />,
      imgFallback: '/images/icon_leak_repair.png',
    },
    'drain-cleaning': {
      icon: <RotateCw className="w-7 h-7 text-blue-500" />,
      imgFallback: '/images/icon_drain_cleaning.png',
    },
    'toilet-repair': {
      icon: <CheckCircle2 className="w-7 h-7 text-indigo-500" />,
      imgFallback: '/images/icon_toilet_repair.png',
    },
    'water-heater': {
      icon: <Flame className="w-7 h-7 text-orange-500" />,
      imgFallback: '/images/icon_water_heater.png',
    },
    'pipe-repair': {
      icon: <Layers className="w-7 h-7 text-sky-600" />,
      imgFallback: '/images/icon_pipe_installation.png',
    },
    'emergency-plumbing': {
      icon: <Siren className="w-7 h-7 text-red-500" />,
      imgFallback: '/images/icon_emergency_service.png',
    },
  };

  return (
    <div className="relative -mt-6 sm:-mt-8 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Floating Glass Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-3 sm:p-5 rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-2xl shadow-blue-900/10"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {QUICK_SERVICES.map((item, index) => {
            const visual = serviceVisuals[item.id];
            const isEmergency = item.id === 'emergency-plumbing';

            return (
              <motion.button
                key={item.id}
                onClick={() => onSelectService(item.id)}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.97 }}
                className={`group relative flex flex-col items-center text-center p-4 rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden border ${
                  isEmergency
                    ? 'bg-gradient-to-b from-rose-50/70 to-red-50/40 border-red-200/70 hover:border-red-400 hover:shadow-lg hover:shadow-red-500/15'
                    : 'bg-slate-50/70 hover:bg-white border-slate-200/70 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/15'
                }`}
              >
                {/* Emergency Tag Badge */}
                {item.badge && (
                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-red-600 text-white shadow-xs animate-pulse">
                    {item.badge}
                  </span>
                )}

                {/* 3D Visual Icon Container */}
                <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-white shadow-sm flex items-center justify-center p-2 mb-3 group-hover:scale-110 transition-transform duration-300 border border-slate-100">
                  {/* Subtle 3D background gradient disk */}
                  <div className="absolute inset-1 rounded-xl bg-gradient-to-br from-slate-50 to-blue-50/50 -z-10" />

                  {/* Icon Image with SVG fallback */}
                  <img
                    src={visual.imgFallback}
                    alt={item.name}
                    className="w-12 h-12 object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {visual.icon}
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                  {item.name}
                </h3>

                {/* Short Subtext / Count */}
                <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                  {item.desc}
                </p>

                {/* Hover Indicator Arrow */}
                <div className="mt-2 flex items-center gap-1 text-[11px] font-bold text-cyan-600 opacity-0 group-hover:opacity-100 transition-all transform translate-y-1 group-hover:translate-y-0">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Bottom Active Glow Accent Bar */}
                <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
