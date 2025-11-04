import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import StyleQuiz from "@/components/StyleQuiz";
import FeaturedProducts from "@/components/FeaturedProducts";
import HowItWorks from "@/components/HowItWorks";
import RimShowcase from "@/components/RimShowcase";
import CustomerShowcase from "@/components/CustomerShowcase";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustBadges />
      <StyleQuiz />
      <FeaturedProducts />
      <HowItWorks />
      <RimShowcase />
      <CustomerShowcase />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Index;
