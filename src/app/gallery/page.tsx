export const metadata = {
  title: "Photos of Lala ji guest house, Vrindavan",
  description: "View photographs of Lala ji guest house in Vidhyapeeth, Vrindavan. Contact the property to confirm room details and availability.",
};

export default function GalleryPage() {
  const placeholders = ["Double Room", "Triple Room", "Family Room", "Bathroom View", "Property Exterior", "Common Area"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-2xl mb-12">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#23483D] mb-3">
          A Look Inside Lala ji guest house
        </h1>
        <p className="text-sm sm:text-base text-[#292B28]/80">
          Browse photographs of our rooms and property spaces to help plan your stay. For the most suitable room and current availability, please contact us directly.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {placeholders.map((title, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-[#E6E0D6] overflow-hidden shadow-sm">
            <div className="h-60 bg-[#E6E0D6] flex items-center justify-center text-[#292B28]/40">
              <span className="text-sm font-medium">[ {title} Photo ]</span>
            </div>
            <div className="p-4">
              <h3 className="font-serif text-base font-semibold text-[#23483D]">{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}