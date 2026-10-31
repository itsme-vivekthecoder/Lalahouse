import RoomCard from "@/components/RoomCard";
import { roomsData, Room } from "@/data/rooms";
import { propertyConfig } from "@/data/property";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function Home() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-[#C48A45] block mb-3">
            {propertyConfig.name} · {propertyConfig.tagline}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#23483D] leading-tight mb-6">
            Plan Your Stay in Vrindavan
          </h1>
          <p className="text-base sm:text-lg text-[#292B28]/80 mb-8 leading-relaxed">
            Looking for accommodation for your Vrindavan visit? Explore double, triple and family room options at {propertyConfig.name}. Contact us directly to ask about availability, room rates and your preferred dates.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#23483D] text-white px-8 py-3.5 rounded-lg font-medium text-center hover:bg-[#1a3830] transition-colors shadow-sm"
            >
              Enquire on WhatsApp
            </a>
            <a
              href={`tel:+91${propertyConfig.phone}`}
              className="bg-white text-[#23483D] border border-[#E6E0D6] px-8 py-3.5 rounded-lg font-medium text-center hover:bg-[#E6E0D6]/30 transition-colors shadow-sm"
            >
              Call the Guest House
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-[#E6E0D6] text-xs text-[#292B28]/80 font-medium">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C48A45]" />
              Double, triple & family rooms
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C48A45]" />
              AC & non-AC options
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C48A45]" />
              Attached bathrooms
            </div>
          </div>
        </div>

        <div className="h-80 sm:h-96 lg:h-[450px] bg-[#E6E0D6] rounded-2xl flex items-center justify-center text-[#292B28]/40 border border-[#E6E0D6] shadow-sm">
          <span className="text-sm font-medium">[ Real Property / Room Photograph ]</span>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 border-t border-[#E6E0D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#23483D] mb-3">
              Explore Our Room Options
            </h2>
            <p className="text-sm sm:text-base text-[#292B28]/80">
              Choose the accommodation that fits your travel group. Enquire directly for date availability and pricing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roomsData.map((room: Room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-xl border border-[#E6E0D6] shadow-sm">
          <h3 className="font-serif text-2xl font-bold text-[#23483D] mb-4">Confirmed Facilities</h3>
          <ul className="space-y-3 text-sm text-[#292B28]/80">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C48A45]" />
              AC / Non-AC accommodation choices
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C48A45]" />
              Clean, private attached bathrooms
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C48A45]" />
              Peaceful environment suitable for pilgrims and families
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl border border-[#E6E0D6] shadow-sm">
          <h3 className="font-serif text-2xl font-bold text-[#23483D] mb-4">Visit Vrindavan</h3>
          <p className="text-sm text-[#292B28]/80 mb-4">
            Located in Vidhyapeeth, Vrindavan, {propertyConfig.name} provides a comfortable base for visitors traveling to Banke Bihari Temple and other holy sites across Braj.
          </p>
          <p className="text-xs text-[#C48A45] font-semibold">Contact us for verified directions and travel guidance.</p>
        </div>
      </section>
    </div>
  );
}