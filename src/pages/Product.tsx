import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import { getProductByHandle } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

const Product = () => {
  const { handle } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariantId, setSelectedVariantId] = useState<string>("");
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const loadProduct = async () => {
      if (!handle) return;

      try {
        const data = await getProductByHandle(handle);
        setProduct(data);
        if (data?.variants?.edges?.[0]) {
          setSelectedVariantId(data.variants.edges[0].node.id);
        }
      } catch (error) {
        console.error("Failed to load product:", error);
        toast.error("Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [handle]);

  const handleAddToCart = () => {
    if (!product || !selectedVariantId) return;

    const variant = product.variants.edges.find(
      (v: any) => v.node.id === selectedVariantId
    )?.node;

    if (!variant) {
      toast.error("Please select a variant");
      return;
    }

    addItem({
      product: { node: product },
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions,
    });

    toast.success("Added to cart!", {
      description: `${product.title} has been added to your cart.`,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-12">
          <div className="animate-pulse grid md:grid-cols-2 gap-12">
            <div className="aspect-square bg-muted rounded-lg" />
            <div className="space-y-6">
              <div className="h-8 bg-muted rounded w-3/4" />
              <div className="h-4 bg-muted rounded w-1/2" />
              <div className="h-20 bg-muted rounded" />
              <div className="h-12 bg-muted rounded" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Button onClick={() => window.location.href = "/shop"}>
            Back to Shop
          </Button>
        </div>
      </div>
    );
  }

  const images = product.images?.edges || [];
  const variants = product.variants?.edges || [];
  const selectedVariant = variants.find((v: any) => v.node.id === selectedVariantId)?.node;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-2xl bg-secondary/20 border border-border/40">
              {images[selectedImage]?.node ? (
                <img
                  src={images[selectedImage].node.url}
                  alt={images[selectedImage].node.altText || product.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <ShoppingCart className="h-32 w-32 text-muted-foreground" />
                </div>
              )}
            </div>

            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {images.map((image: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? "border-primary ring-2 ring-primary/20"
                        : "border-border/40 hover:border-primary/50"
                    }`}
                  >
                    <img
                      src={image.node.url}
                      alt={image.node.altText || `${product.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold font-poppins mb-2">{product.title}</h1>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold">
                  ${parseFloat(selectedVariant?.price.amount || product.priceRange.minVariantPrice.amount).toFixed(2)}
                </span>
                <Badge variant="secondary">
                  {selectedVariant?.price.currencyCode || product.priceRange.minVariantPrice.currencyCode}
                </Badge>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selection */}
            {product.options?.map((option: any) => (
              <div key={option.name} className="space-y-3">
                <label className="text-sm font-semibold">{option.name}</label>
                <div className="grid grid-cols-2 gap-3">
                  {variants.map((variant: any) => {
                    const optionValue = variant.node.selectedOptions.find(
                      (opt: any) => opt.name === option.name
                    )?.value;
                    
                    return (
                      <button
                        key={variant.node.id}
                        onClick={() => setSelectedVariantId(variant.node.id)}
                        className={`p-3 rounded-lg border-2 transition-all text-sm font-medium ${
                          selectedVariantId === variant.node.id
                            ? "border-primary bg-primary/10"
                            : "border-border/40 hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{optionValue}</span>
                          {selectedVariantId === variant.node.id && (
                            <Check className="h-4 w-4 text-primary" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            <div className="space-y-3 pt-4">
              <Button
                size="lg"
                className="w-full bg-gradient-accent hover:shadow-glow transition-premium text-lg font-semibold"
                onClick={handleAddToCart}
                disabled={!selectedVariant?.availableForSale}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                {selectedVariant?.availableForSale ? "Add to Cart" : "Out of Stock"}
              </Button>

              <Button variant="outline" size="lg" className="w-full">
                <Heart className="h-5 w-5 mr-2" />
                Add to Wishlist
              </Button>
            </div>

            <div className="pt-6 border-t border-border/40 space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-4 w-4 text-green-500" />
                <span>Military-grade drop protection</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-4 w-4 text-green-500" />
                <span>Wireless charging compatible</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-4 w-4 text-green-500" />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-4 w-4 text-green-500" />
                <span>30-day money-back guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Product;
