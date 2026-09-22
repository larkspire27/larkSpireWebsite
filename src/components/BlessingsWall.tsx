import React, { useState } from 'react';
import { WEDDING_DATA } from '../data/weddingData';
import { Heart, Send, Check, UserCheck, Phone, Users } from 'lucide-react';
import confetti from 'canvas-confetti';
import { AnimatedOrnaments } from './AnimatedOrnaments';

export const BlessingsWall: React.FC = () => {
  const [blessings, setBlessings] = useState(WEDDING_DATA.initialBlessings);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [attendance, setAttendance] = useState<'attending' | 'declined'>('attending');
  const [guestCount, setGuestCount] = useState('2');
  const [selectedEvents, setSelectedEvents] = useState<string[]>(['Vivah', 'Reception', 'Sangeet']);
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableEvents = ['Haldi', 'Mehendi', 'Sangeet', 'Vivah', 'Reception'];

  const toggleEvent = (event: string) => {
    if (selectedEvents.includes(event)) {
      setSelectedEvents(selectedEvents.filter(e => e !== event));
    } else {
      setSelectedEvents([...selectedEvents, event]);
    }
  };

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    if (message.trim()) {
      const newBlessing = {
        id: `blessing-${Date.now()}`,
        name: name.trim(),
        message: message.trim(),
        date: 'Just now'
      };
      setBlessings([newBlessing, ...blessings]);
    }

    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.7 },
        colors: ['#D4AF37', '#7A0C1A', '#FFFDF0', '#FFD700']
      });
    } catch {
      // fallback
    }

    setTimeout(() => {
      setName('');
      setPhone('');
      setMessage('');
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section id="rsvp" className="relative w-full max-w-md mx-auto px-4 py-10 space-y-8 bg-[#FAF6EE] overflow-hidden">
      
      {/* Animated Subtle Background Ornaments */}
      <AnimatedOrnaments variant="rsvp" />

      {/* Section Header */}
      <div className="relative z-10 text-center space-y-1">
        <span className="font-hindi text-[#7A0C1A] text-sm font-black">❖ उपस्थिति एवं आशीर्वाद ❖</span>
        <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#7A0C1A] drop-shadow-sm">
          Will You Join Us?
        </h2>
        <p className="font-serif text-xs text-[#8C6711] uppercase tracking-widest font-black">
          Kindly confirm your presence & send your wishes
        </p>
        <div className="w-28 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-2" />
      </div>

      {/* Unified RSVP Form Card */}
      <div className="p-6 rounded-3xl bg-[#FFFDF7] border-2 border-[#D4AF37] shadow-xl space-y-5 text-[#2D0204]">
        
        {isSubmitted ? (
          <div className="text-center py-8 space-y-3 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#7A0C1A] to-[#5E0613] text-[#FFD700] mx-auto flex items-center justify-center border-2 border-[#FFD700] shadow-lg">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-black text-[#7A0C1A]">
              Shagun Received!
            </h3>
            <p className="font-serif text-xs text-[#5E0613] font-bold leading-relaxed max-w-xs mx-auto">
              Thank you for confirming your presence and blessing Ananya & Rohan. We look forward to celebrating with you!
            </p>
          </div>
        ) : (
          <form onSubmit={handleRsvpSubmit} className="space-y-4">
            
            {/* Attendance Status Pills */}
            <div className="space-y-1.5">
              <label className="font-serif text-xs font-black uppercase tracking-wider text-[#7A0C1A] block">
                Will you attend the wedding?
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setAttendance('attending')}
                  className={`py-3 px-3 rounded-xl font-serif text-xs font-black transition-all flex items-center justify-center gap-1.5 shadow cursor-pointer ${
                    attendance === 'attending'
                      ? 'btn-crimson'
                      : 'bg-[#FAF6EE] text-[#7A0C1A] border border-[#D4AF37]/50'
                  }`}
                >
                  <UserCheck className="w-4 h-4" />
                  <span>Joyfully Accepts</span>
                </button>

                <button
                  type="button"
                  onClick={() => setAttendance('declined')}
                  className={`py-3 px-3 rounded-xl font-serif text-xs font-black transition-all flex items-center justify-center gap-1.5 shadow cursor-pointer ${
                    attendance === 'declined'
                      ? 'bg-[#5E0613] text-[#FFFDF0] border border-[#FFD700]'
                      : 'bg-[#FAF6EE] text-[#7A0C1A] border border-[#D4AF37]/50'
                  }`}
                >
                  <span>Regretfully Declines</span>
                </button>
              </div>
            </div>

            {/* Guest Name & Phone */}
            <div className="space-y-3">
              <div>
                <label className="font-serif text-xs font-black uppercase tracking-wider text-[#7A0C1A] block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Uncle / Priya Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF6EE] border-2 border-[#D4AF37]/60 text-xs sm:text-sm text-[#2D0204] placeholder-[#7A0C1A]/40 font-bold focus:outline-none focus:border-[#7A0C1A]"
                />
              </div>

              <div>
                <label className="font-serif text-xs font-black uppercase tracking-wider text-[#7A0C1A] block mb-1">
                  WhatsApp / Phone Number
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#7A0C1A] absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF6EE] border-2 border-[#D4AF37]/60 text-xs sm:text-sm text-[#2D0204] placeholder-[#7A0C1A]/40 font-bold focus:outline-none focus:border-[#7A0C1A]"
                  />
                </div>
              </div>
            </div>

            {/* Events Selection Chips */}
            {attendance === 'attending' && (
              <div className="space-y-2">
                <label className="font-serif text-xs font-black uppercase tracking-wider text-[#7A0C1A] block">
                  Select Events You Will Attend
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableEvents.map((event) => {
                    const isSelected = selectedEvents.includes(event);
                    return (
                      <button
                        type="button"
                        key={event}
                        onClick={() => toggleEvent(event)}
                        className={`py-1.5 px-3 rounded-full text-xs font-serif font-black transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#7A0C1A] text-[#FFFDF0] border border-[#FFD700]'
                            : 'bg-[#FAF6EE] text-[#7A0C1A] border border-[#D4AF37]/60'
                        }`}
                      >
                        {isSelected ? `✓ ${event}` : `+ ${event}`}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Guest Count */}
            {attendance === 'attending' && (
              <div>
                <label className="font-serif text-xs font-black uppercase tracking-wider text-[#7A0C1A] block mb-1">
                  Number of Guests Attending
                </label>
                <div className="relative">
                  <Users className="w-4 h-4 text-[#7A0C1A] absolute left-3.5 top-3.5" />
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF6EE] border-2 border-[#D4AF37]/60 text-xs sm:text-sm text-[#2D0204] font-bold focus:outline-none focus:border-[#7A0C1A]"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5+">5+ Family Members</option>
                  </select>
                </div>
              </div>
            )}

            {/* Blessings & Wishes Textarea */}
            <div>
              <label className="font-serif text-xs font-black uppercase tracking-wider text-[#7A0C1A] block mb-1">
                Your Shagun & Blessings for Couple
              </label>
              <textarea
                rows={3}
                placeholder="Write your heartfelt wishes for Ananya & Rohan..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF6EE] border-2 border-[#D4AF37]/60 text-xs sm:text-sm text-[#2D0204] placeholder-[#7A0C1A]/40 font-bold focus:outline-none focus:border-[#7A0C1A] resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-full btn-crimson font-black font-serif text-xs sm:text-sm tracking-widest uppercase shadow-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-transform cursor-pointer"
            >
              <Send className="w-4 h-4 text-[#FFD700] fill-[#FFD700]" />
              <span>SEND RSVP & BLESSINGS</span>
            </button>

          </form>
        )}

      </div>

      {/* Wishes Feed */}
      <div className="space-y-3.5">
        <h3 className="font-serif text-sm font-black text-[#7A0C1A] uppercase tracking-widest text-center">
          💌 Heartfelt Wishes From Family & Friends
        </h3>
        {blessings.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-2xl bg-[#FFFDF7] text-[#2D0204] border-2 border-[#D4AF37] shadow-md space-y-1.5"
          >
            <div className="flex items-center justify-between border-b border-[#D4AF37]/30 pb-1.5">
              <span className="font-serif font-black text-xs sm:text-sm flex items-center gap-1.5 text-[#7A0C1A]">
                <Heart className="w-4 h-4 fill-[#7A0C1A] text-[#7A0C1A]" />
                {item.name}
              </span>
              <span className="text-[10px] text-[#5E0613] font-serif font-bold">{item.date}</span>
            </div>
            <p className="font-serif text-xs sm:text-sm leading-relaxed text-[#2D0204] italic pt-0.5 font-bold">
              "{item.message}"
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default BlessingsWall;
