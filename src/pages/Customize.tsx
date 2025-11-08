import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RacingBackground from "@/components/RacingBackground";
import ProgressBar from "@/components/configurator/ProgressBar";
import StepPhoneModel from "@/components/configurator/StepPhoneModel";
import StepRimStyle from "@/components/configurator/StepRimStyle";
import StepUploadPhoto from "@/components/configurator/StepUploadPhoto";
import StepMaterial from "@/components/configurator/StepMaterial";
import StepPersonalization from "@/components/configurator/StepPersonalization";
import { ConfiguratorState } from "@/types/configurator";
import { phoneModels } from "@/data/configuratorData";
import { toast } from "sonner";
import { ShoppingCart, Heart, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Customize = () => {
  const navigate = useNavigate();
  const [config, setConfig] = useState<ConfiguratorState>({
    phoneModel: "",
    phoneModelImage: "",
    rimStyle: "",
    rimPrice: 0,
    rimImage: "",
    carPhoto: null,
    carPhotoPreview: "",
    facePhoto: null,
    facePhotoPreview: "",
    licensePlateText: "",
    material: "",
    materialPrice: 0,
    customText: "",
    textColor: "white",
    textPosition: "bottom",
    currentStep: 1
  });

  // Preselect model from query params
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const modelId = searchParams.get("model");
    if (modelId) {
      const m = phoneModels.find((x) => x.id === modelId);
      if (m) {
        setConfig((prev) => ({
          ...prev,
          phoneModel: m.id,
          phoneModelImage: m.image
        }));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePhoneSelect = (model: any) => {
    setConfig({
      ...config,
      phoneModel: model.id,
      phoneModelImage: model.image
    });
  };

  const handleRimSelect = (rim: any) => {
    setConfig({
      ...config,
      rimStyle: rim.id,
      rimPrice: rim.price,
      rimImage: rim.image
    });
  };

  const handleMaterialSelect = (material: any) => {
    setConfig({
      ...config,
      material: material.id,
      materialPrice: material.price
    });
  };

  const handleCarPhotoChange = (file: File | null, preview: string) => {
    setConfig({ ...config, carPhoto: file, carPhotoPreview: preview });
  };

  const handleFacePhotoChange = (file: File | null, preview: string) => {
    setConfig({ ...config, facePhoto: file, facePhotoPreview: preview });
  };

  const handleLicensePlateChange = (text: string) => {
    setConfig({ ...config, licensePlateText: text });
  };

  const handleAddToCart = () => {
    toast.success("Added to cart! Redirecting to cart...");
    setTimeout(() => navigate("/cart"), 1500);
  };

  const handleAddToWishlist = () => {
    toast.success("Added to wishlist!");
  };

  const nextStep = () => {
    setConfig({ ...config, currentStep: config.currentStep + 1 });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevStep = () => {
    setConfig({ ...config, currentStep: config.currentStep - 1 });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const completeDesign = () => {
    toast.success("Design complete! Review your case and add to cart.");
  };

  const totalPrice = (
    35 +
    config.rimPrice +
    config.materialPrice +
    (config.carPhoto ? 5 : 0) +
    (config.facePhoto ? 3 : 0) +
    (config.customText ? 3 : 0)
  ).toFixed(2);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Racing Background */}
      <div className="fixed inset-0">
        <RacingBackground />
      </div>

      <Navigation />
      
      {/* Animated Progress Bar with glow */}
      <div className="sticky top-0 z-40 bg-gradient-to-b from-background via-background/95 to-transparent backdrop-blur-xl border-b border-primary/20 shadow-premium">
        <div className="absolute inset-0 bg-gradient-accent opacity-5" />
        <ProgressBar currentStep={config.currentStep} />
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-12 relative z-10">
        {/* Page header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="font-racing text-4xl md:text-6xl mb-3 text-white uppercase tracking-wider animate-glitch-text">
            Build Your <span className="text-primary neon-glow-orange">Legend</span>
          </h1>
          <p className="text-lg text-white/60 font-body">Create your street-inspired armor in 5 steps</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8 max-w-7xl mx-auto">
          {/* Left Panel - Configuration Steps */}
          <div className="animate-fade-in"  style={{ animationDelay: '200ms' }}>
            {config.currentStep === 1 && (
              <StepPhoneModel
                selectedModel={config.phoneModel}
                onSelect={handlePhoneSelect}
                onNext={nextStep}
              />
            )}

            {config.currentStep === 2 && (
              <StepRimStyle
                selectedRim={config.rimStyle}
                onSelect={handleRimSelect}
                onNext={nextStep}
                onBack={prevStep}
              />
            )}

            {config.currentStep === 3 && (
              <StepUploadPhoto
                carPhoto={config.carPhoto}
                carPhotoPreview={config.carPhotoPreview}
                facePhoto={config.facePhoto}
                facePhotoPreview={config.facePhotoPreview}
                licensePlateText={config.licensePlateText}
                onCarPhotoChange={handleCarPhotoChange}
                onFacePhotoChange={handleFacePhotoChange}
                onLicensePlateChange={handleLicensePlateChange}
                onNext={nextStep}
                onBack={prevStep}
              />
            )}

            {config.currentStep === 4 && (
              <StepMaterial
                selectedMaterial={config.material}
                onSelect={handleMaterialSelect}
                onNext={nextStep}
                onBack={prevStep}
              />
            )}

            {config.currentStep === 5 && (
              <StepPersonalization
                customText={config.customText}
                textColor={config.textColor}
                textPosition={config.textPosition}
                onTextChange={(text) => setConfig({ ...config, customText: text })}
                onColorChange={(color) => setConfig({ ...config, textColor: color })}
                onPositionChange={(position) => setConfig({ ...config, textPosition: position })}
                onComplete={completeDesign}
                onBack={prevStep}
              />
            )}
          </div>

          {/* Right Panel - Enhanced Summary Card */}
          <div className="lg:block hidden">
            <div className="sticky top-24 space-y-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
              {/* Summary Card */}
              <div className="relative rounded-3xl border-2 border-primary/30 bg-card/60 backdrop-blur-xl p-6 shadow-premium overflow-hidden group hover:border-primary/50 transition-all">
                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-premium opacity-10 group-hover:opacity-20 transition-opacity" />
                
                {/* Animated corner accents */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-accent opacity-20 blur-2xl rounded-full animate-pulse" style={{ animationDuration: '3s' }} />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-vibrant opacity-20 blur-2xl rounded-full animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-primary/20">
                    <div className="h-10 w-10 rounded-xl bg-gradient-accent flex items-center justify-center shadow-glow">
                      <Sparkles className="h-5 w-5 text-white animate-spin" style={{ animationDuration: '4s' }} />
                    </div>
                    <h3 className="text-xl font-bold font-poppins bg-gradient-accent bg-clip-text text-transparent">Your Design</h3>
                  </div>

                  {/* Price Breakdown */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Base Case</span>
                      <span className="font-semibold">$35.00</span>
                    </div>

                    {config.rimStyle && config.rimPrice > 0 && (
                      <div className="flex justify-between items-center py-2 animate-fade-in">
                        <span className="text-muted-foreground">
                          <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2" />
                          Rim: {config.rimStyle}
                        </span>
                        <span className="font-semibold text-primary">+${config.rimPrice.toFixed(2)}</span>
                      </div>
                    )}

                    {config.material && config.materialPrice > 0 && (
                      <div className="flex justify-between items-center py-2 animate-fade-in">
                        <span className="text-muted-foreground">
                          <span className="inline-block w-2 h-2 rounded-full bg-accent mr-2" />
                          Material: {config.material}
                        </span>
                        <span className="font-semibold text-accent">+${config.materialPrice.toFixed(2)}</span>
                      </div>
                    )}

                    {config.carPhoto && (
                      <div className="flex justify-between items-center py-2 animate-fade-in">
                        <span className="text-muted-foreground">
                          <span className="inline-block w-2 h-2 rounded-full bg-secondary mr-2" />
                          Car Photo
                        </span>
                        <span className="font-semibold text-secondary">+$5.00</span>
                      </div>
                    )}

                    {config.facePhoto && (
                      <div className="flex justify-between items-center py-2 animate-fade-in">
                        <span className="text-muted-foreground">
                          <span className="inline-block w-2 h-2 rounded-full bg-secondary mr-2" />
                          Face Photo
                        </span>
                        <span className="font-semibold text-secondary">+$3.00</span>
                      </div>
                    )}

                    {config.customText && (
                      <div className="flex justify-between items-center py-2 animate-fade-in">
                        <span className="text-muted-foreground">
                          <span className="inline-block w-2 h-2 rounded-full bg-secondary mr-2" />
                          Custom Text
                        </span>
                        <span className="font-semibold text-secondary">+$3.00</span>
                      </div>
                    )}
                  </div>

                  {/* Total */}
                  <div className="border-t border-border/40 pt-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">TOTAL</span>
                      <div className="text-right">
                        <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                          ${totalPrice}
                        </div>
                        <div className="text-xs text-muted-foreground">Free shipping</div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Button
                      onClick={handleAddToCart}
                      className="w-full h-14 bg-gradient-accent hover:shadow-neon transition-premium text-lg font-bold group relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        <ShoppingCart className="h-5 w-5 mr-2" />
                        Add to Cart
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-vibrant opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Button>
                    
                    <Button
                      onClick={handleAddToWishlist}
                      variant="outline"
                      className="w-full h-14 border-2 border-primary/40 hover:bg-primary/10 hover:border-primary transition-smooth text-lg font-bold group"
                    >
                      <Heart className="h-5 w-5 mr-2 group-hover:fill-primary group-hover:text-primary group-hover:scale-110 transition-all" />
                      Save to Wishlist
                    </Button>
                  </div>

                  {/* Trust Badges */}
                  <div className="mt-6 pt-6 border-t border-border/40 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      <span>Military-grade protection</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      <span>5-7 day fast delivery</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      <span>30-day return guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Floating Action Bar */}
      {config.currentStep === 5 && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-t from-background via-card/95 to-transparent backdrop-blur-xl border-t-2 border-primary/40 p-4 z-50 shadow-premium animate-slide-in-right">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-accent opacity-10 blur-xl" />
            <div className="relative flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Total</p>
                <p className="text-3xl font-black bg-gradient-accent bg-clip-text text-transparent animate-pulse" style={{ animationDuration: '3s' }}>
                  ${totalPrice}
                </p>
              </div>
              <Button
                onClick={handleAddToCart}
                className="px-6 py-3 h-14 bg-gradient-accent hover:shadow-neon transition-premium text-lg font-bold group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-vibrant opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Customize;
