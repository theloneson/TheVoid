// Product data for The Void e-commerce store
export interface Product {
  id: string;
  title: string;
  collection: 'The Fifth Eclipse' | 'Oblivion Core' | 'Void Runner';
  category: 'hoodies' | 'tees' | 'tracksuits';
  price: number;
  images: string[];
  description: string;
  variants: {
    color: string;
    sizes: ('XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL')[];
  }[];
  featured?: boolean;
  limited?: boolean;
}

// Import product images
import hoodiePurpleEclipse from '@/assets/products/hoodie-purple-eclipse.jpg';
import hoodieWineEclipse from '@/assets/products/hoodie-wine-eclipse.jpg';
import hoodieBlackEclipse from '@/assets/products/hoodie-black-eclipse.jpg';
import teeWine from '@/assets/products/tee-wine.jpg';
import teeFadedBlack from '@/assets/products/tee-faded-black.jpg';
import teeBlack from '@/assets/products/tee-black.jpg';
import teeBlue from '@/assets/products/tee-blue.jpg';
import teeBrown from '@/assets/products/tee-brown.jpg';
import teeDeepBlue from '@/assets/products/tee-deep-blue.jpg';
import hoodieGrayEclipse from '@/assets/products/hoodie-gray-eclipse.jpg';
import teePurple from '@/assets/products/tee-purple.jpg';
import teeCream from '@/assets/products/tee-cream.jpg';

export const products: Product[] = [
  // The Fifth Eclipse Collection - Hoodies
  {
    id: 'hoodie-eclipse-purple',
    title: 'The Fifth Eclipse Hoodie - Deep Purple',
    collection: 'The Fifth Eclipse',
    category: 'hoodies',
    price: 149,
    images: [hoodiePurpleEclipse],
    description: 'Premium hoodie featuring exclusive anime-inspired artwork with Japanese characters. Cut from heavy cotton blend for ultimate comfort and durability.',
    variants: [
      {
        color: 'Deep Purple',
        sizes: ['S', 'M', 'L', 'XL', 'XXL']
      }
    ],
    featured: true,
    limited: true
  },
  {
    id: 'hoodie-eclipse-wine',
    title: 'The Fifth Eclipse Hoodie - Deep Wine',
    collection: 'The Fifth Eclipse',
    category: 'hoodies',
    price: 149,
    images: [hoodieWineEclipse],
    description: 'Premium hoodie with striking silhouette artwork and vertical Japanese text. Crafted for those who embrace the darkness.',
    variants: [
      {
        color: 'Deep Wine',
        sizes: ['S', 'M', 'L', 'XL', 'XXL']
      }
    ],
    featured: true,
    limited: true
  },
  {
    id: 'hoodie-eclipse-black',
    title: 'The Fifth Eclipse Hoodie - Black',
    collection: 'The Fifth Eclipse',
    category: 'hoodies',
    price: 149,
    images: [hoodieBlackEclipse],
    description: 'Classic black hoodie with manga-style panels and Japanese text. The ultimate statement piece for modern outlaws.',
    variants: [
      {
        color: 'Black',
        sizes: ['S', 'M', 'L', 'XL', 'XXL']
      }
    ],
    featured: true
  },
  {
    id: 'hoodie-eclipse-gray',
    title: 'The Fifth Eclipse Hoodie - Gray',
    collection: 'The Fifth Eclipse',
    category: 'hoodies',
    price: 149,
    images: [hoodieGrayEclipse],
    description: 'Premium gray hoodie with exclusive anime-inspired artwork and Japanese text. Features striking red eyes graphic and vertical sleeve text.',
    variants: [
      {
        color: 'Gray',
        sizes: ['S', 'M', 'L', 'XL', 'XXL']
      }
    ],
    featured: true,
    limited: true
  },
  
  // Oblivion Core Collection - Tees
  {
    id: 'tee-core-wine',
    title: 'Oblivion Core Tee - Deep Wine',
    collection: 'Oblivion Core',
    category: 'tees',
    price: 79,
    images: [teeWine],
    description: 'Built for the outlaws of tomorrow. Premium cotton tee with signature VOID branding and minimalist aesthetic.',
    variants: [
      {
        color: 'Deep Wine',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
      }
    ],
    featured: true
  },
  {
    id: 'tee-core-faded-black',
    title: 'Oblivion Core Tee - Faded Black',
    collection: 'Oblivion Core',
    category: 'tees',
    price: 79,
    images: [teeFadedBlack],
    description: 'Vintage-washed tee with distressed finish. Built for the outlaws of tomorrow with premium comfort.',
    variants: [
      {
        color: 'Faded Black',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
      }
    ]
  },
  {
    id: 'tee-core-black',
    title: 'Oblivion Core Tee - Black',
    collection: 'Oblivion Core',
    category: 'tees',
    price: 79,
    images: [teeBlack],
    description: 'Classic black tee with clean VOID branding. Essential piece for any modern wardrobe.',
    variants: [
      {
        color: 'Black',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
      }
    ]
  },
  {
    id: 'tee-core-blue',
    title: 'Oblivion Core Tee - Cosmic Blue',
    collection: 'Oblivion Core',
    category: 'tees',
    price: 79,
    images: [teeBlue],
    description: 'Vibrant blue tee with contrast VOID branding. Stand out from the ordinary.',
    variants: [
      {
        color: 'Cosmic Blue',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
      }
    ]
  },
  {
    id: 'tee-core-brown',
    title: 'Oblivion Core Tee - Earth Brown',
    collection: 'Oblivion Core',
    category: 'tees',
    price: 79,
    images: [teeBrown],
    description: 'Earthy brown tee with premium cotton construction. For those who choose their own path.',
    variants: [
      {
        color: 'Earth Brown',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
      }
    ]
  },
  {
    id: 'tee-core-deep-blue',
    title: 'Oblivion Core Tee - Deep Blue',
    collection: 'Oblivion Core',
    category: 'tees',
    price: 79,
    images: [teeDeepBlue],
    description: 'Deep cosmic blue with vintage finish. Built for the outlaws of tomorrow.',
    variants: [
      {
        color: 'Deep Blue',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
      }
    ]
  },
  {
    id: 'tee-core-purple',
    title: 'Oblivion Core Tee - Purple',
    collection: 'Oblivion Core',
    category: 'tees',
    price: 79,
    images: [teePurple],
    description: 'Vibrant purple tee with signature VOID branding. Built for the outlaws of tomorrow with premium comfort.',
    variants: [
      {
        color: 'Purple',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
      }
    ]
  },
  {
    id: 'tee-core-cream',
    title: 'Oblivion Core Tee - Cream',
    collection: 'Oblivion Core',
    category: 'tees',
    price: 79,
    images: [teeCream],
    description: 'Clean cream tee with minimalist VOID branding. Essential piece for any modern wardrobe.',
    variants: [
      {
        color: 'Cream',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
      }
    ]
  }
];

export const collections = [
  {
    name: 'The Fifth Eclipse',
    description: 'Premium hoodies with exclusive anime-inspired artwork',
    image: hoodiePurpleEclipse
  },
  {
    name: 'Oblivion Core',
    description: 'Essential tees built for the outlaws of tomorrow',
    image: teeWine
  },
  {
    name: 'Void Runner',
    description: 'Coming soon - Premium tracksuit collection',
    image: hoodieBlackEclipse
  }
];

export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getProductsByCollection = (collection: string) => products.filter(p => p.collection === collection);
export const getProductById = (id: string) => products.find(p => p.id === id);