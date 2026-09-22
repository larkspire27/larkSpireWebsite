import React, { useState, useEffect } from 'react';
import { WEDDING_DATA } from '../data/weddingData';
import { Calendar, MapPin, Sparkles } from 'lucide-react';
import { AnimatedOrnaments } from './AnimatedOrnaments';

export const HeroCouple: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const targetDate = new Date(WEDDING_DATA.couple.weddingDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: days.toString().padStart(2, '0'),
          hours: hours.toString().padStart(2, '0'),
          minutes: minutes.toString().padStart(2, '0'),
          seconds: seconds.toString().padStart(2, '0'),
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="hero" className="relative text-center pt-6 pb-4 flex flex-col items-center overflow-hidden bg-[#FAF6EE]">
      
      {/* ------------------------------------------------------------- */}
      {/* ANIMATED SUBTLE DECORATIVE BACKGROUND ORNAMENTS */}
      {/* ------------------------------------------------------------- */}
      <AnimatedOrnaments variant="hero" />

      {/* ------------------------------------------------------------- */}
      {/* MAIN HERO CONTENT (Relative Z-10 for Sharp Readability) */}
      {/* ------------------------------------------------------------- */}

      {/* Main Title Badge */}
      <span className="relative z-10 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#7A0C1A] text-[#FFFDF0] font-serif text-xs font-black tracking-widest uppercase mb-4 shadow-md border border-[#FFD700]">
        <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
        <span>Shubh Vivah</span>
      </span>

      {/* Couple Names */}
      <div className="relative z-10 space-y-1 mb-6 max-w-xs mx-auto text-center">
        <h1 className="font-script text-5xl sm:text-6xl text-[#7A0C1A] font-black tracking-wide drop-shadow-sm">
          Ananya
        </h1>
        <div className="flex items-center justify-center gap-3 my-1">
          <span className="h-[1.5px] w-12 bg-[#D4AF37]" />
          <p className="font-serif text-xs tracking-[0.4em] uppercase text-[#8C6711] font-black">
            WEDS
          </p>
          <span className="h-[1.5px] w-12 bg-[#D4AF37]" />
        </div>
        <h1 className="font-script text-5xl sm:text-6xl text-[#7A0C1A] font-black tracking-wide drop-shadow-sm">
          Rohan
        </h1>
      </div>

      {/* Couple Portrait Image Container */}
      <div className="relative z-10 w-full max-w-xs mx-auto mb-8 rounded-3xl overflow-hidden border-2 border-[#D4AF37] shadow-[0_15px_40px_rgba(184,134,11,0.25)] group">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
        <img
          src="/images/couple_portrait.png"
          alt="Ananya & Rohan Bridal Couple"
          className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute bottom-3 inset-x-0 z-20 text-center">
          <span className="font-serif text-xs font-black text-[#FFFDF0] bg-[#7A0C1A]/90 px-4 py-1.5 rounded-full border border-[#FFD700] shadow-md">
            Ananya & Rohan • #AnanyaWedsRohan
          </span>
        </div>
      </div>

      {/* Live Countdown Timer */}
      <div className="relative z-10 w-full max-w-sm mx-auto mb-8 px-4">
        <p className="font-serif text-xs uppercase tracking-widest text-[#7A0C1A] font-black mb-3">
          ⏳ Countdown To Sacred Pheras
        </p>
        <div className="grid grid-cols-4 gap-2.5">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#FFFDF7] border-2 border-[#D4AF37] shadow-[0_6px_20px_rgba(184,134,11,0.18)]"
            >
              <span className="font-serif text-2xl sm:text-3xl font-black text-[#7A0C1A]">
                {item.value}
              </span>
              <span className="font-body text-[10px] text-[#8C6711] uppercase font-black mt-0.5 tracking-wider">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Event Date & Location Banner */}
      <div className="relative z-10 w-full max-w-sm px-4 mb-8">
        <div className="p-5 rounded-3xl bg-[#FFFDF7] border-2 border-[#D4AF37] shadow-lg text-[#2D0204] flex flex-col gap-3">
          <div className="flex items-center justify-center gap-2.5 text-[#7A0C1A] font-serif text-base font-black">
            <Calendar className="w-5 h-5 text-[#7A0C1A] flex-shrink-0" />
            <span>{WEDDING_DATA.couple.displayDate}</span>
          </div>
          <div className="h-[1px] w-full bg-[#D4AF37]/30" />
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#4A040E] font-bold">
            <MapPin className="w-4 h-4 text-[#7A0C1A] flex-shrink-0" />
            <span>{WEDDING_DATA.couple.mainVenue}</span>
          </div>
        </div>
      </div>

      {/* Infinite Marquee Ticker */}
      <div className="relative z-10 w-full bg-[#FFFDF7] border-y-2 border-[#D4AF37] py-3 overflow-hidden text-[#7A0C1A] font-serif text-xs font-black tracking-widest uppercase shadow-inner">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          <span>✦ #AnanyaWedsRohan</span>
          <span>✦ Two Souls, One Journey</span>
          <span>✦ Saat Phere, Saat Vachan</span>
          <span>✦ Royal Indian Wedding Celebration</span>
          <span>✦ #AnanyaWedsRohan</span>
          <span>✦ Two Souls, One Journey</span>
          <span>✦ Saat Phere, Saat Vachan</span>
          <span>✦ Royal Indian Wedding Celebration</span>
        </div>
      </div>

    </div>
  );
};

export default HeroCouple;
