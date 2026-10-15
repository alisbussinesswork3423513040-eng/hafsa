import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const AtelierCraft: React.FC = () => {
  return (
    <section id="atelier" className="py-20 md:py-28 border-b border-stone-200/80 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Grid: Craftsmanship Image & Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Atelier Detail Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden bg-stone-800 shadow-xl border border-stone-800">
              <img
                src="/src/assets/images/craft_atelier_detail_1792062987818.jpg"
                alt="Hafsa Clothing Handmade Stitching & Tailoring Craft"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-stone-950/95 backdrop-blur-md px-4 py-3 border border-stone-800">
                <span className="text-[10px] uppercase tracking-widest text-amber-300 font-semibold block">Handmade Atelier</span>
                <span className="text-xs font-serif text-stone-200">Main Road HyderAbaad Matli, Matli Bus Stop</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & 3 Disciplines */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium">The Handcrafted Promise</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-stone-100 mt-2 leading-tight">
                Slow textiles, cut and stitched by hand.
              </h2>
              <p className="text-sm text-stone-300 font-light leading-relaxed mt-4">
                Hafsa began designing clothes from home, believing that garments made by hand carry a soul and dignity that machine factories can never replicate. Every single cut, seam, and hem is crafted with personal devotion and care.
              </p>
            </div>

            {/* 3 Pillars */}
            <div className="space-y-6 border-t border-stone-800 pt-6">
              
              <div className="space-y-1">
                <h3 className="text-base font-serif font-medium text-stone-100">
                  01. Started Design from Home
                </h3>
                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  Grown from a small home studio into a recognized boutique for modest wear, retaining the same authentic personal touch for every patron.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-base font-serif font-medium text-stone-100">
                  02. 100% Hand-Tailored Seams
                </h3>
                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  Every interior edge is encased in double-turned French seams or delicate silk piping, ensuring lifelong durability and exquisite finishing.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-base font-serif font-medium text-stone-100">
                  03. Direct Atelier Communication
                </h3>
                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  You speak directly with Hafsa for custom sizing, sleeve adjustments, or custom orders to match your personal vision.
                </p>
              </div>

            </div>

            {/* Studio Contact Strip */}
            <div className="p-4 bg-stone-800/60 border border-stone-700/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-serif italic text-stone-200">
                  "Every dress I stitch is made as if it were for my own family."
                </p>
                <p className="text-[11px] uppercase tracking-wider text-amber-300 mt-1">
                  — Hafsa, Designer & Creator
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="tel:03430333817"
                  className="px-3.5 py-1.5 bg-white text-stone-900 text-xs uppercase tracking-wider font-semibold hover:bg-stone-200 transition-colors inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>03430333817</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
