import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Customize from "./pages/Customize";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import ReturnPolicy from "./pages/ReturnPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";
import Giveaway from "./pages/Giveaway";
import Referral from "./pages/Referral";
import AdminLogin from "./pages/AdminLogin";
import DiscountCodes from "./pages/admin/DiscountCodes";

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
          <Route path="/product/:handle" element={<Product />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/giveaway" element={<Giveaway />} />
          <Route path="/referral" element={<Referral />} />
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
