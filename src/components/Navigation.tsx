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
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            {/* Use accessible SVG logo with text fallback */}
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="/" className="text-sm font-medium transition-smooth hover:text-primary">
              Home
            </a>
            <CustomizeCTA location="nav-desktop" size="sm" />
            <a href="/shop" className="text-sm font-medium transition-smooth hover:text-primary">
              Shop
            </a>
            <a href="/how-it-works" className="text-sm font-medium transition-smooth hover:text-primary">
              How It Works
            </a>
            <a href="/faq" className="text-sm font-medium transition-smooth hover:text-primary">
              FAQ
            </a>
            <a href="/contact" className="text-sm font-medium transition-smooth hover:text-primary">
              Contact
            </a>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative transition-smooth hover:text-primary hover:scale-110 group">
              <Heart className="h-5 w-5 group-hover:fill-red-500 group-hover:text-red-500 transition-smooth" />
            </Button>
            <CartDrawer />
            
            {/* Account Menu */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="transition-smooth hover:text-primary hover:scale-110">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium">{user.email}</p>
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
                className="transition-smooth hover:text-primary hover:scale-110"
                onClick={() => navigate("/auth")}
              >
                <User className="h-5 w-5" />
              </Button>
            )}
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:scale-110 transition-smooth"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-3 animate-fade-in border-t border-border/40 mt-4">
            <a href="/" className="block text-sm font-medium transition-smooth hover:text-primary">
              Home
            </a>
            <CustomizeCTA location="nav-mobile" size="md" fullWidth />
            <a href="/shop" className="block text-sm font-medium transition-smooth hover:text-primary">
              Shop
            </a>
            <a href="/how-it-works" className="block text-sm font-medium transition-smooth hover:text-primary">
              How It Works
            </a>
            <a href="/faq" className="block text-sm font-medium transition-smooth hover:text-primary">
              FAQ
            </a>
            <a href="/contact" className="block text-sm font-medium transition-smooth hover:text-primary">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
