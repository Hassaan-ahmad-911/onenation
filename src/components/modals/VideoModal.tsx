import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, CheckCircle2, ShieldCheck, Sparkles, Volume2 } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, onOpenBooking }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-3xl bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 overflow-hidden z-10 text-white"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className="font-bold text-sm text-slate-200">
                One Nation Showcase: Plumbing &amp; HVAC in Action
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video Player Mockup Container */}
          <div className="relative aspect-video w-full bg-slate-950 flex items-center justify-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
              alt="Plumbing work in progress"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent" />

            {/* Center Play Button Graphic */}
            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-full bg-cyan-500/90 text-white flex items-center justify-center shadow-xl shadow-cyan-500/40 hover:scale-110 transition-transform cursor-pointer border-4 border-white/30">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
              <span className="text-xs font-bold text-slate-300 tracking-wider uppercase">
                4K Ultra-HD Technician Walkthrough
              </span>
            </div>

            {/* Video Controls Bar */}
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-slate-300">
              <span>01:24 / 02:45</span>
              <div className="flex items-center gap-3">
                <Volume2 className="w-4 h-4 text-cyan-400" />
                <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-bold">1080p 60fps</span>
              </div>
            </div>
          </div>

          {/* Modal Bottom CTA */}
          <div className="p-6 bg-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-sm text-white">Experience One Nation Quality Today</h4>
              <p className="text-xs text-slate-400">Our certified technicians arrive fully equipped for any plumbing or HVAC task.</p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="px-6 py-2.5 rounded-xl font-bold text-xs bg-cyan-500 hover:bg-cyan-600 text-white shadow-md transition-colors cursor-pointer"
            >
              Book Service
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
