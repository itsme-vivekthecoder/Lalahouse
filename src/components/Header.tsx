"use client";

import Link from "next/link";
import { useState } from "react";
import { propertyConfig } from "@/data/property";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F8F5EF]/90 backdrop-blur-md border-b border-[#E6E0D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="font-serif text-xl sm:text-2xl font-bold text-[#23483D]">
            {propertyConfig.name}
          </span>
          <span className="text-xs tracking-wider text-[#C48A45] uppercase font-medium">
            {propertyConfig.tagline}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium text-[#292B28] text-sm">
          <Link href="/" className="hover:text-[#23483D] transition-colors">Home</Link>
          <Link href="/rooms" className="hover:text-[#23483D] transition-colors">Rooms</Link>
          <Link href="/gallery" className="hover:text-[#23483D] transition-colors">Gallery</Link>
          <Link href="/location" className="hover:text-[#23483D] transition-colors">Location</Link>
          <Link href="/about" className="hover:text-[#23483D] transition-colors">About</Link>
          <Link href="/faqs" className="hover:text-[#23483D] transition-colors">FAQs</Link>
          <Link href="/contact" className="hover:text-[#23483D] transition-colors">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#23483D] text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-[#1a3830] transition-all shadow-sm"
          >
            Enquire on WhatsApp
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#23483D] focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F8F5EF] border-b border-[#E6E0D6] px-4 pt-2 pb-6 space-y-3">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[#292B28] font-medium border-b border-[#E6E0D6]/50">Home</Link>
          <Link href="/rooms" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[#292B28] font-medium border-b border-[#E6E0D6]/50">Rooms</Link>
          <Link href="/gallery" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[#292B28] font-medium border-b border-[#E6E0D6]/50">Gallery</Link>
          <Link href="/location" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[#292B28] font-medium border-b border-[#E6E0D6]/50">Location</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[#292B28] font-medium border-b border-[#E6E0D6]/50">About</Link>
          <Link href="/faqs" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[#292B28] font-medium border-b border-[#E6E0D6]/50">FAQs</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[#292B28] font-medium border-b border-[#E6E0D6]/50">Contact</Link>
          <div className="pt-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#23483D] text-white py-3 rounded-lg font-medium text-sm shadow-sm"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}