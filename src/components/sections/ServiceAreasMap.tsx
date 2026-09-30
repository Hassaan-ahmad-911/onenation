import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, Clock, CheckCircle2, ChevronRight, Phone, Search } from 'lucide-react';
import { SERVICE_AREAS, ALL_SERVICE_CITIES, BUSINESS_INFO } from '../../data/plumbingData';
import { ServiceArea } from '../../types';

export const ServiceAreasMap: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<ServiceArea>(SERVICE_AREAS[0]); // Default Denver
  const [cityFilter, setCityFilter] = useState('');

  const filteredCities = ALL_SERVICE_CITIES.filter((city) =>
    city.toLowerCase().includes(cityFilter.toLowerCase())
  );

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden" id="service-areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Locations List & Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-900 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-cyan-600" />
              <span>Areas We Serve</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Proudly Serving <span className="text-blue-600">Denver &amp; Aurora, CO</span>
            </h2>

            <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200/80 text-sm text-slate-700 space-y-1">
              <p>
                <strong className="text-blue-900 font-bold">Primary Service Area:</strong> {BUSINESS_INFO.primaryServiceArea}
              </p>
              <p>
                <strong className="text-blue-900 font-bold">Also Serving:</strong> {BUSINESS_INFO.secondaryServiceArea}
              </p>
            </div>

            {/* Major Hubs Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Major Dispatch Hubs
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5">
                {SERVICE_AREAS.map((area) => {
                  const isSelected = selectedArea.id === area.id;
                  return (
                    <button
                      key={area.id}
                      onClick={() => setSelectedArea(area)}
                      className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
                          : 'bg-white text-slate-700 border-slate-200/80 hover:border-cyan-400 hover:bg-cyan-50/50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            isSelected ? 'bg-cyan-300' : 'bg-emerald-500'
                          } flex-shrink-0 animate-pulse`}
                        />
                        <span className="font-bold text-sm truncate">{area.name}</span>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-white' : 'text-slate-400'}`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Zone Highlight Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedArea.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="text-xs font-bold text-cyan-600 uppercase tracking-wider">
                    {selectedArea.status}
                  </div>
                  <div className="text-lg font-black text-slate-900 mt-0.5">
                    {selectedArea.name} ({selectedArea.zone})
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                    <Clock className="w-3.5 h-3.5 text-emerald-500" />
                    <span>
                      Average Arrival: <strong className="text-slate-800">{selectedArea.avgResponseTime}</strong>
                    </span>
                  </div>
                </div>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-md transition-colors flex-shrink-0"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Stylized Visual Map + All 38 Colorado Cities Directory */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl overflow-hidden aspect-[4/3] flex items-center justify-center">
              {/* Map grid lines styling */}
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:32px_32px]" />

              {/* Radial city spotlight */}
              <div className="absolute inset-0 bg-radial from-cyan-900/30 via-slate-900/60 to-slate-950 pointer-events-none" />

              {/* Stylized Colorado Front Range Map Outlines */}
              <svg
                className="w-full h-full absolute inset-0 opacity-40 text-cyan-400 stroke-current"
                viewBox="0 0 100 100"
                fill="none"
              >
                {/* Major Colorado highways: I-25 North-South, I-70 East-West, E-470 loop */}
                <path d="M 48 5 L 48 95" strokeWidth="1.4" strokeDasharray="3,2" />
                <path d="M 5 45 L 95 45" strokeWidth="1.4" />
                <path d="M 30 15 Q 75 15 80 50 T 55 90" strokeWidth="0.8" strokeDasharray="2,2" />
                <circle cx="50" cy="45" r="16" strokeWidth="0.8" strokeDasharray="2,2" />
              </svg>

              {/* Interactive Pulsing Map Pins for each Service Area */}
              {SERVICE_AREAS.map((area) => {
                const isSelected = selectedArea.id === area.id;
                return (
                  <button
                    key={area.id}
                    onClick={() => setSelectedArea(area)}
                    style={{ left: `${area.coordinates.x}%`, top: `${area.coordinates.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20 focus:outline-none"
                  >
                    <div className="relative flex items-center justify-center">
                      <span
                        className={`animate-ping absolute inline-flex h-8 w-8 rounded-full ${
                          isSelected ? 'bg-orange-400' : 'bg-cyan-400'
                        } opacity-75`}
                      />
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shadow-lg transition-transform ${
                          isSelected
                            ? 'bg-orange-500 scale-125 border-2 border-white'
                            : 'bg-cyan-500 hover:scale-110 border border-slate-900'
                        }`}
                      >
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <div
                      className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-md text-[11px] font-bold whitespace-nowrap shadow-xl transition-all ${
                        isSelected
                          ? 'bg-white text-slate-900 scale-100 opacity-100 z-30'
                          : 'bg-slate-800 text-slate-200 scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100'
                      }`}
                    >
                      {area.name} ({area.avgResponseTime})
                    </div>
                  </button>
                );
              })}

              {/* Map Corner Badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-cyan-500/30 text-xs text-white">
                <Navigation className="w-3.5 h-3.5 text-cyan-400" />
                <span>Denver &amp; Aurora Mobile Fleet Active</span>
              </div>
            </div>

            {/* Complete 38-City Coverage Directory */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <h4 className="text-sm font-bold text-slate-900">
                    Complete List of Areas We Serve ({ALL_SERVICE_CITIES.length} Cities &amp; Towns)
                  </h4>
                </div>
                <div className="relative w-full sm:w-44">
                  <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
                  <input
                    type="text"
                    value={cityFilter}
                    onChange={(e) => setCityFilter(e.target.value)}
                    placeholder="Search city..."
                    className="w-full pl-8 pr-2.5 py-1 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 max-h-44 overflow-y-auto pr-1">
                {filteredCities.map((city) => (
                  <span
                    key={city}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-700 border border-slate-200/60 transition-colors"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
