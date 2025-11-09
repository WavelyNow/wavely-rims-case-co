import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RacingBackground from "@/components/RacingBackground";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap, Upload, Star, Instagram, Heart, ShoppingCart, Shield, Truck, RefreshCw, CheckCircle2, Package } from "lucide-react";
import { useState, useEffect } from "react";
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

      {/* HERO SECTION - Street Racing Style */}
      <header className="relative overflow-hidden min-h-screen flex items-center justify-center" aria-labelledby="hero-title">
        {/* Racing Background */}
        <RacingBackground />

        {/* Content */}
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <Badge 
              variant="outline" 
              className="mb-8 border-primary/50 text-primary backdrop-blur-sm bg-black/40 px-6 py-2 text-sm font-heading uppercase tracking-widest animate-neon-pulse"
            >
              <Zap className="mr-2 h-4 w-4" />
              Underground Racing Style
            </Badge>

            {/* Main Title with Neon Glow */}
            <h1 
              id="hero-title" 
              className="font-racing text-7xl sm:text-8xl md:text-9xl font-bold mb-6 uppercase tracking-wider text-white"
              style={{
                textShadow: `
                  0 0 10px hsl(25 100% 50%),
                  0 0 20px hsl(190 100% 50%),
                  0 0 30px hsl(120 100% 60%),
                  0 0 40px hsl(25 100% 50%)
                `
              }}
              }}
            >
              WAVELY
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-4 font-heading tracking-wide uppercase">
              Street-Inspired <span className="text-primary neon-glow-orange">Armor</span>
            </p>
            
            <p className="text-base sm:text-lg text-white/60 mb-12 max-w-2xl mx-auto font-body">
              Custom phone cases built for the streets. Fuse your ride's DNA with cutting-edge protection.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                variant="neon"
                className="text-lg px-8 py-6 h-auto focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none"
                onClick={() => window.location.href = '/customize'}
              >
                <Sparkles className="mr-2 h-5 w-5" aria-hidden="true" />
                Build Your Case
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 h-auto border-secondary/50 text-secondary hover:bg-secondary/20 hover:border-secondary hover:neon-glow-blue focus-visible:ring-2 focus-visible:ring-secondary/40 focus-visible:outline-none"
                onClick={() => window.location.href = '/shop'}
              >
                Browse Builds
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>

        {/* Speed lines effect */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
              style={{
                top: `${20 + i * 15}%`,
                left: '-100%',
                right: '100%',
                animation: `speedLine ${2 + i * 0.3}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </header>

      <main id="main-content" className="relative">
        {/* FEATURES SECTION */}
        <section className="py-20 relative" aria-labelledby="features-title">
          <div className="absolute inset-0 bg-black/40" />
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={i}
                    className="p-6 text-center bg-black/60 backdrop-blur border-2 border-white/10 hover:border-primary/50 hover:shadow-lift transition-all"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 border border-primary/40 mb-4 neon-glow-orange">
                      <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-racing text-base mb-2 text-white uppercase tracking-wide">{feature.title}</h3>
                    <p className="text-sm text-white/60 font-body">{feature.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* FEATURED PRODUCTS SECTION */}
        <section className="py-20 md:py-32 relative" aria-labelledby="featured-title">
          <div className="absolute inset-0 bg-gradient-dark" />
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 animate-fade-in">
              <h2 id="featured-title" className="font-racing text-5xl md:text-6xl mb-4 text-white uppercase tracking-wider">
                Featured <span className="text-primary neon-glow-orange">Builds</span>
              </h2>
              <div className="w-24 h-[2px] bg-gradient-neon mx-auto mb-6" />
              <p className="text-xl text-white/60 max-w-2xl mx-auto font-body">
                Street-tested designs inspired by legendary race machines
              </p>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[...Array(4)].map((_, i) => (
                  <Card key={i} className="animate-pulse border-2 border-white/10 bg-black/60">
                    <div className="aspect-square bg-muted/20" />
                    <div className="p-6 space-y-3">
                      <div className="h-4 bg-muted/20 rounded w-3/4" />
                      <div className="h-4 bg-muted/20 rounded w-1/2" />
                      <div className="h-10 bg-muted/20 rounded" />
                    </div>
                  </Card>
                ))}
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-white/60 font-body">No builds available yet. Check back soon!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product, i) => {
                  const image = product.node.images.edges[0]?.node;
                  const price = product.node.priceRange.minVariantPrice;

                  return (
                    <Card
                      key={product.node.id}
                      className="group relative animate-fade-in overflow-hidden border-2 border-white/10 hover:border-primary/60 bg-black/60 backdrop-blur hover:scale-105 transition-premium"
                    >
                      <a href={`/product/${product.node.handle}`} aria-label={`View ${product.node.title} details`}>
                        <div className="aspect-square overflow-hidden relative">
                          {image ? (
                            <img
                              src={image.url}
                              alt={image.altText || product.node.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              style={{
                                filter: 'contrast(1.1) brightness(0.9)',
                              }}
                              loading="lazy"
                              decoding="async"
                              fetchpriority="low"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-muted/20">
                              <ShoppingCart className="h-20 w-20 text-white/20" aria-hidden="true" />
                            </div>
                          )}
                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                        </div>
                      </a>

                      <div className="p-6 space-y-4">
                        <div className="space-y-2">
                          <a href={`/product/${product.node.handle}`}>
                            <h3 className="font-racing text-xl text-white uppercase tracking-wide group-hover:text-primary transition-colors">
                              {product.node.title}
                            </h3>
                          </a>
                          <p className="text-sm text-white/60 line-clamp-2 font-body">
                            {product.node.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-3xl font-racing text-primary neon-glow-orange">
                            ${parseFloat(price.amount).toFixed(2)}
                          </span>
                        </div>

                        <Button
                          variant="neon"
                          size="sm"
                          className="w-full focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none"
                          onClick={() => handleAddToCart(product)}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" aria-hidden="true" />
                          Add To Cart
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
                className="px-8 py-6 border-2 border-secondary/50 text-secondary hover:bg-secondary/20 hover:border-secondary hover:neon-glow-blue font-racing uppercase tracking-wider focus-visible:ring-2 focus-visible:ring-secondary/40 focus-visible:outline-none"
                onClick={() => window.location.href = "/shop"}
              >
                View All Builds
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section className="py-12 sm:py-16 md:py-20 relative" aria-labelledby="how-it-works-title">
          <div className="absolute inset-0 bg-black/60" />
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 id="how-it-works-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-racing mb-3 sm:mb-4 text-white uppercase tracking-wider">
                Build Your <span className="text-primary neon-glow-orange">Legend</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/60 px-4 font-body">
                Three steps to create your custom street-inspired case
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  step: "1",
                  icon: Upload,
                  title: "Choose or Upload",
                  description: "Select from our collection or upload your own ride's photo"
                },
                {
                  step: "2",
                  icon: Sparkles,
                  title: "Customize Design",
                  description: "Pick rims, colors, and finishes. Make it yours."
                },
                {
                  step: "3",
                  icon: Truck,
                  title: "Receive Your Case",
                  description: "Premium materials, precision crafted, delivered fast"
                }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={i}
                    className="relative p-6 sm:p-8 bg-black/60 backdrop-blur border-2 border-white/10 hover:border-primary/50 transition-all hover:shadow-lift text-center"
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                    <div className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-neon flex items-center justify-center text-white font-racing text-lg sm:text-xl">
                      {item.step}
                    </div>
                    <div className="inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-primary/20 border-2 border-primary mb-3 sm:mb-4 mt-3 sm:mt-4 neon-glow-orange">
<<<<<<< HEAD
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
=======
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" aria-hidden="true" />
>>>>>>> adc880a (Curățare catalog: eliminare referințe la rim style, ștergere StepRimStyle; actualizări README; eliminare banner temporar; actualizări copy (Newsletter, StyleQuiz, ReturnPolicy, HowItWorks); curățare materiale în configuratorData)
                    </div>
                    <h3 className="text-lg sm:text-xl font-racing mb-2 sm:mb-3 text-white uppercase tracking-wide">{item.title}</h3>
                    <p className="text-sm sm:text-base text-white/60 font-body">{item.description}</p>
                  </Card>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                variant="neon"
<<<<<<< HEAD
                className="h-14 px-8 font-racing uppercase tracking-wider"
=======
                className="h-14 px-8 font-racing uppercase tracking-wider focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none"
>>>>>>> adc880a (Curățare catalog: eliminare referințe la rim style, ștergere StepRimStyle; actualizări README; eliminare banner temporar; actualizări copy (Newsletter, StyleQuiz, ReturnPolicy, HowItWorks); curățare materiale în configuratorData)
                onClick={() => window.location.href = "/how-it-works"}
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </section>

        {/* CUSTOMIZE CTA SECTION */}
        <section className="py-20 relative" aria-labelledby="customize-title">
          <div className="absolute inset-0 bg-gradient-dark" />
          <div className="container max-w-5xl mx-auto px-4 relative z-10">
            <Card className="relative overflow-hidden p-12 md:p-16 bg-black/60 backdrop-blur-xl border-2 border-primary/30">
              {/* Neon glow effects */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-neon-pulse" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] animate-neon-pulse" style={{ animationDelay: '1s' }} />
              
              <div className="relative z-10 text-center space-y-6">
                <h2 id="customize-title" className="text-4xl md:text-5xl font-racing text-white uppercase tracking-wider">
                  Ready to <span className="text-primary neon-glow-orange">Build?</span>
                </h2>

                <p className="text-xl text-white/60 max-w-2xl mx-auto font-body">
                  Transform your favorite car into a unique phone case with our customization tool
                </p>

                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <Button
                    size="lg"
                    variant="neon"
<<<<<<< HEAD
                    className="h-14 px-10 text-lg font-racing uppercase tracking-wider group"
=======
                    className="h-14 px-10 text-lg font-racing uppercase tracking-wider group focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none"
>>>>>>> adc880a (Curățare catalog: eliminare referințe la rim style, ștergere StepRimStyle; actualizări README; eliminare banner temporar; actualizări copy (Newsletter, StyleQuiz, ReturnPolicy, HowItWorks); curățare materiale în configuratorData)
                    onClick={() => window.location.href = "/customize"}
                  >
                    <Upload className="h-5 w-5 mr-2" aria-hidden="true" />
                    Start Customizing
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
<<<<<<< HEAD
                    className="h-14 px-10 border-2 border-secondary/50 text-secondary hover:bg-secondary/20 hover:border-secondary hover:neon-glow-blue text-lg font-racing uppercase tracking-wider"
=======
                    className="h-14 px-10 border-2 border-secondary/50 text-secondary hover:bg-secondary/20 hover:border-secondary hover:neon-glow-blue text-lg font-racing uppercase tracking-wider focus-visible:ring-2 focus-visible:ring-secondary/40 focus-visible:outline-none"
>>>>>>> adc880a (Curățare catalog: eliminare referințe la rim style, ștergere StepRimStyle; actualizări README; eliminare banner temporar; actualizări copy (Newsletter, StyleQuiz, ReturnPolicy, HowItWorks); curățare materiale în configuratorData)
                    onClick={() => window.location.href = "/shop"}
                  >
                    Browse Builds
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
                  className="h-14 px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-glow transition-premium font-bold group focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none"
                  onClick={() => window.open('https://instagram.com', '_blank')}
                >
                  <Instagram className="h-5 w-5 mr-2" aria-hidden="true" />
                  Follow @WAVELY
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 border-2 hover:bg-card transition-smooth font-bold focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none"
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
                        <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
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
