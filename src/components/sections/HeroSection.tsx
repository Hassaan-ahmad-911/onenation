import React from 'react';
import {
  Shield,
  Phone,
  MessageCircle,
  Calendar,
  Clock,
  ShieldCheck,
  Receipt,
  Award,
  Star,
} from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onNavigateToServices?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
}) => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 bg-[#F8FBFF] border-b border-slate-100 min-h-[650px] lg:min-h-[700px] flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Two-Column Layout (Desktop: Left ~53%, Right ~47%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 xl:gap-14 items-center">
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* 1. Trust Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F4FF] border border-[#CDE8FF] text-[#0879F9] text-[14px] font-semibold tracking-wide">
              <Shield className="w-4 h-4 text-[#0879F9]" />
              <span>TRUSTED PLUMBING EXPERTS</span>
            </div>

            {/* 2. Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] xl:text-[68px] font-extrabold text-[#10182F] tracking-tight leading-[1.05]">
              Reliable Plumbing
              <br />
              Services for a{' '}
              <span className="text-[#0879F9]">Better</span>
              <br />
              <span className="relative inline-block text-[#0879F9]">
                Tomorrow
                {/* Subtle static decorative wave underline */}
                <svg
                  className="absolute -bottom-2.5 left-0 w-full h-3 text-[#0879F9] pointer-events-none"
                  viewBox="0 0 250 16"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 3 10 C 65 3, 175 16, 247 6"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* 3. Description */}
            <p className="text-[18px] sm:text-[19px] lg:text-[20px] text-[#53627A] leading-[1.6] max-w-[650px] font-normal">
              Fast, affordable and professional plumbing solutions for homes and businesses. We are just a call away!
            </p>

            {/* 4. Three CTA Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 pt-1">
              {/* Button 1: CALL NOW (Orange) */}
              <a
                href="tel:7204994013"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 h-[58px] sm:h-[62px] rounded-[12px] font-bold text-white bg-[#FF7A00] hover:bg-[#e86e00] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer text-sm tracking-wide uppercase select-none w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                <span>Call Now</span>
              </a>

              {/* Button 2: WHATSAPP (Green) */}
              <a
                href="https://wa.me/17204994013?text=Hello%20One%20Nation!%20I%20need%20plumbing%20or%20HVAC%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 h-[58px] sm:h-[62px] rounded-[12px] font-bold text-white bg-[#00B87A] hover:bg-[#00a36c] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer text-sm tracking-wide uppercase select-none w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span>WhatsApp</span>
              </a>

              {/* Button 3: BOOK A SERVICE (White with blue border) */}
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 h-[58px] sm:h-[62px] rounded-[12px] font-bold text-[#0879F9] bg-white border-2 border-[#0879F9] hover:bg-[#F0F7FF] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer text-sm tracking-wide uppercase select-none w-full sm:w-auto"
              >
                <Calendar className="w-5 h-5 text-[#0879F9] flex-shrink-0" />
                <span>Book a Service</span>
              </button>
            </div>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Large Rounded Container */}
            <div className="relative w-full rounded-[28px] overflow-hidden bg-[#EAF6FF] shadow-sm border border-slate-100 flex items-center justify-center">
              {/* Single Professional Plumber Image */}
              <img
                src="/images/hero_plumber_2x.png"
                alt="Professional licensed plumber wearing blue uniform with red wrench"
                className="w-full h-[380px] sm:h-[440px] lg:h-[480px] object-cover object-center select-none"
                loading="eager"
              />

              {/* Static Emergency Badge (Upper Right) */}
              <div className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 bg-[#102A43] text-white p-3 sm:p-4 rounded-[16px] shadow-lg flex items-center gap-3 max-w-[210px] select-none border border-slate-800 pointer-events-none">
                <div className="w-10 h-10 rounded-full bg-[#0879F9] flex items-center justify-center flex-shrink-0 text-white shadow-sm">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-bold text-white leading-none">24/7</div>
                  <div className="text-xs font-semibold text-white mt-1 leading-tight">Emergency Service</div>
                  <div className="text-[10px] text-slate-300 mt-1 leading-none">Fast 30 Min Arrival</div>
                </div>
              </div>

              {/* Static Customer Review Card (Lower Right) */}
              <div className="absolute bottom-3.5 right-3.5 sm:bottom-5 sm:right-5 bg-white border border-slate-200/90 rounded-[16px] p-3 sm:p-3.5 shadow-xl flex items-center gap-3 max-w-[230px] select-none pointer-events-none">
                <img
                  src="/images/review_avatar.png"
                  alt="Ali R."
                  className="w-9 h-9 rounded-full object-cover border border-slate-200 flex-shrink-0"
                />
                <div className="leading-tight">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="text-xs font-bold text-[#10182F] mt-1">Fast Service!</div>
                  <div className="text-[11px] text-[#53627A] italic leading-tight">"Arrived in 30 minutes."</div>
                  <div className="text-[10px] font-semibold text-[#0879F9] mt-0.5">- Ali R. (Aurora, CO)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= TRUST FEATURE STRIP ================= */}
        <div className="mt-12 sm:mt-14 lg:mt-16 pt-8 sm:pt-10 border-t border-slate-200/70">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Item 1: 24/7 Emergency Service */}
            <div className="flex items-center gap-3.5 p-2 sm:p-3 rounded-2xl bg-white/60 sm:bg-transparent">
              <div className="w-11 h-11 rounded-full bg-[#E8F4FF] text-[#0879F9] flex items-center justify-center flex-shrink-0 shadow-xs">
                <Clock className="w-5 h-5" />
              </div>
              <div className="leading-tight">
                <div className="font-bold text-sm sm:text-base text-[#10182F]">24/7</div>
                <div className="text-xs sm:text-sm text-[#53627A] font-medium mt-0.5">Emergency Service</div>
              </div>
            </div>

            {/* Item 2: Licensed & Insured */}
            <div className="flex items-center gap-3.5 p-2 sm:p-3 rounded-2xl bg-white/60 sm:bg-transparent">
              <div className="w-11 h-11 rounded-full bg-[#E6F8FA] text-[#16B8D4] flex items-center justify-center flex-shrink-0 shadow-xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="leading-tight">
                <div className="font-bold text-sm sm:text-base text-[#10182F]">Licensed</div>
                <div className="text-xs sm:text-sm text-[#53627A] font-medium mt-0.5">&amp; Insured</div>
              </div>
            </div>

            {/* Item 3: Transparent Pricing */}
            <div className="flex items-center gap-3.5 p-2 sm:p-3 rounded-2xl bg-white/60 sm:bg-transparent">
              <div className="w-11 h-11 rounded-full bg-[#E6F9F0] text-[#00B87A] flex items-center justify-center flex-shrink-0 shadow-xs">
                <Receipt className="w-5 h-5" />
              </div>
              <div className="leading-tight">
                <div className="font-bold text-sm sm:text-base text-[#10182F]">Transparent</div>
                <div className="text-xs sm:text-sm text-[#53627A] font-medium mt-0.5">Pricing</div>
              </div>
            </div>

            {/* Item 4: 100% Satisfaction */}
            <div className="flex items-center gap-3.5 p-2 sm:p-3 rounded-2xl bg-white/60 sm:bg-transparent">
              <div className="w-11 h-11 rounded-full bg-[#FFF8E6] text-[#F59E0B] flex items-center justify-center flex-shrink-0 shadow-xs">
                <Award className="w-5 h-5" />
              </div>
              <div className="leading-tight">
                <div className="font-bold text-sm sm:text-base text-[#10182F]">100%</div>
                <div className="text-xs sm:text-sm text-[#53627A] font-medium mt-0.5">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
