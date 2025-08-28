// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react"; // icons
import { FaHandHoldingHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-200 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[25%_75%] items-start">
          {/* Left Column - Logo + Subscribe */}
          <div className="flex flex-col items-start">
            <Image
              src="/logo.png"
              alt="The Rabbit School"
              width={160}
              height={64}
              className="mb-6 h-auto w-auto"
              priority
            />
           <div className="w-30">
            <Link
              href="/donate"
              className="hidden text-center md:flex items-center space-x-2 bg-orange-400 hover:bg-orange-500 text-white font-medium px-5 py-2 rounded-full transition"
            >
              <FaHandHoldingHeart />
              <span>Donate</span>
            </Link>
          </div>
          </div>

          {/* Right Column - Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Our Program */}
            <div>
              <h3 className="font-semibold mb-3 text-gray-900">Our Program</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <Link href="/we-work#education-programs">
                    Education Program
                  </Link>
                </li>
                <li>
                  <Link href="/we-work#vocational-training">
                    Vocational Training
                  </Link>
                </li>
                <li>
                  <Link href="/we-work#teacher-training">Teacher Training</Link>
                </li>
                <li>
                  <Link href="/we-work#advocacy">Advocacy & Community</Link>
                </li>
              </ul>
            </div>

            {/* About Us */}
            <div>
              <h3 className="font-semibold mb-3 text-gray-900">About Us</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <Link href="/about#story">Our Story</Link>
                </li>
                <li>
                  <Link href="/about">Where We Work</Link>
                </li>
                <li>
                  <Link href="/#partners">Our Partners</Link>
                </li>
              </ul>
            </div>

            {/* News */}
            <div>
              <h3 className="font-semibold mb-3 text-gray-900">News</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <Link href="#">RSOs Corner</Link>
                </li>
                <li>
                  <Link href="/about#gallery">Photo Essays</Link>
                </li>
                <li>
                  <Link href="/we-work#making-paper">Videos</Link>
                </li>
              </ul>
            </div>

            {/* Get Involved */}
            <div>
              <h3 className="font-semibold mb-3 text-gray-900">Get Involved</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <Link href="/contact">Volunteers</Link>
                </li>
                <li>
                  <Link href="/jobs">Job Opportunities</Link>
                </li>
                <li>
                  <Link href="/contact">Careers</Link>
                </li>
              </ul>
            </div>

            {/* Contact with icons */}
            <div>
              <h3 className="font-semibold mb-3 text-gray-900">Contact</h3>

              {/* Email */}
              <div className="text-sm flex items-center gap-3 mb-3">
                
                <Mail className="w-5 h-5 text-gray-600" />
                <p>
                  <a
                    href="mailto:sor.sothearom@rabbitschoolcambodia.net"
                    className="text-blue-600 hover:underline"
                  >
                    sor.sothearom@rabbit <br />
                    schoolcambodia.net
                  </a>
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 mb-3 text-sm">
                <Phone className="w-5 h-5 text-gray-600" />
                <a
                  href="tel:+85512345678"
                  className="text-gray-700 hover:underline"
                >
                  +855 12 345 678
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 ">
                <MapPin className="w-10 h-10 text-gray-600" />
                <a
                  href="https://www.google.com/maps/place/Rabbit+School+Organization/@11.5789927,104.896293,715m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3109510c204573a7:0x5e2af45c46d089d4!8m2!3d11.5789927!4d104.8988679!16s%2Fg%2F11v0zgm5sc?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:underline text:sm"
                >
                  Toul Kork Primary School, Phnom Penh
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center border-t border-gray-300 pt-6">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} The Rabbit School. All rights reserved.
          </p>
          <div className="flex gap-2 text-gray-600 text-lg mt-4 md:mt-0">
            <Link href="#" className="hover:text-black">
              <i className="fab fa-youtube"></i>
            </Link>
            <Link href="#" className="hover:text-black">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link href="#" className="hover:text-black">
              <i className="fab fa-twitter"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
