export interface Room {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  occupancy: string;
  bedType: string;
  features: string[];
}

export const roomsData: Room[] = [
  {
    id: "double",
    name: "Double Room",
    slug: "double-room",
    shortDescription: "Comfortable private room ideal for couples or two travelers.",
    description: "Our double rooms offer a quiet, clean, and restful space for pilgrims and visitors. Equipped with comfortable bedding and essential amenities for a peaceful stay in Vrindavan.",
    occupancy: "2 Guests",
    bedType: "1 Double Bed",
    features: ["AC / Non-AC options available", "Attached private bathroom", "Clean linen and towels provided", "Wardrobe storage"]
  },
  {
    id: "triple",
    name: "Triple Room",
    slug: "triple-room",
    shortDescription: "Spacious room designed for small families or groups of three.",
    description: "Designed with extra room space, our triple rooms comfortably accommodate three guests without feeling crowded. Perfect for small families visiting Braj together.",
    occupancy: "3 Guests",
    bedType: "1 Double Bed + 1 Single Bed",
    features: ["AC / Non-AC options available", "Attached private bathroom", "Spacious layout", "Natural light"]
  },
  {
    id: "family",
    name: "Family Room",
    slug: "family-room",
    shortDescription: "Large, flexible accommodation for families and groups.",
    description: "Our family room provides generous space to keep everyone together under one roof. Clean, practical, and welcoming for family yatras to Vrindavan.",
    occupancy: "4-5 Guests",
    bedType: "Multiple Beds / Custom Configuration",
    features: ["AC / Non-AC options available", "Large attached private bathroom", "Ample luggage space", "Quiet environment"]
  }
];