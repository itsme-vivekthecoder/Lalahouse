export const metadata = {
  title: "Frequently Asked Questions | Lala ji guest house",
  description: "Find answers to common questions about room options, prices, availability and contacting Lala ji guest house in Vrindavan.",
};

export default function FaqsPage() {
  const faqs = [
    { q: "What room types are available?", a: "We offer double, triple, and family room options." },
    { q: "Are AC and non-AC rooms available?", a: "Yes, AC and non-AC options are available depending on your preference and room allocation." },
    { q: "Are attached bathrooms included?", a: "Yes, all rooms come with attached private bathrooms." },
    { q: "What are the check-in and check-out times?", a: "Standard check-in is 12:00 PM and check-out is 10:00 AM." },
    { q: "How do I book a room?", a: "You can contact us directly via phone or WhatsApp to check availability and confirm your booking details." },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mb-12">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#23483D] mb-3">
          Frequently Asked Questions
        </h1>
        <p className="text-sm sm:text-base text-[#292B28]/80">
          Find answers to common questions regarding stays at Lala ji guest house.
        </p>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl border border-[#E6E0D6] shadow-sm">
            <h3 className="font-serif text-lg font-semibold text-[#23483D] mb-2">{faq.q}</h3>
            <p className="text-sm text-[#292B28]/80">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}