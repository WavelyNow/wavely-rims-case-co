import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { User, Session } from "@supabase/supabase-js";
import { Loader2, User as UserIcon, Mail, Calendar, LogOut, Package, MapPin, Gift, History, Settings, Copy, ExternalLink, ChevronRight, Menu, X } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Mock data for orders
const mockOrders = [
  {
    id: "ORD-2024-001",
    date: "2024-03-15",
    status: "Delivered",
    total: 89.99,
    items: "Ferrari Red Phone Case",
    tracking: {
      carrier: "DHL Express",
      number: "DHL123456789",
      progress: 100,
      steps: [
        { label: "Order Placed", completed: true, date: "Mar 15, 10:30 AM" },
        { label: "Processing", completed: true, date: "Mar 15, 2:15 PM" },
        { label: "Shipped", completed: true, date: "Mar 16, 9:00 AM" },
        { label: "In Transit", completed: true, date: "Mar 17, 11:45 AM" },
        { label: "Delivered", completed: true, date: "Mar 18, 3:20 PM" },
      ]
    }
  },
  {
    id: "ORD-2024-002",
    date: "2024-03-20",
    status: "In Transit",
    total: 79.99,
    items: "Lamborghini Green Phone Case",
    tracking: {
      carrier: "UPS",
      number: "UPS987654321",
      progress: 60,
      steps: [
        { label: "Order Placed", completed: true, date: "Mar 20, 2:00 PM" },
        { label: "Processing", completed: true, date: "Mar 20, 4:30 PM" },
        { label: "Shipped", completed: true, date: "Mar 21, 8:00 AM" },
        { label: "In Transit", completed: true, date: "Mar 22, 10:00 AM" },
        { label: "Delivered", completed: false, date: "Expected Mar 24" },
      ]
    }
  },
  {
    id: "ORD-2024-003",
    date: "2024-03-25",
    status: "Processing",
    total: 94.99,
    items: "BMW M-Power Phone Case",
    tracking: {
      carrier: "FedEx",
      number: "FDX456789123",
      progress: 20,
      steps: [
        { label: "Order Placed", completed: true, date: "Mar 25, 11:00 AM" },
        { label: "Processing", completed: true, date: "Mar 25, 1:00 PM" },
        { label: "Shipped", completed: false, date: "Expected Mar 26" },
        { label: "In Transit", completed: false, date: "Pending" },
        { label: "Delivered", completed: false, date: "Expected Mar 28" },
      ]
    }
  },
];

const Account = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<'orders' | 'tracking' | 'referrals' | 'history' | 'profile'>('orders');
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "",
    address: "",
    city: "",
    zipCode: "",
  });
  const navigate = useNavigate();

  const referralCode = "WAVE-USER123";
  const referralLink = `https://wavely.com/ref/${referralCode}`;
  const referralStats = { friends: 5, credits: 50 };

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (!session?.user) {
          navigate("/auth");
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
      
      if (!session?.user) {
        navigate("/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      toast.success("Signed out successfully");
      navigate("/");
    } catch (error: any) {
      if (import.meta.env.DEV) {
        console.error("Sign out error:", error);
      }
      toast.error("Failed to sign out");
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'In Transit': return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      case 'Processing': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'Cancelled': return 'bg-red-500/20 text-red-400 border-red-500/50';
      default: return 'bg-muted/20 text-muted-foreground border-muted/50';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const sidebarItems = [
    { id: 'orders' as const, label: 'My Orders', icon: Package },
    { id: 'tracking' as const, label: 'Track Order', icon: MapPin },
    { id: 'referrals' as const, label: 'Referrals', icon: Gift },
    { id: 'history' as const, label: 'Order History', icon: History },
    { id: 'profile' as const, label: 'Profile Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-6 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins mb-2 sm:mb-4">
            Account <span className="bg-gradient-accent bg-clip-text text-transparent">Dashboard</span>
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Manage your orders, referrals, and profile
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Mobile Menu Toggle */}
          <Button
            variant="outline"
            className="lg:hidden w-full border-2 border-primary/30 hover:border-primary/60 mb-4"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X className="h-5 w-5 mr-2" /> : <Menu className="h-5 w-5 mr-2" />}
            {sidebarOpen ? 'Close Menu' : 'Open Menu'}
          </Button>

          {/* Sidebar */}
          <aside className={`${sidebarOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0`}>
            <Card className="p-4 bg-card/50 backdrop-blur-sm border-2 border-border/40 sticky top-20">
              <div className="space-y-2">
                {sidebarItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveSection(item.id);
                        setSidebarOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        isActive
                          ? 'bg-primary/20 border-2 border-primary shadow-glow text-primary'
                          : 'bg-card/30 border-2 border-transparent hover:border-primary/30 hover:bg-card/50'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
                
                <div className="pt-4 border-t border-border/40 mt-4">
                  <Button
                    variant="outline"
                    onClick={handleSignOut}
                    className="w-full border-2 border-destructive/50 hover:bg-destructive/10 hover:border-destructive text-destructive"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              </div>
            </Card>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* My Orders Section */}
            {activeSection === 'orders' && (
              <div className="space-y-4 sm:space-y-6 animate-fade-in">
                <h2 className="text-2xl sm:text-3xl font-bold font-poppins mb-4 sm:mb-6">My Orders</h2>
                {mockOrders.slice(0, 3).map((order) => (
                  <Card key={order.id} className="p-4 sm:p-6 bg-card/50 backdrop-blur-sm border-2 border-border/40 hover:border-primary/50 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg sm:text-xl font-bold">{order.id}</h3>
                          <Badge className={`${getStatusColor(order.status)} border text-xs`}>
                            {order.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{order.items}</p>
                        <p className="text-xs text-muted-foreground mt-1">{new Date(order.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                      </div>
                      <div className="text-left sm:text-right">
                        <p className="text-xl sm:text-2xl font-bold text-primary">${order.total}</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto border-2 border-primary/50 hover:border-primary"
                      onClick={() => {
                        setSelectedOrder(order.id);
                        setActiveSection('tracking');
                      }}
                    >
                      View Details
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Card>
                ))}
              </div>
            )}

            {/* Track Order Section */}
            {activeSection === 'tracking' && (
              <div className="space-y-4 sm:space-y-6 animate-fade-in">
                <h2 className="text-2xl sm:text-3xl font-bold font-poppins mb-4 sm:mb-6">Track Order</h2>
                {selectedOrder ? (
                  (() => {
                    const order = mockOrders.find(o => o.id === selectedOrder);
                    if (!order) return null;
                    
                    return (
                      <Card className="p-4 sm:p-6 bg-card/50 backdrop-blur-sm border-2 border-border/40">
                        <div className="mb-6">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                            <div>
                              <h3 className="text-xl sm:text-2xl font-bold mb-2">{order.id}</h3>
                              <p className="text-sm text-muted-foreground">{order.items}</p>
                            </div>
                            <Badge className={`${getStatusColor(order.status)} border self-start sm:self-auto`}>
                              {order.status}
                            </Badge>
                          </div>
                          
                          <div className="bg-background/50 p-3 sm:p-4 rounded-lg border border-border/40 mb-6">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                              <span className="text-sm text-muted-foreground">Carrier:</span>
                              <span className="font-medium">{order.tracking.carrier}</span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                              <span className="text-sm text-muted-foreground">Tracking Number:</span>
                              <div className="flex items-center gap-2">
                                <span className="font-mono text-xs sm:text-sm">{order.tracking.number}</span>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => copyToClipboard(order.tracking.number, "Tracking number")}
                                  className="h-7 w-7 p-0"
                                >
                                  <Copy className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          </div>

                          <div className="mb-4">
                            <div className="flex justify-between text-xs sm:text-sm mb-2">
                              <span className="text-muted-foreground">Progress</span>
                              <span className="text-primary font-medium">{order.tracking.progress}%</span>
                            </div>
                            <Progress value={order.tracking.progress} className="h-2" />
                          </div>

                          <div className="space-y-4">
                            {order.tracking.steps.map((step, index) => (
                              <div key={index} className="flex items-start gap-3 sm:gap-4">
                                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                                  step.completed ? 'bg-primary/20 border-2 border-primary shadow-glow' : 'bg-muted/20 border-2 border-muted/40'
                                }`}>
                                  {step.completed && <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary" />}
                                </div>
                                <div className="flex-1 pt-1">
                                  <p className={`font-medium text-sm sm:text-base ${step.completed ? 'text-foreground' : 'text-muted-foreground'}`}>
                                    {step.label}
                                  </p>
                                  <p className="text-xs sm:text-sm text-muted-foreground">{step.date}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Button
                          className="w-full sm:w-auto bg-gradient-accent hover:opacity-90 transition-opacity"
                          onClick={() => window.open(`https://www.${order.tracking.carrier.toLowerCase().split(' ')[0]}.com/tracking`, '_blank')}
                        >
                          Track Package
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </Button>
                      </Card>
                    );
                  })()
                ) : (
                  <Card className="p-6 sm:p-8 bg-card/50 backdrop-blur-sm border-2 border-border/40 text-center">
                    <MapPin className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground text-sm sm:text-base">Select an order to view tracking details</p>
                  </Card>
                )}
              </div>
            )}

            {/* Referrals Section */}
            {activeSection === 'referrals' && (
              <div className="space-y-4 sm:space-y-6 animate-fade-in">
                <h2 className="text-2xl sm:text-3xl font-bold font-poppins mb-4 sm:mb-6">Referral Program</h2>
                
                <Card className="p-4 sm:p-6 bg-card/50 backdrop-blur-sm border-2 border-primary/30 shadow-glow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-accent flex items-center justify-center">
                      <Gift className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold">Your Referral Stats</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">Share and earn rewards</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-background/50 p-3 sm:p-4 rounded-lg border border-border/40 text-center">
                      <p className="text-2xl sm:text-3xl font-bold text-primary">{referralStats.friends}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Friends Referred</p>
                    </div>
                    <div className="bg-background/50 p-3 sm:p-4 rounded-lg border border-border/40 text-center">
                      <p className="text-2xl sm:text-3xl font-bold text-primary">${referralStats.credits}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Credits Earned</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label className="text-xs sm:text-sm mb-2 block">Your Referral Code</Label>
                      <div className="flex gap-2">
                        <Input
                          value={referralCode}
                          readOnly
                          className="font-mono text-sm sm:text-base bg-background/50 border-border/60"
                        />
                        <Button
                          variant="outline"
                          onClick={() => copyToClipboard(referralCode, "Referral code")}
                          className="border-2 border-primary/50 hover:border-primary flex-shrink-0"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div>
                      <Label className="text-xs sm:text-sm mb-2 block">Shareable Link</Label>
                      <div className="flex gap-2">
                        <Input
                          value={referralLink}
                          readOnly
                          className="text-xs sm:text-sm bg-background/50 border-border/60"
                        />
                        <Button
                          variant="outline"
                          onClick={() => copyToClipboard(referralLink, "Referral link")}
                          className="border-2 border-primary/50 hover:border-primary flex-shrink-0"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 sm:p-6 bg-card/30 backdrop-blur-sm border-2 border-border/40">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">How It Works</h3>
                  <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">1.</span>
                      <span>Share your unique referral code or link with friends</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">2.</span>
                      <span>They get 10% off their first order</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">3.</span>
                      <span>You earn $10 credit for each successful referral</span>
                    </li>
                  </ul>
                </Card>
              </div>
            )}

            {/* Order History Section */}
            {activeSection === 'history' && (
              <div className="space-y-4 sm:space-y-6 animate-fade-in">
                <h2 className="text-2xl sm:text-3xl font-bold font-poppins mb-4 sm:mb-6">Order History</h2>
                {mockOrders.map((order) => (
                  <Card key={order.id} className="p-4 sm:p-6 bg-card/50 backdrop-blur-sm border-2 border-border/40 hover:border-primary/50 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="text-base sm:text-lg font-bold">{order.id}</h3>
                          <Badge className={`${getStatusColor(order.status)} border text-xs`}>
                            {order.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{order.items}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(order.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                        <p className="text-base sm:text-lg font-bold text-primary mt-2">${order.total}</p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-2 border-primary/50 hover:border-primary whitespace-nowrap"
                          onClick={() => {
                            setSelectedOrder(order.id);
                            setActiveSection('tracking');
                          }}
                        >
                          View Details
                        </Button>
                        {order.status === 'Delivered' && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-2 border-border/50 hover:border-primary/50 whitespace-nowrap"
                            onClick={() => toast.success("Item added to cart!")}
                          >
                            Buy Again
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {/* Profile Settings Section */}
            {activeSection === 'profile' && (
              <div className="space-y-4 sm:space-y-6 animate-fade-in">
                <h2 className="text-2xl sm:text-3xl font-bold font-poppins mb-4 sm:mb-6">Profile Settings</h2>
                
                <Card className="p-4 sm:p-6 bg-card/50 backdrop-blur-sm border-2 border-border/40">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-accent flex items-center justify-center">
                      <UserIcon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold">Account Information</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{user.email}</p>
                      <p className="text-xs text-muted-foreground">
                        Member since {new Date(user.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-xs sm:text-sm">Full Name</Label>
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                        placeholder="Enter your full name"
                        className="mt-1 bg-background/50 border-border/60"
                      />
                    </div>

                    <div>
                      <Label htmlFor="address" className="text-xs sm:text-sm">Shipping Address</Label>
                      <Input
                        id="address"
                        value={profileData.address}
                        onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
                        placeholder="123 Main Street"
                        className="mt-1 bg-background/50 border-border/60"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city" className="text-xs sm:text-sm">City</Label>
                        <Input
                          id="city"
                          value={profileData.city}
                          onChange={(e) => setProfileData({ ...profileData, city: e.target.value })}
                          placeholder="Los Angeles"
                          className="mt-1 bg-background/50 border-border/60"
                        />
                      </div>
                      <div>
                        <Label htmlFor="zip" className="text-xs sm:text-sm">ZIP Code</Label>
                        <Input
                          id="zip"
                          value={profileData.zipCode}
                          onChange={(e) => setProfileData({ ...profileData, zipCode: e.target.value })}
                          placeholder="90210"
                          className="mt-1 bg-background/50 border-border/60"
                        />
                      </div>
                    </div>

                    <Button
                      className="w-full sm:w-auto bg-gradient-accent hover:opacity-90 transition-opacity"
                      onClick={() => toast.success("Profile updated successfully!")}
                    >
                      Save Changes
                    </Button>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Account;
