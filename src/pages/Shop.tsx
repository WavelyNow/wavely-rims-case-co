import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackgroundFX from "@/components/BackgroundFX";
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
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-subtle">
        <div className="absolute inset-0 bg-gradient-hero animate-pulse" style={{ animationDuration: '8s' }} />
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      <Navigation />
      
      <main className="container mx-auto px-4 py-12 relative z-10">
        {/* Page Header */}
        <header className="text-center mb-14 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/20 border-2 border-primary/40 backdrop-blur-sm mb-6 animate-pulse" style={{ animationDuration: '3s' }}>
            <Sparkles className="h-5 w-5 text-primary animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Premium Collection</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black font-poppins tracking-tighter mb-4">
            <span className="bg-gradient-accent bg-clip-text text-transparent">Shop All Cases</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Browse our complete collection of <span className="text-primary font-bold">automotive-inspired</span> phone cases
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
                  className="group relative overflow-hidden border-2 border-border/40 hover:border-primary/50 transition-all hover:shadow-premium hover:-translate-y-2 focus-within:shadow-premium bg-card/60 backdrop-blur-sm"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
                  <a href={`/product/${product.node.handle}`}>
                    <div className="aspect-square overflow-hidden bg-secondary/20">
                      {image ? (
                        <img
                          src={image.url}
                          alt={image.altText || product.node.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                          decoding="async"
                          sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                          fetchPriority="low"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <ShoppingCart className="h-20 w-20 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                  </a>

                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <a href={`/product/${product.node.handle}`}>
                        <h3 className="font-semibold text-lg font-poppins transition-colors hover:text-primary">
                          {product.node.title}
                        </h3>
                      </a>
                      <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
                        {product.node.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold font-poppins">
                        ${parseFloat(price.amount).toFixed(2)}
                      </span>
                      <Badge variant="secondary">{price.currencyCode}</Badge>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        className="flex-1 bg-gradient-accent hover:shadow-neon transition-premium font-bold group relative overflow-hidden"
                        onClick={() => handleAddToCart(product)}
                      >
                        <span className="relative z-10 flex items-center">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </span>
                        <div className="absolute inset-0 bg-gradient-vibrant opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        aria-label="Add to wishlist"
                        className="border-2 border-primary/40 hover:bg-primary/10 hover:border-primary group"
                      >
                        <Heart className="h-4 w-4 group-hover:fill-primary group-hover:text-primary group-hover:scale-110 transition-all" />
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
