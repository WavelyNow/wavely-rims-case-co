import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { materialOptions } from "@/data/configuratorData";
import { MaterialOption } from "@/types/configurator";

interface StepMaterialProps {
  selectedMaterial: string;
  onSelect: (material: MaterialOption) => void;
  onNext: () => void;
  onBack: () => void;
  // Optional extended controls passed by parent, not used here but kept for API stability
  magSafeCompatible?: boolean;
  caseThickness?: string;
  texture?: string;
  protectionLevel?: string;
  onMagSafeChange?: (value: boolean) => void;
  onThicknessChange?: (value: string) => void;
  onTextureChange?: (value: string) => void;
  onProtectionChange?: (value: string) => void;
}

const StepMaterial = ({ selectedMaterial, onSelect, onNext, onBack }: StepMaterialProps) => {
  const groups = [
    { id: "soft", title: "Soft cases" },
    { id: "hard", title: "Hard cases" },
    { id: "premium", title: "Premium cases" },
  ];
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-poppins mb-2">Choose Your Case Type</h2>
        <p className="text-muted-foreground">Pick the case construction and features</p>
      </div>

      {/* Case type columns */}
      <div className="grid md:grid-cols-3 gap-6">
        {groups.map((g) => (
          <div key={g.id} className="space-y-3">
            <h3 className="text-xl font-bold font-poppins text-pink-500">{g.title}</h3>
            <div className="space-y-2">
              {materialOptions.filter((m) => m.group === g.id).map((material) => (
                <button
                  key={material.id}
                  onClick={() => onSelect(material)}
                  className={`flex items-center justify-between w-full rounded-lg border px-3 py-2 transition-smooth text-left ${
                    selectedMaterial === material.id
                      ? "border-primary bg-primary/10"
                      : "border-border/40 bg-card/50 hover:border-primary/40"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        selectedMaterial === material.id ? "border-primary" : "border-muted-foreground"
                      }`}
                      aria-hidden="true"
                    >
                      {selectedMaterial === material.id && <div className="w-2 h-2 rounded-full bg-primary" />}
                    </div>
                    <span className="font-medium">{material.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {material.isNew && <Badge className="bg-fuchsia-600">NEW</Badge>}
                    {material.popular && <Badge className="bg-orange-500">Popular</Badge>}
                    <span className="text-sm font-semibold text-primary">
                      {material.price === 0 ? "Included" : `+$${material.price}`}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
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
          Continue to Upload Photos
        </Button>
      </div>
    </div>
  );
};

export default StepMaterial;
