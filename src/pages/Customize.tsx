import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ProgressBar from "@/components/configurator/ProgressBar";
import StepPhoneModel from "@/components/configurator/StepPhoneModel";
import StepRimStyle from "@/components/configurator/StepRimStyle";
import StepUploadPhoto from "@/components/configurator/StepUploadPhoto";
import StepMaterial from "@/components/configurator/StepMaterial";
import StepPersonalization from "@/components/configurator/StepPersonalization";
import LivePreview from "@/components/configurator/LivePreview";
import { ConfiguratorState } from "@/types/configurator";
import { toast } from "sonner";

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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ProgressBar currentStep={config.currentStep} />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Panel - Configuration Steps */}
          <div className="lg:pr-8">
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

          {/* Right Panel - Live Preview (Sticky on Desktop) */}
          <div className="lg:block hidden">
            <LivePreview
              config={config}
              onAddToCart={handleAddToCart}
              onAddToWishlist={handleAddToWishlist}
            />
          </div>

          {/* Mobile Preview (Bottom) */}
          {config.currentStep === 5 && (
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur border-t border-border/40 p-4 z-50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Total</p>
                  <p className="text-2xl font-bold text-primary">
                    ${(35 + config.rimPrice + config.materialPrice + (config.carPhoto ? 5 : 0) + (config.facePhoto ? 3 : 0) + (config.customText ? 3 : 0)).toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="px-6 py-3 bg-gradient-accent rounded-lg font-semibold text-white shadow-glow"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Customize;
