import React, { useState } from 'react';
import { Navigation, Phone, Copy, Check, Plane, Train } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import { AnimatedOrnaments } from './AnimatedOrnaments';

export const VenueSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const venueAddress = `${WEDDING_DATA.couple.mainVenue}, New Delhi, India`;

  const handleCopyAddress = () => {
    try {
      navigator.clipboard.writeText(venueAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <section id="venue" className="relative w-full max-w-md mx-auto px-4 py-10 space-y-8 bg-[#FAF6EE] overflow-hidden">
      
      {/* Animated Subtle Background Ornaments */}
      <AnimatedOrnaments variant="venue" />

      {/* Section Header */}
      <div className="relative z-10 text-center space-y-1">
        <span className="font-hindi text-[#7A0C1A] text-sm font-black">❖ विवाह स्थल एवं विवरण ❖</span>
        <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#7A0C1A] drop-shadow-sm">
          Venue & Travel Info
        </h2>
        <p className="font-serif text-xs text-[#8C6711] uppercase tracking-widest font-black">
          Guiding your way to our celebrations
        </p>
        <div className="w-28 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-2" />
      </div>

      {/* Main Venue Card */}
      <div className="p-6 rounded-3xl bg-[#FFFDF7] border-2 border-[#D4AF37] shadow-xl space-y-5 text-[#2D0204]">
        
        {/* Palace Icon Badge */}
        <div className="flex items-center justify-center gap-2">
          <span className="text-4xl">🏰</span>
        </div>

        <div className="text-center">
          <span className="font-serif text-[10px] text-[#8C6711] uppercase tracking-widest font-black">
            The Wedding Destination
          </span>
          <h3 className="font-serif text-2xl font-black text-[#7A0C1A] mt-0.5">
            {WEDDING_DATA.couple.mainVenue}
          </h3>
          <p className="font-serif text-xs text-[#5E0613] font-bold mt-1">
            Diplomatic Enclave, Chanakyapuri, New Delhi - 110021
          </p>
        </div>

        {/* Travel Instructions Grid */}
        <div className="space-y-3 pt-3 border-t border-[#D4AF37]/30 text-xs font-bold text-[#2D0204]">
          <div className="flex items-start gap-3 bg-[#FAF6EE] p-3.5 rounded-2xl border border-[#D4AF37]/30">
            <Plane className="w-5 h-5 text-[#7A0C1A] flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-black text-[#7A0C1A] block">By Air</span>
              <span className="text-[11px] text-[#5E0613] font-bold">Indira Gandhi International Airport (DEL) — Approx 15 mins drive.</span>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-[#FAF6EE] p-3.5 rounded-2xl border border-[#D4AF37]/30">
            <Train className="w-5 h-5 text-[#7A0C1A] flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-black text-[#7A0C1A] block">By Rail</span>
              <span className="text-[11px] text-[#5E0613] font-bold">New Delhi Railway Station (NDLS) — Approx 25 mins drive.</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-3 rounded-xl btn-crimson text-xs font-serif font-bold flex items-center justify-center gap-1.5 active:scale-95 shadow-md"
          >
            <Navigation className="w-4 h-4 text-[#FFD700]" />
            <span>Open Maps</span>
          </a>
          
          <button
            onClick={handleCopyAddress}
            className="py-3 px-3 rounded-xl gold-shimmer-btn text-xs font-serif font-black flex items-center justify-center gap-1.5 active:scale-95 shadow-md cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-800" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#2D0204]" />
                <span>Copy Address</span>
              </>
            )}
          </button>
        </div>

        {/* Wedding Helpline Contact */}
        <div className="text-center pt-2 border-t border-[#D4AF37]/20 flex items-center justify-center gap-2 text-xs font-serif font-black text-[#7A0C1A]">
          <Phone className="w-3.5 h-3.5 text-[#7A0C1A]" />
          <span>Wedding Concierge: +91 98765 43210</span>
        </div>

      </div>

    </section>
  );
};

export default VenueSection;
