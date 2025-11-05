import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium phone case with car rim design"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6 leading-tight">
            Your Car.
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Your Style.
            </span>
            <br />
            Your Phone Case.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl font-inter">
            Transform your phone into a masterpiece with our premium custom cases featuring authentic 3D car rims. 
            Choose from luxury designs and upload your own car photos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-accent hover:shadow-glow transition-premium text-base font-semibold group"
              onClick={() => window.location.href = '/customize'}
            >
              Start Customizing
              <ArrowRight className="ml-2 h-5 w-5 transition-smooth group-hover:translate-x-1" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-secondary/30 hover:bg-secondary/10 transition-smooth text-base font-semibold"
              onClick={() => window.location.href = '/shop'}
            >
              View Shop
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
