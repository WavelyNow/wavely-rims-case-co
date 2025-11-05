import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import * as THREE from "three";
import { Heart, ShoppingCart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConfiguratorState } from "@/types/configurator";
import { rimOptions, materialOptions } from "@/data/configuratorData";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

interface LivePreviewProps {
  config: ConfiguratorState;
  onAddToCart: () => void;
  onAddToWishlist: () => void;
}

// 3D Phone Case Model
function PhoneCase({ config }: { config: ConfiguratorState }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <group>
      {/* Phone Case Body */}
      <mesh ref={meshRef} castShadow receiveShadow>
        <boxGeometry args={[1.6, 3.2, 0.2]} />
        <meshStandardMaterial
          color={config.material === "glossy" ? "#1a1a1a" : "#2a2a2a"}
          metalness={config.material === "glossy" ? 0.8 : 0.3}
          roughness={config.material === "matte" ? 0.9 : 0.2}
        />
      </mesh>

      {/* Camera Cutout */}
      <mesh position={[0.5, 1.2, 0.11]} castShadow>
        <boxGeometry args={[0.4, 0.4, 0.05]} />
        <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Rim Design (if selected) */}
      {config.rimStyle && (
        <mesh position={[0, -0.8, 0.11]} castShadow>
          <cylinderGeometry args={[0.4, 0.4, 0.05, 32]} />
          <meshStandardMaterial 
            color="#c0c0c0" 
            metalness={0.9} 
            roughness={0.1}
          />
        </mesh>
      )}

      {/* Custom Text */}
      {config.customText && (
        <mesh position={[0, -1.3, 0.11]}>
          <planeGeometry args={[1.2, 0.3]} />
          <meshStandardMaterial 
            color={config.textColor === "white" ? "#ffffff" : "#000000"}
            transparent
            opacity={0.9}
          />
        </mesh>
      )}
    </group>
  );
}

// Loading Fallback
function Loader() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#666666" wireframe />
    </mesh>
  );
}

const LivePreview = ({ config, onAddToCart, onAddToWishlist }: LivePreviewProps) => {
  const createCheckout = useCartStore(state => state.createCheckout);
  const isLoading = useCartStore(state => state.isLoading);
  
  const basePrice = 35;
  const rimPrice = config.rimPrice;
  const materialPrice = config.materialPrice;
  const photoPrice = config.carPhoto ? 5 : 0;
  const facePhotoPrice = config.facePhoto ? 3 : 0;
  const textPrice = config.customText ? 3 : 0;

  const subtotal = basePrice + rimPrice + materialPrice + photoPrice + facePhotoPrice + textPrice;
  const discount = 0;
  const total = subtotal - discount;

  const selectedRim = rimOptions.find((r) => r.id === config.rimStyle);
  const selectedMaterial = materialOptions.find((m) => m.id === config.material);

  const handleAddToCart = () => {
    onAddToCart();
    toast.success("Added to cart!", {
      description: "Your custom case has been added to your cart.",
    });
  };

  return (
    <div className="sticky top-24 space-y-6 animate-fade-in">
      {/* 3D Preview */}
      <div className="bg-gradient-subtle rounded-2xl p-8 border border-border/40 shadow-premium">
        <div className="aspect-square bg-card/30 rounded-xl mb-4 overflow-hidden relative">
          <Canvas shadows>
            <Suspense fallback={<Loader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <OrbitControls 
                enableZoom={true} 
                enablePan={false}
                minDistance={3}
                maxDistance={7}
                autoRotate
                autoRotateSpeed={2}
              />
              
              {/* Lighting */}
              <ambientLight intensity={0.5} />
              <directionalLight 
                position={[5, 5, 5]} 
                intensity={1} 
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
              />
              <pointLight position={[-5, -5, -5]} intensity={0.5} color="#8B5CF6" />
              <pointLight position={[5, -5, 5]} intensity={0.5} color="#14D4F4" />
              
              {/* Environment */}
              <Environment preset="city" />
              
              {/* Phone Case Model */}
              <PhoneCase config={config} />
            </Suspense>
          </Canvas>

          {/* Overlay Info */}
          {config.phoneModel && (
            <div className="absolute top-4 left-4 bg-background/80 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-semibold border border-border/40">
              {config.phoneModel}
            </div>
          )}
        </div>

        {/* Controls Info */}
        <div className="text-center text-xs text-muted-foreground">
          <p>🖱️ Drag to rotate • Scroll to zoom</p>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="bg-card/50 backdrop-blur rounded-2xl p-6 border border-border/40 shadow-card space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
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
            onClick={handleAddToCart}
            size="lg"
            className="w-full bg-gradient-accent hover:shadow-glow transition-premium font-semibold group"
            disabled={isLoading}
          >
            <ShoppingCart className="mr-2 h-5 w-5 group-hover:scale-110 transition-smooth" />
            ADD TO CART
          </Button>

          <Button
            onClick={onAddToWishlist}
            variant="outline"
            size="lg"
            className="w-full border-secondary/30 hover:bg-secondary/10 group"
          >
            <Heart className="mr-2 h-5 w-5 group-hover:scale-110 group-hover:fill-red-500 group-hover:text-red-500 transition-smooth" />
            Add to Wishlist
          </Button>
        </div>

        {/* Additional Info */}
        <div className="pt-4 space-y-2 text-xs text-center">
          <button className="flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-smooth mx-auto group">
            <MessageCircle className="h-4 w-4 group-hover:scale-110 transition-smooth" />
            <span>Need help? Live Chat</span>
          </button>
          <p className="text-green-500 font-semibold animate-pulse">✓ Free shipping on this order</p>
        </div>
      </div>
    </div>
  );
};

export default LivePreview;
