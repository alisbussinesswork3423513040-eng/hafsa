import React from 'react';
import { ArrowRight, Sparkles, Heart, Scissors, MessageSquare, Home } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onLookbookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onLookbookClick }) => {
  return (
    <section id="hero" className="relative border-b border-stone-200/80 overflow-hidden bg-[#FAF8F5]">
      {/* Editorial Split / Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 lg:pr-4">
            {/* Quiet Unboxed Kicker */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-900 font-medium">
              <Home className="w-3.5 h-3.5 text-amber-700" />
              <span>Designed from Home in Matli</span>
              <span aria-hidden="true">·</span>
              <span>100% Hand-Crocheted</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-stone-900 leading-[1.1] tracking-tight [text-wrap:balance]">
              Hafsa Nizamani Handmade Crochet
            </h1>

            {/* Editorial Body */}
            <p className="text-base text-stone-600 leading-relaxed font-light max-w-lg">
              Every single dress, cardigan, and scarf is crafted completely by hand with warm devotion. 
              From cheerful 3D flower cardigans and soft baby crochet frocks to winter rose scarves, 
              each piece is custom-made stitch by stitch to bring beauty and joy.
            </p>

            {/* Dual CTA Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-stone-900 text-stone-50 text-xs uppercase tracking-widest font-semibold hover:bg-stone-800 transition-colors shadow-sm cursor-pointer whitespace-nowrap"
              >
                <span>View Crochet Pieces</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/923430333817?text=Hello%20Hafsa,%20I%20would%20like%20to%20order%20from%20your%20handmade%20crochet%20collection."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-800 hover:bg-emerald-700 text-white text-xs uppercase tracking-widest font-semibold transition-colors shadow-sm cursor-pointer whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp (03430333817)</span>
              </a>
            </div>

            {/* Location & Home Sourcing Metadata */}
            <div className="pt-4 border-t border-stone-200/60 flex items-center gap-3 text-xs text-stone-500">
              <span className="font-serif italic text-stone-800 text-sm">"Made by hand, made with heart."</span>
              <span aria-hidden="true">·</span>
              <span>Matli Bus Stop</span>
            </div>
          </div>

          {/* Right Column: Hero Fashion Image */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] w-full overflow-hidden bg-stone-200 shadow-lg border border-stone-200">
              <img
                src="/src/assets/images/hero_crochet_atelier_1792074149241.jpg"
                alt="Hafsa Nizamani Handmade Crochet Studio — Handcrafted Cardigans, Baby Frocks & Yarn"
                className="w-full h-full object-cover object-center transition-transform duration-1000 hover:scale-105"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-sm px-4 py-3 border border-stone-200/80 shadow-xs max-w-sm">
                <p className="text-[11px] uppercase tracking-widest text-amber-800 font-semibold">Homegrown Studio</p>
                <p className="text-sm font-serif text-stone-900 font-medium">Hafsa Nizamani Handmade Crochet</p>
                <p className="text-xs text-stone-600 mt-0.5">Main Road HyderAbaad Matli, Matli Bus Stop</p>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column Proof & Service Strip */}
        <div className="mt-16 pt-10 border-t border-stone-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-stone-700">
          <div className="flex items-start gap-3">
            <Scissors className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-stone-900">100% Hand-Crocheted</p>
              <p className="text-xs text-stone-500 mt-0.5">Every stitch crafted by hand</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Home className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-stone-900">Started from Home</p>
              <p className="text-xs text-stone-500 mt-0.5">Personal care in every creation</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-stone-900">Custom Sizing & Colors</p>
              <p className="text-xs text-stone-500 mt-0.5">Made exactly to your desired fit</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Heart className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-stone-900">Direct Contact</p>
              <p className="text-xs text-stone-500 mt-0.5">03430333817 · Order on WhatsApp</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
