"use client";

import Image from "next/image";
import React, { useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Play, ChevronRight } from "lucide-react";

// Types
interface NavigationButton {
  label: string;
  id: string;
  icon?: React.ReactNode;
}

interface ProgramSection {
  id: string;
  titleKey: string;
  contentKey: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  subsections?: {
    titleKey: string;
    textKey: string;
  }[];
}

interface ActivityImage {
  src: string;
  alt: string;
}

// Constants
const ACTIVITY_IMAGES: ActivityImage[] = [
  { src: "/images/a3.jpg", alt: "Students engaged in learning activities" },
  { src: "/images/a4.jpg", alt: "Vocational training in progress" },
  { src: "/images/a5.png", alt: "Teacher training session" },
  { src: "/images/a6.png", alt: "Community building activities" },
  { src: "/images/a7.png", alt: "Inclusive classroom environment" },
  { src: "/images/a8.png", alt: "Student achievements and celebrations" },
] as const;

// Optimized animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6
    }
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6
    }
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Components
const HeroSection = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <section className="relative w-full h-[70vh] md:h-screen overflow-hidden">
    <Image
      src="/images/ss.jpg"
      alt="Students learning together at The Rabbit School"
      fill
      priority
      className="object-cover"
      sizes="100vw"
      quality={85}
    />

    <div className="absolute inset-0 bg-gradient-to-b from-[#623D3C]/70 via-[#623D3C]/50 to-[#623D3C]/70" />

    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-8 max-w-6xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
    >
      <motion.h1
        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold drop-shadow-lg mb-6 leading-tight"
        variants={slideInLeft}
      >
        {title}
      </motion.h1>

      <motion.p
        className="text-base sm:text-lg md:text-2xl drop-shadow-md max-w-4xl leading-relaxed"
        variants={fadeInVariants}
        transition={{ delay: 0.2 }}
      >
        {subtitle}
      </motion.p>
    </motion.div>
  </section>
);

const NavigationSection = ({ title, buttons }: { title: string; buttons: NavigationButton[] }) => (
  <section className="bg-white py-12 shadow-lg" role="navigation" aria-label="Program sections">
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="text-center"
      >
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#623D3C] mb-8"
          variants={fadeInVariants}
        >
          {title}
        </motion.h2>

        <motion.nav
          className="flex flex-wrap justify-center gap-4"
          variants={staggerContainer}
        >
          {buttons.map((btn) => (
            <motion.a
              key={btn.id}
              href={`#${btn.id}`}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 bg-[#F7F5F4] text-[#623D3C] hover:bg-[#623D3C] hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#623D3C] focus:ring-offset-2 shadow-sm hover:shadow-md"
              variants={fadeInVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{btn.label}</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
          ))}
        </motion.nav>
      </motion.div>
    </div>
  </section>
);

const ProgramSection = ({
  id,
  title,
  content,
  imageSrc,
  imageAlt,
  reverse = false,
  children,
}: {
  id: string;
  title: string;
  content: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  children?: React.ReactNode;
}) => (
  <section id={id} className="py-16 scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <motion.div
        className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center mb-16`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {/* Content */}
        <motion.div
          className="lg:w-1/2 space-y-6"
          variants={reverse ? slideInRight : slideInLeft}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#623D3C] leading-tight">
            {title}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            {content}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="lg:w-1/2"
          variants={reverse ? slideInLeft : slideInRight}
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
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {children}
    </div>
  </section>
);

const VideoPlayer = ({
  thumbnailSrc,
  videoSrc,
  title,
  description,
}: {
  thumbnailSrc: string;
  videoSrc: string;
  title: string;
  description: string;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
  }, []);

  return (
    <motion.div
      className="flex flex-col lg:flex-row gap-8 items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <motion.div className="lg:w-1/2" variants={slideInLeft}>
        {!isPlaying ? (
          <motion.div
            className="relative cursor-pointer group"
            onClick={handlePlay}
            onKeyDown={(e) => e.key === 'Enter' && handlePlay()}
            tabIndex={0}
            role="button"
            aria-label="Play video demonstration"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Image
              src={thumbnailSrc}
              alt="Video thumbnail showing paper bag making process"
              width={600}
              height={400}
              className="rounded-2xl w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="bg-white/90 rounded-full p-6 shadow-lg group-hover:bg-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Play className="w-8 h-8 text-[#623D3C] ml-1" fill="currentColor" />
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <video
            src={videoSrc}
            controls
            autoPlay
            className="rounded-2xl w-full shadow-xl"
            poster={thumbnailSrc}
          />
        )}
      </motion.div>

      <motion.div className="lg:w-1/2 space-y-4" variants={slideInRight}>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#623D3C]">
          {title}
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
};

const QuoteSection = ({ quote }: { quote: string }) => (
  <motion.section
    className="py-16"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInVariants}
  >
    <div className="max-w-4xl mx-auto px-4">
      <motion.blockquote
        className="relative bg-[#FFD45F]/20 border-l-8 border-[#FFD45F] p-8 rounded-r-2xl shadow-lg"
        whileHover={{ scale: 1.02, y: -2 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <div className="absolute -left-2 top-4 w-4 h-4 bg-[#FFD45F] rotate-45"></div>
        <p className="text-lg md:text-2xl font-medium italic text-[#623D3C] leading-relaxed">
          &quot;{quote}&quot;
        </p>
      </motion.blockquote>
    </div>
  </motion.section>
);

const ActivityGallery = ({ title, images }: { title: string; images: ActivityImage[] }) => (
  <section className="py-16 bg-[#F7F5F4]" aria-labelledby="gallery-title">
    <div className="max-w-7xl mx-auto px-4">
      <motion.h2
        id="gallery-title"
        className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#623D3C] mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        {title}
      </motion.h2>

      <motion.div
        className="overflow-x-auto pb-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="flex gap-6 min-w-max" role="list" aria-label="Activity images">
          {images.map((image, index) => (
            <motion.div
              key={`activity-${index}`}
              className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg overflow-hidden border border-[#623D3C]/10"
              variants={fadeInVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              role="listitem"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={320}
                height={240}
                className="w-full h-60 object-cover"
                sizes="320px"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const AdvocacyCards = ({
  title,
  description,
  cards
}: {
  title: string;
  description: string;
  cards: Array<{ src: string; alt: string; caption: string }>
}) => (
  <section id="advocacy" className="py-16 bg-white scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div className="text-center mb-12" variants={fadeInVariants}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#623D3C] mb-6">
            {title}
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
            {description}
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
        >
          {cards.map((card, index) => (
            <motion.article
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#623D3C]/10"
              variants={fadeInVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 text-center">
                <p className="font-semibold text-[#623D3C] text-base md:text-lg">
                  {card.caption}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// Main Component
const HowWeWorkPage = () => {
  const t = useTranslations();

  // Memoized navigation buttons
  const navigationButtons: NavigationButton[] = useMemo(() => [
    { label: t("weWorkPage.nav.education") || "Education Programs", id: "education-programs" },
    { label: t("weWorkPage.nav.vocational") || "Vocational Training & Job Placement", id: "vocational-training" },
    { label: t("weWorkPage.nav.teacher") || "Teacher Training", id: "teacher-training" },
    { label: t("weWorkPage.nav.advocacy") || "Advocacy And Community Building", id: "advocacy" },
  ], [t]);

  // Memoized advocacy cards data
  const advocacyCards = useMemo(() => [
    {
      src: "/images/sai.jpg",
      alt: "Community event - Run with Sai",
      caption: t("weWorkPage.sai-event.caption1")
    },
    {
      src: "/images/mother.webp",
      alt: "Parent training and support sessions",
      caption: t("weWorkPage.sai-event.caption2")
    }
  ], [t]);

  return (
    <main className="bg-[#F7F5F4]">
      {/* Hero Section */}
      <HeroSection
        title={t("weWorkPage.hero.title")}
        subtitle={t("weWorkPage.hero.desc")}
      />

      {/* Navigation Section */}
      <NavigationSection
        title={t("weWorkPage.nav.title")}
        buttons={navigationButtons}
      />

      {/* Education Programs */}
      <ProgramSection
        id="education-programs"
        title={t("weWorkPage.programs.education.title")}
        content={
          <div className="space-y-6">
            <p className="leading-relaxed">
              {t("weWorkPage.programs.education.desc")}
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-bold text-[#623D3C] mb-2">
                  {t("weWorkPage.programs.education.section1.title")}
                </h4>
                <p className="leading-relaxed">{t("weWorkPage.programs.education.section1.desc")}</p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#623D3C] mb-2">
                  {t("weWorkPage.programs.education.section2.title")}
                </h4>
                <p className="leading-relaxed">{t("weWorkPage.programs.education.section1.desc")}</p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#623D3C] mb-2">
                  {t("weWorkPage.programs.education.section3.title")}
                </h4>
                <p className="leading-relaxed">{t("weWorkPage.programs.education.section3.desc")}</p>
              </div>
            </div>
          </div>
        }
        imageSrc="/images/poor.png"
        imageAlt="Education programs supporting underprivileged children with special needs"
      />

      {/* Vocational Training */}
      <ProgramSection
        id="vocational-training"
        title={t("weWorkPage.programs.vocational.title")}
        content={
          <div className="space-y-6">
            <p className="leading-relaxed">
              {t("weWorkPage.programs.vocational.desc")}
            </p>
            <div>
              <h4 className="text-xl font-bold text-[#623D3C] mb-2">
                {t("weWorkPage.programs.vocational.section1.title")}
              </h4>
              <p className="leading-relaxed">{t("weWorkPage.programs.vocational.section1.desc")}</p>
            </div>
          </div>
        }
        imageSrc="/images/make.jpeg"
        imageAlt="Students engaged in hands-on vocational training activities"
        reverse
      />

      {/* Teacher Training */}
      <ProgramSection
        id="teacher-training"
        title={t("weWorkPage.programs.teacher.title")}
        content={
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-[#623D3C] mb-2">
                {t("weWorkPage.programs.teacher.section1.title")}
              </h4>
              <p className="leading-relaxed mb-4">
                {t("weWorkPage.programs.teacher.section1.desc")}
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-[#623D3C] mb-2">
                {t("weWorkPage.programs.teacher.section2.title")}
              </h4>
              <p className="leading-relaxed mb-4">
                {t("weWorkPage.programs.teacher.section2.desc")}
              </p>
            </div>
          </div>
        }
        imageSrc="/images/vocational-training.png"
        imageAlt="Professional development and teacher training sessions"
      >
        {/* Video Player */}
        <VideoPlayer
          thumbnailSrc="/images/paper.png"
          videoSrc="/images/video.mp4"
          title={t("weWorkPage.programs.making-paper-bags.title")}
          description={t("weWorkPage.programs.making-paper-bags.desc")}
        />
      </ProgramSection>

      {/* Speech Stimulators Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#623D3C] text-center"
              variants={fadeInVariants}
            >
              {t("weWorkPage.stimulator.title")}
            </motion.h2>

            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-xl"
              variants={fadeInVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Image
                src="/images/7.jpg"
                alt="Cambodia's First Speech Stimulators team training session"
                width={1200}
                height={600}
                className="w-full h-64 md:h-96 object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </motion.div>

            <motion.p
              className="text-base md:text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto"
              variants={fadeInVariants}
            >
              {t("weWorkPage.stimulator.desc")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <QuoteSection quote={t("weWorkPage.stimulator.quote")} />

      {/* Advocacy Section */}
      <AdvocacyCards
        title={t("weWorkPage.sai-event.title")}
        description={t("weWorkPage.sai-event.desc")}
        cards={advocacyCards}
      />

      {/* Activity Gallery */}
      <ActivityGallery
        title={t("weWorkPage.school-activities.title")}
        images={ACTIVITY_IMAGES}
      />
    </main>
  );
};

export default HowWeWorkPage;