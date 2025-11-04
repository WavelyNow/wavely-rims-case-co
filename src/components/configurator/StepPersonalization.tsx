import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { textColors, textPositions } from "@/data/configuratorData";

interface StepPersonalizationProps {
  customText: string;
  textColor: string;
  textPosition: string;
  onTextChange: (text: string) => void;
  onColorChange: (color: string) => void;
  onPositionChange: (position: string) => void;
  onComplete: () => void;
  onBack: () => void;
}

const StepPersonalization = ({
  customText,
  textColor,
  textPosition,
  onTextChange,
  onColorChange,
  onPositionChange,
  onComplete,
  onBack
}: StepPersonalizationProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-poppins mb-2">Add Custom Text</h2>
        <p className="text-muted-foreground">Personalize with a name, message, or license plate</p>
        <p className="text-xs text-muted-foreground mt-1">(Optional)</p>
      </div>

      {/* Text Input */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold">Custom Text</label>
        <Input
          type="text"
          placeholder="Enter custom text"
          maxLength={12}
          value={customText}
          onChange={(e) => onTextChange(e.target.value)}
          className="h-14 text-lg text-center font-semibold bg-input/50 border-border/40"
        />
        <p className="text-xs text-muted-foreground text-center">
          {customText.length}/12 characters
        </p>
      </div>

      {/* Live Preview of Text */}
      {customText && (
        <div className="bg-gradient-metallic rounded-xl p-8 border border-border/40 text-center">
          <p className="text-sm text-muted-foreground mb-3">Preview:</p>
          <p
            className="text-3xl font-bold font-poppins"
            style={{ color: textColors.find((c) => c.id === textColor)?.hex }}
          >
            {customText}
          </p>
        </div>
      )}

      {/* Text Color Picker */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold">Text Color</label>
        <div className="flex gap-3 justify-center">
          {textColors.map((color) => (
            <button
              key={color.id}
              onClick={() => onColorChange(color.id)}
              className={`w-12 h-12 rounded-full border-2 transition-smooth hover:scale-110 ${
                textColor === color.id
                  ? "border-primary shadow-glow scale-110"
                  : "border-border/40"
              }`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            >
              {textColor === color.id && (
                <svg className="w-6 h-6 mx-auto text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ filter: "drop-shadow(0 0 2px rgba(0,0,0,0.5))" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Text Position */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold">Text Position</label>
        <div className="grid grid-cols-3 gap-3">
          {textPositions.map((position) => (
            <button
              key={position.id}
              onClick={() => onPositionChange(position.id)}
              className={`p-4 rounded-lg border-2 transition-smooth text-sm font-medium ${
                textPosition === position.id
                  ? "border-primary bg-primary/10"
                  : "border-border/40 bg-card/50 hover:border-primary/50"
              }`}
            >
              {position.name}
            </button>
          ))}
        </div>
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
          onClick={onComplete}
          size="lg"
          className="flex-1 bg-gradient-accent hover:shadow-glow transition-premium font-semibold"
        >
          Complete Design
        </Button>
      </div>
    </div>
  );
};

export default StepPersonalization;
