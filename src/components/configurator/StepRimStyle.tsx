import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { rimOptions } from "@/data/configuratorData";
import { RimOption } from "@/types/configurator";

interface StepRimStyleProps {
  selectedRim: string;
  onSelect: (rim: RimOption) => void;
  onNext: () => void;
  onBack: () => void;
}

const StepRimStyle = ({ selectedRim, onSelect, onNext, onBack }: StepRimStyleProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-poppins mb-2">Select Your Rim Style</h2>
        <p className="text-muted-foreground">Choose from 8 authentic automotive-inspired designs</p>
      </div>

      {/* Rim Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {rimOptions.map((rim) => (
          <button
            key={rim.id}
            onClick={() => onSelect(rim)}
            className={`group relative bg-card/50 backdrop-blur rounded-xl p-4 border-2 transition-premium hover:shadow-premium ${
              selectedRim === rim.id
                ? "border-primary shadow-premium"
                : "border-border/40 hover:border-primary/50"
            }`}
          >
            {rim.popular && (
              <Badge className="absolute top-2 right-2 bg-gradient-accent border-0 text-xs">
                Popular
              </Badge>
            )}

            {/* Rim Image with Rotation on Hover */}
            <div className="aspect-square mb-3 rounded-lg overflow-hidden bg-gradient-metallic">
              <img
                src={rim.image}
                alt={rim.name}
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:rotate-[360deg]"
              />
            </div>

            {/* Rim Info */}
            <div className="text-center space-y-1">
              <h3 className="font-semibold font-poppins text-sm">
                {rim.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                {rim.description}
              </p>
              <p className="text-lg font-bold text-primary">
                +${rim.price}
              </p>
            </div>

            {/* Selection Indicator */}
            {selectedRim === rim.id && (
              <div className="absolute inset-0 border-2 border-primary rounded-xl pointer-events-none">
                <div className="absolute top-2 left-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex gap-3">
        <Button
          onClick={onBack}
          variant="outline"
          size="lg"
          className="flex-1 border-secondary/30"
        >
          Back
        </Button>
        <Button
          onClick={onNext}
          disabled={!selectedRim}
          size="lg"
          className="flex-1 bg-gradient-accent hover:shadow-glow transition-premium font-semibold"
        >
          Continue to Photos
        </Button>
      </div>
    </div>
  );
};

export default StepRimStyle;
