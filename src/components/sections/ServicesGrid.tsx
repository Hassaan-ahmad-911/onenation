import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Droplet,
  Wrench,
  Sparkles,
  Activity,
  Layers,
  Flame,
  ShowerHead,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock,
  ChevronRight,
} from 'lucide-react';
import { SERVICES_DATA } from '../../data/plumbingData';
import { ServiceItem } from '../../types';

interface ServicesGridProps {
  onSelectService: (service: ServiceItem) => void;
  onBookService: (serviceId: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  onSelectService,
  onBookService,
}) => {
  const [filter, setFilter] = useState<'All' | 'Repairs' | 'Fixtures' | 'Emergency'>('All');

  const filteredServices = SERVICES_DATA.filter((s) => {
    if (filter === 'All') return true;
    if (filter === 'Emergency') return s.isEmergency;
    if (filter === 'Repairs') return s.category === 'Repairs' || s.category === 'Drainage' || s.category === 'Piping';
    if (filter === 'Fixtures') return s.category === 'Fixtures' || s.category === 'Heating';
    return true;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Droplet':
        return <Droplet className="w-5 h-5 text-cyan-600" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-blue-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-indigo-600" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-teal-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-sky-600" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-orange-600" />;
      case 'ShowerHead':
        return <ShowerHead className="w-5 h-5 text-blue-600" />;
      case 'AlertTriangle':
        return <AlertTriangle className="w-5 h-5 text-red-600" />;
      default:
        return <Wrench className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative">
      {/* Decorative top water curve */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200/80 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Droplet className="w-3.5 h-3.5 text-cyan-600" />
              <span>Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Complete{' '}
              <span className="text-blue-600 underline decoration-cyan-400 decoration-4">
                Plumbing Solutions
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 max-w-2xl">
              From minor repairs to major installations, we handle it all with professionalism and care.
            </p>
          </div>

          {/* Filter Tabs & "View All" */}
          <div className="flex items-center gap-2 flex-wrap">
            {(['All', 'Repairs', 'Fixtures', 'Emergency'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  filter === tab
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 8-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-2xl hover:shadow-cyan-900/10 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Card Top: Image with overlay */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />

                {/* Popular or Emergency Tag */}
                {service.isPopular && (
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-blue-600 text-white shadow-md">
                    ★ Most Requested
                  </span>
                )}
                {service.isEmergency && (
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-red-600 text-white shadow-md animate-pulse">
                    24/7 Rapid
                  </span>
                )}

                {/* Floating Icon Pod */}
                <div className="absolute -bottom-3 right-4 w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center border border-slate-100 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 z-10">
                  {getIcon(service.iconName)}
                </div>

                {/* Price starting estimate */}
                <div className="absolute bottom-3 left-3 text-white">
                  <span className="text-xs text-cyan-200">From </span>
                  <span className="text-lg font-black">{service.priceStarting}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 pt-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Quick features bullets */}
                <div className="my-4 pt-3 border-t border-slate-100 space-y-1.5">
                  {service.features.slice(0, 2).map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 flex-shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Card Footer: Learn More button */}
                <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                  <button
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:text-cyan-600 transition-colors cursor-pointer"
                  >
                    <span>Learn More</span>
                    <div className="w-7 h-7 rounded-full bg-blue-50 group-hover:bg-cyan-500 group-hover:text-white flex items-center justify-center transition-all duration-300">
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </button>

                  <button
                    onClick={() => onBookService(service.id)}
                    className="text-xs font-bold text-slate-500 hover:text-slate-900 px-2 py-1 rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    Quick Book
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
