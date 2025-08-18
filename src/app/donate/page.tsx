"use client";

import React, { useState } from "react";

const DonatePage = () => {
  const [frequency, setFrequency] = useState("monthly");
  const [amount, setAmount] = useState<number | null>(null);

  const presetAmounts = [10, 25, 50, 100];

  return (
    <div className="font-sans">
      {/* Top Banner */}
      <section className="relative w-full h-64 flex items-center justify-center bg-blue-100">
        <img
          src="/images/donate.png"
          alt="Children"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
      </section>

      {/* Main Content */}
      <section className="max-w-3xl mx-auto px-6 py-10">
        <div className="relative text-center z-10 max-w-3xl mx-auto px-6 py-10">
          <h1 className="text-4xl font-bold text-blue-800">Donate Now</h1>
        </div>
        <p className="text-gray-700 text-center mb-6">
          Your donation will help us continue to deliver critical support to the
          community and life transforming education opportunities for the most
          vulnerable. All donations are processed via our secure online payment
          portal. Simply complete the donation form below or contact your local
          office for support
        </p>

        {/* In-kind Items */}
        <h3 className="font-bold mb-2">Resource Donations</h3>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <p>
            If you would like to contribute with resources, these are things
            that are needed most :
          </p>
          <li>
            School materials such as books, pencils DVDs (player) and
            educational games
          </li>
          <li>Children’s books in Khmer</li>
          <li>Physiotherapy special devices and toys</li>
        </ul>

        {/* Bank Info */}
        <h3 className="font-bold mb-2">Financial</h3>
        <div className=" rounded mb-6">
          <p className="text-gray-700 mb-2">
            If you would like to make a financial contribution please deposit
            you donation to the following bank account:
          </p>
        </div>

        {/* ABA QR Code Section */}
        <div className="flex justify-center my-6">
          <div className="bg-white border rounded-lg p-6 flex items-center">
            {/* QR Code */}
            <img
              src="/images/QR.png"
              alt="ABA QR Code"
              className="w-40 h-40 object-contain"
            />

            {/* Vertical Divider */}
            <div className="w-px bg-gray-300 mx-6"></div>

            {/* Bank Info */}
            <div>
              <h3 className="text-xl font-bold mb-3">ABA</h3>
              <p>
                <strong>Bank:</strong> ABA Bank Plc
              </p>
              <p>
                <strong>Account name:</strong> Rabbit School
              </p>
              <p>
                <strong>Account number:</strong> 2900-01-005152-1-2
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;
