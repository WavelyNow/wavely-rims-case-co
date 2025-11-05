import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { getProducts, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

const FeaturedProducts = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts(6);
        setProducts(data);
      } catch (error) {
        console.error("Failed to load products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleAddToCart = (product: ShopifyProduct) => {
    const firstVariant = product.node.variants.edges[0]?.node;
    if (!firstVariant) return;

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
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Featured <span className="bg-gradient-accent bg-clip-text text-transparent">Designs</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our most popular custom phone cases featuring premium car rim designs
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <div className="aspect-square bg-muted" />
                <div className="p-5 space-y-3">
                  <div className="h-4 bg-muted rounded w-3/4" />
                  <div className="h-4 bg-muted rounded w-1/2" />
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => {
              const image = product.node.images.edges[0]?.node;
              const price = product.node.priceRange.minVariantPrice;

              return (
                <Card 
                  key={product.node.id}
                  className="group overflow-hidden border-border/40 bg-card/50 backdrop-blur shadow-card hover:shadow-premium transition-premium animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <a href={`/product/${product.node.handle}`}>
                      <div className="relative overflow-hidden aspect-square">
                        {image ? (
                          <img
                            src={image.url}
                            alt={image.altText || product.node.title}
                            className="w-full h-full object-cover transition-premium group-hover:scale-110"
                          />
                        ) : (
                          <div className="w-full h-full bg-secondary/20 flex items-center justify-center">
                            <ShoppingCart className="h-16 w-16 text-muted-foreground" />
                          </div>
                        )}
                        
                        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center gap-3">
                          <Button
                            size="icon"
                            variant="outline"
                            className="rounded-full border-secondary/30 hover:bg-primary hover:border-primary transition-smooth"
                            onClick={(e) => {
                              e.preventDefault();
                              toast.success("Added to wishlist!");
                            }}
                          >
                            <Heart className="h-5 w-5" />
                          </Button>
                          <Button
                            size="icon"
                            className="rounded-full bg-gradient-accent hover:shadow-glow transition-smooth"
                            onClick={(e) => {
                              e.preventDefault();
                              handleAddToCart(product);
                            }}
                          >
                            <ShoppingCart className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    </a>

                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <a href={`/product/${product.node.handle}`}>
                            <h3 className="font-semibold font-poppins text-lg mb-1 group-hover:text-primary transition-smooth">
                              {product.node.title}
                            </h3>
                          </a>
                          <p className="text-sm text-muted-foreground line-clamp-1">
                            {product.node.description}
                          </p>
                        </div>
                        <span className="text-xl font-bold font-poppins text-primary">
                          ${parseFloat(price.amount).toFixed(2)}
                        </span>
                      </div>

                       <Button 
                        className="w-full mt-4 bg-gradient-subtle hover:shadow-card text-foreground border border-border/40 hover:scale-105 transition-premium font-semibold group"
                        variant="outline"
                        onClick={() => window.location.href = '/customize'}
                      >
                        Customize Now
                        <ShoppingCart className="ml-2 h-4 w-4 group-hover:scale-110 transition-smooth" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        <div className="text-center mt-12 animate-fade-in">
          <Button 
            size="lg"
            variant="outline"
            className="border-secondary/30 hover:bg-secondary/10 hover:scale-105 transition-premium font-semibold group"
            onClick={() => window.location.href = '/shop'}
          >
            View All Designs
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
