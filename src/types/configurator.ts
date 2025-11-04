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
}

export interface PhoneModel {
  id: string;
  name: string;
  brand: string;
  image: string;
}
