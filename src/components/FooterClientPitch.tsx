import React from 'react';
import { Sparkles, MessageCircle, ShieldCheck, Smartphone, QrCode, Globe, PhoneCall } from 'lucide-react';
import { AnimatedOrnaments } from './AnimatedOrnaments';

interface FooterClientPitchProps {
  onOpenServicePage?: () => void;
}

export const FooterClientPitch: React.FC<FooterClientPitchProps> = ({ onOpenServicePage }) => {
  const contactWhatsApp = `https://wa.me/919928196424?text=${encodeURIComponent(
    'Namaste LarkSpire! I am looking for Digital Wedding Invitation Online in Jaipur. Please share options and designs.'
  )}`;

  return (
    <footer className="relative w-full bg-[#FAF6EE] border-t-2 border-[#D4AF37]/50 text-[#2D0204] py-12 px-4 mt-12 text-center space-y-8 overflow-hidden">
      
      {/* Animated Subtle Background Ornaments */}
      <AnimatedOrnaments variant="hero" />

      <div className="relative z-10 max-w-md mx-auto space-y-8">
        
        {/* Monogram Footer Badge */}
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7A0C1A] to-[#4A040E] border-2 border-[#FFD700] text-[#FFD700] font-serif font-black text-base flex items-center justify-center shadow-lg">
            A&R
          </div>
          <p className="font-serif text-base font-black text-[#7A0C1A]">
            Ananya & Rohan
          </p>
          <p className="font-serif text-xs text-[#8C6711] font-black uppercase tracking-widest">
            #AnanyaWedsRohan • 28th November 2026
          </p>
          <p className="font-serif text-xs text-[#5E0613]/90 italic font-semibold">
            With love & blessings from Sharma & Verma families
          </p>
        </div>

        {/* LarkSpire Client Pitch Card */}
        <div id="digital-wedding-card-service-pitch" className="p-6 rounded-3xl bg-[#FFFDF7] border-2 border-[#D4AF37] shadow-xl space-y-5 text-center">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#7A0C1A] text-[#FFFDF0] font-serif font-black text-xs shadow-md border border-[#FFD700]">
            <Sparkles className="w-4 h-4 text-[#FFD700]" />
            <span>LarkSpire • Digital Solutions Jaipur</span>
          </div>

          <h3 className="font-serif text-2xl font-black text-[#7A0C1A]">
            Digital Wedding Invitation Online in Jaipur
          </h3>

          <p className="font-body text-xs sm:text-sm text-[#4A040E] leading-relaxed font-bold">
            Create stunning animated digital wedding cards & online shaadi websites in Jaipur! Impress your guests with interactive maps, live background Shehnai music, and instant WhatsApp RSVPs.
          </p>

          <div className="grid grid-cols-2 gap-3 text-left text-xs text-[#2D0204] font-bold pt-2 border-t border-[#D4AF37]/30">
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-[#7A0C1A] flex-shrink-0" />
              <span>Mobile-First Responsive</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-emerald-700 flex-shrink-0" />
              <span>Automatic WhatsApp RSVP</span>
            </div>
            <div className="flex items-center gap-2">
              <QrCode className="w-4 h-4 text-[#7A0C1A] flex-shrink-0" />
              <span>Digital QR Guest Pass</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#7A0C1A] flex-shrink-0" />
              <span>24-48 Hour Express Delivery</span>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            {onOpenServicePage && (
              <button
                onClick={onOpenServicePage}
                className="w-full py-3.5 px-6 rounded-full bg-[#7A0C1A] text-[#FFD700] font-black font-serif text-xs sm:text-sm tracking-wider uppercase shadow-lg flex items-center justify-center gap-2 hover:bg-[#5E0613] transition-all cursor-pointer border border-[#FFD700]"
              >
                <Sparkles className="w-4 h-4 text-[#FFD700]" />
                <span>Explore Digital Card Service Page</span>
              </button>
            )}

            <a
              href={contactWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-full btn-crimson text-[#FFFDF0] font-black font-serif text-xs sm:text-sm tracking-widest uppercase shadow-xl flex items-center justify-center gap-2.5 hover:scale-105 active:scale-95 transition-transform cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
              <span>Order On WhatsApp (+91 9928196424)</span>
            </a>
          </div>

          <div className="text-[11px] text-[#8C6711] font-serif pt-2 border-t border-[#D4AF37]/20 flex justify-center gap-4 font-bold">
            <span className="flex items-center gap-1"><PhoneCall className="w-3 h-3" /> +91 9928196424</span>
            <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> larkspire.in</span>
          </div>
        </div>

        <div className="text-xs text-[#8C6711] font-serif space-y-1 font-bold">
          <p>© 2026 LarkSpire Digital Solutions. All Rights Reserved.</p>
          <p>Designed with ❤️ for Luxury Royal Indian Weddings in Jaipur</p>
        </div>

      </div>
    </footer>
  );
};

export default FooterClientPitch;
