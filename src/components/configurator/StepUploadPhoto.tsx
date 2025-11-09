import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, X, Camera, Hash } from "lucide-react";
import { toast } from "sonner";

interface StepUploadPhotoProps {
  carPhoto: File | null;
  carPhotoPreview: string;
  facePhoto: File | null;
  facePhotoPreview: string;
  licensePlateText: string;
  onCarPhotoChange: (file: File | null, preview: string) => void;
  onFacePhotoChange: (file: File | null, preview: string) => void;
  onLicensePlateChange: (text: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const StepUploadPhoto = ({
  carPhoto,
  carPhotoPreview,
  facePhoto,
  facePhotoPreview,
  licensePlateText,
  onCarPhotoChange,
  onFacePhotoChange,
  onLicensePlateChange,
  onNext,
  onBack
}: StepUploadPhotoProps) => {
  const carInputRef = useRef<HTMLInputElement>(null);
  const faceInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "car" | "face"
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file size (10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast.error("File size must be less than 10MB");
      return;
    }

    // Validate file type
    const validTypes = ["image/jpeg", "image/png", "image/heic"];
    if (!validTypes.includes(file.type)) {
      toast.error("Only JPG, PNG, and HEIC formats are supported");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const preview = reader.result as string;
      if (type === "car") {
        onCarPhotoChange(file, preview);
      } else {
        onFacePhotoChange(file, preview);
      }
    };
    reader.readAsDataURL(file);
  };

  const removePhoto = (type: "car" | "face") => {
    if (type === "car") {
      onCarPhotoChange(null, "");
      if (carInputRef.current) carInputRef.current.value = "";
    } else {
      onFacePhotoChange(null, "");
      if (faceInputRef.current) faceInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-poppins mb-2">Make It Personal</h2>
        <p className="text-muted-foreground">Upload photos and add custom details</p>
      </div>

      {/* Main Car Photo Upload */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold">
          Car Photo <span className="text-muted-foreground font-normal">(Recommended)</span>
        </label>
        
        {!carPhotoPreview ? (
          <div
            onClick={() => carInputRef.current?.click()}
            className="border-2 border-dashed border-border/40 rounded-xl p-8 text-center cursor-pointer hover:border-primary/50 transition-smooth bg-card/30 hover:bg-card/50"
          >
            <Camera className="h-12 w-12 mx-auto mb-3 text-muted-foreground" />
            <p className="font-semibold mb-1">Upload Your Car Photo</p>
            <p className="text-sm text-muted-foreground mb-3">
              Drag & drop or click to browse
            </p>
            <p className="text-xs text-muted-foreground">
              Max size: 10MB • Formats: JPG, PNG, HEIC
            </p>
          </div>
        ) : (
          <div className="relative rounded-xl overflow-hidden border-2 border-primary">
            <img
              src={carPhotoPreview}
              alt="Car preview"
              className="w-full h-48 object-cover"
            />
            <button
              onClick={() => removePhoto("car")}
              className="absolute top-2 right-2 p-2 bg-destructive hover:bg-destructive/90 text-white rounded-full transition-smooth"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}
        
        <input
          ref={carInputRef}
          type="file"
          accept="image/jpeg,image/png,image/heic"
          onChange={(e) => handleFileChange(e, "car")}
          className="hidden"
        />
      </div>

      {/* Optional Additions */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Face/Portrait Upload */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold">
            Face/Portrait <span className="text-xs text-muted-foreground">(+$3 optional)</span>
          </label>
          
          {!facePhotoPreview ? (
            <div
              onClick={() => faceInputRef.current?.click()}
              className="border-2 border-dashed border-border/40 rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 transition-smooth bg-card/30"
            >
              <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm font-semibold">Upload Photo</p>
            </div>
          ) : (
            <div className="relative rounded-lg overflow-hidden border-2 border-primary">
              <img
                src={facePhotoPreview}
                alt="Face preview"
                className="w-full h-32 object-cover"
              />
              <button
                onClick={() => removePhoto("face")}
                className="absolute top-1 right-1 p-1 bg-destructive hover:bg-destructive/90 text-white rounded-full"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          )}
          
          <input
            ref={faceInputRef}
            type="file"
            accept="image/jpeg,image/png,image/heic"
            onChange={(e) => handleFileChange(e, "face")}
            className="hidden"
          />
        </div>

        {/* License Plate Text */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold">
            License Plate Text <span className="text-xs text-muted-foreground">(Optional)</span>
          </label>
          <div className="relative">
            <Hash className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Enter plate text"
              maxLength={8}
              value={licensePlateText}
              onChange={(e) => onLicensePlateChange(e.target.value.toUpperCase())}
              className="pl-10 h-12 bg-input/50 border-border/40 font-mono uppercase"
            />
          </div>
          <p className="text-xs text-muted-foreground">Max 8 characters</p>
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
          onClick={onNext}
          size="lg"
          className="flex-1 bg-gradient-accent hover:shadow-glow transition-premium font-semibold"
        >
          Continue to Personalization
        </Button>
      </div>
    </div>
  );
};

export default StepUploadPhoto;
