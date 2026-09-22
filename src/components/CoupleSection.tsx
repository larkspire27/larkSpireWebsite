import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { AnimatedOrnaments } from './AnimatedOrnaments';

export const CoupleSection: React.FC = () => {
  return (
    <section id="couple" className="relative w-full max-w-md mx-auto px-4 py-10 space-y-8 bg-[#FAF6EE] overflow-hidden">
      
      {/* Animated Subtle Background Ornaments */}
      <AnimatedOrnaments variant="couple" />

      {/* Main Section Content */}
      <div className="relative z-10 space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-1">
          <span className="font-hindi text-[#7A0C1A] text-sm font-black">❖ दो दिल, एक सफ़र ❖</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#7A0C1A] drop-shadow-sm">
            Two Souls, One Journey
          </h2>
          <p className="font-serif text-xs text-[#8C6711] uppercase tracking-widest font-black">
            Together with their beloved families
          </p>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-2" />
        </div>

        {/* Groom & Bride Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Groom Card */}
          <div className="p-6 rounded-3xl bg-[#FFFDF7] border-2 border-[#D4AF37] shadow-lg text-center space-y-3 transform hover:scale-[1.02] transition-transform">
            <div className="w-20 h-20 mx-auto rounded-full border-2 border-[#7A0C1A] overflow-hidden p-1 shadow-md bg-gradient-to-b from-[#FFFDF0] to-[#FCEEC7]">
              <span className="text-4xl flex items-center justify-center h-full">👑</span>
            </div>
            <div>
              <span className="font-serif text-[10px] text-[#8C6711] uppercase tracking-widest font-black">
                The Groom
              </span>
              <h3 className="font-script text-3xl text-[#7A0C1A] font-extrabold mt-0.5">
                Rohan Verma
              </h3>
            </div>
            <p className="font-serif text-xs text-[#3B0409] font-bold leading-relaxed border-t border-[#D4AF37]/30 pt-2">
              Son of Smt. Rekha & Shri Suresh Verma <br />
              <span className="text-[11px] text-[#7A0C1A] font-semibold italic">Grandson of Late Smt. Shanti Devi & Late Shri Ramcharan Sharma</span>
            </p>
          </div>

          {/* Bride Card */}
          <div className="p-6 rounded-3xl bg-[#FFFDF7] border-2 border-[#D4AF37] shadow-lg text-center space-y-3 transform hover:scale-[1.02] transition-transform">
            <div className="w-20 h-20 mx-auto rounded-full border-2 border-[#7A0C1A] overflow-hidden p-1 shadow-md bg-gradient-to-b from-[#FFFDF0] to-[#FCEEC7]">
              <span className="text-4xl flex items-center justify-center h-full">👸</span>
            </div>
            <div>
              <span className="font-serif text-[10px] text-[#8C6711] uppercase tracking-widest font-black">
                The Bride
              </span>
              <h3 className="font-script text-3xl text-[#7A0C1A] font-extrabold mt-0.5">
                Ananya Sharma
              </h3>
            </div>
            <p className="font-serif text-xs text-[#3B0409] font-bold leading-relaxed border-t border-[#D4AF37]/30 pt-2">
              Daughter of Smt. Sunita & Shri Rajesh Sharma <br />
              <span className="text-[11px] text-[#7A0C1A] font-semibold italic">Granddaughter of Smt. Savitri & Shri Mohanlal Sharma</span>
            </p>
          </div>

        </div>

        {/* "How We Met" Story Timeline Card */}
        <div className="p-6 rounded-3xl bg-[#FFFDF7] border-2 border-[#D4AF37] shadow-xl text-center space-y-3 relative overflow-hidden">
          <div className="flex items-center justify-center gap-2 text-[#7A0C1A]">
            <Heart className="w-5 h-5 fill-[#7A0C1A]" />
            <span className="font-serif text-xs font-black uppercase tracking-widest text-[#7A0C1A]">Our Love Story</span>
            <Heart className="w-5 h-5 fill-[#7A0C1A]" />
          </div>

          <h3 className="font-script text-3xl text-[#7A0C1A] font-extrabold">
            From Coffee Dates to Forever
          </h3>

          <p className="font-serif text-xs sm:text-sm text-[#3B0409] leading-relaxed italic font-bold max-w-sm mx-auto">
            "From college coffee breaks in Delhi to watching Udaipur sunsets together, our journey has been filled with laughter, late-night talks, and unconditional love. Today, with the blessings of our elders, we step into forever."
          </p>

          <div className="pt-2 flex items-center justify-center gap-2 text-xs font-serif font-black text-[#7A0C1A]">
            <Sparkles className="w-4 h-4 text-[#8C6711]" />
            <span>#AnanyaWedsRohan</span>
            <Sparkles className="w-4 h-4 text-[#8C6711]" />
          </div>
        </div>
      </div>

    </section>
  );
};

export default CoupleSection;
