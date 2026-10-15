import React, { useState } from 'react';
import { CROCHET_LOOKBOOK, CROCHET_PRODUCTS, Product } from '../data/products';
import { ShoppingBag, ChevronRight, ChevronLeft } from 'lucide-react';

interface LookbookSectionProps {
  onOpenProduct: (product: Product) => void;
}

export const LookbookSection: React.FC<LookbookSectionProps> = ({ onOpenProduct }) => {
  const [activeLookIndex, setActiveLookIndex] = useState(0);
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(null);

  const currentLook = CROCHET_LOOKBOOK[activeLookIndex];

  const handleNext = () => {
    setActiveLookIndex((prev) => (prev + 1) % CROCHET_LOOKBOOK.length);
    setActiveHotspotId(null);
  };

  const handlePrev = () => {
    setActiveLookIndex((prev) => (prev - 1 + CROCHET_LOOKBOOK.length) % CROCHET_LOOKBOOK.length);
    setActiveHotspotId(null);
  };

  const handleShopHotspot = (productId: string) => {
    const found = CROCHET_PRODUCTS.find((p) => p.id === productId);
    if (found) {
      onOpenProduct(found);
    }
  };

  return (
    <section id="lookbook" className="py-20 md:py-28 border-b border-stone-200/80 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-amber-800 font-medium">Visual Gallery</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-900 mt-1">
              Handmade Crochet Lookbook
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-stone-500 font-medium tabular-nums">
              Look {activeLookIndex + 1} of {CROCHET_LOOKBOOK.length}
            </span>
            <div className="flex gap-1">
              <button
                type="button"
                onClick={handlePrev}
                className="w-9 h-9 border border-stone-300 bg-white hover:border-stone-900 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous look"
              >
                <ChevronLeft className="w-4 h-4 text-stone-700" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-9 h-9 border border-stone-300 bg-white hover:border-stone-900 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next look"
              >
                <ChevronRight className="w-4 h-4 text-stone-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Editorial Frame with Interactive Hotspots */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-stone-200/80 p-6 sm:p-10 shadow-xs">
          
          {/* Main Visual with Hotspots */}
          <div className="lg:col-span-8 relative aspect-[3/4] sm:aspect-[4/3] overflow-hidden bg-stone-100">
            <img
              src={currentLook.image}
              alt={currentLook.title}
              className="w-full h-full object-cover object-center transition-all duration-700"
              referrerPolicy="no-referrer"
            />

            {/* Interactive Pins on Garment */}
            {currentLook.hotspots.map((spot) => {
              const isOpen = activeHotspotId === spot.productId;
              return (
                <div
                  key={spot.productId}
                  className="absolute"
                  style={{ top: `${spot.y}%`, left: `${spot.x}%` }}
                >
                  {/* Pin Trigger */}
                  <button
                    type="button"
                    onClick={() => setActiveHotspotId(isOpen ? null : spot.productId)}
                    className="relative w-8 h-8 rounded-full bg-white/95 text-stone-900 border border-stone-900/20 shadow-md flex items-center justify-center cursor-pointer group hover:scale-110 transition-transform"
                    aria-label={`Inspect ${spot.productTitle}`}
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-700 group-hover:bg-amber-900 transition-colors" />
                  </button>

                  {/* Hotspot Floating Tooltip Card (NO PRICE) */}
                  {isOpen && (
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-64 bg-white/95 backdrop-blur-md p-4 shadow-xl border border-stone-200 z-30 animate-fadeIn text-left">
                      <p className="text-[10px] uppercase tracking-widest text-amber-800 font-semibold">Handmade Creation</p>
                      <h4 className="text-sm font-serif font-medium text-stone-900 mt-0.5">{spot.productTitle}</h4>
                      <p className="text-xs text-stone-600 mt-1">
                        {spot.productTag}
                      </p>
                      <button
                        type="button"
                        onClick={() => handleShopHotspot(spot.productId)}
                        className="mt-3 w-full py-2 bg-stone-900 text-white text-[11px] uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 hover:bg-stone-800 transition-colors cursor-pointer"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Inspect Creation</span>
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Look Details Sidebar */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6 lg:pl-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-800 font-medium">
                {currentLook.season}
              </span>
              <h3 className="text-2xl font-serif text-stone-900 font-light mt-1">
                {currentLook.title}
              </h3>
              <p className="text-xs text-stone-500 italic mt-1 font-serif">
                {currentLook.maker}
              </p>
              
              <div className="mt-6 pt-6 border-t border-stone-100 space-y-4">
                <p className="text-xs text-stone-600 leading-relaxed font-light">
                  Click the interactive pins on each photograph to view yarn details, customize color palettes, and place direct handmade order requests.
                </p>

                {/* Hotspot List as Direct Cards (NO PRICE) */}
                <div className="space-y-2">
                  {currentLook.hotspots.map((spot) => (
                    <div
                      key={spot.productId}
                      className="p-3 bg-stone-50 border border-stone-200/80 flex items-center justify-between"
                    >
                      <div>
                        <p className="text-xs font-medium text-stone-900">{spot.productTitle}</p>
                        <p className="text-[11px] text-amber-800 font-medium">{spot.productTag}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleShopHotspot(spot.productId)}
                        className="px-3 py-1.5 bg-stone-900 text-white text-[10px] uppercase tracking-wider font-medium hover:bg-stone-800 transition-colors cursor-pointer"
                      >
                        Details
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick selector of spreads */}
            <div className="pt-4 border-t border-stone-100 flex items-center gap-2">
              {CROCHET_LOOKBOOK.map((spread, idx) => (
                <button
                  key={spread.id}
                  type="button"
                  onClick={() => {
                    setActiveLookIndex(idx);
                    setActiveHotspotId(null);
                  }}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    activeLookIndex === idx ? 'w-8 bg-stone-900' : 'w-3 bg-stone-300 hover:bg-stone-400'
                  }`}
                  aria-label={`Go to look ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
