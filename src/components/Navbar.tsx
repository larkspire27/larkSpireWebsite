import React from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

interface NavbarProps {
  isPlaying: boolean;
  onToggleMusic: () => void;
  onNavigate: (sectionId: string) => void;
  activeView?: 'invitation' | 'service';
  onSelectView?: (view: 'invitation' | 'service') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  isPlaying, 
  onToggleMusic, 
  onNavigate,
  activeView = 'invitation',
  onSelectView 
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFFDF7]/95 backdrop-blur-md border-b-2 border-[#D4AF37] shadow-md px-3 sm:px-4 py-2.5">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">
        
        {/* Monogram Logo */}
        <button 
          onClick={() => {
            if (onSelectView) onSelectView('invitation');
            onNavigate('hero');
          }}
          className="flex items-center gap-1.5 focus:outline-none text-left cursor-pointer flex-shrink-0"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7A0C1A] to-[#4A040E] border border-[#FFD700] flex items-center justify-center text-[#FFD700] font-serif font-black text-xs shadow-md">
            A&R
          </div>
          <span className="font-serif text-xs sm:text-sm font-black text-[#7A0C1A] tracking-wider hidden sm:inline">
            Ananya & Rohan
          </span>
        </button>

        {/* View Switcher Tabs & Quick Links */}
        <nav className="flex items-center gap-2 sm:gap-4 text-xs font-serif font-black text-[#7A0C1A] tracking-wider">
          <button 
            onClick={() => {
              if (onSelectView) onSelectView('invitation');
              onNavigate('hero');
            }} 
            className={`px-2.5 py-1 rounded-full transition-colors cursor-pointer ${
              activeView === 'invitation' ? 'bg-[#7A0C1A] text-[#FFFDF0]' : 'hover:text-[#941122]'
            }`}
          >
            Invitation
          </button>

          {activeView === 'invitation' && (
            <>
              <button 
                onClick={() => onNavigate('events')} 
                className="hover:text-[#941122] transition-colors cursor-pointer hidden sm:inline"
              >
                Events
              </button>
              <button 
                onClick={() => onNavigate('venue')} 
                className="hover:text-[#941122] transition-colors cursor-pointer hidden sm:inline"
              >
                Venue
              </button>
            </>
          )}

          {/* Service Page Button */}
          <button 
            onClick={() => {
              if (onSelectView) onSelectView('service');
            }} 
            className={`px-2.5 py-1 rounded-full flex items-center gap-1 transition-all cursor-pointer border ${
              activeView === 'service' 
                ? 'bg-[#7A0C1A] text-[#FFD700] border-[#FFD700] shadow-md' 
                : 'bg-[#FFD700]/20 text-[#7A0C1A] border-[#D4AF37] hover:bg-[#7A0C1A] hover:text-[#FFFDF0]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Digital Card Service</span>
          </button>
        </nav>

        {/* Audio Control Button */}
        <button
          onClick={onToggleMusic}
          className="w-8 h-8 rounded-full bg-[#FFFDF7] border-2 border-[#D4AF37] text-[#7A0C1A] flex items-center justify-center hover:bg-[#7A0C1A] hover:text-[#FFFDF0] transition-all shadow-md active:scale-95 cursor-pointer flex-shrink-0"
          title={isPlaying ? "Mute Background Shehnai" : "Play Royal Shehnai Music"}
        >
          {isPlaying ? (
            <Volume2 className="w-4 h-4 text-[#7A0C1A] animate-pulse" />
          ) : (
            <VolumeX className="w-4 h-4 text-[#7A0C1A]/60" />
          )}
        </button>

      </div>
    </header>
  );
};

export default Navbar;
