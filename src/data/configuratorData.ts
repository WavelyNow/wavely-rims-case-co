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
  // ===================== Apple iPhone =====================
  {
    id: "iphone-17-pro-max",
    name: "iPhone 17 Pro Max",
    brand: "Apple iPhone",
    image: "https://via.placeholder.com/1200?text=iPhone+17+Pro+Max",
    releaseYear: 2025,
    price: 1199,
    specs: {
      display: "6.7\" OLED 120Hz",
      dimensions: "160.8 x 77.6 x 7.8 mm",
      weight: "225 g",
      chipset: "Apple A19 Pro",
      ram: "8GB",
      storage: "128/256/512GB",
      battery: "4500 mAh",
      camera: "48MP + 12MP + 12MP",
      wirelessCharging: true,
      magSafe: true
    },
    customizations: {
      materials: ["matte", "glossy", "leather", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "carbon-pro", "luxury-gold", "street-drift", "rally-red", "diamond-cut", "matte-gunmetal"],
      engravingAvailable: true
    }
  },
  {
    id: "iphone-17-pro",
    name: "iPhone 17 Pro",
    brand: "Apple iPhone",
    image: "https://via.placeholder.com/1200?text=iPhone+17+Pro",
    releaseYear: 2025,
    price: 999,
    specs: {
      display: "6.1\" OLED 120Hz",
      dimensions: "146.6 x 70.6 x 8.25 mm",
      weight: "205 g",
      chipset: "Apple A19 Pro",
      ram: "8GB",
      storage: "128/256/512GB",
      battery: "4200 mAh",
      camera: "48MP + 12MP + 12MP",
      wirelessCharging: true,
      magSafe: true
    },
    customizations: {
      materials: ["matte", "glossy", "leather", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "carbon-pro", "diamond-cut"],
      engravingAvailable: true
    }
  },
  {
    id: "iphone-17",
    name: "iPhone 17",
    brand: "Apple iPhone",
    image: "https://via.placeholder.com/1200?text=iPhone+17",
    releaseYear: 2025,
    price: 799,
    specs: {
      display: "6.1\" OLED 60/120Hz",
      dimensions: "147 x 71 x 7.8 mm",
      weight: "198 g",
      chipset: "Apple A19",
      ram: "6GB",
      storage: "128/256/512GB",
      battery: "4100 mAh",
      camera: "48MP + 12MP",
      wirelessCharging: true,
      magSafe: true
    },
    customizations: {
      materials: ["matte", "glossy", "leather"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift", "rally-red"],
      engravingAvailable: true
    }
  },
  {
    id: "iphone-16-pro-max",
    name: "iPhone 16 Pro Max",
    brand: "Apple iPhone",
    image: "https://via.placeholder.com/1200?text=iPhone+16+Pro+Max",
    releaseYear: 2024,
    price: 1199,
    specs: {
      display: "6.7\" OLED 120Hz",
      dimensions: "160.7 x 77.6 x 7.8 mm",
      weight: "221 g",
      chipset: "Apple A18 Pro",
      ram: "8GB",
      storage: "128/256/512GB",
      battery: "4400 mAh",
      camera: "48MP + 12MP + 12MP",
      wirelessCharging: true,
      magSafe: true
    },
    customizations: {
      materials: ["matte", "glossy", "leather", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "carbon-pro", "luxury-gold", "diamond-cut"],
      engravingAvailable: true
    }
  },
  {
    id: "iphone-16-pro",
    name: "iPhone 16 Pro",
    brand: "Apple iPhone",
    image: "https://via.placeholder.com/1200?text=iPhone+16+Pro",
    releaseYear: 2024,
    price: 999,
    specs: {
      display: "6.1\" OLED 120Hz",
      dimensions: "146.6 x 70.6 x 8.25 mm",
      weight: "204 g",
      chipset: "Apple A18 Pro",
      ram: "8GB",
      storage: "128/256/512GB",
      battery: "4200 mAh",
      camera: "48MP + 12MP + 12MP",
      wirelessCharging: true,
      magSafe: true
    },
    customizations: {
      materials: ["matte", "glossy", "leather", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "carbon-pro", "diamond-cut"],
      engravingAvailable: true
    }
  },
  {
    id: "iphone-16",
    name: "iPhone 16",
    brand: "Apple iPhone",
    image: "https://via.placeholder.com/1200?text=iPhone+16",
    releaseYear: 2024,
    price: 799,
    specs: {
      display: "6.1\" OLED 60/120Hz",
      dimensions: "147 x 71 x 7.8 mm",
      weight: "198 g",
      chipset: "Apple A18",
      ram: "6GB",
      storage: "128/256/512GB",
      battery: "4100 mAh",
      camera: "48MP + 12MP",
      wirelessCharging: true,
      magSafe: true
    },
    customizations: {
      materials: ["matte", "glossy", "leather"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift", "rally-red"],
      engravingAvailable: true
    }
  },
  {
    id: "iphone-16-plus",
    name: "iPhone 16 Plus",
    brand: "Apple iPhone",
    image: "https://via.placeholder.com/1200?text=iPhone+16+Plus",
    releaseYear: 2024,
    price: 899,
    specs: {
      display: "6.7\" OLED 60/120Hz",
      dimensions: "160.8 x 78.1 x 7.8 mm",
      weight: "208 g",
      chipset: "Apple A18",
      ram: "6GB",
      storage: "128/256/512GB",
      battery: "4400 mAh",
      camera: "48MP + 12MP",
      wirelessCharging: true,
      magSafe: true
    },
    customizations: {
      materials: ["matte", "glossy", "leather"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift", "matte-gunmetal"],
      engravingAvailable: true
    }
  },
  {
    id: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max",
    brand: "Apple iPhone",
    image: "https://via.placeholder.com/1200?text=iPhone+15+Pro+Max",
    releaseYear: 2023,
    price: 1199,
    specs: {
      display: "6.7\" OLED 120Hz",
      dimensions: "159.9 x 76.7 x 8.25 mm",
      weight: "221 g",
      chipset: "Apple A17 Pro",
      ram: "8GB",
      storage: "128/256/512GB",
      battery: "4400 mAh",
      camera: "48MP + 12MP + 12MP",
      wirelessCharging: true,
      magSafe: true
    },
    customizations: {
      materials: ["matte", "glossy", "leather", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "carbon-pro", "luxury-gold", "diamond-cut"],
      engravingAvailable: true
    }
  },
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    brand: "Apple iPhone",
    image: "https://via.placeholder.com/1200?text=iPhone+15+Pro",
    releaseYear: 2023,
    price: 999,
    specs: {
      display: "6.1\" OLED 120Hz",
      dimensions: "146.6 x 70.6 x 8.25 mm",
      weight: "201 g",
      chipset: "Apple A17 Pro",
      ram: "8GB",
      storage: "128/256/512GB",
      battery: "4200 mAh",
      camera: "48MP + 12MP + 12MP",
      wirelessCharging: true,
      magSafe: true
    },
    customizations: {
      materials: ["matte", "glossy", "leather", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "carbon-pro", "diamond-cut"],
      engravingAvailable: true
    }
  },
  {
    id: "iphone-15",
    name: "iPhone 15",
    brand: "Apple iPhone",
    image: "https://via.placeholder.com/1200?text=iPhone+15",
    releaseYear: 2023,
    price: 799,
    specs: {
      display: "6.1\" OLED 60/120Hz",
      dimensions: "147 x 71 x 7.8 mm",
      weight: "197 g",
      chipset: "Apple A16",
      ram: "6GB",
      storage: "128/256/512GB",
      battery: "4000 mAh",
      camera: "48MP + 12MP",
      wirelessCharging: true,
      magSafe: true
    },
    customizations: {
      materials: ["matte", "glossy", "leather"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift", "rally-red"],
      engravingAvailable: true
    }
  },
  {
    id: "iphone-15-plus",
    name: "iPhone 15 Plus",
    brand: "Apple iPhone",
    image: "https://via.placeholder.com/1200?text=iPhone+15+Plus",
    releaseYear: 2023,
    price: 899,
    specs: {
      display: "6.7\" OLED 60/120Hz",
      dimensions: "160.8 x 78.1 x 7.8 mm",
      weight: "209 g",
      chipset: "Apple A16",
      ram: "6GB",
      storage: "128/256/512GB",
      battery: "4300 mAh",
      camera: "48MP + 12MP",
      wirelessCharging: true,
      magSafe: true
    },
    customizations: {
      materials: ["matte", "glossy", "leather"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift", "matte-gunmetal"],
      engravingAvailable: true
    }
  },
  {
    id: "iphone-14-pro-max",
    name: "iPhone 14 Pro Max",
    brand: "Apple iPhone",
    image: "https://via.placeholder.com/1200?text=iPhone+14+Pro+Max",
    releaseYear: 2022,
    price: 1099,
    specs: {
      display: "6.7\" OLED 120Hz",
      dimensions: "160.7 x 77.6 x 7.8 mm",
      weight: "240 g",
      chipset: "Apple A16",
      ram: "6GB",
      storage: "128/256/512GB",
      battery: "4300 mAh",
      camera: "48MP + 12MP + 12MP",
      wirelessCharging: true,
      magSafe: true
    },
    customizations: {
      materials: ["matte", "glossy", "leather", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "carbon-pro", "luxury-gold"],
      engravingAvailable: true
    }
  },
  {
    id: "iphone-14-pro",
    name: "iPhone 14 Pro",
    brand: "Apple iPhone",
    image: "https://via.placeholder.com/1200?text=iPhone+14+Pro",
    releaseYear: 2022,
    price: 999,
    specs: {
      display: "6.1\" OLED 120Hz",
      dimensions: "146.6 x 70.6 x 8.25 mm",
      weight: "206 g",
      chipset: "Apple A16",
      ram: "6GB",
      storage: "128/256/512GB",
      battery: "4200 mAh",
      camera: "48MP + 12MP + 12MP",
      wirelessCharging: true,
      magSafe: true
    },
    customizations: {
      materials: ["matte", "glossy", "leather", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "carbon-pro", "diamond-cut"],
      engravingAvailable: true
    }
  },
  {
    id: "iphone-14",
    name: "iPhone 14",
    brand: "Apple iPhone",
    image: "https://via.placeholder.com/1200?text=iPhone+14",
    releaseYear: 2022,
    price: 699,
    specs: {
      display: "6.1\" OLED 60/120Hz",
      dimensions: "147 x 71 x 7.8 mm",
      weight: "174 g",
      chipset: "Apple A15",
      ram: "6GB",
      storage: "128/256/512GB",
      battery: "3700 mAh",
      camera: "12MP + 12MP",
      wirelessCharging: true,
      magSafe: true
    },
    customizations: {
      materials: ["matte", "glossy", "leather"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift"],
      engravingAvailable: true
    }
  },
  {
    id: "iphone-14-plus",
    name: "iPhone 14 Plus",
    brand: "Apple iPhone",
    image: "https://via.placeholder.com/1200?text=iPhone+14+Plus",
    releaseYear: 2022,
    price: 799,
    specs: {
      display: "6.7\" OLED 60/120Hz",
      dimensions: "160.8 x 78.1 x 7.8 mm",
      weight: "203 g",
      chipset: "Apple A15",
      ram: "6GB",
      storage: "128/256/512GB",
      battery: "4200 mAh",
      camera: "12MP + 12MP",
      wirelessCharging: true,
      magSafe: true
    },
    customizations: {
      materials: ["matte", "glossy", "leather"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift", "matte-gunmetal"],
      engravingAvailable: true
    }
  },
  {
    id: "iphone-13-pro-max",
    name: "iPhone 13 Pro Max",
    brand: "Apple iPhone",
    image: "https://via.placeholder.com/1200?text=iPhone+13+Pro+Max",
    releaseYear: 2021,
    price: 1099,
    specs: {
      display: "6.7\" OLED 120Hz",
      dimensions: "160.7 x 77.6 x 7.65 mm",
      weight: "240 g",
      chipset: "Apple A15",
      ram: "6GB",
      storage: "128/256/512GB",
      battery: "4352 mAh",
      camera: "12MP + 12MP + 12MP",
      wirelessCharging: true,
      magSafe: true
    },
    customizations: {
      materials: ["matte", "glossy", "leather", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "carbon-pro", "luxury-gold"],
      engravingAvailable: true
    }
  },
  {
    id: "iphone-13-pro",
    name: "iPhone 13 Pro",
    brand: "Apple iPhone",
    image: "https://via.placeholder.com/1200?text=iPhone+13+Pro",
    releaseYear: 2021,
    price: 999,
    specs: {
      display: "6.1\" OLED 120Hz",
      dimensions: "146.7 x 71.5 x 7.65 mm",
      weight: "204 g",
      chipset: "Apple A15",
      ram: "6GB",
      storage: "128/256/512GB",
      battery: "3095 mAh",
      camera: "12MP + 12MP + 12MP",
      wirelessCharging: true,
      magSafe: true
    },
    customizations: {
      materials: ["matte", "glossy", "leather", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "carbon-pro", "diamond-cut"],
      engravingAvailable: true
    }
  },
  {
    id: "iphone-13",
    name: "iPhone 13",
    brand: "Apple iPhone",
    image: "https://via.placeholder.com/1200?text=iPhone+13",
    releaseYear: 2021,
    price: 699,
    specs: {
      display: "6.1\" OLED 60Hz",
      dimensions: "146.7 x 71.5 x 7.65 mm",
      weight: "174 g",
      chipset: "Apple A15",
      ram: "4GB",
      storage: "128/256/512GB",
      battery: "3240 mAh",
      camera: "12MP + 12MP",
      wirelessCharging: true,
      magSafe: true
    },
    customizations: {
      materials: ["matte", "glossy", "leather"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift"],
      engravingAvailable: true
    }
  },
  {
    id: "iphone-13-mini",
    name: "iPhone 13 mini",
    brand: "Apple iPhone",
    image: "https://via.placeholder.com/1200?text=iPhone+13+mini",
    releaseYear: 2021,
    price: 599,
    specs: {
      display: "5.4\" OLED 60Hz",
      dimensions: "131.5 x 64.2 x 7.65 mm",
      weight: "141 g",
      chipset: "Apple A15",
      ram: "4GB",
      storage: "128/256/512GB",
      battery: "2406 mAh",
      camera: "12MP + 12MP",
      wirelessCharging: true,
      magSafe: true
    },
    customizations: {
      materials: ["matte", "glossy", "leather"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift"],
      engravingAvailable: true
    }
  },
  {
    id: "iphone-12-pro-max",
    name: "iPhone 12 Pro Max",
    brand: "Apple iPhone",
    image: "https://via.placeholder.com/1200?text=iPhone+12+Pro+Max",
    releaseYear: 2020,
    price: 1099,
    specs: {
      display: "6.7\" OLED 60Hz",
      dimensions: "160.8 x 78.1 x 7.4 mm",
      weight: "228 g",
      chipset: "Apple A14",
      ram: "6GB",
      storage: "128/256/512GB",
      battery: "3687 mAh",
      camera: "12MP + 12MP + 12MP",
      wirelessCharging: true,
      magSafe: true
    },
    customizations: {
      materials: ["matte", "glossy", "leather", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "carbon-pro", "luxury-gold"],
      engravingAvailable: true
    }
  },
  {
    id: "iphone-12-pro",
    name: "iPhone 12 Pro",
    brand: "Apple iPhone",
    image: "https://via.placeholder.com/1200?text=iPhone+12+Pro",
    releaseYear: 2020,
    price: 999,
    specs: {
      display: "6.1\" OLED 60Hz",
      dimensions: "146.7 x 71.5 x 7.4 mm",
      weight: "189 g",
      chipset: "Apple A14",
      ram: "6GB",
      storage: "128/256/512GB",
      battery: "2815 mAh",
      camera: "12MP + 12MP + 12MP",
      wirelessCharging: true,
      magSafe: true
    },
    customizations: {
      materials: ["matte", "glossy", "leather", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "carbon-pro", "diamond-cut"],
      engravingAvailable: true
    }
  },
  {
    id: "iphone-12",
    name: "iPhone 12",
    brand: "Apple iPhone",
    image: "https://via.placeholder.com/1200?text=iPhone+12",
    releaseYear: 2020,
    price: 599,
    specs: {
      display: "6.1\" OLED 60Hz",
      dimensions: "146.7 x 71.5 x 7.4 mm",
      weight: "164 g",
      chipset: "Apple A14",
      ram: "4GB",
      storage: "64/128/256GB",
      battery: "2815 mAh",
      camera: "12MP + 12MP",
      wirelessCharging: true,
      magSafe: true
    },
    customizations: {
      materials: ["matte", "glossy", "leather"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift"],
      engravingAvailable: true
    }
  },
  {
    id: "iphone-12-mini",
    name: "iPhone 12 mini",
    brand: "Apple iPhone",
    image: "https://via.placeholder.com/1200?text=iPhone+12+mini",
    releaseYear: 2020,
    price: 499,
    specs: {
      display: "5.4\" OLED 60Hz",
      dimensions: "131.5 x 64.2 x 7.4 mm",
      weight: "135 g",
      chipset: "Apple A14",
      ram: "4GB",
      storage: "64/128/256GB",
      battery: "2227 mAh",
      camera: "12MP + 12MP",
      wirelessCharging: true,
      magSafe: true
    },
    customizations: {
      materials: ["matte", "glossy", "leather"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift"],
      engravingAvailable: true
    }
  },

  // ===================== Samsung Galaxy =====================
  {
    id: "galaxy-s24-ultra",
    name: "Galaxy S24 Ultra",
    brand: "Samsung Galaxy",
    image: "https://via.placeholder.com/1200?text=Galaxy+S24+Ultra",
    releaseYear: 2024,
    price: 1199,
    specs: {
      display: "6.8\" AMOLED 120Hz",
      dimensions: "162.3 x 79 x 8.6 mm",
      weight: "233 g",
      chipset: "Snapdragon 8 Gen 3",
      ram: "12GB",
      storage: "256/512/1024GB",
      battery: "5000 mAh",
      camera: "200MP + 12MP + 10MP + 10MP",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "carbon-pro", "diamond-cut", "matte-gunmetal"],
      engravingAvailable: true
    }
  },
  {
    id: "galaxy-s24-plus",
    name: "Galaxy S24+",
    brand: "Samsung Galaxy",
    image: "https://via.placeholder.com/1200?text=Galaxy+S24+Plus",
    releaseYear: 2024,
    price: 999,
    specs: {
      display: "6.7\" AMOLED 120Hz",
      dimensions: "158.5 x 75.9 x 7.7 mm",
      weight: "196 g",
      chipset: "Snapdragon 8 Gen 3",
      ram: "12GB",
      storage: "256/512GB",
      battery: "4900 mAh",
      camera: "50MP + 12MP + 10MP",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift", "matte-gunmetal"],
      engravingAvailable: true
    }
  },
  {
    id: "galaxy-s24",
    name: "Galaxy S24",
    brand: "Samsung Galaxy",
    image: "https://via.placeholder.com/1200?text=Galaxy+S24",
    releaseYear: 2024,
    price: 799,
    specs: {
      display: "6.2\" AMOLED 120Hz",
      dimensions: "147 x 70.6 x 7.6 mm",
      weight: "168 g",
      chipset: "Snapdragon 8 Gen 3",
      ram: "8GB",
      storage: "128/256/512GB",
      battery: "4000 mAh",
      camera: "50MP + 12MP + 10MP",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift", "rally-red"],
      engravingAvailable: true
    }
  },
  {
    id: "galaxy-s23-ultra",
    name: "Galaxy S23 Ultra",
    brand: "Samsung Galaxy",
    image: "https://via.placeholder.com/1200?text=Galaxy+S23+Ultra",
    releaseYear: 2023,
    price: 1199,
    specs: {
      display: "6.8\" AMOLED 120Hz",
      dimensions: "163.4 x 78.1 x 8.9 mm",
      weight: "234 g",
      chipset: "Snapdragon 8 Gen 2",
      ram: "12GB",
      storage: "256/512/1024GB",
      battery: "5000 mAh",
      camera: "200MP + 10MP + 10MP + 12MP",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "carbon-pro", "luxury-gold", "diamond-cut"],
      engravingAvailable: true
    }
  },
  {
    id: "galaxy-s23-plus",
    name: "Galaxy S23+",
    brand: "Samsung Galaxy",
    image: "https://via.placeholder.com/1200?text=Galaxy+S23+Plus",
    releaseYear: 2023,
    price: 999,
    specs: {
      display: "6.6\" AMOLED 120Hz",
      dimensions: "157.8 x 76.2 x 7.6 mm",
      weight: "195 g",
      chipset: "Snapdragon 8 Gen 2",
      ram: "8/12GB",
      storage: "256/512GB",
      battery: "4700 mAh",
      camera: "50MP + 12MP + 10MP",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift", "matte-gunmetal"],
      engravingAvailable: true
    }
  },
  {
    id: "galaxy-s23",
    name: "Galaxy S23",
    brand: "Samsung Galaxy",
    image: "https://via.placeholder.com/1200?text=Galaxy+S23",
    releaseYear: 2023,
    price: 799,
    specs: {
      display: "6.1\" AMOLED 120Hz",
      dimensions: "146.3 x 70.9 x 7.6 mm",
      weight: "168 g",
      chipset: "Snapdragon 8 Gen 2",
      ram: "8GB",
      storage: "128/256/512GB",
      battery: "3900 mAh",
      camera: "50MP + 12MP + 10MP",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift", "rally-red"],
      engravingAvailable: true
    }
  },
  {
    id: "galaxy-s22-ultra",
    name: "Galaxy S22 Ultra",
    brand: "Samsung Galaxy",
    image: "https://via.placeholder.com/1200?text=Galaxy+S22+Ultra",
    releaseYear: 2022,
    price: 1199,
    specs: {
      display: "6.8\" AMOLED 120Hz",
      dimensions: "163.3 x 77.9 x 8.9 mm",
      weight: "228 g",
      chipset: "Snapdragon 8 Gen 1",
      ram: "8/12GB",
      storage: "128/256/512GB/1TB",
      battery: "5000 mAh",
      camera: "108MP + 10MP + 10MP + 12MP",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "carbon-pro", "luxury-gold"],
      engravingAvailable: true
    }
  },
  {
    id: "galaxy-s22-plus",
    name: "Galaxy S22+",
    brand: "Samsung Galaxy",
    image: "https://via.placeholder.com/1200?text=Galaxy+S22+Plus",
    releaseYear: 2022,
    price: 999,
    specs: {
      display: "6.6\" AMOLED 120Hz",
      dimensions: "157.4 x 75.8 x 7.6 mm",
      weight: "195 g",
      chipset: "Snapdragon 8 Gen 1",
      ram: "8GB",
      storage: "128/256/512GB",
      battery: "4500 mAh",
      camera: "50MP + 12MP + 10MP",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift", "matte-gunmetal"],
      engravingAvailable: true
    }
  },
  {
    id: "galaxy-s22",
    name: "Galaxy S22",
    brand: "Samsung Galaxy",
    image: "https://via.placeholder.com/1200?text=Galaxy+S22",
    releaseYear: 2022,
    price: 699,
    specs: {
      display: "6.1\" AMOLED 120Hz",
      dimensions: "146 x 70.6 x 7.6 mm",
      weight: "168 g",
      chipset: "Snapdragon 8 Gen 1",
      ram: "8GB",
      storage: "128/256/512GB",
      battery: "3700 mAh",
      camera: "50MP + 12MP + 10MP",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift", "rally-red"],
      engravingAvailable: true
    }
  },
  {
    id: "galaxy-s21-ultra",
    name: "Galaxy S21 Ultra",
    brand: "Samsung Galaxy",
    image: "https://via.placeholder.com/1200?text=Galaxy+S21+Ultra",
    releaseYear: 2021,
    price: 1199,
    specs: {
      display: "6.8\" AMOLED 120Hz",
      dimensions: "165.1 x 75.6 x 8.9 mm",
      weight: "227 g",
      chipset: "Snapdragon 888",
      ram: "12GB",
      storage: "128/256/512GB",
      battery: "5000 mAh",
      camera: "108MP + 10MP + 10MP + 12MP",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "carbon-pro", "luxury-gold"],
      engravingAvailable: true
    }
  },
  {
    id: "galaxy-s21-plus",
    name: "Galaxy S21+",
    brand: "Samsung Galaxy",
    image: "https://via.placeholder.com/1200?text=Galaxy+S21+Plus",
    releaseYear: 2021,
    price: 999,
    specs: {
      display: "6.7\" AMOLED 120Hz",
      dimensions: "161.5 x 75.6 x 7.8 mm",
      weight: "200 g",
      chipset: "Snapdragon 888",
      ram: "8GB",
      storage: "128/256GB",
      battery: "4800 mAh",
      camera: "64MP + 12MP + 12MP",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift", "matte-gunmetal"],
      engravingAvailable: true
    }
  },
  {
    id: "galaxy-s21",
    name: "Galaxy S21",
    brand: "Samsung Galaxy",
    image: "https://via.placeholder.com/1200?text=Galaxy+S21",
    releaseYear: 2021,
    price: 699,
    specs: {
      display: "6.2\" AMOLED 120Hz",
      dimensions: "151.7 x 71.2 x 7.9 mm",
      weight: "171 g",
      chipset: "Snapdragon 888",
      ram: "8GB",
      storage: "128/256GB",
      battery: "4000 mAh",
      camera: "64MP + 12MP + 12MP",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift", "rally-red"],
      engravingAvailable: true
    }
  },
  {
    id: "galaxy-note-20-ultra",
    name: "Galaxy Note 20 Ultra",
    brand: "Samsung Galaxy",
    image: "https://via.placeholder.com/1200?text=Galaxy+Note+20+Ultra",
    releaseYear: 2020,
    price: 1299,
    specs: {
      display: "6.9\" AMOLED 120Hz",
      dimensions: "164.8 x 77.2 x 8.1 mm",
      weight: "208 g",
      chipset: "Snapdragon 865+",
      ram: "8/12GB",
      storage: "128/256/512GB",
      battery: "4500 mAh",
      camera: "108MP + 12MP + 12MP",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "luxury-gold", "diamond-cut"],
      engravingAvailable: true
    }
  },
  {
    id: "galaxy-z-fold-5",
    name: "Galaxy Z Fold5",
    brand: "Samsung Galaxy",
    image: "https://via.placeholder.com/1200?text=Galaxy+Z+Fold5",
    releaseYear: 2023,
    price: 1799,
    specs: {
      display: "7.6\" AMOLED 120Hz (foldable)",
      dimensions: "154.9 x 129.9 x 6.1 mm (unfolded)",
      weight: "253 g",
      chipset: "Snapdragon 8 Gen 2",
      ram: "12GB",
      storage: "256/512/1024GB",
      battery: "4400 mAh",
      camera: "50MP + 12MP + 10MP",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "carbon-pro", "matte-gunmetal"],
      engravingAvailable: true
    }
  },
  {
    id: "galaxy-z-flip-5",
    name: "Galaxy Z Flip5",
    brand: "Samsung Galaxy",
    image: "https://via.placeholder.com/1200?text=Galaxy+Z+Flip5",
    releaseYear: 2023,
    price: 999,
    specs: {
      display: "6.7\" AMOLED 120Hz (flip)",
      dimensions: "165.1 x 71.9 x 6.9 mm (unfolded)",
      weight: "187 g",
      chipset: "Snapdragon 8 Gen 2",
      ram: "8GB",
      storage: "128/256/512GB",
      battery: "3700 mAh",
      camera: "12MP + 12MP",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift", "rally-red"],
      engravingAvailable: true
    }
  },

  // ===================== Google Pixel =====================
  {
    id: "pixel-9-pro",
    name: "Pixel 9 Pro",
    brand: "Google Pixel",
    image: "https://via.placeholder.com/1200?text=Pixel+9+Pro",
    releaseYear: 2024,
    price: 999,
    specs: {
      display: "6.7\" OLED 120Hz",
      dimensions: "162 x 76.5 x 8.8 mm",
      weight: "220 g",
      chipset: "Google Tensor G4",
      ram: "12GB",
      storage: "128/256/512GB",
      battery: "5000 mAh",
      camera: "50MP + 48MP + 12MP",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "carbon-pro", "diamond-cut"],
      engravingAvailable: true
    }
  },
  {
    id: "pixel-9",
    name: "Pixel 9",
    brand: "Google Pixel",
    image: "https://via.placeholder.com/1200?text=Pixel+9",
    releaseYear: 2024,
    price: 799,
    specs: {
      display: "6.3\" OLED 120Hz",
      dimensions: "152.8 x 71.9 x 8.5 mm",
      weight: "187 g",
      chipset: "Google Tensor G4",
      ram: "8GB",
      storage: "128/256GB",
      battery: "4700 mAh",
      camera: "50MP + 12MP",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift", "matte-gunmetal"],
      engravingAvailable: true
    }
  },
  {
    id: "pixel-8-pro",
    name: "Pixel 8 Pro",
    brand: "Google Pixel",
    image: "https://via.placeholder.com/1200?text=Pixel+8+Pro",
    releaseYear: 2023,
    price: 999,
    specs: {
      display: "6.7\" OLED 120Hz",
      dimensions: "162.6 x 76.5 x 8.8 mm",
      weight: "213 g",
      chipset: "Google Tensor G3",
      ram: "12GB",
      storage: "128/256/512GB",
      battery: "5050 mAh",
      camera: "50MP + 48MP + 12MP",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "carbon-pro", "diamond-cut"],
      engravingAvailable: true
    }
  },
  {
    id: "pixel-8",
    name: "Pixel 8",
    brand: "Google Pixel",
    image: "https://via.placeholder.com/1200?text=Pixel+8",
    releaseYear: 2023,
    price: 699,
    specs: {
      display: "6.2\" OLED 120Hz",
      dimensions: "150.5 x 70.8 x 8.9 mm",
      weight: "187 g",
      chipset: "Google Tensor G3",
      ram: "8GB",
      storage: "128/256GB",
      battery: "4575 mAh",
      camera: "50MP + 12MP",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift"],
      engravingAvailable: true
    }
  },
  {
    id: "pixel-7-pro",
    name: "Pixel 7 Pro",
    brand: "Google Pixel",
    image: "https://via.placeholder.com/1200?text=Pixel+7+Pro",
    releaseYear: 2022,
    price: 899,
    specs: {
      display: "6.7\" OLED 120Hz",
      dimensions: "162.9 x 76.6 x 8.9 mm",
      weight: "212 g",
      chipset: "Google Tensor G2",
      ram: "12GB",
      storage: "128/256/512GB",
      battery: "5000 mAh",
      camera: "50MP + 48MP + 12MP",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "carbon-pro"],
      engravingAvailable: true
    }
  },
  {
    id: "pixel-7",
    name: "Pixel 7",
    brand: "Google Pixel",
    image: "https://via.placeholder.com/1200?text=Pixel+7",
    releaseYear: 2022,
    price: 599,
    specs: {
      display: "6.3\" OLED 90Hz",
      dimensions: "155.6 x 73.2 x 8.7 mm",
      weight: "197 g",
      chipset: "Google Tensor G2",
      ram: "8GB",
      storage: "128/256GB",
      battery: "4355 mAh",
      camera: "50MP + 12MP",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift"],
      engravingAvailable: true
    }
  },
  {
    id: "pixel-6-pro",
    name: "Pixel 6 Pro",
    brand: "Google Pixel",
    image: "https://via.placeholder.com/1200?text=Pixel+6+Pro",
    releaseYear: 2021,
    price: 899,
    specs: {
      display: "6.7\" OLED 120Hz",
      dimensions: "163.9 x 75.9 x 8.9 mm",
      weight: "210 g",
      chipset: "Google Tensor",
      ram: "12GB",
      storage: "128/256/512GB",
      battery: "5000 mAh",
      camera: "50MP + 48MP + 12MP",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "carbon-pro"],
      engravingAvailable: true
    }
  },
  {
    id: "pixel-6",
    name: "Pixel 6",
    brand: "Google Pixel",
    image: "https://via.placeholder.com/1200?text=Pixel+6",
    releaseYear: 2021,
    price: 599,
    specs: {
      display: "6.4\" OLED 90Hz",
      dimensions: "158.6 x 74.8 x 8.9 mm",
      weight: "207 g",
      chipset: "Google Tensor",
      ram: "8GB",
      storage: "128/256GB",
      battery: "4614 mAh",
      camera: "50MP + 12MP",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift"],
      engravingAvailable: true
    }
  },

  // ===================== OnePlus =====================
  {
    id: "oneplus-12",
    name: "OnePlus 12",
    brand: "OnePlus",
    image: "https://via.placeholder.com/1200?text=OnePlus+12",
    releaseYear: 2023,
    price: 799,
    specs: {
      display: "6.82\" AMOLED 120Hz",
      dimensions: "164.3 x 75.8 x 9.15 mm",
      weight: "220 g",
      chipset: "Snapdragon 8 Gen 3",
      ram: "12/16GB",
      storage: "256/512GB",
      battery: "5400 mAh",
      camera: "50MP + 64MP + 48MP",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "carbon-pro", "diamond-cut"],
      engravingAvailable: true
    }
  },
  {
    id: "oneplus-12r",
    name: "OnePlus 12R",
    brand: "OnePlus",
    image: "https://via.placeholder.com/1200?text=OnePlus+12R",
    releaseYear: 2024,
    price: 499,
    specs: {
      display: "6.78\" AMOLED 120Hz",
      dimensions: "163.3 x 75.8 x 8.8 mm",
      weight: "204 g",
      chipset: "Snapdragon 8 Gen 2",
      ram: "8/12GB",
      storage: "128/256GB",
      battery: "5000 mAh",
      camera: "50MP + 8MP + 2MP",
      wirelessCharging: false
    },
    customizations: {
      materials: ["matte", "glossy"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift"],
      engravingAvailable: true
    }
  },
  {
    id: "oneplus-11",
    name: "OnePlus 11",
    brand: "OnePlus",
    image: "https://via.placeholder.com/1200?text=OnePlus+11",
    releaseYear: 2023,
    price: 699,
    specs: {
      display: "6.7\" AMOLED 120Hz",
      dimensions: "163.1 x 74.1 x 8.5 mm",
      weight: "205 g",
      chipset: "Snapdragon 8 Gen 2",
      ram: "8/16GB",
      storage: "128/256/512GB",
      battery: "5000 mAh",
      camera: "50MP + 32MP + 48MP",
      wirelessCharging: false
    },
    customizations: {
      materials: ["matte", "glossy"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift", "matte-gunmetal"],
      engravingAvailable: true
    }
  },
  {
    id: "oneplus-10-pro",
    name: "OnePlus 10 Pro",
    brand: "OnePlus",
    image: "https://via.placeholder.com/1200?text=OnePlus+10+Pro",
    releaseYear: 2022,
    price: 599,
    specs: {
      display: "6.7\" AMOLED 120Hz",
      dimensions: "163 x 73.9 x 8.6 mm",
      weight: "200 g",
      chipset: "Snapdragon 8 Gen 1",
      ram: "8/12GB",
      storage: "128/256GB",
      battery: "5000 mAh",
      camera: "48MP + 8MP + 50MP",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift", "diamond-cut"],
      engravingAvailable: true
    }
  },
  {
    id: "oneplus-9-pro",
    name: "OnePlus 9 Pro",
    brand: "OnePlus",
    image: "https://via.placeholder.com/1200?text=OnePlus+9+Pro",
    releaseYear: 2021,
    price: 549,
    specs: {
      display: "6.7\" AMOLED 120Hz",
      dimensions: "163.2 x 73.6 x 8.7 mm",
      weight: "197 g",
      chipset: "Snapdragon 888",
      ram: "8/12GB",
      storage: "128/256GB",
      battery: "4500 mAh",
      camera: "48MP + 50MP + 8MP + 2MP",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift", "rally-red"],
      engravingAvailable: true
    }
  },

  // ===================== Xiaomi =====================
  {
    id: "xiaomi-14-ultra",
    name: "Xiaomi 14 Ultra",
    brand: "Xiaomi",
    image: "https://via.placeholder.com/1200?text=Xiaomi+14+Ultra",
    releaseYear: 2024,
    price: 1299,
    specs: {
      display: "6.73\" AMOLED 120Hz",
      dimensions: "161.4 x 75.3 x 9.2 mm",
      weight: "224 g",
      chipset: "Snapdragon 8 Gen 3",
      ram: "12/16GB",
      storage: "256/512/1024GB",
      battery: "5000 mAh",
      camera: "50MP quad Leica",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "leather", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "carbon-pro", "diamond-cut"],
      engravingAvailable: true
    }
  },
  {
    id: "xiaomi-14-pro",
    name: "Xiaomi 14 Pro",
    brand: "Xiaomi",
    image: "https://via.placeholder.com/1200?text=Xiaomi+14+Pro",
    releaseYear: 2023,
    price: 999,
    specs: {
      display: "6.73\" AMOLED 120Hz",
      dimensions: "161.4 x 75.3 x 8.5 mm",
      weight: "223 g",
      chipset: "Snapdragon 8 Gen 3",
      ram: "12/16GB",
      storage: "256/512GB",
      battery: "4880 mAh",
      camera: "50MP triple Leica",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "carbon-pro"],
      engravingAvailable: true
    }
  },
  {
    id: "xiaomi-14",
    name: "Xiaomi 14",
    brand: "Xiaomi",
    image: "https://via.placeholder.com/1200?text=Xiaomi+14",
    releaseYear: 2023,
    price: 699,
    specs: {
      display: "6.36\" AMOLED 120Hz",
      dimensions: "152.8 x 71.5 x 8.2 mm",
      weight: "189 g",
      chipset: "Snapdragon 8 Gen 3",
      ram: "8/12GB",
      storage: "256/512GB",
      battery: "4610 mAh",
      camera: "50MP triple Leica",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift"],
      engravingAvailable: true
    }
  },
  {
    id: "xiaomi-13-pro",
    name: "Xiaomi 13 Pro",
    brand: "Xiaomi",
    image: "https://via.placeholder.com/1200?text=Xiaomi+13+Pro",
    releaseYear: 2022,
    price: 899,
    specs: {
      display: "6.73\" AMOLED 120Hz",
      dimensions: "162.9 x 74.6 x 8.4 mm",
      weight: "210 g",
      chipset: "Snapdragon 8 Gen 2",
      ram: "12GB",
      storage: "256/512GB",
      battery: "4820 mAh",
      camera: "50MP triple Leica",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "carbon-pro"],
      engravingAvailable: true
    }
  },
  {
    id: "xiaomi-12s-ultra",
    name: "Xiaomi 12S Ultra",
    brand: "Xiaomi",
    image: "https://via.placeholder.com/1200?text=Xiaomi+12S+Ultra",
    releaseYear: 2022,
    price: 999,
    specs: {
      display: "6.73\" AMOLED 120Hz",
      dimensions: "163.2 x 75 x 9.1 mm",
      weight: "225 g",
      chipset: "Snapdragon 8+ Gen 1",
      ram: "8/12GB",
      storage: "256/512GB",
      battery: "4860 mAh",
      camera: "50MP triple Leica",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "leather", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "luxury-gold", "diamond-cut"],
      engravingAvailable: true
    }
  },

  // ===================== Huawei =====================
  {
    id: "huawei-p70-pro",
    name: "Huawei P70 Pro",
    brand: "Huawei",
    image: "https://via.placeholder.com/1200?text=Huawei+P70+Pro",
    releaseYear: 2024,
    price: 1099,
    specs: {
      display: "6.7\" OLED 120Hz",
      dimensions: "162 x 75 x 8.5 mm",
      weight: "210 g",
      chipset: "Kirin 9010",
      ram: "12GB",
      storage: "256/512GB",
      battery: "5000 mAh",
      camera: "50MP quad",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "carbon-pro"],
      engravingAvailable: true
    }
  },
  {
    id: "huawei-p60-pro",
    name: "Huawei P60 Pro",
    brand: "Huawei",
    image: "https://via.placeholder.com/1200?text=Huawei+P60+Pro",
    releaseYear: 2023,
    price: 899,
    specs: {
      display: "6.67\" OLED 120Hz",
      dimensions: "161 x 74.5 x 8.3 mm",
      weight: "200 g",
      chipset: "Kirin 9000S",
      ram: "8/12GB",
      storage: "256/512GB",
      battery: "5000 mAh",
      camera: "48MP + 12MP + 13MP",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift"],
      engravingAvailable: true
    }
  },
  {
    id: "huawei-p50-pro",
    name: "Huawei P50 Pro",
    brand: "Huawei",
    image: "https://via.placeholder.com/1200?text=Huawei+P50+Pro",
    releaseYear: 2021,
    price: 799,
    specs: {
      display: "6.6\" OLED 120Hz",
      dimensions: "158.8 x 72.8 x 8.5 mm",
      weight: "195 g",
      chipset: "Kirin 9000",
      ram: "8/12GB",
      storage: "128/256/512GB",
      battery: "4360 mAh",
      camera: "50MP quad",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift"],
      engravingAvailable: true
    }
  },

  // ===================== Nothing =====================
  {
    id: "nothing-phone-2",
    name: "Nothing Phone (2)",
    brand: "Nothing",
    image: "https://via.placeholder.com/1200?text=Nothing+Phone+2",
    releaseYear: 2023,
    price: 599,
    specs: {
      display: "6.7\" OLED 120Hz",
      dimensions: "162.1 x 76.4 x 8.6 mm",
      weight: "201 g",
      chipset: "Snapdragon 8+ Gen 1",
      ram: "8/12GB",
      storage: "128/256/512GB",
      battery: "4700 mAh",
      camera: "50MP + 50MP",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift"],
      engravingAvailable: true
    }
  },
  {
    id: "nothing-phone-2a",
    name: "Nothing Phone (2a)",
    brand: "Nothing",
    image: "https://via.placeholder.com/1200?text=Nothing+Phone+2a",
    releaseYear: 2024,
    price: 349,
    specs: {
      display: "6.7\" OLED 120Hz",
      dimensions: "161.7 x 76.3 x 8.6 mm",
      weight: "190 g",
      chipset: "Dimensity 7200 Pro",
      ram: "8/12GB",
      storage: "128/256GB",
      battery: "5000 mAh",
      camera: "50MP + 50MP",
      wirelessCharging: false
    },
    customizations: {
      materials: ["matte", "glossy"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift"],
      engravingAvailable: true
    }
  },
  {
    id: "nothing-phone-1",
    name: "Nothing Phone (1)",
    brand: "Nothing",
    image: "https://via.placeholder.com/1200?text=Nothing+Phone+1",
    releaseYear: 2022,
    price: 399,
    specs: {
      display: "6.55\" OLED 120Hz",
      dimensions: "159.2 x 75.8 x 8.3 mm",
      weight: "193 g",
      chipset: "Snapdragon 778G+",
      ram: "8/12GB",
      storage: "128/256GB",
      battery: "4500 mAh",
      camera: "50MP + 50MP",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift"],
      engravingAvailable: true
    }
  },

  // ===================== Sony =====================
  {
    id: "sony-xperia-1-vi",
    name: "Sony Xperia 1 VI",
    brand: "Sony",
    image: "https://via.placeholder.com/1200?text=Xperia+1+VI",
    releaseYear: 2024,
    price: 1199,
    specs: {
      display: "6.5\" OLED 120Hz",
      dimensions: "162 x 71 x 8.2 mm",
      weight: "186 g",
      chipset: "Snapdragon 8 Gen 3",
      ram: "12GB",
      storage: "256/512GB",
      battery: "5000 mAh",
      camera: "48MP + 12MP + 12MP",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "diamond-cut"],
      engravingAvailable: true
    }
  },
  {
    id: "sony-xperia-1-v",
    name: "Sony Xperia 1 V",
    brand: "Sony",
    image: "https://via.placeholder.com/1200?text=Xperia+1+V",
    releaseYear: 2023,
    price: 1199,
    specs: {
      display: "6.5\" OLED 120Hz",
      dimensions: "165 x 71 x 8.3 mm",
      weight: "187 g",
      chipset: "Snapdragon 8 Gen 2",
      ram: "12GB",
      storage: "256/512GB",
      battery: "5000 mAh",
      camera: "48MP + 12MP + 12MP",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy", "metallic"],
      rimStyles: ["classic-chrome", "sport-gt-black", "diamond-cut"],
      engravingAvailable: true
    }
  },

  // ===================== Motorola =====================
  {
    id: "motorola-edge-50-pro",
    name: "Motorola Edge 50 Pro",
    brand: "Motorola",
    image: "https://via.placeholder.com/1200?text=Motorola+Edge+50+Pro",
    releaseYear: 2024,
    price: 699,
    specs: {
      display: "6.7\" pOLED 144Hz",
      dimensions: "161.9 x 73.3 x 8.9 mm",
      weight: "187 g",
      chipset: "Snapdragon 7 Gen 3",
      ram: "8/12GB",
      storage: "128/256/512GB",
      battery: "4500 mAh",
      camera: "50MP + 13MP + 10MP",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift"],
      engravingAvailable: true
    }
  },
  {
    id: "motorola-edge-40-pro",
    name: "Motorola Edge 40 Pro",
    brand: "Motorola",
    image: "https://via.placeholder.com/1200?text=Motorola+Edge+40+Pro",
    releaseYear: 2023,
    price: 599,
    specs: {
      display: "6.67\" pOLED 165Hz",
      dimensions: "161.2 x 74 x 8.6 mm",
      weight: "199 g",
      chipset: "Snapdragon 8 Gen 2",
      ram: "12GB",
      storage: "256/512GB",
      battery: "4600 mAh",
      camera: "50MP + 12MP + 50MP",
      wirelessCharging: true
    },
    customizations: {
      materials: ["matte", "glossy"],
      rimStyles: ["classic-chrome", "sport-gt-black", "street-drift"],
      engravingAvailable: true
    }
  }
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
