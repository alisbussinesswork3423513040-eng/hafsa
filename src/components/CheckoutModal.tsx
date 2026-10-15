import React, { useState } from 'react';
import { X, CheckCircle, Truck, Package, MessageSquare, Phone } from 'lucide-react';
import { CartItem, ShippingDetails, PlacedOrder } from '../types/cart';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderPlaced: (order: PlacedOrder) => void;
  onClearCart: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderPlaced,
  onClearCart,
}) => {
  const [step, setStep] = useState<'details' | 'confirmation'>('details');
  const [confirmedOrder, setConfirmedOrder] = useState<PlacedOrder | null>(null);

  // Form states
  const [shipping, setShipping] = useState<ShippingDetails>({
    fullName: '',
    email: 'hafsaqadirbux0@gmail.com',
    phone: '',
    address: '',
    city: '',
    country: 'Pakistan',
    postalCode: '',
    specialInstructions: '',
  });

  const [deliveryMethod, setDeliveryMethod] = useState<'courier' | 'pickup'>('courier');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!shipping.fullName || !shipping.phone || !shipping.address || !shipping.city) {
      setErrorMsg('Please complete your name, phone/WhatsApp number, address, and city.');
      return;
    }
    setErrorMsg(null);
    setIsSubmitting(true);

    setTimeout(() => {
      const orderNum = `HAF-CR-${Math.floor(10000 + Math.random() * 90000)}`;
      const order: PlacedOrder = {
        orderNumber: orderNum,
        items: [...items],
        shipping,
        deliveryMethod: deliveryMethod === 'courier' ? 'Home Delivery Courier' : 'Studio Pickup (Matli)',
        createdAt: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        estimatedDelivery: '3 to 5 business days (Handmade stitch & dispatch)',
      };

      setConfirmedOrder(order);
      onOrderPlaced(order);
      onClearCart();
      setIsSubmitting(false);
      setStep('confirmation');
    }, 700);
  };

  const getWhatsAppFollowupUrl = () => {
    if (!confirmedOrder) return '';
    let msg = `Hello Hafsa! I just booked my custom handmade order on your website (Order #${confirmedOrder.orderNumber}).\n`;
    msg += `Name: ${confirmedOrder.shipping.fullName}\n`;
    msg += `Phone: ${confirmedOrder.shipping.phone}\n`;
    msg += `Address: ${confirmedOrder.shipping.address}, ${confirmedOrder.shipping.city}\n`;
    msg += `Items:\n`;
    confirmedOrder.items.forEach((i, idx) => {
      msg += `  ${idx + 1}. ${i.product.name} (${i.selectedColor.name}, Size: ${i.selectedSize}, Qty: ${i.quantity})\n`;
    });
    msg += `\nPlease confirm my booking and let me know the details. Thank you!`;
    return `https://wa.me/923430333817?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        className="relative w-full max-w-2xl bg-[#FAF8F5] border border-stone-200 shadow-2xl p-6 sm:p-8 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white text-stone-600 hover:text-stone-950 flex items-center justify-center border border-stone-200 cursor-pointer shadow-xs"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        {step !== 'confirmation' && (
          <div className="border-b border-stone-200 pb-4 mb-6">
            <span className="text-[11px] uppercase tracking-widest text-amber-800 font-semibold">
              Hafsa Nizamani Handmade Crochet
            </span>
            <h2 className="text-2xl font-serif text-stone-900 mt-1">
              Book Your Custom Handmade Order
            </h2>
            <p className="text-xs text-stone-600 mt-0.5">
              Enter your delivery details. Hafsa will personally confirm your order via WhatsApp or phone.
            </p>
          </div>
        )}

        {errorMsg && (
          <div className="mb-4 p-3 bg-rose-50 border border-rose-200 text-xs text-rose-700">
            {errorMsg}
          </div>
        )}

        {/* STEP 1: ORDER DETAILS FORM */}
        {step === 'details' && (
          <form onSubmit={handleBookingSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-stone-700 uppercase tracking-wider font-medium mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={shipping.fullName}
                  onChange={(e) => setShipping({ ...shipping, fullName: e.target.value })}
                  placeholder="Your full name"
                  className="w-full px-3 py-2 bg-white border border-stone-300 focus:outline-none focus:border-stone-900"
                />
              </div>

              <div>
                <label className="block text-stone-700 uppercase tracking-wider font-medium mb-1">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={shipping.phone}
                  onChange={(e) => setShipping({ ...shipping, phone: e.target.value })}
                  placeholder="0343... or WhatsApp number"
                  className="w-full px-3 py-2 bg-white border border-stone-300 focus:outline-none focus:border-stone-900 font-mono"
                />
              </div>

              <div>
                <label className="block text-stone-700 uppercase tracking-wider font-medium mb-1">
                  City *
                </label>
                <input
                  type="text"
                  required
                  value={shipping.city}
                  onChange={(e) => setShipping({ ...shipping, city: e.target.value })}
                  placeholder="e.g. Matli, Hyderabad, Karachi, Lahore"
                  className="w-full px-3 py-2 bg-white border border-stone-300 focus:outline-none focus:border-stone-900"
                />
              </div>

              <div>
                <label className="block text-stone-700 uppercase tracking-wider font-medium mb-1">
                  Country
                </label>
                <input
                  type="text"
                  value={shipping.country}
                  onChange={(e) => setShipping({ ...shipping, country: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-stone-300 focus:outline-none focus:border-stone-900"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-stone-700 uppercase tracking-wider font-medium mb-1">
                  Complete Delivery Address *
                </label>
                <input
                  type="text"
                  required
                  value={shipping.address}
                  onChange={(e) => setShipping({ ...shipping, address: e.target.value })}
                  placeholder="House/Street number, Area, Landmark"
                  className="w-full px-3 py-2 bg-white border border-stone-300 focus:outline-none focus:border-stone-900"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-stone-700 uppercase tracking-wider font-medium mb-1">
                  Special Color / Size Instructions (Optional)
                </label>
                <textarea
                  rows={2}
                  value={shipping.specialInstructions}
                  onChange={(e) => setShipping({ ...shipping, specialInstructions: e.target.value })}
                  placeholder="Any custom preferences (e.g., custom baby age, specific flower color, or custom length)"
                  className="w-full px-3 py-2 bg-white border border-stone-300 focus:outline-none focus:border-stone-900 resize-none"
                />
              </div>
            </div>

            {/* Delivery Option */}
            <div className="pt-2">
              <label className="block text-stone-700 uppercase tracking-wider font-medium text-xs mb-2">
                Delivery Preference
              </label>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <button
                  type="button"
                  onClick={() => setDeliveryMethod('courier')}
                  className={`p-3 border text-left cursor-pointer transition-all ${
                    deliveryMethod === 'courier'
                      ? 'border-stone-900 bg-white ring-1 ring-stone-900'
                      : 'border-stone-300 bg-stone-50'
                  }`}
                >
                  <Truck className="w-4 h-4 text-stone-800 mb-1" />
                  <p className="font-semibold text-stone-900">Courier Home Delivery</p>
                  <p className="text-[11px] text-stone-500">Delivered directly to your door</p>
                </button>

                <button
                  type="button"
                  onClick={() => setDeliveryMethod('pickup')}
                  className={`p-3 border text-left cursor-pointer transition-all ${
                    deliveryMethod === 'pickup'
                      ? 'border-stone-900 bg-white ring-1 ring-stone-900'
                      : 'border-stone-300 bg-stone-50'
                  }`}
                >
                  <Package className="w-4 h-4 text-stone-800 mb-1" />
                  <p className="font-semibold text-stone-900">Studio Pickup (Matli)</p>
                  <p className="text-[11px] text-stone-500">Main Road HyderAbaad Matli</p>
                </button>
              </div>
            </div>

            {/* Order Items Preview */}
            <div className="p-3 bg-stone-100 border border-stone-200/80 text-xs text-stone-600 space-y-1">
              <span className="font-medium text-stone-900 block">Selected Items ({items.length}):</span>
              {items.map((i) => (
                <div key={i.id} className="flex justify-between text-[11px]">
                  <span>{i.product.name} ({i.selectedColor.name}, {i.selectedSize})</span>
                  <span className="font-medium text-stone-800">Qty: {i.quantity}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
              <span className="text-xs text-stone-500">Dispatch from Matli Studio</span>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-stone-900 text-white text-xs uppercase tracking-widest font-semibold hover:bg-stone-800 transition-colors cursor-pointer shadow-sm disabled:opacity-50"
              >
                {isSubmitting ? 'Confirming Booking...' : 'Confirm Custom Order Request'}
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: CONFIRMATION RECEIPT */}
        {step === 'confirmation' && confirmedOrder && (
          <div className="space-y-6 text-center animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-emerald-800 font-semibold block">
                Order Request Received Successfully
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-light text-stone-900 mt-1">
                Thank You, {confirmedOrder.shipping.fullName.split(' ')[0]}
              </h3>
              <p className="text-xs text-stone-500 font-mono mt-1">
                Booking Reference: <span className="font-semibold text-stone-900">{confirmedOrder.orderNumber}</span>
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="text-left bg-white border border-stone-200 p-6 space-y-4 text-xs">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 block">Dispatch Studio</span>
                  <span className="font-medium text-stone-800">Main Road HyderAbaad Matli, Matli Bus Stop</span>
                  <span className="text-[10px] text-stone-500 block">Phone: 03430333817</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 block">Status</span>
                  <span className="font-medium text-emerald-800">Booking Confirmed</span>
                </div>
              </div>

              {/* Itemized list */}
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-wider text-stone-400 block">Handmade Items Booked:</span>
                {confirmedOrder.items.map((i) => (
                  <div key={i.id} className="flex justify-between text-stone-700">
                    <div>
                      <span className="font-serif font-medium text-stone-900">{i.product.name}</span>
                      <span className="text-stone-500 text-[11px] block">{i.selectedColor.name} · Size {i.selectedSize} · Qty {i.quantity}</span>
                    </div>
                    <span className="text-emerald-800 font-medium text-[11px]">Handmade by Hafsa</span>
                  </div>
                ))}
              </div>

              {/* Address */}
              <div className="border-t border-stone-100 pt-3 space-y-1">
                <div className="flex justify-between text-stone-600">
                  <span>Shipping Address:</span>
                  <span className="font-medium text-stone-900 text-right">{confirmedOrder.shipping.address}, {confirmedOrder.shipping.city}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Contact Number:</span>
                  <span className="font-medium text-stone-900">{confirmedOrder.shipping.phone}</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Follow-up CTA */}
            <div className="space-y-3">
              <a
                href={getWhatsAppFollowupUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-emerald-800 hover:bg-emerald-700 text-white text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm on WhatsApp with Hafsa (03430333817)</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border border-stone-300 text-stone-700 text-xs uppercase tracking-wider font-medium hover:border-stone-900 transition-colors cursor-pointer"
              >
                Continue Browsing
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
