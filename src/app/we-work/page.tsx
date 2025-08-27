"use client";

import Navbar from "@/components/ui/navbar";
import Image from "next/image";
import React, { useState } from "react";
import Footer from "@/components/ui/footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../globals.css";
import { useLanguage } from "@/context/Languagecontext";

const Page = () => {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  const buttons = [
    { label: "Education Programs", id: "education-programs" },
    { label: "Vocational Training & Job Placement", id: "vocational-training" },
    { label: "Teacher Training", id: "teacher-training" },
    { label: "Advocacy And Community Building", id: "advocacy" },
  ];
  useEffect(() => {
    const sections = document.querySelectorAll("section, div[data-animate]");

    AOS.init({
      duration: 800, // animation duration in ms
      once: true, // run animation only once
    });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id =
              entry.target.getAttribute("id") ||
              (entry.target instanceof HTMLElement
                ? entry.target.dataset.animate
                : undefined);
            if (id && !visibleSections.includes(id)) {
              setVisibleSections((prev) => [...prev, id]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, [visibleSections]);

  const isVisible = (id: string) => visibleSections.includes(id);

  return (
    <>
      <Navbar />
      <div className="bg-[#F7F5F4] ">
        <section className="relative w-full h-[60vh] sm:h-[30vh] md:h-screen">
          <Image
            src="/images/ss.jpg"
            alt="Rabbit School"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

          <div
            className={`absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-8 Acumin-Condensed-Black font-extrabold transition-opacity duration-1000 ease-in-out opacity-0 ${
              isVisible("hero") ? "opacity-100" : ""
            }`}
            data-animate="hero"
            data-aos="fade-up"
          >
            <h1 className=" font-acumin sm:text-4xl max-sm:text-3xl md:text-6xl font-bold drop-shadow-lg mb-3">
              {t("weWorkPage.hero.title")}
            </h1>
            <p className="  mt-4 text-sm sm:text-base md:text-2xl drop-shadow-md max-w-4xl ">
              {t("weWorkPage.hero.subtitle")}
            </p>
          </div>
        </section>

        <div
          className="bg-white py-8 text-center shadow-gray-500/80   transition-colors "
          data-aos="fade-left"
        >
          <h3 className=" sm:text-2xl max-sm:text-2xl md:text-4xl  text-[#623D3C] Acumin Condensed Black font-extrabold mb-5">
            {t("weWorkPage.section1.title")}
          </h3>

          <div className=" flex flex-wrap justify-center gap-4 mt-6">
            {buttons.map((btn, index) => (
              <a
                key={index}
                href={`#${btn.id}`}
                className=" px-4 py-2 rounded-full text-sm transition-colors bg-[#F7F5F4] shadow-gray-500/40 hover:shadow-lg hover:bg-[#FED45F] font-extrabold text-[#623D3C] max-sm:shadow-gray-500/40"
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>
        <section
          className={`px-3 md:px-16 max-sm:px-10 sm:px-10 py-8 text-justify transition-all duration-700 ease-in-out transform ${
            isVisible("education-programs")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          id="education-programs"
          data-aos="fade-right"
        >
          <div className="md:flex md:gap-8 items-center mb-8 ">
            <div className="md:w-1/2">
              <h2 className=" md:text-4xl max-sm:text-2xl font-bold mb-4 text-[#623D3C] Acumin Condensed Black">
                {t("weWorkPage.section2.title")}
              </h2>
              <p className="mb-4 Helvetica Neue">
                {t("weWorkPage.section2.education.title")}
              </p>
              <ul className="list-disc ml-5 mb-4 Helvetica Neue">
                <div className="mb-4">
                  <h3 className=" text-black font-bold  text-xl max-sm:text-[18px]">
                   {t("weWorkPage.section2.education.text")}
                  </h3>
                  <p>{t("weWorkPage.section2.vocational.title")}</p>
                </div>
                <div className="mb-4">
                  <h2 className="text-xl text-black font-bold p-2max-sm:text-[18px] ">
                    {t("weWorkPage.section2.vocational.text")}
                  </h2>
                  <p>{t("weWorkPage.section2.community.title")}</p>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl text-black font-bold p-2 max-sm:text-[18px]">
                   {t("weWorkPage.section2.community.text")}
                  </h3>
                  <p>{t("weWorkPage.section2.advocacy.title")}</p>
                </div>
              </ul>
              <p className="Helvetica Neue">
                {t("weWorkPage.section2.advocacy.text")}
              </p>
            </div>
            <div
              className="md:w-1/2 mt-6 md:mt-0 overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform
                hover:-translate-y-1 hover:scale-105
                active:scale-95 active:translate-y-0"
            >
              <Image
                src="/images/poor.png"
                alt="Vocational Training"
                width={600}
                height={400}
                className="rounded-lg"
              />{" "}
            </div>
          </div>
        </section>
        <section
          className={`px-3 md:px-16 max-sm:px-10 sm:px-10 py-8 text-justify transition-all duration-700 ease-in-out transform ${
            isVisible("vocational-training")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          id="vocational-training"
          data-aos="fade-down"
        >
          <div className="md:flex md:gap-8 items-center mb-16 md:flex-row-reverse mx-auto">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#623D3C] max-sm:text-2xl ">
               {t("weWorkPage.impact.title")}
              </h2>
              <p className="mb-4 Helvetica Neue">
                {t("weWorkPage.impact.text")}
              </p>
              <h4 className="text-xl  font-bold p-2 text-black max-sm:text-[18px] Helvetica Neue">
                {t("weWorkPage.text.title")}
              </h4>
             <p>{t("weWorkPage.text.items")}</p>
            </div>
            <div
              className="md:w-1/2 mt-6 md:mt-0  overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform
                hover:-translate-y-1 hover:scale-105
                active:scale-95 active:translate-y-0"
            >
              <Image
                src="/images/make.jpeg"
                alt="Vocational Training"
                width={600}
                height={400}
                className="rounded-lg"
              />{" "}
            </div>
          </div>
        </section>
        <section
          className={`px-3 md:px-16 max-sm:px-10 sm:px-10 py-8 text-justify transition-all duration-700 ease-in-out transform ${
            isVisible("teacher-training")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          id="teacher-training"
          data-aos="fade-right"
        >
          <div className="md:flex md:gap-8 items-center mb-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#623D3C] max-sm:text-2xl Acumin Condensed Black">
                {t("weWorkPage.text1.title")}
              </h2>
              <h4 className="text-xl text-black font-bold p-2 max-sm:text-[20px] Helvetica Neue">
                {" "}
                {t("weWorkPage.text1.items")}
              </h4>
              <p className="mb-4 Helvetica Neue">
                {t("weWorkPage.text2.title")}
              </p>
              <h4 className="text-xl text-black font-bold p-2 Helvetica Neue">
                {t("weWorkPage.text2.items")}
              </h4>
              <p>
                {t("weWorkPage.text3.title")}
              </p>
              <ul className="list-disc ml-5 mb-4 Helvetica Neue">
               {t("weWorkPage.text3.items")}
              </ul>
            </div>

            <div
              className="md:w-1/2 mt-6 md:mt-0  overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform
                hover:-translate-y-1 hover:scale-105
                active:scale-95 active:translate-y-0"
            >
              <Image
                src="/images/image.png"
                alt="Vocational Training"
                width={600}
                height={200}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="md:flex md:gap-8 items-center" id="making-paper">
            <div className="md:w-1/2 relative">
              {!isPlaying ? (
                <div
                  className="relative cursor-pointer"
                  onClick={() => setIsPlaying(true)}
                >
                  <Image
                    src="/images/paper.png"
                    alt="Making Paper Bags"
                    width={600}
                    height={400}
                    className="rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white bg-opacity-70 rounded-full p-4">
                      <svg
                        className="w-8 h-8 text-[#623D3C]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <video
                  src="/images/video.mp4"
                  controls
                  autoPlay
                  className="rounded-lg w-full"
                />
              )}
            </div>
            <div className="md:w-1/2  ">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#623D3C] max-sm:text-2xl Acumin Condensed Black">
                {t("weWorkPage.text4.title")}
              </h2>
              <p className="text-base  text-black Helvetica Neue">
                {t("weWorkPage.text4.items")}
              </p>
             
            </div>
          </div>
        </section>
        <div
          className="space-y-6 px-4 md:px-16 py-12 text-justify max-sm:px-10 sm:px-10"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#623D3C] max-sm:text-2xl Acumin Condensed Black">
            {t("weWorkPage.text5.title")}
          </h2>

          <Image
            src="/images/7.jpg"
            alt="Cambodia's First Speech Stimulators"
            width={1200}
            height={600}
            className="rounded-lg shadow-lg 5 mx-auto md:h-150 object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2"
          />

          <p className="text-base  text-black Helvetica Neue">
            {t("weWorkPage.text5.items")}
          </p>
        </div>
        <div className="md:m-10 sm:m-10 max-sm:m-10 md:p-10 mx-auto border-l-4 border-yellow-400 bg-yellow-50 py-10 rounded-lg shadow-md text-[#79A2C9]  transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
          <h6 className="italic  md:text-2xl max-sm:px-5  font-bold 6">
            {t("weWorkPage.text6.title")}
          </h6>
        </div>
        <section
          className={`py-16 bg-white shadow-md text-justify max-sm:px-10 sm:px-10 transition-all duration-700 ease-in-out transform ${
            isVisible("advocacy")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          id="advocacy"
          data-aos="fade-left"
        >
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#623D3C] mb-4 text-center">
              {t("weWorkPage.text6.items")}
            </h2>

            <p className="text-black  max-w-8xl  mb-12 ">
               {t("weWorkPage.text7.title")}
            </p>

<div className="grid md:grid-cols-2 gap-8 mb-12">
  {/* Card 1 */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden">
    <div className="relative w-full h-64 rounded-xl overflow-hidden">
      <Image
        src="/images/sai.jpg"
        alt="Event Run with Sai"
        fill
        className="object-cover"
      />
    </div>
    <div className="p-4 text-center">
      <p className="font-semibold text-[#623D3C] Helvetica Neue">
        {t("weWorkPage.text7.items")}
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden">
    <div className="relative w-full h-64 rounded-xl overflow-hidden">
      <Image
        src="/images/mother.webp"
        alt="Parents’ Training"
        fill
        className="object-cover"
      />
    </div>
    <div className="p-4 text-center">
      <p className="font-semibold text-[#623D3C] Helvetica Neue">
        {t("weWorkPage.text8.title")}
      </p>
    </div>
  </div>
</div>



          </div>
        </section>
        <div
          className=" mt-20 md:px-16 max-sm:px-10 sm:px-10 mb-20 "
          data-aos="fade-up"
        >
          <h3 className="text-2xl Helvetica Neue font-bold p-5">
           {t("weWorkPage.text8.items")}
          </h3>
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 pb-4 ">
              {[
                "/images/a3.jpg",
                "/images/a4.jpg",
                "/images/a5.png",
                "/images/a6.png",
                "/images/a7.png",
                "/images/a8.png",
              ].map((src, i) => (
                <div
                  key={i}
                  className="min-w-[250px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg  transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2"
                >
                  <Image
                    src={src}
                    alt={`Activity ${i + 1}`}
                    width={300}
                    height={200}
                    className="w-full h-55 object-cover "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
