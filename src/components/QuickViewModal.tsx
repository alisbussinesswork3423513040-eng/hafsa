import React, { useState } from 'react';
import { X, Heart, ShoppingBag, Check, ChevronDown, MessageSquare, Phone } from 'lucide-react';
import { Product } from '../data/products';

interface QuickViewModalProps {
  product: Product | null;
  isWishlisted: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, color: { name: string; hex: string }, quantity: number) => void;
  onToggleWishlist: (product: Product) => void;
  onOpenSizeGuide: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  isWishlisted,
  onClose,
  onAddToCart,
  onToggleWishlist,
}) => {
  if (!product) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [addedSuccess, setAddedSuccess] = useState(false);
  const [openSection, setOpenSection] = useState<'details' | 'care' | 'shipping' | null>('details');

  const allImages = product.galleryImages && product.galleryImages.length > 0
    ? product.galleryImages
    : [product.image];

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor, quantity);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
    }, 1800);
  };

  const whatsappUrl = `https://wa.me/923430333817?text=Hello%20Hafsa,%20I%20am%20interested%20in%20ordering%20the%20${encodeURIComponent(
    product.name
  )}%20(Color:%20${encodeURIComponent(selectedColor.name)},%20Size:%20${encodeURIComponent(
    selectedSize
  )},%20Qty:%20${quantity}).%20Please%20let%20me%20know%20how%20to%20proceed!`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-[#FAF8F5] border border-stone-200 shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm text-stone-600 hover:text-stone-950 flex items-center justify-center shadow-xs transition-colors cursor-pointer border border-stone-200"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Column: Visual Gallery */}
          <div className="bg-stone-100 flex flex-col justify-between p-6">
            <div className="relative aspect-[3/4] overflow-hidden bg-stone-200 shadow-xs">
              <img
                src={allImages[activeImageIndex] || product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-all duration-300"
                referrerPolicy="no-referrer"
              />
              {product.badge && (
                <span className="absolute top-3 left-3 bg-white/95 text-stone-900 text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5 border border-stone-200">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Gallery Thumbnails */}
            {allImages.length > 1 && (
              <div className="flex gap-3 mt-4">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-16 h-20 overflow-hidden border transition-all cursor-pointer ${
                      activeImageIndex === idx ? 'border-stone-900 ring-1 ring-stone-900' : 'border-stone-300 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Order & Customization Module (NO PRICES) */}
          <div className="p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh] bg-[#FAF8F5]">
            
            <div className="space-y-6">
              {/* Category & Origin kicker */}
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-800 font-medium">
                <span>{product.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span>{product.origin}</span>
              </div>

              {/* Title & Handmade Notice (NO PRICE!) */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif font-light text-stone-900">
                  {product.name}
                </h2>
                <p className="text-xs text-stone-500 font-light mt-1">
                  {product.subtitle}
                </p>

                <div className="flex items-center gap-3 mt-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
                    <span>{product.orderNotice}</span>
                  </span>
                  <span className="text-xs text-stone-500 font-light">
                    Direct from Hafsa's home atelier
                  </span>
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-stone-700 font-medium uppercase tracking-wider">Choose Color:</span>
                  <span className="text-stone-900 font-serif italic text-sm">{selectedColor.name}</span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelectedColor(c)}
                      className={`group relative p-1 rounded-full transition-all cursor-pointer ${
                        selectedColor.name === c.name ? 'ring-2 ring-stone-900 ring-offset-2' : 'hover:scale-105'
                      }`}
                      title={c.name}
                    >
                      <span
                        className="block w-6 h-6 rounded-full border border-stone-300 shadow-xs"
                        style={{ backgroundColor: c.hex }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-stone-700 font-medium uppercase tracking-wider">Select Size / Fit:</span>
                  <span className="text-[11px] text-stone-500">Custom adjustments available</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      className={`py-2 px-3 text-xs font-medium border text-center transition-all cursor-pointer truncate ${
                        selectedSize === sz
                          ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                          : 'bg-white text-stone-800 border-stone-300 hover:border-stone-900'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Stepper & Order Actions */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  {/* Quantity */}
                  <div className="flex items-center border border-stone-300 bg-white">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2.5 text-stone-600 hover:text-stone-950 transition-colors text-xs font-semibold cursor-pointer"
                    >
                      -
                    </button>
                    <span className="px-3 py-2.5 text-xs font-medium text-stone-900 tabular-nums">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2.5 text-stone-600 hover:text-stone-950 transition-colors text-xs font-semibold cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to Order Request */}
                  <button
                    type="button"
                    onClick={handleAdd}
                    className={`flex-1 py-3 px-4 text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      addedSuccess
                        ? 'bg-emerald-800 text-white'
                        : 'bg-stone-900 hover:bg-stone-800 text-white shadow-sm'
                    }`}
                  >
                    {addedSuccess ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Order Request</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Order Bag</span>
                      </>
                    )}
                  </button>

                  {/* Wishlist Toggle */}
                  <button
                    type="button"
                    onClick={() => onToggleWishlist(product)}
                    className={`p-3 border transition-colors cursor-pointer ${
                      isWishlisted
                        ? 'border-rose-300 bg-rose-50 text-rose-600'
                        : 'border-stone-300 bg-white text-stone-700 hover:text-stone-950'
                    }`}
                    aria-label="Toggle wishlist"
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-600' : ''}`} />
                  </button>
                </div>

                {/* Instant WhatsApp Order CTA (Prominent) */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-emerald-800 hover:bg-emerald-700 text-white text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Order on WhatsApp (03430333817)</span>
                </a>
              </div>

              {/* Accordions */}
              <div className="pt-4 border-t border-stone-200/80 space-y-2 text-xs">
                
                {/* Details Accordion */}
                <div className="border-b border-stone-200/60 pb-2">
                  <button
                    type="button"
                    onClick={() => setOpenSection(openSection === 'details' ? null : 'details')}
                    className="w-full flex items-center justify-between text-left py-1 text-stone-800 font-medium uppercase tracking-wider cursor-pointer"
                  >
                    <span>Handmade Craftsmanship & Yarn</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openSection === 'details' ? 'rotate-180' : ''}`} />
                  </button>
                  {openSection === 'details' && (
                    <div className="pt-2 text-stone-600 font-light space-y-1.5 animate-fadeIn">
                      <p className="font-medium text-stone-800">{product.fabric}</p>
                      <p>{product.description}</p>
                      <ul className="list-disc pl-4 space-y-1 mt-2 text-[11px]">
                        {product.details.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Care Accordion */}
                <div className="border-b border-stone-200/60 pb-2">
                  <button
                    type="button"
                    onClick={() => setOpenSection(openSection === 'care' ? null : 'care')}
                    className="w-full flex items-center justify-between text-left py-1 text-stone-800 font-medium uppercase tracking-wider cursor-pointer"
                  >
                    <span>Yarn Care & Sizing Advice</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openSection === 'care' ? 'rotate-180' : ''}`} />
                  </button>
                  {openSection === 'care' && (
                    <div className="pt-2 text-stone-600 font-light space-y-2 animate-fadeIn text-[11px]">
                      <ul className="list-disc pl-4 space-y-1">
                        {product.care.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Made to order & Delivery */}
                <div className="border-b border-stone-200/60 pb-2">
                  <button
                    type="button"
                    onClick={() => setOpenSection(openSection === 'shipping' ? null : 'shipping')}
                    className="w-full flex items-center justify-between text-left py-1 text-stone-800 font-medium uppercase tracking-wider cursor-pointer"
                  >
                    <span>Delivery from Matli Studio</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openSection === 'shipping' ? 'rotate-180' : ''}`} />
                  </button>
                  {openSection === 'shipping' && (
                    <div className="pt-2 text-stone-600 font-light space-y-1 text-[11px] animate-fadeIn">
                      <p>• Handcrafted with love at: Main Road HyderAbaad Matli, Matli Bus Stop.</p>
                      <p>• Fast delivery across Pakistan (Karachi, Hyderabad, Lahore, Islamabad & all cities).</p>
                      <p>• Direct contact on Phone & WhatsApp: 03430333817.</p>
                    </div>
                  )}
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
