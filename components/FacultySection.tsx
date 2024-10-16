"use client";

import { FACULTY_DATA } from "@/constants";
import { Faculty } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const FacultyCard = ({ faculty }: { faculty: Faculty }) => {
  return (
    <div className="bg-white p-3 rounded-lg shadow-md w-[340px] md:w-[523px]">
      <h3 className="text-xl font-semibold p-5">{faculty.title}</h3>

      <div className="relative w-full h-[360px] md:h-[527px] overflow-hidden rounded-lg">
        <Image
          src={faculty.image}
          alt={faculty.title}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-300 transform hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 text-black">
          <h4 className="text-3xl font-semibold">{faculty.subTitle}</h4>
          <p className="text-base mt-5">{faculty.description}</p>
        </div>
      </div>
    </div>
  );
};

const FacultySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % FACULTY_DATA.length);
  };

  return (
    <section className="relative bg-cover bg-center my-[60px] sm:my-[100px] px-4 py-10">
      <Image
        src="/images/topview.jpeg"
        alt="Hero Banner"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/60 to-transparent md:bg-gradient-to-r md:from-white md:via-white/60 md:to-transparent" />
      <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-between h-full px-4">
        <div className="mb-8 max-w-2xl text-black">
          <h2 className="text-5xl font-semibold">
            Lorem Ipsumdolor sit consectetur
          </h2>
          <p className="mt-9 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis velit nulla. In hac habitasse platea dictumst. Fusce non
            venenatis velit. Proin luctus malesuada mauris vitae mattis.
            Pellentesque iaculis elit lorem, et varius ipsum dictum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Donec mattis velit
            nulla. In hac habitasse platea dictumst. Fusce non venenatis velit.
            Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis
            elit lorem, et varius ipsum dictum.
          </p>
        </div>

        <div className="flex-shrink-0">
          <FacultyCard faculty={FACULTY_DATA[currentIndex]} />
          <button
            onClick={handleNext}
            className="absolute bottom-24 right-3 sm:right-28 md:right-0 md:bottom-1/2 py-2 px-4 w-[60px] h-[60px] bg-slate-50 p-2 rounded-full flex items-center justify-center hover:bg-white transition duration-300"
          >
            <FaPlay size={24} color="black" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
