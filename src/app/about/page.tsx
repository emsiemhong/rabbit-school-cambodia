"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import DonationLink from "@/components/ui/donation-link";

// Types
interface StorySection {
  titleKey: string;
  textKey: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  bg?: string;
}

interface SDGGoal {
  src: string;
  alt: string;
  number: number;
}

// Constants
const GALLERY_IMAGES = [
  "/images/image copy.png",
  "/images/image copy 6.png",
  "/images/image copy 2.png",
  "/images/image copy 4.png",
  "/images/image copy 5.png",
  "/images/image copy 3.png",
] as const;

const SDG_GOALS: SDGGoal[] = [
  { src: "/images/E_SDG_goals_icons_individual_rgb_01.webp", alt: "SDG 1: No Poverty", number: 1 },
  { src: "/images/E_SDG_goals_icons_individual_rgb_04.webp", alt: "SDG 4: Quality Education", number: 4 },
  { src: "/images/E_SDG_goals_icons_individual_rgb_08.webp", alt: "SDG 8: Decent Work and Economic Growth", number: 8 },
  { src: "/images/E_SDG_goals_icons_individual_rgb_10.webp", alt: "SDG 10: Reduced Inequalities", number: 10 },
] as const;

// Animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const slideInVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

// Components
const HeroSection = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-screen overflow-hidden">
    <Image
      src="/images/general-1.png"
      alt="Students at Rabbit School learning and growing together"
      fill
      priority
      className="object-cover"
      sizes="100vw"
      quality={85}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

    <motion.div
      className="absolute inset-0 flex flex-col justify-center px-4 md:px-12 lg:px-20 max-w-4xl"
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
    >
      <motion.h1
        className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4"
        variants={slideInVariants}
      >
        {title}
      </motion.h1>

      <motion.h2
        className="text-yellow-300 text-xl sm:text-3xl md:text-3xl lg:text-4xl font-bold drop-shadow-lg leading-snug"
        variants={slideInVariants}
        transition={{ delay: 0.2 }}
      >
        {subtitle}
      </motion.h2>
    </motion.div>
  </section>
);

const StorySection = ({
  title,
  text,
  imageSrc,
  imageAlt,
  reverse = false,
  bg = "bg-white",
}: {
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  bg?: string;
  index: number;
}) => (
  <section className={`${bg} py-12 md:py-16`}>
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <motion.div
        className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } gap-8 lg:gap-12 items-center`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInVariants}
      >
        {/* Text Content */}
        <motion.div
          className="lg:w-1/2 space-y-6"
          variants={slideInVariants}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber-900 leading-tight">
            {title}
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            {text}
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="lg:w-1/2"
          variants={fadeInVariants}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-xl"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={400}
              className="object-cover w-full h-64 md:h-80 lg:h-96"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const BannerSection = ({ title, text }: { title: string; text: string }) => (
  <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
    <Image
      src="/images/ss.jpg"
      alt="Students smiling and learning together at Rabbit School"
      fill
      className="object-cover"
      sizes="100vw"
      quality={85}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-red-800/70 via-red-800/50 to-red-800/70" />

    <motion.div
      className="relative z-10 text-center text-white px-4 md:px-12 max-w-4xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInVariants}
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
        {title}
      </h2>
      <p className="text-base md:text-lg lg:text-xl leading-relaxed">
        {text}
      </p>
    </motion.div>
  </section>
);

const GallerySection = ({ title }: { title: string }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    setSelectedImage(index);
    setCurrentIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  }, []);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, closeLightbox, prevImage, nextImage]);

  return (
    <>
      <section className="py-16 bg-gray-50" id="gallery">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.h3
            className="text-3xl md:text-3xl lg:text-4xl font-bold text-amber-900 mb-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            {title}
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {GALLERY_IMAGES.map((src, index) => (
              <motion.div
                key={src}
                variants={fadeInVariants}
                className="group cursor-pointer"
                onClick={() => openLightbox(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1} - Students at Rabbit School`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
        >
          <motion.div
            className="relative max-w-4xl max-h-[90vh] w-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close gallery"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <Image
              src={GALLERY_IMAGES[currentIndex]}
              alt={`Gallery image ${currentIndex + 1} - Students at Rabbit School`}
              width={800}
              height={600}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              sizes="(max-width: 768px) 100vw, 80vw"
            />

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {GALLERY_IMAGES.length}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

const SDGSection = ({ title, text, buttonText }: { title: string; text: string; buttonText: string }) => (
  <section className="py-16 bg-white">
    <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <motion.h2
          className="text-3xl md:text-3xl lg:text-4xl font-bold text-amber-900 mb-6"
          variants={fadeInVariants}
        >
          {title}
        </motion.h2>

        <motion.p
          className="text-gray-700 text-base md:text-lg leading-relaxed mb-12 max-w-3xl mx-auto"
          variants={fadeInVariants}
        >
          {text}
        </motion.p>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          variants={staggerChildren}
        >
          {SDG_GOALS.map(({ src, alt, number }) => (
            <motion.div
              key={number}
              variants={fadeInVariants}
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={src}
                alt={alt}
                width={180}
                height={180}
                className="w-full aspect-square object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeInVariants} className="display: inline-block">
          <DonationLink text={buttonText} />
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const Page = () => {
  const t = useTranslations();

  // Memoized story sections data
  const storySections: StorySection[] = useMemo(() => [
    {
      titleKey: "ourStoryPage.section1.title",
      textKey: "ourStoryPage.section1.text",
      imageSrc: "/images/general-5.png",
      imageAlt: "Vocational training program at Rabbit School",
      reverse: true,
    },
    {
      titleKey: "ourStoryPage.section2.title",
      textKey: "ourStoryPage.section2.text",
      imageSrc: "/images/general-4.png",
      imageAlt: "Inclusive education classroom in Cambodia",
    },
    {
      titleKey: "ourStoryPage.section3.title",
      textKey: "ourStoryPage.section3.text",
      imageSrc: "/images/general-3.png",
      imageAlt: "Community support and engagement program",
      reverse: true,
      bg: "bg-teal-100",
    },
    {
      titleKey: "ourStoryPage.section4.title",
      textKey: "ourStoryPage.section4.text",
      imageSrc: "/images/general-2.png",
      imageAlt: "Student engagement and learning activities",
    },
  ], []);

  return (
    <main className="bg-gray-50">
      <HeroSection
        title={t("ourStoryPage.hero.title")}
        subtitle={t("ourStoryPage.hero.subtitle")}
      />

      {storySections.map((section, index) => (
        <StorySection
          key={section.titleKey}
          title={t(section.titleKey)}
          text={t(section.textKey)}
          imageSrc={section.imageSrc}
          imageAlt={section.imageAlt}
          reverse={section.reverse}
          bg={section.bg}
          index={index}
        />
      ))}

      <BannerSection
        title={t("ourStoryPage.banner.title")}
        text={t("ourStoryPage.banner.text")}
      />

      <GallerySection title={t("ourStoryPage.pictures.title")} />

      <SDGSection
        title={t("ourStoryPage.sdg.title")}
        text={t("ourStoryPage.sdg.text")}
        buttonText={t("donation.button")}
      />
    </main>
  );
};

export default Page;