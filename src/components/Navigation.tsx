import { ShoppingCart, Heart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-sm font-medium transition-smooth hover:text-primary">
              Home
            </a>
            <a href="/customize" className="text-sm font-medium transition-smooth hover:text-primary">
              Customize
            </a>
            <a href="/shop" className="text-sm font-medium transition-smooth hover:text-primary">
              Shop
            </a>
            <a href="/gallery" className="text-sm font-medium transition-smooth hover:text-primary">
              Gallery
            </a>
            <a href="/faq" className="text-sm font-medium transition-smooth hover:text-primary">
              FAQ
            </a>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative transition-smooth hover:text-primary">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative transition-smooth hover:text-primary">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                0
              </span>
            </Button>
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
          <div className="md:hidden py-4 space-y-3 animate-fade-in">
            <a href="/" className="block text-sm font-medium transition-smooth hover:text-primary">
              Home
            </a>
            <a href="/customize" className="block text-sm font-medium transition-smooth hover:text-primary">
              Customize
            </a>
            <a href="/shop" className="block text-sm font-medium transition-smooth hover:text-primary">
              Shop
            </a>
            <a href="/gallery" className="block text-sm font-medium transition-smooth hover:text-primary">
              Gallery
            </a>
            <a href="/faq" className="block text-sm font-medium transition-smooth hover:text-primary">
              FAQ
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
