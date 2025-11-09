import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackgroundFX from "@/components/BackgroundFX";
import { Button } from "@/components/ui/button";
import { Package, Sparkles } from "lucide-react";

const Accessories = () => {
  useEffect(() => {
    document.title = "Accessories | Wavely Garage";
    const metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = "Discover upcoming accessories for your Wavely build: mounts, decals, straps, and more.";
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Ambient background */}
      <BackgroundFX intensity="low" />

      <Navigation />

      <main className="container mx-auto px-4 py-14 relative z-10">
        {/* Header */}
        <header className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black/40 border-2 border-secondary/60 backdrop-blur-sm mb-6 animate-neon-pulse">
            <Sparkles className="h-5 w-5 text-secondary" />
            <span className="text-sm font-racing text-secondary uppercase tracking-widest">Accessories</span>
          </div>
          <h1 className="font-racing text-5xl md:text-6xl text-white uppercase tracking-wider">
            Coming Soon
          </h1>
          <p className="text-white/70 mt-3 max-w-2xl mx-auto font-body text-lg">
            We’re crafting matching accessories to complete your build. Stay tuned for drops and announcements.
          </p>
        </header>

        {/* Content card */}
        <section className="max-w-3xl mx-auto">
          <div className="rounded-2xl border-2 border-white/10 bg-black/50 backdrop-blur p-8 shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
            <div className="flex items-center gap-3 mb-4">
              <Package className="h-6 w-6 text-secondary" />
              <h2 className="font-poppins font-semibold text-xl text-white">What to expect</h2>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/80">
              <li className="rounded-lg border border-white/10 p-4 bg-white/5">Mounts & stands</li>
              <li className="rounded-lg border border-white/10 p-4 bg-white/5">Straps & lanyards</li>
              <li className="rounded-lg border border-white/10 p-4 bg-white/5">Decals & skins</li>
              <li className="rounded-lg border border-white/10 p-4 bg-white/5">Care & protection</li>
            </ul>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="/shop">
                <Button variant="neon" className="uppercase font-semibold">
                  Browse Collection
                </Button>
              </a>
              <a href="/contact">
                <Button variant="outline" className="border-2 border-secondary/60 text-secondary hover:bg-secondary/20 hover:neon-glow-blue uppercase font-semibold">
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Accessories;
