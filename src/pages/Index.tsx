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
        <section className="py-16 relative" aria-labelledby="features-title">
          <div className="absolute inset-0 bg-black/40" />
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <Card 
                    key={i} 
                    className="group relative overflow-hidden p-8 text-center bg-black/60 backdrop-blur-sm border-2 border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,127,0,0.3)]"
                  >
                    {/* Neon glow background effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative z-10">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/20 border-2 border-primary mb-4 group-hover:scale-110 transition-transform duration-300 neon-glow-orange">
                        <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                      </div>
                      <h3 className="font-racing text-lg mb-2 text-white uppercase tracking-wide">{feature.title}</h3>
                      <p className="text-sm text-white/60 font-body leading-relaxed">{feature.description}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* FEATURED PRODUCTS SECTION */}
        <section className="py-24 md:py-32 relative overflow-hidden" aria-labelledby="featured-title">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          
          {/* Animated background grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>

          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20 animate-fade-in">
              <Badge variant="outline" className="mb-6 border-primary/50 text-primary backdrop-blur-sm bg-black/40 px-6 py-2 text-sm font-heading uppercase tracking-widest">
                <Star className="mr-2 h-4 w-4" />
                Premium Collection
              </Badge>
              <h2 id="featured-title" className="font-racing text-5xl md:text-7xl mb-6 text-white uppercase tracking-wider animate-glitch-text">
                Featured <span className="text-primary neon-glow-orange">Builds</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-neon mx-auto mb-8 rounded-full" />
              <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-body leading-relaxed">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product, i) => {
                  const image = product.node.images.edges[0]?.node;
                  const price = product.node.priceRange.minVariantPrice;

                  return (
                    <Card
                      key={product.node.id}
                      className="group relative animate-fade-in overflow-hidden border-2 border-white/5 hover:border-primary/70 bg-gradient-to-b from-black/80 to-black/60 backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,127,0,0.4)]"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      {/* Scanline effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none">
                        <div className="absolute inset-0" style={{
                          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'
                        }} />
                      </div>

                      <a href={`/product/${product.node.handle}`} aria-label={`View ${product.node.title} details`}>
                        <div className="aspect-square overflow-hidden relative">
                          {image ? (
                            <img
                              src={image.url}
                              alt={image.altText || product.node.title}
                              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                              style={{
                                filter: 'contrast(1.1) brightness(0.95)',
                              }}
                              loading="lazy"
                              decoding="async"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-black/40">
                              <Package className="h-24 w-24 text-white/10" aria-hidden="true" />
                            </div>
                          )}
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                          
                          {/* Hover glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                      </a>

                      <div className="p-6 space-y-4">
                        <div className="space-y-3">
                          <a href={`/product/${product.node.handle}`}>
                            <h3 className="font-racing text-2xl text-white uppercase tracking-wide group-hover:text-primary transition-colors duration-300">
                              {product.node.title}
                            </h3>
                          </a>
                          <p className="text-sm text-white/50 line-clamp-2 font-body leading-relaxed">
                            {product.node.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <div className="flex flex-col">
                            <span className="text-xs text-white/40 uppercase tracking-wider font-body mb-1">Price</span>
                            <span className="text-3xl font-racing text-primary neon-glow-orange">
                              ${parseFloat(price.amount).toFixed(2)}
                            </span>
                          </div>
                        </div>

                        <Button
                          variant="neon"
                          size="lg"
                          className="w-full h-12 font-racing uppercase tracking-wider group-hover:scale-105 transition-transform focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none"
                          onClick={() => handleAddToCart(product)}
                        >
                          <ShoppingCart className="h-5 w-5 mr-2" aria-hidden="true" />
                          Add To Cart
                        </Button>
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}

            <div className="text-center mt-16">
              <Button
                size="lg"
                variant="outline"
                className="h-16 px-12 border-2 border-secondary/60 text-secondary hover:bg-secondary/20 hover:border-secondary hover:scale-105 hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] font-racing text-lg uppercase tracking-widest transition-all duration-300 focus-visible:ring-2 focus-visible:ring-secondary/40 focus-visible:outline-none group"
                onClick={() => window.location.href = "/shop"}
              >
                View All Builds
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section className="py-20 md:py-28 relative overflow-hidden" aria-labelledby="how-it-works-title">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black/80" />
          
          {/* Animated lines background */}
          <div className="absolute inset-0 opacity-5">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                style={{
                  top: `${20 + i * 20}%`,
                  left: '-100%',
                  right: '100%',
                  animation: `speedLine ${3 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.4}s`,
                }}
              />
            ))}
          </div>

          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 md:mb-20">
              <h2 id="how-it-works-title" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-racing mb-6 text-white uppercase tracking-wider animate-glitch-text">
                Build Your <span className="text-primary neon-glow-orange">Legend</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-neon mx-auto mb-8 rounded-full" />
              <p className="text-lg sm:text-xl md:text-2xl text-white/70 px-4 font-body max-w-3xl mx-auto leading-relaxed">
                Three simple steps to create your custom street-inspired case
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
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
                  <Card
                    key={i}
                    className="group relative p-8 md:p-10 bg-gradient-to-b from-black/70 to-black/50 backdrop-blur-xl border-2 border-white/10 hover:border-primary/60 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,127,0,0.3)] text-center"
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                    {/* Step number badge */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-racing text-2xl shadow-[0_0_20px_rgba(255,127,0,0.5)] group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>

                    {/* Icon */}
                    <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/20 border-2 border-primary mb-6 mt-6 neon-glow-orange group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-10 w-10 text-primary" aria-hidden="true" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-racing mb-4 text-white uppercase tracking-wide group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-base text-white/60 font-body leading-relaxed">
                      {item.description}
                    </p>

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />
                  </Card>
                );
              })}
            </div>

            <div className="text-center mt-16">
              <Button
                size="lg"
                variant="neon"
                className="h-16 px-12 text-lg font-racing uppercase tracking-widest group hover:scale-105 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none"
                onClick={() => window.location.href = "/how-it-works"}
              >
                Learn More
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </section>

        {/* CUSTOMIZE CTA SECTION */}
        <section className="py-24 md:py-32 relative overflow-hidden" aria-labelledby="customize-title">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          
          {/* Animated grid background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
              animation: 'gridMove 20s linear infinite'
            }} />
          </div>

          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Card className="relative overflow-hidden p-12 md:p-20 bg-gradient-to-br from-black/80 via-black/70 to-black/60 backdrop-blur-2xl border-2 border-primary/40 shadow-[0_0_60px_rgba(255,127,0,0.3)]">
              {/* Multiple neon glow effects */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-neon-pulse" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] animate-neon-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-[100px] animate-neon-pulse" style={{ animationDelay: '2s' }} />
              
              {/* Scanlines overlay */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'
                }} />
              </div>

              <div className="relative z-10 text-center space-y-8">
                <Badge variant="outline" className="mb-4 border-primary/50 text-primary backdrop-blur-sm bg-black/40 px-6 py-2 text-sm font-heading uppercase tracking-widest">
                  <Zap className="mr-2 h-4 w-4" />
                  Start Your Build
                </Badge>

                <h2 id="customize-title" className="text-5xl md:text-6xl lg:text-7xl font-racing text-white uppercase tracking-wider animate-glitch-text">
                  Ready to <span className="text-primary neon-glow-orange">Build?</span>
                </h2>

                <div className="w-32 h-1 bg-gradient-neon mx-auto rounded-full" />

                <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-body leading-relaxed px-4">
                  Transform your favorite car into a unique phone case with our customization tool
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 pt-8">
                  <Button
                    size="lg"
                    variant="neon"
                    className="h-16 px-12 text-xl font-racing uppercase tracking-widest group hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,127,0,0.4)] hover:shadow-[0_0_50px_rgba(255,127,0,0.6)] focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none"
                    onClick={() => window.location.href = "/customize"}
                  >
                    <Upload className="h-6 w-6 mr-3" aria-hidden="true" />
                    Start Customizing
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-16 px-12 border-2 border-secondary/60 text-secondary hover:bg-secondary/20 hover:border-secondary hover:scale-105 hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] text-xl font-racing uppercase tracking-widest transition-all duration-300 focus-visible:ring-2 focus-visible:ring-secondary/40 focus-visible:outline-none"
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
