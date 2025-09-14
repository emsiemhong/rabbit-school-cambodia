"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

const GetInvolvedPage = () => {
  const t = useTranslations();

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <main className="bg-[#F7F5F4] min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="text-center py-16 max-w-4xl mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#623D3C] leading-tight">
          {t("getInvolvedPage.hero.title")}
        </h1>
        <p className="text-lg text-[#623D3C]/80 leading-relaxed max-w-3xl mx-auto">
          {t("getInvolvedPage.hero.description")}
        </p>
      </motion.section>

      {/* Cards Section */}
      <motion.section
        className="py-16 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: t("getInvolvedPage.cards.donation.title"),
              text: t("getInvolvedPage.cards.donation.text"),
              image: "/images/donation.png",
              bg: "bg-[#FFD45F]",
              link: "/donate",
              button: t("getInvolvedPage.cards.donation.button"),
              textColor: "text-[#623D3C]",
              hoverBg: "hover:bg-[#FFD45F]/90"
            },
            {
              title: t("getInvolvedPage.cards.join.title"),
              text: t("getInvolvedPage.cards.join.text"),
              image: "/images/join.png",
              bg: "bg-[#8BAEA7]",
              link: "/contact",
              button: t("getInvolvedPage.cards.join.button"),
              textColor: "text-white",
              hoverBg: "hover:bg-[#8BAEA7]/90"
            },
            {
              title: t("getInvolvedPage.cards.work.title"),
              text: t("getInvolvedPage.cards.work.text"),
              image: "/images/work.png",
              bg: "bg-[#623D3C]",
              link: "/jobs",
              button: t("getInvolvedPage.cards.work.button"),
              textColor: "text-white",
              hoverBg: "hover:bg-[#623D3C]/90"
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              className={`${card.bg} ${card.hoverBg} rounded-2xl shadow-lg p-8 text-left flex flex-col justify-between transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl border border-white/20`}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex-1">
                {/* Icon */}
                <div className="mb-6 p-3 bg-white/20 rounded-full w-fit">
                  <Image
                    src={card.image}
                    alt={`${card.title} icon`}
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>

                {/* Content */}
                <h3 className={`text-xl font-bold ${card.textColor} mb-4 leading-tight`}>
                  {card.title}
                </h3>
                <p className={`${card.textColor} ${card.textColor === 'text-white' ? 'text-white/90' : 'text-[#623D3C]/80'} text-sm leading-relaxed mb-8`}>
                  {card.text}
                </p>
              </div>

              {/* Call to Action Button */}
              <Link
                href={card.link}
                className={`group inline-flex items-center gap-2 ${card.textColor} font-semibold transition-all duration-300 hover:gap-3 focus:outline-none focus:underline`}
              >
                <span className="relative">
                  {card.button}
                  <span className={`absolute left-0 -bottom-1 h-[2px] w-0 ${card.textColor === 'text-white' ? 'bg-white' : 'bg-[#623D3C]'} transition-all duration-300 group-hover:w-full`}></span>
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#623D3C] mb-6">
            {t("getInvolvedPage.cta.title") || "Ready to Make a Difference?"}
          </h2>
          <p className="text-lg text-[#623D3C]/80 mb-8 leading-relaxed">
            {t("getInvolvedPage.cta.description") || "Join us in creating positive change and empowering communities through education and support."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#623D3C] hover:bg-[#623D3C]/90 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#623D3C] focus:ring-offset-2 shadow-lg hover:shadow-xl"
            >
              <span>{t("getInvolvedPage.cta.primaryButton") || "Donate Now"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#623D3C] text-[#623D3C] hover:bg-[#623D3C] hover:text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#623D3C] focus:ring-offset-2"
            >
              <span>{t("getInvolvedPage.cta.secondaryButton") || "Get in Touch"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default GetInvolvedPage;