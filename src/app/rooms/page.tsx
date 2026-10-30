import RoomCard from "@/components/RoomCard";
import { roomsData } from "@/data/rooms";

export const metadata = {
  title: "Rooms at Lala ji guest house, Vrindavan",
  description: "Explore double, triple and family room options at Lala ji guest house in Vidhyapeeth, Vrindavan. Ask about AC and non-AC availability and current rates.",
};

export default function RoomsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-2xl mb-12">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#23483D] mb-3">
          Explore Our Room Options
        </h1>
        <p className="text-sm sm:text-base text-[#292B28]/80">
          Choose the room type that best suits your group. Lala ji guest house has double, triple and family room options. Confirm availability and allocation with us before arrival.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {roomsData.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
}