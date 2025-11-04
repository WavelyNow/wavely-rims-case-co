import { Heart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CartDrawer } from "@/components/CartDrawer";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold font-poppins tracking-tight">
              <span className="bg-gradient-accent bg-clip-text text-transparent">Wavely</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="/" className="text-sm font-medium transition-smooth hover:text-primary">
              Home
            </a>
            <Button 
              className="bg-gradient-accent hover:shadow-glow transition-smooth text-sm font-semibold h-9"
              onClick={() => window.location.href = '/customize'}
            >
              Customize Now
            </Button>
            <a href="/shop" className="text-sm font-medium transition-smooth hover:text-primary">
              Shop
            </a>
            <a href="/gallery" className="text-sm font-medium transition-smooth hover:text-primary">
              Gallery
            </a>
            <a href="/how-it-works" className="text-sm font-medium transition-smooth hover:text-primary">
              How It Works
            </a>
            <a href="/blog" className="text-sm font-medium transition-smooth hover:text-primary">
              Blog
            </a>
            <a href="/about" className="text-sm font-medium transition-smooth hover:text-primary">
              About
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
            <Button variant="ghost" size="icon" className="relative transition-smooth hover:text-primary">
              <Heart className="h-5 w-5" />
            </Button>
            <CartDrawer />
            <Button variant="ghost" size="icon" className="transition-smooth hover:text-primary">
              <User className="h-5 w-5" />
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
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
            <Button 
              className="w-full bg-gradient-accent hover:shadow-glow transition-smooth text-sm font-semibold"
              onClick={() => window.location.href = '/customize'}
            >
              Customize Now
            </Button>
            <a href="/shop" className="block text-sm font-medium transition-smooth hover:text-primary">
              Shop
            </a>
            <a href="/gallery" className="block text-sm font-medium transition-smooth hover:text-primary">
              Gallery
            </a>
            <a href="/how-it-works" className="block text-sm font-medium transition-smooth hover:text-primary">
              How It Works
            </a>
            <a href="/blog" className="block text-sm font-medium transition-smooth hover:text-primary">
              Blog
            </a>
            <a href="/about" className="block text-sm font-medium transition-smooth hover:text-primary">
              About
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
