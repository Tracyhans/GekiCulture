export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  sizes: string[];
  colors: string[];
  description: string;
  features: string[];
  rating: number;
  reviewCount: number;
  reviews: Review[];
  isNew?: boolean;
  isBestseller?: boolean;
}

export interface Review {
  id: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Ankara Print Hoodie',
    price: 35000,
    originalPrice: 42000,
    images: [
      'https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5480697/pexels-photo-5480697.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'hoodies',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Ankara Multi', 'Gold'],
    description: 'Premium quality hoodie featuring authentic Ankara print designs. Made with organic cotton blend for maximum comfort and durability.',
    features: ['100% Organic Cotton', 'Screen Printed Design', 'Kangaroo Pocket', 'Adjustable Hood'],
    rating: 4.8,
    reviewCount: 127,
    reviews: [
      {
        id: '1',
        userName: 'Amara K.',
        userAvatar: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=100',
        rating: 5,
        comment: 'Love this hoodie! The design is beautiful and the quality is amazing. Fits perfectly.',
        date: '2024-01-15',
        verified: true
      },
      {
        id: '2',
        userName: 'Kwame A.',
        userAvatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=100',
        rating: 5,
        comment: 'Perfect representation of African heritage. Great quality and fast shipping.',
        date: '2024-01-12',
        verified: true
      }
    ],
    isNew: true,
    isBestseller: true
  },
  {
    id: '2',
    name: 'Kente Pattern T-Shirt',
    price: 15000,
    images: [
      'https://images.pexels.com/photos/5480694/pexels-photo-5480694.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5480695/pexels-photo-5480695.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'shirts',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Red', 'Green'],
    description: 'Classic t-shirt with authentic Kente pattern print. Soft, breathable fabric perfect for everyday wear.',
    features: ['Premium Cotton Blend', 'Authentic Kente Design', 'Pre-shrunk Fabric', 'Tagless Label'],
    rating: 4.6,
    reviewCount: 89,
    reviews: [
      {
        id: '3',
        userName: 'Asha M.',
        userAvatar: 'https://images.pexels.com/photos/1043475/pexels-photo-1043475.jpeg?auto=compress&cs=tinysrgb&w=100',
        rating: 4,
        comment: 'Beautiful design and comfortable fit. True to size.',
        date: '2024-01-10',
        verified: true
      }
    ],
    isBestseller: true
  },
  {
    id: '3',
    name: 'Dashiki Print Sweatshirt',
    price: 28000,
    images: [
      'https://images.pexels.com/photos/5480698/pexels-photo-5480698.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'sweatshirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Cadet Grey', 'Black', 'Navy'],
    description: 'Comfortable sweatshirt featuring traditional Dashiki prints. Perfect blend of style and cultural significance.',
    features: ['Heavy Cotton Blend', 'Authentic Dashiki Print', 'Ribbed Cuffs', 'Machine Washable'],
    rating: 4.7,
    reviewCount: 64,
    reviews: [],
    isNew: true
  },
  {
    id: '4',
    name: 'Wax Print Joggers',
    price: 22000,
    images: [
      'https://images.pexels.com/photos/5480699/pexels-photo-5480699.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'pants',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Wax Print Multi', 'Gold'],
    description: 'Comfortable joggers with authentic African wax print panels. Perfect for casual wear or light workouts.',
    features: ['Moisture-Wicking Fabric', 'Elastic Waistband', 'Side Pockets', 'Tapered Fit'],
    rating: 4.5,
    reviewCount: 42,
    reviews: [],
    isNew: true
  },
  {
    id: '5',
    name: 'Adinkra Symbol Cap',
    price: 12000,
    images: [
      'https://images.pexels.com/photos/5480700/pexels-photo-5480700.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'accessories',
    sizes: ['One Size'],
    colors: ['Black', 'Red', 'Green'],
    description: 'Stylish cap featuring traditional Adinkra symbols. Adjustable fit with premium embroidered details.',
    features: ['Adjustable Strap', 'Embroidered Design', 'Cotton Twill', 'Curved Brim'],
    rating: 4.4,
    reviewCount: 38,
    reviews: [],
    isBestseller: true
  },
  {
    id: '6',
    name: 'Mudcloth Print Tank Top',
    price: 10000,
    images: [
      'https://images.pexels.com/photos/5480701/pexels-photo-5480701.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'shirts',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Moonstone'],
    description: 'Lightweight tank top with traditional Mudcloth patterns. Perfect for warm weather and layering.',
    features: ['Lightweight Fabric', 'Racerback Design', 'Moisture-Wicking', 'Athletic Fit'],
    rating: 4.3,
    reviewCount: 56,
    reviews: []
  }
];

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'shirts', name: 'T-Shirts & Tanks', count: products.filter(p => p.category === 'shirts').length },
  { id: 'hoodies', name: 'Hoodies', count: products.filter(p => p.category === 'hoodies').length },
  { id: 'sweatshirts', name: 'Sweatshirts', count: products.filter(p => p.category === 'sweatshirts').length },
  { id: 'pants', name: 'Pants & Joggers', count: products.filter(p => p.category === 'pants').length },
  { id: 'accessories', name: 'Accessories', count: products.filter(p => p.category === 'accessories').length }
];