import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Upload, Star, Quote, Instagram, Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";
import heroFerrariCase from "@/assets/hero-ferrari-case.jpg";
import caseFerrari from "@/assets/case-ferrari.jpg";
import caseGTR from "@/assets/case-gtr.jpg";
import caseLamborghini from "@/assets/case-lamborghini.jpg";
import caseBMW from "@/assets/case-bmw.jpg";

const Index = () => {
  const [hoveredCase, setHoveredCase] = useState<number | null>(null);

  const featuredCases = [
    {
      id: 1,
      name: "Ferrari F8",
      image: caseFerrari,
      price: "$49.99",
      badge: "Best Seller",
      color: "hot-pink"
    },
    {
      id: 2,
      name: "Nissan GTR R35",
      image: caseGTR,
      price: "$44.99",
      badge: "Popular",
      color: "electric-cyan"
    },
    {
      id: 3,
      name: "Lamborghini Huracán",
      image: caseLamborghini,
      price: "$54.99",
      badge: "Premium",
      color: "lime-neon"
    },
    {
      id: 4,
      name: "BMW M4",
      image: caseBMW,
      price: "$49.99",
      badge: "New",
      color: "electric-cyan"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Alex M.",
      role: "Car Enthusiast",
      text: "The quality is insane! My GTR case looks exactly like the real thing. Everyone asks where I got it.",
      rating: 5
    },
    {
      id: 2,
      name: "Jordan K.",
      role: "Ferrari Owner",
      text: "Finally a case that matches my passion. The carbon fiber texture and neon details are perfect!",
      rating: 5
    },
    {
      id: 3,
      name: "Sam R.",
      role: "Track Day Regular",
      text: "Best purchase ever! Dropped my phone multiple times and it's still perfect. Looks amazing too.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-card px-3 py-2 rounded-md z-50">
        Skip to content
      </a>

      <Navigation />

      {/* HERO SECTION - Parallax with 3D Elements */}
      <header className="relative overflow-hidden min-h-screen carbon-fiber" aria-labelledby="hero-title">
        {/* Neon Light Strips - like garage */}
        <div className="absolute top-0 left-10 w-1 h-full bg-gradient-to-b from-primary via-primary to-transparent opacity-60 blur-sm" />
        <div className="absolute top-0 right-10 w-1 h-full bg-gradient-to-b from-secondary via-secondary to-transparent opacity-60 blur-sm" />
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-hero animate-pulse" style={{ animationDuration: '8s' }} />

        {/* 3D Rim Element - emerging from behind */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-20">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 rounded-full border-8 border-metallic-gray opacity-40 animate-spin" style={{ animationDuration: '20s' }} />
            <div className="absolute inset-8 rounded-full border-4 border-primary/30" />
            <div className="absolute inset-16 rounded-full bg-gradient-radial from-primary/10 to-transparent" />
          </div>
        </div>

        {/* Floating neon particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                background: i % 3 === 0 ? 'hsl(var(--hot-pink))' : i % 3 === 1 ? 'hsl(var(--electric-cyan))' : 'hsl(var(--lime-neon))',
                opacity: 0.3 + Math.random() * 0.3,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 8}s`
              }}
            />
          ))}
        </div>
        
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* Left: Text content */}
            <div className="animate-fade-in space-y-8">
              {/* Neon Badge */}
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border-2 border-primary/40 backdrop-blur-sm animate-neon-pulse">
                <Zap className="h-6 w-6 text-primary" />
                <span className="text-sm font-black text-primary uppercase tracking-widest">Premium Car Cases</span>
              </div>

              <div className="space-y-6">
                <h1 id="hero-title" className="text-7xl md:text-9xl font-black font-poppins leading-none tracking-tighter" style={{ fontFamily: "'Orbitron', 'Poppins', sans-serif" }}>
                  <span className="block text-white drop-shadow-[0_0_40px_rgba(255,20,147,0.8)]">WAVELY</span>
                  <span className="block text-transparent bg-gradient-accent bg-clip-text animate-neon-pulse">
                    GARAGE
                  </span>
                </h1>
                
                <p className="text-2xl md:text-3xl text-muted-foreground font-bold leading-relaxed max-w-xl" style={{ fontFamily: "'Urbanist', sans-serif" }}>
                  Premium phone cases featuring <span className="text-primary">legendary sports cars</span>. 
                  Carbon fiber texture. Neon accents. Pure performance.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="h-16 px-10 bg-gradient-accent hover:shadow-neon transition-premium text-xl font-black group relative overflow-hidden border-2 border-transparent hover:border-primary"
                  onClick={() => (window.location.href = "/shop")}
                >
                  <span className="relative z-10 flex items-center">
                    <ShoppingCart className="h-6 w-6 mr-3" />
                    SHOP NOW
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-vibrant opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="h-16 px-10 border-2 border-secondary hover:bg-secondary/20 hover:border-secondary transition-smooth text-xl font-black group backdrop-blur-sm"
                  onClick={() => (window.location.href = "/customize")}
                >
                  <Sparkles className="h-6 w-6 mr-3 text-secondary group-hover:animate-spin" />
                  EXPLORE DESIGNS
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-6 pt-8 border-t border-border/40">
                {[
                  { icon: Star, text: "Premium Quality", color: "primary" },
                  { icon: Zap, text: "Fast Shipping", color: "secondary" },
                  { icon: Heart, text: "100+ 5★ Reviews", color: "accent" }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-2 animate-fade-in" style={{ animationDelay: `${i * 200}ms` }}>
                      <div className={`h-10 w-10 rounded-lg bg-${item.color}/20 flex items-center justify-center border border-${item.color}/40`}>
                        <Icon className={`h-5 w-5 text-${item.color}`} />
                      </div>
                      <span className="text-sm font-bold uppercase tracking-wide">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Hero Product with Parallax */}
            <div className="relative lg:h-screen flex items-center justify-center">
              <div className="relative animate-float animate-tilt-in" style={{ animationDuration: '8s' }}>
                {/* Multiple glow layers for 3D effect */}
                <div className="absolute -inset-20 bg-primary/40 rounded-full blur-[120px] animate-neon-pulse" />
                <div className="absolute -inset-10 bg-secondary/40 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
                <div className="absolute -inset-5 bg-accent/30 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '4s', animationDelay: '2s' }} />
                
                {/* Main hero image */}
                <img
                  src={heroFerrariCase}
                  alt="Ferrari phone case with neon lighting"
                  className="relative z-10 w-full max-w-2xl rounded-3xl shadow-premium transform hover:scale-105 transition-premium"
                  style={{ filter: 'drop-shadow(0 0 40px rgba(255,20,147,0.6))' }}
                />
                
                {/* Reflective glow spots */}
                <div className="absolute top-1/4 -left-10 h-32 w-32 bg-primary/60 rounded-full blur-2xl animate-pulse" />
                <div className="absolute bottom-1/4 -right-10 h-40 w-40 bg-secondary/60 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Scroll</span>
          <ArrowRight className="h-6 w-6 text-primary rotate-90" />
        </div>
      </header>

      <main id="main-content" className="relative">
        {/* FEATURED CASES SECTION */}
        <section className="py-24 relative overflow-hidden" aria-labelledby="featured-title">
          <div className="absolute inset-0 carbon-fiber opacity-50" />
          <div className="absolute inset-0 bg-gradient-subtle" />
          
          <div className="container max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 border-2 border-accent/40 backdrop-blur-sm mb-6">
                <Star className="h-5 w-5 text-accent" />
                <span className="text-sm font-bold text-accent uppercase tracking-wider">Featured Collection</span>
              </div>
              
              <h2 id="featured-title" className="text-6xl md:text-7xl font-black font-poppins mb-6" style={{ fontFamily: "'Orbitron', 'Poppins', sans-serif" }}>
                <span className="bg-gradient-accent bg-clip-text text-transparent">LEGENDARY RIDES</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-semibold">
                Premium cases featuring the world's most iconic sports cars
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredCases.map((item, i) => (
                <div
                  key={item.id}
                  className="group relative animate-fade-in cursor-pointer"
                  style={{ animationDelay: `${i * 150}ms` }}
                  onMouseEnter={() => setHoveredCase(i)}
                  onMouseLeave={() => setHoveredCase(null)}
                >
                  <div className={`relative rounded-2xl border-2 border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden transition-all hover:border-${item.color}/60 hover:shadow-premium hover:-translate-y-2`}>
                    {/* Badge */}
                    <div className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-${item.color}/90 text-white text-xs font-black uppercase backdrop-blur-sm`}>
                      {item.badge}
                    </div>

                    {/* Glow on hover */}
                    <div className={`absolute inset-0 bg-${item.color}/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl`} />
                    
                    {/* Image */}
                    <div className="aspect-square bg-gradient-subtle p-6 relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
                      />
                    </div>

                    {/* Info */}
                    <div className="p-6 relative z-10">
                      <h3 className="text-xl font-black font-poppins mb-2 group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-black text-primary">{item.price}</span>
                        <Button 
                          size="sm" 
                          className="bg-gradient-accent hover:shadow-glow transition-premium text-xs font-bold"
                          onClick={() => window.location.href = "/shop"}
                        >
                          <ShoppingCart className="h-4 w-4 mr-1" />
                          ADD
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="h-14 px-8 bg-gradient-vibrant hover:shadow-neon transition-premium text-lg font-black group"
                onClick={() => window.location.href = "/shop"}
              >
                VIEW ALL CASES
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* CUSTOMIZE YOURS SECTION */}
        <section className="py-24 relative" aria-labelledby="customize-title">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
          
          <div className="container max-w-6xl mx-auto px-4 relative z-10">
            <div className="relative rounded-3xl border-2 border-primary/30 bg-card/80 backdrop-blur-xl p-12 md:p-16 overflow-hidden shadow-premium">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[100px]" />
              
              <div className="relative z-10 text-center space-y-8">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/10 border-2 border-secondary/40 backdrop-blur-sm">
                  <Upload className="h-6 w-6 text-secondary" />
                  <span className="text-sm font-bold text-secondary uppercase tracking-wider">Create Your Own</span>
                </div>

                <h2 id="customize-title" className="text-5xl md:text-6xl font-black font-poppins" style={{ fontFamily: "'Orbitron', 'Poppins', sans-serif" }}>
                  <span className="bg-gradient-accent bg-clip-text text-transparent">CUSTOMIZE YOURS</span>
                </h2>

                <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-semibold leading-relaxed">
                  Upload your own car photo or choose from our premium collection. 
                  Add carbon fiber textures, neon accents, and make it truly yours.
                </p>

                <div className="grid md:grid-cols-3 gap-6 pt-8">
                  {[
                    { icon: Upload, title: "Upload Photo", desc: "Your car, your style" },
                    { icon: Sparkles, title: "Choose Design", desc: "Premium templates" },
                    { icon: Zap, title: "Get It Fast", desc: "5-7 day delivery" }
                  ].map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <div key={i} className="text-center space-y-3">
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-accent shadow-glow">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-lg font-bold font-poppins">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.desc}</p>
                      </div>
                    );
                  })}
                </div>

                <Button
                  size="lg"
                  className="h-16 px-10 bg-white text-background hover:bg-white/90 transition-premium text-xl font-black group shadow-premium mt-8"
                  onClick={() => window.location.href = "/customize"}
                >
                  START CUSTOMIZING
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="py-24 relative carbon-fiber" aria-labelledby="testimonials-title">
          <div className="absolute inset-0 bg-gradient-subtle opacity-90" />
          
          <div className="container max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 border-2 border-accent/40 backdrop-blur-sm mb-6">
                <Quote className="h-5 w-5 text-accent" />
                <span className="text-sm font-bold text-accent uppercase tracking-wider">Community Love</span>
              </div>
              
              <h2 id="testimonials-title" className="text-6xl font-black font-poppins mb-4" style={{ fontFamily: "'Orbitron', 'Poppins', sans-serif" }}>
                <span className="bg-gradient-accent bg-clip-text text-transparent">CAR ENTHUSIASTS</span>
              </h2>
              <p className="text-xl text-muted-foreground font-semibold">See what our community says</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, i) => (
                <div
                  key={testimonial.id}
                  className="relative rounded-2xl border-2 border-border/40 bg-card/80 backdrop-blur-sm p-6 hover:border-primary/50 transition-all hover:shadow-card animate-fade-in"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <p className="text-foreground mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-accent" />
                    <div>
                      <p className="font-bold font-poppins">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 border-2 border-secondary hover:bg-secondary/20 transition-smooth text-lg font-black group"
                onClick={() => window.open('https://instagram.com', '_blank')}
              >
                <Instagram className="h-5 w-5 mr-2" />
                FOLLOW US @WAVELY
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;