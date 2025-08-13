import Image from "next/image";
import pic1 from "../../public/picture/Links/pic1.jpg";
import pic3 from "../../public/picture/Links/pic3.png";

export default function Home() {
  return (
    <header className="bg-white shadow">
      <div className="relative w-full h-[700px]">
        {/* Image */}
        <Image src={pic1} alt="" fill className="object-cover" />

        {/* Dark overlay with 62% opacity */}
        <div className="absolute inset-0 bg-black opacity-[0.62]"></div>

        {/* Text + Button on top */}
        <div className="absolute inset-0 flex flex-col text-white px-[76px] pt-[400px] max-w-[1000px]">
          <h3 className="text-4xl font-bold text-left">
            EXTRAORDINARY LEARNING FOR EXTRAORDINARY LEARNERS
          </h3>
          <p className="mt-4 text-lg text-left max-w-2xl">
            Providing children and youth with intellectual disabilities and
            autism access to education, support, confidence, and skills to reach
            their full potential.
          </p>

          {/* Button */}
          <button
            className="mt-6 w-[168px] h-[40px] 
             bg-[#FED45F] border border-black 
             shadow-[5px_5px_4px_rgba(0,0,0,0.25)] 
             flex items-center justify-center 
             font-inter font-extrabold text-[20px] leading-[37px] text-white
             rounded-full
             transition-colors duration-300"
            style={{
              WebkitTextStroke: "1px black",
            }}
          >
            READ MORE
          </button>
        </div>
      </div>
      <div className="relative w-full h-[700px]">
        {/* Image */}
        <Image src={pic3} alt="" fill className="object-cover" />

        {/* Dark overlay with 62% opacity */}
        <div className="absolute inset-0 bg-black opacity-[0.62]"></div>

        {/* Text + Button on top */}
        <div className="absolute inset-0 flex flex-col text-white px-[76px] pt-[400px] max-w-[500px]">
          <h3 className="text-4xl font-bold text-left">Our Story</h3>
          <p className="mt-4 text-lg text-left max-w-2xl">
            Have benefited from our education programs since 2013...
          </p>

          {/* Button */}
          <button
            className="mt-6 w-[168px] h-[40px] 
             bg-[#FED45F] border border-black 
             shadow-[5px_5px_4px_rgba(0,0,0,0.25)] 
             flex items-center justify-center 
             font-inter font-extrabold text-[20px] leading-[37px] text-white
             rounded-full
             transition-colors duration-300"
            style={{
              WebkitTextStroke: "1px black",
            }}
          >
            READ MORE
          </button>
        </div>
      </div>
      <section
        className="relative w-full h-[650px] bg-[#D9D9D9]"
        style={{ top: "1639px" }} // only if you truly need this fixed position
      >
        {/* Black box with text */}
        <div
          className="absolute bg-[#0B0B0B] w-[564px] h-[43px] flex items-center px-4"
          style={{ top: "101px", left: "85px" }} // 1740 - 1639 = 101px inside
        >
          <h2 className="font-inter font-extrabold text-[48px] leading-[61px] text-white">
            How We Work
          </h2>
        </div>
      </section>
    </header>
  );
}
