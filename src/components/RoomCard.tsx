import { Room } from "@/data/rooms";
import { getWhatsAppLink } from "@/lib/whatsapp";

interface RoomCardProps {
  room: Room;
}

export default function RoomCard({ room }: RoomCardProps) {
  const whatsappUrl = getWhatsAppLink({ roomType: room.name });

  return (
    <div className="bg-white rounded-xl border border-[#E6E0D6] overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
      <div>
        <div className="h-56 bg-[#E6E0D6] relative flex items-center justify-center text-[#292B28]/40">
          <span className="text-sm font-medium">[ {room.name} Photograph ]</span>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-serif text-xl font-bold text-[#23483D]">{room.name}</h3>
            <span className="text-xs bg-[#F8F5EF] text-[#292B28] px-2.5 py-1 rounded-full border border-[#E6E0D6]">
              {room.occupancy}
            </span>
          </div>
          <p className="text-sm text-[#292B28]/80 mb-4">{room.shortDescription}</p>
          <ul className="space-y-1.5 mb-6 text-xs text-[#292B28]">
            {room.features.map((feature: string, idx: number) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C48A45]" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-6 pt-0 flex items-center gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center bg-[#23483D] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-[#1a3830] transition-colors"
        >
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  );
}