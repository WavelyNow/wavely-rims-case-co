import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RacingBackground from "@/components/RacingBackground";
import { getProducts, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

const Shop = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts(20);
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

  const gridCols = useMemo(() => "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8", []);

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

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Racing Background */}
      <div className="fixed inset-0">
        <RacingBackground />
      </div>

      <Navigation />
      
      <main className="container mx-auto px-4 py-12 relative z-10">
        {/* Page Header */}
        <header className="text-center mb-14 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black/40 border-2 border-primary/50 backdrop-blur-sm mb-6 animate-neon-pulse">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-racing text-primary uppercase tracking-widest">Street Collection</span>
          </div>
          
          <h1 className="font-racing text-5xl md:text-7xl mb-4 text-white uppercase tracking-wider animate-glitch-text">
            Shop All <span className="text-primary neon-glow-orange">Builds</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto font-body">
            Browse our complete collection of street-inspired armor
          </p>
        </header>

        {loading ? (
          <div className={gridCols}>
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <div className="aspect-square bg-muted rounded-t-lg" />
                <div className="p-6 space-y-3">
                  <div className="h-4 bg-muted rounded w-3/4" />
                  <div className="h-4 bg-muted rounded w-1/2" />
                  <div className="h-10 bg-muted rounded" />
                </div>
              </Card>
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground mb-4">No products found</p>
            <p className="text-muted-foreground">Check back soon for new products!</p>
          </div>
        ) : (
          <div className={gridCols}>
            {products.map((product) => {
              const image = product.node.images.edges[0]?.node;
              const price = product.node.priceRange.minVariantPrice;

              return (
                <Card 
                  key={product.node.id} 
                  className="group relative overflow-hidden border-2 border-white/10 hover:border-primary/60 bg-black/60 backdrop-blur hover:scale-105 transition-premium"
                >
                  <a href={`/product/${product.node.handle}`}>
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
                          sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                          fetchPriority="low"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-muted/20">
                          <ShoppingCart className="h-20 w-20 text-white/20" />
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

                    <div className="flex gap-2">
                      <Button
                        variant="neon"
                        size="sm"
                        className="flex-1"
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add To Cart
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        aria-label="Add to wishlist"
                        className="border-2 border-secondary/50 text-secondary hover:bg-secondary/20 hover:border-secondary hover:neon-glow-blue"
                      >
                        <Heart className="h-4 w-4 group-hover:fill-secondary transition-all" />
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
