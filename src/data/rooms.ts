export interface Room {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  occupancy: string;
  bedType: string;
  image: string;
  features: string[];
}

export const roomsData: Room[] = [
  {
    id: "double",
    name: "Double Room",
    slug: "double-room",
    shortDescription: "Comfortable private room ideal for couples or two travelers.",
    description: "Our double rooms offer a quiet, clean, and restful space for pilgrims and visitors.",
    occupancy: "2 Guests",
    bedType: "1 Double Bed",
    image: "/images/double-room.jpg",
    features: ["AC / Non-AC options available", "Attached bathroom", "Clean linen and towels"]
  },
  {
    id: "triple",
    name: "Triple Room",
    slug: "triple-room",
    shortDescription: "Spacious room designed for small families or groups of three.",
    description: "Designed with extra space, our triple rooms comfortably accommodate three guests.",
    occupancy: "3 Guests",
    bedType: "1 Double Bed + 1 Single Bed",
    image: "/images/triple-room.jpg",
    features: ["AC / Non-AC options available", "Attached bathroom", "Spacious layout"]
  },
  {
    id: "family",
    name: "Family Room",
    slug: "family-room",
    shortDescription: "Large, flexible accommodation for families and groups.",
    description: "Our family room provides generous space to keep everyone together under one roof.",
    occupancy: "4-5 Guests",
    bedType: "Multiple Beds",
    image: "/images/family-room.jpg",
    features: ["AC / Non-AC options available", "Large attached bathroom", "Quiet environment"]
  }
];