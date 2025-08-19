"use client";

import Image from "next/image";
import React from "react";

const GetInvolvedPage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-64">
        <Image
          src="/images/involved.png"
          alt="Rabbit School group"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 py-10 text-center">
        <h1 className="text-4xl font-bold text-[#623D3C]">Get Involved</h1>
        <p className="text-gray-700 mt-4">
          There are many ways to support Rabbit School and help transform the
          lives of children and youth with intellectual disabilities and autism
          in Cambodia. Choose the path that speaks to you — and become the
          reason a child can grow up with dignity, opportunity, and
          self-reliance.
        </p>
      </section>

      {/* Make a Donation */}
      <section className="bg-[#8BAEA7] py-10 px-6 flex flex-col md:flex-row items-center gap-1">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-3 text-[#623D3C]">
            Make a Donation
          </h3>
          <p className="text-gray-800 mb-4">
            Every contribution helps us strengthen and expand our programs,
            ensuring <br></br> the highest quality education and opportunities
            for our students.
          </p>
          <button className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600">
            🧡 Donate
          </button>
        </div>
        <div className="flex gap-4">
          <Image src="/images/sun1.png" alt="Sun" width={65} height={65} />
        </div>
        <div className="flex gap-4  ">
          <Image src="/images/sun1.png" alt="Sun" width={80} height={80} />
        </div>
        <div className="flex gap-4">
          <Image src="/images/sun1.png" alt="Sun" width={110} height={110} />
        </div>
      </section>

      {/* Join Hands */}
      <section className="bg-gray-100 py-10 px-6 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-3 text-[#623D3C]">
            Join Hands with Us
          </h3>
          <p className="text-gray-700 mb-4">
            At Rabbit School, we value partnerships with companies that share
            our vision for a more inclusive Cambodia. Together, we can create
            lasting, positive change and real opportunities for children and
            youth with intellectual disabilities and autism.
          </p>
          <button className="bg-[#623D3C] text-white py-2 px-6 rounded-full hover:bg-orange-600">
            Contact Us
          </button>
        </div>
        <div className="relative w-64 h-40 md:h-64 flex-shrink-0">
          <Image
            src="/images/involved1.png"
            alt="Join hands"
            fill
            className="rounded-lg object-cover"
          />
        </div>
      </section>

      {/* Work With Us */}
      <section className="py-10 text-center max-w-3xl mx-auto px-6">
        <h3 className="text-xl font-bold mb-3 text-[#623D3C]">Work With Us</h3>
        <p className="text-gray-700 mb-4">
          Join our passionate team and help empower children and youth with
          intellectual disabilities and autism to reach their full potential.
        </p>
      </section>
    </div>
  );
};

export default GetInvolvedPage;
