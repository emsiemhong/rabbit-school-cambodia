"use client";

import Image from "next/image";
import { Users, BookOpen, Heart, Globe } from "lucide-react";
import pic1 from "../../public/picture/header.jpg";
import pic3 from "../../public/picture/Screenshot 2025-04-13 at 14.20.06.png";
import pic2 from "../../public/picture/GNrIBvMbYAAGQej.jpeg";
import CountUp from "react-countup";
import { use } from "react";
import { motion } from "framer-motion";
import logos from "../../public/Donates/logo (1).png"
import logos2 from "../../public/Donates/logo(2).png"
import logos3 from "../../public/Donates/logo(4).png"
import logos4 from "../../public/Donates/logo(5).png"
import logos5 from "../../public/Donates/logo(3).png"
import logos6 from "../../public/Donates/logo(6).jpg"
import logos7 from "../../public/Donates/logo(7).png"
import donate from "../../public/donate.png"
import { FaHandHoldingHeart } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";
import { Gift } from "lucide-react";
import getInvolvedPic from "../../public/picture/get invulvet.png";

const logoImages = [logos, logos2, logos3, logos4, logos5, logos6, logos7];
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px]">
      {/* Background Image */}
      <Image src={pic1} alt="Hero Image" fill className="object-cover" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Text + Button with animation */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-end px-4 sm:px-12 md:px-20 pb-16 sm:pb-32 md:pb-40 max-w-3xl text-white"
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
          EXTRAORDINARY LEARNING FOR EXTRAORDINARY LEARNERS
        </motion.h3>

        <motion.p
          className="mt-4 text-sm sm:text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Providing children and youth with intellectual disabilities and autism access to education, support, confidence, and skills to reach their full potential.
        </motion.p>

        <motion.button
          className="mt-6 w-36 sm:w-40 md:w-48 h-10 sm:h-11 md:h-12 bg-[#FED45F] shadow-md flex items-center justify-center font-inter font-extrabold text-sm sm:text-base md:text-lg text-white rounded-full transition-colors duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          READ MORE
        </motion.button>
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
          Our Story
        </motion.h3>

        {/* Paragraph */}
        <motion.p
          className="mt-4 text-sm sm:text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          The Rabbit School was founded in Phnom Penh in the early 1990s with a bold vision: to ensure that children
          with intellectual disabilities and autism are given the same right to learn, grow, and thrive as any other child.
        </motion.p>

        {/* Button */}
        <motion.button
          className="mt-6 w-36 sm:w-40 md:w-48 h-10 sm:h-11 md:h-12 bg-[#FED45F] shadow-md flex items-center justify-center font-inter font-extrabold text-sm sm:text-base md:text-lg text-white rounded-full transition-colors duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          READ MORE
        </motion.button>
      </motion.div>
    </div>
      <div className="max-w-full mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-[#D9D9D9]">
      {/* Text Section */}
      <div className="text-white px-[76px] max-w-[650px]">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">How We Work</h2>
        <p className="text-gray-600 mb-6">
          Our programs empower children and youth with intellectual disabilities
          to reach their full potential through tailored education, vocational
          training, inclusive community building, and advocacy for lasting change.
        </p>
        {/* Button */}
          <button
            className="mt-6 w-[168px] h-[40px] 
             bg-[#FED45F] 
             shadow-[5px_5px_4px_rgba(0,0,0,0.25)] 
             flex items-center justify-center 
             font-inter font-extrabold text-[20px] leading-[37px] text-white
             rounded-full
             transition-colors duration-300"
          >
            READ MORE
          </button>
      </div>

      {/* Image Section */}
      <div className="flex justify-center">
        <Image
          src={pic2} // replace with your image path
          alt="Children learning together"
          width={500}
          height={350}
          className="rounded-2xl shadow-lg object-cover w-full h-72"
        />
      </div>
    </div>
    <div className="bg-[#F5AE6A] py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Our Impact and Reach
        </h2>
        <p className="text-white text-lg max-w-3xl mx-auto mb-12">
          Since 1997, Rabbit School has been transforming the lives of children
          and youth with intellectual disabilities and autism—bringing them
          hope, learning, and a sense of belonging.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Item 1 */}
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-md p-6">
            <Users className="w-10 h-10 text-[#F5AE6A] mb-3" />
            <h3 className="text-3xl font-extrabold text-gray-800">
              <CountUp end={4474} duration={3} />+
            </h3>
            <p className="text-gray-600">
              Have benefited from our education programs since 2013
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-md p-6">
            <BookOpen className="w-10 h-10 text-[#F5AE6A] mb-3" />
            <h3 className="text-3xl font-extrabold text-gray-800">
              <CountUp end={850} duration={3} />+
            </h3>
            <p className="text-gray-600">
              Students with intellectual disabilities and autism are
              currently enrolled in our school
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-md p-6">
            <Heart className="w-10 h-10 text-[#F5AE6A] mb-3" />
            <h3 className="text-3xl font-extrabold text-gray-800">
              <CountUp end={54} duration={3} />+
            </h3>
            <p className="text-gray-600">
              Teachers have received training in special education
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-md p-6">
            <Globe className="w-10 h-10 text-[#F5AE6A] mb-3" />
            <h3 className="text-3xl font-extrabold text-gray-800">
              <CountUp end={124} duration={3} />+
            </h3>
            <p className="text-gray-600">
              Classrooms in16 schools are now inclusive learning
              environments for children with intellectual disabilities
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Partners and Donors
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
          Working together with our corporate partners, we make a far bigger
          impact than we could by acting alone. Together we can make real change
          happen at scale.
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
    <div className="max-w-full bg-[#FED45F] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left Side - Text */}
      <div className=" ml-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Where our money goes
        </h2>
        <p className="text-gray-600 mb-6">
          Your donation will help us continue to deliver critical support to the
          community and life transforming education opportunities for the most
          vulnerable. All donations are processed via our secure online payment
          portal.
        </p>
        <button
         className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-6 rounded-full flex items-center gap-2 transition-colors duration-300"
          >
          <Gift className="w-5 h-5" />
          DONATE
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="flex justify-center">
        <Image
          src={donate}
          alt="Donation support"
          width={300}
          height={150}
        />
      </div>
    </div>
    <div className="max-w-full bg-[#8BAEA7] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left Side - Text */}
      <div className="ml-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Get Involved
        </h2>
        <p className="text-gray-600 mb-6">
          There are many ways to support Rabbit School and help transform the
          lives of children and youth with intellectual disabilities and autism
          in Cambodia. Choose the path that speaks to you—and become the reason
          a child can grow up with dignity, opportunity, and self-reliance.
        </p>

        {/* Button */}
        <button
          className="mt-6 w-[168px] h-[40px] 
           bg-[#FED45F] 
           shadow-[5px_5px_4px_rgba(0,0,0,0.25)] 
           flex items-center justify-center 
           font-inter font-extrabold text-[20px] leading-[37px] text-white
           rounded-full
           transition-colors duration-300"
        >
          READ MORE
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="flex justify-center">
        <Image
          src={getInvolvedPic}
          alt="Get involved with Rabbit School"
          width={500}
          height={350}
          className="rounded-2xl shadow-lg object-cover w-full h-72"
        />
      </div>
    </div>
     <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Receive the Happenings
        </h2>
        
        {/* Paragraph */}
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
          Subscribe to Our Newsletter for Updates.
        </p>

        {/* Subscribe Button */}
        <button
          className="bg-[#623D3C] hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
        >
          SUBSCRIBE
        </button>
      </div>
    </section>
    </header>
  );
}
