import React from 'react';
import { Shield } from 'lucide-react';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  // If an authorized image asset path is available in the future, pass it here:
  logoSrc?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  className = '',
  logoSrc,
}) => {
  const isLight = variant === 'light';

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-xl sm:text-2xl',
  };

  const subtitleSizes = {
    sm: 'text-[9px] tracking-wider',
    md: 'text-[10px] sm:text-[11px] tracking-widest',
    lg: 'text-xs tracking-widest',
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Logo Graphic or Authorized Image */}
      {logoSrc ? (
        <img
          src={logoSrc}
          alt="One Nation Plumbing, Heating & Air"
          className={`${iconSizes[size]} object-contain`}
        />
      ) : (
        <div
          className={`relative ${iconSizes[size]} rounded-xl flex items-center justify-center bg-gradient-to-br from-[#0879F9] to-[#0052cc] text-white shadow-sm flex-shrink-0`}
        >
          <Shield className="w-5 h-5 fill-white/20 stroke-white stroke-[2.2]" />
        </div>
      )}

      {/* Brand Typography: Clean Text-Based Placeholder */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-black ${titleSizes[size]} tracking-tight uppercase ${
            isLight ? 'text-white' : 'text-[#10182F]'
          }`}
        >
          ONE NATION
        </span>
        <span
          className={`font-bold uppercase tracking-widest ${subtitleSizes[size]} mt-0.5 ${
            isLight ? 'text-cyan-300' : 'text-[#0879F9]'
          }`}
        >
          PLUMBING, HEATING &amp; AIR
        </span>
      </div>
    </div>
  );
};
