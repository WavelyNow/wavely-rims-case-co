import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mesaj trimis cu succes!",
        description: "Îți vom răspunde în maxim 24 de ore.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 animate-fade-in">
            Hai să vorbim <span className="bg-gradient-accent bg-clip-text text-transparent">împreună</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Suntem aici să răspundem la toate întrebările tale despre produse, comenzi sau personalizare
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="bg-card/50 backdrop-blur rounded-xl p-8 border border-border/40 shadow-premium">
                <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-6">
                  Trimite-ne un mesaj
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nume complet</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Ion Popescu"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="transition-smooth"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="ion@exemplu.ro"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="transition-smooth"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subiect</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Întrebare despre comandă"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="transition-smooth"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mesaj</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Descrie întrebarea sau problema ta..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="transition-smooth resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-accent hover:shadow-glow transition-smooth font-semibold"
                  >
                    {isSubmitting ? "Se trimite..." : "Trimite mesajul"}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              
              {/* Contact Cards */}
              <div className="bg-card/50 backdrop-blur rounded-xl p-6 border border-border/40 shadow-card hover:shadow-premium transition-premium">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-poppins mb-2">Email</h3>
                    <a href="mailto:support@wavely.ro" className="text-muted-foreground hover:text-primary transition-smooth">
                      support@wavely.ro
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Răspundem în 24h
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card/50 backdrop-blur rounded-xl p-6 border border-border/40 shadow-card hover:shadow-premium transition-premium">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-poppins mb-2">Telefon</h3>
                    <a href="tel:+40756123456" className="text-muted-foreground hover:text-primary transition-smooth">
                      +40 756 123 456
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Luni - Vineri, 9:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card/50 backdrop-blur rounded-xl p-6 border border-border/40 shadow-card hover:shadow-premium transition-premium">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-poppins mb-2">Adresă</h3>
                    <p className="text-muted-foreground">
                      Str. Exemplu Nr. 123<br />
                      București, 010101<br />
                      România
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card/50 backdrop-blur rounded-xl p-6 border border-border/40 shadow-card hover:shadow-premium transition-premium">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-poppins mb-2">Program</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Luni - Vineri: 9:00 - 18:00</p>
                      <p>Sâmbătă: 10:00 - 14:00</p>
                      <p>Duminică: Închis</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-card/30 backdrop-blur rounded-xl p-6 border border-border/40">
                <h3 className="font-semibold font-poppins mb-4">Link-uri utile</h3>
                <div className="space-y-2">
                  <a href="/faq" className="block text-muted-foreground hover:text-primary transition-smooth">
                    → Întrebări frecvente
                  </a>
                  <a href="/return-policy" className="block text-muted-foreground hover:text-primary transition-smooth">
                    → Politica de returnare
                  </a>
                  <a href="/privacy-policy" className="block text-muted-foreground hover:text-primary transition-smooth">
                    → Politica de confidențialitate
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
