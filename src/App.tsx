import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Customize from "./pages/Customize";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Accessories from "./pages/Accessories";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import ReturnPolicy from "./pages/ReturnPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";
import Giveaway from "./pages/Giveaway";
import Referral from "./pages/Referral";
import Auth from "./pages/Auth";
import Account from "./pages/Account";
import AdminLogin from "./pages/AdminLogin";
import DiscountCodes from "./pages/admin/DiscountCodes";
import PhoneCatalog from "./pages/PhoneCatalog";
import PhoneModelDetail from "./pages/PhoneModelDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/customize" element={<Customize />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/phones" element={<PhoneCatalog />} />
          <Route path="/phones/:id" element={<PhoneModelDetail />} />
          <Route path="/product/:handle" element={<Product />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/giveaway" element={<Giveaway />} />
          <Route path="/referral" element={<Referral />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/account" element={<Account />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/discount-codes" element={<DiscountCodes />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
