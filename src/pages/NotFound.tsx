import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="text-center px-4">
          <h1 className="mb-4 text-6xl font-bold font-poppins bg-gradient-accent bg-clip-text text-transparent">404</h1>
          <p className="mb-4 text-2xl font-semibold">Oops! Pagina nu există</p>
          <p className="mb-8 text-muted-foreground">Ne pare rău, dar pagina pe care o cauți nu a fost găsită.</p>
          <a 
            href="/" 
            className="inline-block px-6 py-3 bg-gradient-accent rounded-lg font-semibold text-white shadow-glow hover:shadow-xl transition-premium"
          >
            Înapoi la Homepage
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
