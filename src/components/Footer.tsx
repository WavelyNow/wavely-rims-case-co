import React from "react";
import Logo from "./Logo";
import { Instagram, Twitter, Facebook, Youtube, Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer
      role="contentinfo"
      className="relative mt-20 border-t-2 border-primary/40 overflow-hidden bg-black"
    >
      {/* Subtle accent line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-primary/40" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Top: Brand Story + Navigation sections */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand Story */}
            <div className="lg:col-span-2 space-y-6">
              <Logo className="group transition-transform duration-300 hover:scale-105 focus-visible:scale-105 outline-none" />
              <div className="space-y-4">
                <h3 className="text-xl font-racing uppercase tracking-wider text-primary">
                  Street Tested. Race Proven.
                </h3>
                <p className="text-sm text-white/60 leading-relaxed font-body">
                  Wavely Garage merges underground racing culture with premium phone protection. 
                  Every case is a tribute to the illegal street racing scene and the drivers who live for the rush.
                </p>
                <p className="text-xs text-white/40 italic font-body">
                  Born from the streets. Built for speed.
                </p>
              </div>

              {/* Social Media */}
              <div className="space-y-3">
                <h4 className="text-sm font-racing uppercase tracking-wider text-primary">Join The Crew</h4>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram, url: "https://instagram.com" },
                    { icon: Twitter, url: "https://twitter.com" },
                    { icon: Facebook, url: "https://facebook.com" },
                    { icon: Youtube, url: "https://youtube.com" }
                  ].map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={i}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all hover:scale-110"
                        aria-label={`Visit our ${social.icon.name}`}
                      >
                        <Icon className="h-5 w-5 text-primary" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Shop */}
            <nav aria-label="Shop">
              <h2 className="font-racing mb-6 uppercase tracking-wider text-sm flex items-center gap-2 text-primary">
                <Zap className="h-4 w-4 text-primary" />
                Shop
              </h2>
              <ul className="space-y-3 text-sm text-white/60 font-body">
                <li>
                  <a href="/shop" className="transition-colors duration-200 hover:text-primary hover:translate-x-1 inline-block">
                    All Builds
                  </a>
                </li>
                <li>
                  <a href="/customize" className="transition-colors duration-200 hover:text-primary hover:translate-x-1 inline-block focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm">
                    Customize Now
                  </a>
                </li>
                <li>
                  <a href="/shop" className="transition-colors duration-200 hover:text-primary hover:translate-x-1 inline-block focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm">
                    Best Sellers
                  </a>
                </li>
                <li>
                  <a href="/how-it-works" className="transition-colors duration-200 hover:text-primary hover:translate-x-1 inline-block focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm">
                    How It Works
                  </a>
                </li>
              </ul>
            </nav>

            {/* Support */}
            <nav aria-label="Support">
              <h2 className="font-black font-poppins mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                Support
              </h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="/faq" className="transition-colors duration-200 hover:text-primary hover:translate-x-1 inline-block focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/contact" className="transition-colors duration-200 hover:text-primary hover:translate-x-1 inline-block focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/return-policy" className="transition-colors duration-200 hover:text-primary hover:translate-x-1 inline-block focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm">
                    Returns & Refunds
                  </a>
                </li>
                <li>
                  <a href="/giveaway" className="transition-colors duration-200 hover:text-primary hover:translate-x-1 inline-block focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm">
                    Giveaways
                  </a>
                </li>
                <li>
                  <a href="/referral" className="transition-colors duration-200 hover:text-primary hover:translate-x-1 inline-block focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm">
                    Refer & Earn
                  </a>
                </li>
              </ul>
            </nav>

            {/* Legal */}
            <nav aria-label="Legal">
              <h2 className="font-black font-poppins mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                Legal
              </h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="/privacy-policy" className="transition-colors duration-200 hover:text-primary hover:translate-x-1 inline-block focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="transition-colors duration-200 hover:text-primary hover:translate-x-1 inline-block focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="/cookie-policy" className="transition-colors duration-200 hover:text-primary hover:translate-x-1 inline-block focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* ODR / Consumer info */}
        <div className="border-t border-border/40 pt-8 pb-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs text-muted-foreground">
              <p className="mb-2 font-semibold">Customer Support & Dispute Resolution</p>
              <p>
                EU ODR Platform: {" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p className="mt-2">Governing Law: United Kingdom</p>
            </div>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="border-t border-primary/20 pt-6 pb-8 text-center">
          <p className="text-sm text-muted-foreground select-none transition-colors duration-300 font-semibold">
            © 2025 Wavely Garage. All rights reserved. <span className="text-primary">Made with 🏁 for car enthusiasts</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
