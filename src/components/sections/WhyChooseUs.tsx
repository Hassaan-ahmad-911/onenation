import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  UserCheck,
  Zap,
  Receipt,
  ShieldCheck,
  ArrowRight,
  Play,
  Award,
  Users,
  Clock,
  CheckCircle,
} from 'lucide-react';
import { STATS_DATA, WHY_CHOOSE_FEATURES } from '../../data/plumbingData';

interface WhyChooseUsProps {
  onOpenVideoModal: () => void;
  onOpenBooking: () => void;
}

// Animated Counter Component
const CounterItem: React.FC<{ target: string; label: string; subtext: string; icon: React.ReactNode }> = ({
  target,
  label,
  subtext,
  icon,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric portion
    const num = parseInt(target.replace(/\D/g, ''), 10);
    const suffix = target.replace(/[0-9]/g, '');

    if (isNaN(num)) {
      setDisplayValue(target);
      return;
    }

    let start = 0;
    const duration = 2000;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = Math.ceil(num / steps);

    const timer = setInterval(() => {
      start += increment;
      if (start >= num) {
        setDisplayValue(`${num}${suffix}`);
        clearInterval(timer);
      } else {
        setDisplayValue(`${start}${suffix}`);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="flex items-center gap-4 p-5 rounded-2xl bg-white/80 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-500/20">
        {icon}
      </div>
      <div>
        <div className="text-3xl font-black text-slate-900 tracking-tight">
          {displayValue}
        </div>
        <div className="text-sm font-bold text-slate-700 leading-tight">
          {label}
        </div>
        <div className="text-xs text-slate-500 mt-0.5">
          {subtext}
        </div>
      </div>
    </div>
  );
};

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  onOpenVideoModal,
  onOpenBooking,
}) => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-blue-600" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-cyan-600" />;
      case 'Receipt':
        return <Receipt className="w-6 h-6 text-emerald-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-amber-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-blue-600" />;
    }
  };

  const statIcons = [
    <Award className="w-6 h-6" key="1" />,
    <Users className="w-6 h-6" key="2" />,
    <Clock className="w-6 h-6" key="3" />,
    <CheckCircle className="w-6 h-6" key="4" />,
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Top Header & 4 Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Intro */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>Why Choose One Nation?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Your Trusted{' '}
              <span className="text-blue-600">Plumbing Partner</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We combine experience, quality workmanship and excellent customer service to deliver dependable plumbing solutions for households and commercial facilities.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenVideoModal}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-bold text-sm text-slate-700 hover:text-blue-600 hover:bg-white transition-all cursor-pointer"
              >
                <div className="w-7 h-7 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch Story</span>
              </button>
            </div>
          </motion.div>

          {/* Right 4 Feature Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {WHY_CHOOSE_FEATURES.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {getFeatureIcon(feature.icon)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modern Plumbing Showcase Video / Picture Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl mb-16"
        >
          <div className="relative h-64 sm:h-80 w-full bg-slate-900">
            {/* High quality bathroom photo */}
            <img
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=80"
              alt="Modern Plumbing for Modern Homes - Luxury Bathroom"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/50 to-transparent" />

            {/* Banner Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 max-w-xl text-white">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">
                Craftsmanship & Innovation
              </span>
              <h3 className="text-2xl sm:text-3xl font-black leading-tight text-white mb-2">
                Modern Plumbing for Modern Homes
              </h3>
              <p className="text-sm sm:text-base text-slate-200 mb-6">
                Clean, efficient and long-lasting plumbing installations that protect your sanctuary.
              </p>
              <div>
                <button
                  onClick={onOpenVideoModal}
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-full font-bold text-sm bg-white/20 hover:bg-white text-white hover:text-slate-900 backdrop-blur-md border border-white/40 shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                  <span>Watch Our Work (2:15)</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Counter Stats Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS_DATA.map((stat, i) => (
            <CounterItem
              key={i}
              target={stat.value}
              label={stat.label}
              subtext={stat.subtext}
              icon={statIcons[i]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
