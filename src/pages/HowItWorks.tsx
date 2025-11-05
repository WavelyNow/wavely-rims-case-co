import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Palette, Image, Package, Shield, Zap } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Smartphone,
      title: "Choose Your Phone Model",
      description: "Select from our complete list of iPhone, Samsung, Google Pixel models and many more. We have cases for all popular models.",
      highlight: "200+ models available"
    },
    {
      icon: Palette,
      title: "Select Rim Design",
      description: "Choose from our premium collection of 3D rims: sport, luxury, off-road, classic. Each rim is detailed for an authentic effect.",
      highlight: "Real 3D design, not printed"
    },
    {
      icon: Image,
      title: "Upload Personal Photos",
      description: "Add photos of your car, license plate, or any favorite images. Our system automatically optimizes images for maximum quality.",
      highlight: "Real-time preview"
    },
    {
      icon: Package,
      title: "Production & Delivery",
      description: "Your case is custom-produced using latest printing technology and premium materials. Delivery in 3-5 business days.",
      highlight: "Full tracking"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Premium Protection",
      description: "Industrial-grade materials that protect your phone from impact, scratches and daily wear. Raised edges for camera and screen protection."
    },
    {
      icon: Palette,
      title: "Complete Customization",
      description: "100% customizable design - from rim model to your favorite photos. Each case is unique and created especially for you."
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Production in 2-3 days + express shipping. You get full tracking and real-time notifications about your order status."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 animate-fade-in">
            How <span className="bg-gradient-accent bg-clip-text text-transparent">Wavely</span> Works
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            From idea to custom case in just 4 simple steps. Each design is unique and created especially for you.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-16">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12 animate-fade-in`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Icon & Step Number */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="inline-block px-4 py-1 rounded-full bg-gradient-accent text-sm font-semibold mb-4">
                    Step {idx + 1}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
                    {step.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-primary font-semibold">
                    <Zap className="h-5 w-5" />
                    {step.highlight}
                  </div>
                </div>

                {/* Visual Placeholder */}
                <div className="flex-1">
                  <div className="bg-card/50 backdrop-blur rounded-xl p-8 border border-border/40 shadow-premium aspect-square flex items-center justify-center">
                    <step.icon className="h-32 w-32 text-primary/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 animate-fade-in">
            <Button
              size="lg"
              className="bg-gradient-accent hover:shadow-glow transition-smooth text-base font-semibold group"
              onClick={() => window.location.href = '/customize'}
            >
              Start Customizing
              <ArrowRight className="ml-2 h-5 w-5 transition-smooth group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Why <span className="bg-gradient-accent bg-clip-text text-transparent">Wavely</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We combine advanced technology with premium materials for cases that last
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-card/50 backdrop-blur rounded-xl p-8 border border-border/40 shadow-card hover:shadow-premium transition-premium text-center animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-poppins mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card/50 backdrop-blur rounded-xl p-8 md:p-12 border border-border/40 shadow-premium animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6 text-center">
              Premium <span className="bg-gradient-accent bg-clip-text text-transparent">Materials</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Flexible TPU:</strong> Excellent protection against impact and falls. 
                The material absorbs shocks and protects your phone in everyday situations.
              </p>
              <p>
                <strong className="text-foreground">Rigid Polycarbonate:</strong> Maximum resistance to scratches and wear. 
                Keeps design intact long-term, without fading or yellowing.
              </p>
              <p>
                <strong className="text-foreground">Advanced 3D Printing:</strong> Latest technology for authentic 
                rim relief. You can feel every detail - it's not just a printed image.
              </p>
              <p>
                <strong className="text-foreground">UV-Protective Finish:</strong> Transparent layer that protects print 
                from fading and wear. Colors stay vibrant even after months of use.
              </p>
              <p>
                <strong className="text-foreground">Soft-Touch Coating:</strong> Matte finish that offers excellent grip and 
                a premium feel in hand. Resistant to fingerprints and stains.
              </p>
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-center font-semibold text-foreground">
                🌿 All materials are certified and eco-friendly
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
