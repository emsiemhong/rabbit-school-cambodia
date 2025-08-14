import Image from "next/image";
import React from "react";
import pic from "../public/next.png";
const GetInvolvedPage = () => {
  return (
    <div className="font-sans">
      {/* Hero Image */}
      <section className="w-full relative h-50 md:h-60">
        {/* <Image
          src="/public/next.png"
          alt="Rabbit School group"
          fill
          style={{ objectFit: "cover" }}
          priority
        /> */}
        <img src="" alt="pic" className="w-full h-auto" />
      </section>

      {/* Intro */}
      <section className="text-center py-8 max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">GET INVOLVED</h2>
        <p className="text-gray-700">
          There are many ways to support Rabbit School and help transform the
          lives of children and youth with intellectual disabilities and autism
          in Cambodia. Choose the path that speaks to you—and become the reason
          a child can grow up with dignity, opportunity, and self-reliance.
        </p>
      </section>

      {/* Make a Donation */}
      <section
        className="py-8 px-6 flex flex-col md:flex-row items-center justify-between gap-6"
        style={{ backgroundColor: "#8BAEA7" }}
      >
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-2">Make a Donation</h3>
          <p className="text-gray-800 mb-4">
            Every contribution helps us strengthen and expand our <br></br>{" "}
            programs, ensuring the highest quality education and <br></br>{" "}
            opportunities for our students.
          </p>
          <button className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition">
            🧡 Donate
          </button>
        </div>
        <div className="flex gap-3">
          <Image src="/images/sun1.png" alt="Sun icon" width={64} height={64} />
          <Image src="/images/sun2.png" alt="Sun icon" width={64} height={64} />
          <Image src="/images/sun3.png" alt="Sun icon" width={48} height={48} />
        </div>
      </section>

      {/* Join Hands */}
      <section className="bg-gray-100 py-8 px-6 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-2">Join Hands with Us</h3>
          <p className="text-gray-700 mb-4">
            At Rabbit School, we deeply value partnerships with <br></br>{" "}
            companies that share our vision for a more inclusive <br></br>
            Cambodia. We believe the best collaborations consider <br></br> the
            interests and benefits of both sides—building <br></br>{" "}
            relationships where everyone can grow. By joining <br></br>
            forces, we combine our strengths to bring lasting,<br></br> positive
            change to the community and create real <br></br> opportunities for
            children and youth with intellectual ,<br></br> disabilities and
            autism. Together, we can achieve more <br></br> than we ever could
            alone.
          </p>
          <button className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition">
            CONTACT US
          </button>
        </div>
        <div className="flex-shrink-0 relative w-64 h-40 md:h-64">
          <Image
            src="/images/join-hands.jpg"
            alt="Join hands"
            fill
            className="rounded-lg object-cover"
          />
        </div>
      </section>

      {/* Work With Us */}
      <section className="py-8 text-center max-w-3xl mx-auto px-4">
        <h3 className="text-lg font-bold mb-2">Work With Us</h3>
        <p className="text-gray-700 mb-4">
          Join our passionate team and help empower children and youth with
          intellectual disabilities and autism to reach their full potential.
        </p>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition">
          VOLUNTEER
        </button>
      </section>
    </div>
  );
};

export default GetInvolvedPage;
