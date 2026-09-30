import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calculator, DollarSign, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

interface CostEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookEstimated: (serviceId: string) => void;
}

export const CostEstimatorModal: React.FC<CostEstimatorModalProps> = ({
  isOpen,
  onClose,
  onBookEstimated,
}) => {
  const [problemType, setProblemType] = useState('leak');
  const [propertyType, setPropertyType] = useState('apartment');
  const [urgency, setUrgency] = useState('standard');

  if (!isOpen) return null;

  // Calculate dynamic transparent price
  const basePrices: Record<string, number> = {
    leak: 49,
    drain: 59,
    toilet: 45,
    faucet: 39,
    pipe: 79,
    waterheater: 89,
    shower: 69,
  };

  const propertyMultiplier: Record<string, number> = {
    apartment: 1.0,
    villa: 1.15,
    commercial: 1.3,
  };

  const urgencyCost: Record<string, number> = {
    standard: 0,
    same_day: 15,
    emergency_now: 35,
  };

  const estimatedMin = Math.round(
    basePrices[problemType] * propertyMultiplier[propertyType] + urgencyCost[urgency]
  );
  const estimatedMax = Math.round(estimatedMin * 1.35);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  Instant Cost Estimator
                </h3>
                <p className="text-xs text-slate-500">100% Transparent • Upfront Pricing</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-5 py-6">
            {/* Step 1: Issue Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                1. Select Plumbing Problem
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'leak', label: 'Leak Repair' },
                  { id: 'drain', label: 'Blocked Drain' },
                  { id: 'toilet', label: 'Toilet Fix' },
                  { id: 'faucet', label: 'Faucet Drip' },
                  { id: 'pipe', label: 'Pipe Burst' },
                  { id: 'waterheater', label: 'Water Heater' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setProblemType(item.id)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer ${
                      problemType === item.id
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Property Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                2. Property Type
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'apartment', label: 'Apartment' },
                  { id: 'villa', label: 'House / Villa' },
                  { id: 'commercial', label: 'Commercial' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setPropertyType(item.id)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer ${
                      propertyType === item.id
                        ? 'bg-cyan-600 text-white border-cyan-600 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Urgency */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                3. Urgency
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'standard', label: 'Flexible Date' },
                  { id: 'same_day', label: 'Same Day' },
                  { id: 'emergency_now', label: 'ASAP (30 min)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setUrgency(item.id)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer ${
                      urgency === item.id
                        ? 'bg-orange-500 text-white border-orange-500 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Estimated Output Result Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-cyan-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-cyan-800 uppercase tracking-wider block">
                  Estimated Service Range
                </span>
                <div className="text-3xl font-black text-slate-900 mt-0.5">
                  ${estimatedMin} – ${estimatedMax}
                </div>
                <span className="text-[11px] text-slate-500">
                  Includes diagnostics, standard parts & labor warranty
                </span>
              </div>

              <div className="text-right">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  No Hidden Fees
                </span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={() => {
              onClose();
              onBookEstimated(problemType === 'leak' ? 'leak-detection' : 'drain-cleaning');
            }}
            className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Lock In This Estimate & Book</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
