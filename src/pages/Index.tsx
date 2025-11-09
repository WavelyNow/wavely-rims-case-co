import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
// import RacingBackground from "@/components/RacingBackground";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap, Upload, Star, Instagram, ShoppingCart, Shield, Truck, RefreshCw, CheckCircle2, Package } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { getProducts, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import heroBg from "@/assets/hero-bg.jpg";
import bgVideoOriginal from "@/assets/video-background-original.mp4";

const Index = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [canPlayVideo, setCanPlayVideo] = useState(true);
  const addItem = useCartStore(state => state.addItem);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  // Ensure autoplay works across browsers in production
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Detect basic MP4 playback support; if none, fallback to poster
    const probe = document.createElement('video');
    const support = probe.canPlayType('video/mp4');
    if (!support) {
      setCanPlayVideo(false);
      return;
    }

    // Force properties before loading
    v.muted = true;
    v.playsInline = true;
    v.playbackRate = 1.0;

    const tryPlay = () => {
      v.play().catch(() => {
        // Autoplay may be blocked; will retry on user interaction
      });
    };

    const onLoaded = () => tryPlay();
    v.addEventListener("loadeddata", onLoaded);

    // Attempt immediately
    tryPlay();

    // Fallback: retry once on first user interaction
    const onInteract = () => {
      tryPlay();
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("touchstart", onInteract);
      window.removeEventListener("keydown", onInteract);
    };
    window.addEventListener("pointerdown", onInteract, { once: true });
    window.addEventListener("touchstart", onInteract, { once: true });
    window.addEventListener("keydown", onInteract, { once: true });

    return () => {
      v.removeEventListener("loadeddata", onLoaded);
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("touchstart", onInteract);
      window.removeEventListener("keydown", onInteract);
    };
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
      <header className="relative overflow-hidden min-h-[75vh] lg:minh-[70vh] flex items-center justify-center" aria-labelledby="hero-title">
        {/* Background media */}
        {canPlayVideo ? (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover opacity-100"
            preload="metadata"
            autoPlay
            loop
            muted
            playsInline
            poster={heroBg}
            aria-hidden="true"
            onError={(e) => {
              const v = videoRef.current;
              console.error("Background video failed to load/play", {
                event: e,
                currentSrc: v?.currentSrc,
                error: v?.error,
                networkState: v?.networkState,
                readyState: v?.readyState,
              });
              setCanPlayVideo(false);
            }}
            onLoadedMetadata={() => {
              const v = videoRef.current;
              if (v) {
                v.playbackRate = 1.0;
                v.play().catch(() => {});
              }
            }}
            onCanPlay={() => {
              const v = videoRef.current;
              if (v) {
                v.playbackRate = 1.0;
                v.play().catch(() => {});
              }
            }}
          >
            <source src={bgVideoOriginal} type="video/mp4" />
          </video>
        ) : (
          <img
            src={heroBg}
            alt="Racing case background"
            className="absolute inset-0 w-full h-full object-cover opacity-100"
            aria-hidden="true"
          />
        )}

        {/* Content */}
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="space-y-24 animate-fade-in">
            {/* Badge */}
            <Badge 
              variant="outline" 
              className="mb-0 -translate-y-36 sm:-translate-y-48 md:-translate-y-64 lg:-translate-y-72 border-primary/50 text-primary backdrop-blur-sm bg-black/40 px-6 py-2 text-sm font-heading uppercase tracking-widest animate-neon-pulse"
            >
              <Zap className="mr-2 h-4 w-4" />
              Underground Racing Style
            </Badge>

            {/* Main Title accessible label */}
            <h1 id="hero-title" className="sr-only">Wavely</h1>
          </div>
        </div>

        {/* CTA Buttons (absolute bottom, clearly visible) */}
        <div className="absolute inset-x-0 bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 flex flex-col sm:flex-row gap-5 justify-center items-center z-20">
          <Button 
            size="lg" 
            variant="neon"
            className="text-xl sm:text-2xl px-10 sm:px-12 py-6 sm:py-7 h-auto font-semibold uppercase tracking-wide text-white bg-black/40 backdrop-blur-md border-2 border-primary/60 neon-glow-orange hover:bg-black/50 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none"
            onClick={() => window.location.href = '/customize'}
          >
            <Sparkles className="mr-3 h-6 w-6 text-primary" aria-hidden="true" />
            Build Your Case
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-xl sm:text-2xl px-10 sm:px-12 py-6 sm:py-7 h-auto font-semibold uppercase tracking-wide text-white bg-black/40 backdrop-blur-md border-2 border-secondary/60 hover:neon-glow-blue hover:bg-black/50 focus-visible:ring-2 focus-visible:ring-secondary/50 focus-visible:outline-none"
            onClick={() => window.location.href = '/shop'}
          >
            Browse Builds
            <ArrowRight className="ml-3 h-6 w-6 text-secondary" aria-hidden="true" />
          </Button>
        </div>

        {/* Speed lines effect */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent speedline"
              style={{
                top: `${20 + i * 15}%`,
                left: '-100%',
                right: '100%',
                animation: `speedLine ${2 + i * 0.3}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
                ['--speedline-duration' as any]: `${2 + i * 0.3}s`,
                ['--speedline-delay' as any]: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </header>

      <main id="main-content" className="relative">
        {/* FEATURES SECTION */}
        <section className="py-20 relative" aria-labelledby="features-title">
          <div className="absolute inset-0 bg-background" />
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={i} 
                    className="group text-center animate-fade-in"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-base mb-2 text-foreground font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FEATURED PRODUCTS SECTION */}
        <section className="py-24 md:py-32 relative" aria-labelledby="featured-title">
          <div className="absolute inset-0 bg-muted/30" />

          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 animate-fade-in">
              <Badge variant="outline" className="mb-4 px-4 py-1 text-xs font-medium">
                Premium Collection
              </Badge>
              <h2 id="featured-title" className="font-heading text-4xl md:text-5xl mb-4 text-foreground font-bold tracking-tight">
                Featured Builds
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Premium phone cases inspired by legendary race machines
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product, i) => {
                  const image = product.node.images.edges[0]?.node;
                  const price = product.node.priceRange.minVariantPrice;

                  return (
                    <Card
                      key={product.node.id}
                      className="group animate-fade-in overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-300"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <a href={`/product/${product.node.handle}`} aria-label={`View ${product.node.title} details`}>
                        <div className="aspect-square overflow-hidden relative bg-muted/50">
                          {image ? (
                            <img
                              src={image.url}
                              alt={image.altText || product.node.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                              decoding="async"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Package className="h-16 w-16 text-muted-foreground/20" aria-hidden="true" />
                            </div>
                          )}
                        </div>
                      </a>

                      <div className="p-5 space-y-4">
                        <div className="space-y-2">
                          <a href={`/product/${product.node.handle}`}>
                            <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                              {product.node.title}
                            </h3>
                          </a>
                          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                            {product.node.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <span className="text-2xl font-semibold text-foreground">
                            ${parseFloat(price.amount).toFixed(2)}
                          </span>
                        </div>

                        <Button
                          size="default"
                          className="w-full"
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
                className="group"
                onClick={() => window.location.href = "/shop"}
              >
                View All Builds
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section className="py-24 relative" aria-labelledby="how-it-works-title">
          <div className="absolute inset-0 bg-background" />

          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 id="how-it-works-title" className="text-4xl md:text-5xl font-heading mb-4 text-foreground font-bold tracking-tight">
                Build Your Legend
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Three simple steps to create your custom case
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  icon: Package,
                  title: "Receive Your Case",
                  description: "Premium materials, precision crafted, delivered fast"
                }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="relative text-center animate-fade-in"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {/* Step number */}
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-lg mb-6">
                      {item.step}
                    </div>

                    {/* Icon */}
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
                      <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                onClick={() => window.location.href = "/how-it-works"}
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </section>

        {/* CUSTOMIZE CTA SECTION */}
        <section className="py-24 relative" aria-labelledby="customize-title">
          <div className="absolute inset-0 bg-muted/30" />

          <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Card className="p-12 md:p-16 text-center border-border">
              <div className="space-y-6">
                <h2 id="customize-title" className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
                  Ready to Build?
                </h2>

                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Transform your favorite car into a unique phone case with our customization tool
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                  <Button
                    size="lg"
                    className="group"
                    onClick={() => window.location.href = "/customize"}
                  >
                    <Upload className="h-4 w-4 mr-2" aria-hidden="true" />
                    Start Customizing
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
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
                  Join the <span className="text-primary">Community</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Follow us on Instagram for inspiration, updates, and exclusive offers
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-6 pt-4">
                <Button
                  size="lg"
                  className="h-14 px-8 bg-primary hover:bg-primary/90 transition-smooth font-bold group focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none"
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
