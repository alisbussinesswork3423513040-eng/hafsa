import React, { useState, useMemo } from 'react';
import { X, Search, ArrowRight, MessageSquare } from 'lucide-react';
import { Product, PRODUCTS } from '../data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  const trendingQueries = [
    'Flower Garden Cardigan',
    'Red Bows Cardigan',
    'Sunflower Granny Square',
    'Royal Baby Frock Set',
    'Winter Rose Scarf',
    'Floral Tulip Headband',
  ];

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return PRODUCTS.filter((p) => {
      return (
        p.name.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.fabric.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q)
      );
    });
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24 animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-[#FAF8F5] border border-stone-200 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white text-stone-600 hover:text-stone-950 flex items-center justify-center border border-stone-200 cursor-pointer shadow-xs transition-colors"
          aria-label="Close search"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Title */}
        <div className="mb-4">
          <span className="text-[10px] uppercase tracking-widest text-amber-800 font-semibold">
            Handmade Catalog Search
          </span>
          <h3 className="text-xl font-serif font-light text-stone-900">
            Find Your Handmade Creation
          </h3>
        </div>

        {/* Search Input */}
        <div className="relative mb-6">
          <Search className="w-5 h-5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search cardigans, baby frocks, scarves, floral hair accessories..."
            className="w-full pl-11 pr-4 py-3 bg-white border border-stone-300 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 shadow-xs"
          />
        </div>

        {/* Trending Suggestions when input is empty */}
        {!query && (
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-stone-500 font-medium">
              Popular Handmade Designs
            </span>
            <div className="flex flex-wrap gap-2">
              {trendingQueries.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setQuery(t)}
                  className="px-3 py-1.5 bg-white hover:bg-stone-200 text-stone-700 text-xs border border-stone-200/80 transition-colors cursor-pointer"
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results List */}
        {query && (
          <div className="space-y-3 max-h-96 overflow-y-auto">
            <div className="flex items-center justify-between text-xs text-stone-500 pb-2 border-b border-stone-200">
              <span>{results.length} handmade items found</span>
            </div>

            {results.length === 0 ? (
              <div className="py-8 text-center text-xs text-stone-500">
                No creations matched "{query}". Try searching "cardigan", "baby", or "scarf".
              </div>
            ) : (
              results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="p-3 bg-white hover:bg-amber-50/50 border border-stone-200/80 flex items-center justify-between transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-16 object-cover bg-stone-100 border border-stone-200"
                    />
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-amber-800 font-semibold block">
                        {product.categoryLabel}
                      </span>
                      <h4 className="text-xs font-serif font-medium text-stone-900 group-hover:text-amber-900 transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-[11px] text-stone-500 truncate max-w-xs">{product.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                      {product.orderNotice}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-900 transition-colors" />
                  </div>
                </div>
              ))
            )}
          </div>
        )}

      </div>
    </div>
  );
};
