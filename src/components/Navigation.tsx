import { Heart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CartDrawer } from "@/components/CartDrawer";
import Logo from "@/components/Logo";
import CustomizeCTA from "@/components/CustomizeCTA";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <Button variant="ghost" size="icon" className="transition-smooth hover:text-primary hover:scale-110">
              <User className="h-5 w-5" />
            </Button>
            
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
