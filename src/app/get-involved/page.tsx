import Image from "next/image";
import React from "react";
import Link from "next/link";
import pic from "../public/next.png";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { HandCoins, Handshake, Users } from "lucide-react";
const GetInvolvedPage = () => {
  return (
    <>
      <Navbar />
      {/* Main Get Involved Page Content */}

      <div className="">
        {/* Intro */}
        <section className="text-center py-8 max-w-3xl mx-auto px-4">
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
        </section>

        {/* Make a Donation */}
        <section
          className="py-12 px-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ backgroundColor: "#8BAEA7" }}
        >
          <div className="flex-1">
            <h1 className="text-2xl mb-4 font-semibold text-[#623D3C]">
              Make a Donation
            </h1>
            <p className="text-gray-800 mb-4">
              Every contribution helps us strengthen and expand our <br></br>{" "}
              programs, ensuring the highest quality education and <br></br>{" "}
              opportunities for our students.
            </p>
            <Link href="/donate">
              <button className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition">
                🧡 Donate
              </button>
            </Link>
          </div>
          <div className="flex gap-2 md:gap-2">
            <Image
              src="/images/sun1.png"
              alt="Sun icon"
              width={80}
              height={80}
            />
          </div>

          <div className="flex gap-2 md:gap-2">
            <Image
              src="/images/sun1.png"
              alt="Sun icon"
              width={100}
              height={100}
            />
          </div>
          <div className="flex gap-2 md:gap-2">
            <Image
              src="/images/sun1.png"
              alt="Sun icon"
              width={120}
              height={120}
            />
          </div>
        </section>
        {/* Join Hands */}
        <section className="bg-gray-100 py-8 px-6 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h1 className=" text-2xl mb-4 font-semibold text-[#623D3C]">
              Join Hands with Us
            </h1>
            <p className="text-gray-700 mb-4">
              At Rabbit School, we deeply value partnerships with companies that
              share our <br></br>
              vision for a more inclusive Cambodia. We believe the best
              collaborations consider <br></br>
              the interests and benefits of both sides—building relationships
              where everyone can <br></br>
              grow. By joining forces, we combine our strengths to bring
              lasting, positive change <br></br>
              to the community and create real opportunities for children and
              youth with <br></br>
              intellectual disabilities and autism. Together, we can achieve
              more than we ever <br></br>
              could alone.
            </p>
            <button className="bg-[#623D3C] text-white py-2 px-6 rounded-full hover:bg-teal-600 transition">
              CONTACT US
            </button>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/img1.png" // <-- place your image in public/images
              alt="Join Hands"
              width={400}
              height={300}
              className="rounded-xl shadow"
            />
          </div>
        </section>

        {/* Work With Us */}
        <section className=" py-12 px-6">
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

          <div className="font-sans">
            {/* Work With Us Section */}
            <section className="py-16 px-6">
              {/* Cards */}
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Card 1 - Make a Donation */}
                <div className="bg-yellow-300 rounded-2xl shadow-lg p-8 text-left">
                  <HandCoins className="w-8 h-8 text-black mb-4" />
                  <h3 className="text-lg font-bold text-black mb-2">
                    Make a Donation
                  </h3>
                  <p className="text-black/80 text-sm">
                    Every contribution helps us strengthen and expand our
                    programs, ensuring the highest quality education and
                    opportunities for our students.
                  </p>
                </div>

                {/* Card 2 - Join Hands */}
                <div className="bg-blue-400 rounded-2xl shadow-lg p-8 text-left">
                  <Handshake className="w-8 h-8 text-black mb-4" />
                  <h3 className="text-lg font-bold text-black mb-2">
                    Join Hands with Us
                  </h3>
                  <p className="text-black/80 text-sm">
                    Partner your company with Rabbit School to create
                    opportunities for children and youth with intellectual
                    disabilities and autism in Cambodia.
                  </p>
                </div>

                {/* Card 3 - Work with Us */}
                <div className="bg-orange-300 rounded-2xl shadow-lg p-8 text-left">
                  <Users className="w-8 h-8 text-black mb-4" />
                  <h3 className="text-lg font-bold text-black mb-2">
                    Work with us
                  </h3>
                  <p className="text-black/80 text-sm">
                    Join our passionate team and help empower children and youth
                    with intellectual disabilities and autism to reach their
                    full potential.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
      <>
        <Footer />
      </>
    </>
  );
};

export default GetInvolvedPage;
