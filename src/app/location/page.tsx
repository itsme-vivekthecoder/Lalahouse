import { propertyConfig } from "@/data/property";

export const metadata = {
  title: "Shanti Guest House Location, Vidhyapeeth, Vrindavan",
  description: "Find the location of Shanti Guest House in Vidhyapeeth, Vrindavan. Ask for directions and information for your visit to Banke Bihari Temple.",
};

export default function LocationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-2xl mb-12">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#23483D] mb-3">
          Find Us in Vrindavan
        </h1>
        <p className="text-sm sm:text-base text-[#292B28]/80">
          Shanti Guest House is located in Vidhyapeeth, Vrindavan, Uttar Pradesh. Contact us directly for verified directions and route guidance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl border border-[#E6E0D6] shadow-sm">
          <h3 className="font-serif text-xl font-bold text-[#23483D] mb-3">Address Details</h3>
          <p className="text-sm text-[#292B28]/80 mb-6">{propertyConfig.address}</p>
          <a
            href={`tel:+91${propertyConfig.phone}`}
            className="inline-block bg-[#23483D] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#1a3830] transition-colors"
          >
            Call for Directions
          </a>
        </div>
        <div className="bg-white rounded-xl border border-[#E6E0D6] overflow-hidden shadow-sm h-80 flex items-center justify-center text-[#292B28]/40">
          <span className="text-sm font-medium">[ Verified Map Pin & Directions ]</span>
        </div>
      </div>
    </div>
  );
}