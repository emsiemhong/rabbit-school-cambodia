// app/components/ContactSection.tsx
"use client";

import React from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const ContactSection: React.FC = () => {
  return (
    <>
      <Navbar />

      {/* Section 1 - Info + Image */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          {/* Left - Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
            <p className="text-gray-600 mb-4">
              Have any questions? We&#39;d love to hear from you!
            </p>

            <div className="space-y-4 text-gray-700 text-sm">
              <p>
                <span className="font-semibold">E-mail:</span>{" "}
                <a
                  href="mailto:sor.sothearorn@rabbitschoolcambodia.net"
                  className="text-blue-600 underline"
                >
                  sor.sothearorn@rabbitschoolcambodia.net
                </a>
              </p>

              <p>
                <span className="font-semibold">Address:</span>{" "}
                <a
                  href="https://goo.gl/maps/yMiBC2MgTr1kUyoh6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Toul Kork Primary School, Phnom Penh
                </a>
              </p>

              <p>
                <span className="font-semibold">Telephone:</span> +855 68 901
                971 / 885 17 525 815
              </p>
            </div>

            <p className="text-gray-600 mt-6 text-sm">
              Please use the contact information above, or fill the form below:
            </p>
          </div>

          {/* Right - Image / Map */}
          <div className="w-full h-64 md:h-80 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
            {/* Replace with real image or Google Maps iframe */}
            <img
              src="/contact-map.jpg"
              alt="Map or Location"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 2 - Contact Form */}
      <section className="w-full py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-2xl">
            <h3 className="text-xl font-bold mb-4">General Inquiries</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email*"
                  className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-[#5a2d27] text-white px-5 py-2 rounded-3xl text-sm hover:bg-[#4a241f] transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactSection;
