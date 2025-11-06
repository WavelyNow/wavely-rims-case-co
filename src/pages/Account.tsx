import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { User, Session } from "@supabase/supabase-js";
import { Loader2, User as UserIcon, Mail, Calendar, LogOut } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Account = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (!session?.user) {
          navigate("/auth");
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
      
      if (!session?.user) {
        navigate("/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      toast.success("Signed out successfully");
      navigate("/");
    } catch (error: any) {
      console.error("Sign out error:", error);
      toast.error("Failed to sign out");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            My <span className="bg-gradient-accent bg-clip-text text-transparent">Account</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="space-y-6">
          {/* Profile Card */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-border/40 hover:border-primary/50 transition-all">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-full bg-gradient-accent flex items-center justify-center flex-shrink-0">
                <UserIcon className="h-10 w-10 text-white" />
              </div>
              
              <div className="flex-1 space-y-4">
                <div>
                  <h2 className="text-2xl font-bold font-poppins mb-2">Profile Information</h2>
                  <p className="text-muted-foreground">Your account details</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Email:</span>
                    <span className="font-medium">{user.email}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Member since:</span>
                    <span className="font-medium">
                      {new Date(user.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-border/40">
            <h2 className="text-2xl font-bold font-poppins mb-6">Quick Actions</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="h-auto py-4 flex flex-col items-center gap-2 border-2 hover:border-primary/50 transition-all"
                onClick={() => navigate("/shop")}
              >
                <span className="text-2xl">🛍️</span>
                <span className="font-semibold">Browse Products</span>
              </Button>
              
              <Button
                variant="outline"
                className="h-auto py-4 flex flex-col items-center gap-2 border-2 hover:border-primary/50 transition-all"
                onClick={() => navigate("/customize")}
              >
                <span className="text-2xl">✨</span>
                <span className="font-semibold">Customize Case</span>
              </Button>
            </div>
          </Card>

          {/* Sign Out */}
          <Card className="p-6 bg-card/30 backdrop-blur-sm border-2 border-border/40">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold mb-1">Sign Out</h3>
                <p className="text-sm text-muted-foreground">Sign out from your account</p>
              </div>
              <Button
                variant="outline"
                onClick={handleSignOut}
                className="border-2 border-destructive/50 hover:bg-destructive/10 hover:border-destructive text-destructive"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Account;
