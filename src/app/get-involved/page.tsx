"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { FaHandHoldingHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const GetInvolvedPage = () => {
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
            GET INVOLVED
          </h1>
          <p className="text-gray-700">
            There are many ways to support Rabbit School and help transform the
            lives of children and youth with intellectual disabilities and
            autism in Cambodia. Choose the path that speaks to you—and become
            the reason a child can grow up with dignity, opportunity, and
            self-reliance.
          </p>
        </motion.section>

        {/* Make a Donation */}
        <motion.section
          className="py-12 px-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ backgroundColor: "#8BAEA7" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-2xl mb-4 font-semibold text-[#623D3C]">
              Make a Donation
            </h1>
            <p className="text-gray-800 mb-4">
              Every contribution helps us strengthen and expand our <br />
              programs, ensuring the highest quality education and <br />
              opportunities for our students.
            </p>
            <Link href="/donate">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition"
              >
                <FaHandHoldingHeart className="text-lg" />
                Donate
              </motion.button>
            </Link>
          </motion.div>

          {/* Sun Images */}
          <motion.div
            className="flex gap-4 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {[80, 100, 120].map((size, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/images/sun1.png"
                  alt="Sun icon"
                  width={size}
                  height={size}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Join Hands */}
        <motion.section
          className="bg-gray-100 py-8 px-6 flex flex-col md:flex-row items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-2xl mb-4 font-semibold text-[#623D3C]">
              Join Hands with Us
            </h1>
            <p className="text-gray-700 mb-4">
              At Rabbit School, we deeply value partnerships with companies that
              share our <br />
              vision for a more inclusive Cambodia. We believe the best
              collaborations consider <br />
              the interests and benefits of both sides—building relationships
              where everyone can <br />
              grow. By joining forces, we combine our strengths to bring
              lasting, positive change <br />
              to the community and create real opportunities for children and
              youth with <br />
              intellectual disabilities and autism. Together, we can achieve
              more than we ever <br />
              could alone.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#623D3C] text-white py-2 px-6 rounded-full hover:bg-teal-600 transition"
            >
              CONTACT US
            </motion.button>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/img1.png"
              alt="Join Hands"
              width={400}
              height={300}
              className="rounded-xl shadow"
            />
          </motion.div>
        </motion.section>

        {/* Work With Us Section */}
        <motion.section
          className="py-12 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-5xl mx-auto text-center mb-10">
            <h2 className="text-2xl font-semibold text-[#623D3C]">
              Work With Us
            </h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
              There are many ways to support Rabbit School and help transform
              the lives of children and youth with intellectual disabilities and
              autism in Cambodia. Choose the path that speaks to you—and become
              the reason a child can grow up with dignity, opportunity, and
              self-reliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto font-sans">
            {[
              {
                title: "Make a Donation",
                text: "Every contribution helps us strengthen and expand our programs, ensuring the highest quality education and opportunities for our students.",
                image: "/images/donation.png",
                bg: "bg-yellow-300",
              },
              {
                title: "Join Hands with Us",
                text: "Partner your company with Rabbit School to create opportunities for children and youth with intellectual disabilities and autism in Cambodia.",
                image: "/images/join.png",
                bg: "bg-blue-400",
              },
              {
                title: "Work with us",
                text: "Join our passionate team and help empower children and youth with intellectual disabilities and autism to reach their full potential.",
                image: "/images/work.png",
                bg: "bg-orange-300",
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                className={`${card.bg} rounded-2xl shadow-lg p-8 text-left`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <Image
                  src={card.image}
                  alt={`${card.title} icon`}
                  width={40}
                  height={40}
                  className="mb-4"
                />
                <h3 className="text-lg font-bold text-black mb-2">
                  {card.title}
                </h3>
                <p className="text-black/80 text-sm">{card.text}</p>
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
