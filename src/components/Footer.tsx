import Link from "next/link";
import { propertyConfig } from "@/data/property";

export default function Footer() {
  return (
    <footer className="bg-[#23483D] text-[#F8F5EF] pt-16 pb-24 md:pb-16 border-t border-[#E6E0D6]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-serif text-xl font-bold mb-3">{propertyConfig.name}</h3>
          <p className="text-sm text-[#F8F5EF]/80 mb-4">
            A peaceful and welcoming place to stay during your sacred visit to Vrindavan.
          </p>
          <p className="text-sm text-[#C48A45] font-medium">{propertyConfig.address}</p>
        </div>

        <div>
          <h4 className="font-serif text-lg font-semibold mb-3 text-[#C48A45]">Quick Links</h4>
          <ul className="space-y-2 text-sm text-[#F8F5EF]/80">
            <li><Link href="/rooms" className="hover:text-white transition-colors">Our Rooms</Link></li>
            <li><Link href="/gallery" className="hover:text-white transition-colors">Photo Gallery</Link></li>
            <li><Link href="/location" className="hover:text-white transition-colors">Location & Directions</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/faqs" className="hover:text-white transition-colors">Frequently Asked Questions</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-semibold mb-3 text-[#C48A45]">Direct Enquiries</h4>
          <p className="text-sm text-[#F8F5EF]/80 mb-3">
            For room availability, rates, and bookings, please reach out to us directly by phone or WhatsApp.
          </p>
          <p className="text-sm font-semibold text-white mb-1">Phone / WhatsApp:</p>
          <a href={`tel:+91${propertyConfig.phone}`} className="text-sm text-[#C48A45] hover:underline">
            +91 {propertyConfig.phone}
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F8F5EF]/60">
        <p>© {new Date().getFullYear()} {propertyConfig.name}. All rights reserved.</p>
        <Link href="/privacy-policy" className="hover:text-white transition-colors mt-2 sm:mt-0">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}