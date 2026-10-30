import { propertyConfig } from "@/data/property";

interface EnquiryParams {
  roomType?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  acPreference?: string;
}

export function getWhatsAppLink(params?: EnquiryParams): string {
  const {
    roomType = "Double / Triple / Family",
    checkIn = "[Date]",
    checkOut = "[Date]",
    guests = "[Number]",
    acPreference = "AC / Non-AC / Either"
  } = params || {};

  const message = `Namaste Lala ji guest house, I am planning a visit to Vrindavan. Please share the room availability and rates for my stay.

Check-in: ${checkIn}
Check-out: ${checkOut}
Guests: ${guests}
Preferred room: ${roomType}
AC preference: ${acPreference}

Please confirm the total price, facilities and booking procedure. Thank you.`;

  return `https://wa.me/${propertyConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}