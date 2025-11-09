import { useEffect, useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackgroundFX from "@/components/BackgroundFX";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Target, Flag, Users, Mail, ArrowRight } from "lucide-react";

type ValidationItem = {
  id: string;
  label: string;
};

const REQUIRED_ELEMENTS: ValidationItem[] = [
  { id: "about-hero-title", label: "Hero title" },
  { id: "history-purpose", label: "History & Purpose section" },
  { id: "values-mission", label: "Values & Mission section" },
  { id: "roadmap", label: "Roadmap section" },
  { id: "contact-section", label: "Contact section" },
];

const About = () => {
  const [validationPassed, setValidationPassed] = useState<boolean | null>(null);
  const [missing, setMissing] = useState<string[]>([]);

  useEffect(() => {
    document.title = "About | Wavely Garage";
    const metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = "Learn about Wavely Garage: our history, mission, values, and how to contact us.";
    }
  }, []);

  // Runtime validation to confirm the page loads required sections
  useEffect(() => {
    const missingIds: string[] = [];
    REQUIRED_ELEMENTS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) missingIds.push(id);
    });
    setMissing(missingIds);
    setValidationPassed(missingIds.length === 0);
  }, []);

  // Removed visible validation summary; keeping console validation for development.

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Decorative background effects */}
      <BackgroundFX intensity="low" />

      <main className="container mx-auto px-4">
        {/* Hero */}
        <section className="py-10 md:py-14 border-b border-border/40 text-center" aria-labelledby="about-hero-title">
          <h1 id="about-hero-title" className="text-4xl md:text-5xl font-bold font-poppins tracking-tight">
            About Wavely Garage
          </h1>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            We fuse underground racing culture with premium phone protection, designed for enthusiasts who live for speed.
          </p>
          {/* Removed runtime validation summary from UI */}
        </section>

        {/* History & Purpose */}
        <section id="history-purpose" className="py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-4">Our History & Purpose</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Wavely Garage was born on late-night city roads where engines roar and neon lights cut through the fog. 
                What started as a passion for street-inspired aesthetics evolved into a mission: to craft phone cases that reflect the DNA of racing machines while delivering modern-day protection.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our purpose is simple—enable self-expression through premium, durable designs. Every case is built to perform, look sharp, and tell a story about its driver.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-xl border border-border/40 bg-card/50 backdrop-blur p-6 shadow-card">
                <div className="flex items-start gap-3">
                  <Flag className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold font-poppins mb-2">What drives us</h3>
                    <p className="text-sm text-muted-foreground">
                      Authenticity, performance, and craftsmanship. We iterate fast, obsess over details, and build for real-world use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values & Mission */}
        <section id="values-mission" className="py-12 md:py-16 border-t border-border/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6">
              <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-4">Our Values</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3"><Target className="h-5 w-5 text-secondary" />
                  <span>Precision first: materials, fit, and finish that hold up.</span>
                </li>
                <li className="flex items-start gap-3"><Users className="h-5 w-5 text-accent" />
                  <span>Community culture: we build with and for enthusiasts.</span>
                </li>
                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Reliability: protection and performance under daily stress.</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-6">
              <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To merge speed-inspired design with modern durability, giving every driver a unique canvas for self-expression on the device they carry every day.
              </p>
              <div className="mt-6">
                <Button
                  className="bg-gradient-accent hover:shadow-glow transition-smooth font-semibold"
                  onClick={() => (window.location.href = "/shop")}
                >
                  Explore Collection
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Design Principles */}
        <section id="design-principles" className="py-12 md:py-16 border-t border-border/30">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="rounded-xl border border-border/40 bg-card/50 backdrop-blur p-6 shadow-card">
              <h3 className="font-semibold font-poppins mb-2">Performance-first</h3>
              <p className="text-sm text-muted-foreground">Every design choice prioritizes durability, grip, and pocket-friendliness without compromising style.</p>
            </div>
            <div className="rounded-xl border border-border/40 bg-card/50 backdrop-blur p-6 shadow-card">
              <h3 className="font-semibold font-poppins mb-2">Authentic Aesthetics</h3>
              <p className="text-sm text-muted-foreground">Inspired by legendary machines—formed through real materials, lines, and textures that feel true.</p>
            </div>
            <div className="rounded-xl border border-border/40 bg-card/50 backdrop-blur p-6 shadow-card">
              <h3 className="font-semibold font-poppins mb-2">Human-centered</h3>
              <p className="text-sm text-muted-foreground">Built around how people actually use their devices daily—accessible, predictable, and comfortable.</p>
            </div>
          </div>
        </section>

        {/* Materials & Craft */}
        <section id="materials" className="py-12 md:py-16 border-t border-border/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-4">Materials & Craft</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use impact-absorbent TPU blends, scratch-resistant coatings, and reinforced corners to balance feel and protection. The finish resists fingerprints and maintains clarity for gloss designs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Each batch is inspected for tolerance and fit across device models. We iterate on micro-improvements in texture, radius, and button feedback.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-xl border border-border/40 bg-card/50 backdrop-blur p-6 shadow-card">
                <h3 className="font-semibold font-poppins mb-2">Sustainability</h3>
                <p className="text-sm text-muted-foreground">We target durable lifecycles and recyclable packaging, and we’re evaluating reclaimed material streams for future lines.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Community & Partnerships */}
        <section id="community" className="py-12 md:py-16 border-t border-border/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:3xl font-bold font-poppins mb-4">Community</h2>
              <p className="text-muted-foreground leading-relaxed">
                We collaborate with builders, photographers, and racing crews to capture authentic stories. Share your build—tag us for features and early access drops.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:3xl font-bold font-poppins mb-4">Partnerships</h2>
              <p className="text-muted-foreground leading-relaxed">
                We’re open to co-branded runs with quality-first teams. If you represent a club or brand, reach out via our contact page.
              </p>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="py-12 md:py-16 border-t border-border/30">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-poppins">Roadmap</h2>
            <p className="text-muted-foreground mt-2">A look at what we’re building next.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="rounded-xl border border-border/40 bg-card p-6 shadow-card">
              <h3 className="font-semibold font-poppins">Q1</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Expanded device support</li>
                <li>Refined grip textures</li>
                <li>Limited club collaborations</li>
              </ul>
            </div>
            <div className="rounded-xl border border-border/40 bg-card p-6 shadow-card">
              <h3 className="font-semibold font-poppins">Q2</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>New finish variants (matte, satin)</li>
                <li>Design configurator v2</li>
                <li>Recyclable packaging updates</li>
              </ul>
            </div>
            <div className="rounded-xl border border-border/40 bg-card p-6 shadow-card">
              <h3 className="font-semibold font-poppins">Q3</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Co-branded pro series</li>
                <li>Performance lab testing reports</li>
                <li>Community build showcases</li>
              </ul>
            </div>
            <div className="rounded-xl border border-border/40 bg-card p-6 shadow-card">
              <h3 className="font-semibold font-poppins">Q4</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Material recovery pilot</li>
                <li>International shipping improvements</li>
                <li>Year-end limited editions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="py-12 md:py-16 border-t border-border/30">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-poppins">Team</h2>
            <p className="text-muted-foreground mt-2">Meet the crew behind Wavely Garage.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-border/40 bg-card/50 backdrop-blur p-6 shadow-card">
              <h3 className="font-semibold font-poppins">Lead Designer</h3>
              <p className="text-sm text-muted-foreground mt-2">Shapes product aesthetics, materials, and ergonomics for performance-first feel.</p>
            </div>
            <div className="rounded-xl border border-border/40 bg-card/50 backdrop-blur p-6 shadow-card">
              <h3 className="font-semibold font-poppins">Product Lead</h3>
              <p className="text-sm text-muted-foreground mt-2">Owns roadmap, testing, and fit across device variants.</p>
            </div>
            <div className="rounded-xl border border-border/40 bg-card/50 backdrop-blur p-6 shadow-card">
              <h3 className="font-semibold font-poppins">Community Manager</h3>
              <p className="text-sm text-muted-foreground mt-2">Connects with builders and clubs, curates collabs and stories.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-12 md:py-16 border-t border-border/30">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-poppins">FAQ</h2>
            <p className="text-muted-foreground mt-2">Answers to common questions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border/40 bg-card/50 backdrop-blur p-6 shadow-card">
              <h3 className="font-semibold">Which devices are supported?</h3>
              <p className="text-sm text-muted-foreground mt-2">We cover current flagship lines; see the Shop page for model availability.</p>
            </div>
            <div className="rounded-xl border border-border/40 bg-card/50 backdrop-blur p-6 shadow-card">
              <h3 className="font-semibold">What materials do you use?</h3>
              <p className="text-sm text-muted-foreground mt-2">Impact TPU blends with reinforced corners and fingerprint-resistant coatings.</p>
            </div>
            <div className="rounded-xl border border-border/40 bg-card/50 backdrop-blur p-6 shadow-card">
              <h3 className="font-semibold">Do you offer customization?</h3>
              <p className="text-sm text-muted-foreground mt-2">Yes—limited runs and collabs; contact us with your concept.</p>
            </div>
            <div className="rounded-xl border border-border/40 bg-card/50 backdrop-blur p-6 shadow-card">
              <h3 className="font-semibold">How fast is shipping?</h3>
              <p className="text-sm text-muted-foreground mt-2">Orders ship within 48 hours; international timelines vary by region.</p>
            </div>
          </div>
        </section>

        {/* Press & Media */}
        <section id="press-media" className="py-12 md:py-16 border-t border-border/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-4">Press & Media</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Brand guidelines, assets, and media inquiries.</p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li><a className="underline hover:no-underline" href="/public/wavely-logo.svg" download>Logo asset</a></li>
                <li><a className="underline hover:no-underline" href="/robots.txt" target="_blank" rel="noreferrer">Brand basics</a></li>
                <li><a className="underline hover:no-underline" href="mailto:press@wavelygarage.com">press@wavelygarage.com</a></li>
              </ul>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-xl border border-border/40 bg-card/50 backdrop-blur p-6 shadow-card">
                <h3 className="font-semibold font-poppins mb-2">Media Kit</h3>
                <p className="text-sm text-muted-foreground">Includes product shots, logo variants, and usage guidelines.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="py-12 md:py-16 border-t border-border/30">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-poppins">Timeline</h2>
            <p className="text-muted-foreground mt-2">Milestones on our journey.</p>
          </div>
          <div className="relative pl-6">
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-border/50" aria-hidden="true" />
            <ul className="space-y-6">
              <li>
                <div className="flex items-start gap-4">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold">Launch</h3>
                    <p className="text-sm text-muted-foreground">Core collection released with performance-first finishes.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-4">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold">Device Expansion</h3>
                    <p className="text-sm text-muted-foreground">Broadened support across flagship models.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-4">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold">Collaborations</h3>
                    <p className="text-sm text-muted-foreground">Limited drops with select clubs and creators.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Stats */}
        <section id="stats" className="py-12 md:py-16 border-t border-border/30">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="rounded-xl border border-border/40 bg-card p-6 shadow-card">
              <div className="text-3xl font-bold">48h</div>
              <div className="text-sm text-muted-foreground">Average ship time</div>
            </div>
            <div className="rounded-xl border border-border/40 bg-card p-6 shadow-card">
              <div className="text-3xl font-bold">4.7★</div>
              <div className="text-sm text-muted-foreground">Customer rating</div>
            </div>
            <div className="rounded-xl border border-border/40 bg-card p-6 shadow-card">
              <div className="text-3xl font-bold">99.3%</div>
              <div className="text-sm text-muted-foreground">Model fit accuracy</div>
            </div>
            <div className="rounded-xl border border-border/40 bg-card p-6 shadow-card">
              <div className="text-3xl font-bold"><span aria-hidden>∞</span></div>
              <div className="text-sm text-muted-foreground">Passion for builds</div>
            </div>
          </div>
        </section>

        {/* Accessibility & Performance */}
        <section id="accessibility-performance" className="py-12 md:py-16 border-t border-border/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-4">Accessibility & Performance</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>Semantic HTML and ARIA where appropriate</li>
                <li>Keyboard navigable and focus-visible styles</li>
                <li>Responsive layout and reduced motion consideration</li>
                <li>Optimized assets and lazy loading where possible</li>
              </ul>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-xl border border-border/40 bg-card/50 backdrop-blur p-6 shadow-card">
                <h3 className="font-semibold font-poppins mb-2">Measurements</h3>
                <p className="text-sm text-muted-foreground">We track load times, CLS, and accessibility audits to improve continuously.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact-section" className="py-12 md:py-16 border-t border-border/30">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Have questions about orders, materials, or customization? Our support team responds within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="inline-flex items-center gap-2 rounded-lg border border-border/40 bg-card px-5 py-3 text-sm hover:border-primary/50 hover:neon-glow-orange transition-smooth">
                  <Mail className="h-4 w-4 text-primary" />
                  Go to Contact Page
                </a>
                <a href="mailto:support@wavely.com" className="inline-flex items-center gap-2 rounded-lg border border-border/40 bg-card px-5 py-3 text-sm hover:border-secondary/50 hover:neon-glow-blue transition-smooth">
                  <Mail className="h-4 w-4 text-secondary" />
                  support@wavely.com
                </a>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="rounded-xl border border-border/40 bg-card/50 backdrop-blur p-6 shadow-card">
                <h3 className="font-semibold font-poppins mb-2">Quick Links</h3>
                <div className="space-y-2 text-sm">
                  <a href="/how-it-works" className="block text-muted-foreground hover:text-primary transition-smooth">→ How It Works</a>
                  <a href="/faq" className="block text-muted-foreground hover:text-primary transition-smooth">→ FAQ</a>
                  <a href="/privacy-policy" className="block text-muted-foreground hover:text-primary transition-smooth">→ Privacy Policy</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;