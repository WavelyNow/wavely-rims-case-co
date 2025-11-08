import { Heart, User, Menu, LogOut, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartDrawer } from "@/components/CartDrawer";
import Logo from "@/components/Logo";
import CustomizeCTA from "@/components/CustomizeCTA";
import { supabase } from "@/integrations/supabase/client";
import { User as SupabaseUser, Session } from "@supabase/supabase-js";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

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

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary/30 bg-black/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between gap-2">
          {/* Logo - Scaled for mobile */}
          <div className="flex items-center shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a 
              href="/shop" 
              className="text-sm font-heading font-semibold text-white/80 hover:text-primary transition-smooth hover:neon-glow-orange uppercase tracking-wider"
            >
              Collection
            </a>
            <a 
              href="/how-it-works" 
              className="text-sm font-heading font-semibold text-white/80 hover:text-secondary transition-smooth hover:neon-glow-blue uppercase tracking-wider"
            >
              How It Works
            </a>
            <a 
              href="/about" 
              className="text-sm font-heading font-semibold text-white/80 hover:text-accent transition-smooth hover:neon-glow-green uppercase tracking-wider"
            >
              About
            </a>
            <a 
              href="/contact" 
              className="text-sm font-heading font-semibold text-white/80 hover:text-primary transition-smooth hover:neon-glow-orange uppercase tracking-wider"
            >
              Contact
            </a>
          </div>

          {/* Icons - Mobile Optimized with proper tap targets */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
            <CartDrawer />
            
            {/* Account Menu */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-white hover:text-primary transition-smooth h-11 w-11 sm:h-10 sm:w-10"
                  >
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium truncate">{user.email}</p>
                    <p className="text-xs text-muted-foreground">Wavely Member</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate("/account")}>
                    <UserCircle className="h-4 w-4 mr-2" />
                    My Account
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="text-destructive">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:text-primary transition-smooth h-11 w-11 sm:h-10 sm:w-10"
                onClick={() => navigate("/auth")}
              >
                <User className="h-5 w-5" />
              </Button>
            )}
            
            {/* Mobile menu button - 44px tap target */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:text-primary transition-smooth h-11 w-11"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-4 animate-fade-in border-t border-primary/30 mt-2">
            <a 
              href="/shop" 
              className="block py-2 text-sm font-heading font-semibold text-white hover:text-primary transition-smooth uppercase tracking-wider"
              onClick={() => setIsMenuOpen(false)}
            >
              Collection
            </a>
            <a 
              href="/how-it-works" 
              className="block py-2 text-sm font-heading font-semibold text-white hover:text-secondary transition-smooth uppercase tracking-wider"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="/about" 
              className="block py-2 text-sm font-heading font-semibold text-white hover:text-accent transition-smooth uppercase tracking-wider"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="/contact" 
              className="block py-2 text-sm font-heading font-semibold text-white hover:text-primary transition-smooth uppercase tracking-wider"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div onClick={() => setIsMenuOpen(false)}>
              <CustomizeCTA location="nav-mobile" size="md" fullWidth />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
