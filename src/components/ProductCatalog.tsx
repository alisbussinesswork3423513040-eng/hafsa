import React, { useState, useMemo } from 'react';
import { Product, CROCHET_PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { RotateCcw } from 'lucide-react';

interface ProductCatalogProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  wishlistIds: Set<string>;
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  selectedCategory,
  onSelectCategory,
  wishlistIds,
  onToggleWishlist,
  onQuickView,
  onQuickAdd,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Handmade Pieces' },
    { id: 'cardigans', label: 'Crochet Cardigans' },
    { id: 'baby-sets', label: 'Baby Crochet Sets' },
    { id: 'scarves', label: 'Handmade Scarves' },
    { id: 'accessories', label: 'Floral Hairbands & Pins' },
  ];

  // Filtering
  const filteredProducts = useMemo(() => {
    return CROCHET_PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Search filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesSubtitle = product.subtitle.toLowerCase().includes(q);
        const matchesFabric = product.fabric.toLowerCase().includes(q);
        const matchesCategory = product.categoryLabel.toLowerCase().includes(q);
        if (!matchesName && !matchesSubtitle && !matchesFabric && !matchesCategory) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  const handleResetFilters = () => {
    onSelectCategory('all');
    setSearchQuery('');
  };

  return (
    <section id="catalog" className="py-16 md:py-24 border-b border-stone-200/80 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-800 font-medium">
              <span>Hafsa Nizamani Handmade</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{filteredProducts.length} Handcrafted Designs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-900 mt-1">
              Handmade Crochet Collection
            </h2>
          </div>

          {/* Search in Catalog */}
          <div className="w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search cardigans, frocks, scarves..."
              className="w-full px-4 py-2.5 bg-white border border-stone-300 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 transition-colors"
            />
          </div>
        </div>

        {/* Filter Bar: Segmented Category Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 border-b border-stone-200 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-stone-900 text-stone-50 shadow-xs'
                  : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200/70'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid (No prices shown) */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlistIds.has(product.id)}
                onToggleWishlist={onToggleWishlist}
                onQuickView={onQuickView}
                onQuickAdd={onQuickAdd}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="py-20 text-center bg-white border border-stone-200/80 my-10 px-4">
            <p className="text-sm uppercase tracking-widest text-stone-400 font-medium">No Items Found</p>
            <h3 className="text-2xl font-serif text-stone-800 mt-2">Try a different search term</h3>
            <p className="text-xs text-stone-500 mt-2 max-w-sm mx-auto font-light">
              We couldn't find items matching your search. Browse all handmade pieces.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 bg-stone-900 text-stone-50 text-xs uppercase tracking-wider font-medium hover:bg-stone-800 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Show All Creations</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
