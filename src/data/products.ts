import { Product } from "@/types/store";

// Note: I've added 'specs' and 'modelCode' to the Product type mentally, 
// if your Type definition errors, you can stick to the original keys or update the type!

export const products: Product[] = [
  {
    id: "aps-gen-50d",
    name: "APS-50D Diesel Turbine",
    description: "Ultra-stabilized heavy-duty diesel power core with automated frequency regulation. Engineered for 24/7 mission-critical industrial backup.",
    price: 0, // Prices hidden for Quote model
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&auto=format&fit=crop&q=80",
    category: "Power_Core"
  },
  {
    id: "aps-gen-100ng",
    name: "EcoStream 100NG Gas Core",
    description: "High-efficiency natural gas thermal reactor. Zero-emission idling technology designed for sustainable residential and commercial grids.",
    price: 0,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80",
    category: "Power_Core"
  },
  {
    id: "aps-ats-400a",
    name: "ATS-400 Logic Controller",
    description: "Zero-latency Automatic Transfer Switch. Features microprocessor-controlled phase synchronization and real-time load shedding.",
    price: 0,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop&q=80",
    category: "Control_Logic"
  },
  {
    id: "aps-pdp-3000",
    name: "LT-3000 Master Distribution",
    description: "Custom-architected power distribution matrix. Rated up to 3000 KVA with integrated vacuum circuit breakers and harmonic filtering.",
    price: 0,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&q=80",
    category: "Distribution"
  },
  {
    id: "aps-can-200",
    name: "Acoustic Shield S-200",
    description: "Advanced sound-attenuated ballistic canopy. Reduces acoustic signature to 75dB using high-density volcanic rock wool insulation.",
    price: 0,
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop&q=80",
    category: "Armoring"
  },
  {
    id: "aps-cab-95xl",
    name: "Titan-95 Armored Matrix",
    description: "Multi-core 95mm XLPE insulated armored transmission cable. Rated for extreme thermal stress and direct subterranean deployment.",
    price: 0,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=80",
    category: "Transmission"
  }
];