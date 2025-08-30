import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Ghar from "../assets/images/Ghar.png";
import man from "../assets/images/man.jpg";
import bulb from "../assets/images/bulb.png";

const CardZoom = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, type: "spring", bounce: 0.3 },
    },
  };

  const images = [man, bulb, Ghar];
  const titles = ["On-Grid Solar.", "Off-Grid Solar.", "Government Projects"];

  return (
    <div className="lg:px-4">
      <h3 className="lg:mt-10 my-8 text-center font-bold text-4xl md:text-5xl">
        Our <span className="text-yellow-400">Projects</span>
      </h3>

      <div
        ref={ref}
        className="flex flex-col lg:flex-row lg:space-x-12 space-y-8 lg:space-y-0 mx-8 lg:ms-10"
      >
        {images.map((image, index) => {
          const title = titles[index];

          return (
            <div
              key={index}
              className="cursor-pointer transition-transform duration-1000 ml-20 ease-in-out hover:-translate-y-4"
            >
              <motion.div
                className="flex flex-col cursor-pointer rounded-lg transition-transform duration-1000 ease-in-out hover:-translate-y-4"
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <img
                  className="w-96 h-64 lg:my-5 border border-gray-300 justify-end rounded-3xl"
                  src={image}
                  alt={title}
                />
                <span className="lg:ps-5 text-2xl text-yellow-500 font-semibold">
                  {title}
                </span>

                <button className="relative text-start hover:text-white w-28 ps-2 group py-1 rounded-bl-2xl lg:ms-5 text-white overflow-hidden transition duration-300 ease-in-out">
                  <span className="relative z-10 text-gray-500 hover:text-white text-sm">
                    READ MORE
                  </span>
                  <span className="absolute inset-0 bg-[#286881] z-0 transform scale-y-0 origin-bottom transition-transform duration-300 ease-in-out group-hover:scale-y-100" />
                </button>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardZoom;
