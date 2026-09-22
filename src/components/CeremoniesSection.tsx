import React from 'react';
import { WEDDING_DATA, type Ceremony } from '../data/weddingData';
import { MapPin, Calendar, Clock, Sparkles } from 'lucide-react';
import { AnimatedOrnaments } from './AnimatedOrnaments';

export const CeremoniesSection: React.FC = () => {
  const generateGoogleCalendarUrl = (ceremony: Ceremony) => {
    const title = encodeURIComponent(`${WEDDING_DATA.couple.brideName} & ${WEDDING_DATA.couple.groomName} - ${ceremony.title}`);
    const details = encodeURIComponent(`${ceremony.description}\nDress Code: ${ceremony.dressCode}`);
    const location = encodeURIComponent(`${ceremony.venueName}, ${ceremony.venueAddress}`);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  const romanNumerals = ['I', 'II', 'III', 'IV', 'V'];

  return (
    <section id="events" className="relative w-full max-w-md mx-auto px-4 py-10 space-y-8 bg-[#FAF6EE] overflow-hidden">
      
      {/* Animated Subtle Background Ornaments */}
      <AnimatedOrnaments variant="events" />

      {/* Section Header */}
      <div className="relative z-10 text-center space-y-1">
        <span className="font-hindi text-[#7A0C1A] text-sm font-black">❖ विवाह कार्यक्रम ❖</span>
        <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#7A0C1A] drop-shadow-sm">
          The Celebrations
        </h2>
        <p className="font-serif text-xs text-[#8C6711] uppercase tracking-widest font-black">
          Join us in celebrating every sacred ritual
        </p>
        <div className="w-28 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-2" />
      </div>

      {/* Ceremony Cards Stack */}
      <div className="space-y-8">
        {WEDDING_DATA.ceremonies.map((ceremony, idx) => (
          <div
            key={ceremony.id}
            className="relative rounded-3xl overflow-hidden border-2 border-[#D4AF37] shadow-xl bg-[#FFFDF7] text-[#2D0204] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(184,134,11,0.25)]"
          >
            {/* Top Image Banner with Roman Badge */}
            <div className="relative h-48 sm:h-52 w-full overflow-hidden">
              <img
                src={ceremony.image}
                alt={ceremony.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFFDF7] via-transparent to-black/30" />
              
              {/* Roman Numeral Badge */}
              <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-[#7A0C1A] border-2 border-[#FFD700] text-[#FFD700] font-serif text-sm font-black flex items-center justify-center shadow-lg">
                {romanNumerals[idx] || (idx + 1)}
              </div>

              {/* Hindi Title Badge */}
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#7A0C1A] border border-[#FFD700] text-[#FFD700] font-hindi text-xs font-black shadow-lg">
                {ceremony.hindiTitle}
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 space-y-4">
              <div>
                <h3 className="font-serif text-2xl font-black text-[#7A0C1A]">
                  {ceremony.title}
                </h3>
                <p className="font-serif text-xs text-[#5E0613] italic mt-1 font-bold leading-relaxed">
                  {ceremony.description}
                </p>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-[#2D0204] border-t border-b border-[#D4AF37]/30 py-3.5 bg-[#FAF6EE] px-3.5 rounded-2xl font-bold shadow-inner">
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-[#7A0C1A] flex-shrink-0" />
                  <span className="text-[#7A0C1A] font-black">{ceremony.date}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#7A0C1A] flex-shrink-0" />
                  <span>{ceremony.time}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#7A0C1A] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#7A0C1A] font-black block">{ceremony.venueName}</span>
                    <span className="text-[11px] text-[#5E0613] font-bold">{ceremony.venueAddress}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 pt-1.5 border-t border-[#D4AF37]/20">
                  <Sparkles className="w-4 h-4 text-[#7A0C1A] flex-shrink-0" />
                  <span className="text-[#7A0C1A] font-black">Dress Code: {ceremony.dressCode}</span>
                </div>
              </div>

              {/* Action Buttons Grid */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href={ceremony.googleMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-xl btn-crimson text-xs font-serif font-bold flex items-center justify-center gap-1.5 active:scale-95 shadow-md"
                >
                  <MapPin className="w-4 h-4 text-[#FFD700]" />
                  <span>View Map</span>
                </a>
                <a
                  href={generateGoogleCalendarUrl(ceremony)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-xl gold-shimmer-btn text-xs font-serif font-black flex items-center justify-center gap-1.5 active:scale-95 shadow-md"
                >
                  <Calendar className="w-4 h-4 text-[#2D0204]" />
                  <span>Add to Calendar</span>
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CeremoniesSection;
