import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import HeroBackground from "@/components/HeroBackground";
import { ArrowRight, Sparkles, Zap, Shield, Truck, Star, ChevronRight } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-card px-3 py-2 rounded-md z-50">
        Skip to content
      </a>

      <Navigation />

      {/* HERO SECTION - Full bleed, animated */}
      <header className="relative overflow-hidden" aria-labelledby="hero-title">
        <HeroBackground />
        
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="min-h-[80vh] flex items-center">
            <div className="max-w-3xl animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-scale-in backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                <span className="text-sm font-semibold text-primary">Premium Custom Cases</span>
              </div>

              <h1 id="hero-title" className="text-6xl md:text-8xl font-bold font-poppins leading-tight mb-6 animate-fade-in">
                Wavely
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in leading-relaxed">
                Premium custom cases inspired by automotive rim designs. Choose your style, material, and add your photos – we deliver quality.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
                <Button
                  size="lg"
                  className="bg-gradient-accent hover:shadow-glow transition-premium text-lg font-semibold group"
                  onClick={() => (window.location.href = "/customize")}
                >
                  Configure Your Case
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-secondary/30 hover:bg-secondary/10 transition-smooth text-lg font-semibold group backdrop-blur-sm"
                  onClick={() => (window.location.href = "/shop")}
                >
                  Browse Shop
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Social Proof */}
              <div className="mt-12 flex items-center gap-8 animate-fade-in">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-10 w-10 rounded-full bg-gradient-premium border-2 border-background animate-scale-in"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Trusted by 10,000+ customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main id="main-content" className="container max-w-7xl mx-auto px-4">
        {/* SERVICES SECTION - Interactive cards */}
        <section aria-labelledby="services-title" className="py-20">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <Zap className="h-4 w-4 text-accent" />
              <span className="text-sm font-semibold text-accent">What We Offer</span>
            </div>
            <h2 id="services-title" className="text-5xl font-bold font-poppins mb-4">Services & Products</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create a case that reflects your style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Custom Cases",
                desc: "Choose design, material, and add your own text or photos.",
                icon: Sparkles,
                gradient: "from-primary to-accent"
              },
              {
                title: "Authentic Rim Designs",
                desc: "Select from popular rim styles for an exclusive look.",
                icon: Zap,
                gradient: "from-accent to-secondary"
              },
              {
                title: "Premium Materials",
                desc: "Matte, glossy, leather, or metallic – durability and elegance.",
                icon: Shield,
                gradient: "from-secondary to-primary"
              },
              {
                title: "Photo Upload",
                desc: "Upload images of your car for a truly personal design.",
                icon: Star,
                gradient: "from-primary to-secondary"
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <article
                  key={i}
                  className="group relative rounded-2xl border border-border/40 bg-card/50 p-8 transition-all hover:shadow-premium hover:-translate-y-2 cursor-pointer animate-fade-in backdrop-blur-sm"
                  style={{ animationDelay: `${i * 100}ms` }}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                  aria-label={item.title}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
                  
                  <div className="relative z-10">
                    <div className="h-14 w-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-glow">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    
                    <h3 className="font-bold font-poppins text-xl mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm font-semibold">Learn more</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* HOW IT WORKS - Animated timeline */}
        <section aria-labelledby="how-title" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-subtle rounded-3xl" />
          
          <div className="relative z-10 p-12">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                <Sparkles className="h-4 w-4 text-secondary" />
                <span className="text-sm font-semibold text-secondary">Simple Process</span>
              </div>
              <h2 id="how-title" className="text-5xl font-bold font-poppins mb-4">How It Works</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A simple process designed for a fast and enjoyable experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { step: "1", title: "Choose Model", desc: "Select your phone and preferred rim style.", delay: "0ms" },
                { step: "2", title: "Customize", desc: "Choose material, add text and your own photos.", delay: "150ms" },
                { step: "3", title: "Complete", desc: "Place order – fast production and 5-7 day delivery.", delay: "300ms" }
              ].map((item, i) => (
                <article
                  key={i}
                  className="relative group animate-fade-in"
                  style={{ animationDelay: item.delay }}
                  aria-label={`Step ${item.step}: ${item.title}`}
                >
                  {/* Connector line */}
                  {i < 2 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30" />
                  )}
                  
                  <div className="relative rounded-2xl border border-border/40 bg-background p-8 hover:shadow-card transition-all hover:-translate-y-1">
                    <div className="h-16 w-16 rounded-full bg-gradient-premium flex items-center justify-center mb-6 shadow-glow text-2xl font-bold text-white group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>
                    
                    <h3 className="font-bold font-poppins text-xl mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12 animate-fade-in">
              <Button
                size="lg"
                className="bg-gradient-accent hover:shadow-glow transition-premium text-lg font-semibold group"
                onClick={() => (window.location.href = "/customize")}
              >
                Start Configuration
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* TRUST BADGES - Animated on scroll */}
        <section aria-labelledby="trust-title" className="py-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 id="trust-title" className="text-4xl font-bold font-poppins mb-4">Why Wavely</h2>
            <p className="text-lg text-muted-foreground">Premium quality meets exceptional service</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Truck, title: "Fast Delivery", desc: "5-7 business days", gradient: "from-primary to-accent" },
              { icon: Shield, title: "Premium Quality", desc: "Military-grade protection", gradient: "from-accent to-secondary" },
              { icon: Star, title: "100% Satisfaction", desc: "Return guarantee", gradient: "from-secondary to-primary" },
              { icon: Sparkles, title: "Unique Design", desc: "Inspired by automotive world", gradient: "from-primary to-secondary" }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group relative rounded-2xl border border-border/40 bg-card/50 p-6 text-center hover:shadow-premium transition-all hover:-translate-y-2 animate-fade-in backdrop-blur-sm cursor-pointer"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
                  
                  <div className="relative z-10">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent mb-4 shadow-glow group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <p className="font-bold font-poppins text-lg mb-2">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 animate-fade-in">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-premium p-12 md:p-16 text-center shadow-premium">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <Sparkles className="h-12 w-12 text-white mx-auto mb-6 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6">
                Ready to Create Your Perfect Case?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join thousands of satisfied customers who trust Wavely for premium custom cases.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 transition-premium text-lg font-semibold group shadow-glow"
                  onClick={() => (window.location.href = "/customize")}
                >
                  Start Designing Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20 transition-smooth text-lg font-semibold backdrop-blur-sm"
                  onClick={() => (window.location.href = "/how-it-works")}
                >
                  Learn More
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

export default Index;
