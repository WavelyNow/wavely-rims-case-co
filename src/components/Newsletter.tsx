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
    <section className="py-16 px-4 bg-card border-y border-primary/20 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center animate-scale-in">
            <Mail className="h-8 w-8 text-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            Get 10% Off Your First Order
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8">
            Plus exclusive designs & early access to new collections
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12"
            />
            <Button 
              type="submit"
              size="lg"
              className="bg-primary hover:bg-primary/90 transition-smooth font-semibold"
            >
              Subscribe
            </Button>
          </form>

          <p className="text-muted-foreground text-xs mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
