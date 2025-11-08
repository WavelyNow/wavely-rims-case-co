import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RacingBackground from "@/components/RacingBackground";
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Racing Background */}
      <div className="fixed inset-0">
        <RacingBackground />
      </div>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black/40 border-2 border-primary/50 backdrop-blur-sm mb-6 animate-neon-pulse">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-racing text-primary uppercase tracking-widest">Underground Process</span>
          </div>
          
          <h1 className="font-racing text-6xl md:text-8xl mb-6 text-white uppercase tracking-wider animate-glitch-text">
            How It <span className="text-primary neon-glow-orange">Works</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-3xl mx-auto font-body">
            Building your custom street armor is fast and easy. Follow these 4 steps.
          </p>
        </div>
      </section>

      <main className="relative z-10">
        {/* Interactive Steps Section */}
        <section className="py-20">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left - Step Navigation */}
              <div className="space-y-4 lg:sticky lg:top-24">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = activeStep === index;
                  
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      className={`w-full text-left p-6 rounded-2xl border-2 transition-all group ${
                        isActive
                          ? 'border-primary bg-gradient-to-br from-primary/20 to-accent/20 shadow-premium scale-105'
                          : 'border-border/40 bg-card/60 hover:border-primary/50 hover:shadow-card backdrop-blur-sm'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`h-16 w-16 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                          isActive
                            ? `bg-gradient-to-br ${step.color} shadow-glow scale-110`
                            : 'bg-muted group-hover:bg-gradient-accent'
                        }`}>
                          <Icon className={`h-8 w-8 ${isActive ? 'text-white' : 'text-muted-foreground group-hover:text-white'}`} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                              isActive ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                            }`}>
                              Step {index + 1}
                            </span>
                          </div>
                          <h3 className={`font-bold font-poppins text-2xl mb-2 ${
                            isActive ? 'text-primary' : 'group-hover:text-primary'
                          }`}>
                            {step.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right - Active Step Details */}
              <div className="lg:sticky lg:top-24">
                <div className="relative rounded-3xl border-2 border-primary/30 bg-card/60 p-8 backdrop-blur-xl shadow-premium animate-fade-in overflow-hidden group hover:border-primary/50 transition-all">
                  {/* Decorative gradients */}
                  <div className="absolute inset-0 bg-gradient-premium opacity-10 group-hover:opacity-20 transition-opacity" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-accent opacity-30 blur-3xl rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
                  
                  <div className="relative z-10">
                    <div className={`h-24 w-24 rounded-2xl bg-gradient-to-br ${steps[activeStep].color} flex items-center justify-center mb-6 shadow-premium`}>
                      {(() => {
                        const Icon = steps[activeStep].icon;
                        return <Icon className="h-12 w-12 text-white" />;
                      })()}
                    </div>

                    <h3 className="text-4xl font-black font-poppins mb-4 bg-gradient-accent bg-clip-text text-transparent">
                      {steps[activeStep].title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {steps[activeStep].description}
                    </p>

                    <div className="space-y-3">
                      <p className="text-sm font-bold text-primary uppercase tracking-wider mb-4">Key Features</p>
                      {steps[activeStep].highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <Check className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-foreground font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      size="lg"
                      className="w-full mt-8 h-14 bg-gradient-accent hover:shadow-neon transition-premium text-lg font-bold group relative overflow-hidden"
                      onClick={() => window.location.href = "/customize"}
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        Start This Step
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-vibrant opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl font-black font-poppins mb-4">
                <span className="bg-gradient-accent bg-clip-text text-transparent">Why Wavely</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Premium quality and exceptional service in every case we create
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={i}
                    className="group relative rounded-2xl border-2 border-border/40 bg-card/60 p-6 hover:border-primary/50 hover:shadow-premium transition-all hover:-translate-y-2 animate-fade-in backdrop-blur-sm overflow-hidden"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-premium opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity" />
                    
                    <div className="relative z-10">
                      <div className="h-14 w-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-4 shadow-glow group-hover:scale-110 transition-transform">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="font-bold font-poppins text-xl mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-premium p-12 md:p-16 text-center shadow-premium">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <Sparkles className="h-16 w-16 text-white mx-auto mb-6 animate-pulse" />
                <h2 className="text-5xl md:text-6xl font-black font-poppins text-white mb-6">
                  Ready to Start Creating?
                </h2>
                <p className="text-2xl text-white/90 mb-8 font-medium">
                  Your perfect custom case is just a few clicks away!
                </p>
                
                <Button
                  size="lg"
                  className="h-16 px-10 bg-white text-primary hover:bg-white/90 transition-premium text-xl font-black group shadow-premium relative overflow-hidden"
                  onClick={() => window.location.href = "/customize"}
                >
                  <span className="relative z-10 flex items-center">
                    Begin Customization
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
