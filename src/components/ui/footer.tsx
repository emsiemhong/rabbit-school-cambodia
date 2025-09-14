// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import DonationLink from "./donation-link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-[#623D3C] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[25%_75%] items-start gap-4">
          {/* Left Column - Logo + Donate */}
          <div className="flex flex-col items-start">
            <Image
              src="/logo.png"
              alt="The Rabbit School"
              width={160}
              height={64}
              className="mb-6 h-auto w-auto brightness-0 invert"
              priority
            />
            <DonationLink variant="secondary" text={t('navbar.donate')} />
          </div>

          {/* Right Column - Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Our Program */}
            <div>
              <h3 className="font-semibold mb-3 text-[#FFD45F]">Our Program</h3>
              <ul className="space-y-2 text-sm text-gray-200">
                <li>
                  <Link
                    href="/we-work#education-programs"
                    className="hover:text-[#FFD45F] transition-colors"
                  >
                    Education Program
                  </Link>
                </li>
                <li>
                  <Link
                    href="/we-work#vocational-training"
                    className="hover:text-[#FFD45F] transition-colors"
                  >
                    Vocational Training
                  </Link>
                </li>
                <li>
                  <Link
                    href="/we-work#teacher-training"
                    className="hover:text-[#FFD45F] transition-colors"
                  >
                    Teacher Training
                  </Link>
                </li>
                <li>
                  <Link
                    href="/we-work#advocacy"
                    className="hover:text-[#FFD45F] transition-colors"
                  >
                    Advocacy & Community
                  </Link>
                </li>
              </ul>
            </div>

            {/* About Us */}
            <div>
              <h3 className="font-semibold mb-3 text-[#FFD45F]">About Us</h3>
              <ul className="space-y-2 text-sm text-gray-200">
                <li>
                  <Link
                    href="/about#story"
                    className="hover:text-[#FFD45F] transition-colors"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-[#FFD45F] transition-colors"
                  >
                    Where We Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#partners"
                    className="hover:text-[#FFD45F] transition-colors"
                  >
                    Our Partners
                  </Link>
                </li>
              </ul>
            </div>

            {/* News */}
            <div>
              <h3 className="font-semibold mb-3 text-[#FFD45F]">News</h3>
              <ul className="space-y-2 text-sm text-gray-200">
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#FFD45F] transition-colors"
                  >
                    RSOs Corner
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about#gallery"
                    className="hover:text-[#FFD45F] transition-colors"
                  >
                    Photo Essays
                  </Link>
                </li>
                <li>
                  <Link
                    href="/we-work#making-paper"
                    className="hover:text-[#FFD45F] transition-colors"
                  >
                    Videos
                  </Link>
                </li>
              </ul>
            </div>

            {/* Get Involved */}
            <div>
              <h3 className="font-semibold mb-3 text-[#FFD45F]">Get Involved</h3>
              <ul className="space-y-2 text-sm text-gray-200">
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-[#FFD45F] transition-colors"
                  >
                    Volunteers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/jobs"
                    className="hover:text-[#FFD45F] transition-colors"
                  >
                    Job Opportunities
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-[#FFD45F] transition-colors"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact with icons */}
            <div>
              <h3 className="font-semibold mb-3 text-[#FFD45F]">Contact</h3>

              {/* Email */}
              <div className="text-sm flex items-center gap-3 mb-3">
                <Mail className="w-5 h-5 text-[#8BAEA7]" />
                <p>
                  <a
                    href="mailto:sor.sothearom@rabbitschoolcambodia.net"
                    className="text-gray-200 hover:text-[#FFD45F] transition-colors"
                  >
                    sor.sothearom@rabbit <br />
                    schoolcambodia.net
                  </a>
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 mb-3 text-sm">
                <Phone className="w-5 h-5 text-[#8BAEA7]" />
                <a
                  href="tel:+85512345678"
                  className="text-gray-200 hover:text-[#FFD45F] transition-colors"
                >
                  +855 12 345 678
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3">
                <MapPin className="w-10 h-10 text-[#8BAEA7]" />
                <a
                  href="https://www.google.com/maps/place/Rabbit+School+Organization/@11.5789927,104.896293,715m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3109510c204573a7:0x5e2af45c46d089d4!8m2!3d11.5789927!4d104.8988679!16s%2Fg%2F11v0zgm5sc?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-[#FFD45F] transition-colors text-sm"
                >
                  Toul Kork Primary School, Phnom Penh
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t border-[#7A4F4E] pt-6">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} The Rabbit School. All rights reserved.
          </p>
          <div className="flex gap-4 text-gray-300 text-lg mt-4 md:mt-0">
            <Link
              href="#"
              className="hover:text-[#FFD45F] transition-colors"
            >
              <i className="fab fa-youtube"></i>
            </Link>
            <Link
              href="#"
              className="hover:text-[#FFD45F] transition-colors"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              href="#"
              className="hover:text-[#FFD45F] transition-colors"
            >
              <i className="fab fa-twitter"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}