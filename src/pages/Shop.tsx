import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart } from "lucide-react";
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
    <div className="relative min-h-screen bg-background">
      <Navigation />
      {/* WOW background animations */}
      <BackgroundFX intensity="medium" />
      
      <main className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <header className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins tracking-tight mb-3">
            Shop All Cases
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our complete collection of custom car rim phone cases
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
                  className="group overflow-hidden transition-all hover:shadow-card hover:-translate-y-1 focus-within:shadow-card"
                >
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
                        className="flex-1 bg-gradient-accent hover:shadow-glow transition-premium"
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button variant="outline" size="icon" aria-label="Add to wishlist">
                        <Heart className="h-4 w-4" />
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
