"use client";

<<<<<<< HEAD
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
<<<<<<<< HEAD:src/app/how-we-work/page.tsx
import { useEffect } from "react";

const Page = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  const buttons = [
    { label: "Education Programs", id: "education-programs" },
    { label: "Vocational Training & Job Placement", id: "vocational-training" },
    { label: "Teacher Training", id: "teacher-training" },
    { label: "Advocacy And Community Building", id: "advocacy" },
  ];
  useEffect(() => {
    const sections = document.querySelectorAll("section, div[data-animate]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id =
              entry.target.getAttribute("id") ||
              (entry.target instanceof HTMLElement
                ? entry.target.dataset.animate
                : undefined);
            if (id && !visibleSections.includes(id)) {
              setVisibleSections((prev) => [...prev, id]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, [visibleSections]);

  const isVisible = (id: string) => visibleSections.includes(id);
========
import Link from "next/link";

const Page = () => {
  const [active, setActive] = useState<number | null>(null);
>>>>>>>> ac93857f9682bff5c81b9ec4d0b55a6ea8f12f40:src/app/about-us/page.tsx

  return (
    <div className="bg-[#F7F5F4] ">
      <Navbar />
<<<<<<<< HEAD:src/app/how-we-work/page.tsx
      <div className="bg-[#F7F5F4] ">
        <section className="relative w-full h-[60vh] sm:h-[30vh] md:h-screen">
          <Image
            src="/images/ss.jpg"
=======
import Navbar from "@/components/ui/navbar";
import Image from "next/image";
import React, { useState } from "react";
import Footer from "@/components/ui/footer";

const Page = () => {
  const [active, setActive] = useState(0); // store the index of active button
  const [isPlaying, setIsPlaying] = useState(false); // state to control video playback

  const buttons = [
    "Education Programs",
    "Vocational Training & Job Placement",
    "Teacher Training",
    "Advocacy And Community Building",
  ];

  return (
    <>
      <Navbar />
      <div className="bg-[#F7F5F4] mb-20">
        <section className="relative w-full h-[60vh] sm:h-[30vh] md:h-screen">
          {/* Background Image */}
          <Image
            src="/ss.jpg"
>>>>>>> ac93857f9682bff5c81b9ec4d0b55a6ea8f12f40
            alt="Rabbit School"
            fill
            priority
            className="object-cover"
          />

<<<<<<< HEAD
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

          <div
            className={`absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-8 Acumin-Condensed-Black font-extrabold transition-opacity duration-1000 ease-in-out opacity-0 ${
              isVisible("hero") ? "opacity-100" : ""
            }`}
            data-animate="hero"
          >
=======
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

          {/* Text content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-8 Acumin-Condensed-Black font-extrabold">
>>>>>>> ac93857f9682bff5c81b9ec4d0b55a6ea8f12f40
            <h1 className="sm:text-4xl max-sm:text-3xl md:text-6xl font-bold drop-shadow-lg mb-3">
              How We Work
            </h1>
            <p className=" font- mt-4 text-sm sm:text-base md:text-2xl drop-shadow-md max-w-4xl">
              Our programs empower children and youth with intellectual
              disabilities to reach their full potential through tailored
              education, vocational training, inclusive community building, and
              advocacy for lasting change.
            </p>
          </div>
        </section>

<<<<<<< HEAD
        <div className="bg-white py-8 text-center shadow-gray-500/80   transition-colors ">
          <h3 className=" sm:text-2xl max-sm:text-2xl md:text-4xl  text-[#623D3C] Acumin Condensed Black font-extrabold mb-5">
            Learn More About Our Programs
          </h3>

          <div className=" flex flex-wrap justify-center gap-4 mt-6">
            {buttons.map((btn, index) => (
              <a
                key={index}
                href={`#${btn.id}`}
                className=" px-4 py-2 rounded-full text-sm transition-colors bg-[#F7F5F4] shadow-gray-500/40 hover:shadow-lg hover:bg-[#FED45F] font-extrabold text-[#623D3C] max-sm:shadow-gray-500/40"
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>
        <section
          className={`px-3 md:px-16 max-sm:px-10 sm:px-10 py-8 text-justify transition-all duration-700 ease-in-out transform ${
            isVisible("education-programs")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          id="education-programs"
        >
=======
        <div className="bg-white py-8 text-center shadow-gray-500/80   transition-colors">
          <h3 className=" sm:text-2xl max-sm:text-2xl md:text-4xl  text-[#623D3C] Acumin Condensed Black font-extrabold mb-5">
            Learn More About Our Programs
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {buttons.map((btn, index) => (
              <button
                key={index}
                onClick={() => setActive(index)} // set active button on click
                className={`px-4 py-2 rounded-full text-sm  transition-colors bg-[#F7F5F4] shadow-gray-500/40 hover:shadow-lg  Acumin Condensed Black font-extrabold text-[#623D3C] max-sm:shadow-gray-500/40  
            ${
              active === index
                ? "bg-yellow-300 hover:bg-yellow-400"
                : "bg-gray-100 hover:bg-gray-300"
            }
          `}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
        <section className="px-3 md:px-16 py-8 text-justify">
>>>>>>> ac93857f9682bff5c81b9ec4d0b55a6ea8f12f40
          <div className="md:flex md:gap-8 items-center mb-8 ">
            <div className="md:w-1/2">
              <h2 className=" md:text-4xl max-sm:text-2xl font-bold mb-4 text-[#623D3C] Acumin Condensed Black">
                Education Programs
              </h2>
              <p className="mb-4 Helvetica Neue">
                Empowering Bright Minds to Embrace Life’s Opportunities. At The
                Rabbit School, we believe education should adapt to the
                child—not the other way around. We support children and youth
                with intellectual disabilities from early childhood through
                adolescence. Specialized classrooms in public schools across
                Cambodia help students aged 5–16 develop essential motor,
                self-help, cognitive, and social skills.
              </p>
              <ul className="list-disc ml-5 mb-4 Helvetica Neue">
                <div className="mb-4">
                  <h3 className=" text-black font-bold  text-xl max-sm:text-[18px]">
                    Readiness Classes (Ages 4–6)
                  </h3>
                  <li>Self-help and independence skills</li>
                  <li>Social and emotional development</li>
                  <li> Preparation for inclusive or integrated classrooms</li>
                </div>
                <div className="mb-4">
                  <h2 className="text-xl text-black font-bold p-2max-sm:text-[18px] ">
                    Two Learning Pathways (Ages 6–16)
                  </h2>
                  <li>Adapted curriculum designed to each student’s level</li>
                  <li>
                    Access to support services like speech and occupational
                    therapy
                  </li>
                  <li>
                    Individual Education Plan (IEP) updated every 3 months
                  </li>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl text-black font-bold p-2 max-sm:text-[18px]">
                    Individualized Education Plans
                  </h3>
                  <li>Students with and without disabilities learn together</li>
                  <li>Teachers receive ongoing support from our team</li>
                  <li>
                    Follow national curriculum with adapted teaching methods{" "}
                  </li>
                  <li>
                    {" "}
                    Focus on peer interaction, mutual respect, and inclusion
                  </li>
                </div>
              </ul>
              <p className="Helvetica Neue">
                Specialized classrooms and inclusive methods prepare students to
                learn and develop social, cognitive, and life skills.
              </p>
            </div>
            <div
<<<<<<< HEAD
              className="md:w-1/2 mt-6 md:mt-0 overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform
                hover:-translate-y-1 hover:scale-105
                active:scale-95 active:translate-y-0"
            >
              <Image
                src="/images/poor.png"
=======
              className="md:w-1/2 mt-6 md:mt-0 overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform 
                hover:-translate-y-1 hover:scale-105 
                active:scale-95 active:translate-y-0"
            >
              <Image
                src="/poor.png"
>>>>>>> ac93857f9682bff5c81b9ec4d0b55a6ea8f12f40
                alt="Vocational Training"
                width={600}
                height={400}
                className="rounded-lg"
              />{" "}
            </div>
          </div>
<<<<<<< HEAD
        </section>
        <section
          className={`px-3 md:px-16 max-sm:px-10 sm:px-10 py-8 text-justify transition-all duration-700 ease-in-out transform ${
            isVisible("vocational-training")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          id="vocational-training"
        >
          <div className="md:flex md:gap-8 items-center mb-16 md:flex-row-reverse mx-auto">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#623D3C] max-sm:text-2xl ">
=======

          <div className="md:flex md:gap-8 items-center mb-16 md:flex-row-reverse mx-auto">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#623D3C] max-sm:text-2xl Acumin Condensed Black">
>>>>>>> ac93857f9682bff5c81b9ec4d0b55a6ea8f12f40
                Vocational Training & Job Placement
              </h2>
              <p className="mb-4 Helvetica Neue">
                Ages 16–25. Our vocational program follows special education
                classes, teaching life-long skills that prepare youth for
                independence and employment opportunities.
              </p>
              <h4 className="text-xl  font-bold p-2 text-black max-sm:text-[18px] Helvetica Neue">
                Skills Students Learn
              </h4>
              <ul className="list-disc ml-5 mb-4 Helvetica Neue ">
                <li>Cleaning and basic hygiene routines</li>
                <li>Preparing tables and washing dishes</li>
                <li>Gardening and outdoor maintenance</li>
                <li>Following instructions and teamwork </li>
                <li>Developing positive job attitudes and social behavior</li>
                <li>Expressing themselves through music, sports, and games</li>
              </ul>
              <p className="Helvetica Neue">
                Students currently produce handmade paper bags for Bodia, a
                Cambodian wellness products business. We also collaborate with
                external partners for job placements.
              </p>
            </div>
            <div
<<<<<<< HEAD
              className="md:w-1/2 mt-6 md:mt-0  overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform
                hover:-translate-y-1 hover:scale-105
                active:scale-95 active:translate-y-0"
            >
              <Image
                src="/images/make.jpeg"
                alt="Vocational Training"
                width={600}
=======
              className="md:w-1/2 mt-6 md:mt-0  overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform 
                hover:-translate-y-1 hover:scale-105 
                active:scale-95 active:translate-y-0"
            >
              <Image
                src="/make.jpeg" // 👈 file from public folder
                alt="Vocational Training"
                width={600} // 👈 you must give width & height
>>>>>>> ac93857f9682bff5c81b9ec4d0b55a6ea8f12f40
                height={400}
                className="rounded-lg"
              />{" "}
            </div>
          </div>
<<<<<<< HEAD
        </section>
        <section
          className={`px-3 md:px-16 max-sm:px-10 sm:px-10 py-8 text-justify transition-all duration-700 ease-in-out transform ${
            isVisible("teacher-training")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          id="teacher-training"
        >
=======

          {/* Teacher Training */}
>>>>>>> ac93857f9682bff5c81b9ec4d0b55a6ea8f12f40
          <div className="md:flex md:gap-8 items-center mb-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#623D3C] max-sm:text-2xl Acumin Condensed Black">
                Teacher Training
              </h2>
              <h4 className="text-xl text-black font-bold p-2 max-sm:text-[20px] Helvetica Neue">
                {" "}
                Building Teacher Capacity for Inclusive Education
              </h4>
              <p className="mb-4 Helvetica Neue">
                Since 2010, Rabbit School has been training teachers to provide
                inclusive, individualized education for children with
                intellectual disabilities and autism. With initial support from
                the University of London, our training focused on quality
                teaching, child-friendly methods, and practical tools for
                working with children with special needs.
              </p>
              <h4 className="text-xl text-black font-bold p-2 Helvetica Neue">
                What we Do:
              </h4>
              <p>
                Train teachers to assess students and develop{" "}
                <b>Individual Education Plans (IEPs)</b> tailored to each
                child’s abilities and needs.
              </p>
              <ul className="list-disc ml-5 mb-4 Helvetica Neue">
                <li>
                  Organize <b>monthly teacher meetings</b> to reflect on
                  challenges, share solutions, and improve communication with
                  students.
                </li>
                <li>
                  Offer ongoing training in <b>Phnom Penh and provinces</b>, not
                  only for teachers, but also for school directors, education
                  authorities, commune committees, and civil society.
                </li>
                <li>
                  Collaborate with NGO partners and local experts to provide
                  <b>continuous learning opportunities</b> for our staff
                </li>
                <li>
                  Develop and distribute{" "}
                  <b>special education curricula and manuals</b>
                  for use by teachers and parents.
                </li>
              </ul>
            </div>

            <div
<<<<<<< HEAD
              className="md:w-1/2 mt-6 md:mt-0  overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform
                hover:-translate-y-1 hover:scale-105
                active:scale-95 active:translate-y-0"
            >
              <Image
                src="/images/image.png"
=======
              className="md:w-1/2 mt-6 md:mt-0  overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform 
                hover:-translate-y-1 hover:scale-105 
                active:scale-95 active:translate-y-0"
            >
              <Image
                src="/image.png"
>>>>>>> ac93857f9682bff5c81b9ec4d0b55a6ea8f12f40
                alt="Vocational Training"
                width={600}
                height={200}
                className="rounded-lg"
              />
            </div>
          </div>
<<<<<<< HEAD

=======
        </section>

        <section className="px-5 md:px-15 py-8 space-y-8 text-justify">
>>>>>>> ac93857f9682bff5c81b9ec4d0b55a6ea8f12f40
          <div className="md:flex md:gap-8 items-center">
            <div className="md:w-1/2 relative">
              {!isPlaying ? (
                <div
                  className="relative cursor-pointer"
                  onClick={() => setIsPlaying(true)}
                >
                  <Image
<<<<<<< HEAD
                    src="/images/paper.png"
=======
                    src="/paper.png"
>>>>>>> ac93857f9682bff5c81b9ec4d0b55a6ea8f12f40
                    alt="Making Paper Bags"
                    width={600}
                    height={400}
                    className="rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white bg-opacity-70 rounded-full p-4">
                      <svg
                        className="w-8 h-8 text-[#623D3C]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <video
<<<<<<< HEAD
                  src="/images/video.mp4"
=======
                  src="/video.mp4"
>>>>>>> ac93857f9682bff5c81b9ec4d0b55a6ea8f12f40
                  controls
                  autoPlay
                  className="rounded-lg w-full"
                />
              )}
            </div>
            <div className="md:w-1/2  ">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#623D3C] max-sm:text-2xl Acumin Condensed Black">
                Making Paper Bags for Bodia
              </h2>
              <p className="text-base  text-black Helvetica Neue">
                Our students currently produce handmade paper bags for Bodia, a
                business that sells 100% natural Cambodian wellness products.
                This activity is well-suited for students with intellectual
                disabilities, as each one can participate meaningfully in the
                process—from folding and gluing to quality checks.
              </p>
              <p className="mt-2 text-base md:text-lg text-black Helvetica Neue">
                Beyond this, we also collaborate with external partners to
                facilitate job placements and support our students in taking
                their first steps into the world of work.
              </p>
            </div>
          </div>
        </section>
<<<<<<< HEAD
        <div className="space-y-6 px-4 md:px-16 py-12 text-justify max-sm:px-10 sm:px-10">
=======
        <div className="space-y-6 px-4 md:px-16 py-12 text-justify">
>>>>>>> ac93857f9682bff5c81b9ec4d0b55a6ea8f12f40
          <h2 className="text-3xl md:text-4xl font-bold text-[#623D3C] max-sm:text-2xl Acumin Condensed Black">
            Cambodia's First Speech Stimulators
          </h2>

          <Image
<<<<<<< HEAD
            src="/images/7.jpg"
            alt="Cambodia's First Speech Stimulators"
            width={1200}
            height={600}
            className="rounded-lg shadow-lg 5 mx-auto md:h-150 object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2"
=======
            src="/7.jpg" // replace with your image
            alt="Cambodia's First Speech Stimulators"
            width={1200}
            height={600}
            className="rounded-lg shadow-lg 5 mx-auto"
>>>>>>> ac93857f9682bff5c81b9ec4d0b55a6ea8f12f40
          />

          <p className="text-base  text-black Helvetica Neue">
            In 2025, Rabbit School opened its first-ever Speech Unit and Sensory
            Lab at our Tuol Kork campus in Phnom Penh. This space offers
            specialized support for children with autism and intellectual
            disabilities who face challenges with communication. It creates a
            safe, welcoming environment where children can explore their voice
            and build the foundations for language and interaction. We are proud
            to have trained Cambodia’s first 7 speech stimulators—teachers who
            specialize in adapted communication strategies for children with
            developmental disabilities. Guided by expert trainer Judy, the team
            focuses on helping children move beyond distress, find joy in their
            voice, and take the first steps toward speech.
          </p>

<<<<<<< HEAD
          <div className=" mx-auto border-l-4 border-yellow-400 bg-yellow-50 py-10 rounded-lg shadow-md text-gray-800 md:p-8 transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
=======
          <div className=" mx-auto border-l-4 border-yellow-400 bg-yellow-50 py-10 rounded-lg shadow-md text-gray-800 md:p-8 ">
>>>>>>> ac93857f9682bff5c81b9ec4d0b55a6ea8f12f40
            <p className="italic font-playfair md:text-xl max-sm:px-5 text-2xl font-bold 6">
              “What autistic kids need is adapted speech stimulation,” explains
              Judy. “First, we help them move beyond suffering. Then we gently
              invite them to interact and find pleasure in their voice. With
              these two things combined, speech always follows.” <br /> <br />—
              Judy, Speech Therapist and Trainer of the Speech Stimulators
            </p>
          </div>
        </div>
<<<<<<< HEAD
        <section
          className={`py-16 bg-white shadow-md text-justify max-sm:px-10 sm:px-10 transition-all duration-700 ease-in-out transform ${
            isVisible("advocacy")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          id="advocacy"
        >
          <div className="max-w-6xl mx-auto px-4">
=======
        <section className="py-16 bg-white shadow-md text-justify">
          <div className="max-w-6xl mx-auto px-4">
            {/* Title */}
>>>>>>> ac93857f9682bff5c81b9ec4d0b55a6ea8f12f40
            <h2 className="text-2xl md:text-3xl font-bold text-[#623D3C] mb-4 text-center">
              Advocacy and Community Building
            </h2>

<<<<<<< HEAD
=======
            {/* Description */}
>>>>>>> ac93857f9682bff5c81b9ec4d0b55a6ea8f12f40
            <p className="text-black  max-w-8xl  mb-12 ">
              We work closely with local authorities and parents to integrate
              Rabbit School’s programs into the public system. At the same time,
              we work to break down the stigma around intellectual
              disabilities—promoting understanding, inclusion, and lasting
              change within communities. We are not just teaching children—we
              are building a more inclusive society, one where everyone is
              valued for who they are and the contributions they can make.
<<<<<<< HEAD
========

      {/* --- HERO --- */}
      <section className="relative w-full h-[60vh] sm:h-[50vh] max-sm:h-[50vh] md:h-screen">
        <Image
          src="/Pasted image (4).png"
          alt="Rabbit School"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        <div className=" md:max-w-1/2  absolute inset-0 flex flex-col justify-center  px-4 md:px-12 text-start text-[#FED45F] font-extrabold">
          <h1 className="  text-2xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg shadow-black leading-snug">
            <span className="text-white ">Our Story:</span> The Belief That
            Started It All — Every Child Deserves Opportunity
          </h1>
        </div>
      </section>

      {/* --- SECTION 1 --- */}
      <div className="bg-white p-6 md:p-12 drop-shadow-lg shadow-black">
        <div className="flex flex-col md:flex-row-reverse md:gap-8 items-center md:items-start ">
          <div className="md:w-1/2 ">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#623D3C]">
              A Belief that Started it All
            </h2>
            <p className="mb-4 flex text-justify md:mt-10">
              The Rabbit School is a Cambodian NGO that began in May 1997 as a
              pilot project to provide education to children with special needs
              at the Nutrition Centre— a government-run orphanage in Phnom Penh
              originally established for children aged 0–6 who had been
              abandoned or lost their families during the Khmer Rouge regime
              (1975–1979). In offering education to this extremely disadvantaged
              group, The Rabbit School laid the foundation for Cambodia’s first
              formal educational programs for children with disabilities.
>>>>>>>> ac93857f9682bff5c81b9ec4d0b55a6ea8f12f40:src/app/about-us/page.tsx
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:scale-95">
            <Image
              src="/Pasted image (8).png"
              alt="Vocational Training"
              width={800}
              height={500}
              className="rounded-lg object-cover w-full h-[200px] max-sm:h-[300px] md:h-[320px]"
            />
          </div>
        </div>
      </div>

<<<<<<<< HEAD:src/app/how-we-work/page.tsx
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg  transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
                <Image
                  src="/images/sai.jpg"
=======
            </p>

            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <Image
                  src="/sai.jpg"
>>>>>>> ac93857f9682bff5c81b9ec4d0b55a6ea8f12f40
                  alt="Event Run with Sai"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <p className="font-semibold text-[#623D3C] Helvetica Neue">
                    Event Run With Sai
                  </p>
                </div>
              </div>

<<<<<<< HEAD
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg  transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
                <Image
                  src="/images/mother.webp"
=======
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <Image
                  src="/mother.webp"
>>>>>>> ac93857f9682bff5c81b9ec4d0b55a6ea8f12f40
                  alt="Parents’ Training"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <p className="font-semibold text-[#623D3C] Helvetica Neue">
                    Parents’ Training
                  </p>
                </div>
              </div>
            </div>
<<<<<<< HEAD
          </div>
        </section>
        <div className=" mt-20 md:px-16 max-sm:px-10 sm:px-10 mb-20 ">
          <h3 className="text-2xl Helvetica Neue font-bold p-5">
            Activities In School
========
      {/* --- SECTION 2 --- */}
      <section className="px-4 md:px-12 mt-12">
        <div className="flex flex-col md:flex-row-reverse md:gap-8 items-center md:items-start mb-16">
          <div className="md:w-1/2 mt-6 md:mt-0 overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:scale-95">
            <Image
              src="/Pasted image (7).png"
              alt="Vocational Training"
              width={800}
              height={500}
              className="rounded-lg object-cover w-full h-[200px] max-sm:h-[300px] md:h-[320px]"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#623D3C]">
              Growing with the Community
            </h2>
            <p className="mb-4 flex text-justify md:mt-10">
              What started as a small initiative within an orphanage has grown
              into a nationally recognized organization dedicated to inclusive
              education. In 2008, we opened our first integrated classroom
              within Toul Kork Primary School and launched a Vocational Training
              Centre in Phnom Penh. These milestones reflected our expanding
              commitment—not only to education but also to life skills and
              future employment for children with intellectual disabilities and
              autism.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 3 --- */}
      <div className="bg-[#8BAEA7] p-6 md:p-12">
        <div className="flex flex-col md:flex-row-reverse md:gap-8 items-center md:items-start ">
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#623D3C]">
              Reaching Further
            </h2>
            <p className="mb-4 flex text-justify md:mt-10">
              Since 2014, The Rabbit School has expanded its impact to other
              parts of the country, now operating education projects in Kandal,
              Kampong Speu, and Siem Reap provinces. Across all our locations,
              we offer tailored learning programs that respect each child’s
              pace, strengths, and unique potential.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:scale-95">
            <Image
              src="/Pasted image (6).png"
              alt="Vocational Training"
              width={800}
              height={500}
              className="rounded-lg object-cover w-full h-[200px] max-sm:h-[300px] md:h-[320px]"
            />
          </div>
        </div>
      </div>

      {/* --- SECTION 4 --- */}
      <div className="px-4 md:px-12 py-12">
        <div className="flex flex-col md:flex-row-reverse md:gap-8 items-center md:items-start">
          <div className="md:w-1/2 mt-6 md:mt-0 overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:scale-95">
            <Image
              src="/Pasted image (5).png"
              alt="Vocational Training"
              width={800}
              height={500}
              className="rounded-lg object-cover w-full h-[200px] max-sm:h-[300px] md:h-[320px]"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#623D3C]">
              Our Ongoing Commitment
            </h2>
            <p className="mb-4 flex text-justify md:mt-10">
              Today, The Rabbit School stands as a beacon of inclusive education
              in Cambodia. As we continue to evolve, we remain committed to
              expanding access, improving quality, and building a sustainable
              future for our programs.
            </p>
          </div>
        </div>
      </div>

      {/* --- BANNER --- */}
      <section className="relative w-full md:h-[50vh] sm:h-[25vh] max-sm:h-[20vh]  flex items-center justify-center">
        <Image
          src="/ss.jpg"
          alt="Rabbit School"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#A81B17]/70 via-[#A81B17]/50 to-[#A81B17]/70" />

        <div className=" md:max-w-1/1  relative inset-0 flex flex-col justify-center   md:px-12   font-extrabold  z-10 text-center text-white px-4">
          <h1 className="text-2xl md:text-4xl font-bold">
            What Drives Us: A Belief in Every Child
          </h1>
          <p className="mt-4 text-sm md:text-lg">
            Every child deserves a chance to reach their full potential—no
            matter their abilities or background.
          </p>
        </div>
      </section>

      {/* --- WHY CAMBODIA --- */}
      <section className="max-w-8xl mx-auto py-10 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#623D3C] mb-10 px-10 sm:px-2 max-sm:px-2">
          Why Cambodia
        </h2>

        <div className="grid  gap-8  text-justify">
          <div className="bg-white shadow-md rounded-lg p-6 flex  justify-between max-sm:flex-col overflow-hidden  transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100 active:scale-90">
            <div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#623D3C] mb-4">
                  A Deeply Marginalized Group
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  In Cambodia, children with intellectual disabilities remain
                  among the most excluded. Inclusive education is still not a
                  national priority, and most schools are not equipped to meet
                  their needs. Traditional beliefs and misinformation further
                  deepen the stigma— many still see disabilities as a punishment
                  for actions in a past life. These societal attitudes leave
                  children isolated, misunderstood, and left behind.
                </p>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#623D3C] mt-6 mb-4">
                  Barriers Made Worse by Poverty
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Poverty intensifies every challenge. Many families cannot
                  afford education, therapy, or care for their child with
                  special needs. Without support, these children often remain at
                  home—hidden from society, without access to learning or a
                  hopeful future.
                </p>
              </div>
            </div>
            <div className="bg-white  p-5">
              <h3 className="text-lg font-bold text-[#623D3C] mb-4">
                Why We Exist
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The Rabbit School is here to change that. Through our education
                programs, vocational training, and family support initiatives,
                we help children with intellectual disabilities overcome the
                many barriers they face—discrimination, lack of adapted
                education, health access, and future employment. We offer more
                than a classroom. We offer inclusion, hope, and pathways to
                self-reliance and independence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- OUR CORE DRIVERS --- */}
      <section className="max-w-7xl mx-auto px-15 ">
        <h2 className="text-2xl md:text-3xl font-bold text-[#623D3C] mb-10">
          Our Core Drivers
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#79A2C9] text-white rounded-lg p-6 shadow-md flex flex-col items-center">
            <div className="flex gap-5">
              <Image
                src="/Pasted image.png"
                alt="Empowerment Icon"
                width={48}
                height={48}
                className="mb-4"
              />
              <h3 className="text-2xl font-bold text-black max-sm:text-xl sm:text-xl  ">
                Empowerment
              </h3>
            </div>
            <p>
              Supporting children and families to build confidence,
              independence, and a sense of worth.
            </p>
          </div>

          <div className="bg-[#8BAEA7] text-white rounded-lg p-6 shadow-md flex flex-col items-center">
            <div className="flex gap-5">
              <Image
                src="/Pasted image (2).png"
                alt="Empowerment Icon"
                width={48}
                height={48}
                className="mb-4"
              />
              <h3 className="text-2xl font-bold text-black max-sm:text-xl sm:text-xl">
                Empowerment
              </h3>
            </div>
            <p>
              Supporting children and families to build confidence,
              independence, and a sense of worth.
            </p>
          </div>

          <div className="bg-[#8BAEA7] text-white rounded-lg p-6 shadow-md flex flex-col items-center">
            <div className="flex gap-5">
              <Image
                src="/Pasted image (3).png"
                alt="Empowerment Icon"
                width={48}
                height={48}
                className="mb-4"
              />
              <h3 className="text-2xl font-bold text-black max-sm:text-xl sm:text-xl">
                Empowerment
              </h3>
            </div>
            <p>
              Supporting children and families to build confidence,
              independence, and a sense of worth.
            </p>
          </div>
        </div>
      </section>

      {/* --- PICTURES OF STUDENTS WITH CLICK TO ENLARGE --- */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="mt-20 ">
          <h3 className="text-4xl text-[#623D3C] sm:text-2xl max-sm:text-2xl font-bold p-5 ">
            Picture Of Students
>>>>>>>> ac93857f9682bff5c81b9ec4d0b55a6ea8f12f40:src/app/about-us/page.tsx
          </h3>
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 pb-4 ">
              {[
<<<<<<<< HEAD:src/app/how-we-work/page.tsx
                "/images/a3.jpg",
                "/images/a4.jpg",
                "/images/a5.png",
                "/images/a6.png",
                "/images/a7.png",
                "/images/a8.png",
              ].map((src, i) => (
                <div
                  key={i}
                  className="min-w-[250px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg  transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2"
========
                "/images/image copy.png",
                "/images/image copy 6.png",
                "/images/image copy 2.png",
                "/images/image copy 4.png",
                "/images/image copy 5.png",
                "/images/image copy 3.png",
              ].map((src, i) => (
                <div
                  key={i}
                  onClick={() => setActive(active === i ? null : i)}
                  className={`min-w-[250px] bg-white rounded-xl shadow-md shadow-gray-400 
                    overflow-hidden transition-all duration-300 cursor-pointer
                    hover:scale-110 hover:shadow-xl hover:z-10
                    ${
                      active === i
                        ? "scale-110 shadow-xl z-10"
                        : "scale-95 opacity-80"
                    }
                  `}
>>>>>>>> ac93857f9682bff5c81b9ec4d0b55a6ea8f12f40:src/app/about-us/page.tsx
=======

            {/* Row 2 (scrollable gallery) */}
          </div>
        </section>
        <div className="mt-20 ">
          <h3 className="text-2xl Helvetica Neue font-bold p-5">
            Activities In School
          </h3>
          <div className="overflow-x-auto ">
            <div className="flex gap-6 pb-4">
              {[
                "/a3.jpg",
                "/a4.jpg",
                "/a5.png",
                "/a6.png",
                "/a7.png",
                "/a8.png",
              ].map((src, i) => (
                <div
                  key={i}
                  className="min-w-[250px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
>>>>>>> ac93857f9682bff5c81b9ec4d0b55a6ea8f12f40
                >
                  <Image
                    src={src}
                    alt={`Activity ${i + 1}`}
                    width={300}
                    height={200}
<<<<<<< HEAD
<<<<<<<< HEAD:src/app/how-we-work/page.tsx
                    className="w-full h-55 object-cover "
========
                    className="w-full h-70 object-cover"
>>>>>>>> ac93857f9682bff5c81b9ec4d0b55a6ea8f12f40:src/app/about-us/page.tsx
=======
                    className="w-full h-55 object-cover"
>>>>>>> ac93857f9682bff5c81b9ec4d0b55a6ea8f12f40
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* --- SDG GOALS --- */}
      <section className="max-w-2xl mx-auto py-12 px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-xl md:text-4xl font-bold text-[#623D3C]">
          Aligned with the UN SDG Goals
        </h2>
        <p className="mt-4 text-black text-sm  max-sm:text-justify">
          Our work supports inclusive and equitable quality education, decent
          work, and reduced inequalities.
        </p>

        <div className="grid grid-cols-1 max-sm:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-2 mt-8  max-sm:gap-1">
          <Image
            src="/Pasted image (9).png"
            alt="SDG 4 Quality Education"
            width={100}
            height={100}
            className="rounded-lg shadow-md object-cover max-sm:w-25 max-sm:h-25 md:w-full mx-auto"
          />

          <Image
            src="/Pasted image (10).png"
            alt="SDG 8 Decent Work and Economic Growth"
            width={200}
            height={200}
            className="rounded-lg shadow-md object-cover max-sm:w-25 max-sm:h-25 md:w-full mx-auto"
          />

          <Image
            src="/Pasted image (11).png"
            alt="SDG 10 Reduced Inequalities"
            width={200}
            height={200}
            className="rounded-lg shadow-md object-cover max-sm:w-25 max-sm:h-25 md:w-full mx-auto"
          />
        </div>

        <Link href="/donate">
          <button className="cursor-pointer mt-6 sm:mt-8 bg-yellow-400 hover:bg-yellow-800 text-black font-bold py-2 px-6 rounded-full shadow-md">
            Donate
          </button>{" "}
        </Link>
      </section>
      <Footer />
    </div>
=======
      </div>
      <Footer />;
    </>
>>>>>>> ac93857f9682bff5c81b9ec4d0b55a6ea8f12f40
  );
};

export default Page;
