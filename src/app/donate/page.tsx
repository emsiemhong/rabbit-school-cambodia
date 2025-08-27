"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { useLanguage } from "@/context/Languagecontext";

const DonatePage = () => {
  const { t } = useLanguage();
  const [frequency, setFrequency] = useState("monthly");
  const [amount, setAmount] = useState<number | null>(null);

  const presetAmounts = [10, 25, 50, 100];

  return (
    <>
      <Navbar />

      <div className="font-sans">
        {/* Top Banner */}
        <section className="relative w-full h-64 flex items-center justify-center bg-blue-100">
          <Image
            src="/images/donate.png"
            alt="Children"
            fill
            className="object-cover opacity-70"
            priority
          />
        </section>

        {/* Main Content */}
        <section className="max-w-3xl mx-auto px-6 py-10">
          <div className="relative text-center z-10 max-w-3xl mx-auto px-6 py-10">
            <h1 className="text-4xl font-bold text-[#623D3C]">
              {t("donatePage.hero.title")}
            </h1>
          </div>
          <p className="text-gray-700 text-center mb-6">
            {t("donatePage.hero.description")}
          </p>
          {/* In-kind Items */}
          <h3 className="text-xl font-bold mb-2 text-[#623D3C]">
            {t("donatePage.resourceDonations.title")}
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <p>{t("donatePage.resourceDonations.intro")}</p>
            {(
              t("donatePage.resourceDonations.items") as unknown as string[]
            ).map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {/* Bank Info */}
          <h3 className=" text-xl font-bold mb-2 text-[#623D3C]">
            {t("donatePage.financial.title")}
          </h3>
          <div className="rounded mb-6">
            <p className="text-gray-700 mb-2">
              {t("donatePage.financial.description")}
            </p>
          </div>
          {/* ABA QR Code Section */}
          <div className="flex justify-center my-6">
            <div className="bg-white border rounded-lg p-6 flex items-center">
              {/* QR Code */}
              <Image
                src="/images/QR.png"
                alt="ABA QR Code"
                width={160}
                height={160}
                className="object-contain"
              />

              {/* Vertical Divider */}
              <div className="w-px bg-gray-300 mx-6"></div>

              {/* Bank Info */}
              <div>
                <h3 className="text-xl font-bold mb-3">
                  {t("donatePage.aba.title")}
                </h3>
                <p>
                  <strong>Bank:</strong> {t("donatePage.aba.bank")}
                </p>
                <p>
                  <strong>Account name:</strong>{" "}
                  {t("donatePage.aba.accountName")}
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
      <>
        <Footer />
      </>
    </>
  );
};

export default DonatePage;
