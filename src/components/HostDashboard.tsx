import React, { useState } from 'react';
import { type RsvpResponse } from '../data/weddingData';
import { Users, Utensils, Music, Download, Search, X, ShieldCheck } from 'lucide-react';

interface HostDashboardProps {
  isOpen: boolean;
  rsvps: RsvpResponse[];
  onClose: () => void;
}

export const HostDashboard: React.FC<HostDashboardProps> = ({ isOpen, rsvps, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const totalAccepted = rsvps.filter((r) => r.attending === 'yes');
  const totalGuestsCount = totalAccepted.reduce((sum, r) => sum + r.guestCount, 0);
  const pureVegCount = totalAccepted.filter((r) => r.foodPreference === 'pure_veg').reduce((sum, r) => sum + r.guestCount, 0);
  const jainCount = totalAccepted.filter((r) => r.foodPreference === 'jain').reduce((sum, r) => sum + r.guestCount, 0);

  const filteredRsvps = rsvps.filter(
    (r) =>
      r.guestName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.phone.includes(searchTerm) ||
      r.passCode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const exportToJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(rsvps, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `wedding_rsvps_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-md rounded-3xl bg-gradient-to-b from-[#1d0303] via-[#380404] to-[#0f0202] border-2 border-royalGold p-6 text-warmIvory shadow-2xl space-y-5">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-amber-900/50 border border-royalGold/40 text-amber-200 flex items-center justify-center hover:bg-amber-300 hover:text-amber-950 transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Dashboard Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-300/10 border border-royalGold/40 text-amber-300 text-xs font-serif mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-royalGold" />
            <span>Host Live Admin Drawer</span>
          </div>
          <h2 className="font-serif text-2xl font-bold gold-text-gradient">
            RSVP Analytics & Guest List
          </h2>
          <p className="font-serif text-[11px] text-amber-200/70">
            Real-time headcounts & catering preferences
          </p>
        </div>

        {/* Quick Analytics Cards */}
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="p-3 rounded-2xl bg-velvetMaroon-dark border border-royalGold/40">
            <Users className="w-4 h-4 text-royalGold mx-auto mb-1" />
            <span className="font-serif text-lg font-bold text-amber-200 block">{totalGuestsCount}</span>
            <span className="text-[10px] text-amber-200/70 uppercase">Total Guests</span>
          </div>
          <div className="p-3 rounded-2xl bg-velvetMaroon-dark border border-royalGold/40">
            <Utensils className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
            <span className="font-serif text-lg font-bold text-amber-200 block">{pureVegCount}</span>
            <span className="text-[10px] text-amber-200/70 uppercase">Pure Veg</span>
          </div>
          <div className="p-3 rounded-2xl bg-velvetMaroon-dark border border-royalGold/40">
            <Utensils className="w-4 h-4 text-amber-400 mx-auto mb-1" />
            <span className="font-serif text-lg font-bold text-amber-200 block">{jainCount}</span>
            <span className="text-[10px] text-amber-200/70 uppercase">Jain Meal</span>
          </div>
        </div>

        {/* Search Bar & Export */}
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-amber-200/60 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search guest or code..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-velvetMaroon-dark/80 border border-royalGold/40 text-xs text-amber-100 placeholder-amber-200/40 focus:outline-none"
            />
          </div>
          <button
            onClick={exportToJson}
            className="p-2 rounded-xl bg-royalGold text-amber-950 font-bold hover:bg-amber-300 transition-colors flex items-center gap-1 text-xs"
            title="Export JSON"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline font-serif">Export</span>
          </button>
        </div>

        {/* Guest Table List */}
        <div className="max-h-60 overflow-y-auto space-y-2 pr-1">
          {filteredRsvps.length === 0 ? (
            <p className="text-center text-xs text-amber-200/60 py-4 font-serif">
              No RSVPs found matching your search.
            </p>
          ) : (
            filteredRsvps.map((rsvp) => (
              <div
                key={rsvp.id}
                className="p-3 rounded-xl bg-velvetMaroon-dark/70 border border-royalGold/30 text-xs space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-amber-200">{rsvp.guestName}</span>
                  <span className="px-2 py-0.5 rounded-full bg-royalGold/20 border border-royalGold/40 text-[10px] text-amber-300 font-serif">
                    {rsvp.passCode}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-amber-100/70">
                  <span>{rsvp.phone}</span>
                  <span className="capitalize text-amber-300 font-medium">
                    {rsvp.attending === 'yes' ? `${rsvp.guestCount} Guest(s) • ${rsvp.foodPreference.replace('_', ' ')}` : 'Declined'}
                  </span>
                </div>
                {rsvp.songRequest && (
                  <p className="text-[10px] text-amber-200/80 italic flex items-center gap-1">
                    <Music className="w-3 h-3 text-royalGold" />
                    <span>Song: {rsvp.songRequest}</span>
                  </p>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
