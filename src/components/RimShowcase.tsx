import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

const rims = [
  { id: 1, name: "Classic Chrome", price: "$45", image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=300&h=300&fit=crop", popular: true },
  { id: 2, name: "Sport GT Black", price: "$52", image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=300&h=300&fit=crop", popular: true },
  { id: 3, name: "Carbon Pro", price: "$58", image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=300&h=300&fit=crop", popular: true },
  { id: 4, name: "Luxury Gold", price: "$65", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=300&h=300&fit=crop" },
  { id: 5, name: "Street Drift", price: "$50", image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=300&h=300&fit=crop" },
  { id: 6, name: "Rally Red", price: "$55", image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=300&h=300&fit=crop" },
  { id: 7, name: "Diamond Cut", price: "$60", image: "https://images.unsplash.com/photo-1616422077460-14f226b5b19f?w=300&h=300&fit=crop" },
  { id: 8, name: "Matte Gunmetal", price: "$48", image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=300&h=300&fit=crop" }
];

const RimShowcase = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerView = 4;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + itemsPerView >= rims.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? rims.length - itemsPerView : prev - 1));
  };

  const visibleRims = rims.slice(startIndex, startIndex + itemsPerView);
  if (visibleRims.length < itemsPerView) {
    visibleRims.push(...rims.slice(0, itemsPerView - visibleRims.length));
  }

  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Choose Your <span className="bg-gradient-accent bg-clip-text text-transparent">Rim Style</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            8 premium designs inspired by real car rims
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur border-border/40 hover:bg-secondary/20 transition-smooth hidden md:flex"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur border-border/40 hover:bg-secondary/20 transition-smooth hidden md:flex"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Carousel */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-12">
            {visibleRims.map((rim, index) => (
              <div
                key={`${rim.id}-${index}`}
                className="group relative animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative bg-card/50 backdrop-blur rounded-2xl p-6 border border-border/40 shadow-card hover:shadow-premium transition-premium">
                  {rim.popular && (
                    <Badge className="absolute top-3 right-3 bg-gradient-accent border-0 shadow-glow">
                      Most Popular
                    </Badge>
                  )}
                  
                  {/* Rim Image Container */}
                  <div className="relative aspect-square mb-4 rounded-xl overflow-hidden bg-gradient-metallic">
                    <img
                      src={rim.image}
                      alt={rim.name}
                      className="w-full h-full object-cover transition-premium group-hover:rotate-[360deg] duration-[2s]"
                    />
                  </div>

                  {/* Rim Info */}
                  <div className="text-center space-y-2">
                    <h3 className="font-semibold font-poppins text-lg">
                      {rim.name}
                    </h3>
                    <p className="text-xl font-bold text-primary">
                      {rim.price}
                    </p>
                    <Button 
                      size="sm"
                      variant="outline"
                      className="w-full border-secondary/30 hover:bg-secondary/10 transition-smooth"
                    >
                      Quick Customize
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-secondary/30 hover:bg-secondary/10 transition-smooth font-semibold"
          >
            View All Rim Styles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RimShowcase;
