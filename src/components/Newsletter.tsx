import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    toast.success("Welcome! Check your email for your 10% discount code");
    setEmail("");
  };

  return (
    <section className="py-16 px-4 bg-gradient-accent relative overflow-hidden">
      {/* Decorative animated elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDuration: "3s" }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDuration: "4s", animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur flex items-center justify-center animate-scale-in shadow-glow">
            <Mail className="h-8 w-8 text-white" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-4">
            Get 10% Off Your First Order
          </h2>
          
          <p className="text-white/90 text-lg mb-8">
            Plus exclusive designs & early access to new rim styles
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/60 backdrop-blur focus:bg-white/30 transition-smooth h-12"
            />
            <Button 
              type="submit"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-premium font-semibold shadow-glow"
            >
              Subscribe
            </Button>
          </form>

          <p className="text-white/70 text-xs mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
