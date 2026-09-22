import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

interface MusicPlayerProps {
  autoPlayTriggered: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoPlayTriggered }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Royalty free Shehnai / Traditional Flute wedding background music audio URL
  const audioSrc = 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=indian-instrumental-flute-112836.mp3';

  useEffect(() => {
    if (autoPlayTriggered && audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay blocked by browser policy until direct click
          setIsPlaying(false);
        });
    }
  }, [autoPlayTriggered]);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log('Audio playback error:', err));
    }
  };

  return (
    <div className="fixed bottom-20 right-4 z-40 flex items-center gap-2">
      <audio ref={audioRef} src={audioSrc} loop preload="auto" />
      
      {/* Playing Status Pill */}
      {isPlaying && (
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-velvetMaroon-dark/95 border border-royalGold/60 text-amber-200 text-xs shadow-xl animate-fade-in">
          <Music className="w-3.5 h-3.5 text-royalGold animate-spin" style={{ animationDuration: '4s' }} />
          <span className="font-serif">Shehnai Melody</span>
          <div className="flex items-end gap-0.5 h-3 ml-1">
            <span className="w-1 bg-royalGold rounded-full animate-bounce h-2" style={{ animationDelay: '0ms' }} />
            <span className="w-1 bg-royalGold rounded-full animate-bounce h-3" style={{ animationDelay: '150ms' }} />
            <span className="w-1 bg-royalGold rounded-full animate-bounce h-1.5" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? "Mute Wedding Music" : "Play Wedding Music"}
        className={`relative w-12 h-12 rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(212,175,55,0.5)] transition-all transform hover:scale-110 active:scale-95 border-2 ${
          isPlaying
            ? 'bg-gradient-to-r from-royalGold via-amber-200 to-royalGold text-velvetMaroon-dark border-amber-100 animate-pulse-glow'
            : 'bg-velvetMaroon-dark/90 text-royalGold border-royalGold/60'
        }`}
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 animate-pulse" />
        ) : (
          <VolumeX className="w-6 h-6 text-amber-200/80" />
        )}
      </button>
    </div>
  );
};
