import { Product } from '../data/products';

export interface CartItem {
  id: string; // unique item instance id (productId + size + color)
  product: Product;
  selectedSize: string;
  selectedColor: {
    name: string;
    hex: string;
  };
  quantity: number;
  customNotes?: string;
}

export interface ShippingDetails {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  postalCode?: string;
  specialInstructions?: string;
}

export interface PlacedOrder {
  orderNumber: string;
  items: CartItem[];
  shipping: ShippingDetails;
  deliveryMethod: string;
  createdAt: string;
  estimatedDelivery: string;
}
