import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap, Upload, Star, Instagram, Heart, ShoppingCart, Shield, Truck, RefreshCw, CheckCircle2, Package } from "lucide-react";
import { useState, useEffect } from "react";
import heroPhoneCase from "@/assets/hero-phone-case.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { getProducts, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

const Index = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts(4);
        setProducts(data);
      } catch (error) {
        console.error("Failed to load products:", error);
        toast.error("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleAddToCart = (product: ShopifyProduct) => {
    const firstVariant = product.node.variants.edges[0]?.node;
    if (!firstVariant) {
      toast.error("Product variant not available");
      return;
    }

    addItem({
      product,
      variantId: firstVariant.id,
      variantTitle: firstVariant.title,
      price: firstVariant.price,
      quantity: 1,
      selectedOptions: firstVariant.selectedOptions,
    });

    toast.success("Added to cart!", {
      description: `${product.node.title} has been added to your cart.`,
    });
  };

  const features = [
    {
      icon: Shield,
      title: "Premium Quality",
      description: "Military-grade protection with 3D-printed precision"
    },
    {
      icon: Sparkles,
      title: "Full Customization",
      description: "Upload your car photo or choose from our designs"
    },
    {
      icon: Truck,
      title: "Fast Shipping",
      description: "Free shipping on orders over $50"
    },
    {
      icon: RefreshCw,
      title: "12-Month Warranty",
      description: "Quality guarantee on all products"
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-card px-3 py-2 rounded-md z-50">
        Skip to content
      </a>

      <Navigation />

      {/* HERO SECTION - Mobile Optimized */}
      <header className="relative overflow-hidden min-h-[100svh] sm:h-screen" aria-labelledby="hero-title">
        {/* Background Image with Breathing Effect */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center sm:animate-breathing"
            style={{
              backgroundImage: `url(${heroBg})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-hot-pink/10 via-transparent to-electric-cyan/10" />
        </div>

        {/* Animated Particles - Reduced on mobile */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: i % 3 === 0 ? 'hsl(var(--hot-pink))' : i % 3 === 1 ? 'hsl(var(--electric-cyan))' : 'white',
                opacity: Math.random() * 0.5 + 0.2,
                animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        {/* Mobile particles - fewer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none sm:hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: '3px',
                height: '3px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: i % 2 === 0 ? 'hsl(var(--hot-pink))' : 'hsl(var(--electric-cyan))',
                opacity: 0.4,
                animation: `float ${Math.random() * 8 + 8}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center justify-center py-20 sm:py-0">
          <div className="text-center space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in max-w-4xl w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 animate-pulse" style={{ animationDuration: '3s' }}>
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-hot-pink" />
              <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Premium Automotive Cases</span>
            </div>

            {/* Main Heading - Fluid Typography */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <h1 id="hero-title" className="title-text font-black leading-[0.9] text-[clamp(2.5rem,12vw,8rem)]">
                <span className="block text-white drop-shadow-2xl">Your Car.</span>
                <span className="block mt-2 sm:mt-4 bg-gradient-accent-soft bg-clip-text text-transparent drop-shadow-2xl animate-gradient">
                  Your Case.
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto font-light drop-shadow-lg px-2">
                Transform your favorite car into a premium<br className="hidden sm:block" />
                <span className="font-semibold text-hot-pink"> 3D-printed phone case</span> with neon edge details
              </p>
            </div>

            {/* CTAs - Mobile Optimized */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 pt-4 sm:pt-6 md:pt-8 px-4">
              <Button
                size="lg"
                className="h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-10 bg-white text-black hover:bg-white/90 transition-all text-sm sm:text-base md:text-lg font-black group shadow-2xl hover:scale-105 w-full sm:w-auto"
                onClick={() => (window.location.href = "/customize")}
              >
                <Upload className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
                Create Your Case
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-2 transition-transform" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-10 border-2 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all text-sm sm:text-base md:text-lg font-black hover:scale-105 w-full sm:w-auto"
                onClick={() => (window.location.href = "/shop")}
              >
                Browse Collection
              </Button>
            </div>

            {/* Trust Badges - Mobile Stacked */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 md:pt-12 px-4">
              <div className="flex items-center justify-center sm:justify-start gap-3 text-white/90">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-hot-pink" />
                </div>
                <span className="font-semibold text-sm sm:text-base">Free Shipping</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3 text-white/90">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-electric-cyan" />
                </div>
                <span className="font-semibold text-sm sm:text-base">12-Month Warranty</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3 text-white/90">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <Package className="h-4 w-4 sm:h-5 sm:w-5 text-lime-neon" />
                </div>
                <span className="font-semibold text-sm sm:text-base">Premium Quality</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 animate-bounce text-white/60">
          <span className="text-xs uppercase tracking-widest font-bold">Scroll</span>
          <ArrowRight className="h-5 w-5 rotate-90" />
        </div>
      </header>

      <main id="main-content" className="relative">
        {/* FEATURES SECTION - Mobile Optimized */}
        <section className="py-12 sm:py-16 md:py-20 relative" aria-labelledby="features-title">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={i}
                    className="p-4 sm:p-6 text-center bg-card/50 backdrop-blur-sm border-2 border-border/40 hover:border-primary/50 transition-all hover:shadow-premium"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-gradient-accent mb-3 sm:mb-4">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h3 className="font-bold mb-2 text-sm sm:text-base">{feature.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{feature.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* FEATURED PRODUCTS SECTION - Mobile Optimized */}
        <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden" aria-labelledby="featured-title">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
          
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
              <h2 id="featured-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4">
                Featured <span className="bg-gradient-accent-warm bg-clip-text text-transparent">Collection</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                Explore our premium automotive phone cases
              </p>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                  <Card key={i} className="animate-pulse border-2 border-border/40 bg-card/60 backdrop-blur-sm">
                    <div className="aspect-square bg-muted" />
                    <div className="p-6 space-y-3">
                      <div className="h-4 bg-muted rounded w-3/4" />
                      <div className="h-4 bg-muted rounded w-1/2" />
                      <div className="h-10 bg-muted rounded" />
                    </div>
                  </Card>
                ))}
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">No products available yet</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product, i) => {
                  const image = product.node.images.edges[0]?.node;
                  const price = product.node.priceRange.minVariantPrice;

                  return (
                    <Card
                      key={product.node.id}
                      className="group relative animate-fade-in overflow-hidden border-2 border-border/40 bg-card/60 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-premium hover:-translate-y-2"
                      style={{ animationDelay: `${i * 150}ms` }}
                    >
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
                      
                      <a href={`/product/${product.node.handle}`}>
                        <div className="aspect-square overflow-hidden bg-gradient-subtle p-6 relative">
                          {image ? (
                            <img
                              src={image.url}
                              alt={image.altText || product.node.title}
                              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <ShoppingCart className="h-20 w-20 text-muted-foreground" />
                            </div>
                          )}
                        </div>
                      </a>

                      <div className="p-6 relative z-10 space-y-4">
                        <div className="space-y-2">
                          <a href={`/product/${product.node.handle}`}>
                            <h3 className="text-xl font-black font-poppins group-hover:text-primary transition-colors">
                              {product.node.title}
                            </h3>
                          </a>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {product.node.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-black text-primary">
                            ${parseFloat(price.amount).toFixed(2)}
                          </span>
                          <Badge variant="secondary" className="text-xs">{price.currencyCode}</Badge>
                        </div>

                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            className="flex-1 bg-gradient-accent hover:shadow-glow transition-premium text-xs font-bold"
                            onClick={() => handleAddToCart(product)}
                          >
                            <ShoppingCart className="h-4 w-4 mr-1" />
                            ADD TO CART
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="border-2 border-primary/40 hover:bg-primary/10 hover:border-primary"
                          >
                            <Heart className="h-4 w-4 hover:fill-primary hover:text-primary transition-all" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}

            <div className="text-center mt-8 sm:mt-10 md:mt-12">
              <Button
                size="lg"
                className="h-12 sm:h-14 px-6 sm:px-8 bg-gradient-vibrant hover:shadow-neon transition-premium text-base sm:text-lg font-black group w-full sm:w-auto"
                onClick={() => window.location.href = "/shop"}
              >
                VIEW ALL CASES
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION - Mobile Optimized */}
        <section className="py-12 sm:py-16 md:py-20 relative" aria-labelledby="how-it-works-title">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 id="how-it-works-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4">
                How It <span className="bg-gradient-accent-cool bg-clip-text text-transparent">Works</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
                Get your custom case in 3 simple steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  step: "1",
                  icon: Upload,
                  title: "Choose or Upload",
                  description: "Select from our collection or upload your own car photo"
                },
                {
                  step: "2",
                  icon: Sparkles,
                  title: "Customize Design",
                  description: "Pick your phone model, rim style, and add personal touches"
                },
                {
                  step: "3",
                  icon: Truck,
                  title: "Receive Your Case",
                  description: "Get your premium 3D-printed case delivered in 5-7 days"
                }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={i}
                    className="relative p-6 sm:p-8 bg-card/50 backdrop-blur-sm border-2 border-border/40 hover:border-primary/50 transition-all hover:shadow-premium text-center"
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                    <div className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-accent flex items-center justify-center text-white font-black text-lg sm:text-xl">
                      {item.step}
                    </div>
                    <div className="inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-primary/10 mb-3 sm:mb-4 mt-3 sm:mt-4">
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{item.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{item.description}</p>
                  </Card>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="h-14 px-8 bg-gradient-accent hover:shadow-glow transition-premium font-bold"
                onClick={() => window.location.href = "/how-it-works"}
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* CUSTOMIZE CTA SECTION */}
        <section className="py-20 relative" aria-labelledby="customize-title">
          <div className="container max-w-5xl mx-auto px-4">
            <Card className="relative overflow-hidden p-12 md:p-16 bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-xl border-2 border-primary/30">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[100px]" />
              
              <div className="relative z-10 text-center space-y-6">
                <h2 id="customize-title" className="text-4xl md:text-5xl font-black">
                  Ready to Create <span className="bg-gradient-accent-soft bg-clip-text text-transparent">Your Case?</span>
                </h2>

                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Transform your favorite car into a unique phone case with our easy customization tool
                </p>

                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <Button
                    size="lg"
                    className="h-14 px-10 bg-gradient-accent hover:shadow-glow transition-premium text-lg font-bold group"
                    onClick={() => window.location.href = "/customize"}
                  >
                    <Upload className="h-5 w-5 mr-2" />
                    Start Customizing
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-10 border-2 hover:bg-card transition-smooth text-lg font-bold"
                    onClick={() => window.location.href = "/shop"}
                  >
                    Browse Ready Designs
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* INSTAGRAM / SOCIAL SECTION */}
        <section className="py-20 relative" aria-labelledby="social-title">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <div className="space-y-8">
              <div>
                <h2 id="social-title" className="text-4xl md:text-5xl font-black mb-4">
                  Join the <span className="bg-gradient-accent bg-clip-text text-transparent">Community</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Follow us on Instagram for inspiration, updates, and exclusive offers
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-6 pt-4">
                <Button
                  size="lg"
                  className="h-14 px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-glow transition-premium font-bold group"
                  onClick={() => window.open('https://instagram.com', '_blank')}
                >
                  <Instagram className="h-5 w-5 mr-2" />
                  Follow @WAVELY
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 border-2 hover:bg-card transition-smooth font-bold"
                  onClick={() => window.location.href = "/contact"}
                >
                  Get in Touch
                </Button>
              </div>

              {/* Social Proof */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {[
                  { label: "Free Shipping", icon: Truck },
                  { label: "Secure Checkout", icon: Shield },
                  { label: "Quality Guarantee", icon: CheckCircle2 },
                  { label: "Fast Delivery", icon: Zap }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
