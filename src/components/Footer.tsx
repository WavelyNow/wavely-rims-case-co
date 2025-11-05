import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/30 border-t border-border/40 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-poppins">
              <span className="bg-gradient-accent bg-clip-text text-transparent">Wavely</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              Your car. Your style. Your phone case.
            </p>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>SC WAVELY SRL</p>
              <p>VAT: RO[COMPLETE]</p>
              <p>J[XX]/[NNN]/[YYYY]</p>
              <p>Băiculești, Argeș, Romania</p>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold font-poppins mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/shop" className="transition-smooth hover:text-primary">
                  All Products
                </a>
              </li>
              <li>
                <a href="/customize" className="transition-smooth hover:text-primary">
                  Customize Now
                </a>
              </li>
              <li>
                <a href="/shop" className="transition-smooth hover:text-primary">
                  Best Sellers
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold font-poppins mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/giveaway" className="transition-smooth hover:text-primary">
                  Giveaways
                </a>
              </li>
              <li>
                <a href="/referral" className="transition-smooth hover:text-primary">
                  Refer & Earn
                </a>
              </li>
              <li>
                <a href="/faq" className="transition-smooth hover:text-primary">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contact" className="transition-smooth hover:text-primary">
                  Contact
                </a>
              </li>
              <li>
                <a href="/return-policy" className="transition-smooth hover:text-primary">
                  Returns & Refunds
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold font-poppins mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/privacy-policy" className="transition-smooth hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="transition-smooth hover:text-primary">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className="transition-smooth hover:text-primary">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ANPC */}
        <div className="border-t border-border/40 pt-6 mb-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs text-muted-foreground">
              <p className="mb-2">
                <strong>Alternative Dispute Resolution (ADR):</strong>
              </p>
              <p>
                EU ODR Platform:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p className="mt-2">
                <strong>National Authority for Consumer Protection (ANPC):</strong>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://anpc.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.anpc.ro
                </a>
              </p>
            </div>

            <a
              href="https://anpc.ro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <img
                src="https://anpc.ro/galerie/file_c0dac0f25e.png"
                alt="ANPC - Consumer Protection"
                className="h-16 opacity-70 hover:opacity-100 transition-smooth"
              />
            </a>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-border/40 pt-6 mb-6">
          <p className="text-xs text-muted-foreground mb-3 text-center">Payment Methods:</p>
          <div className="flex justify-center items-center gap-4 flex-wrap opacity-60">
            <span className="text-xs font-medium">Visa</span>
            <span className="text-xs font-medium">Mastercard</span>
            <span className="text-xs font-medium">PayPal</span>
            <span className="text-xs font-medium">Apple Pay</span>
            <span className="text-xs font-medium">Google Pay</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/40 pt-6 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © 2025 Wavely. All rights reserved. Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> in Romania
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
