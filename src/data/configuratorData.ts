import { RimOption, MaterialOption, PhoneModel } from "@/types/configurator";

export const rimOptions: RimOption[] = [
  {
    id: "classic-chrome",
    name: "Classic Chrome",
    price: 10,
    description: "Timeless elegance",
    image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=300&h=300&fit=crop",
    popular: true
  },
  {
    id: "sport-gt-black",
    name: "Sport GT Black",
    price: 17,
    description: "Racing heritage",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=300&h=300&fit=crop",
    popular: true
  },
  {
    id: "carbon-pro",
    name: "Carbon Pro",
    price: 23,
    description: "Lightweight performance",
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=300&h=300&fit=crop",
    popular: true
  },
  {
    id: "luxury-gold",
    name: "Luxury Gold",
    price: 30,
    description: "Premium sophistication",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=300&h=300&fit=crop"
  },
  {
    id: "street-drift",
    name: "Street Drift",
    price: 15,
    description: "Urban aggressive",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=300&h=300&fit=crop"
  },
  {
    id: "rally-red",
    name: "Rally Red",
    price: 20,
    description: "Motorsport inspired",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=300&h=300&fit=crop"
  },
  {
    id: "diamond-cut",
    name: "Diamond Cut",
    price: 25,
    description: "Precision craftsmanship",
    image: "https://images.unsplash.com/photo-1616422077460-14f226b5b19f?w=300&h=300&fit=crop"
  },
  {
    id: "matte-gunmetal",
    name: "Matte Gunmetal",
    price: 13,
    description: "Stealthy modern",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=300&h=300&fit=crop"
  }
];

export const materialOptions: MaterialOption[] = [
  {
    id: "matte",
    name: "Matte Finish",
    price: 0,
    description: "Classic feel, anti-fingerprint",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=200&h=200&fit=crop",
    popular: true
  },
  {
    id: "glossy",
    name: "Glossy Finish",
    price: 5,
    description: "High shine, vibrant colors",
    image: "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=200&h=200&fit=crop"
  },
  {
    id: "leather",
    name: "Leather Texture",
    price: 8,
    description: "Premium grip, elegant",
    image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=200&h=200&fit=crop"
  },
  {
    id: "metallic",
    name: "Metallic Finish",
    price: 10,
    description: "Automotive metallic shine",
    image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=200&h=200&fit=crop"
  }
];

export const phoneModels: PhoneModel[] = [
  // iPhone
  { id: "iphone-16-pro-max", name: "iPhone 16 Pro Max", brand: "iPhone", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&h=100&fit=crop" },
  { id: "iphone-16-pro", name: "iPhone 16 Pro", brand: "iPhone", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&h=100&fit=crop" },
  { id: "iphone-16", name: "iPhone 16", brand: "iPhone", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&h=100&fit=crop" },
  { id: "iphone-15-pro-max", name: "iPhone 15 Pro Max", brand: "iPhone", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&h=100&fit=crop" },
  { id: "iphone-15-pro", name: "iPhone 15 Pro", brand: "iPhone", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&h=100&fit=crop" },
  { id: "iphone-15", name: "iPhone 15", brand: "iPhone", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&h=100&fit=crop" },
  // Samsung
  { id: "galaxy-s24-ultra", name: "Galaxy S24 Ultra", brand: "Samsung Galaxy", image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=100&h=100&fit=crop" },
  { id: "galaxy-s24-plus", name: "Galaxy S24+", brand: "Samsung Galaxy", image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=100&h=100&fit=crop" },
  { id: "galaxy-s23-ultra", name: "Galaxy S23 Ultra", brand: "Samsung Galaxy", image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=100&h=100&fit=crop" },
  // Google Pixel
  { id: "pixel-9-pro", name: "Pixel 9 Pro", brand: "Google Pixel", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=100&h=100&fit=crop" },
  { id: "pixel-8-pro", name: "Pixel 8 Pro", brand: "Google Pixel", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=100&h=100&fit=crop" }
];

export const textColors = [
  { id: "white", name: "White", hex: "#FFFFFF" },
  { id: "black", name: "Black", hex: "#000000" },
  { id: "gold", name: "Gold", hex: "#FFD700" },
  { id: "silver", name: "Silver", hex: "#C0C0C0" },
  { id: "red", name: "Red", hex: "#E63946" },
  { id: "blue", name: "Blue", hex: "#0077B6" }
];

export const textPositions = [
  { id: "bottom", name: "Bottom center" },
  { id: "top", name: "Top edge" },
  { id: "around", name: "Around rim" }
];
