"use client";

import Navbar from "@/components/ui/navbar";
import Image from "next/image";
import React, { useState } from "react";
import Footer from "@/components/ui/footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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

    AOS.init({
      duration: 800, // animation duration in ms
      once: true, // run animation only once
    });
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

  return (
    <>
      <Navbar />
      <div className="bg-[#F7F5F4] ">
        <section className="relative w-full h-[60vh] sm:h-[30vh] md:h-screen">
          <Image
            src="/images/ss.jpg"
            alt="Rabbit School"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

          <div
            className={`absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-8 Acumin-Condensed-Black font-extrabold transition-opacity duration-1000 ease-in-out opacity-0 ${
              isVisible("hero") ? "opacity-100" : ""
            }`}
            data-animate="hero"
            data-aos="fade-up"
          >
            <h1 className=" font-acumin sm:text-4xl max-sm:text-3xl md:text-6xl font-bold drop-shadow-lg mb-3">
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

        <div
          className="bg-white py-8 text-center shadow-gray-500/80   transition-colors "
          data-aos="fade-left"
        >
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
          data-aos="fade-right"
        >
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
              className="md:w-1/2 mt-6 md:mt-0 overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform
                hover:-translate-y-1 hover:scale-105
                active:scale-95 active:translate-y-0"
            >
              <Image
                src="/images/poor.png"
                alt="Vocational Training"
                width={600}
                height={400}
                className="rounded-lg"
              />{" "}
            </div>
          </div>
        </section>
        <section
          className={`px-3 md:px-16 max-sm:px-10 sm:px-10 py-8 text-justify transition-all duration-700 ease-in-out transform ${
            isVisible("vocational-training")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          id="vocational-training"
          data-aos="fade-down"
        >
          <div className="md:flex md:gap-8 items-center mb-16 md:flex-row-reverse mx-auto">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#623D3C] max-sm:text-2xl ">
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
              className="md:w-1/2 mt-6 md:mt-0  overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform
                hover:-translate-y-1 hover:scale-105
                active:scale-95 active:translate-y-0"
            >
              <Image
                src="/images/make.jpeg"
                alt="Vocational Training"
                width={600}
                height={400}
                className="rounded-lg"
              />{" "}
            </div>
          </div>
        </section>
        <section
          className={`px-3 md:px-16 max-sm:px-10 sm:px-10 py-8 text-justify transition-all duration-700 ease-in-out transform ${
            isVisible("teacher-training")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          id="teacher-training"
          data-aos="fade-right"
        >
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
              className="md:w-1/2 mt-6 md:mt-0  overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform
                hover:-translate-y-1 hover:scale-105
                active:scale-95 active:translate-y-0"
            >
              <Image
                src="/images/image.png"
                alt="Vocational Training"
                width={600}
                height={200}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="md:flex md:gap-8 items-center">
            <div className="md:w-1/2 relative">
              {!isPlaying ? (
                <div
                  className="relative cursor-pointer"
                  onClick={() => setIsPlaying(true)}
                >
                  <Image
                    src="/images/paper.png"
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
                  src="/images/video.mp4"
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
        <div
          className="space-y-6 px-4 md:px-16 py-12 text-justify max-sm:px-10 sm:px-10"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#623D3C] max-sm:text-2xl Acumin Condensed Black">
            Cambodia's First Speech Stimulators
          </h2>

          <Image
            src="/images/7.jpg"
            alt="Cambodia's First Speech Stimulators"
            width={1200}
            height={600}
            className="rounded-lg shadow-lg 5 mx-auto md:h-150 object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2"
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

          <div className=" mx-auto border-l-4 border-yellow-400 bg-yellow-50 py-10 rounded-lg shadow-md text-gray-800 md:p-8 transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
            <p className="italic font-playfair md:text-xl max-sm:px-5 text-2xl font-bold 6">
              “What autistic kids need is adapted speech stimulation,” explains
              Judy. “First, we help them move beyond suffering. Then we gently
              invite them to interact and find pleasure in their voice. With
              these two things combined, speech always follows.” <br /> <br />—
              Judy, Speech Therapist and Trainer of the Speech Stimulators
            </p>
          </div>
        </div>
        <section
          className={`py-16 bg-white shadow-md text-justify max-sm:px-10 sm:px-10 transition-all duration-700 ease-in-out transform ${
            isVisible("advocacy")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          id="advocacy"
          data-aos="fade-left"
        >
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#623D3C] mb-4 text-center">
              Advocacy and Community Building
            </h2>

            <p className="text-black  max-w-8xl  mb-12 ">
              We work closely with local authorities and parents to integrate
              Rabbit School’s programs into the public system. At the same time,
              we work to break down the stigma around intellectual
              disabilities—promoting understanding, inclusion, and lasting
              change within communities. We are not just teaching children—we
              are building a more inclusive society, one where everyone is
              valued for who they are and the contributions they can make.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg  transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
                <Image
                  src="/images/sai.jpg"
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

              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg  transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
                <Image
                  src="/images/mother.webp"
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
          </div>
        </section>
        <div
          className=" mt-20 md:px-16 max-sm:px-10 sm:px-10 mb-20 "
          data-aos="fade-up"
        >
          <h3 className="text-2xl Helvetica Neue font-bold p-5">
            Activities In School
          </h3>
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 pb-4 ">
              {[
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
                >
                  <Image
                    src={src}
                    alt={`Activity ${i + 1}`}
                    width={300}
                    height={200}
                    className="w-full h-55 object-cover "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />;
    </>
  );
};

export default Page;
