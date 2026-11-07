import { propertyConfig } from "@/data/property";

export const metadata = {
  title: "About " + propertyConfig.name + ", Vrindavan",
  description: "Learn about " + propertyConfig.name + " in " + propertyConfig.tagline + " , Vrindavan, and enquire about accommodation for your visit.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#23483D] mb-6">
        About {propertyConfig.name}
      </h1>
      <div className="bg-white p-8 rounded-xl border border-[#E6E0D6] shadow-sm space-y-4 text-sm sm:text-base text-[#292B28]/80 leading-relaxed">
        <p>
          {propertyConfig.name} welcomes enquiries from visitors planning a stay in Vrindavan. We offer double, triple and family room options tailored for comfortable pilgrim stays.
        </p>
        <p>
          Our property focuses on cleanliness, peaceful surroundings, and a respectful environment aligned with Braj's spiritual character. Contact us to discuss your travel dates and accommodation requirements.
        </p>
      </div>
    </div>
  );
}