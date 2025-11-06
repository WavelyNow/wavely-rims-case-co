import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import HeroBackground from "@/components/HeroBackground";

/**
 * Wavely – New Landing Page
 *
 * Key goals:
 * - Modern, responsive layout with clear sections and strong brand presence
 * - Accessible semantics (landmarks, headings, alt text, focus management)
 * - Performance-minded (lazy images, minimal DOM, compressed SVG logo)
 * - Cross-browser friendly by relying on standard HTML/CSS features
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Skip to content link for keyboard users */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-card px-3 py-2 rounded-md">
        Sare direct la conținut
      </a>

      {/* Global navigation with integrated logo */}
      <Navigation />

      {/* Hero: prominent brand, clear value proposition, primary CTA */}
      <header className="relative overflow-hidden" aria-labelledby="hero-title">
        {/* Spectacular, responsive hero background with video + animated fallback */}
        <HeroBackground />

        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="min-h-[70vh] flex items-center">
            <div className="max-w-3xl">
              <h1 id="hero-title" className="text-5xl md:text-7xl font-bold font-poppins leading-tight">
                Wavely
              </h1>
              <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                Huse premium personalizate, inspirate din designul jantelor auto. Alege stilul, materialul și adaugă fotografiile tale – noi livrăm calitatea.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-accent hover:shadow-glow transition-premium text-base font-semibold"
                  onClick={() => (window.location.href = "/customize")}
                >
                  Configurează-ți husa
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-secondary/30 hover:bg-secondary/10 transition-smooth text-base font-semibold"
                  onClick={() => (window.location.href = "/shop")}
                >
                  Vezi produsele
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services/Products overview: clear, scannable cards */}
      <main id="main-content" className="container max-w-7xl mx-auto px-4">
        {/* Servicii / Produse */}
        <section aria-labelledby="services-title" className="py-16">
          <div className="text-center mb-10">
            <h2 id="services-title" className="text-4xl font-bold font-poppins">Servicii & Produse</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Tot ce ai nevoie pentru a crea o husă care reflectă stilul tău.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <article className="rounded-xl border border-border/40 bg-card/50 p-6 transition-colors hover:bg-card/60" aria-label="Huse personalizate">
              <h3 className="font-semibold font-poppins text-lg">Huse personalizate</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Alege designul, materialul și adaugă text sau fotografie proprie.
              </p>
            </article>

            {/* Card 2 */}
            <article className="rounded-xl border border-border/40 bg-card/50 p-6 transition-colors hover:bg-card/60" aria-label="Design jante autentice">
              <h3 className="font-semibold font-poppins text-lg">Design jante autentice</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Selectează din stiluri populare de jante pentru un look exclusiv.
              </p>
            </article>

            {/* Card 3 */}
            <article className="rounded-xl border border-border/40 bg-card/50 p-6 transition-colors hover:bg-card/60" aria-label="Materiale premium">
              <h3 className="font-semibold font-poppins text-lg">Materiale premium</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Matte, glossy, leather sau metallic – rezistență și eleganță.
              </p>
            </article>

            {/* Card 4 */}
            <article className="rounded-xl border border-border/40 bg-card/50 p-6 transition-colors hover:bg-card/60" aria-label="Upload fotografii">
              <h3 className="font-semibold font-poppins text-lg">Upload fotografii</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Încarcă imagini cu mașina ta pentru un design cu adevărat personal.
              </p>
            </article>
          </div>
        </section>

        {/* How it works: simple 3-step flow for clarity */}
        <section aria-labelledby="how-title" className="py-16 border-y border-border/40 bg-card/30">
          <div className="text-center mb-10">
            <h2 id="how-title" className="text-4xl font-bold font-poppins">Cum funcționează</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Un proces simplu, creat pentru o experiență rapidă și plăcută.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="rounded-xl border border-border/40 bg-background p-6" aria-label="Alege modelul de telefon">
              <h3 className="font-semibold font-poppins">1. Alege modelul</h3>
              <p className="mt-2 text-sm text-muted-foreground">Selectează telefonul și stilul de jantă preferat.</p>
            </article>
            <article className="rounded-xl border border-border/40 bg-background p-6" aria-label="Personalizează opțiunile">
              <h3 className="font-semibold font-poppins">2. Personalizează</h3>
              <p className="mt-2 text-sm text-muted-foreground">Alege materialul, adaugă text și poze proprii.</p>
            </article>
            <article className="rounded-xl border border-border/40 bg-background p-6" aria-label="Comandă și livrare rapidă">
              <h3 className="font-semibold font-poppins">3. Finalizează</h3>
              <p className="mt-2 text-sm text-muted-foreground">Plasează comanda – producție rapidă și livrare 5–7 zile.</p>
            </article>
          </div>

          <div className="text-center mt-10">
            <Button
              className="bg-gradient-accent hover:shadow-glow transition-premium"
              onClick={() => (window.location.href = "/customize")}
            >
              Începe configurarea
            </Button>
          </div>
        </section>

        {/* Trust badges (concise, for social proof) */}
        <section aria-labelledby="trust-title" className="py-12">
          <div className="text-center mb-6">
            <h2 id="trust-title" className="text-3xl font-bold font-poppins">De ce Wavely</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-lg border border-border/40 bg-card/50 p-5 text-center">
              <p className="font-semibold">Livrare rapidă</p>
              <p className="text-sm text-muted-foreground">5–7 zile lucrătoare</p>
            </div>
            <div className="rounded-lg border border-border/40 bg-card/50 p-5 text-center">
              <p className="font-semibold">Calitate premium</p>
              <p className="text-sm text-muted-foreground">Protecție militară</p>
            </div>
            <div className="rounded-lg border border-border/40 bg-card/50 p-5 text-center">
              <p className="font-semibold">Satisfacție 100%</p>
              <p className="text-sm text-muted-foreground">Garanție returnare</p>
            </div>
            <div className="rounded-lg border border-border/40 bg-card/50 p-5 text-center">
              <p className="font-semibold">Design unic</p>
              <p className="text-sm text-muted-foreground">Inspirat din lumea auto</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer includes legal links (Privacy, Terms, Cookie) */}
      <Footer />
    </div>
  );
};

export default Index;
