import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MapPin,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Siren,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SERVICES_DATA, SERVICE_AREAS } from '../../data/plumbingData';
import { BookingFormData } from '../../types';

interface BookingSectionProps {
  preselectedServiceId?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ preselectedServiceId }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceId: preselectedServiceId || 'leak-detection',
    address: '',
    preferredDate: '',
    preferredTime: 'Morning (09:00 - 12:00)',
    problemDescription: '',
    isUrgent: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const validate = () => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your phone number';
    } else if (!/^[0-9+\-\s()]{7,16}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.address.trim()) newErrors.address = 'Please provide your address/neighborhood';
    if (!formData.preferredDate) newErrors.preferredDate = 'Please select a preferred date';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate modern API booking call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const generatedRef = `AQ-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingRef(generatedRef);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#0284c7', '#38bdf8', '#f97316', '#10b981'],
        });
      } catch (err) {
        // Safe fallback
      }
    }, 900);
  };

  return (
    <section id="book" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 via-blue-50/40 to-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Booking Form Column */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl">
              {/* Form Title */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
                  <Calendar className="w-3.5 h-3.5 text-blue-600" />
                  <span>Online Reservation</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Book a Plumbing Service
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-2">
                  Reserve your appointment online in 60 seconds. No advance payment required.
                </p>
              </div>

              {/* Success Message Card */}
              <AnimatePresence>
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 rounded-2xl bg-gradient-to-br from-cyan-50 via-white to-blue-50 border-2 border-cyan-400 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <h3 className="text-2xl font-black text-slate-900">
                      Service Request Confirmed!
                    </h3>

                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your appointment request has been scheduled. Our team will contact you shortly to confirm technician arrival.
                    </p>

                    <div className="inline-block px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-800 shadow-sm">
                      Booking Reference: <span className="text-cyan-600">{bookingRef}</span>
                    </div>

                    <div className="pt-4 flex flex-wrap justify-center gap-3">
                      <a
                        href={`https://wa.me/17204994013?text=Hi%20One%20Nation,%20my%20booking%20reference%20is%20${bookingRef}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors"
                      >
                        Track on WhatsApp
                      </a>

                      <button
                        onClick={() => {
                          setIsSuccess(false);
                          setFormData({
                            fullName: '',
                            phone: '',
                            email: '',
                            serviceId: 'leak-detection',
                            address: '',
                            preferredDate: '',
                            preferredTime: 'Morning (09:00 - 12:00)',
                            problemDescription: '',
                            isUrgent: false,
                          });
                        }}
                        className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
                      >
                        Book Another Service
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Row 1: Full Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                          <input
                            type="text"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            placeholder="e.g. John Doe"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                              errors.fullName
                                ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                                : 'border-slate-200 focus:border-cyan-500 focus:ring-cyan-100'
                            }`}
                          />
                        </div>
                        {errors.fullName && (
                          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.fullName}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+1 (555) 000-0000"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                              errors.phone
                                ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                                : 'border-slate-200 focus:border-cyan-500 focus:ring-cyan-100'
                            }`}
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Email & Service Required */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="you@example.com"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                              errors.email
                                ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                                : 'border-slate-200 focus:border-cyan-500 focus:ring-cyan-100'
                            }`}
                          />
                        </div>
                        {errors.email && (
                          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                          Service Required *
                        </label>
                        <select
                          value={formData.serviceId}
                          onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition-all cursor-pointer"
                        >
                          {SERVICES_DATA.map((srv) => (
                            <option key={srv.id} value={srv.id}>
                              {srv.title} ({srv.priceStarting}+)
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 3: Address & Neighborhood */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                        Service Address / Neighborhood *
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                        <input
                          type="text"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          placeholder="e.g. 4107 Richfield St, Aurora, CO 80013 or Denver address"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                            errors.address
                              ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                              : 'border-slate-200 focus:border-cyan-500 focus:ring-cyan-100'
                          }`}
                        />
                      </div>
                      {errors.address && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.address}</span>
                        </p>
                      )}
                    </div>

                    {/* Row 4: Preferred Date & Time Window */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all ${
                            errors.preferredDate
                              ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                              : 'border-slate-200 focus:border-cyan-500 focus:ring-cyan-100'
                          }`}
                        />
                        {errors.preferredDate && (
                          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.preferredDate}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                          Preferred Time Window
                        </label>
                        <select
                          value={formData.preferredTime}
                          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition-all cursor-pointer"
                        >
                          <option value="Morning (09:00 - 12:00)">Morning (09:00 - 12:00)</option>
                          <option value="Afternoon (12:00 - 15:00)">Afternoon (12:00 - 15:00)</option>
                          <option value="Evening (15:00 - 18:00)">Evening (15:00 - 18:00)</option>
                          <option value="Night (18:00 - 21:00)">Night (18:00 - 21:00)</option>
                          <option value="Urgent Dispatch (ASAP)">Urgent Dispatch (ASAP - 30 min)</option>
                        </select>
                      </div>
                    </div>

                    {/* Problem Description */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                        Problem Description (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.problemDescription}
                        onChange={(e) => setFormData({ ...formData, problemDescription: e.target.value })}
                        placeholder="Briefly describe what needs fixing (e.g. pipe dripping under sink, low water pressure in master shower)..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition-all"
                      />
                    </div>

                    {/* Emergency Checkbox */}
                    <div className="flex items-center gap-3 p-3.5 rounded-xl bg-orange-50 border border-orange-200">
                      <input
                        type="checkbox"
                        id="isUrgent"
                        checked={formData.isUrgent}
                        onChange={(e) => setFormData({ ...formData, isUrgent: e.target.checked })}
                        className="w-4 h-4 rounded text-orange-600 focus:ring-orange-500 cursor-pointer"
                      />
                      <label htmlFor="isUrgent" className="text-xs sm:text-sm font-bold text-slate-800 cursor-pointer">
                        This is an active emergency requiring immediate dispatch within 30 minutes.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl font-extrabold text-base text-white bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 hover:from-blue-800 hover:to-cyan-700 shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Submit Service Request</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side Panel: Need Immediate Help & Service Areas */}
          <div className="lg:col-span-4 space-y-6">
            {/* Immediate Help Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-cyan-500/30 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center mb-4 shadow-lg shadow-red-600/30">
                <Siren className="w-6 h-6 animate-pulse" />
              </div>

              <h3 className="text-xl font-black text-white">Need Immediate Help?</h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                For major leaks, sewer backups, or burst pipes, skip the online form and call our emergency dispatch line directly.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href="tel:7204994013"
                  className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Emergency: 720-499-4013</span>
                </a>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>24 Hours a Day • 7 Days a Week</span>
                </div>
              </div>
            </div>

            {/* Service Areas Quick Summary Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-4">
              <div className="flex items-center gap-2 text-sm font-extrabold text-slate-900">
                <MapPin className="w-4 h-4 text-cyan-600" />
                <span>Coverage Zones in Colorado</span>
              </div>
              <p className="text-xs text-slate-500">
                Guaranteed coverage with rapid technician dispatch:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
                {['Denver (Primary)', 'Aurora (HQ)', 'Lakewood', 'Arvada', 'Boulder', 'Littleton', 'Thornton', '38 Front Range Cities'].map((area, i) => (
                  <div key={i} className="flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-50">
                    <CheckCircle2 className="w-3 h-3 text-cyan-600 flex-shrink-0" />
                    <span className="truncate">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
