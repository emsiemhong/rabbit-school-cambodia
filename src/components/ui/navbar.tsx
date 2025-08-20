"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHandHoldingHeart } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locale, setLocale] = useState<"en" | "km">("en");

  // Translation object
  const translations = {
    en: {
      home: "Home",
      about: "About Us",
      howWeWork: "How We Work",
      getInvolved: "Get Involved",
      contact: "Contact",
      donate: "Donate",
      language: "ខ្មែរ",
    },
    km: {
      home: "ទំព័រដើម",
      about: "អំពីពួកយើង",
      howWeWork: "របៀបដែលយើងធ្វើការ",
      getInvolved: "ចូលរួម",
      contact: "ទំនាក់ទំនង",
      donate: "បរិច្ចាក",
      language: "EN",
    },
  };

  // Toggle language
  const toggleLanguage = () => {
    setLocale(locale === "en" ? "km" : "en");
  };

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Rabbit School"
            width={150}
            height={45}
            className="w-[150px] h-auto md:w-[220px]"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-800">
          <Link href="/" className="hover:text-yellow-500 transition">
            {translations[locale].home}
          </Link>
          <Link href="/about" className="hover:text-yellow-500 transition">
            {translations[locale].about}
          </Link>
          <Link
            href="/how-we-work"
            className="hover:text-yellow-500 transition"
          >
            {translations[locale].howWeWork}
          </Link>
          <Link
            href="/get-involved"
            className="hover:text-yellow-500 transition"
          >
            {translations[locale].getInvolved}
          </Link>
          <Link href="/contact" className="hover:text-yellow-500 transition">
            {translations[locale].contact}
          </Link>

          {/* Language Button */}
          <button
            onClick={toggleLanguage}
            className="ml-4 px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 transition"
          >
            {translations[locale].language}
          </button>
        </nav>

        {/* Donate Button */}
        <Link
          href="/donate"
          className="hidden md:flex items-center space-x-2 bg-orange-400 hover:bg-orange-500 text-white font-medium px-5 py-2 rounded-full transition"
        >
          <FaHandHoldingHeart />
          <span>{translations[locale].donate}</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col space-y-1">
            <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
              {translations[locale].home}
            </Link>
            <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
              {translations[locale].about}
            </Link>
            <Link
              href="/how-we-work"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              {translations[locale].howWeWork}
            </Link>
            <Link
              href="/get-involved"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              {translations[locale].getInvolved}
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              {translations[locale].contact}
            </Link>

            <Link
              href="/donate"
              className="flex items-center space-x-2 bg-orange-400 hover:bg-orange-500 text-white font-medium px-4 py-2 m-4 rounded-full transition"
            >
              <FaHandHoldingHeart />
              <span>{translations[locale].donate}</span>
            </Link>

            {/* Mobile Language Button */}
            <button
              onClick={toggleLanguage}
              className="mx-4 px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 transition"
            >
              {translations[locale].language}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
