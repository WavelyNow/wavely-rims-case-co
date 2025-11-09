import { User, Menu, LogOut, UserCircle } from "lucide-react";
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
    <nav className="sticky top-0 z-50 w-full relative bg-gradient-to-b from-[#0b1324]/85 to-[#0a101b]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
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
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-heading font-semibold text-white/85 bg-white/5 border border-white/10 hover:text-white hover:bg-white/10 hover:border-primary/40 transition-smooth"
            >
              Collection
            </a>
            <a 
              href="/customize" 
              className="inline-flex items-center px-6 py-3 rounded-full text-lg font-heading font-extrabold text-white bg-gradient-to-r from-fuchsia-500 via-violet-500 to-blue-500 shadow-glow hover:shadow-neon hover:scale-[1.02] focus-visible:ring-4 focus-visible:ring-violet-400 transition-smooth uppercase tracking-wider"
            >
              Build Your Case
            </a>
            <a 
              href="/accessories" 
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-heading font-semibold text-white/85 bg-white/5 border border-white/10 hover:text-white hover:bg-white/10 hover:border-secondary/40 transition-smooth"
            >
              Accessories
            </a>
            <a 
              href="/about" 
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-heading font-semibold text-white/85 bg-white/5 border border-white/10 hover:text-white hover:bg-white/10 hover:border-accent/40 transition-smooth"
            >
              About
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-heading font-semibold text-white/85 bg-white/5 border border-white/10 hover:text-white hover:bg-white/10 hover:border-primary/40 transition-smooth"
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
          <div className="lg:hidden py-4 space-y-3 animate-fade-in border-t border-white/10 mt-2">
            <a 
              href="/shop" 
              className="block py-2 px-4 rounded-full text-sm font-heading font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              Collection
            </a>
            <a 
              href="/customize" 
              className="block py-3 px-5 rounded-full text-base font-heading font-extrabold text-white bg-gradient-to-r from-fuchsia-500 via-violet-500 to-blue-500 shadow-glow transition-smooth uppercase tracking-wider"
              onClick={() => setIsMenuOpen(false)}
            >
              Build Your Case
            </a>
            <a 
              href="/accessories" 
              className="block py-2 px-4 rounded-full text-sm font-heading font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              Accessories
            </a>
            <a 
              href="/about" 
              className="block py-2 px-4 rounded-full text-sm font-heading font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="/contact" 
              className="block py-2 px-4 rounded-full text-sm font-heading font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-smooth"
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
      {/* Neon gradient baseline */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-accent opacity-90" aria-hidden="true" />
    </nav>
  );
};

export default Navigation;
