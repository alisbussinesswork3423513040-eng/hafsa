import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CapsuleGrid } from './components/CapsuleGrid';
import { ProductCatalog } from './components/ProductCatalog';
import { QuickViewModal } from './components/QuickViewModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { AtelierCraft } from './components/AtelierCraft';
import { AboutHafsa } from './components/AboutHafsa';
import { LookbookSection } from './components/LookbookSection';
import { ContactSection } from './components/ContactSection';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

import { Product, PRODUCTS } from './data/products';
import { CartItem, PlacedOrder } from './types/cart';
import { Check, Heart } from 'lucide-react';

export default function App() {
  // Cart state - initialized with first handcrafted creation
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('hafsa_cart');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return [
      {
        id: `${PRODUCTS[0].id}-${PRODUCTS[0].sizes[0]}-${PRODUCTS[0].colors[0].name}`,
        product: PRODUCTS[0],
        selectedSize: PRODUCTS[0].sizes[0],
        selectedColor: PRODUCTS[0].colors[0],
        quantity: 1,
      },
    ];
  });

  // Wishlist state
  const [wishlistIds, setWishlistIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('hafsa_wishlist');
      if (saved) return new Set(JSON.parse(saved));
    } catch (e) {
      console.error(e);
    }
    return new Set([PRODUCTS[0].id, PRODUCTS[3]?.id || 'crimson-baby-frock-set']);
  });

  // UI Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Filters & Selected Category
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Transient Toast Feedback
  const [toastMessage, setToastMessage] = useState<{ text: string; icon?: 'cart' | 'heart' } | null>(null);

  const showToast = (text: string, icon: 'cart' | 'heart' = 'cart') => {
    setToastMessage({ text, icon });
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Sync state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('hafsa_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('hafsa_wishlist', JSON.stringify(Array.from(wishlistIds)));
    } catch (e) {
      console.error(e);
    }
  }, [wishlistIds]);

  // Wishlist handler
  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) => {
      const next = new Set(prev);
      if (next.has(product.id)) {
        next.delete(product.id);
        showToast(`Removed "${product.name}" from saved list`, 'heart');
      } else {
        next.add(product.id);
        showToast(`Saved "${product.name}" to your wishlist`, 'heart');
      }
      return next;
    });
  };

  // Cart operations
  const handleAddToCart = (
    product: Product,
    size: string,
    color: { name: string; hex: string },
    quantity: number = 1
  ) => {
    const itemKey = `${product.id}-${size}-${color.name}`;
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.id === itemKey);
      if (existingIndex > -1) {
        const copy = [...prev];
        copy[existingIndex].quantity += quantity;
        return copy;
      } else {
        return [
          ...prev,
          {
            id: itemKey,
            product,
            selectedSize: size,
            selectedColor: color,
            quantity,
          },
        ];
      }
    });
    showToast(`Added ${quantity}x "${product.name}" to your order bag`, 'cart');
  };

  const handleQuickAdd = (product: Product) => {
    handleAddToCart(product, product.sizes[0], product.colors[0], 1);
  };

  const handleUpdateQuantity = (itemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const handleMoveToBagFromWishlist = (product: Product) => {
    handleAddToCart(product, product.sizes[0], product.colors[0], 1);
    setWishlistIds((prev) => {
      const next = new Set(prev);
      next.delete(product.id);
      return next;
    });
    setIsWishlistOpen(false);
    setIsCartOpen(true);
  };

  const handleClearWishlist = () => {
    setWishlistIds(new Set());
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderPlaced = (_order: PlacedOrder) => {
    // order placed
  };

  // Smooth Navigation
  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryFromCapsule = (catId: string) => {
    setSelectedCategory(catId);
    scrollToSection('catalog');
  };

  // Wishlist products array
  const wishlistProducts = PRODUCTS.filter((p) => wishlistIds.has(p.id));

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-stone-900 selection:text-stone-50">
      
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-900 text-stone-100 px-5 py-3 shadow-2xl border border-stone-800 flex items-center gap-3 text-xs tracking-wide animate-slideUp">
          {toastMessage.icon === 'heart' ? (
            <Heart className="w-4 h-4 text-rose-400 fill-rose-400 shrink-0" />
          ) : (
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          )}
          <span>{toastMessage.text}</span>
        </div>
      )}

      {/* Header */}
      <Header
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
        wishlistCount={wishlistIds.size}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onNavigateSection={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreClick={() => scrollToSection('catalog')}
          onLookbookClick={() => scrollToSection('lookbook')}
        />

        {/* Capsule Showcase */}
        <CapsuleGrid
          onSelectCategory={handleSelectCategoryFromCapsule}
        />

        {/* Product Catalog with Filters (No prices) */}
        <ProductCatalog
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onQuickView={setQuickViewProduct}
          onQuickAdd={handleQuickAdd}
        />

        {/* About Hafsa: Home-started journey & handmade story */}
        <AboutHafsa
          onContactClick={() => scrollToSection('contact')}
          onExploreCatalog={() => scrollToSection('catalog')}
        />

        {/* Atelier Craftsmanship & Slow Handcrafted Manifesto */}
        <AtelierCraft />

        {/* Interactive Lookbook with Shop-The-Look Pins */}
        <LookbookSection
          onOpenProduct={setQuickViewProduct}
        />

        {/* Direct Contact & Visit Section with Phone, Email & Address */}
        <ContactSection />

        {/* VIP Atelier Newsletter */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer
        onNavigateSection={scrollToSection}
      />

      {/* MODALS & DRAWERS */}
      
      {/* Quick View / Purchase Module Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isWishlisted={quickViewProduct ? wishlistIds.has(quickViewProduct.id) : false}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(prod, size, col, qty) => {
          handleAddToCart(prod, size, col, qty);
        }}
        onToggleWishlist={handleToggleWishlist}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      {/* Size Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setQuickViewProduct(p)}
      />

      {/* Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={handleProceedToCheckout}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveFromWishlist={handleToggleWishlist}
        onMoveToBag={handleMoveToBagFromWishlist}
        onClearWishlist={handleClearWishlist}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderPlaced={handleOrderPlaced}
        onClearCart={() => setCartItems([])}
      />

    </div>
  );
}
