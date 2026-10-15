import React from 'react';
import { Eye, Heart, MessageSquare, Plus } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted,
  onToggleWishlist,
  onQuickView,
  onQuickAdd,
}) => {
  const whatsappUrl = `https://wa.me/923430333817?text=Hello%20Hafsa,%20I%20would%20like%20to%20order%20the%20handmade%20crochet%20item:%20"${encodeURIComponent(
    product.name
  )}".`;

  return (
    <div className="group relative flex flex-col bg-white border border-stone-200/80 hover:border-amber-900/40 transition-all duration-300 shadow-xs hover:shadow-md">
      
      {/* Product Image Stage */}
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Subtle Badge Tag */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-stone-900 text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 border border-stone-200 shadow-xs">
            {product.badge}
          </div>
        )}

        {/* Wishlist Heart Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer shadow-xs ${
            isWishlisted
              ? 'bg-rose-50 text-rose-600 border border-rose-200'
              : 'bg-white/90 backdrop-blur-sm text-stone-700 hover:text-stone-950 border border-stone-200/60'
          }`}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-600' : 'stroke-[1.75]'}`} />
        </button>

        {/* Quick View and Quick Add Hover Overlay Bar */}
        <div className="absolute inset-x-3 bottom-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
          <button
            type="button"
            onClick={() => onQuickView(product)}
            className="flex-1 py-2.5 bg-white/95 backdrop-blur-sm hover:bg-stone-900 hover:text-white text-stone-900 text-xs uppercase tracking-wider font-semibold border border-stone-300/80 transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Details</span>
          </button>
          <button
            type="button"
            onClick={() => onQuickAdd(product)}
            className="px-3.5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center shadow-sm cursor-pointer"
            aria-label="Add to order list"
            title="Add to order list"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Card Content & Metadata (NO PRICE!) */}
      <div className="p-4 flex flex-col flex-1 justify-between bg-white">
        <div>
          {/* Category & Origin quiet metadata */}
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-amber-800 font-medium mb-1">
            <span>{product.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>Handmade</span>
          </div>

          {/* Product Title */}
          <h3
            onClick={() => onQuickView(product)}
            className="text-base font-serif font-medium text-stone-900 hover:text-amber-800 transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Subtitle / Key feature */}
          <p className="text-xs text-stone-500 font-light mt-0.5 line-clamp-1">
            {product.subtitle}
          </p>
        </div>

        {/* Bottom Bar: Order Notice & Direct WhatsApp CTA */}
        <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
            <span className="text-xs font-medium text-stone-800">
              {product.orderNotice}
            </span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-semibold text-emerald-800 hover:text-emerald-950 transition-colors bg-emerald-50 hover:bg-emerald-100 px-2 py-1 rounded"
          >
            <MessageSquare className="w-3 h-3 text-emerald-700" />
            <span>Order</span>
          </a>
        </div>

      </div>
    </div>
  );
};
