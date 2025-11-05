import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Palette, Image, Package, Shield, Zap } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Smartphone,
      title: "Alege modelul de telefon",
      description: "Selectează din lista completă de modele iPhone, Samsung, Google Pixel și multe altele. Avem huse pentru toate modelele populare.",
      highlight: "200+ modele disponibile"
    },
    {
      icon: Palette,
      title: "Selectează designul de jantă",
      description: "Alege din colecția noastră premium de jante 3D: sport, luxury, off-road, classic. Fiecare jantă este modelată în detaliu pentru un efect autentic.",
      highlight: "Design 3D real, nu printat"
    },
    {
      icon: Image,
      title: "Încarcă poze personale",
      description: "Adaugă poze cu mașina ta, placa de înmatriculare, sau orice alte imagini preferate. Sistemul nostru optimizează automat imaginile pentru calitate maximă.",
      highlight: "Preview în timp real"
    },
    {
      icon: Package,
      title: "Producție & Livrare",
      description: "Husa ta este produsă custom folosind tehnologie de printare de ultimă generație și materiale premium. Livrare în 3-5 zile lucrătoare.",
      highlight: "Tracking complet"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Protecție Premium",
      description: "Materiale de calitate industrială care protejează telefonul de impact, zgârieturi și uzură zilnică. Margini ridicate pentru protecția camerei și ecranului."
    },
    {
      icon: Palette,
      title: "Personalizare Completă",
      description: "Design 100% personalizabil - de la modelul de jantă până la pozele tale preferate. Fiecare husă este unică și creată special pentru tine."
    },
    {
      icon: Zap,
      title: "Livrare Rapidă",
      description: "Producție în 2-3 zile + transport express. Primești tracking complet și notificări în timp real despre statusul comenzii tale."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 animate-fade-in">
            Cum funcționează <span className="bg-gradient-accent bg-clip-text text-transparent">Wavely</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            De la idee la husă personalizată în doar 4 pași simpli. Fiecare design este unic și creat special pentru tine.
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
                    Pasul {idx + 1}
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
              Începe personalizarea
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
              De ce <span className="bg-gradient-accent bg-clip-text text-transparent">Wavely</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Combinăm tehnologia avansată cu materiale premium pentru huse care durează
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
              Materiale <span className="bg-gradient-accent bg-clip-text text-transparent">Premium</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">TPU Flexibil:</strong> Protecție excelentă la impact și căderi. 
                Materialul absoarbe șocurile și protejează telefonul în situații de zi cu zi.
              </p>
              <p>
                <strong className="text-foreground">Policarbonat Rigid:</strong> Rezistență maximă la zgârieturi și uzură. 
                Păstrează designul intact pe termen lung, fără decolorare sau îngălbenire.
              </p>
              <p>
                <strong className="text-foreground">Printare 3D Avansată:</strong> Tehnologie de ultimă generație pentru relief 
                autentic al jantelor. Poți simți fiecare detaliu - nu este doar o imagine printată.
              </p>
              <p>
                <strong className="text-foreground">Finisaj UV-Protective:</strong> Strat transparent care protejează printul 
                de decolorare și uzură. Culorile rămân vibrante chiar și după luni de utilizare.
              </p>
              <p>
                <strong className="text-foreground">Soft-Touch Coating:</strong> Finisaj mat care oferă grip excelent și 
                o senzație premium în mână. Rezistent la amprente și pete.
              </p>
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-center font-semibold text-foreground">
                🌿 Toate materialele sunt certificate și eco-friendly
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
