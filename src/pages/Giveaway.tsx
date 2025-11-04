import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Gift, Calendar, Users, Loader2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Giveaway {
  id: string;
  title: string;
  description: string;
  prize_description: string;
  entry_requirement: string;
  max_entries: number | null;
  current_entries: number;
  start_date: string;
  end_date: string;
  is_active: boolean;
}

const Giveaway = () => {
  const [giveaways, setGiveaways] = useState<Giveaway[]>([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    loadGiveaways();
  }, []);

  const loadGiveaways = async () => {
    try {
      const { data, error } = await supabase
        .from('giveaways')
        .select('*')
        .eq('is_active', true)
        .order('end_date', { ascending: true });

      if (error) throw error;
      setGiveaways(data || []);
    } catch (error) {
      console.error('Error loading giveaways:', error);
      toast.error("Failed to load giveaways");
    } finally {
      setLoading(false);
    }
  };

  const handleEntry = async (giveawayId: string) => {
    if (!email || !fullName) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error("Please enter a valid email");
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('giveaway_entries')
        .insert({
          giveaway_id: giveawayId,
          email: email.toLowerCase(),
          full_name: fullName,
        });

      if (error) {
        if (error.code === '23505') {
          toast.error("You've already entered this giveaway!");
        } else {
          throw error;
        }
        return;
      }

      // Update entry count
      const currentGiveaway = giveaways.find(g => g.id === giveawayId);
      if (currentGiveaway) {
        await supabase
          .from('giveaways')
          .update({ current_entries: currentGiveaway.current_entries + 1 })
          .eq('id', giveawayId);
      }

      toast.success("Entry successful! 🎉", {
        description: "Good luck! We'll notify you if you win."
      });
      
      setEmail("");
      setFullName("");
      loadGiveaways();
    } catch (error) {
      console.error('Error submitting entry:', error);
      toast.error("Failed to submit entry");
    } finally {
      setIsSubmitting(false);
    }
  };

  const daysRemaining = (endDate: string) => {
    const days = Math.ceil((new Date(endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
    return days > 0 ? days : 0;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            <span className="bg-gradient-accent bg-clip-text text-transparent">Giveaways</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enter for a chance to win exclusive Wavely phone cases and prizes!
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : giveaways.length === 0 ? (
          <Card className="p-12 text-center">
            <Gift className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No active giveaways</h3>
            <p className="text-muted-foreground">Check back soon for new opportunities to win!</p>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {giveaways.map((giveaway) => (
              <Card key={giveaway.id} className="p-6 space-y-6 border-2 hover:border-primary/50 transition-all">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold font-poppins">{giveaway.title}</h3>
                    <Badge variant="secondary" className="bg-gradient-accent text-white">
                      <Calendar className="h-3 w-3 mr-1" />
                      {daysRemaining(giveaway.end_date)}d left
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground">{giveaway.description}</p>
                  
                  <div className="bg-gradient-premium p-4 rounded-lg border border-border/40">
                    <p className="text-sm font-medium mb-2">🎁 Prize:</p>
                    <p className="font-semibold">{giveaway.prize_description}</p>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{giveaway.current_entries} entries</span>
                    </div>
                    {giveaway.max_entries && (
                      <span>Max: {giveaway.max_entries}</span>
                    )}
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t">
                  <Input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button
                    onClick={() => handleEntry(giveaway.id)}
                    disabled={isSubmitting || !email || !fullName}
                    className="w-full bg-gradient-accent hover:shadow-glow transition-premium"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Gift className="h-4 w-4 mr-2" />
                        Enter Giveaway
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    By entering, you agree to our Terms & Privacy Policy
                  </p>
                </div>
              </Card>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

const Badge = ({ children, variant, className }: any) => (
  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${className}`}>
    {children}
  </span>
);

export default Giveaway;
