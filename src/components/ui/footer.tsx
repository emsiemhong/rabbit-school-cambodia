// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react"; // icons

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
            <button className="bg-[#5a2d27] text-white px-5 py-2 rounded-3xl hover:bg-[#4a241f] transition">
              Subscribe
            </button>
          </div>

          {/* Right Column - Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Our Program */}
            <div>
              <h3 className="font-semibold mb-3 text-gray-900">Our Program</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <Link href="#">Education Program</Link>
                </li>
                <li>
                  <Link href="#">Vocational Training</Link>
                </li>
                <li>
                  <Link href="#">Teacher Training</Link>
                </li>
                <li>
                  <Link href="#">Advocacy & Community</Link>
                </li>
              </ul>
            </div>

            {/* About Us */}
            <div>
              <h3 className="font-semibold mb-3 text-gray-900">About Us</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <Link href="#">Our Story</Link>
                </li>
                <li>
                  <Link href="#">Where We Work</Link>
                </li>
                <li>
                  <Link href="#">Our Partners</Link>
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
                  <Link href="#">Photo Essays</Link>
                </li>
                <li>
                  <Link href="#">Videos</Link>
                </li>
              </ul>
            </div>

            {/* Get Involved */}
            <div>
              <h3 className="font-semibold mb-3 text-gray-900">Get Involved</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <Link href="#">Volunteers</Link>
                </li>
                <li>
                  <Link href="#">Job Opportunities</Link>
                </li>
                <li>
                  <Link href="#">Careers</Link>
                </li>
              </ul>
            </div>

            {/* Contact with icons */}
            <div>
              <h3 className="font-semibold mb-3 text-gray-900">Contact</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-600" />
                  <span>contact@rabbitschool.org</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-600" />
                  <span>+855 12 345 678</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-600" />
                  <Link href="#" className="hover:underline">
                    Toul Kork Primary School, Phnom Penh
                  </Link>
                </li>
              </ul>
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
