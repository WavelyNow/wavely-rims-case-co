import React, { useEffect, useState } from "react";
import Logo from "./Logo";

const Footer = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 64);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer
      role="contentinfo"
      className={`mt-20 border-t border-border/40 backdrop-blur-sm transition-colors duration-300 ${
        scrolled ? "bg-card/40" : "bg-card/20"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Top: Brand + Navigation sections */}
        <div className="py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="space-y-4">
              <Logo className="group transition-transform duration-300 hover:scale-[1.03] focus-visible:scale-[1.03] outline-none" />
              <p className="text-sm text-muted-foreground">Your car. Your style. Your phone case.</p>
            </div>

            {/* Shop */}
            <nav aria-label="Shop">
              <h2 className="font-semibold font-poppins mb-4">Shop</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/shop" className="transition-colors duration-200 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm">All Products</a>
                </li>
                <li>
                  <a href="/customize" className="transition-colors duration-200 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm">Customize Now</a>
                </li>
                <li>
                  <a href="/shop" className="transition-colors duration-200 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm">Best Sellers</a>
                </li>
              </ul>
            </nav>

            {/* Support */}
            <nav aria-label="Support">
              <h2 className="font-semibold font-poppins mb-4">Support</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/faq" className="transition-colors duration-200 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm">FAQ</a>
                </li>
                <li>
                  <a href="/contact" className="transition-colors duration-200 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm">Contact</a>
                </li>
                <li>
                  <a href="/return-policy" className="transition-colors duration-200 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm">Returns & Refunds</a>
                </li>
                <li>
                  <a href="/giveaway" className="transition-colors duration-200 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm">Giveaways</a>
                </li>
                <li>
                  <a href="/referral" className="transition-colors duration-200 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm">Refer & Earn</a>
                </li>
              </ul>
            </nav>

            {/* Legal */}
            <nav aria-label="Legal">
              <h2 className="font-semibold font-poppins mb-4">Legal</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/privacy-policy" className="transition-colors duration-200 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms" className="transition-colors duration-200 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm">Terms & Conditions</a>
                </li>
                <li>
                  <a href="/cookie-policy" className="transition-colors duration-200 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm">Cookie Policy</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* ODR / Consumer info (kept from previous version) */}
        <div className="border-t border-border/40 pt-6 mb-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs text-muted-foreground">
              <p className="mb-2 font-semibold">Customer Support & Dispute Resolution</p>
              <p>
                EU ODR Platform: {" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p className="mt-2">Governing Law: United Kingdom</p>
            </div>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="border-t border-border/40 pt-6 text-center">
          <p className="text-sm text-muted-foreground select-none transition-colors duration-300">
            © 2025 Wavely. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
