import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { materialOptions } from "@/data/configuratorData";
import { MaterialOption } from "@/types/configurator";

interface StepMaterialProps {
  selectedMaterial: string;
  onSelect: (material: MaterialOption) => void;
  onNext: () => void;
  onBack: () => void;
}

const StepMaterial = ({ selectedMaterial, onSelect, onNext, onBack }: StepMaterialProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-poppins mb-2">Choose Your Material</h2>
        <p className="text-muted-foreground">Select the finish that matches your style</p>
      </div>

      {/* Material Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {materialOptions.map((material) => (
          <button
            key={material.id}
            onClick={() => onSelect(material)}
            className={`relative p-6 rounded-xl border-2 transition-premium hover:shadow-premium text-left ${
              selectedMaterial === material.id
                ? "border-primary bg-primary/10 shadow-premium"
                : "border-border/40 bg-card/50 hover:border-primary/50"
            }`}
          >
            {material.popular && (
              <Badge className="absolute top-3 right-3 bg-gradient-accent border-0 text-xs">
                Most Popular
              </Badge>
            )}

            <div className="flex items-start gap-4">
              {/* Radio Button */}
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                  selectedMaterial === material.id
                    ? "border-primary"
                    : "border-muted-foreground"
                }`}
              >
                {selectedMaterial === material.id && (
                  <div className="w-3 h-3 rounded-full bg-primary" />
                )}
              </div>

              {/* Material Swatch */}
              <div className="w-20 h-20 rounded-lg overflow-hidden border border-border/40">
                <img
                  src={material.image}
                  alt={material.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Material Info */}
              <div className="flex-1">
                <h3 className="font-bold font-poppins text-lg mb-1">
                  {material.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {material.description}
                </p>
                <p className="text-xl font-bold text-primary">
                  {material.price === 0 ? "Included" : `+$${material.price}`}
                </p>
              </div>
            </div>
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
          disabled={!selectedMaterial}
          size="lg"
          className="flex-1 bg-gradient-accent hover:shadow-glow transition-premium font-semibold"
        >
          Continue to Personalization
        </Button>
      </div>
    </div>
  );
};

export default StepMaterial;
