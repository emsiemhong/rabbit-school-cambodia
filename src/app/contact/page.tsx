// app/components/ContactSection.tsx
"use client";

import React from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Image from "next/image";
import Image2 from "../../../public/picture/Links/contact.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/Languagecontext";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Request failed");
      reset();
    } catch (e) {
      console.error(e);
    }
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
            <h2 className="text-4xl font-semibold mb-4">
              {t("contactSection.section1.title")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("contactSection.section1.description")}
            </p>

            <div className="space-y-4 text-gray-600 text-sm">
              <p>
                <span className="text-gray-600">
                  {t("contactSection.section1.emailLabel")}
                </span>{" "}
                <br />{" "}
                <a
                  href="mailto:sor.sothearorn@rabbitschoolcambodia.net"
                  className="text-black font-bold underline"
                >
                  {t("contactSection.section1.email")}
                </a>
              </p>

              <p>
                <span className="text-gray-600">
                  {t("contactSection.section1.addressLabel")}
                </span>{" "}
                <br />{" "}
                <a
                  href="https://goo.gl/maps/yMiBC2MgTr1kUyoh6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-bold underline"
                >
                  {t("contactSection.section1.address")}
                </a>
              </p>

              <p>
                <span className="text-gray-600">
                  {" "}
                  {t("contactSection.section1.telephoneLabel")}
                </span>
                <br /> {t("contactSection.section1.telephone")}
              </p>
            </div>

            <p className="text-gray-600 mt-6 text-sm">
              {t("contactSection.section1.instruction")}
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
            <h3 className="text-2xl font-bold mb-4">
              {t("contactSection.section2.title")}
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block mb-2 text-sm text-gray-700">
                  {t("contactSection.section2.nameLabel")}
                </label>
                <input
                  type="text"
                  {...register("name", {
                    required: t("contactSection.section2.nameError"),
                  })}
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
                  {t("contactSection.section2.emailLabel")}
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: t("contactSection.section2.emailErrorRequired"),
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: t("contactSection.section2.emailErrorPattern"),
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
                  {t("contactSection.section2.messageLabel")}
                </label>
                <textarea
                  rows={4}
                  {...register("message", {
                    required: t("contactSection.section2.messageError"),
                  })}
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
                {isSubmitting
                  ? t("contactSection.section2.sendingButton")
                  : t("contactSection.section2.sendButton")}
              </button>
              {isSubmitSuccessful && (
                <p className="text-green-600 mb-4">
                  {t("contactSection.section2.successMessage")}
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
