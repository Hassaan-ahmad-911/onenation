import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, MessageSquare } from 'lucide-react';
import { REVIEWS_DATA } from '../../data/plumbingData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length);
  };

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>Customer Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              What Our{' '}
              <span className="text-blue-600">Customers Say</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2">
              Over 1,000+ satisfied homeowners and commercial partners rely on AquaFix.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 hover:text-blue-600 shadow-sm active:scale-95 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 hover:text-blue-600 shadow-sm active:scale-95 transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel / Cards Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            REVIEWS_DATA[currentIndex % REVIEWS_DATA.length],
            REVIEWS_DATA[(currentIndex + 1) % REVIEWS_DATA.length],
            REVIEWS_DATA[(currentIndex + 2) % REVIEWS_DATA.length],
          ].map((review, idx) => (
            <motion.div
              key={`${review.id}-${currentIndex}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-3xl bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-cyan-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: User avatar + info + quote icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400 shadow-sm"
                    />
                    <div>
                      <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                        <span>{review.name}</span>
                        {review.verified && (
                          <span title="Verified Customer">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" />
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 font-medium">
                        {review.location}
                      </div>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-cyan-200 flex-shrink-0" />
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-700 ml-1">5.0</span>
                </div>

                {/* Comment */}
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Service Tag & Date */}
              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span className="text-cyan-700 font-bold">{review.serviceUsed}</span>
                <span>{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
