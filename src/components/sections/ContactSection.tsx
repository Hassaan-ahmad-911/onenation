import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Headphones,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setError('Please fill in all fields before sending.');
      return;
    }
    setError('');
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
    }, 700);
  };

  const contactCards = [
    {
      icon: Phone,
      title: 'Call Us',
      detail: '720-499-4013',
      subtext: 'Direct line & 24/7 emergency dispatch',
      actionText: 'Call Dispatcher',
      href: 'tel:7204994013',
      color: 'bg-orange-50 text-orange-600 border-orange-200',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp / Text',
      detail: '720-499-4013',
      subtext: 'Instant photo & quote chat',
      actionText: 'Message Us',
      href: 'https://wa.me/17204994013',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    },
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'service@onenationco.com',
      subtext: 'Inquiries & service estimates',
      actionText: 'Send Email',
      href: 'mailto:service@onenationco.com',
      color: 'bg-blue-50 text-blue-600 border-blue-200',
    },
    {
      icon: MapPin,
      title: 'Our Location',
      detail: '4107 Richfield St, Aurora, CO 80013',
      subtext: 'Serving Denver, Aurora & Front Range',
      actionText: 'Get Directions',
      href: 'https://maps.google.com/?q=4107+Richfield+St,+Aurora,+CO+80013',
      color: 'bg-purple-50 text-purple-600 border-purple-200',
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Headphones className="w-3.5 h-3.5 text-blue-600" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact One Nation Plumbing, Heating &amp; Air
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Have a question or require an emergency technician? We're available 24 hours a day, 7 days a week.
          </p>
        </div>

        {/* 4 Contact Channels Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {contactCards.map((c, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-cyan-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl ${c.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <c.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">{c.title}</h3>
                <div className="text-sm font-semibold text-slate-800 mt-1 break-words">{c.detail}</div>
                <div className="text-xs text-slate-500 mt-0.5">{c.subtext}</div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60">
                <a
                  href={c.href}
                  className="text-xs font-bold text-blue-600 hover:text-cyan-600 flex items-center gap-1 transition-colors"
                >
                  <span>{c.actionText}</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Main Grid: Send a Message Form + Opening Hours / Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Send Us a Message Form */}
          <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200">
            <h3 className="text-2xl font-black text-slate-900 mb-2">
              Send Us a Message
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Fill out the form below and our customer care team will reply within 15 minutes.
            </p>

            <AnimatePresence>
              {isSent ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-center gap-4"
                >
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-base">Message Sent Successfully!</h4>
                    <p className="text-xs text-emerald-800 mt-0.5">
                      Thank you for contacting AquaFix. A specialist has received your inquiry and will reach out shortly.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-600 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Michael Smith"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="How can our plumbing experts help you today?..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSending ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>

          {/* Opening Hours & Interactive Map Preview */}
          <div className="lg:col-span-5 space-y-6">
            {/* Opening Hours Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-lg">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>Operating Schedule</span>
              </div>
              <h3 className="text-xl font-black text-white mb-4">
                Opening Hours
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-300">Standard Service Hours:</span>
                  <span className="font-bold text-white">Mon - Sun (8:00 AM - 10:00 PM)</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-cyan-300 font-bold">Emergency Service:</span>
                  <span className="px-2 py-0.5 rounded-full bg-red-600 text-white font-black text-xs">
                    24 Hours / 7 Days
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Holidays & Weekends:</span>
                  <span className="font-bold text-emerald-400">Fully Operational</span>
                </div>
              </div>
            </div>

            {/* Interactive Map Visual Placeholder */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 p-4 relative shadow-sm">
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <MapPin className="w-4 h-4 text-cyan-600" />
                  <span>HQ Headquarters Location</span>
                </div>
                <span className="text-[10px] text-slate-500 font-semibold">Denver Metro Dispatch</span>
              </div>
              <div className="h-44 rounded-2xl bg-slate-900 relative overflow-hidden flex items-center justify-center text-center p-4">
                <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative z-10 space-y-1">
                  <div className="w-9 h-9 rounded-full bg-cyan-500 text-white flex items-center justify-center mx-auto shadow-lg">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-white text-xs font-bold">One Nation Plumbing, Heating &amp; Air</div>
                  <div className="text-[11px] text-slate-300">4107 Richfield St, Aurora, CO 80013</div>
                  <div className="text-[10px] text-cyan-400 font-semibold">Primary Service: Denver, CO &amp; Surrounding Areas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
