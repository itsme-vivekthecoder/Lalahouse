import { propertyConfig } from "@/data/property";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata = {
  title: "Contact Lala ji guest house, Vrindavan",
  description: "Contact Lala ji guest house in Vidhyapeeth, Vrindavan, to ask about room rates, availability and accommodation options.",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mb-12">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#23483D] mb-3">
          Contact Lala ji guest house
        </h1>
        <p className="text-sm sm:text-base text-[#292B28]/80">
          Planning a visit to Vrindavan? Call or message us to enquire about room availability, prices, occupancy and your preferred dates.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl border border-[#E6E0D6] shadow-sm">
          <h3 className="font-serif text-xl font-bold text-[#23483D] mb-4">Direct Phone</h3>
          <p className="text-sm text-[#292B28]/80 mb-4">Call us directly to speak with our desk.</p>
          <a href={`tel:+91${propertyConfig.phone}`} className="text-lg font-bold text-[#C48A45] hover:underline">
            +91 {propertyConfig.phone}
          </a>
        </div>

        <div className="bg-white p-8 rounded-xl border border-[#E6E0D6] shadow-sm">
          <h3 className="font-serif text-xl font-bold text-[#23483D] mb-4">WhatsApp Enquiry</h3>
          <p className="text-sm text-[#292B28]/80 mb-4">Send us your dates and room preferences instantly.</p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#23483D] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#1a3830] transition-colors"
          >
            Open WhatsApp Chat
          </a>
        </div>
      </div>
    </div>
  );
}