import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Share2, Copy, Gift, Users, Check, Loader2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Referral = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateReferralCode = async () => {
    if (!email || !name) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error("Please enter a valid email");
      return;
    }

    setIsGenerating(true);
    try {
      // Generate unique code
      const code = `WAVELY${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
      
      const { error } = await supabase
        .from('referral_codes')
        .insert({
          code,
          referrer_email: email.toLowerCase(),
          referrer_name: name,
          reward_type: 'discount',
          reward_value: 10,
          referrer_reward_type: 'discount',
          referrer_reward_value: 15,
          max_uses: 50
        });

      if (error) {
        if (error.code === '23505') {
          toast.error("You already have a referral code!");
        } else {
          throw error;
        }
        return;
      }

      setReferralCode(code);
      toast.success("Referral code generated! 🎉", {
        description: "Share it with friends to earn rewards."
      });
    } catch (error) {
      console.error('Error generating referral code:', error);
      toast.error("Failed to generate referral code");
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    const referralLink = `${window.location.origin}?ref=${referralCode}`;
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOptions = [
    {
      name: "WhatsApp",
      icon: "📱",
      url: `https://wa.me/?text=Check out Wavely custom car rim phone cases! Use my code ${referralCode} for 10% off: ${window.location.origin}?ref=${referralCode}`
    },
    {
      name: "Facebook",
      icon: "👥",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin)}?ref=${referralCode}`
    },
    {
      name: "Email",
      icon: "✉️",
      url: `mailto:?subject=Check out Wavely&body=Get 10% off custom car rim phone cases with my code: ${referralCode}%0A${window.location.origin}?ref=${referralCode}`
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Refer <span className="bg-gradient-accent bg-clip-text text-transparent">& Earn</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Share Wavely with friends and both get rewarded!
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* How it Works */}
          <Card className="p-8 bg-gradient-premium border-2">
            <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-accent flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <h3 className="font-semibold">Get Your Code</h3>
                <p className="text-sm text-muted-foreground">
                  Generate your unique referral code below
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-accent flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <h3 className="font-semibold">Share with Friends</h3>
                <p className="text-sm text-muted-foreground">
                  They get 10% off their first order
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-accent flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <h3 className="font-semibold">You Get Rewarded</h3>
                <p className="text-sm text-muted-foreground">
                  Earn 15% off for each friend who orders
                </p>
              </div>
            </div>
          </Card>

          {/* Generate Code */}
          {!referralCode ? (
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Generate Your Referral Code</h2>
              <div className="max-w-md mx-auto space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  onClick={generateReferralCode}
                  disabled={isGenerating}
                  className="w-full bg-gradient-accent hover:shadow-glow transition-premium"
                  size="lg"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Gift className="h-4 w-4 mr-2" />
                      Generate My Code
                    </>
                  )}
                </Button>
              </div>
            </Card>
          ) : (
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Your Referral Code</h2>
              
              <div className="max-w-md mx-auto space-y-6">
                <div className="bg-gradient-metallic p-6 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-2">Your Code</p>
                  <p className="text-3xl font-bold font-mono tracking-wider">{referralCode}</p>
                </div>

                <div className="flex gap-2">
                  <Input
                    value={`${window.location.origin}?ref=${referralCode}`}
                    readOnly
                    className="flex-1"
                  />
                  <Button
                    onClick={copyToClipboard}
                    variant="outline"
                    size="icon"
                    className="flex-shrink-0"
                  >
                    {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-center text-muted-foreground mb-3">Share via:</p>
                  <div className="grid grid-cols-3 gap-3">
                    {shareOptions.map((option) => (
                      <Button
                        key={option.name}
                        variant="outline"
                        onClick={() => window.open(option.url, '_blank')}
                        className="flex flex-col items-center gap-2 h-auto py-4"
                      >
                        <span className="text-2xl">{option.icon}</span>
                        <span className="text-xs">{option.name}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Stats */}
          <Card className="p-8 bg-card/50">
            <h2 className="text-2xl font-bold mb-6 text-center">Rewards Breakdown</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="text-center p-6 bg-gradient-premium rounded-lg">
                <Users className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Your Friends Get</h3>
                <p className="text-3xl font-bold text-primary">10% OFF</p>
                <p className="text-sm text-muted-foreground mt-2">On their first order</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-premium rounded-lg">
                <Gift className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">You Earn</h3>
                <p className="text-3xl font-bold text-primary">15% OFF</p>
                <p className="text-sm text-muted-foreground mt-2">For each successful referral</p>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Referral;
