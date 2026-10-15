import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CapsuleGridProps {
  onSelectCategory: (category: string) => void;
}

export const CapsuleGrid: React.FC<CapsuleGridProps> = ({ onSelectCategory }) => {
  const capsules = [
    {
      id: 'cardigans',
      title: 'Crochet Cardigans & Sweaters',
      subtitle: '3D floral garden designs, red bows, and sunflower granny squares',
      image: '/src/assets/images/crochet_cardigan_flowers_1792074053668.jpg',
      count: 'Chunky Knits',
    },
    {
      id: 'baby-sets',
      title: 'Handmade Baby Sets & Frocks',
      subtitle: 'Lace-trimmed frocks, personalized rompers, booties & matching headbands',
      image: '/src/assets/images/crochet_baby_frock_red_1792074051854.jpg',
      count: 'Baby Couture',
    },
    {
      id: 'scarves',
      title: 'Rose & Ribbon Winter Scarves',
      subtitle: 'Plush ribbed mufflers with 3D blooming roses, bows, and tassels',
      image: '/src/assets/images/crochet_scarf_roses_1792074055180.jpg',
      count: 'Winter Warmth',
    },
    {
      id: 'accessories',
      title: 'Floral Hairbands & Hairpins',
      subtitle: 'Hand-crocheted tulip headbands, daisy ribbons, and sunflower hair sticks',
      image: '/src/assets/images/crochet_accessories_flatlay_1792074055008.jpg',
      count: 'Hair Accessories',
    },
  ];

  return (
    <section id="couture" className="py-16 md:py-24 border-b border-stone-200/80 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-amber-800 font-medium">Handcrafted Categories</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-900 mt-1">
              Explore Our Handmade Creations
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md font-light">
            Every creation is stitched by hand with soft skin-friendly yarns, available in custom sizes and personalized color themes.
          </p>
        </div>

        {/* 4-Item Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capsules.map((capsule) => (
            <button
              key={capsule.id}
              type="button"
              onClick={() => onSelectCategory(capsule.id)}
              className="group text-left flex flex-col bg-white overflow-hidden border border-stone-200/80 hover:border-amber-900/50 transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
                <img
                  src={capsule.image}
                  alt={capsule.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-stone-800 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-amber-800 block mb-1 font-medium">
                    {capsule.count}
                  </span>
                  <h3 className="text-lg font-serif font-medium text-stone-900 group-hover:text-amber-800 transition-colors">
                    {capsule.title}
                  </h3>
                  <p className="text-xs text-stone-600 font-light mt-1.5 line-clamp-2">
                    {capsule.subtitle}
                  </p>
                </div>
                
                <div className="pt-4 mt-2 border-t border-stone-100 flex items-center text-xs font-semibold uppercase tracking-wider text-stone-900 group-hover:text-amber-900">
                  <span>Browse Category</span>
                </div>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
