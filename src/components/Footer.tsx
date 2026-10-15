import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, Scissors, Heart } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateSection,
}) => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3-Column Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-stone-800">
          
          {/* Col 1: Brand & Homegrown Story */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-2xl font-serif tracking-[0.25em] text-white uppercase font-light">
              HAFSA CLOTHING
            </h3>
            <p className="text-xs text-stone-400 font-light leading-relaxed max-w-sm">
              Handcrafted clothing and bespoke artisan crochet. Every single piece is made from hand with love and dedication, designed from home in Matli and delivered with warmth across Pakistan and worldwide.
            </p>
            <div className="pt-2 text-[11px] text-stone-500 space-y-1">
              <p className="flex items-center gap-1.5 text-stone-400">
                <Scissors className="w-3.5 h-3.5 text-amber-400" />
                <span>100% Hand-Crocheted & Hand-Stitched</span>
              </p>
              <p className="flex items-center gap-1.5 text-stone-400">
                <Heart className="w-3.5 h-3.5 text-rose-400" />
                <span>Started Design from Home · Made with Love</span>
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
              The Wardrobe
            </h4>
            <ul className="space-y-2 text-xs text-stone-400 font-light">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('catalog')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  All Handmade Pieces
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('couture')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Featured Categories
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Hafsa & Handcraft Story
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('lookbook')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Handmade Lookbook
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateSection('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Orders
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Studio Contact & Location */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
              Studio & Contact
            </h4>
            
            <div className="space-y-3 text-xs text-stone-400 font-light">
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-stone-200">Main Road HyderAbaad Matli</p>
                  <p className="text-stone-400">Matli Bus Stop</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href="tel:03430333817"
                  className="text-stone-200 hover:text-white font-medium transition-colors"
                >
                  03430333817
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href="mailto:hafsaqadirbux0@gmail.com"
                  className="text-stone-200 hover:text-white transition-colors underline break-all"
                >
                  hafsaqadirbux0@gmail.com
                </a>
              </div>

              {/* WhatsApp Button */}
              <div className="pt-2">
                <a
                  href="https://wa.me/923430333817?text=Hello%20Hafsa,%20I%20would%20like%20to%20order%20from%20your%20handmade%20clothing%20collection."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 bg-emerald-800 hover:bg-emerald-700 text-white rounded text-[11px] font-semibold tracking-wider uppercase transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Message on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Hafsa Clothing. Handmade with devotion in Matli.</p>

          <div className="text-[11px] text-stone-400 flex items-center gap-4">
            <span>Direct Orders: 03430333817</span>
            <span>·</span>
            <span>hafsaqadirbux0@gmail.com</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
