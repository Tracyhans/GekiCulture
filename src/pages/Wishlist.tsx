import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

const Wishlist: React.FC = () => {
  const { items, removeItem } = useWishlist();
  const { addItem } = useCart();

  const handleAddToCart = (item: any) => {
    // For wishlist items, we'll use default size and color
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      size: 'M', // Default size
      color: 'Black' // Default color
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <Heart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-8">Save items you love to your wishlist and shop them later.</p>
            <Link
              to="/catalog"
              className="bg-[#3AA6B9] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2A8A99] transition-colors inline-block"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-black">My Wishlist</h1>
          <p className="text-gray-600">{items.length} item{items.length !== 1 ? 's' : ''}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative">
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <button
                  onClick={() => removeItem(item.id)}
                  className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-red-50 hover:text-red-600 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>

              <div className="p-4">
                <Link to={`/product/${item.id}`}>
                  <h3 className="font-semibold text-lg mb-2 hover:text-[#3AA6B9] transition-colors line-clamp-2">
                    {item.name}
                  </h3>
                </Link>
                
                <p className="text-sm text-gray-600 mb-3 capitalize">{item.category}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-lg text-[#3AA6B9]">₦{item.price.toLocaleString()}</span>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="flex-1 bg-[#3AA6B9] text-white py-2 px-4 rounded-lg hover:bg-[#2A8A99] transition-colors flex items-center justify-center space-x-2 text-sm"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span>Add to Cart</span>
                  </button>
                  <Link
                    to={`/product/${item.id}`}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/catalog"
            className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-block"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;