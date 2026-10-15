import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onNavigateSection,
}) => {
  const [showPromo, setShowPromo] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigateSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      {/* Slim Top Announcement Bar with Real Contact Info */}
      {showPromo && (
        <div className="bg-stone-900 text-stone-200 text-xs py-2 px-4 flex items-center justify-between text-center relative border-b border-stone-800">
          <div className="flex-1 text-center font-normal tracking-wide flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-stone-300">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <a href="tel:03430333817" className="hover:text-white font-medium transition-colors">
                03430333817
              </a>
            </span>
            <span className="hidden sm:inline text-stone-600">·</span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Main Road HyderAbaad Matli, Matli Bus Stop</span>
            </span>
            <span className="hidden md:inline text-stone-600">·</span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-stone-300">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <a href="mailto:hafsaqadirbux0@gmail.com" className="hover:text-white transition-colors">
                hafsaqadirbux0@gmail.com
              </a>
            </span>
            <span className="hidden lg:inline text-stone-600">·</span>
            <span className="hidden lg:inline text-amber-300 font-medium">
              100% Handmade to Order
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs shrink-0">
            <a
              href="https://wa.me/923430333817?text=Hello%20Hafsa,%20I%20would%20like%20to%20inquire%20about%20your%20handmade%20crochet%20pieces."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 bg-emerald-800 hover:bg-emerald-700 text-white px-2.5 py-0.5 rounded text-[11px] font-semibold transition-colors"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => setShowPromo(false)}
              className="text-stone-400 hover:text-stone-100 transition-colors cursor-pointer p-0.5"
              aria-label="Dismiss banner"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Main Top Bar - strict 3-zone contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleNavClick('hero')}
          className="text-2xl sm:text-3xl font-serif tracking-[0.25em] text-stone-900 uppercase font-light cursor-pointer whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
        >
          HAFSA
        </button>

        {/* Zone 2: Clean single-line text nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wider uppercase text-stone-600">
          <button
            type="button"
            onClick={() => handleNavClick('catalog')}
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            The Collection
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('couture')}
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Categories
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('about')}
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            About Hafsa
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('lookbook')}
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Lookbook
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Interactive search, wishlist, and bag trigger */}
        <div className="flex items-center gap-3 sm:gap-5 shrink-0">
          {/* Search Trigger */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="p-2 text-stone-700 hover:text-stone-950 transition-colors cursor-pointer"
            aria-label="Search creations"
          >
            <Search className="w-5 h-5 stroke-[1.5]" />
          </button>

          {/* Wishlist Trigger */}
          <button
            type="button"
            onClick={onOpenWishlist}
            className="p-2 text-stone-700 hover:text-stone-950 transition-colors cursor-pointer relative"
            aria-label="View saved items"
          >
            <Heart className="w-5 h-5 stroke-[1.5]" />
            {wishlistCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-stone-900 text-stone-50 text-[10px] font-medium flex items-center justify-center rounded-full">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Bag Trigger */}
          <button
            type="button"
            onClick={onOpenCart}
            className="flex items-center gap-2 px-3 py-2 text-stone-900 hover:bg-stone-200/50 rounded-lg transition-colors cursor-pointer relative"
            aria-label="Order bag"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-stone-900 text-stone-50 text-[10px] font-semibold min-w-4 h-4 px-1 flex items-center justify-center rounded-full tabular-nums">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="hidden sm:inline-block text-xs uppercase tracking-widest font-medium">Bag</span>
          </button>

          {/* Mobile hamburger menu */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-800 hover:text-black cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-stone-200 p-6 space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-3 text-sm uppercase tracking-wider font-medium text-stone-700">
            <button
              type="button"
              onClick={() => handleNavClick('catalog')}
              className="text-left py-2 hover:text-stone-950 border-b border-stone-200/60"
            >
              The Collection
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('couture')}
              className="text-left py-2 hover:text-stone-950 border-b border-stone-200/60"
            >
              Categories
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('about')}
              className="text-left py-2 hover:text-stone-950 border-b border-stone-200/60"
            >
              About Hafsa
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('lookbook')}
              className="text-left py-2 hover:text-stone-950 border-b border-stone-200/60"
            >
              Lookbook
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className="text-left py-2 hover:text-stone-950 border-b border-stone-200/60"
            >
              Contact
            </button>
          </nav>

          <div className="pt-4 space-y-2 text-xs text-stone-600">
            <p className="font-medium text-stone-900">Direct Contact:</p>
            <p>Phone / WhatsApp: <a href="tel:03430333817" className="underline font-semibold">03430333817</a></p>
            <p>Email: <a href="mailto:hafsaqadirbux0@gmail.com" className="underline">hafsaqadirbux0@gmail.com</a></p>
            <p>Address: Main Road HyderAbaad Matli, Matli Bus Stop</p>
          </div>
        </div>
      )}
    </header>
  );
};
