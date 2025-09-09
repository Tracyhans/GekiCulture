import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, RefreshCw } from 'lucide-react';
import { products } from '../data/products';

const LandingPage: React.FC = () => {
  const featuredProducts = products.filter(p => p.isBestseller).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-black via-[#91A3B0] to-[#3AA6B9]">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Express Your
            <span className="text-[#3AA6B9]"> African Heritage</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Where culture meets street style - Premium African streetwear for the urban soul
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/catalog"
              className="bg-[#3AA6B9] text-white px-10 py-4 rounded-lg text-xl font-bold hover:bg-[#2A8A99] transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              Shop Now
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/catalog?category=bestsellers"
              className="border-2 border-white text-white px-10 py-4 rounded-lg text-xl font-bold hover:bg-white hover:text-black transition-colors shadow-lg"
            >
              Best Sellers
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3AA6B9] rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free shipping on all orders over $75. Fast delivery worldwide.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3AA6B9] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">Premium materials and craftsmanship in every piece.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3AA6B9] rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day return policy. No questions asked.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Best Sellers</h2>
            <p className="text-gray-600 text-lg">Our most loved pieces by the community</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.originalPrice && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                      Sale
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-[#3AA6B9] transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm ml-2">({product.reviewCount})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg text-[#3AA6B9]">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/catalog"
              className="bg-[#3AA6B9] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#2A8A99] transition-colors inline-flex items-center gap-2 mr-4"
            >
              Shop All Best Sellers
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/catalog?category=new"
              className="border-2 border-[#3AA6B9] text-[#3AA6B9] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#3AA6B9] hover:text-white transition-colors inline-flex items-center gap-2"
            >
              New Arrivals
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Collections</h2>
            <p className="text-gray-600 text-lg">Explore our curated collections celebrating African heritage</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/catalog?category=shirts"
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src="https://images.pexels.com/photos/5480694/pexels-photo-5480694.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="T-Shirts & Tanks"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">T-Shirts & Tanks</h3>
                  <p className="text-sm opacity-90">Comfortable everyday wear</p>
                </div>
              </div>
            </Link>

            <Link
              to="/catalog?category=hoodies"
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src="https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Hoodies"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Hoodies</h3>
                  <p className="text-sm opacity-90">Premium streetwear essentials</p>
                </div>
              </div>
            </Link>

            <Link
              to="/catalog?category=pants"
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src="https://images.pexels.com/photos/5480699/pexels-photo-5480699.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Pants & Joggers"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Pants & Joggers</h3>
                  <p className="text-sm opacity-90">Comfort meets style</p>
                </div>
              </div>
            </Link>

            <Link
              to="/catalog?category=accessories"
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src="https://images.pexels.com/photos/5480700/pexels-photo-5480700.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Accessories"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Accessories</h3>
                  <p className="text-sm opacity-90">Complete your look</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/catalog"
              className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
            >
              View All Collections
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Heritage, Your Style</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                At Geki Culture, we believe fashion is a powerful way to celebrate and share our rich African heritage. 
                Each piece in our collection tells a story, honoring traditional prints like Ankara, Kente, and Dashiki while embracing contemporary streetwear aesthetics.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                From ancient Adinkra symbols to vibrant wax prints, our clothing connects you to centuries of African 
                artistry and wisdom. Wear your heritage with pride.
              </p>
              <Link
                to="/catalog"
                className="bg-[#3AA6B9] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2A8A99] transition-colors inline-block"
              >
                Explore Collection
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="African Heritage"
                className="rounded-lg"
              />
              <img
                src="https://images.pexels.com/photos/5480694/pexels-photo-5480694.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Traditional Patterns"
                className="rounded-lg"
              />
              <img
                src="https://images.pexels.com/photos/5480698/pexels-photo-5480698.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Modern Style"
                className="rounded-lg"
              />
              <img
                src="https://images.pexels.com/photos/5480699/pexels-photo-5480699.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Street Fashion"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-[#91A3B0]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Connected</h2>
          <p className="text-white/90 text-lg mb-8">
            Be the first to know about new arrivals, exclusive offers, and cultural stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#3AA6B9]"
            />
            <button className="bg-[#3AA6B9] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2A8A99] transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/LOGO (1).png" 
                  alt="Geki Culture" 
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Premium African streetwear celebrating authentic prints and cultural heritage. 
                Wear your heritage with pride.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/gekiculture?igsh=bWF6MzlndnZxNmtp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#3AA6B9] transition-colors"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.315 0-.612-.123-.833-.344-.221-.221-.344-.518-.344-.833 0-.315.123-.612.344-.833.221-.221.518-.344.833-.344s.612.123.833.344c.221.221.344.518.344.833 0 .315-.123.612-.344.833-.221.221-.518.344-.833.344zm-3.830 9.781c-2.50 0-4.531-2.031-4.531-4.531s2.031-4.531 4.531-4.531 4.531 2.031 4.531 4.531-2.031 4.531-4.531 4.531z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:Gekiculture@gmail.com"
                  className="text-gray-300 hover:text-[#3AA6B9] transition-colors"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/catalog" className="text-gray-300 hover:text-[#3AA6B9] transition-colors">Shop All</Link></li>
                <li><Link to="/catalog?category=new" className="text-gray-300 hover:text-[#3AA6B9] transition-colors">New Arrivals</Link></li>
                <li><Link to="/catalog?category=bestsellers" className="text-gray-300 hover:text-[#3AA6B9] transition-colors">Best Sellers</Link></li>
                <li><Link to="/wishlist" className="text-gray-300 hover:text-[#3AA6B9] transition-colors">Wishlist</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="mailto:Gekiculture@gmail.com" className="hover:text-[#3AA6B9] transition-colors">
                    Gekiculture@gmail.com
                  </a>
                </li>
                <li>
                  <a href="http://www.gekiculture.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#3AA6B9] transition-colors">
                    www.gekiculture.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Geki Culture. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;