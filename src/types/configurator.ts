export interface ConfiguratorState {
  phoneModel: string;
  phoneModelImage: string;
  rimStyle: string;
  rimPrice: number;
  rimImage: string;
  carPhoto: File | null;
  carPhotoPreview: string;
  facePhoto: File | null;
  facePhotoPreview: string;
  licensePlateText: string;
  material: string;
  materialPrice: number;
  // Case feature options
  magSafeCompatible: boolean;
  caseThickness: string; // e.g., 'slim' | 'standard' | 'rugged'
  texture: string; // e.g., 'matte' | 'glossy' | 'carbon' | 'sandstone'
  protectionLevel: string; // e.g., 'standard' | 'shockproof' | 'ultra'
  customText: string;
  textColor: string;
  textPosition: string;
  currentStep: number;
}

export interface RimOption {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  popular?: boolean;
}

export interface MaterialOption {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  popular?: boolean;
  group?: string; // e.g., 'soft' | 'hard' | 'premium'
  isNew?: boolean; // shows NEW badge
}

export interface PhoneModel {
  id: string;
  name: string;
  brand: string;
  image: string; // should be >=1000x1000px
  releaseYear: number;
  price: number; // approximate MSRP in USD
  specs: {
    display: string;
    dimensions: string;
    weight: string;
    chipset: string;
    ram: string;
    storage: string;
    battery: string;
    camera: string;
    wirelessCharging?: boolean;
    magSafe?: boolean;
  };
  customizations: {
    materials: string[]; // ids from materialOptions
    rimStyles: string[]; // ids from rimOptions
    engravingAvailable: boolean;
  };
}
