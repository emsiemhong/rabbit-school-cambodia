"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const DonatePage = () => {
  const t = useTranslations();

  // Get array safely with .raw()
  const resourceItems = t.raw("donatePage.resourceDonations.items") as string[];

  return (
    <div className="font-sans">
      {/* Top Banner */}
      <section className="relative w-full h-64 flex items-center justify-center bg-blue-100">
        <Image
          src="/images/donate.png"
          alt="Children receiving support"
          fill
          className="object-cover opacity-70"
          priority
        />
      </section>

      {/* Main Content */}
      <section className="max-w-3xl mx-auto px-6 py-10">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-[#623D3C]">
            {t("donatePage.hero.title")}
          </h1>
          <p className="text-gray-700 mt-4">
            {t("donatePage.hero.description")}
          </p>
        </div>

        {/* In-kind Items */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2 text-[#623D3C]">
            {t("donatePage.resourceDonations.title")}
          </h2>
          <p className="text-gray-700 mb-2">
            {t("donatePage.resourceDonations.intro")}
          </p>
          <ul className="list-disc list-inside text-gray-700">
            {resourceItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Bank Info */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2 text-[#623D3C]">
            {t("donatePage.financial.title")}
          </h2>
          <p className="text-gray-700">
            {t("donatePage.financial.description")}
          </p>
        </div>

        {/* ABA QR Code Section */}
        <div className="flex justify-center">
          <div className="bg-white border rounded-lg p-6 flex items-center">
            {/* QR Code */}
            <Image
              src="/images/QR.png"
              alt="ABA Bank QR Code for donation"
              width={160}
              height={160}
              className="object-contain"
            />

            {/* Vertical Divider */}
            <div className="w-px bg-gray-300 mx-6"></div>

            {/* Bank Info */}
            <div>
              <h3 className="text-lg font-bold mb-3">
                {t("donatePage.aba.title")}
              </h3>
              <p>
                <strong>Bank:</strong> {t("donatePage.aba.bank")}
              </p>
              <p>
                <strong>Account name:</strong> {t("donatePage.aba.accountName")}
              </p>
              <p>
                <strong>Account number:</strong>{" "}
                {t("donatePage.aba.accountNumber")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;
