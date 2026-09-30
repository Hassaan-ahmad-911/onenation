import React from 'react';
import { Home, Wrench, Phone, Star, MessageSquare } from 'lucide-react';

interface MobileBottomNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeSection,
  onNavigate,
  onOpenBooking,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-2xl py-2 px-4 md:hidden">
      <div className="flex items-center justify-around relative">
        {/* Home */}
        <button
          onClick={() => onNavigate('home')}
          className={`flex flex-col items-center gap-1 text-[10px] font-bold transition-colors cursor-pointer ${
            activeSection === 'home' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Home className="w-5 h-5" />
          <span>Home</span>
        </button>

        {/* Services */}
        <button
          onClick={() => onNavigate('services')}
          className={`flex flex-col items-center gap-1 text-[10px] font-bold transition-colors cursor-pointer ${
            activeSection === 'services' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Wrench className="w-5 h-5" />
          <span>Services</span>
        </button>

        {/* Center Floating Emergency Call Button */}
        <div className="relative -top-5">
          <a
            href="tel:7204994013"
            aria-label="Call Emergency Dispatch"
            className="w-14 h-14 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/40 border-4 border-white active:scale-95 transition-transform"
          >
            <Phone className="w-6 h-6" />
          </a>
        </div>

        {/* Reviews */}
        <button
          onClick={() => onNavigate('reviews')}
          className={`flex flex-col items-center gap-1 text-[10px] font-bold transition-colors cursor-pointer ${
            activeSection === 'reviews' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Star className="w-5 h-5" />
          <span>Reviews</span>
        </button>

        {/* Contact */}
        <button
          onClick={() => onNavigate('contact')}
          className={`flex flex-col items-center gap-1 text-[10px] font-bold transition-colors cursor-pointer ${
            activeSection === 'contact' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <MessageSquare className="w-5 h-5" />
          <span>Contact</span>
        </button>
      </div>
    </div>
  );
};
