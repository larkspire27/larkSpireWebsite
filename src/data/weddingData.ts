export interface Ceremony {
  id: string;
  title: string;
  hindiTitle: string;
  date: string;
  time: string;
  venueName: string;
  venueAddress: string;
  dressCode: string;
  themeColor: 'yellow' | 'emerald' | 'maroon' | 'gold' | 'royal';
  image: string;
  googleMapUrl: string;
  description: string;
}

export interface RsvpResponse {
  id: string;
  guestName: string;
  phone: string;
  attending: 'yes' | 'no';
  guestCount: number;
  ceremonies: string[];
  foodPreference: 'pure_veg' | 'jain' | 'royal_feast';
  songRequest?: string;
  blessingMessage?: string;
  createdAt: string;
  passCode: string;
}

export const WEDDING_DATA = {
  couple: {
    brideName: 'Ananya',
    groomName: 'Rohan',
    brideFullName: 'Ananya Sharma',
    groomFullName: 'Rohan Verma',
    brideParents: 'Daughter of Smt. Sunita & Shri. Rajesh Sharma',
    groomParents: 'Son of Mrs. Rekha & Mr. Suresh Verma',
    grandParents: 'With the heavenly blessings of Late Smt. Shanti Devi & Late Shri. Ramcharan Sharma',
    weddingDate: '2026-11-28T18:30:00', // ISO string for live countdown
    displayDate: 'November 28th - 29th, 2026',
    venueCity: 'Udaipur, Rajasthan',
    mainVenue: 'The Grand Leela Palace & Lawns, Udaipur',
    contactPhone: '+919876543210',
    hashtag: '#AnanyaWedsRohan',
  },
  shloka: {
    sanskrit: '॥ ॐ वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥',
    translation: 'May Lord Ganesha remove all obstacles and bless this sacred union with happiness & prosperity.',
  },
  ceremonies: [
    {
      id: 'haldi',
      title: 'Haldi Ceremony',
      hindiTitle: 'शुभ हल्दी समारोह',
      date: 'Friday, 27th November 2026',
      time: '10:00 AM Onwards',
      venueName: 'Keshariya Floral Lawns',
      venueAddress: 'The Leela Palace, Lake Pichola, Udaipur',
      dressCode: 'Sunshine Yellow & Traditional Pitambar',
      themeColor: 'yellow',
      image: '/images/mehendi_setup.png',
      googleMapUrl: 'https://maps.google.com/?q=The+Leela+Palace+Udaipur',
      description: 'An auspicious morning filled with turmeric blessings, marigold showers, and joyful laughter.',
    },
    {
      id: 'mehendi',
      title: 'Mehendi & Sangeet Night',
      hindiTitle: 'मेहंदी एवं संगीत संध्या',
      date: 'Friday, 27th November 2026',
      time: '06:30 PM Onwards',
      venueName: 'Royal Courtyard & Disco Amphitheatre',
      venueAddress: 'The Leela Palace, Udaipur',
      dressCode: 'Emerald Green & Festive Royal Ethnic',
      themeColor: 'emerald',
      image: '/images/dhol_dance_scene.png',
      googleMapUrl: 'https://maps.google.com/?q=The+Leela+Palace+Udaipur',
      description: 'A night of vibrant henna art, energetic dhol beats, family dance performances, and celebration!',
    },
    {
      id: 'pheras',
      title: 'Baraat & Sacred Pheras',
      hindiTitle: 'शुभ विवाह एवं पाणिग्रहण संस्कार',
      date: 'Saturday, 28th November 2026',
      time: '04:00 PM (Baraat Arrival) | 06:15 PM (Pheras)',
      venueName: 'Royal Mandap Pavilion',
      venueAddress: 'Lake View Gardens, The Leela Palace, Udaipur',
      dressCode: 'Royal Maroon, Crimson & Gold Formal',
      themeColor: 'maroon',
      image: '/images/mandap_pheras.png',
      googleMapUrl: 'https://maps.google.com/?q=The+Leela+Palace+Udaipur',
      description: 'The divine 7 pheras around the sacred fire, uniting two souls for eternity under the stars.',
    },
    {
      id: 'reception',
      title: 'Grand Royal Reception',
      hindiTitle: 'भव्य प्रीतिभोज',
      date: 'Sunday, 29th November 2026',
      time: '07:30 PM Onwards',
      venueName: 'Imperial Grand Ballroom',
      venueAddress: 'The Leela Palace, Udaipur',
      dressCode: 'Black Tie / Royal Indo-Western Luxe',
      themeColor: 'gold',
      image: '/images/couple_portrait.png',
      googleMapUrl: 'https://maps.google.com/?q=The+Leela+Palace+Udaipur',
      description: 'An enchanting evening of fine dining, toasts, music, and welcoming the newly wedded couple.',
    },
  ] as Ceremony[],
  initialBlessings: [
    { id: '1', name: 'Aakash & Priya', message: 'Wishing you both a lifetime of togetherness, endless love, and laughter! Can’t wait for the sangeet night! 🎉💃', date: '2 hours ago' },
    { id: '2', name: 'Uncle Ramesh & Aunty', message: 'Sada Saubhagyavati Bhava! May Lord Ganesha bless Ananya and Rohan with happiness and prosperity.', date: '5 hours ago' },
    { id: '3', name: 'Kavya & Vikram', message: 'Huge congratulations! Looking forward to celebrating this royal affair in Udaipur!', date: '1 day ago' },
  ],
  initialRsvps: [
    {
      id: 'demo-1',
      guestName: 'Kapil Malhotra',
      phone: '+919811223344',
      attending: 'yes',
      guestCount: 2,
      ceremonies: ['haldi', 'mehendi', 'pheras', 'reception'],
      foodPreference: 'pure_veg',
      songRequest: 'Gallan Goodiyaan',
      blessingMessage: 'Heartiest congratulations to the beautiful couple!',
      createdAt: '2026-09-18 14:30',
      passCode: 'VIP-7842'
    },
    {
      id: 'demo-2',
      guestName: 'Dr. Meena Agarwal',
      phone: '+919988776655',
      attending: 'yes',
      guestCount: 3,
      ceremonies: ['pheras', 'reception'],
      foodPreference: 'jain',
      songRequest: 'London Thumakda',
      blessingMessage: 'Best wishes to both families!',
      createdAt: '2026-09-18 16:15',
      passCode: 'VIP-9123'
    }
  ] as RsvpResponse[]
};
