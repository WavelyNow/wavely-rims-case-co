import { Heart, ShoppingCart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConfiguratorState } from "@/types/configurator";
import { rimOptions, materialOptions } from "@/data/configuratorData";

interface LivePreviewProps {
  config: ConfiguratorState;
  onAddToCart: () => void;
  onAddToWishlist: () => void;
}

const LivePreview = ({ config, onAddToCart, onAddToWishlist }: LivePreviewProps) => {
  const basePrice = 35;
  const rimPrice = config.rimPrice;
  const materialPrice = config.materialPrice;
  const photoPrice = config.carPhoto ? 5 : 0;
  const facePhotoPrice = config.facePhoto ? 3 : 0;
  const textPrice = config.customText ? 3 : 0;

  const subtotal = basePrice + rimPrice + materialPrice + photoPrice + facePhotoPrice + textPrice;
  const discount = 0; // Can be applied from quiz or promo code
  const total = subtotal - discount;

  const selectedRim = rimOptions.find((r) => r.id === config.rimStyle);
  const selectedMaterial = materialOptions.find((m) => m.id === config.material);

  return (
    <div className="sticky top-24 space-y-6">
      {/* 3D Preview Placeholder */}
      <div className="bg-gradient-metallic rounded-2xl p-8 border border-border/40 shadow-card">
        <div className="aspect-square bg-card/30 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
          {config.carPhotoPreview ? (
            <img
              src={config.carPhotoPreview}
              alt="Case preview"
              className="w-full h-full object-cover opacity-80"
            />
          ) : (
            <div className="text-center text-muted-foreground">
              <div className="w-32 h-32 mx-auto mb-3 bg-card/50 rounded-full flex items-center justify-center">
                <ShoppingCart className="h-16 w-16" />
              </div>
              <p className="text-sm font-medium">Live Preview</p>
              <p className="text-xs">Customize to see your design</p>
            </div>
          )}
          
          {/* Rim Overlay */}
          {config.rimImage && (
            <div className="absolute bottom-4 right-4 w-20 h-20 rounded-full overflow-hidden border-2 border-primary shadow-glow">
              <img src={config.rimImage} alt="Rim" className="w-full h-full object-cover" />
            </div>
          )}

          {/* Custom Text Overlay */}
          {config.customText && (
            <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur px-3 py-1 rounded text-xs font-bold">
              {config.customText}
            </div>
          )}
        </div>

        {/* 360 Controls */}
        <div className="flex items-center justify-center gap-4 text-sm">
          <button className="px-4 py-2 rounded-lg bg-card/50 hover:bg-card transition-smooth">
            ← 360° Rotate →
          </button>
          <button className="px-3 py-2 rounded-lg bg-card/50 hover:bg-card transition-smooth">
            + Zoom
          </button>
          <button className="px-3 py-2 rounded-lg bg-card/50 hover:bg-card transition-smooth">
            - Zoom
          </button>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="bg-card/50 backdrop-blur rounded-2xl p-6 border border-border/40 shadow-card space-y-4">
        <h3 className="text-xl font-bold font-poppins mb-4">Price Breakdown</h3>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Base Case</span>
            <span className="font-semibold">${basePrice.toFixed(2)}</span>
          </div>

          {selectedRim && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Rim: {selectedRim.name}</span>
              <span className="font-semibold">+${rimPrice.toFixed(2)}</span>
            </div>
          )}

          {selectedMaterial && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Material: {selectedMaterial.name}</span>
              <span className="font-semibold">
                {materialPrice === 0 ? "Included" : `+$${materialPrice.toFixed(2)}`}
              </span>
            </div>
          )}

          {config.carPhoto && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Photo Upload</span>
              <span className="font-semibold">+${photoPrice.toFixed(2)}</span>
            </div>
          )}

          {config.facePhoto && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Face Photo</span>
              <span className="font-semibold">+${facePhotoPrice.toFixed(2)}</span>
            </div>
          )}

          {config.customText && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Custom Text</span>
              <span className="font-semibold">+${textPrice.toFixed(2)}</span>
            </div>
          )}
        </div>

        <div className="border-t border-border/40 pt-3 space-y-2">
          <div className="flex justify-between text-base">
            <span className="font-semibold">Subtotal</span>
            <span className="font-bold">${subtotal.toFixed(2)}</span>
          </div>

          {discount > 0 && (
            <div className="flex justify-between text-green-500">
              <span>Discount (QUIZ10)</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
          )}

          <div className="border-t border-border/40 pt-3 flex justify-between text-lg">
            <span className="font-bold">TOTAL</span>
            <span className="font-bold text-primary text-2xl">${total.toFixed(2)}</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="space-y-3 pt-4">
          <Button
            onClick={onAddToCart}
            size="lg"
            className="w-full bg-gradient-accent hover:shadow-glow transition-premium font-semibold"
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            ADD TO CART
          </Button>

          <Button
            onClick={onAddToWishlist}
            variant="outline"
            size="lg"
            className="w-full border-secondary/30 hover:bg-secondary/10"
          >
            <Heart className="mr-2 h-5 w-5" />
            Add to Wishlist
          </Button>
        </div>

        {/* Additional Info */}
        <div className="pt-4 space-y-2 text-xs text-center">
          <button className="flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-smooth mx-auto">
            <MessageCircle className="h-4 w-4" />
            <span>Need help? Live Chat</span>
          </button>
          <p className="text-green-500 font-semibold">✓ Free shipping on this order</p>
        </div>
      </div>
    </div>
  );
};

export default LivePreview;
