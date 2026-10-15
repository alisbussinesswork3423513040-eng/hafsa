import React, { useState } from 'react';
import { ArrowRight, Check, Heart, Bell } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 border-b border-stone-200/80 bg-stone-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs uppercase tracking-[0.25em] text-amber-800 font-semibold flex items-center justify-center gap-1.5">
          <Bell className="w-3.5 h-3.5" />
          <span>New Collection Alerts</span>
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-900 leading-tight">
          Join Hafsa's Handcraft Circle
        </h2>
        <p className="text-sm text-stone-600 max-w-lg mx-auto font-light leading-relaxed">
          Be the first to know when Hafsa releases new handmade crochet designs, seasonal flower cardigans, baby couture drops, and open custom order slots.
        </p>

        {submitted ? (
          <div className="p-6 bg-white border border-stone-200 shadow-xs max-w-md mx-auto animate-fadeIn">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center mx-auto mb-2">
              <Check className="w-5 h-5" />
            </div>
            <h4 className="text-base font-serif font-medium text-stone-900">Thank You for Subscribing!</h4>
            <p className="text-xs text-stone-500 mt-1">
              We have welcomed <span className="font-medium text-stone-800">{email}</span> to our handcraft circle. You will receive priority notifications for every new creation.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-white border border-stone-300 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 shadow-xs"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-stone-900 text-white text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:bg-stone-800 transition-colors cursor-pointer whitespace-nowrap shadow-xs"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <p className="text-[11px] text-stone-500 font-light">
          Direct handmade pieces from Matli · No spam, only genuine artisan updates.
        </p>
      </div>
    </section>
  );
};
