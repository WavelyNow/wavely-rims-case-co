import { Smartphone, Disc, Upload, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "1",
    icon: Smartphone,
    title: "Choose Model",
    description: "Select your phone model from our extensive list of supported devices",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop"
  },
  {
    number: "2",
    icon: Disc,
    title: "Select Rim",
    description: "Pick from 8 premium rim styles inspired by real automotive wheels",
    image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=400&h=300&fit=crop"
  },
  {
    number: "3",
    icon: Upload,
    title: "Upload & Customize",
    description: "Add your car photo, choose materials, and personalize with custom text",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop"
  },
  {
    number: "4",
    icon: Package,
    title: "Receive in 5-7 Days",
    description: "We craft your case with premium materials and ship it directly to you",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&h=300&fit=crop"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-gradient-premium">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            How It <span className="bg-gradient-accent bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From design to delivery in just 4 simple steps
          </p>
        </div>

        <div className="relative">
          {/* Timeline connector - desktop only */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border/40 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="bg-card/50 backdrop-blur rounded-lg overflow-hidden border border-border/40 shadow-card hover:shadow-premium transition-premium group">
                  {/* Step Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-premium group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    
                    {/* Step Number Badge */}
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center shadow-glow">
                      <span className="text-2xl font-bold font-poppins text-white">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-metallic flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-bold font-poppins mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-accent hover:shadow-glow transition-premium font-semibold"
          >
            Start Your Design
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
