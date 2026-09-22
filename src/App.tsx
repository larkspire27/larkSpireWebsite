import { useState, useEffect } from 'react';
import { WEDDING_DATA, type RsvpResponse } from './data/weddingData';
import { OpeningCurtains } from './components/OpeningCurtains';
import { FallingPetals } from './components/FallingPetals';
import { MusicPlayer } from './components/MusicPlayer';
import { Navbar } from './components/Navbar';
import { HeaderShloka } from './components/HeaderShloka';
import { HeroCouple } from './components/HeroCouple';
import { CoupleSection } from './components/CoupleSection';
import { CeremoniesSection } from './components/CeremoniesSection';
import { MomentsGallery } from './components/MomentsGallery';
import { VenueSection } from './components/VenueSection';
import { BlessingsWall } from './components/BlessingsWall';
import { RsvpModal } from './components/RsvpModal';
import { HostDashboard } from './components/HostDashboard';
import { FooterClientPitch } from './components/FooterClientPitch';
import { DigitalWeddingCardService } from './components/DigitalWeddingCardService';
import { Send, ShieldCheck, Sparkles } from 'lucide-react';

export function App() {
  const [activeView, setActiveView] = useState<'invitation' | 'service'>('invitation');
  const [hasOpenedEnvelope, setHasOpenedEnvelope] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [selectedCeremonyId] = useState<string | undefined>(undefined);
  
  const [rsvps, setRsvps] = useState<RsvpResponse[]>(() => {
    const saved = localStorage.getItem('wedding_rsvps');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return WEDDING_DATA.initialRsvps;
      }
    }
    return WEDDING_DATA.initialRsvps;
  });

  useEffect(() => {
    localStorage.setItem('wedding_rsvps', JSON.stringify(rsvps));
  }, [rsvps]);

  const handleSaveRsvp = (newRsvp: RsvpResponse) => {
    setRsvps((prev) => [newRsvp, ...prev]);
  };

  const handleNavigate = (sectionId: string) => {
    if (activeView === 'service') {
      setActiveView('invitation');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleEnvelopeOpen = () => {
    setHasOpenedEnvelope(true);
    setIsMusicPlaying(true);
  };

  return (
    <div className="relative min-h-screen bg-[#F3EBDD] text-[#2D0204] selection:bg-[#7A0C1A] selection:text-[#FFFDF0]">
      {/* Falling Flower Petals Canvas */}
      <FallingPetals />

      {/* Opening Wax Seal Envelope Overlay (Only shown on invitation view) */}
      {activeView === 'invitation' && (
        <OpeningCurtains onOpen={handleEnvelopeOpen} />
      )}

      {/* Background Shehnai Music Player */}
      <MusicPlayer autoPlayTriggered={hasOpenedEnvelope} />

      {/* Sticky Navigation Bar with View Switcher */}
      <Navbar 
        isPlaying={isMusicPlaying}
        onToggleMusic={() => setIsMusicPlaying(!isMusicPlaying)}
        onNavigate={handleNavigate}
        activeView={activeView}
        onSelectView={(v) => {
          setActiveView(v);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* MAIN VIEW CONTENT */}
      {activeView === 'service' ? (
        <main className="relative max-w-4xl mx-auto min-h-screen bg-[#FAF6EE] shadow-2xl border-x border-[#D4AF37]/50 pb-20">
          <DigitalWeddingCardService 
            onViewSampleDemo={() => {
              setActiveView('invitation');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />

          {/* Sticky Mobile Floating Navigation Bar for Service View */}
          <div className="fixed bottom-0 inset-x-0 z-40 p-3 bg-[#FFFDF7]/98 border-t-2 border-[#D4AF37] backdrop-blur-xl flex items-center justify-around max-w-4xl mx-auto shadow-[0_-10px_30px_rgba(184,134,11,0.2)]">
            <a
              href="https://wa.me/919928196424?text=Hi%20LarkSpire%20Team!%20I%20want%20to%20order%20a%20digital%20wedding%20invitation%20card%20in%20Jaipur."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 max-w-xs py-3 px-4 rounded-full btn-crimson text-[#FFFDF0] font-black font-serif text-xs sm:text-sm tracking-wider uppercase shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform border border-[#FFD700] cursor-pointer"
            >
              <Send className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
              <span>Order On WhatsApp (+91 9928196424)</span>
            </a>

            <button
              onClick={() => {
                setActiveView('invitation');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="py-2.5 px-4 rounded-full bg-[#FFFDF7] border-2 border-[#7A0C1A] text-[#7A0C1A] font-serif text-xs font-black flex items-center justify-center gap-1.5 hover:bg-[#7A0C1A] hover:text-[#FFFDF0] transition-all ml-2 shadow-md cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>View Sample Card</span>
            </button>
          </div>
        </main>
      ) : (
        <main className="relative max-w-md mx-auto min-h-screen bg-gradient-to-b from-[#FFFDF7] via-[#FAF6EE] to-[#F5EBDD] shadow-[0_0_60px_rgba(184,134,11,0.25)] border-x-2 border-[#D4AF37] pb-20">
          
          {/* Decorative Top Ribbon */}
          <div className="absolute inset-x-0 top-0 h-3 bg-gradient-to-r from-[#D4AF37] via-[#FFF5D6] to-[#D4AF37]" />

          {/* Header Sanskrit Invocation */}
          <HeaderShloka />

          {/* Hero Section & Countdown */}
          <HeroCouple />

          {/* Couple Profiles & Love Story */}
          <CoupleSection />

          {/* Events & Ceremonies */}
          <CeremoniesSection />

          {/* Moments Gallery */}
          <MomentsGallery />

          {/* Venue & Travel Directions */}
          <VenueSection />

          {/* Unified RSVP & Wishes Feed */}
          <BlessingsWall />

          {/* Footer Business Pitch & Link to Service Page */}
          <FooterClientPitch 
            onOpenServicePage={() => {
              setActiveView('service');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />

          {/* Sticky Mobile Floating Navigation Bar */}
          <div className="fixed bottom-0 inset-x-0 z-40 p-3 bg-[#FFFDF7]/98 border-t-2 border-[#D4AF37] backdrop-blur-xl flex items-center justify-around max-w-md mx-auto shadow-[0_-10px_30px_rgba(184,134,11,0.2)]">
            <button
              onClick={() => handleNavigate('rsvp')}
              className="flex-1 max-w-[220px] py-3 px-4 rounded-full btn-crimson text-[#FFFDF0] font-black font-serif text-xs sm:text-sm tracking-wider uppercase shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform border border-[#FFD700] cursor-pointer"
            >
              <Send className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
              <span>Send Wishes & RSVP</span>
            </button>

            <button
              onClick={() => setIsDashboardOpen(true)}
              className="py-2.5 px-3.5 rounded-full bg-[#FFFDF7] border-2 border-[#7A0C1A] text-[#7A0C1A] font-serif text-xs font-black flex items-center justify-center gap-1.5 hover:bg-[#7A0C1A] hover:text-[#FFFDF0] transition-all ml-2 shadow-md cursor-pointer"
              title="Host Admin Dashboard"
            >
              <ShieldCheck className="w-4 h-4 text-[#7A0C1A]" />
              <span>Admin</span>
              <span className="px-1.5 py-0.5 rounded-full bg-[#7A0C1A] text-[#FFFDF0] text-[10px] font-black">
                {rsvps.length}
              </span>
            </button>
          </div>
        </main>
      )}

      {/* RSVP Modal */}
      <RsvpModal
        isOpen={isRsvpOpen}
        initialCeremonyId={selectedCeremonyId}
        onClose={() => setIsRsvpOpen(false)}
        onSaveRsvp={handleSaveRsvp}
      />

      {/* Host Live Dashboard Drawer */}
      <HostDashboard
        isOpen={isDashboardOpen}
        rsvps={rsvps}
        onClose={() => setIsDashboardOpen(false)}
      />
    </div>
  );
}

export default App;
