import React, { useEffect, useState } from 'react';
import { type RsvpResponse, WEDDING_DATA } from '../data/weddingData';
import QRCode from 'qrcode';
import { CheckCircle2, Download } from 'lucide-react';

interface DigitalPassProps {
  rsvp: RsvpResponse;
  onClose: () => void;
}

export const DigitalPass: React.FC<DigitalPassProps> = ({ rsvp, onClose }) => {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');

  useEffect(() => {
    const generateQR = async () => {
      try {
        const qrData = JSON.stringify({
          passCode: rsvp.passCode,
          name: rsvp.guestName,
          guests: rsvp.guestCount,
          event: WEDDING_DATA.couple.hashtag,
        });
        const url = await QRCode.toDataURL(qrData, {
          width: 200,
          margin: 1,
          color: {
            dark: '#4A0404',
            light: '#FAF6EE'
          }
        });
        setQrCodeUrl(url);
      } catch (err) {
        console.error('Failed to generate QR code', err);
      }
    };

    generateQR();
  }, [rsvp]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-sm rounded-3xl bg-gradient-to-b from-[#2d0505] via-[#4a0404] to-[#120303] border-2 border-royalGold p-6 text-center text-warmIvory shadow-2xl space-y-5">
        
        {/* Top Confirmation Icon */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-emerald-900 border-2 border-amber-300 flex items-center justify-center text-amber-300 mb-2">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <span className="font-hindi text-xs text-amber-300 font-semibold">
            ॥ आर.एस.वी.पी स्वीकृत ॥
          </span>
          <h2 className="font-serif text-2xl font-bold gold-text-gradient">
            Royal Guest Entry Pass
          </h2>
          <p className="font-serif text-[11px] text-amber-200/70">
            Show this pass at venue entrance
          </p>
        </div>

        {/* Golden Digital Pass Card Frame */}
        <div className="p-4 rounded-2xl bg-warmIvory text-velvetMaroon-dark border-2 border-royalGold shadow-inner space-y-4">
          <div className="flex items-center justify-between border-b border-amber-900/20 pb-2">
            <div>
              <p className="font-script text-xl font-bold text-velvetMaroon-dark text-left">
                {WEDDING_DATA.couple.brideName} & {WEDDING_DATA.couple.groomName}
              </p>
              <p className="font-serif text-[10px] text-amber-900/80 uppercase text-left tracking-wider">
                {WEDDING_DATA.couple.displayDate}
              </p>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-velvetMaroon-dark text-amber-200 font-serif text-[10px] font-bold tracking-wider">
              {rsvp.passCode}
            </span>
          </div>

          {/* QR Code Container */}
          <div className="flex flex-col items-center justify-center bg-amber-50 p-3 rounded-xl border border-amber-300">
            {qrCodeUrl ? (
              <img src={qrCodeUrl} alt="Wedding Pass QR Code" className="w-36 h-36 object-contain" />
            ) : (
              <div className="w-36 h-36 bg-amber-100 animate-pulse rounded-lg" />
            )}
            <p className="font-mono text-[10px] text-amber-900 font-semibold mt-1">
              ENTRY CODE: {rsvp.passCode}
            </p>
          </div>

          {/* Guest Details Summary */}
          <div className="text-left text-xs space-y-1.5 pt-1 font-body text-amber-950">
            <div className="flex justify-between border-b border-amber-950/10 pb-1">
              <span className="font-semibold">Guest Name:</span>
              <span>{rsvp.guestName}</span>
            </div>
            <div className="flex justify-between border-b border-amber-950/10 pb-1">
              <span className="font-semibold">Confirmed Guests:</span>
              <span>{rsvp.guestCount} Person(s)</span>
            </div>
            <div className="flex justify-between border-b border-amber-950/10 pb-1">
              <span className="font-semibold">Food Preference:</span>
              <span className="capitalize">{rsvp.foodPreference.replace('_', ' ')}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Venue:</span>
              <span className="text-[10px] font-semibold text-velvetMaroon-dark">The Leela Palace, Udaipur</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-2 pt-2">
          <button
            onClick={handlePrint}
            className="w-full py-3 rounded-full bg-gold-shimmer-btn text-amber-950 font-bold font-serif text-xs tracking-widest uppercase shadow-md flex items-center justify-center gap-2 hover:shadow-amber-400/20 active:scale-98 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download / Save Pass</span>
          </button>
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-full bg-velvetMaroon-dark border border-royalGold/50 text-amber-200 font-serif text-xs hover:bg-amber-300 hover:text-velvetMaroon-dark transition-all"
          >
            Close & Back to Invitation
          </button>
        </div>
      </div>
    </div>
  );
};
