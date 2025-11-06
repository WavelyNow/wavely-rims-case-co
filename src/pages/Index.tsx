import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Upload, Star, Quote, Instagram, Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";
import heroPhoneCase from "@/assets/hero-phone-case.jpg";
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

      {/* HERO SECTION - Automotive Dashboard Style */}
      <header className="relative overflow-hidden min-h-screen" aria-labelledby="hero-title" style={{ background: '#0A0A0A' }}>
        {/* Animated Stars Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="stars-layer absolute inset-0" style={{
            background: `
              radial-gradient(2px 2px at 20% 30%, white, transparent),
              radial-gradient(2px 2px at 60% 70%, white, transparent),
              radial-gradient(1px 1px at 50% 50%, white, transparent),
              radial-gradient(1px 1px at 80% 10%, white, transparent),
              radial-gradient(2px 2px at 90% 60%, white, transparent),
              radial-gradient(1px 1px at 33% 80%, white, transparent),
              radial-gradient(2px 2px at 15% 85%, white, transparent)
            `,
            backgroundSize: '200% 200%',
            animation: 'twinkle 20s ease-in-out infinite',
            opacity: 0.3
          }} />
          <div className="stars-layer absolute inset-0" style={{
            background: `
              radial-gradient(1px 1px at 40% 20%, rgba(0, 224, 255, 0.8), transparent),
              radial-gradient(1px 1px at 70% 60%, rgba(255, 0, 170, 0.8), transparent),
              radial-gradient(1px 1px at 25% 75%, rgba(192, 0, 255, 0.8), transparent),
              radial-gradient(1px 1px at 85% 40%, rgba(0, 224, 255, 0.8), transparent)
            `,
            backgroundSize: '250% 250%',
            animation: 'twinkle 15s ease-in-out infinite reverse',
            opacity: 0.4
          }} />
        </div>
        
        {/* Gradient Overlay - Pink to Cyan */}
        <div className="absolute inset-0 bg-gradient-to-br from-hot-pink/10 via-transparent to-electric-cyan/10" />
        
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* LEFT SIDE - Specs & CTA */}
            <div className="animate-fade-in space-y-8 order-2 lg:order-1">
              {/* Brand Name */}
              <div className="mb-12">
                <h1 id="hero-title" className="text-8xl md:text-9xl font-black leading-none tracking-tighter mb-4" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                  <span className="block text-white drop-shadow-[0_0_30px_rgba(255,0,170,0.8)]">WAVELY</span>
                </h1>
                <p className="text-2xl text-metallic-gray font-semibold uppercase tracking-wider" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Premium Automotive Phone Cases
                </p>
              </div>

              {/* Specs Cards Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-hot-pink/20 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative p-6 rounded-xl bg-black/40 backdrop-blur-sm border border-hot-pink/20 group-hover:border-hot-pink/60 transition-all">
                    <div className="text-4xl font-black text-hot-pink mb-2" style={{ fontFamily: "'Orbitron', sans-serif" }}>3D</div>
                    <div className="text-sm text-metallic-gray uppercase">Printed Design</div>
                  </div>
                </div>
                
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/20 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative p-6 rounded-xl bg-black/40 backdrop-blur-sm border border-electric-cyan/20 group-hover:border-electric-cyan/60 transition-all">
                    <div className="text-4xl font-black text-electric-cyan mb-2" style={{ fontFamily: "'Orbitron', sans-serif" }}>CF</div>
                    <div className="text-sm text-metallic-gray uppercase">Carbon Fiber</div>
                  </div>
                </div>
              </div>

              {/* Premium Features List */}
              <div className="space-y-4 p-6 rounded-xl bg-gradient-to-br from-black/60 to-black/30 backdrop-blur-xl border border-white/10">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-2 h-2 rounded-full bg-hot-pink group-hover:scale-150 transition-transform" />
                  <span className="text-white font-semibold group-hover:text-hot-pink transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>Glossy Neon Edge Finish</span>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-2 h-2 rounded-full bg-electric-cyan group-hover:scale-150 transition-transform" />
                  <span className="text-white font-semibold group-hover:text-electric-cyan transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>Full Customization Available</span>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-2 h-2 rounded-full bg-neon-purple group-hover:scale-150 transition-transform" />
                  <span className="text-white font-semibold group-hover:text-neon-purple transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>12 Months Warranty</span>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-2 h-2 rounded-full bg-lime-neon group-hover:scale-150 transition-transform" />
                  <span className="text-white font-semibold group-hover:text-lime-neon transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>Premium Protection</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="h-16 px-10 text-xl font-black uppercase group relative overflow-hidden border-0"
                  style={{
                    background: 'linear-gradient(135deg, #00E0FF, #0080FF)',
                    boxShadow: '0 0 30px rgba(0, 224, 255, 0.6), 0 0 60px rgba(0, 224, 255, 0.3)'
                  }}
                  onClick={() => (window.location.href = "/shop")}
                >
                  <span className="relative z-10 flex items-center text-white">
                    <ShoppingCart className="h-6 w-6 mr-3" />
                    SHOP NOW
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="h-16 px-10 text-xl font-black uppercase group backdrop-blur-sm"
                  style={{
                    borderWidth: '2px',
                    borderColor: '#FF00AA',
                    color: '#FF00AA',
                    background: 'rgba(255, 0, 170, 0.1)'
                  }}
                  onClick={() => (window.location.href = "/customize")}
                >
                  <Sparkles className="h-6 w-6 mr-3 group-hover:animate-spin" />
                  EXPLORE DESIGNS
                </Button>
              </div>
            </div>

            {/* RIGHT SIDE - Premium Phone Case with Wheel */}
            <div className="relative lg:h-screen flex items-center justify-center order-1 lg:order-2">
              <div className="relative animate-float" style={{ animationDuration: '6s' }}>
                {/* Glow Effects */}
                <div className="absolute -inset-32 bg-hot-pink/30 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute -inset-20 bg-electric-cyan/30 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute -inset-10 bg-neon-purple/20 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '2s' }} />
                
                {/* Main Product Image */}
                <div className="relative z-10">
                  <img
                    src={heroPhoneCase}
                    alt="WAVELY premium phone case with sports car wheel rim design"
                    className="relative w-full max-w-2xl"
                    style={{ 
                      filter: 'drop-shadow(0 0 60px rgba(255, 0, 170, 0.6)) drop-shadow(0 0 30px rgba(0, 224, 255, 0.4))',
                      transform: 'perspective(1000px) rotateY(-5deg)'
                    }}
                  />
                </div>
                
                {/* Neon Edge Highlights */}
                <div className="absolute top-1/4 right-1/4 h-48 w-48 bg-hot-pink/40 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 left-1/4 h-48 w-48 bg-electric-cyan/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs uppercase tracking-widest font-bold" style={{ color: '#B0B0B0' }}>Scroll</span>
          <ArrowRight className="h-6 w-6 rotate-90" style={{ color: '#FF00AA' }} />
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