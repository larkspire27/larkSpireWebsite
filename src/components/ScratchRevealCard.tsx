import React, { useState } from 'react';
import { Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ScratchRevealCard: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.5 },
        colors: ['#FFD700', '#FF8C00', '#D4AF37']
      });
    } catch {
      // fallback
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto px-4 my-6">
      <div className="relative rounded-3xl overflow-hidden border-2 border-[#D4AF37] shadow-[0_15px_35px_rgba(0,0,0,0.9)] bg-gradient-to-b from-[#2b0404] via-[#1d0303] to-[#120101] text-center p-6">
        {!isRevealed ? (
          <div className="flex flex-col items-center justify-center py-6">
            <Sparkles className="w-8 h-8 text-[#FFD700] animate-spin mb-3" style={{ animationDuration: '6s' }} />
            <h3 className="font-serif text-xl font-black text-[#FFD700] tracking-wide mb-1 text-gold-bright">
              Tap to Reveal Our Love Story
            </h3>
            <p className="font-serif text-xs text-[#FFF5D6] font-bold mb-5">
              Touch below to unveil a special message from Ananya & Rohan
            </p>
            <button
              onClick={handleReveal}
              className="px-6 py-3.5 rounded-full gold-shimmer-btn text-[#2D0202] font-black font-serif text-xs tracking-widest uppercase shadow-lg border-2 border-[#FFF8D6] transform active:scale-95 transition-transform flex items-center gap-2"
            >
              <Heart className="w-4 h-4 fill-[#2D0202] text-[#2D0202]" />
              <span>Tap to Reveal</span>
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center py-4 animate-fade-in">
            <span className="text-3xl mb-2">💖</span>
            <h3 className="font-script text-3xl text-[#FFD700] font-bold mb-2 drop-shadow">
              Two Hearts, One Eternal Journey
            </h3>
            <p className="font-serif text-xs sm:text-sm text-[#FFFDF0] leading-relaxed italic max-w-xs font-bold">
              "From college coffee breaks in Delhi to watching Udaipur sunsets together, our story has been filled with laughter, endless talks, and deep love. Today, we step into forever."
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-[#FFD700] font-serif font-black">
              <span>Ananya & Rohan</span>
              <span>•</span>
              <span>#AnanyaWedsRohan</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScratchRevealCard;
