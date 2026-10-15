import React from 'react';
import { HeartHandshake, Scissors, Home, Phone, Mail, MapPin, Sparkles } from 'lucide-react';

interface AboutHafsaProps {
  onContactClick: () => void;
  onExploreCatalog: () => void;
}

export const AboutHafsa: React.FC<AboutHafsaProps> = ({ onContactClick, onExploreCatalog }) => {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-stone-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Grid: Narrative & Craft Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual of Handcrafting */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 border border-stone-200 shadow-lg">
              <img
                src="/src/assets/images/craft_atelier_detail_1792062987818.jpg"
                alt="Hafsa handcrafting crochet clothing pieces from home"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 border border-stone-200/80 shadow-xs">
                <div className="flex items-center gap-2 text-stone-900 font-serif text-sm font-medium">
                  <Scissors className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Handcrafted by Hafsa</span>
                </div>
                <p className="text-xs text-stone-600 font-light mt-0.5">
                  Main Road HyderAbaad Matli, Matli Bus Stop
                </p>
                <p className="text-[11px] text-amber-900 font-medium mt-1">
                  Direct Orders: 03430333817
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Story of Hafsa */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-800 font-medium">
              <Home className="w-3.5 h-3.5 text-amber-700" />
              <span>The Artisan Journey</span>
              <span aria-hidden="true">·</span>
              <span>Homegrown Handmade Apparel</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-stone-900 leading-[1.15]">
              Started design from home, clothes made entirely by hand.
            </h2>

            <div className="space-y-4 text-stone-600 text-sm font-light leading-relaxed">
              <p>
                Hafsa Clothing began with a simple hook, skeins of soft yarn, and a deep love for handmade fashion. What started at home in Matli — sitting for quiet hours creating stitch by stitch — has blossomed into a beloved label known for whimsical 3D floral cardigans, delicate royal baby frocks, and cozy winter accessories.
              </p>
              <p>
                Every single piece you see is made from hand by Hafsa. No factory machines, no mass production. Every stitch is counted, every 3D flower and bow is hand-formed, and every edge is cleanly finished. Because clothes are handmade to order, you can customize colors, request bespoke measurements, and receive garments made with genuine human warmth.
              </p>
            </div>

            {/* 3 Core Pillars of Hafsa's Craft */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-200">
              <div className="space-y-1 p-3.5 bg-[#FAF8F5] border border-stone-200/70">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-900 block">
                  Clothes Made by Hand
                </span>
                <p className="text-xs text-stone-500 font-light">
                  100% hand-crocheted and stitched with gentle, skin-friendly yarns.
                </p>
              </div>

              <div className="space-y-1 p-3.5 bg-[#FAF8F5] border border-stone-200/70">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-900 block">
                  Started from Home
                </span>
                <p className="text-xs text-stone-500 font-light">
                  Grown from a passion at home into trusted handcrafted collections.
                </p>
              </div>

              <div className="space-y-1 p-3.5 bg-[#FAF8F5] border border-stone-200/70">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-900 block">
                  Custom Orders & Fit
                </span>
                <p className="text-xs text-stone-500 font-light">
                  Personalized colors, infant sizes, and bespoke adult fits upon request.
                </p>
              </div>
            </div>

            {/* Personal Quote */}
            <div className="p-4 bg-stone-50 border-l-2 border-stone-900 space-y-1">
              <p className="text-xs italic font-serif text-stone-800 leading-relaxed">
                "When you design clothes by hand from home, every stitch carries affection. Seeing someone wear and cherish something made with your own hands is the greatest happiness."
              </p>
              <p className="text-[11px] uppercase tracking-wider text-stone-500 font-medium">
                — Hafsa, Founder & Artisan
              </p>
            </div>

            {/* Direct Studio Details & Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onExploreCatalog}
                className="px-6 py-3 bg-stone-900 text-white text-xs uppercase tracking-widest font-semibold hover:bg-stone-800 transition-colors cursor-pointer"
              >
                Browse Handmade Creations
              </button>

              <button
                type="button"
                onClick={onContactClick}
                className="px-6 py-3 border border-stone-300 text-stone-800 text-xs uppercase tracking-widest font-semibold hover:border-stone-900 transition-colors cursor-pointer"
              >
                Custom Order Inquiry
              </button>

              <a
                href="https://wa.me/923430333817?text=Hello%20Hafsa,%20I%20love%20your%20story%20and%20would%20like%20to%20order%20a%20handmade%20creation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-950 transition-colors ml-auto"
              >
                <span>WhatsApp: 03430333817</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
