import React from 'react';
import { X, ShoppingBag, Trash2, ArrowRight, MessageSquare, Clock, Scissors } from 'lucide-react';
import { CartItem } from '../types/cart';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (itemId: string, newQty: number) => void;
  onRemoveItem: (itemId: string) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  if (!isOpen) return null;

  const totalQuantity = items.reduce((s, i) => s + i.quantity, 0);

  // Generate WhatsApp order message with all items
  const generateWhatsAppOrderText = () => {
    let msg = `Hello Hafsa! I would like to place a custom handmade crochet order:\n\n`;
    items.forEach((item, idx) => {
      msg += `${idx + 1}. ${item.product.name}\n`;
      msg += `   • Color: ${item.selectedColor.name}\n`;
      msg += `   • Size: ${item.selectedSize}\n`;
      msg += `   • Qty: ${item.quantity}\n\n`;
    });
    msg += `Please confirm the order details and let me know the timeframe and delivery process to my city! Thank you.`;
    return encodeURIComponent(msg);
  };

  const whatsappOrderUrl = `https://wa.me/923430333817?text=${generateWhatsAppOrderText()}`;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-stone-900/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] border-l border-stone-200 shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-6 border-b border-stone-200/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-stone-900 stroke-[1.5]" />
              <h2 className="text-base font-serif font-medium uppercase tracking-widest text-stone-900">
                Order Request Bag ({totalQuantity})
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-stone-500 hover:text-stone-900 cursor-pointer"
              aria-label="Close bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Handmade Craft Notice */}
          <div className="px-6 py-3 bg-amber-50/70 border-b border-amber-200/60 text-xs text-amber-950 flex items-center gap-2">
            <Scissors className="w-4 h-4 text-amber-800 shrink-0" />
            <p className="font-light">
              <span className="font-semibold text-stone-900">100% Handmade to Order:</span> Each piece is individually crocheted by Hafsa.
            </p>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="text-center py-20 space-y-3">
                <ShoppingBag className="w-12 h-12 stroke-[1] text-stone-300 mx-auto" />
                <p className="text-sm font-serif text-stone-700">Your order request bag is currently empty.</p>
                <p className="text-xs text-stone-500 font-light max-w-xs mx-auto">
                  Explore our handmade 3D flower cardigans, royal baby frocks, and winter scarves.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-4 px-6 py-2.5 bg-stone-900 text-stone-50 text-xs uppercase tracking-wider font-medium hover:bg-stone-800 transition-colors cursor-pointer"
                >
                  Browse Creations
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 pb-6 border-b border-stone-200/60 last:border-0"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-24 bg-stone-100 border border-stone-200 shrink-0 overflow-hidden">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-sm font-serif font-medium text-stone-900">
                          {item.product.name}
                        </h3>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.id)}
                          className="text-stone-400 hover:text-rose-600 transition-colors cursor-pointer p-0.5"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Chosen Variant info */}
                      <div className="text-[11px] text-stone-500 font-light mt-1 space-y-0.5">
                        <div className="flex items-center gap-1.5">
                          <span>Color:</span>
                          <span
                            className="inline-block w-2.5 h-2.5 rounded-full border border-stone-300"
                            style={{ backgroundColor: item.selectedColor.hex }}
                          />
                          <span className="text-stone-700 font-medium">{item.selectedColor.name}</span>
                        </div>
                        <p>Size: <span className="text-stone-700 font-medium">{item.selectedSize}</span></p>
                      </div>
                    </div>

                    {/* Quantity Stepper & Notice */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-stone-300 bg-white">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-0.5 text-xs text-stone-600 hover:text-stone-950 font-semibold cursor-pointer"
                        >
                          -
                        </button>
                        <span className="px-2 py-0.5 text-xs text-stone-900 font-medium tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs text-stone-600 hover:text-stone-950 font-semibold cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-[11px] font-medium text-amber-900 bg-amber-50 px-2 py-0.5 border border-amber-200">
                        Handmade by Hafsa
                      </span>
                    </div>

                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary (NO PRICES) */}
          {items.length > 0 && (
            <div className="p-6 bg-white border-t border-stone-200/80 space-y-4">
              
              <div className="space-y-1 text-xs text-stone-600">
                <div className="flex items-center gap-1.5 text-stone-800 font-medium">
                  <Clock className="w-3.5 h-3.5 text-amber-700" />
                  <span>Estimated Handcrafting: 3 - 5 days</span>
                </div>
                <p className="text-[11px] text-stone-500 font-light">
                  Direct dispatch from Main Road HyderAbaad Matli to all cities across Pakistan & overseas.
                </p>
              </div>

              {/* Direct WhatsApp Instant Booking CTA */}
              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-emerald-800 text-white text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors cursor-pointer shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Order on WhatsApp</span>
              </a>

              {/* Online Form Booking Option */}
              <button
                type="button"
                onClick={onProceedToCheckout}
                className="w-full py-3 bg-stone-900 text-stone-50 text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:bg-stone-800 transition-colors cursor-pointer shadow-sm"
              >
                <span>Book Custom Order Online</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-center text-stone-400 font-light">
                Call / WhatsApp: 03430333817 · Email: hafsaqadirbux0@gmail.com
              </p>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
