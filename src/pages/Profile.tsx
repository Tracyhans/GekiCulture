import React, { useState } from 'react';
import { User, Package, Heart, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useWishlist } from '../context/WishlistContext';

const Profile: React.FC = () => {
  const { user, signOut } = useAuth();
  const { items: wishlistItems } = useWishlist();
  const [activeTab, setActiveTab] = useState('profile');

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Please sign in to view your profile</h1>
        </div>
      </div>
    );
  }

  const mockOrders = [
    {
      id: '12345',
      date: '2024-01-15',
      status: 'Delivered',
      total: 35000,
      items: [
        { name: 'Ankara Print Hoodie', quantity: 1, price: 35000 }
      ]
    },
    {
      id: '12344',
      date: '2024-01-10',
      status: 'Shipped',
      total: 15000,
      items: [
        { name: 'Kente Pattern T-Shirt', quantity: 1, price: 15000 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h2 className="font-semibold">{user.name}</h2>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
              </div>

              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    activeTab === 'profile' ? 'bg-[#3AA6B9] text-white' : 'hover:bg-gray-100'
                  }`}
                >
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </button>
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    activeTab === 'orders' ? 'bg-[#3AA6B9] text-white' : 'hover:bg-gray-100'
                  }`}
                >
                  <Package className="h-5 w-5" />
                  <span>Orders</span>
                </button>
                <button
                  onClick={() => setActiveTab('wishlist')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    activeTab === 'wishlist' ? 'bg-[#3AA6B9] text-white' : 'hover:bg-gray-100'
                  }`}
                >
                  <Heart className="h-5 w-5" />
                  <span>Wishlist ({wishlistItems.length})</span>
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    activeTab === 'settings' ? 'bg-[#3AA6B9] text-white' : 'hover:bg-gray-100'
                  }`}
                >
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </button>
                <button
                  onClick={signOut}
                  className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Sign Out</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'profile' && (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h1 className="text-2xl font-bold mb-6">Profile Information</h1>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        defaultValue={user.name.split(' ')[0]}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3AA6B9]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        defaultValue={user.name.split(' ')[1] || ''}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3AA6B9]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue={user.email}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3AA6B9]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3AA6B9]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#3AA6B9] text-white px-6 py-2 rounded-lg hover:bg-[#2A8A99] transition-colors"
                  >
                    Update Profile
                  </button>
                </form>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h1 className="text-2xl font-bold mb-6">Order History</h1>
                <div className="space-y-4">
                  {mockOrders.map((order) => (
                    <div key={order.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="font-semibold">Order #{order.id}</p>
                          <p className="text-sm text-gray-600">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            order.status === 'Delivered' 
                              ? 'bg-green-100 text-green-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {order.status}
                          </span>
                          <p className="font-bold text-[#3AA6B9] mt-1">₦{order.total.toLocaleString()}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span>{item.name} x{item.quantity}</span>
                            <span>₦{item.price.toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>
                {wishlistItems.length === 0 ? (
                  <div className="text-center py-8">
                    <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-600">Your wishlist is empty</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {wishlistItems.map((item) => (
                      <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-32 object-cover rounded-lg mb-3"
                        />
                        <h3 className="font-semibold mb-2">{item.name}</h3>
                        <p className="text-[#3AA6B9] font-bold">₦{item.price.toLocaleString()}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h1 className="text-2xl font-bold mb-6">Account Settings</h1>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Notifications</h3>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input type="checkbox" defaultChecked className="rounded border-gray-300 text-[#3AA6B9] focus:ring-[#3AA6B9]" />
                        <span className="ml-2">Email notifications for orders</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" defaultChecked className="rounded border-gray-300 text-[#3AA6B9] focus:ring-[#3AA6B9]" />
                        <span className="ml-2">Marketing emails</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-[#3AA6B9] focus:ring-[#3AA6B9]" />
                        <span className="ml-2">SMS notifications</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Privacy</h3>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input type="checkbox" defaultChecked className="rounded border-gray-300 text-[#3AA6B9] focus:ring-[#3AA6B9]" />
                        <span className="ml-2">Make profile public</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-[#3AA6B9] focus:ring-[#3AA6B9]" />
                        <span className="ml-2">Share data for analytics</span>
                      </label>
                    </div>
                  </div>

                  <button className="bg-[#3AA6B9] text-white px-6 py-2 rounded-lg hover:bg-[#2A8A99] transition-colors">
                    Save Settings
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;