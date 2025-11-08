import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RacingBackground from "@/components/RacingBackground";
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
        title: "Message sent successfully!",
        description: "We'll respond within 24 hours.",
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
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0">
        <RacingBackground />
      </div>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center relative z-10">
          <h1 className="font-racing text-4xl md:text-6xl mb-6 text-white uppercase tracking-wider animate-fade-in animate-glitch-text">
            Get in <span className="text-primary neon-glow-orange">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto animate-fade-in font-body">
            Questions about builds, orders, or customization? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="bg-card/50 backdrop-blur rounded-xl p-8 border border-border/40 shadow-premium">
                <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-6">
                  Send us a message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
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
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="transition-smooth"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Question about order"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="transition-smooth"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Describe your question or issue..."
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
                    {isSubmitting ? "Sending..." : "Send Message"}
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
                    <a href="mailto:support@wavely.com" className="text-muted-foreground hover:text-primary transition-smooth">
                      support@wavely.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Response within 24h
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
                    <h3 className="font-semibold font-poppins mb-2">Phone</h3>
                    <a href="tel:+40756123456" className="text-muted-foreground hover:text-primary transition-smooth">
                      +40 756 123 456
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Monday - Friday, 9:00 AM - 6:00 PM
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
                    <h3 className="font-semibold font-poppins mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      Example Street No. 123<br />
                      Bucharest, 010101<br />
                      Romania
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
                    <h3 className="font-semibold font-poppins mb-2">Schedule</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-card/30 backdrop-blur rounded-xl p-6 border border-border/40">
                <h3 className="font-semibold font-poppins mb-4">Useful Links</h3>
                <div className="space-y-2">
                  <a href="/faq" className="block text-muted-foreground hover:text-primary transition-smooth">
                    → Frequently Asked Questions
                  </a>
                  <a href="/return-policy" className="block text-muted-foreground hover:text-primary transition-smooth">
                    → Return Policy
                  </a>
                  <a href="/privacy-policy" className="block text-muted-foreground hover:text-primary transition-smooth">
                    → Privacy Policy
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
