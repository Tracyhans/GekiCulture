import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Heart, User, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { user, openAuthModal, signOut } = useAuth();
  const { itemCount } = useCart();
  const { items: wishlistItems } = useWishlist();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/Submark logo Plain.png" 
              alt="Geki Culture" 
              className="h-8 w-8"
            />
            <div className="text-xl">
              <span className="logo-geki text-white">Geki</span>
              <span className="logo-culture text-white ml-1">Culture</span>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 rounded-lg bg-[#91A3B0] text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#3AA6B9]"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-600" />
              </div>
            </form>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/catalog" className="hover:text-[#3AA6B9] transition-colors">
              Shop
            </Link>
            <Link to="/catalog?category=new" className="hover:text-[#3AA6B9] transition-colors">
              New Arrivals
            </Link>
            <Link to="/catalog?category=bestsellers" className="hover:text-[#3AA6B9] transition-colors">
              Best Sellers
            </Link>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 hover:text-[#3AA6B9] transition-colors">
                  <User className="h-5 w-5" />
                  <span className="hidden sm:block">{user.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
                  <button
                    onClick={signOut}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => openAuthModal('signin')}
                className="hover:text-[#3AA6B9] transition-colors"
              >
                Sign In
              </button>
            )}

            <Link to="/wishlist" className="relative hover:text-[#3AA6B9] transition-colors">
              <Heart className="h-5 w-5" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#3AA6B9] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            <Link to="/cart" className="relative hover:text-[#3AA6B9] transition-colors">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#3AA6B9] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden hover:text-[#3AA6B9] transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-700 pt-4 pb-4">
            <div className="mb-4">
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 pl-10 rounded-lg bg-[#91A3B0] text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#3AA6B9]"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-600" />
                </div>
              </form>
            </div>
            <nav className="space-y-2">
              <Link to="/catalog" className="block hover:text-[#3AA6B9] transition-colors">
                Shop
              </Link>
              <Link to="/catalog?category=new" className="block hover:text-[#3AA6B9] transition-colors">
                New Arrivals
              </Link>
              <Link to="/catalog?category=bestsellers" className="block hover:text-[#3AA6B9] transition-colors">
                Best Sellers
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;