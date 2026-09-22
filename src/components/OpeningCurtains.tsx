import React, { useState } from 'react';
import confetti from 'canvas-confetti';

interface OpeningCurtainsProps {
  onOpen: () => void;
}

export const OpeningCurtains: React.FC<OpeningCurtainsProps> = ({ onOpen }) => {
  const [step, setStep] = useState<'closed' | 'opening' | 'opened'>('closed');

  const handleOpenEnvelope = () => {
    if (step !== 'closed') return;

    // Trigger golden confetti particle burst
    try {
      confetti({
        particleCount: 95,
        spread: 120,
        origin: { y: 0.55 },
        colors: ['#D4AF37', '#FFD700', '#C5A059', '#FAF7F2', '#7A0C1A']
      });
    } catch {
      // fallback
    }

    setStep('opening');

    // Smooth sequence:
    // 0ms: V-flap flips 180° in 3D
    // 300ms: Envelope slides UP off-screen revealing website Hero Section directly!
    // 900ms: Unmount curtain
    setTimeout(() => {
      setStep('opened');
      onOpen();
    }, 950);
  };

  if (step === 'opened') return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col justify-between items-center envelope-overlay-bg env-curtain-transition overflow-hidden ${
        step === 'opening' ? 'env-curtain-slide-up' : ''
      }`}
    >
      {/* Top Ornamental Gold Trim */}
      <div className="w-full h-3 bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#B8860B] shadow-md z-10" />

      {/* Main Centered Physical Envelope */}
      <div className="relative w-full max-w-sm sm:max-w-md flex-1 flex flex-col items-center justify-center p-4 perspective-container">
        
        {/* Envelope Body Frame */}
        <div className="relative w-full h-[420px] sm:h-[460px] preserve-3d rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden bg-ivory-card border-2 border-[#C5A059]">
          
          {/* Inner Lining Floor */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2] to-[#F3EEE5] flex flex-col items-center justify-start pt-8">
            <span className="text-3xl text-[#D4AF37] opacity-60">🔱</span>
            <span className="font-hindi text-xs text-[#7A0C1A] font-bold mt-1">॥ श्री गणेशाय नमः ॥</span>
          </div>

          {/* Envelope Bottom Pocket Flap */}
          <div 
            className="absolute bottom-0 inset-x-0 h-[62%] bg-ivory-card border-t border-[#C5A059]/40 shadow-[0_-8px_25px_rgba(0,0,0,0.15)] z-20"
            style={{ clipPath: 'polygon(0 45%, 50% 0, 100% 45%, 100% 100%, 0 100%)' }}
          >
            <div className="flex items-end justify-center h-full pb-4">
              <span className="font-serif text-[10px] text-[#7A0C1A] font-bold uppercase tracking-[0.3em]">
                Ananya & Rohan
              </span>
            </div>
          </div>

          {/* Top V-Flap (Folds DOWN initially, opens UP 180deg when clicked) */}
          <div className={`env-v-flap ${step === 'opening' ? 'env-v-flap-open' : ''}`} />

          {/* 3D Gold-Maroon Antique Wax Seal Button */}
          <button
            onClick={handleOpenEnvelope}
            disabled={step !== 'closed'}
            className={`env-wax-seal-container ${
              step === 'closed' ? 'animate-seal-pulse' : 'opacity-0 pointer-events-none scale-125'
            }`}
            aria-label="Tap to open wedding invitation"
          >
            <div className="env-wax-seal-disk">
              <div className="env-wax-seal-inner">
                <span className="text-2xl font-serif font-black text-[#FFD700] text-shadow-gold">
                  A & R
                </span>
                <span className="text-[8px] font-black tracking-widest text-[#F7E7CE] uppercase mt-0.5">
                  OPEN SEAL
                </span>
              </div>
            </div>
          </button>

        </div>
      </div>

      {/* Bottom Minimal Spaced Tap Prompt */}
      <div className="w-full pb-8 text-center z-40">
        <button
          onClick={handleOpenEnvelope}
          disabled={step !== 'closed'}
          className="font-serif text-xs sm:text-sm text-[#F7E7CE] tracking-[0.4em] uppercase font-bold hover:text-[#FFD700] transition-colors cursor-pointer active:scale-95"
        >
          {step === 'closed' ? 'T A P   T O   O P E N' : 'O P E N I N G . . .'}
        </button>
      </div>

    </div>
  );
};

export default OpeningCurtains;
