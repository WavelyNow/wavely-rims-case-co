import { Check } from "lucide-react";

interface ProgressBarProps {
  currentStep: number;
}

const steps = [
  { id: 1, name: "Phone Model" },
  { id: 2, name: "Material" },
  { id: 3, name: "Upload Photos" },
  { id: 4, name: "Personalization" }
];

const ProgressBar = ({ currentStep }: ProgressBarProps) => {
  return (
    <div className="w-full bg-card/50 backdrop-blur border-b border-border/40 py-6 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1">
              {/* Step Circle */}
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-smooth ${
                    currentStep > step.id
                      ? "bg-green-500 text-white"
                      : currentStep === step.id
                      ? "bg-gradient-accent text-white shadow-glow"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {currentStep > step.id ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    step.id
                  )}
                </div>
                <span
                  className={`text-xs mt-2 text-center font-medium ${
                    currentStep >= step.id ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {step.name}
                </span>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div
                  className={`h-0.5 flex-1 mx-2 transition-smooth ${
                    currentStep > step.id ? "bg-green-500" : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
