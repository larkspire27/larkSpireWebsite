import React, { useState } from 'react';
import { 
  Sparkles, 
  Smartphone, 
  MessageCircle, 
  MapPin, 
  Music, 
  Image as ImageIcon, 
  CheckCircle2, 
  PhoneCall, 
  Mail, 
  Globe, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  Zap, 
  Heart, 
  Award,
  Send
} from 'lucide-react';
import { AnimatedOrnaments } from './AnimatedOrnaments';

interface DigitalWeddingCardServiceProps {
  onViewSampleDemo?: () => void;
}

export const DigitalWeddingCardService: React.FC<DigitalWeddingCardServiceProps> = ({ onViewSampleDemo }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const whatsappUrl = `https://wa.me/919928196424?text=${encodeURIComponent(
    'Namaste LarkSpire Team! I am interested in creating a custom Digital Wedding Invitation Card online in Jaipur. Please send me template options and pricing.'
  )}`;

  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-[#D4AF37]" />,
      title: "Custom Designs",
      desc: "Tailored Rajasthani royal palace, modern floral, and luxury minimalist aesthetic themes crafted for your special day."
    },
    {
      icon: <Zap className="w-6 h-6 text-[#D4AF37]" />,
      title: "Animations & Transitions",
      desc: "Smooth opening curtain wax seal, floating rose petals, and dynamic scroll animations that impress every guest."
    },
    {
      icon: <Send className="w-6 h-6 text-[#D4AF37]" />,
      title: "RSVP Form & Tracking",
      desc: "Real-time guest RSVP collection with headcount, dietary choices, and instant host dashboard access."
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#D4AF37]" />,
      title: "Event Details with Map",
      desc: "One-tap Google Maps directions for Haldi, Mehendi, Sangeet, Wedding Pheras & Reception venues."
    },
    {
      icon: <ImageIcon className="w-6 h-6 text-[#D4AF37]" />,
      title: "Photo & Video Gallery",
      desc: "Showcase pre-wedding shoot photos, video trailers, and love story timeline in high definition."
    },
    {
      icon: <Music className="w-6 h-6 text-[#D4AF37]" />,
      title: "Background Music",
      desc: "Enchanting traditional Shehnai audio, royal nagada beats, or your chosen romantic background song."
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-emerald-600" />,
      title: "Easy WhatsApp Sharing",
      desc: "Share your digital wedding card link in 1-click on WhatsApp, Instagram, Telegram & SMS with personalized guest messages."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-[#D4AF37]" />,
      title: "Mobile Friendly & Responsive",
      desc: "Flawless view across all smartphones (Android & iPhone), tablets, laptops, and desktop computers."
    }
  ];

  const packages = [
    {
      name: "Royal Classic",
      price: "₹1,499",
      subtitle: "Perfect for budget-conscious couples",
      features: [
        "Single-page Digital Wedding Card",
        "Mobile Responsive Design",
        "Event Schedule & Google Maps",
        "1-Click WhatsApp Sharing",
        "Background Music Player",
        "Standard RSVP Form"
      ],
      recommended: false
    },
    {
      name: "Grand Palace (Popular)",
      price: "₹2,999",
      subtitle: "Most loved choice for weddings in Jaipur",
      features: [
        "Everything in Royal Classic",
        "Opening Wax Seal & Curtain Animation",
        "Falling Rose Petals Effect",
        "Pre-wedding Photo Gallery",
        "Digital QR Guest Entry Pass",
        "Real-Time Host Admin Dashboard",
        "Express 24-Hour Delivery"
      ],
      recommended: true
    },
    {
      name: "Bespoke Royal VIP",
      price: "₹4,999",
      subtitle: "For ultra-luxury royal celebrations",
      features: [
        "Everything in Grand Palace",
        "Custom Domain Name (e.g. RahulWedsPriya.in)",
        "Bilingual Content (Hindi + English Shlokas)",
        "Video Trailer Embed Integration",
        "Unlimited Revisions & Dedicated Designer",
        "Post-Wedding Thank You Card Module"
      ],
      recommended: false
    }
  ];

  const faqs = [
    {
      q: "What is a Digital Wedding Invitation Card?",
      a: "A Digital Wedding Invitation Card (also known as an online wedding website) is a modern, interactive web-based invitation that replaces or complements traditional paper cards. It includes event dates, venue locations with Google Maps, background music, RSVP forms, photo galleries, and animated effects."
    },
    {
      q: "Why search for wedding invitation online in Jaipur by LarkSpire?",
      a: "LarkSpire offers Jaipur's finest digital wedding cards designed specifically for royal Rajasthani weddings and modern couples. Unlike static PDFs or images, our digital wedding cards feature animated curtains, falling rose petals, real-time WhatsApp RSVP tracking, and Google Maps venue navigation."
    },
    {
      q: "How fast can I get my digital wedding card created in Jaipur?",
      a: "Our standard delivery time is 24 to 48 hours. For urgent wedding dates in Jaipur and across Rajasthan, we offer express 12-hour turnaround service."
    },
    {
      q: "Can guests submit RSVP through WhatsApp directly?",
      a: "Yes! Guests can fill out their attendance, number of accompanying family members, and dietary choices directly on the website, which automatically sends a confirmed WhatsApp message to the host and updates your live host dashboard."
    },
    {
      q: "How do I share my digital wedding card with guests?",
      a: "You will receive a custom link (and optional QR code). You can share it directly via WhatsApp, Instagram bio, email, or SMS to hundreds of guests instantly with zero printing cost."
    }
  ];

  return (
    <div className="relative w-full bg-[#FAF6EE] text-[#2D0204] py-8 px-4 sm:px-6 overflow-hidden">
      {/* Background Decorative Canvas */}
      <AnimatedOrnaments variant="hero" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-12">

        {/* Top Header & Brand Banner */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7A0C1A] text-[#FFD700] text-xs font-serif font-bold tracking-widest uppercase border border-[#D4AF37] shadow-md">
            <Sparkles className="w-4 h-4 text-[#FFD700] animate-pulse" />
            <span>LarkSpire • Websites & Digital Solutions</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#7A0C1A] leading-tight drop-shadow-sm">
            Digital Wedding Invitation Online in Jaipur
          </h1>

          <p className="font-serif text-base sm:text-lg font-bold text-[#8C6711] tracking-wider uppercase">
            Invite • Impress • Celebrate Digitally
          </p>

          <p className="font-body text-sm sm:text-base text-[#4A040E] max-w-2xl mx-auto leading-relaxed font-semibold">
            Elevate your wedding announcement with luxury interactive <strong className="text-[#7A0C1A]">digital wedding card design in Jaipur</strong>. Featuring animated wax seals, live Shehnai music, instant WhatsApp RSVPs, and Google Maps location navigation.
          </p>
        </div>

        {/* Poster Visual Showcase Card */}
        <div className="p-3 sm:p-5 rounded-3xl bg-[#FFFDF7] border-2 border-[#D4AF37] shadow-2xl space-y-6">
          <div className="relative overflow-hidden rounded-2xl border border-[#D4AF37]/40 group shadow-lg">
            <img 
              src="/images/larkspire_digital_wedding_card.png" 
              alt="Digital Wedding Invitation Card Online Jaipur LarkSpire Showcase"
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4 sm:p-6 text-white">
              <div className="space-y-1">
                <p className="font-serif text-xs font-bold text-[#FFD700] tracking-widest uppercase">
                  LarkSpire Creative Touch
                </p>
                <h3 className="font-serif text-xl sm:text-2xl font-black text-white">
                  "Your Love Story, Our Creative Touch ♡"
                </h3>
              </div>
            </div>
          </div>

          {/* Quick CTA Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3.5 px-8 rounded-full btn-crimson text-[#FFFDF0] font-black font-serif text-sm tracking-wider uppercase shadow-xl flex items-center justify-center gap-2.5 hover:scale-105 active:scale-95 transition-transform cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
              <span>Get Your Invitation Now →</span>
            </a>

            {onViewSampleDemo && (
              <button
                onClick={onViewSampleDemo}
                className="w-full sm:w-auto py-3.5 px-6 rounded-full bg-[#FFFDF7] border-2 border-[#7A0C1A] text-[#7A0C1A] font-serif font-black text-sm hover:bg-[#7A0C1A] hover:text-[#FFFDF0] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>View Live Interactive Demo</span>
              </button>
            )}
          </div>
        </div>

        {/* 4 Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
          <div className="p-4 rounded-2xl bg-[#FFFDF7] border border-[#D4AF37]/50 shadow-md space-y-1">
            <Heart className="w-6 h-6 text-[#7A0C1A] mx-auto" />
            <p className="font-serif text-xs font-black text-[#7A0C1A] uppercase">Personalized</p>
            <p className="text-[11px] text-[#5E0613]/80 font-bold">Custom Themes & Color Palettes</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#FFFDF7] border border-[#D4AF37]/50 shadow-md space-y-1">
            <Award className="w-6 h-6 text-[#7A0C1A] mx-auto" />
            <p className="font-serif text-xs font-black text-[#7A0C1A] uppercase">Premium Designs</p>
            <p className="text-[11px] text-[#5E0613]/80 font-bold">Royal Rajasthani & Modern Aesthetic</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#FFFDF7] border border-[#D4AF37]/50 shadow-md space-y-1">
            <Zap className="w-6 h-6 text-[#7A0C1A] mx-auto" />
            <p className="font-serif text-xs font-black text-[#7A0C1A] uppercase">Fast Delivery</p>
            <p className="text-[11px] text-[#5E0613]/80 font-bold">Ready in 24 - 48 Hours</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#FFFDF7] border border-[#D4AF37]/50 shadow-md space-y-1">
            <ShieldCheck className="w-6 h-6 text-[#7A0C1A] mx-auto" />
            <p className="font-serif text-xs font-black text-[#7A0C1A] uppercase">Dedicated Support</p>
            <p className="text-[11px] text-[#5E0613]/80 font-bold">Jaipur & Rajasthan Local Team</p>
          </div>
        </div>

        {/* Features Grid Section */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#7A0C1A]">
              Why Choose LarkSpire Digital Wedding Card?
            </h2>
            <p className="font-body text-xs sm:text-sm text-[#8C6711] font-bold">
              Packed with modern features to make your online wedding invitation unforgettable
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#FFFDF7] border border-[#D4AF37]/60 shadow-lg hover:shadow-xl hover:border-[#7A0C1A] transition-all space-y-2.5 text-left">
                <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] border border-[#D4AF37] flex items-center justify-center">
                  {f.icon}
                </div>
                <h3 className="font-serif text-base font-black text-[#7A0C1A]">
                  {f.title}
                </h3>
                <p className="font-body text-xs text-[#4A040E] leading-relaxed font-medium">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Comprehensive SEO Content Section for Jaipur */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFDF7] border-2 border-[#D4AF37] shadow-xl space-y-6 text-left">
          <h2 className="font-serif text-2xl font-black text-[#7A0C1A] border-b border-[#D4AF37]/30 pb-3">
            Best Online Wedding Card Maker & Digital Wedding Invitation Service in Jaipur
          </h2>

          <div className="space-y-4 font-body text-xs sm:text-sm text-[#4A040E] leading-relaxed font-semibold">
            <p>
              In the royal pink city of Jaipur, wedding celebrations are grand, vibrant, and deep-rooted in tradition. At <strong className="text-[#7A0C1A]">LarkSpire</strong>, we fuse timeless Rajasthani grandeur with cutting-edge web technology to bring you the best <strong className="text-[#7A0C1A]">digital wedding card in Jaipur</strong>. Whether you are hosting a destination wedding at Samode Palace, Rambagh Palace, Leela Palace, or Oberoi Rajvilas, our online wedding invitations ensure your guests receive an imperial experience right on their mobile devices.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#FAF6EE] border border-[#D4AF37]/40 space-y-2">
                <h4 className="font-serif font-black text-sm text-[#7A0C1A] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  Eco-Friendly & Instant Sharing
                </h4>
                <p className="text-xs text-[#5E0613]/90">
                  Save thousands on traditional printing and courier costs. Send your <strong className="text-[#7A0C1A]">wedding invitation online</strong> via WhatsApp in seconds to relatives across India and abroad.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF6EE] border border-[#D4AF37]/40 space-y-2">
                <h4 className="font-serif font-black text-sm text-[#7A0C1A] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  Live Host Admin & QR Entry Passes
                </h4>
                <p className="text-xs text-[#5E0613]/90">
                  Track RSVPs seamlessly with an admin dashboard. Issue digital QR passes for secure venue entry at your Jaipur wedding location.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing & Packages */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#7A0C1A]">
              Transparent Pricing Packages
            </h2>
            <p className="font-body text-xs sm:text-sm text-[#8C6711] font-bold">
              Affordable digital wedding invitation card packages in Jaipur with zero hidden costs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`relative p-6 rounded-3xl bg-[#FFFDF7] border-2 ${
                  pkg.recommended ? 'border-[#7A0C1A] shadow-2xl scale-105' : 'border-[#D4AF37]/60 shadow-lg'
                } flex flex-col justify-between text-left space-y-6`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#7A0C1A] text-[#FFD700] text-[10px] font-serif font-black tracking-widest uppercase border border-[#FFD700]">
                    Most Popular Choice
                  </div>
                )}

                <div className="space-y-4">
                  <div className="border-b border-[#D4AF37]/30 pb-4">
                    <h3 className="font-serif text-xl font-black text-[#7A0C1A]">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-[#8C6711] font-semibold mt-1">
                      {pkg.subtitle}
                    </p>
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="font-serif text-3xl font-black text-[#7A0C1A]">{pkg.price}</span>
                      <span className="text-xs text-[#8C6711] font-bold">/ one-time</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-xs text-[#4A040E] font-medium">
                    {pkg.features.map((feat, fi) => (
                      <li key={fi} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 rounded-full ${
                    pkg.recommended 
                      ? 'btn-crimson text-[#FFFDF0]' 
                      : 'bg-[#FAF6EE] border border-[#7A0C1A] text-[#7A0C1A] hover:bg-[#7A0C1A] hover:text-[#FFFDF0]'
                  } font-serif font-black text-xs tracking-wider uppercase text-center shadow-md transition-all block cursor-pointer`}
                >
                  Book Package on WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Accordion for Jaipur SEO */}
        <div className="space-y-6 text-left">
          <div className="text-center space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#7A0C1A]">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="font-body text-xs sm:text-sm text-[#8C6711] font-bold">
              Everything you need to know about ordering a digital wedding card online in Jaipur
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index}
                  className="rounded-2xl bg-[#FFFDF7] border border-[#D4AF37]/60 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 font-serif font-bold text-sm sm:text-base text-[#7A0C1A] hover:bg-[#FAF6EE] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#8C6711] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#8C6711] flex-shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 font-body text-xs sm:text-sm text-[#4A040E] leading-relaxed font-semibold border-t border-[#D4AF37]/20 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Contact Footer Card */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-[#7A0C1A] via-[#5E0613] to-[#4A040E] text-[#FFFDF0] border-2 border-[#FFD700] shadow-2xl text-center space-y-6">
          <div className="space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#FFD700]">
              Ready to Create Your Royal Digital Wedding Card?
            </h3>
            <p className="font-body text-xs sm:text-sm text-amber-100/90 font-medium max-w-xl mx-auto">
              Contact our Jaipur team directly via WhatsApp or Phone to select your design template and get started today!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-serif font-bold">
            <a
              href="tel:+919928196424"
              className="p-3.5 rounded-2xl bg-white/10 border border-[#FFD700]/40 flex items-center justify-center gap-2.5 hover:bg-white/20 transition-all cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#FFD700]" />
              <span>+91 9928196424</span>
            </a>

            <a
              href="mailto:spirelark@gmail.com"
              className="p-3.5 rounded-2xl bg-white/10 border border-[#FFD700]/40 flex items-center justify-center gap-2.5 hover:bg-white/20 transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4 text-[#FFD700]" />
              <span>spirelark@gmail.com</span>
            </a>

            <a
              href="https://larkspire.in"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl bg-white/10 border border-[#FFD700]/40 flex items-center justify-center gap-2.5 hover:bg-white/20 transition-all cursor-pointer"
            >
              <Globe className="w-4 h-4 text-[#FFD700]" />
              <span>www.larkspire.in</span>
            </a>
          </div>

          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-4 px-10 rounded-full bg-[#FFD700] text-[#7A0C1A] font-black font-serif text-sm tracking-widest uppercase shadow-2xl inline-flex items-center justify-center gap-3 hover:bg-amber-300 active:scale-95 transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-[#7A0C1A] text-[#7A0C1A]" />
              <span>Connect on WhatsApp (+91 9928196424)</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DigitalWeddingCardService;
