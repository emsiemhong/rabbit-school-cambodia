"use client";

import React, { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

// Types
interface FormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  labelKey: string;
  valueKey: string;
  href?: string;
  external?: boolean;
}

interface FormFieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
}

// Constants
const CONTACT_INFO: ContactInfo[] = [
  {
    icon: Mail,
    labelKey: "contactSection.section1.emailLabel",
    valueKey: "contactSection.section1.email",
    href: "mailto:sor.sothearorn@rabbitschoolcambodia.net"
  },
  {
    icon: MapPin,
    labelKey: "contactSection.section1.addressLabel",
    valueKey: "contactSection.section1.address",
    href: "https://goo.gl/maps/jvMBC2MgTz1kUyoh6",
    external: true
  },
  {
    icon: Phone,
    labelKey: "contactSection.section1.telephoneLabel",
    valueKey: "contactSection.section1.telephone",
    href: "tel:+85568901971"
  }
] as const;

// Optimized animation variants
const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// Components
const FormField: React.FC<FormFieldProps> = ({ label, error, children }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-[#623D3C]">
      {label}
    </label>
    {children}
    {error && (
      <div className="flex items-center gap-2 text-red-600 text-sm">
        <AlertCircle className="w-4 h-4 flex-shrink-0" />
        <span>{error}</span>
      </div>
    )}
  </div>
);

const ContactInfoItem: React.FC<{
  info: ContactInfo;
  t: (key: string) => string;
}> = ({ info, t }) => {
  const IconComponent = info.icon;

  return (
    <motion.div
      variants={fadeInUp}
      className="flex items-start gap-4 p-4 bg-[#F7F5F4] rounded-lg hover:bg-[#8BAEA7]/10 transition-colors duration-200 border border-[#623D3C]/10"
    >
      <div className="p-2 bg-[#623D3C] rounded-full">
        <IconComponent className="w-5 h-5 text-white" aria-hidden="true" />
      </div>
      <div className="flex-1">
        <dt className="text-sm font-medium text-[#623D3C]/80 mb-1">
          {t(info.labelKey)}
        </dt>
        <dd className="text-base">
          {info.href ? (
            <a
              href={info.href}
              className="text-[#623D3C] hover:text-[#623D3C]/80 transition-colors duration-200 focus:outline-none focus:underline"
              {...(info.external && {
                target: "_blank",
                rel: "noopener noreferrer"
              })}
            >
              {t(info.valueKey)}
            </a>
          ) : (
            <span className="text-[#623D3C]">{t(info.valueKey)}</span>
          )}
        </dd>
      </div>
    </motion.div>
  );
};

const ContactSection: React.FC = () => {
  const t = useTranslations();
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    mode: 'onChange' // Real-time validation
  });

  // Memoized form validation rules
  const validationRules = useMemo(() => ({
    name: {
      required: t("contactSection.section2.nameError"),
      minLength: {
        value: 2,
        message: t("contactSection.section2.nameMinLength")
      }
    },
    email: {
      required: t("contactSection.section2.emailErrorRequired"),
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: t("contactSection.section2.emailErrorPattern")
      }
    },
    message: {
      required: t("contactSection.section2.messageError"),
      minLength: {
        value: 10,
        message: t("contactSection.section2.messageMinLength")
      }
    }
  }), [t]);

  const onSubmit: SubmitHandler<FormData> = useCallback(async (data) => {
    setSubmitStatus('idle');

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString()
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        reset();
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  }, [reset]);

  return (
    <main className="bg-[#F7F5F4]">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#623D3C] mb-6"
            >
              {t("contactSection.hero.title")}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[#623D3C]/80 max-w-3xl mx-auto leading-relaxed"
            >
              {t("contactSection.hero.subtitle")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Image */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#623D3C] mb-6">
                {t("contactSection.section1.title")}
              </h2>
              <p className="text-[#623D3C]/80 mb-8 leading-relaxed">
                {t("contactSection.section1.description")}
              </p>

              <motion.dl
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {CONTACT_INFO.map((info, index) => (
                  <ContactInfoItem key={index} info={info} t={t} />
                ))}
              </motion.dl>

              <motion.div
                variants={fadeInUp}
                className="mt-8 p-4 bg-[#FFD45F]/20 rounded-lg border border-[#FFD45F]/30"
              >
                <p className="text-[#623D3C] text-sm leading-relaxed">
                  {t("contactSection.section1.instruction")}
                </p>
              </motion.div>
            </motion.div>

            {/* Location Image/Map */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
              className="relative"
            >
              <div className="aspect-[4/3] bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/picture/Links/contact.png"
                  alt="Rabbit School location and facilities"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                />
              </div>

              {/* Overlay with location info */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-[#623D3C]/10">
                <h3 className="font-semibold text-[#623D3C] mb-1">
                  {t("contactSection.location.title")}
                </h3>
                <p className="text-sm text-[#623D3C]/80">
                  {t("contactSection.location.address")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-[#F7F5F4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-[#623D3C]/10">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#623D3C] mb-4">
                  {t("contactSection.section2.title")}
                </h2>
                <p className="text-[#623D3C]/80">
                  {t("contactSection.section2.subtitle")}
                </p>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-[#8BAEA7]/20 border border-[#8BAEA7]/30 rounded-lg flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-[#8BAEA7]" />
                  <p className="text-[#623D3C]">
                    {t("contactSection.section2.successMessage")}
                  </p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <p className="text-red-800">
                    {t("contactSection.section2.errorMessage")}
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label={t("contactSection.section2.nameLabel")}
                    error={errors.name?.message}
                  >
                    <input
                      type="text"
                      {...register("name", validationRules.name)}
                      className="w-full px-4 py-3 border border-[#623D3C]/20 rounded-lg focus:ring-2 focus:ring-[#623D3C] focus:border-[#623D3C] transition-colors duration-200 bg-white"
                      placeholder={t("contactSection.section2.namePlaceholder")}
                      aria-invalid={errors.name ? 'true' : 'false'}
                    />
                  </FormField>

                  <FormField
                    label={t("contactSection.section2.emailLabel")}
                    error={errors.email?.message}
                  >
                    <input
                      type="email"
                      {...register("email", validationRules.email)}
                      className="w-full px-4 py-3 border border-[#623D3C]/20 rounded-lg focus:ring-2 focus:ring-[#623D3C] focus:border-[#623D3C] transition-colors duration-200 bg-white"
                      placeholder={t("contactSection.section2.emailPlaceholder")}
                      aria-invalid={errors.email ? 'true' : 'false'}
                    />
                  </FormField>
                </div>

                <FormField
                  label={t("contactSection.section2.subjectLabel")}
                >
                  <input
                    type="text"
                    {...register("subject")}
                    className="w-full px-4 py-3 border border-[#623D3C]/20 rounded-lg focus:ring-2 focus:ring-[#623D3C] focus:border-[#623D3C] transition-colors duration-200 bg-white"
                    placeholder={t("contactSection.section2.subjectPlaceholder")}
                  />
                </FormField>

                <FormField
                  label={t("contactSection.section2.messageLabel")}
                  error={errors.message?.message}
                >
                  <textarea
                    rows={5}
                    {...register("message", validationRules.message)}
                    className="w-full px-4 py-3 border border-[#623D3C]/20 rounded-lg focus:ring-2 focus:ring-[#623D3C] focus:border-[#623D3C] transition-colors duration-200 bg-white resize-vertical"
                    placeholder={t("contactSection.section2.messagePlaceholder")}
                    aria-invalid={errors.message ? 'true' : 'false'}
                  />
                </FormField>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#623D3C] hover:bg-[#623D3C]/90 disabled:bg-gray-400 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100 focus:outline-none focus:ring-2 focus:ring-[#623D3C] focus:ring-offset-2 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        {t("contactSection.section2.sendingButton")}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {t("contactSection.section2.sendButton")}
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ContactSection;