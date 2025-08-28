"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/Languagecontext";

const GetInvolvedPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />

      <div className="font-sans">
        {/* Intro */}
        <motion.section
          className="text-center py-8 max-w-3xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold mb-6 text-[#623D3C]">
            {t("getInvolvedPage.hero.title")}
          </h1>
          <p className="text-gray-700">
            {t("getInvolvedPage.hero.description")}
          </p>
        </motion.section>

        {/* Cards Section */}
        <motion.section
          className="py-12 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto font-sans">
            {[
              {
                title: t("getInvolvedPage.cards.donation.title"),
                text: t("getInvolvedPage.cards.donation.text"),
                image: "/images/donation.png",
                bg: "bg-yellow-300",
                link: "/donate",
                button: t("getInvolvedPage.cards.donation.button"),
              },
              {
                title: t("getInvolvedPage.cards.join.title"),
                text: t("getInvolvedPage.cards.join.text"),
                image: "/images/join.png",
                bg: "bg-blue-400",
                link: "/contact",
                button: t("getInvolvedPage.cards.join.button"),
              },
              {
                title: t("getInvolvedPage.cards.work.title"),
                text: t("getInvolvedPage.cards.work.text"),
                image: "/images/work.png",
                bg: "bg-orange-300",
                link: "/jobs",
                button: t("getInvolvedPage.cards.work.button"),
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                className={`${card.bg} rounded-2xl shadow-lg p-8 text-left flex flex-col justify-between`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <div>
                  <Image
                    src={card.image}
                    alt={`${card.title} icon`}
                    width={40}
                    height={40}
                    className="mb-4"
                  />
                  <h3 className="text-lg font-bold text-[#623D3C] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[#623D3C] text-sm mb-6">{card.text}</p>
                </div>

                {/* Button */}
                <Link
                  href={card.link}
                  className="relative inline-block text-black border-b-2 w-23 border-black group"
                >
                  {card.button}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-23"></span>
                  className=" w-25   transition hover:text-red-500 font-semibold "
                
                  {card.button}

                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      <Footer />
    </>
  );
};

export default GetInvolvedPage;
