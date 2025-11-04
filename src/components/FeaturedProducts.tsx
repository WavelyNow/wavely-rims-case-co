import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Carbon Fiber Sport",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&h=500&fit=crop",
    rim: "BBS RS",
    material: "Carbon Fiber"
  },
  {
    id: 2,
    name: "Chrome Classic",
    price: "$79.99",
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500&h=500&fit=crop",
    rim: "OZ Racing",
    material: "Glossy"
  },
  {
    id: 3,
    name: "Matte Black Edition",
    price: "$84.99",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop",
    rim: "Vossen",
    material: "Matte"
  },
  {
    id: 4,
    name: "Gold Luxury",
    price: "$99.99",
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500&h=500&fit=crop",
    rim: "ADV.1",
    material: "Metallic"
  },
  {
    id: 5,
    name: "Racing Red",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1592286927505-ed77d72c4b09?w=500&h=500&fit=crop",
    rim: "Enkei RPF1",
    material: "Glossy"
  },
  {
    id: 6,
    name: "Silver Performance",
    price: "$94.99",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop",
    rim: "HRE P101",
    material: "Metallic"
  }
];

const FeaturedProducts = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card 
              key={product.id}
              className="group overflow-hidden border-border/40 bg-card/50 backdrop-blur shadow-card hover:shadow-premium transition-premium animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-premium group-hover:scale-110"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center gap-3">
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full border-secondary/30 hover:bg-primary hover:border-primary transition-smooth"
                    >
                      <Heart className="h-5 w-5" />
                    </Button>
                    <Button
                      size="icon"
                      className="rounded-full bg-gradient-accent hover:shadow-glow transition-smooth"
                    >
                      <ShoppingCart className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  {/* Material Badge */}
                  <div className="absolute top-3 right-3 bg-background/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold border border-border/40">
                    {product.material}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold font-poppins text-lg mb-1 group-hover:text-primary transition-smooth">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Rim: {product.rim}
                      </p>
                    </div>
                    <span className="text-xl font-bold font-poppins text-primary">
                      {product.price}
                    </span>
                  </div>

                  <Button 
                    className="w-full mt-4 bg-gradient-metallic hover:bg-secondary/20 text-foreground border border-border/40 transition-smooth"
                    variant="outline"
                  >
                    Customize Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-secondary/30 hover:bg-secondary/10 transition-smooth font-semibold"
          >
            View All Designs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
