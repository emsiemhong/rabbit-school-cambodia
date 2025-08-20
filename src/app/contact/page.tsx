// app/components/ContactSection.tsx
"use client";

import React from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Image from "next/image";
import Image2 from "../../../public/picture/Links/contact.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <>
      <Navbar />

      {/* Section 1 - Info + Image */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Contact Info (animate left to right) */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold mb-4">Get in touch</h2>
            <p className="text-gray-600 mb-4">
              Have any questions? We&#39;d love to hear from you!
            </p>

            <div className="space-y-4 text-gray-600 text-sm">
              <p>
                <span className="text-gray-600">E-mail</span> <br />{" "}
                <a
                  href="mailto:sor.sothearorn@rabbitschoolcambodia.net"
                  className="text-black font-bold underline"
                >
                  sor.sothearorn@rabbitschoolcambodia.net
                </a>
              </p>

              <p>
                <span className="text-gray-600">Address</span> <br />{" "}
                <a
                  href="https://goo.gl/maps/yMiBC2MgTr1kUyoh6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-bold underline"
                >
                  Toul Kork Primary School, Phnom Penh
                </a>
              </p>

              <p>
                <span className="text-gray-600">Telephone</span>
                <br /> +855 68 901 971 / 885 17 525 815
              </p>
            </div>

            <p className="text-gray-600 mt-6 text-sm">
              Please use the contact information above, or fill the form below:
            </p>
          </motion.div>

          {/* Right - Image (animate bottom to top) */}
          <motion.div
            className="w-full h-64 md:h-80 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <Image
              src={Image2}
              alt="Map or Location"
              className="w-full h-full object-fill "
            />
          </motion.div>
        </div>
      </section>

      {/* Section 2 - Contact Form (animate left to right) */}
      <motion.section
        className="w-full py-12"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-[500px]">
            <h3 className="text-2xl font-bold mb-4">General Inquiries</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block mb-2 text-sm text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="w-full border bg-gray-100 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: "Enter a valid email",
                    },
                  })}
                  className="w-full border bg-gray-100 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-700">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  {...register("message", { required: "Message is required" })}
                  className="w-full border bg-gray-100 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#5a2d27] text-white px-5 py-2 rounded-3xl text-sm hover:bg-[#4a241f] transition disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
              {isSubmitSuccessful && (
                <p className="text-green-600 mb-4">
                  ✅ Thank you! Your message has been sent.
                </p>
              )}
            </form>
          </div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
};

export default ContactSection;
