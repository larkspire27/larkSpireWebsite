import React from 'react';

interface AnimatedOrnamentsProps {
  variant?: 'hero' | 'couple' | 'events' | 'moments' | 'venue' | 'rsvp';
}

export const AnimatedOrnaments: React.FC<AnimatedOrnamentsProps> = ({ variant = 'hero' }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      
      {/* ---------------------------------------------------------------- */}
      {/* HERO VARIANT: Corner Brackets + Cropped Mandala + Subtle Dots */}
      {/* ---------------------------------------------------------------- */}
      {variant === 'hero' && (
        <>
          {/* Subtle Dotted Pattern Grid */}
          <div className="absolute inset-0 opacity-8 bg-[radial-gradient(#8C6711_1px,transparent_1px)] [background-size:20px_20px]" />

          {/* Corner Ornamental Elements */}
          <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-[#D4AF37]/40 rounded-tl" />
          <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-[#D4AF37]/40 rounded-tr" />

          {/* Half-Cut Circle / Partially Cropped Circular Motif */}
          <svg 
            className="absolute -top-20 -left-20 w-72 h-72 text-[#C5A059] opacity-10 animate-rotate-slow" 
            viewBox="0 0 200 200" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.8"
          >
            <circle cx="100" cy="100" r="90" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="70" />
            <circle cx="100" cy="100" r="50" strokeDasharray="6 3" />
          </svg>

          {/* Sparkles */}
          <div className="absolute top-1/4 right-6 text-[#D4AF37] opacity-20 text-xs animate-float-slow">✦</div>
        </>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* COUPLE VARIANT: Floral Line-Art Motif + Subtle Wave */}
      {/* ---------------------------------------------------------------- */}
      {variant === 'couple' && (
        <>
          {/* Flower Motif (Floral line-art) */}
          <svg 
            className="absolute top-10 -right-16 w-56 h-56 text-[#7A0C1A] opacity-8 animate-float-slow" 
            viewBox="0 0 100 100" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.8"
          >
            <path d="M50 10 C30 30 30 70 50 90 C70 70 70 30 50 10 Z" />
            <path d="M10 50 C30 30 70 30 90 50 C70 70 30 70 10 50 Z" />
            <circle cx="50" cy="50" r="14" strokeDasharray="2 2" />
          </svg>

          {/* Abstract Wave Line */}
          <svg 
            className="absolute bottom-10 inset-x-0 w-full h-20 text-[#D4AF37] opacity-10 animate-wave-pulse" 
            viewBox="0 0 400 100" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.6"
          >
            <path d="M0 50 Q100 20 200 50 T400 50" />
          </svg>
        </>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* EVENTS VARIANT: Traditional Indian Paisley Motif */}
      {/* ---------------------------------------------------------------- */}
      {variant === 'events' && (
        <>
          {/* Traditional Indian Pattern / Paisley Motif */}
          <svg 
            className="absolute bottom-10 -left-14 w-56 h-56 text-[#7A0C1A] opacity-8 animate-rotate-slow" 
            viewBox="0 0 100 100" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.8"
          >
            <path d="M50 5 C25 25 15 50 30 75 C45 100 80 95 90 70 C100 45 75 25 50 5 Z" />
            <circle cx="55" cy="55" r="18" strokeDasharray="2 2" />
          </svg>

          {/* Subtle Sparkle */}
          <div className="absolute top-12 right-8 text-[#8C6711] opacity-20 text-xs animate-float-reverse">❖</div>
        </>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* MOMENTS VARIANT: Geometric Line-Art Ornament */}
      {/* ---------------------------------------------------------------- */}
      {variant === 'moments' && (
        <>
          {/* Thin Geometric Shapes */}
          <svg 
            className="absolute top-1/3 -right-16 w-52 h-52 text-[#8C6711] opacity-8 animate-float-slow" 
            viewBox="0 0 200 200" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.8"
          >
            <polygon points="100,10 190,100 100,190 10,100" />
            <polygon points="100,30 170,100 100,170 30,100" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="35" />
          </svg>
        </>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* VENUE VARIANT: Decorative Ornamental Arcs & Gold Graphics */}
      {/* ---------------------------------------------------------------- */}
      {variant === 'venue' && (
        <>
          {/* Curved Lines / Arcs */}
          <svg
            className="absolute top-10 -left-10 w-44 h-44 text-[#8C6711] opacity-10 animate-float-reverse"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
          >
            <path d="M10 50 A 40 40 0 0 1 90 50" strokeDasharray="3 3" />
            <path d="M20 50 A 30 30 0 0 1 80 50" />
          </svg>

          {/* Fine-Line Gold Graphics */}
          <svg
            className="absolute bottom-6 right-1/2 translate-x-1/2 w-32 h-8 text-[#D4AF37] opacity-15"
            viewBox="0 0 200 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
          >
            <path d="M10 20 L80 20 M120 20 L190 20" strokeDasharray="3 3" />
            <circle cx="100" cy="20" r="5" />
          </svg>
        </>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* RSVP VARIANT: Faint Low-Opacity Watermark Mandala */}
      {/* ---------------------------------------------------------------- */}
      {variant === 'rsvp' && (
        <>
          {/* Faint Background Design Watermark */}
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 text-[#8C6711] opacity-6 animate-faint-glow"
            viewBox="0 0 200 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          >
            <circle cx="100" cy="100" r="90" strokeDasharray="2 4" />
            <circle cx="100" cy="100" r="75" />
            <path d="M100 5 C50 50 50 150 100 195 C150 150 150 50 100 5 Z" />
          </svg>

          {/* Corner Accents */}
          <div className="absolute bottom-2 left-2 w-6 h-6 border-b border-l border-[#D4AF37]/40 rounded-bl" />
          <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-[#D4AF37]/40 rounded-br" />
        </>
      )}

    </div>
  );
};

export default AnimatedOrnaments;


