export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'cardigans' | 'baby-sets' | 'scarves' | 'accessories';
  categoryLabel: string;
  orderNotice: string; // replaces price (e.g., "Custom Made to Order")
  fabric: string;
  origin: string;
  badge?: string;
  image: string;
  galleryImages: string[];
  colors: ProductColor[];
  sizes: string[];
  inStock: boolean;
  leadTime?: string;
  description: string;
  details: string[];
  care: string[];
  measurementsGuide?: {
    fit: string;
    modelHeight: string;
    modelSize: string;
  };
}

export const CROCHET_PRODUCTS: Product[] = [
  // CARDIGANS
  {
    id: 'flower-garden-cardigan',
    name: '3D Flower Garden Chunky Cardigan',
    subtitle: 'Cream oversized cardigan with vibrant handcrafted 3D crochet flowers',
    category: 'cardigans',
    categoryLabel: 'Crochet Cardigans',
    orderNotice: 'Handmade to Order',
    fabric: 'Premium Soft Acrylic & Cotton Blend Yarn',
    origin: 'Handmade by Hafsa in Matli',
    badge: 'Bestseller',
    image: '/src/assets/images/crochet_cardigan_flowers_1792074053668.jpg',
    galleryImages: [
      '/src/assets/images/crochet_cardigan_flowers_1792074053668.jpg',
      '/src/assets/images/hero_crochet_atelier_1792074149241.jpg',
    ],
    colors: [
      { name: 'Warm Cream with Pastel Florals', hex: '#FDFBF7' },
      { name: 'Sage Green Base', hex: '#B2C4B2' },
      { name: 'Custom Color Combination', hex: '#D8CAB7' },
    ],
    sizes: ['Free Size (Relaxed Fit)', 'Small / Medium', 'Large / XL', 'Custom Measurements'],
    inStock: true,
    leadTime: 'Crafted in 4-6 days · Shipped promptly',
    description: 'An iconic hand-knitted piece crafted with love. Features a chunky ribbed knit body, dropped cozy balloon sleeves, and individual hand-crocheted 3D flowers in cheerful shades of yellow, lilac, turquoise, and pink. Each flower is sewn onto the cardigan by hand.',
    details: [
      '100% hand-knitted and crocheted stitch-by-stitch',
      'Handcrafted 3D floral appliqués across front, back, and sleeves',
      'Comfortable chunky rib hem, collar, and cuffs with contrast buttons',
      'Custom sizing and flower color themes available upon request',
    ],
    care: [
      'Gentle hand wash in cold water using mild baby detergent',
      'Do not wring or twist; press water out gently between clean towels',
      'Dry flat in shade to preserve floral volume and knit shape',
    ],
    measurementsGuide: {
      fit: 'Relaxed oversized aesthetic silhouette',
      modelHeight: 'Custom tailored to your height',
      modelSize: 'Comfortable stretch knit',
    },
  },
  {
    id: 'red-bows-cropped-cardigan',
    name: 'Cozy Red Bows Cropped Cardigan',
    subtitle: 'Cream cropped knit sweater dotted with 3D red crochet bows',
    category: 'cardigans',
    categoryLabel: 'Crochet Cardigans',
    orderNotice: 'Handmade to Order',
    fabric: 'Soft Cotton-Touch Knit Yarn',
    origin: 'Handmade by Hafsa in Matli',
    badge: 'Trending Design',
    image: '/src/assets/images/crochet_cardigan_bows_1792074097467.jpg',
    galleryImages: [
      '/src/assets/images/crochet_cardigan_bows_1792074097467.jpg',
      '/src/assets/images/hero_crochet_atelier_1792074149241.jpg',
    ],
    colors: [
      { name: 'Cream with Crimson Bows', hex: '#FAF7F2' },
      { name: 'Black with White Bows', hex: '#1C1917' },
      { name: 'Soft Pink with Burgundy Bows', hex: '#F5D3D6' },
    ],
    sizes: ['Cropped Small', 'Cropped Medium', 'Cropped Large', 'Custom Fit'],
    inStock: true,
    leadTime: 'Made to order within 5 days',
    description: 'A charming, coquette-inspired cropped knit cardigan covered in individually crocheted 3D red ribbon bows. Finished with coordinating red round buttons and structured ribbed borders.',
    details: [
      'Individually hand-tied 3D crochet bows secured with double stitching',
      'Flattering V-neckline with ribbed placket and covered red buttons',
      'Slightly ballooned sleeves with snug wrist cuffs',
      'Custom length adjustments (standard cropped or full hip length)',
    ],
    care: [
      'Hand wash cold gently; lay flat to dry',
      'Store folded rather than on a hanger to retain knit elasticity',
    ],
  },
  {
    id: 'sunflower-granny-cardigan',
    name: 'Sunflower Granny Square Cardigan',
    subtitle: 'Black chunky artisan cardigan with vibrant yellow blooming sunflowers',
    category: 'cardigans',
    categoryLabel: 'Crochet Cardigans',
    orderNotice: 'Handmade to Order',
    fabric: 'Cozy Durable Acrylic & Wool Blend',
    origin: 'Handmade by Hafsa in Matli',
    badge: 'Signature Craft',
    image: '/src/assets/images/crochet_cardigan_sunflower_1792074053735.jpg',
    galleryImages: [
      '/src/assets/images/crochet_cardigan_sunflower_1792074053735.jpg',
      '/src/assets/images/hero_crochet_atelier_1792074149241.jpg',
    ],
    colors: [
      { name: 'Midnight Black & Sunflowers', hex: '#18181B' },
      { name: 'Natural Oatmeal & Sunflowers', hex: '#E6DCCF' },
      { name: 'Forest Green & Sunflowers', hex: '#2D4436' },
    ],
    sizes: ['Small / Medium', 'Medium / Large', 'Oversized XL', 'Bespoke Size'],
    inStock: true,
    leadTime: 'Handmade in 5-7 days',
    description: 'Each granny square is meticulously crocheted with a textured 3D sunflower center and rich golden petals, then seamlessly joined by hand into a statement cardigan that turns heads everywhere.',
    details: [
      'Features deep functional crochet front pockets with sunflower motif',
      'Sturdy textured border with ribbed hem and cuffs',
      'Comfortable heavy drape that keeps you cozy all winter',
      'Handcrafted tag with Hafsa Nizamani signature branding',
    ],
    care: ['Gentle hand rinse with wool conditioner', 'Dry flat in shade'],
  },

  // BABY CROCHET SETS
  {
    id: 'crimson-baby-frock-set',
    name: 'Crimson & Cream Royal Baby Frock Set',
    subtitle: 'Hand-crocheted frock with scalloped lace hem, booties & floral headband',
    category: 'baby-sets',
    categoryLabel: 'Baby Crochet Sets',
    orderNotice: 'Handmade to Order',
    fabric: 'Ultra-Soft Hypoallergenic Baby Yarn',
    origin: 'Handmade by Hafsa in Matli',
    badge: 'Complete 3-Piece Set',
    image: '/src/assets/images/crochet_baby_frock_red_1792074051854.jpg',
    galleryImages: [
      '/src/assets/images/crochet_baby_frock_red_1792074051854.jpg',
      '/src/assets/images/hero_crochet_atelier_1792074149241.jpg',
    ],
    colors: [
      { name: 'Deep Crimson Red & Cream', hex: '#8B1E2D' },
      { name: 'Royal Teal & Snow White', hex: '#165B72' },
      { name: 'Lavender & White with Roses', hex: '#A888B5' },
    ],
    sizes: ['0 - 3 Months', '3 - 6 Months', '6 - 12 Months', '12 - 18 Months', '2 Years'],
    inStock: true,
    leadTime: 'Crafted in 3-4 days',
    description: 'The pinnacle of handmade baby couture. A breathtaking frock featuring intricate shell stitch patterning, cream scalloped lace edging, satin waist ribbon with pearl accent, accompanied by matching crochet booties and floral headbands designed to be gentle on baby skin.',
    details: [
      'Complete set includes: Frock dress, baby booties, and matching floral headband',
      'Ultra-soft, itch-free baby yarn safe for delicate newborn skin',
      'Delicate shell-stitch hem with cream scalloped borders',
      'Rear mother-of-pearl buttons for easy dressing',
    ],
    care: [
      'Hand wash in lukewarm water with baby detergent',
      'Dry flat on a soft towel; do not bleach or iron',
    ],
    measurementsGuide: {
      fit: 'Comfortable generous stretch for babies',
      modelHeight: 'Available for ages 0 up to 24 months',
      modelSize: 'Custom size requests welcome',
    },
  },
  {
    id: 'baby-boy-bear-set',
    name: 'Sky Blue "Teddy Bear" Baby Boy Knitted Set',
    subtitle: 'Cozy cable-textured sweater, matching pants, pompom beanie & bear booties',
    category: 'baby-sets',
    categoryLabel: 'Baby Crochet Sets',
    orderNotice: 'Handmade to Order',
    fabric: 'Soft Anti-Pilling Baby Cashmilon Yarn',
    origin: 'Handmade by Hafsa in Matli',
    badge: '4-Piece Baby Boy Set',
    image: '/src/assets/images/crochet_baby_boy_musa_1792074096519.jpg',
    galleryImages: [
      '/src/assets/images/crochet_baby_boy_musa_1792074096519.jpg',
      '/src/assets/images/hero_crochet_atelier_1792074149241.jpg',
    ],
    colors: [
      { name: 'Pastel Sky Blue', hex: '#87CEEB' },
      { name: 'Warm Cream & Beige', hex: '#EBE5DC' },
      { name: 'Sage Green', hex: '#A3B18A' },
    ],
    sizes: ['Newborn (0-3M)', '3 - 6 Months', '6 - 12 Months', '12 - 18 Months'],
    inStock: true,
    leadTime: 'Crafted in 4-5 days',
    description: 'A handsome baby boy ensemble crafted with gentle care. Features a textured rib sweater with personalized baby name or cute 3D crochet teddy bear face, matching elastic-free comfortable drawstring trousers, a fluffy pompom beanie, and cozy bear booties.',
    details: [
      'Includes: Knitted sweater, matching jogger pants, pompom beanie, and booties',
      'Hand-stitched 3D teddy bear patch (personalization with baby name available)',
      'Natural wooden button neck closure for effortless head passage',
      'Soft non-restrictive rib cuffs at ankles and wrists',
    ],
    care: ['Gentle machine wash cold on delicate cycle in wash bag, or hand wash'],
  },

  // SCARVES
  {
    id: 'red-roses-ribbed-scarf',
    name: 'Cream Ribbed Scarf with 3D Red Roses',
    subtitle: 'Heavyweight ribbed crochet scarf with hand-stitched 3D roses & fringe',
    category: 'scarves',
    categoryLabel: 'Handmade Scarves',
    orderNotice: 'Handmade to Order',
    fabric: 'Plush Warm Acrylic Yarn',
    origin: 'Handmade by Hafsa in Matli',
    badge: 'Winter Classic',
    image: '/src/assets/images/crochet_scarf_roses_1792074055180.jpg',
    galleryImages: [
      '/src/assets/images/crochet_scarf_roses_1792074055180.jpg',
      '/src/assets/images/hero_crochet_atelier_1792074149241.jpg',
    ],
    colors: [
      { name: 'Cream with Red Velvet Roses', hex: '#FAF7F2' },
      { name: 'White with Pink Pastel Roses', hex: '#FFFFFF' },
      { name: 'Charcoal with Crimson Roses', hex: '#333333' },
    ],
    sizes: ['Standard Adult (180cm x 22cm + Tassels)', 'Extra Long Cozy Wrap'],
    inStock: true,
    leadTime: 'Crafted in 3-4 days',
    description: 'Hand-crocheted using a thick vertical ribbing technique that offers incredible warmth and soft stretch. Adorned with 10 intricately crocheted 3D dimensional roses with emerald leaves and generous handcrafted fringe tassels.',
    details: [
      '10 multi-layered 3D crochet roses with green leaves hand-sewn along scarf length',
      'Plush, reversible ribbed stitch pattern providing superior insulation',
      'Long hand-knotted fringe at both ends for elegant winter drape',
      'Matching rose keychain or brooch included with order',
    ],
    care: ['Hand wash gently in cool water', 'Do not wring; lay flat to dry on a towel'],
  },

  // ACCESSORIES
  {
    id: 'floral-crochet-headband-set',
    name: 'Artisan Floral & Tulip Crochet Headbands',
    subtitle: 'Handcrafted floral headbands with 3D tulips, roses and sunflower hairpins',
    category: 'accessories',
    categoryLabel: 'Crochet Accessories',
    orderNotice: 'Handmade to Order',
    fabric: 'Soft Cotton Yarn on Flexible Base',
    origin: 'Handmade by Hafsa in Matli',
    badge: 'Set or Single Piece',
    image: '/src/assets/images/crochet_accessories_flatlay_1792074055008.jpg',
    galleryImages: [
      '/src/assets/images/crochet_accessories_flatlay_1792074055008.jpg',
      '/src/assets/images/hero_crochet_atelier_1792074149241.jpg',
    ],
    colors: [
      { name: 'Spring Tulip Trio (Pink, Yellow, Orange)', hex: '#F9A825' },
      { name: 'Pastel Rose Crown (Lilac, Pink & Cream)', hex: '#D7BDE2' },
      { name: 'White Daisy Floral String Tie', hex: '#FFFFFF' },
      { name: 'Sunflower Hair Stick / Bun Pin Pair', hex: '#E65100' },
    ],
    sizes: ['One Size (Adult / Teen)', 'Baby & Toddler Headband Size'],
    inStock: true,
    leadTime: 'Crafted in 1-2 days',
    description: 'Charming botanical accessories hand-crocheted petal by petal. Includes vibrant tulip flower bands, textured rose crowns with leafy borders, delicate daisy chain tie-backs, and traditional sunflower bun sticks.',
    details: [
      'Soft crochet backing that does not pinch or pull hair',
      'Hand-crocheted 3D tulip bulbs with detailed leaves',
      'Optional tie-back ribbon or hidden elasticated band',
      'Perfect for gifts, festive occasions, and daily aesthetic styling',
    ],
    care: ['Spot clean with damp cloth', 'Air dry completely'],
  },
];

export interface LookbookItem {
  id: string;
  title: string;
  season: string;
  image: string;
  maker: string;
  hotspots: {
    x: number; // percentage
    y: number; // percentage
    productId: string;
    productTitle: string;
    productTag: string;
  }[];
}

export const CROCHET_LOOKBOOK: LookbookItem[] = [
  {
    id: 'look-1',
    title: 'Look 01: The Pastel Garden Cardigan',
    season: 'Hafsa Nizamani Handmade Crochet Collection',
    image: '/src/assets/images/crochet_cardigan_flowers_1792074053668.jpg',
    maker: 'Handmade by Hafsa Nizamani',
    hotspots: [
      {
        x: 48,
        y: 42,
        productId: 'flower-garden-cardigan',
        productTitle: '3D Flower Garden Chunky Cardigan',
        productTag: 'Handmade to Order',
      },
    ],
  },
  {
    id: 'look-2',
    title: 'Look 02: Coquette Red Bows Cropped Sweater',
    season: 'Hafsa Nizamani Handmade Crochet Collection',
    image: '/src/assets/images/crochet_cardigan_bows_1792074097467.jpg',
    maker: 'Handmade by Hafsa Nizamani',
    hotspots: [
      {
        x: 52,
        y: 45,
        productId: 'red-bows-cropped-cardigan',
        productTitle: 'Cozy Red Bows Cropped Cardigan',
        productTag: 'Handmade to Order',
      },
    ],
  },
  {
    id: 'look-3',
    title: 'Look 03: The Sunflower Granny Square Jacket',
    season: 'Hafsa Nizamani Handmade Crochet Collection',
    image: '/src/assets/images/crochet_cardigan_sunflower_1792074053735.jpg',
    maker: 'Handmade by Hafsa Nizamani',
    hotspots: [
      {
        x: 50,
        y: 40,
        productId: 'sunflower-granny-cardigan',
        productTitle: 'Sunflower Granny Square Cardigan',
        productTag: 'Handmade to Order',
      },
    ],
  },
  {
    id: 'look-4',
    title: 'Look 04: The Royal Crimson Baby Frock Set',
    season: 'Hafsa Nizamani Handmade Crochet Collection',
    image: '/src/assets/images/crochet_baby_frock_red_1792074051854.jpg',
    maker: 'Handmade by Hafsa Nizamani',
    hotspots: [
      {
        x: 50,
        y: 45,
        productId: 'crimson-baby-frock-set',
        productTitle: 'Crimson & Cream Royal Baby Frock Set',
        productTag: 'Complete 3-Piece Set',
      },
    ],
  },
  {
    id: 'look-5',
    title: 'Look 05: Winter Rose Ribbed Scarf',
    season: 'Hafsa Nizamani Handmade Crochet Collection',
    image: '/src/assets/images/crochet_scarf_roses_1792074055180.jpg',
    maker: 'Handmade by Hafsa Nizamani',
    hotspots: [
      {
        x: 52,
        y: 48,
        productId: 'red-roses-ribbed-scarf',
        productTitle: 'Cream Ribbed Scarf with 3D Red Roses',
        productTag: 'Handmade to Order',
      },
    ],
  },
];

export const PRODUCTS = CROCHET_PRODUCTS;
