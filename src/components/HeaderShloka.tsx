import React from 'react';
import { WEDDING_DATA } from '../data/weddingData';
import { AnimatedOrnaments } from './AnimatedOrnaments';

export const HeaderShloka: React.FC = () => {
  return (
    <div className="relative text-center px-4 pt-8 pb-6 border-b-2 border-[#D4AF37]/40 bg-[#FAF6EE] overflow-hidden">
      
      {/* Animated Subtle Background Ornaments */}
      <AnimatedOrnaments variant="hero" />

      {/* Main Invocation Content */}
      <div className="relative z-10">
        {/* Shree Ganesha Icon */}
        <div className="flex flex-col items-center justify-center mb-3">
          <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#FFFDF0] via-[#FFF5D6] to-[#FCEEC7] border-2 border-[#D4AF37] p-2 shadow-[0_6px_20px_rgba(184,134,11,0.25)] flex items-center justify-center mb-2 transform hover:scale-105 transition-transform">
            <span className="text-3xl select-none text-[#7A0C1A]" role="img" aria-label="Lord Ganesha">
              🔱
            </span>
          </div>
          
          <p className="font-hindi text-2xl sm:text-3xl font-black text-[#7A0C1A] tracking-wider drop-shadow-sm">
            ॥ श्री गणेशाय नमः ॥
          </p>
        </div>

        {/* Sanskrit Shloka Box */}
        <div className="max-w-md mx-auto p-5 rounded-3xl bg-[#FFFDF7] border-2 border-[#D4AF37] shadow-[0_10px_30px_rgba(184,134,11,0.15)] my-4">
          <p className="font-hindi text-base sm:text-lg text-[#4A040E] leading-relaxed font-bold tracking-wide">
            {WEDDING_DATA.shloka.sanskrit}
          </p>
          <p className="font-serif text-xs sm:text-sm text-[#7A0C1A] italic mt-3 font-bold leading-relaxed">
            "{WEDDING_DATA.shloka.translation}"
          </p>
        </div>

        {/* Host Family Names */}
        <div className="space-y-2 mt-5 max-w-sm mx-auto p-5 rounded-3xl bg-[#FFFDF7] border border-[#C5A059]/50 shadow-md">
          <p className="font-serif text-xs uppercase tracking-widest text-[#8C6711] font-black">
            WITH THE DIVINE BLESSINGS OF
          </p>
          <p className="font-serif text-sm sm:text-base font-extrabold text-[#5E0613]">
            {WEDDING_DATA.couple.grandParents}
          </p>
          <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto my-2.5" />
          <p className="font-serif text-xs sm:text-sm text-[#3B0409] font-bold leading-relaxed">
            {WEDDING_DATA.couple.brideParents} <br />
            <span className="text-[#7A0C1A] font-black text-sm">&</span> <br />
            {WEDDING_DATA.couple.groomParents}
          </p>
          <p className="font-serif text-xs text-[#5E0613]/90 italic mt-3 font-semibold leading-relaxed">
            Cordially request the pleasure of your gracious presence at the wedding of their beloved children
          </p>
        </div>
      </div>

    </div>
  );
};

export default HeaderShloka;
