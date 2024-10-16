"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { IoCaretBackSharp, IoPlaySharp } from "react-icons/io5";
import { INSIGHTS_DATA } from "@/constants";

const InsightCard = ({
  date,
  image,
  title,
}: {
  date: string;
  image: string;
  title: string;
}) => {
  return (
    <div className="relative border rounded-xl bg-slate-400 overflow-hidden shadow-lg transition-transform transform h-[360px] md:h-[580px]">
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-300 transform hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000F0] to-[#002B3A00] pointer-events-none" />
      </div>
      <div className="absolute bottom-0 left-0 p-10 space-y-3 text-white max-w-lg">
        <span className="text-base">{date}</span>
        <h3 className="text-xl md:text-3xl font-semibold">{title}</h3>
        <p className="mt-1">Read More</p>
      </div>
    </div>
  );
};

const InsightsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3); // Default value

  useEffect(() => {
    const getCardsPerPage = () => {
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    };

    setCardsPerPage(getCardsPerPage());

    const handleResize = () => {
      setCardsPerPage(getCardsPerPage());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    if (currentIndex + cardsPerPage < INSIGHTS_DATA.length) {
      setCurrentIndex(currentIndex + cardsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - cardsPerPage >= 0) {
      setCurrentIndex(currentIndex - cardsPerPage);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <section className="mx-auto max-w-[1440px] my-[60px] sm:my-[100px] px-4 py-10">
      <div className="flex justify-between items-center mb-16">
        <h2 className="text-5xl">Latest Insights</h2>
        <div className="flex space-x-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="bg-[#EDEDED] hover:bg-slate-200 h-12 w-12 rounded-full flex items-center justify-center"
          >
            <IoCaretBackSharp className="text-2xl" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex + cardsPerPage >= INSIGHTS_DATA.length}
            className="bg-[#EDEDED] hover:bg-slate-200 h-12 w-12 rounded-full flex items-center justify-center"
          >
            <IoPlaySharp className="text-2xl" />
          </button>
        </div>
      </div>

      <div
        {...handlers}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {INSIGHTS_DATA.slice(currentIndex, currentIndex + cardsPerPage).map(
            (card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
              >
                <InsightCard
                  date={card.date}
                  image={card.image}
                  title={card.title}
                />
              </motion.div>
            )
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default InsightsSection;
