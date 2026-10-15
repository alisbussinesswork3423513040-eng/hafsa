import React from 'react';
import { X, Heart, ShoppingBag, Trash2, MessageSquare } from 'lucide-react';
import { Product } from '../data/products';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  onRemoveFromWishlist: (product: Product) => void;
  onMoveToBag: (product: Product) => void;
  onClearWishlist: () => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveFromWishlist,
  onMoveToBag,
  onClearWishlist,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-stone-900/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] border-l border-stone-200 shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-6 border-b border-stone-200/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-700 fill-rose-100 stroke-[1.5]" />
              <h2 className="text-base font-serif font-medium uppercase tracking-widest text-stone-900">
                Saved Creations ({wishlistProducts.length})
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-stone-500 hover:text-stone-900 cursor-pointer transition-colors"
              aria-label="Close wishlist"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {wishlistProducts.length === 0 ? (
              <div className="text-center py-20 space-y-3">
                <Heart className="w-12 h-12 stroke-[1] text-stone-300 mx-auto" />
                <p className="text-sm font-serif text-stone-700">No creations saved yet.</p>
                <p className="text-xs text-stone-500 font-light max-w-xs mx-auto">
                  Save your favorite handmade cardigans, baby sets, and scarves to inquire or order anytime.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-4 px-6 py-2.5 bg-stone-900 text-stone-50 text-xs uppercase tracking-wider font-medium hover:bg-stone-800 transition-colors cursor-pointer"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              wishlistProducts.map((product) => {
                const whatsappUrl = `https://wa.me/923430333817?text=Hello%20Hafsa,%20I%20am%20interested%20in%20ordering%20the%20saved%20piece:%20"${encodeURIComponent(
                  product.name
                )}".`;

                return (
                  <div
                    key={product.id}
                    className="flex gap-4 pb-6 border-b border-stone-200/60 last:border-0"
                  >
                    <div className="w-20 h-26 bg-stone-100 border border-stone-200 shrink-0 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover object-center"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-sm font-serif font-medium text-stone-900">
                            {product.name}
                          </h3>
                          <button
                            type="button"
                            onClick={() => onRemoveFromWishlist(product)}
                            className="text-stone-400 hover:text-rose-600 transition-colors cursor-pointer p-0.5"
                            title="Remove from saved"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <p className="text-[11px] text-stone-500 mt-0.5 truncate">{product.fabric}</p>
                        
                        {/* Order status badge instead of price */}
                        <div className="mt-1 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block" />
                          <span className="text-xs font-medium text-stone-800">
                            {product.orderNotice}
                          </span>
                        </div>
                      </div>

                      <div className="pt-2 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => onMoveToBag(product)}
                          className="flex-1 py-2 bg-stone-900 text-white text-[11px] uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 hover:bg-stone-800 transition-colors cursor-pointer"
                        >
                          <ShoppingBag className="w-3 h-3" />
                          <span>Add to Bag</span>
                        </button>

                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 transition-colors cursor-pointer"
                          title="Inquire on WhatsApp"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer */}
          {wishlistProducts.length > 0 && (
            <div className="p-4 bg-stone-100 border-t border-stone-200 flex justify-between items-center text-xs">
              <span className="text-stone-500">{wishlistProducts.length} items saved</span>
              <button
                type="button"
                onClick={onClearWishlist}
                className="text-stone-600 hover:text-rose-600 underline cursor-pointer transition-colors"
              >
                Clear all saved
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
