import React from 'react';
import { AnimatedOrnaments } from './AnimatedOrnaments';

export const MomentsGallery: React.FC = () => {
  const galleryImages = [
    { src: '/images/couple_portrait.png', title: 'Eternal Bond', subtitle: 'Pre-Wedding Shoot' },
    { src: '/images/mehendi_setup.png', title: 'Color of Love', subtitle: 'Mehendi Moments' },
    { src: '/images/dhol_dance_scene.png', title: 'Rhythm & Beats', subtitle: 'Sangeet Night' },
    { src: '/images/mandap_pheras.png', title: 'Sacred Vows', subtitle: 'The Royal Mandap' },
  ];

  return (
    <section id="moments" className="relative w-full max-w-md mx-auto px-4 py-10 space-y-8 bg-[#FAF6EE] overflow-hidden">
      
      {/* Animated Subtle Background Ornaments */}
      <AnimatedOrnaments variant="moments" />

      {/* Section Header */}
      <div className="relative z-10 text-center space-y-1">
        <span className="font-hindi text-[#7A0C1A] text-sm font-black">❖ यादगार पल ❖</span>
        <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#7A0C1A] drop-shadow-sm">
          Moments & Memories
        </h2>
        <p className="font-serif text-xs text-[#8C6711] uppercase tracking-widest font-black">
          Glimpses of our golden journey
        </p>
        <div className="w-28 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-2" />
      </div>

      {/* Photo Gallery Grid */}
      <div className="grid grid-cols-2 gap-4">
        {galleryImages.map((img, idx) => (
          <div
            key={idx}
            className="group relative rounded-3xl overflow-hidden border-2 border-[#D4AF37] shadow-lg bg-[#FFFDF7] aspect-square transition-transform duration-500 hover:scale-105"
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
            
            <div className="absolute bottom-3 left-3 right-3 text-left">
              <span className="font-serif text-[10px] text-[#FFD700] font-black uppercase tracking-widest block drop-shadow">
                {img.subtitle}
              </span>
              <span className="font-serif text-xs font-black text-[#FFFDF0] drop-shadow-md">
                {img.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MomentsGallery;
