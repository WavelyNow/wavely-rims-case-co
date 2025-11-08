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

      {/* HERO SECTION - Clean & Minimal */}
      <header className="relative overflow-hidden min-h-screen flex items-center justify-center" aria-labelledby="hero-title">
        {/* Clean Background with Subtle Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50" />

        {/* Content */}
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="space-y-8 animate-fade-in">
            {/* WAVELY Text with Lighting Effect */}
            <h1 
              id="hero-title" 
              className="font-display font-black text-[clamp(3rem,10vw,8rem)] leading-none tracking-tight"
            >
              <span className="bg-gradient-text bg-clip-text text-transparent drop-shadow-lg">
                WAVELY
              </span>
            </h1>
            
            {/* Subtle Divider */}
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-champagne to-transparent mx-auto" />
            
            {/* Subtitle */}
            <p className="font-heading font-light text-xl md:text-2xl text-warm-gray tracking-wide">
              Premium Phone Case Artistry
            </p>
            
            {/* Single CTA */}
            <div className="pt-4">
              <Button 
                size="lg"
                className="bg-champagne hover:bg-champagne/90 text-deep-black px-8 py-6 text-lg font-heading rounded-full shadow-lift hover:shadow-card transition-all hover:scale-105"
                onClick={() => window.location.href = '/shop'}
              >
                Explore Collection
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main id="main-content" className="relative">
        {/* FEATURES SECTION - Clean & Minimal */}
        <section className="py-16 md:py-20 bg-light-gray" aria-labelledby="features-title">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={i}
                    className="p-6 text-center bg-white border border-gray-200 hover:shadow-lift transition-all"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-champagne/20 mb-4">
                      <Icon className="h-6 w-6 text-deep-black" />
                    </div>
                    <h3 className="font-heading font-semibold mb-2 text-base">{feature.title}</h3>
                    <p className="text-sm text-warm-gray">{feature.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* FEATURED PRODUCTS SECTION - Clean & Elegant */}
        <section className="py-20 md:py-32 relative" aria-labelledby="featured-title">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 id="featured-title" className="font-display text-5xl md:text-6xl font-black mb-4 text-deep-black">
                Featured Collection
              </h2>
              <div className="w-24 h-[2px] bg-champagne mx-auto mb-6" />
              <p className="text-xl text-warm-gray max-w-2xl mx-auto">
                Explore our premium phone cases
              </p>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[...Array(4)].map((_, i) => (
                  <Card key={i} className="animate-pulse border border-gray-200 bg-white">
                    <div className="aspect-square bg-light-gray" />
                    <div className="p-6 space-y-3">
                      <div className="h-4 bg-light-gray rounded w-3/4" />
                      <div className="h-4 bg-light-gray rounded w-1/2" />
                      <div className="h-10 bg-light-gray rounded" />
                    </div>
                  </Card>
                ))}
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-warm-gray">No products available yet</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product, i) => {
                  const image = product.node.images.edges[0]?.node;
                  const price = product.node.priceRange.minVariantPrice;

                  return (
                    <Card
                      key={product.node.id}
                      className="group relative animate-fade-in overflow-hidden border border-gray-200 bg-white hover:shadow-lift transition-all duration-300"
                    >
                      <a href={`/product/${product.node.handle}`}>
                        <div className="aspect-square overflow-hidden bg-light-gray p-6 relative">
                          {image ? (
                            <img
                              src={image.url}
                              alt={image.altText || product.node.title}
                              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <ShoppingCart className="h-20 w-20 text-warm-gray" />
                            </div>
                          )}
                        </div>
                      </a>

                      <div className="p-6 space-y-4">
                        <div className="space-y-2">
                          <a href={`/product/${product.node.handle}`}>
                            <h3 className="font-heading text-lg font-semibold text-deep-black group-hover:text-champagne transition-colors">
                              {product.node.title}
                            </h3>
                          </a>
                          <p className="text-sm text-warm-gray line-clamp-2">
                            {product.node.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-heading font-semibold text-champagne">
                            ${parseFloat(price.amount).toFixed(2)}
                          </span>
                        </div>

                        <Button
                          size="sm"
                          className="w-full bg-deep-black hover:bg-deep-black/90 text-white transition-all"
                          onClick={() => handleAddToCart(product)}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}

            <div className="text-center mt-12">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 border-2 border-deep-black text-deep-black hover:bg-deep-black hover:text-white transition-all font-heading text-base"
                onClick={() => window.location.href = "/shop"}
              >
                View All Collection
                <ArrowRight className="ml-2 h-5 w-5" />
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
