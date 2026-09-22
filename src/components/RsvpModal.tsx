import React, { useState } from 'react';
import { type RsvpResponse, WEDDING_DATA } from '../data/weddingData';
import { DigitalPass } from './DigitalPass';
import { Send, CheckCircle, X, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

interface RsvpModalProps {
  isOpen: boolean;
  initialCeremonyId?: string;
  onClose: () => void;
  onSaveRsvp: (newRsvp: RsvpResponse) => void;
}

export const RsvpModal: React.FC<RsvpModalProps> = ({
  isOpen,
  initialCeremonyId,
  onClose,
  onSaveRsvp,
}) => {
  const [attending, setAttending] = useState<'yes' | 'no'>('yes');
  const [guestName, setGuestName] = useState('');
  const [phone, setPhone] = useState('');
  const [guestCount, setGuestCount] = useState<number>(2);
  const [selectedCeremonies, setSelectedCeremonies] = useState<string[]>(
    initialCeremonyId ? [initialCeremonyId] : ['haldi', 'mehendi', 'pheras', 'reception']
  );
  const [foodPreference, setFoodPreference] = useState<'pure_veg' | 'jain' | 'royal_feast'>('pure_veg');
  const [songRequest, setSongRequest] = useState('');
  const [blessingMessage, setBlessingMessage] = useState('');

  const [submittedRsvp, setSubmittedRsvp] = useState<RsvpResponse | null>(null);

  if (!isOpen) return null;

  const toggleCeremony = (id: string) => {
    if (selectedCeremonies.includes(id)) {
      setSelectedCeremonies(selectedCeremonies.filter((item) => item !== id));
    } else {
      setSelectedCeremonies([...selectedCeremonies, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    const passCode = `VIP-${Math.floor(1000 + Math.random() * 9000)}`;
    const newRsvp: RsvpResponse = {
      id: `rsvp-${Date.now()}`,
      guestName: guestName.trim(),
      phone: phone.trim() || 'N/A',
      attending,
      guestCount: attending === 'yes' ? guestCount : 0,
      ceremonies: attending === 'yes' ? selectedCeremonies : [],
      foodPreference,
      songRequest: songRequest.trim(),
      blessingMessage: blessingMessage.trim(),
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
      passCode,
    };

    onSaveRsvp(newRsvp);
    setSubmittedRsvp(newRsvp);

    try {
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#FF8C00', '#7A0C0C']
      });
    } catch {
      // fallback
    }

    // Format WhatsApp Direct RSVP Message
    const text = encodeURIComponent(
      `*AUTOMATIC WEDDING RSVP - ${WEDDING_DATA.couple.hashtag}*\n` +
      `----------------------------------------\n` +
      `👤 *Guest Name:* ${newRsvp.guestName}\n` +
      `📞 *Phone:* ${newRsvp.phone}\n` +
      `✨ *Attending Status:* ${newRsvp.attending === 'yes' ? '✅ Joyfully Accepts!' : '❌ Regretfully Declines'}\n` +
      (newRsvp.attending === 'yes' ? 
        `👥 *Number of Guests:* ${newRsvp.guestCount}\n` +
        `🍱 *Meal Preference:* ${newRsvp.foodPreference.replace('_', ' ').toUpperCase()}\n` +
        `🎵 *Sangeet Song:* ${newRsvp.songRequest || 'Surprise us!'}\n` +
        `🎫 *Pass Code:* ${newRsvp.passCode}\n` : '') +
      `💖 *Blessings:* "${newRsvp.blessingMessage || 'Best wishes!'}"`
    );

    const whatsappUrl = `https://wa.me/${WEDDING_DATA.couple.contactPhone}?text=${text}`;
    
    // Open WhatsApp link in new tab if requested
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 500);
  };

  if (submittedRsvp) {
    return <DigitalPass rsvp={submittedRsvp} onClose={onClose} />;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-sm rounded-3xl bg-gradient-to-b from-[#2d0505] via-[#4a0404] to-[#120303] border-2 border-royalGold p-6 text-warmIvory shadow-2xl">
        
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-amber-900/50 border border-royalGold/40 text-amber-200 flex items-center justify-center hover:bg-amber-300 hover:text-amber-950 transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-5">
          <span className="font-hindi text-xs text-amber-300">
            ॥ उपस्थिति स्वीकृति ॥
          </span>
          <h2 className="font-serif text-2xl font-bold gold-text-gradient">
            Automatic Wedding RSVP
          </h2>
          <p className="font-serif text-[11px] text-amber-200/70 mt-0.5">
            Confirm your presence & receive your Digital Royal Entry Pass
          </p>
          <div className="w-16 h-[1px] bg-royalGold/40 mx-auto mt-2" />
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs font-body">
          
          {/* Attending Toggle */}
          <div>
            <label className="block text-amber-200 font-serif mb-1.5 font-semibold">
              Will you be joining our celebration? *
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setAttending('yes')}
                className={`py-2.5 px-3 rounded-xl border text-xs font-serif font-semibold flex items-center justify-center gap-1.5 transition-all ${
                  attending === 'yes'
                    ? 'bg-gradient-to-r from-royalGold to-amber-300 text-velvetMaroon-dark border-amber-100 shadow-md'
                    : 'bg-velvetMaroon-dark/60 text-amber-200/70 border-royalGold/40'
                }`}
              >
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Joyfully Accept</span>
              </button>
              <button
                type="button"
                onClick={() => setAttending('no')}
                className={`py-2.5 px-3 rounded-xl border text-xs font-serif font-semibold flex items-center justify-center gap-1.5 transition-all ${
                  attending === 'no'
                    ? 'bg-velvetMaroon-dark text-amber-200 border-amber-400'
                    : 'bg-velvetMaroon-dark/60 text-amber-200/70 border-royalGold/40'
                }`}
              >
                <X className="w-3.5 h-3.5" />
                <span>Regretfully Decline</span>
              </button>
            </div>
          </div>

          {/* Guest Name & Phone */}
          <div className="space-y-3">
            <div>
              <label className="block text-amber-200 font-serif mb-1 font-semibold">Your Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Mr. Kapil Sharma"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-velvetMaroon-dark/90 border border-royalGold/50 text-amber-100 placeholder-amber-200/40 focus:outline-none focus:border-amber-300"
              />
            </div>
            <div>
              <label className="block text-amber-200 font-serif mb-1 font-semibold">WhatsApp Number *</label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-velvetMaroon-dark/90 border border-royalGold/50 text-amber-100 placeholder-amber-200/40 focus:outline-none focus:border-amber-300"
              />
            </div>
          </div>

          {attending === 'yes' && (
            <>
              {/* Number of Guests */}
              <div>
                <label className="block text-amber-200 font-serif mb-1 font-semibold">
                  Total Guests Attending (Including Yourself)
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuestCount(num)}
                      className={`flex-1 py-2 rounded-xl border text-xs font-serif font-bold transition-all ${
                        guestCount === num
                          ? 'bg-royalGold text-velvetMaroon-dark border-amber-100 shadow'
                          : 'bg-velvetMaroon-dark/60 text-amber-200/70 border-royalGold/40'
                      }`}
                    >
                      {num} {num === 5 ? '+' : ''}
                    </button>
                  ))}
                </div>
              </div>

              {/* Ceremonies Attending */}
              <div>
                <label className="block text-amber-200 font-serif mb-1 font-semibold">
                  Select Ceremonies You Will Attend
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {WEDDING_DATA.ceremonies.map((c) => (
                    <label
                      key={c.id}
                      className={`flex items-center gap-2 p-2 rounded-xl border cursor-pointer transition-all ${
                        selectedCeremonies.includes(c.id)
                          ? 'bg-amber-300/20 border-royalGold text-amber-200'
                          : 'bg-velvetMaroon-dark/40 border-royalGold/20 text-amber-200/60'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedCeremonies.includes(c.id)}
                        onChange={() => toggleCeremony(c.id)}
                        className="accent-amber-400 rounded"
                      />
                      <span className="font-serif text-[11px]">{c.title.split(' ')[0]}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Food Preference */}
              <div>
                <label className="block text-amber-200 font-serif mb-1 font-semibold">
                  Food & Dietary Preference
                </label>
                <select
                  value={foodPreference}
                  onChange={(e) => setFoodPreference(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl bg-velvetMaroon-dark/90 border border-royalGold/50 text-amber-100 focus:outline-none focus:border-amber-300"
                >
                  <option value="pure_veg">Pure Vegetarian Royal Thali</option>
                  <option value="jain">Jain Special (No Onion / Garlic)</option>
                  <option value="royal_feast">Grand Royal Feast & International</option>
                </select>
              </div>

              {/* Sangeet Song Request */}
              <div>
                <label className="block text-amber-200 font-serif mb-1 font-semibold">
                  Sangeet Night Song Request 🎵 (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Gallan Goodiyaan, London Thumakda"
                  value={songRequest}
                  onChange={(e) => setSongRequest(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-velvetMaroon-dark/90 border border-royalGold/50 text-amber-100 placeholder-amber-200/40 focus:outline-none focus:border-amber-300"
                />
              </div>
            </>
          )}

          {/* Blessings Message */}
          <div>
            <label className="block text-amber-200 font-serif mb-1 font-semibold">
              Blessings & Best Wishes for Couple (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="Write your heartfelt message here..."
              value={blessingMessage}
              onChange={(e) => setBlessingMessage(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-velvetMaroon-dark/90 border border-royalGold/50 text-amber-100 placeholder-amber-200/40 focus:outline-none focus:border-amber-300 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gold-shimmer-btn text-amber-950 font-bold font-serif text-xs tracking-widest uppercase shadow-lg flex items-center justify-center gap-2 hover:shadow-amber-400/30 active:scale-98 transition-all"
            >
              <Send className="w-4 h-4 fill-amber-950" />
              <span>Confirm & Generate Digital Pass</span>
            </button>
            <div className="flex items-center justify-center gap-1.5 mt-2 text-[10px] text-amber-300/80">
              <MessageSquare className="w-3 h-3 text-emerald-400" />
              <span>Auto-sends formatted RSVP to WhatsApp</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
