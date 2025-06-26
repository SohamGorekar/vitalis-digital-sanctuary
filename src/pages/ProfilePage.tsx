
import { useState } from 'react';
import { User, Heart, Package, Settings, LogOut, Edit2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from '@/components/Header';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const userInfo = {
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    joinDate: "March 2024",
    totalOrders: 12,
    totalSpent: 1250
  };

  const recentOrders = [
    {
      id: "VIT-001",
      date: "2024-01-15",
      status: "Delivered",
      total: 89,
      items: ["Adaptogenic Ashwagandha Complex"]
    },
    {
      id: "VIT-002",
      date: "2024-01-10",
      status: "Processing",
      total: 143,
      items: ["Marine Collagen Peptides", "Omega-3 Algae Oil"]
    }
  ];

  const wishlistItems = [
    {
      id: 1,
      name: "Organic Turmeric Curcumin",
      price: 45,
      image: "photo-1500673922987-e212871fec22"
    },
    {
      id: 2,
      name: "Magnesium Glycinate Complex",
      price: 52,
      image: "photo-1501854140801-50d01698950b"
    }
  ];

  return (
    <div className="min-h-screen bg-vitalis-cream">
      <Header />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-vitalis-charcoal mb-4">
              Your <span className="text-vitalis-peach">Profile</span>
            </h1>
            <p className="text-vitalis-charcoal/70 text-lg">Manage your wellness journey</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-vitalis-coral/20">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-vitalis-peach to-vitalis-coral rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="font-semibold text-vitalis-charcoal">{userInfo.name}</h3>
                    <p className="text-vitalis-charcoal/60 text-sm">{userInfo.email}</p>
                  </div>

                  <nav className="space-y-2">
                    <button
                      onClick={() => setActiveTab('profile')}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
                        activeTab === 'profile' 
                          ? 'bg-vitalis-peach/20 text-vitalis-peach' 
                          : 'text-vitalis-charcoal/70 hover:bg-vitalis-coral/10'
                      }`}
                    >
                      <User className="h-4 w-4" />
                      Profile Info
                    </button>
                    <button
                      onClick={() => setActiveTab('orders')}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
                        activeTab === 'orders' 
                          ? 'bg-vitalis-peach/20 text-vitalis-peach' 
                          : 'text-vitalis-charcoal/70 hover:bg-vitalis-coral/10'
                      }`}
                    >
                      <Package className="h-4 w-4" />
                      Orders
                    </button>
                    <button
                      onClick={() => setActiveTab('wishlist')}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
                        activeTab === 'wishlist' 
                          ? 'bg-vitalis-peach/20 text-vitalis-peach' 
                          : 'text-vitalis-charcoal/70 hover:bg-vitalis-coral/10'
                      }`}
                    >
                      <Heart className="h-4 w-4" />
                      Wishlist
                    </button>
                    <button
                      onClick={() => setActiveTab('settings')}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
                        activeTab === 'settings' 
                          ? 'bg-vitalis-peach/20 text-vitalis-peach' 
                          : 'text-vitalis-charcoal/70 hover:bg-vitalis-coral/10'
                      }`}
                    >
                      <Settings className="h-4 w-4" />
                      Settings
                    </button>
                  </nav>

                  <div className="mt-8 pt-6 border-t border-vitalis-coral/20">
                    <Button variant="ghost" className="w-full text-red-500 hover:bg-red-50">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </div>
                </Card>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                {activeTab === 'profile' && (
                  <Card className="p-8 bg-white/80 backdrop-blur-sm border-vitalis-coral/20">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold text-vitalis-charcoal">Profile Information</h2>
                      <Button variant="outline" size="sm">
                        <Edit2 className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <label className="text-sm text-vitalis-charcoal/60 mb-2 block">Full Name</label>
                          <p className="text-vitalis-charcoal font-medium">{userInfo.name}</p>
                        </div>
                        <div>
                          <label className="text-sm text-vitalis-charcoal/60 mb-2 block">Email</label>
                          <p className="text-vitalis-charcoal font-medium">{userInfo.email}</p>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <label className="text-sm text-vitalis-charcoal/60 mb-2 block">Member Since</label>
                          <p className="text-vitalis-charcoal font-medium">{userInfo.joinDate}</p>
                        </div>
                        <div>
                          <label className="text-sm text-vitalis-charcoal/60 mb-2 block">Total Orders</label>
                          <p className="text-vitalis-charcoal font-medium">{userInfo.totalOrders}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 p-6 bg-gradient-to-r from-vitalis-peach/10 to-vitalis-coral/10 rounded-2xl">
                      <h3 className="font-semibold text-vitalis-charcoal mb-2">Wellness Stats</h3>
                      <p className="text-vitalis-charcoal/70">Total invested in wellness: <span className="font-semibold text-vitalis-peach">${userInfo.totalSpent}</span></p>
                    </div>
                  </Card>
                )}

                {activeTab === 'orders' && (
                  <Card className="p-8 bg-white/80 backdrop-blur-sm border-vitalis-coral/20">
                    <h2 className="text-2xl font-bold text-vitalis-charcoal mb-6">Order History</h2>
                    
                    <div className="space-y-4">
                      {recentOrders.map(order => (
                        <div key={order.id} className="p-6 bg-vitalis-beige/30 rounded-2xl">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <p className="font-semibold text-vitalis-charcoal">Order #{order.id}</p>
                              <p className="text-vitalis-charcoal/60 text-sm">{order.date}</p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              order.status === 'Delivered' 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-vitalis-apricot/20 text-vitalis-charcoal'
                            }`}>
                              {order.status}
                            </span>
                          </div>
                          <div className="space-y-2">
                            {order.items.map((item, index) => (
                              <p key={index} className="text-vitalis-charcoal/70 text-sm">• {item}</p>
                            ))}
                          </div>
                          <p className="font-semibold text-vitalis-charcoal mt-3">Total: ${order.total}</p>
                        </div>
                      ))}
                    </div>
                  </Card>
                )}

                {activeTab === 'wishlist' && (
                  <Card className="p-8 bg-white/80 backdrop-blur-sm border-vitalis-coral/20">
                    <h2 className="text-2xl font-bold text-vitalis-charcoal mb-6">Wishlist</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {wishlistItems.map(item => (
                        <div key={item.id} className="p-4 bg-vitalis-beige/30 rounded-2xl flex items-center gap-4">
                          <img 
                            src={`https://images.unsplash.com/${item.image}?w=80&h=80&fit=crop`}
                            alt={item.name}
                            className="w-16 h-16 rounded-xl object-cover"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-vitalis-charcoal">{item.name}</h4>
                            <p className="text-vitalis-peach font-semibold">${item.price}</p>
                          </div>
                          <Button size="sm" className="bg-vitalis-peach hover:bg-vitalis-peach/90 text-vitalis-charcoal">
                            Add to Cart
                          </Button>
                        </div>
                      ))}
                    </div>
                  </Card>
                )}

                {activeTab === 'settings' && (
                  <Card className="p-8 bg-white/80 backdrop-blur-sm border-vitalis-coral/20">
                    <h2 className="text-2xl font-bold text-vitalis-charcoal mb-6">Settings</h2>
                    
                    <div className="space-y-6">
                      <div className="p-4 bg-vitalis-beige/30 rounded-2xl">
                        <h4 className="font-medium text-vitalis-charcoal mb-2">Notifications</h4>
                        <p className="text-vitalis-charcoal/70 text-sm mb-4">Manage your email preferences</p>
                        <Button variant="outline" size="sm">Configure</Button>
                      </div>
                      <div className="p-4 bg-vitalis-beige/30 rounded-2xl">
                        <h4 className="font-medium text-vitalis-charcoal mb-2">Privacy</h4>
                        <p className="text-vitalis-charcoal/70 text-sm mb-4">Control your data and privacy settings</p>
                        <Button variant="outline" size="sm">Manage</Button>
                      </div>
                      <div className="p-4 bg-vitalis-beige/30 rounded-2xl">
                        <h4 className="font-medium text-vitalis-charcoal mb-2">Account</h4>
                        <p className="text-vitalis-charcoal/70 text-sm mb-4">Change password or delete account</p>
                        <Button variant="outline" size="sm">Update</Button>
                      </div>
                    </div>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
