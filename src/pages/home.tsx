"use client";

import Image from "next/image";
import {
  Users,
  BookOpen,
  Heart,
  Globe,
  Rainbow,
  Backpack,
  MapPin,
  GraduationCap,
} from "lucide-react";
import pic1 from "../../public/picture/header.jpg";
import pic3 from "../../public/picture/Screenshot 2025-04-13 at 14.20.06.png";
import pic2 from "../../public/images/ss.jpg";
import CountUp from "react-countup";
import { use } from "react";
import { motion } from "framer-motion";
import logos from "../../public/Donates/logo (1).png";
import logos2 from "../../public/Donates/logo(2).png";
import logos3 from "../../public/Donates/logo(4).png";
import logos4 from "../../public/Donates/logo(5).png";
import logos5 from "../../public/Donates/logo(3).png";
import logos6 from "../../public/Donates/logo(6).jpg";
import logos7 from "../../public/Donates/logo(7).png";
import donate from "../../public/donate.png";
import { FaHandHoldingHeart } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";
import { Gift } from "lucide-react";
import getInvolvedPic from "../../public/images/image copy 7.png";
import { Graduate } from "next/font/google";

import { useLanguage } from "@/context/Languagecontext";

const logoImages = [logos, logos2, logos3, logos4, logos5, logos6, logos7];
export default function Home() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // delay between items
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    show: {
      scale: [0, 1.3, 1],
      transition: {
        duration: 0.6,
        ease: "easeOut" as
          | [0.17, 0.67, 0.83, 0.67]
          | "linear"
          | "easeIn"
          | "easeOut"
          | "easeInOut",
      },
    },
  };

  return (
    <header className="bg-white shadow">
      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px]">
        {/* Background Image */}
        <Image src={pic1} alt="Hero Image" fill className="object-cover" />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Text + Button with animation */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-end px-4 sm:px-12 md:px-20 pb-16  md:pb-70 max-sm:pb-50 sm:pb-50 max-w-3xl text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h3
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {t("hero.title")}
          </motion.h3>

          <motion.p
            className="mt-4 text-sm sm:text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {t("hero.description")}
          </motion.p>

         

          

          
        </motion.div>
      </div>
      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px]">
        {/* Background Image */}
        <Image src={pic3} alt="Our Story Image" fill className="object-cover" />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Text + Button */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-end px-4 sm:px-12 md:px-20 pb-16 sm:pb-24 md:pb-32 max-w-2xl text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Heading */}
          <motion.h3
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {t("story.title")}
          </motion.h3>

          {/* Paragraph */}
          <motion.p
            className="mt-4 text-sm sm:text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {t("story.description")}
          </motion.p>

          {/* Button */}
          <div className="w-40  mt-8">
            {" "}
            <Link
              href="/about"
              className="flex items-center w-40 space-x-2 bg-[#623D3C] hover:bg-[#922C2C] text-white font-medium px-4 py-2 m-4 rounded-full transition"
            >
              <span className="mx-auto">{t("story.button")}</span>
            </Link>
          </div>
          
        </motion.div>
      </div>
      <div className="max-w-full mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-[#D9D9D9]">
        {/* Text Section */}
        <motion.div
          className="px-4 sm:px-8 md:px-[76px] max-w-[650px]"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {t("howWeWork.title")}
          </motion.h2>

          <motion.p
            className="text-gray-600 mb-6 text-sm sm:text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t("howWeWork.description")}
          </motion.p>

          {/* Button with scale + hover animation */}
          <div className="w-40  mt-8">
            {" "}
            <Link
              href="/we-work"
              className="flex items-center w-40 space-x-2 bg-[#623D3C] hover:bg-[#922C2C] text-white font-medium px-4 py-2 m-4 rounded-full transition"
            >
              <span className="mx-auto">{t("howWeWork.button")}</span>
            </Link>
          </div>

          
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Image
              src={pic2}
              alt="Children learning together"
              width={500}
              height={350}
              className="rounded-2xl shadow-lg object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96"
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="bg-[#F5AE6A] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Title */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#623D3C] mb-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t("impact.title")}
          </motion.h2>

          <motion.p
            className="text-[#623D3C] text-lg max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t("impact.description")}
          </motion.p>

          {/* Stats Grid with staggered animation */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Item 1 */}
            <motion.div
              className="flex flex-col items-center bg-white rounded-2xl shadow-md p-6"
              variants={cardVariants}
            >
              <motion.div variants={iconVariants}>
                <Rainbow className="w-10 h-10 text-[#F5AE6A] mb-3" />
              </motion.div>
              <h3 className="text-3xl font-extrabold text-gray-800">
                <CountUp end={4474} duration={3} />+
              </h3>
              <p className="text-gray-600">{t("impact.stats.beneficiaries")}</p>
            </motion.div>

            {/* Item 2 */}
            <motion.div
              className="flex flex-col items-center bg-white rounded-2xl shadow-md p-6"
              variants={cardVariants}
            >
              <motion.div variants={iconVariants}>
                <Backpack className="w-10 h-10 text-[#F5AE6A] mb-3" />
              </motion.div>
              <h3 className="text-3xl font-extrabold text-gray-800">
                <CountUp end={850} duration={3} />+
              </h3>
              <p className="text-gray-600">{t("impact.stats.students")}</p>
            </motion.div>

            {/* Item 3 */}
            <motion.div
              className="flex flex-col items-center bg-white rounded-2xl shadow-md p-6"
              variants={cardVariants}
            >
              <motion.div variants={iconVariants}>
                <GraduationCap className="w-10 h-10 text-[#F5AE6A] mb-3" />
              </motion.div>
              <h3 className="text-3xl font-extrabold text-gray-800">
                <CountUp end={54} duration={3} />+
              </h3>
              <p className="text-gray-600">{t("impact.stats.teachers")}</p>
            </motion.div>

            {/* Item 4 */}
            <motion.div
              className="flex flex-col items-center bg-white rounded-2xl shadow-md p-6"
              variants={cardVariants}
            >
              <motion.div variants={iconVariants}>
                <MapPin className="w-10 h-10 text-[#F5AE6A] mb-3" />
              </motion.div>
              <h3 className="text-3xl font-extrabold text-gray-800">
                <CountUp end={124} duration={3} />+
              </h3>
              <p className="text-gray-600">{t("impact.stats.classrooms")}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="bg-gray-50 py-16" id="partners">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#623D3C] mb-4">
            {t("partners.title")}
          </h2>
          <p className="text-[#623D3C] text-lg max-w-3xl mx-auto mb-10">
            {t("partners.description")}
          </p>

          {/* Scrolling Logos */}
          <div className="w-full overflow-hidden relative">
            <motion.div
              className="flex gap-10"
              animate={{ x: ["0%", "-100%"] }} // move left
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
            >
              {[...logoImages, ...logoImages].map((logo, i) => (
                <div key={i} className="flex-shrink-0 w-40 h-20 relative">
                  <Image
                    src={logo}
                    alt={`Partner logo ${i + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <div className="max-w-full bg-[#FED45F] mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Left Side - Text */}
        <div className="text-center md:text-left md:ml-12 lg:ml-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#623D3C] mb-4">
            {t("donation.title")}
          </h2>
          <p className="text-[#623D3C] mb-6 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            {t("donation.description")}
          </p>

          <div className="w-30">
            <Link
              href="/donate"
              className="hidden text-center md:flex items-center space-x-2 bg-orange-400 hover:bg-orange-500 text-white font-medium px-5 py-2 rounded-full transition"
            >
              <FaHandHoldingHeart />
              <span>{t("donation.button")}</span>
            </Link>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <Image
            src={donate}
            alt="Donation support"
            width={400}
            height={250}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>
      </div>

      <div className="max-w-full bg-[#8BAEA7] mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Left Side - Text */}
        <div className="text-center md:text-left md:ml-12 lg:ml-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#623D3C] mb-4">
            {t("getInvolved.title")}
          </h2>
          <p className="text-[#623D3C] mb-6 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            {t("getInvolved.description")}
          </p>

          {/* Button with scale + hover animation */}
          <div className="w-40  mt-8">
            {" "}
            <Link
              href="/we-work"
              className="flex items-center w-40 space-x-2 bg-[#623D3C] hover:bg-[#922C2C] text-white font-medium px-4 py-2 m-4 rounded-full transition"
            >
              <span className="mx-auto">{t("howWeWork.button")}</span>
            </Link>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <Image
            src={getInvolvedPic}
            alt="Get involved with Rabbit School"
            width={500}
            height={350}
            className="rounded-2xl shadow-lg object-cover w-full h-56 sm:h-64 md:h-72 lg:h-80"
          />
        </div>
      </div>

      
    </header>
  );
}
