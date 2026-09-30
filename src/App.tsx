import React, { useState, useEffect } from 'react';
import { Navbar } from './components/common/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { QuickServiceMenu } from './components/sections/QuickServiceMenu';
import { ServicesGrid } from './components/sections/ServicesGrid';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { EmergencyBanner } from './components/sections/EmergencyBanner';
import { HowItWorks } from './components/sections/HowItWorks';
import { ServiceAreasMap } from './components/sections/ServiceAreasMap';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { VanBanner } from './components/sections/VanBanner';
import { BookingSection } from './components/sections/BookingSection';
import { ContactSection } from './components/sections/ContactSection';
import { AboutSection } from './components/sections/AboutSection';
import { Footer } from './components/common/Footer';
import { MobileBottomNav } from './components/common/MobileBottomNav';
import { FloatingActionButtons } from './components/common/FloatingActionButtons';
import { ServiceDetailModal } from './components/modals/ServiceDetailModal';
import { VideoModal } from './components/modals/VideoModal';
import { CostEstimatorModal } from './components/modals/CostEstimatorModal';
import { SearchModal } from './components/modals/SearchModal';
import { ServiceItem } from './types';
import { SERVICES_DATA } from './data/plumbingData';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [preselectedBookingService, setPreselectedBookingService] = useState<string>('leak-detection');

  // Scroll spy to highlight active section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'why-us', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  const handleOpenBooking = (serviceId?: string) => {
    if (serviceId) {
      setPreselectedBookingService(serviceId);
    }
    const bookEl = document.getElementById('book');
    if (bookEl) {
      const navOffset = 80;
      const elementPosition = bookEl.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  const handleSelectQuickService = (serviceId: string) => {
    const found = SERVICES_DATA.find((s) => s.id === serviceId);
    if (found) {
      setSelectedService(found);
    } else {
      handleOpenBooking(serviceId);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      {/* Sticky Header / Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Page Flow matching mockup */}
      <main className="flex-1">
        {/* 1. Hero Section with 3D Plumber, Water Effects & Trust Indicators */}
        <HeroSection
          onOpenBooking={() => handleOpenBooking()}
          onNavigateToServices={() => handleNavigate('services')}
        />

        {/* 2. Floating Quick Service Category Bar */}
        <QuickServiceMenu onSelectService={handleSelectQuickService} />

        {/* 3. Complete Plumbing Solutions Grid (8 Services) */}
        <ServicesGrid
          onSelectService={(service) => setSelectedService(service)}
          onBookService={(serviceId) => handleOpenBooking(serviceId)}
        />

        {/* 4. Why Choose Us (Trusted Plumbing Partner + Feature Cards + Luxury Bathroom Showcase + Animated Stats) */}
        <WhyChooseUs
          onOpenVideoModal={() => setIsVideoModalOpen(true)}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 5. 24/7 Emergency Section Banner */}
        <EmergencyBanner />

        {/* 6. How It Works (4 Easy Steps Timeline) */}
        <HowItWorks onOpenBooking={() => handleOpenBooking()} />

        {/* 7. About Us Section (Story, Mission, Vision, Team) */}
        <AboutSection />

        {/* 8. Service Areas & Interactive Map Coverage */}
        <ServiceAreasMap />

        {/* 9. Customer Testimonials Reviews Carousel */}
        <TestimonialsSection />

        {/* 10. AquaFix Service Van & Plumber Call Banner */}
        <VanBanner />

        {/* 11. Complete Online Booking System */}
        <BookingSection preselectedServiceId={preselectedBookingService} />

        {/* 12. Contact Page / Section with Direct Channels & Message Form */}
        <ContactSection />
      </main>

      {/* Modals & Popups */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBook={(serviceId) => handleOpenBooking(serviceId)}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onOpenBooking={() => handleOpenBooking()}
      />

      <CostEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        onBookEstimated={(serviceId) => handleOpenBooking(serviceId)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectService={(service) => setSelectedService(service)}
      />

      {/* Desktop / Tablet Floating Action Buttons (WhatsApp + Price Estimator) */}
      <FloatingActionButtons onOpenEstimator={() => setIsEstimatorOpen(true)} />

      {/* Mobile Sticky Bottom Navigation (Home, Services, Center Dial, Reviews, Contact) */}
      <MobileBottomNav
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Premium Dark Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />
    </div>
  );
}

export default App;
