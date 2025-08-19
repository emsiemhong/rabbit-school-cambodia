// components/Footer.tsx
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-200 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-7">
          {/* Logo & Subscribe */}
          <div className="col-span-1">
            <div className="flex flex-col items-start">
              <img
                src="/logo.png"
                alt="The Rabbit School"
                className="h-15 w-[80] mb-4"
              />
              <button className="bg-[#5a2d27] mt-6 text-white px-4 py-2 rounded-full hover:bg-[#4a241f] transition">
                Subscribe
              </button>
            </div>
          </div>
          <div className="col-span-5 grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Our Program */}
          <div>
            <h3 className="font-semibold mb-3">Our Program</h3>
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
                <Link href="#">Advocacy And Community Building</Link>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="font-semibold mb-3">About Us</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <Link href="#">Our Story</Link>
              </li>
              <li>
                <Link href="#">Where We Work</Link>
              </li>
              <li>
                <Link href="#">Our Partner</Link>
              </li>
            </ul>
          </div>

          {/* News */}
          <div>
            <h3 className="font-semibold mb-3">News</h3>
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
            <h3 className="font-semibold mb-3">Get Involved</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <Link href="#">Volunteers</Link>
              </li>
              <li>
                <Link href="#">Job Opportunity</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold mb-3">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-center gap-3">
                <Mail size={16} /> contact@rabbitschool.org
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} /> +855 12 345 678
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} />
                <Link href="#" className="hover:underline">
                  Toul Kork Primary School in Phnom Penh.
                </Link>
              </li>
            </ul>
          </div>
        </div>
          </div>
          

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col md:flex-row justify-end items-center gap-4 ">
          <div className="flex gap-6 text-gray-600 text-lg">
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
