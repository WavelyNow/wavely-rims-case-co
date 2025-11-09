import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RacingBackground from "@/components/RacingBackground";
import ProgressBar from "@/components/configurator/ProgressBar";
import StepPhoneModel from "@/components/configurator/StepPhoneModel";
import StepUploadPhoto from "@/components/configurator/StepUploadPhoto";
import StepMaterial from "@/components/configurator/StepMaterial";
import StepPersonalization from "@/components/configurator/StepPersonalization";
import { ConfiguratorState } from "@/types/configurator";
import { phoneModels } from "@/data/configuratorData";
import { toast } from "sonner";
import { ShoppingCart, Sparkles, ArrowRight, ShieldCheck, Truck, Lock } from "lucide-react";
import BrandGlyph from "@/components/BrandGlyph";
import { Button } from "@/components/ui/button";
import StarfieldBackground from "@/components/StarfieldBackground";

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
    magSafeCompatible: true,
    caseThickness: "standard",
    texture: "matte",
    protectionLevel: "standard",
    customText: "",
    textColor: "white",
    textPosition: "bottom",
    currentStep: 1
  });

  // Starfield intensity is fixed; no user control required
  const steps = ["Phone Model", "Material", "Upload Photos", "Personalization"];
  const selectedModel = phoneModels.find((m) => m.id === config.phoneModel);
  const canAddToCart = Boolean(config.phoneModel);

  // Opțiuni de layout și stări pentru afișare condiționată
  const [showWishlist, setShowWishlist] = useState(true);
  const [showBenefits, setShowBenefits] = useState(true);
  const [showShippingBadge, setShowShippingBadge] = useState(true);
  const [compactLayout, setCompactLayout] = useState(false);
  const [thumbLoaded, setThumbLoaded] = useState(false);
  useEffect(() => {
    setThumbLoaded(false);
  }, [config.phoneModel]);

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
    // Toggle selection: select locks in; clicking again deselects
    setConfig((prev) => ({
      ...prev,
      phoneModel: prev.phoneModel === model.id ? "" : model.id,
      phoneModelImage: prev.phoneModel === model.id ? "" : model.image
    }));
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

  const handleMagSafeChange = (value: boolean) => {
    setConfig({ ...config, magSafeCompatible: value });
  };
  const handleThicknessChange = (value: string) => {
    setConfig({ ...config, caseThickness: value });
  };
  const handleTextureChange = (value: string) => {
    setConfig({ ...config, texture: value });
  };
  const handleProtectionChange = (value: string) => {
    setConfig({ ...config, protectionLevel: value });
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
      <div className="sticky top-0 z-40 bg-gradient-to-b from-background via-background/95 to-transparent backdrop-blur-xl border-b border-primary/20 shadow-premium" role="navigation" aria-label="Progres configurare">
        <div className="absolute inset-0 bg-gradient-accent opacity-5" />
        <ProgressBar currentStep={config.currentStep} />
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-12 relative z-10" id="main-content">
        {/* Page header */}
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black/40 border-2 border-secondary/60 backdrop-blur-sm mb-6 animate-neon-pulse">
            <Sparkles className="h-5 w-5 text-secondary" />
            <span className="text-sm font-racing text-secondary uppercase tracking-widest">Configurator</span>
          </div>
          <h1 className="font-racing text-5xl md:text-7xl mb-4 text-white uppercase tracking-wider animate-glitch-text">
            Build Your <span className="text-primary neon-glow-orange">Legend</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-body">
            Design your street-inspired armor in a few guided steps
          </p>
          <div className="mt-6 flex justify-center">
            <Button
              variant="neon"
              size="lg"
              className="uppercase font-semibold"
              onClick={() => document.getElementById('main-content')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Build
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-primary" />
              <span className="text-sm">Fast shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-secondary" />
              <span className="text-sm">12-month warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-accent" />
              <span className="text-sm">Secure checkout</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8 max-w-7xl mx-auto">
          {/* Left Panel - Configuration Steps */}
          <div className="animate-fade-in"  style={{ animationDelay: '200ms' }} role="region" aria-live="polite" aria-label={`Pasul curent: ${config.currentStep} din 4`}>
            {/* Info banner removed: Rim style messaging deprecated */}
            {config.currentStep === 1 && (
              <StepPhoneModel
                selectedModel={config.phoneModel}
                onSelect={handlePhoneSelect}
              />
            )}
            {config.currentStep === 2 && (
              <StepMaterial
                selectedMaterial={config.material}
                onSelect={handleMaterialSelect}
                magSafeCompatible={config.magSafeCompatible}
                caseThickness={config.caseThickness}
                texture={config.texture}
                protectionLevel={config.protectionLevel}
                onMagSafeChange={handleMagSafeChange}
                onThicknessChange={handleThicknessChange}
                onTextureChange={handleTextureChange}
                onProtectionChange={handleProtectionChange}
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
              <div className="relative rounded-3xl border-2 border-primary/30 bg-card/60 backdrop-blur-xl p-6 shadow-premium overflow-hidden group hover:border-primary/50 transition-all" role="region" aria-label="Rezumat design">
                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-premium opacity-10 group-hover:opacity-20 transition-opacity" />
                
                {/* Animated corner accents */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-accent opacity-20 blur-2xl rounded-full animate-pulse" style={{ animationDuration: '3s' }} />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-vibrant opacity-20 blur-2xl rounded-full animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
                
                <div className="relative z-10">
                  {/* Header: clearer English title and continue CTA when applicable */}
                  <div className="mb-6 pb-4 border-b border-primary/20">
                    {config.currentStep === 1 && config.phoneModel ? (
                      <Button
                        onClick={nextStep}
                        aria-label="Continue to Material"
                        className="w-full h-12 bg-primary text-primary-foreground border-2 border-primary/70 shadow-neon hover:bg-primary/90 hover:border-primary focus-visible:ring-4 focus-visible:ring-primary/40 focus-visible:outline-none transition-smooth font-bold"
                      >
                        Continue to Material
                      </Button>
                    ) : (
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-gradient-accent flex items-center justify-center shadow-glow" aria-hidden="true">
                          <Sparkles className="h-5 w-5 text-white animate-spin" style={{ animationDuration: '4s' }} aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-bold font-poppins text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">Your Design</h3>
                      </div>
                    )}
                  </div>

                  {/* Opțiuni de layout (afișare/ascundere componente secundare) */}
                  <details className="mb-4">
                    <summary className="cursor-pointer text-xs text-muted-foreground">Layout options</summary>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <label className="flex items-center gap-2 text-xs">
                        <input type="checkbox" checked={showShippingBadge} onChange={(e) => setShowShippingBadge(e.target.checked)} />
                        Show shipping badge
                      </label>
                      <label className="flex items-center gap-2 text-xs">
                        <input type="checkbox" checked={showWishlist} onChange={(e) => setShowWishlist(e.target.checked)} />
                        Show wishlist button
                      </label>
                      <label className="flex items-center gap-2 text-xs">
                        <input type="checkbox" checked={showBenefits} onChange={(e) => setShowBenefits(e.target.checked)} />
                        Show benefits
                      </label>
                      <label className="flex items-center gap-2 text-xs">
                        <input type="checkbox" checked={compactLayout} onChange={(e) => setCompactLayout(e.target.checked)} />
                        Compact spacing
                      </label>
                    </div>
                  </details>

                  {/* Road‑map vertical al pașilor */}
                  <div className={`mb-5 ${compactLayout ? 'space-y-2' : 'space-y-3'}`} role="list" aria-label="Pașii configurării">
                    <div className="relative pl-4 before:absolute before:left-2 before:top-0 before:h-full before:w-px before:bg-border/40">
                      {steps.map((label, idx) => {
                        const stepNum = idx + 1;
                        const isCurrent = stepNum === config.currentStep;
                        const isDone = stepNum < config.currentStep;
                        return (
                          <div
                            role="listitem"
                            aria-current={isCurrent ? 'step' : undefined}
                            key={label}
                            className={`flex items-center ${compactLayout ? 'py-1' : 'py-1.5'} transition-colors`}
                          >
                            <span className={`inline-block w-2 h-2 rounded-full mr-3 ${isCurrent ? 'bg-primary' : isDone ? 'bg-primary/50' : 'bg-border/60'}`} />
                            <span className={`text-xs font-semibold ${isCurrent ? 'text-white' : isDone ? 'text-primary' : 'text-muted-foreground'}`}>
                              {stepNum}. {label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Label when continue button is shown */}
                  {config.currentStep === 1 && config.phoneModel && (
                    <h4 className="text-sm font-bold text-muted-foreground mb-3">Your Design</h4>
                  )}

                  {/* Price Breakdown */}
                  <div className="space-y-3 mb-6">
                    <div className={`flex justify-between items-center ${compactLayout ? 'py-2' : 'py-3'}`}>
                      <div className="flex items-center">
                        {selectedModel && (
                          <div className="h-8 w-8 rounded-md mr-3 overflow-hidden">
                            {!thumbLoaded && (
                              <div className="h-full w-full bg-card/40 animate-pulse" aria-label="Loading image" />
                            )}
                            <img
                              src={selectedModel.image}
                              alt={selectedModel.name}
                              className={`h-8 w-8 object-cover ${thumbLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                              onLoad={() => setThumbLoaded(true)}
                            />
                          </div>
                        )}
                        <span className="text-muted-foreground">Base Case</span>
                        {selectedModel && (
                          <span className="ml-2 text-xs text-muted-foreground">• {selectedModel.name}</span>
                        )}
                      </div>
                      <span className="font-semibold">$35.00</span>
                    </div>

                    {/* Rim line item removed temporarily */}

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
                  <div className="border-t border-border/40 pt-4 mb-6" aria-live="polite" aria-atomic="true">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">Total</span>
                      <div className="text-right">
                        <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                          ${totalPrice}
                        </div>
                        {showShippingBadge && (
                          <div className="text-xs text-muted-foreground transition-opacity">Free shipping</div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Button
                      onClick={handleAddToCart}
                      aria-label="Add to Cart"
                      disabled={!canAddToCart}
                      className="w-full h-14 bg-gradient-accent hover:shadow-neon transition-premium text-lg font-bold group relative overflow-hidden focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        <ShoppingCart className="h-5 w-5 mr-2" aria-hidden="true" />
                        Add to Cart
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-vibrant opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Button>
                    
                    {showWishlist && (
                      <Button
                        onClick={handleAddToWishlist}
                        variant="outline"
                        aria-label="Save to Wishlist"
                        className="w-full h-14 border-2 border-primary/40 hover:bg-primary/10 hover:border-primary transition-smooth text-lg font-bold group focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none"
                      >
                        <BrandGlyph className="h-5 w-5 mr-2 group-hover:opacity-90 group-hover:scale-110 transition-all" title="Wavely" />
                        Save to Wishlist
                      </Button>
                    )}
                  </div>

                  {/* Trust Badges */}
                  {showBenefits && (
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
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Floating Action Bar */}
      {config.currentStep === 4 && (
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
                aria-label="Add to Cart"
                disabled={!canAddToCart}
                className="px-6 py-3 h-14 bg-gradient-accent hover:shadow-neon transition-premium text-lg font-bold group relative overflow-hidden focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none"
              >
                <span className="relative z-10 flex items-center">
                  <ShoppingCart className="h-5 w-5 mr-2" aria-hidden="true" />
                  Add to Cart
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
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
