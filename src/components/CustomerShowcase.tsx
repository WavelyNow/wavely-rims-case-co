import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

const customerPosts = [
  { id: 1, image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=400&fit=crop", customer: "Mike T.", car: "BMW M3", rim: "Carbon Pro" },
  { id: 2, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=400&fit=crop", customer: "Sarah L.", car: "Audi R8", rim: "Luxury Gold" },
  { id: 3, image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=400&h=400&fit=crop", customer: "James K.", car: "Mustang GT", rim: "Rally Red" },
  { id: 4, image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=400&fit=crop", customer: "Alex M.", car: "Porsche 911", rim: "Classic Chrome" },
  { id: 5, image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=400&fit=crop", customer: "Emma R.", car: "Tesla Model S", rim: "Matte Gunmetal" },
  { id: 6, image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=400&fit=crop", customer: "David P.", car: "WRX STI", rim: "Sport GT Black" },
  { id: 7, image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=400&fit=crop", customer: "Lisa W.", car: "Mercedes AMG", rim: "Diamond Cut" },
  { id: 8, image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=400&fit=crop", customer: "Tom H.", car: "Civic Type R", rim: "Street Drift" },
];

const CustomerShowcase = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % (customerPosts.length * 300));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-premium overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Join the <span className="bg-gradient-accent bg-clip-text text-transparent">Wavely Community</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            Real customers. Real cars. Real style. <span className="text-primary font-semibold">#WavelyCase</span>
          </p>
          <div className="flex items-center justify-center gap-2 text-primary font-semibold">
            <span className="text-2xl">🔥</span>
            <span className="text-xl">12,847 cases customized this month</span>
          </div>
        </div>

        {/* Scrolling Feed */}
        <div className="relative mb-12">
          <div 
            className="flex gap-4 transition-transform duration-1000"
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {[...customerPosts, ...customerPosts].map((post, index) => (
              <div
                key={`${post.id}-${index}`}
                className="relative flex-shrink-0 w-72 h-72 rounded-xl overflow-hidden shadow-card hover:shadow-premium transition-premium group cursor-pointer"
                onMouseEnter={() => setHoveredPost(post.id)}
                onMouseLeave={() => setHoveredPost(null)}
              >
                <img
                  src={post.image}
                  alt={`${post.customer}'s ${post.car}`}
                  className="w-full h-full object-cover transition-premium group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent transition-smooth ${hoveredPost === post.id ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="font-semibold font-poppins text-lg mb-1">
                      {post.customer}
                    </p>
                    <p className="text-sm text-muted-foreground mb-1">
                      {post.car}
                    </p>
                    <p className="text-xs text-primary">
                      Rim: {post.rim}
                    </p>
                    <Button 
                      size="sm"
                      className="mt-3 bg-gradient-accent hover:shadow-glow transition-smooth w-full"
                    >
                      Get This Look
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-accent hover:shadow-glow transition-premium font-semibold group"
          >
            <Upload className="mr-2 h-5 w-5" />
            Upload Your Case & Get 10% Off
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CustomerShowcase;
