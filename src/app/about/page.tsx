"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import { useLanguage } from "@/context/Languagecontext";

const Page = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState<number | null>(null);
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true, // run animation only once
    });
  }, []);

  return (
    <div className="bg-[#F7F5F4] ">
      <Navbar />

      {/* --- HERO --- */}
      <section className="relative w-full h-[60vh] sm:h-[50vh] max-sm:h-[50vh] md:h-screen">
        <Image
          src="/images/Pasted image (4).png"
          alt="Rabbit School"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        <div
          className=" md:max-w-1/2   absolute inset-0 flex flex-col justify-center  px-4 md:px-12 text-start text-[#FED45F] font-extrabold"
          data-aos="fade-up"
        >
          <h1 className="text-white  md:text-7xl sm:text-4xl max-sm:text-2xl">
            {t("ourStoryPage.hero.title")}
          </h1>
          <h2 className="   sm:text-4xl md:text-5xl font-bold drop-shadow-lg shadow-black leading-snug">
            {t("ourStoryPage.hero.subtitle")}
          </h2>
        </div>
      </section>

      {/* --- SECTION 1 --- */}
      <div
        className="bg-white p-6 md:p-12 drop-shadow-lg shadow-black"
        id="story"
      >
        <div
          className="flex flex-col md:flex-row-reverse md:gap-8 items-center md:items-start "
          data-aos="fade-left"
        >
          <div className="md:w-1/2 ">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#623D3C]">
              {t("ourStoryPage.section1.title")}
            </h2>
            <p className="mb-4 flex text-justify md:mt-10">
              {t("ourStoryPage.section1.text")}
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:scale-95">
            <Image
              src="/images/Pasted image (8).png"
              alt="Vocational Training"
              width={800}
              height={500}
              className="rounded-lg object-cover w-full h-[200px] max-sm:h-[300px] md:h-[320px]"
            />
          </div>
        </div>
      </div>

      {/* --- SECTION 2 --- */}
      <section className="px-4 md:px-12 mt-12">
        <div
          className="flex flex-col md:flex-row-reverse md:gap-8 items-center md:items-start mb-16"
          data-aos="fade-right"
        >
          <div className="md:w-1/2 mt-6 md:mt-0 overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:scale-95">
            <Image
              src="/images/Pasted image (7).png"
              alt="Vocational Training"
              width={800}
              height={500}
              className="rounded-lg object-cover w-full h-[200px] max-sm:h-[300px] md:h-[320px]"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#623D3C]">
              {t("ourStoryPage.section2.title")}
            </h2>
            <p className="mb-4 flex text-justify md:mt-10">
              {t("ourStoryPage.section2.text")}
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 3 --- */}
      <div className="bg-[#8BAEA7] p-6 md:p-12">
        <div
          className="flex flex-col md:flex-row-reverse md:gap-8 items-center md:items-start "
          data-aos="fade-left"
        >
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#623D3C]">
              {t("ourStoryPage.section3.title")}
            </h2>
            <p className="mb-4 flex text-justify md:mt-10">
              {t("ourStoryPage.section3.text")}
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:scale-95">
            <Image
              src="/images/Pasted image (6).png"
              alt="Vocational Training"
              width={800}
              height={500}
              className="rounded-lg object-cover w-full h-[200px] max-sm:h-[300px] md:h-[320px]"
            />
          </div>
        </div>
      </div>

      {/* --- SECTION 4 --- */}
      <div className="px-4 md:px-12 py-12">
        <div
          className="flex flex-col md:flex-row-reverse md:gap-8 items-center md:items-start"
          data-aos="fade-down"
        >
          <div className="md:w-1/2 mt-6 md:mt-0 overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:scale-95">
            <Image
              src="/images/Pasted image (5).png"
              alt="Vocational Training"
              width={800}
              height={500}
              className="rounded-lg object-cover w-full h-[200px] max-sm:h-[300px] md:h-[320px]"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#623D3C]">
              {t("ourStoryPage.section4.title")}
            </h2>
            <p className="mb-4 flex text-justify md:mt-10">
              {t("ourStoryPage.section4.text")}
            </p>
          </div>
        </div>
      </div>

      {/* --- BANNER --- */}
      <section
        className="relative w-full md:h-[50vh] sm:h-[25vh] max-sm:h-[20vh]  flex items-center justify-center"
        data-aos="fade-up"
      >
        <Image
          src="/images/ss.jpg"
          alt="Rabbit School"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#A81B17]/70 via-[#A81B17]/50 to-[#A81B17]/70" />

        <div className=" md:max-w-1/1  relative inset-0 flex flex-col justify-center   md:px-12   font-extrabold  z-10 text-center text-white px-4">
          <h1 className="text-2xl md:text-4xl font-bold">
            {t("ourStoryPage.banner.title")}
          </h1>
          <p className="mt-4 text-sm md:text-lg">
            {t("ourStoryPage.banner.text")}
          </p>
        </div>
      </section>

      {/* --- WHY CAMBODIA --- */}
      <section className="max-w-8xl mx-auto py-10 px-6" data-aos="fade-right">
        <h2 className="text-2xl md:text-3xl font-bold text-[#623D3C] mb-10 px-10 sm:px-2 max-sm:px-2">
          {t("ourStoryPage.whyCambodia.title")}
        </h2>

        <div className="grid  gap-8  text-justify">
          <div className="bg-white shadow-md rounded-lg p-6 flex  justify-between max-sm:flex-col overflow-hidden  transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100 active:scale-90">
            <div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#623D3C] mb-4">
                  {t("ourStoryPage.whyCambodia.marginalized.title")}
                </h3>
                <p className="text-gray-600 leading-relaxed md:w-125 max-sm:w-80 sm:w-100">
                  {t("ourStoryPage.whyCambodia.marginalized.text")}
                </p>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#623D3C] mt-6 mb-4">
                  {t("ourStoryPage.whyCambodia.poverty.title")}
                </h3>
                <p className="text-gray-600 leading-relaxed md:w-125 max-sm:w-80 sm:w-100">
                  {t("ourStoryPage.whyCambodia.poverty.text")}
                </p>
              </div>
            </div>
            <div className="bg-white  p-5">
              <h3 className="text-lg font-bold text-[#623D3C] mb-4">
                {t("ourStoryPage.whyCambodia.exist.title")}
              </h3>
              <p className="text-gray-600 leading-relaxed md:w-125 max-sm:w-80 sm:w-100">
                {t("ourStoryPage.whyCambodia.exist.text")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- OUR CORE DRIVERS --- */}
      <section className="max-w-7xl mx-auto px-15 " data-aos="fade-left">
        <h2 className="text-2xl md:text-3xl font-bold text-[#623D3C] mb-10">
          {t("ourStoryPage.coreDrivers.title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#79A2C9] text-white rounded-lg p-6 shadow-md flex flex-col items-center">
            <div className="flex gap-5">
              <Image
                src="/images/Pasted image.png"
                alt="Empowerment Icon"
                width={48}
                height={48}
                className="mb-4"
              />
              <h3 className="text-2xl font-bold text-black max-sm:text-xl sm:text-xl  ">
                {t("ourStoryPage.coreDrivers.empowerment1.title")}
              </h3>
            </div>
            <p>{t("ourStoryPage.coreDrivers.empowerment1.text")}</p>
          </div>

          <div className="bg-[#8BAEA7] text-white rounded-lg p-6 shadow-md flex flex-col items-center">
            <div className="flex gap-5">
              <Image
                src="/images/Pasted image (2).png"
                alt="Empowerment Icon"
                width={48}
                height={48}
                className="mb-4"
              />
              <h3 className="text-2xl font-bold text-black max-sm:text-xl sm:text-xl">
                {t("ourStoryPage.coreDrivers.empowerment2.title")}
              </h3>
            </div>
            <p>{t("ourStoryPage.coreDrivers.empowerment2.text")}</p>
          </div>

          <div className="bg-[#8BAEA7] text-white rounded-lg p-6 shadow-md flex flex-col items-center">
            <div className="flex gap-5">
              <Image
                src="/images/Pasted image (3).png"
                alt="Empowerment Icon"
                width={48}
                height={48}
                className="mb-4"
              />
              <h3 className="text-2xl font-bold text-black max-sm:text-xl sm:text-xl">
                {t("ourStoryPage.coreDrivers.empowerment3.title")}
              </h3>
            </div>
            <p>{t("ourStoryPage.coreDrivers.empowerment3.text")}</p>
          </div>
        </div>
      </section>

      {/* --- PICTURES OF STUDENTS WITH CLICK TO ENLARGE --- */}
      <section
        className="max-w-7xl mx-auto py-16 px-6"
        data-aos="fade-up"
        id="gallery"
      >
        <div className="mt-20 ">
          <h3 className="text-4xl text-[#623D3C] sm:text-2xl max-sm:text-2xl font-bold p-5 ">
            {t("ourStoryPage.pictures.title")}
          </h3>
          <div className="overflow-x-auto  scrollbar-hide ">
            <div className="flex gap-6 pb-4 scrollbar-hide">
              {[
                "/images/image copy.png",
                "/images/image copy 6.png",
                "/images/image copy 2.png",
                "/images/image copy 4.png",
                "/images/image copy 5.png",
                "/images/image copy 3.png",
              ].map((src, i) => (
                <div
                  key={i}
                  onClick={() => setActive(active === i ? null : i)}
                  className={`min-w-[250px] bg-white rounded-xl shadow-md shadow-gray-400 
                    overflow-hidden transition-all duration-300 cursor-pointer
                    hover:scale-110 hover:shadow-xl hover:z-10
                    ${
                      active === i
                        ? "scale-110 shadow-xl z-10"
                        : "scale-95 opacity-80"
                    }
                  `}
                >
                  <Image
                    src={src}
                    alt={`Activity ${i + 1}`}
                    width={300}
                    height={200}
                    className="w-full h-70 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SDG GOALS --- */}
      <section
        className="max-w-2xl mx-auto py-12 px-4 sm:px-6 text-center"
        data-aos="fade-right"
      >
        <h2 className="text-2xl sm:text-xl md:text-4xl font-bold text-[#623D3C]">
          {t("ourStoryPage.sdg.title")}
        </h2>
        <p className="mt-4 text-black text-sm  max-sm:text-justify">
          {t("ourStoryPage.sdg.text")}
        </p>

        <div className="grid grid-cols-1 max-sm:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-2 mt-8  max-sm:gap-1">
          <Image
            src="/images/Pasted image (9).png"
            alt="SDG 4 Quality Education"
            width={100}
            height={100}
            className="rounded-lg shadow-md object-cover max-sm:w-25 max-sm:h-25 md:w-full mx-auto"
          />

          <Image
            src="/images/Pasted image (10).png"
            alt="SDG 8 Decent Work and Economic Growth"
            width={200}
            height={200}
            className="rounded-lg shadow-md object-cover max-sm:w-25 max-sm:h-25 md:w-full mx-auto"
          />

          <Image
            src="/images/Pasted image (11).png"
            alt="SDG 10 Reduced Inequalities"
            width={200}
            height={200}
            className="rounded-lg shadow-md object-cover max-sm:w-25 max-sm:h-25 md:w-full mx-auto"
          />
        </div>

        <div className="w-40 mx-auto mt-8">
          {" "}
          <Link
            href="/donate"
            className="flex items-center space-x-2 bg-orange-400 hover:bg-orange-500 text-white font-medium px-4 py-2 m-4 rounded-full transition"
          >
            <FaHandHoldingHeart />
            <span> {t("ourStoryPage.sdg.donate")}</span>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Page;
