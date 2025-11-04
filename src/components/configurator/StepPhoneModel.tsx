import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { phoneModels } from "@/data/configuratorData";
import { PhoneModel } from "@/types/configurator";

interface StepPhoneModelProps {
  selectedModel: string;
  onSelect: (model: PhoneModel) => void;
  onNext: () => void;
}

const StepPhoneModel = ({ selectedModel, onSelect, onNext }: StepPhoneModelProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredModels = phoneModels.filter((model) =>
    model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    model.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedModels = filteredModels.reduce((acc, model) => {
    if (!acc[model.brand]) {
      acc[model.brand] = [];
    }
    acc[model.brand].push(model);
    return acc;
  }, {} as Record<string, PhoneModel[]>);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-poppins mb-2">Choose Your Phone Model</h2>
        <p className="text-muted-foreground">Select your device for a perfect fit</p>
      </div>

      {/* Search */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search phone models..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 h-12 bg-input/50 border-border/40"
        />
      </div>

      {/* Phone Models Grid */}
      <div className="space-y-6 max-h-96 overflow-y-auto pr-2">
        {Object.entries(groupedModels).map(([brand, models]) => (
          <div key={brand} className="space-y-3">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              📱 {brand}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {models.map((model) => (
                <button
                  key={model.id}
                  onClick={() => onSelect(model)}
                  className={`p-4 rounded-lg border-2 transition-smooth hover:shadow-premium text-left ${
                    selectedModel === model.id
                      ? "border-primary bg-primary/10 shadow-premium"
                      : "border-border/40 bg-card/50 hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={model.image}
                      alt={model.name}
                      className="w-10 h-10 object-cover rounded"
                    />
                    <span className="text-sm font-medium">{model.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Selected Model Display */}
      {selectedModel && (
        <div className="bg-gradient-metallic rounded-lg p-4 border border-border/40">
          <p className="text-sm text-muted-foreground mb-2">Selected Model:</p>
          <div className="flex items-center gap-3">
            <img
              src={phoneModels.find((m) => m.id === selectedModel)?.image}
              alt="Selected"
              className="w-12 h-12 object-cover rounded"
            />
            <span className="font-semibold font-poppins">
              {phoneModels.find((m) => m.id === selectedModel)?.name}
            </span>
          </div>
        </div>
      )}

      <Button
        onClick={onNext}
        disabled={!selectedModel}
        size="lg"
        className="w-full bg-gradient-accent hover:shadow-glow transition-premium font-semibold"
      >
        Continue to Rim Selection
      </Button>
    </div>
  );
};

export default StepPhoneModel;
