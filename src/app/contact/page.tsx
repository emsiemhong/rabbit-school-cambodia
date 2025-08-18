// app/components/ContactSection.tsx
"use client";

import React from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const ContactSection: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="w-full px-4 md:px-8 lg:px-16 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Side */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Get in touch</h2>
            <p className="text-gray-600 mb-4">
              Have any questions? We&#39;d love to hear from you!
            </p>

            <div className="space-y-2 text-gray-700 text-sm">
              <p>
                <label htmlFor=""></label>
                <span className="font-semibold">E-mail:</span>{" "}
                <a
                  href="mailto:sor.sothearorn@rabbitschoolcambodia.net"
                  className="text-black-600 font-bold underline"
                >
                  sor.sothearorn@rabbitschoolcambodia.net
                </a>
              </p>

              <p>
                <span className="font-semibold">Address:</span>{" "}
                <a
                  href="https://goo.gl/maps/yMiBC2MgTr1kUyoh6"
                  target="_blank"
                  className="text-black-600 font-bold underline"
                  rel="noopener noreferrer"
                >
                  https://goo.gl/maps/yMiBC2MgTr1kUyoh6
                </a>
              </p>

              <p>
                <span className="font-semibold">Telephone:</span> +855 68 901
                971 / 885 17 525 815
              </p>
            </div>
            {/* Right Side - Map Placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              {/* Replace with an iframe for Google Map if needed */}
              <span className="text-gray-500">Map / Image here</span>
            </div>

            <p className="mt-4 text-gray-600 text-sm">
              Please use the contact information above, or fill the form:
            </p>

            <h3 className="mt-6 text-lg font-bold">General Inquiries</h3>

            {/* Form */}
            <form className="mt-4 space-y-4">
              <label htmlFor="">Your Name*</label>
              <input
                type="text"
                placeholder=""
                className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <label htmlFor="">Your Email*</label>
              <input
                type="email"
                placeholder=""
                className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <label htmlFor="">Your</label>
              <textarea
                placeholder=""
                rows={3}
                className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded text-sm hover:bg-blue-300"
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
