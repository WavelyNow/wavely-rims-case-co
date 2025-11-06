import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Palette, Upload, Sparkles, Check, Shield, Truck, Star, Zap } from "lucide-react";
import { useState } from "react";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Smartphone,
      title: "Choose Your Device",
      description: "Select your phone model from our extensive list of supported devices. We support all major brands and models.",
      highlights: ["100+ phone models", "Perfect fit guaranteed", "Easy search & filter"],
      color: "from-primary to-accent"
    },
    {
      icon: Palette,
      title: "Pick Rim Style & Material",
      description: "Choose from authentic automotive rim designs and premium materials. Each combination creates a unique masterpiece.",
      highlights: ["15+ rim designs", "5 premium materials", "Matte, glossy, metallic"],
      color: "from-accent to-secondary"
    },
    {
      icon: Upload,
      title: "Upload Your Photos",
      description: "Make it personal by adding photos of your car, loved ones, or any image you want. Our AI ensures perfect placement.",
      highlights: ["HD photo printing", "Auto-optimization", "Multiple photo support"],
      color: "from-secondary to-primary"
    },
    {
      icon: Sparkles,
      title: "Customize & Order",
      description: "Add custom text, choose colors, and preview your design in 3D. Once perfect, place your order and we'll handle the rest.",
      highlights: ["Real-time 3D preview", "Custom text & fonts", "Secure checkout"],
      color: "from-primary to-secondary"
    }
  ];

  const features = [
    { icon: Shield, title: "Military-Grade Protection", desc: "Drop-tested up to 10ft with reinforced corners" },
    { icon: Truck, title: "Fast Production", desc: "Manufactured and shipped within 5-7 business days" },
    { icon: Star, title: "Premium Quality", desc: "UV-resistant printing that won't fade or scratch" },
    { icon: Check, title: "100% Guarantee", desc: "Not happy? Full refund within 30 days, no questions asked" }
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
                  <div className="space-y-2">
                    {step.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{highlight}</span>
                      </div>
                    ))}
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
                  {feature.desc}
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
