import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Tabs from "./components/Question.jsx";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import Tabs from "../components/Questions";
import ZoomCard from "../components/CardZoom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

import image1 from "../assets/images/s-img-1.png";
import image2 from "../assets/images/s-img-2.png";
import image3 from "../assets/images/man.jpg";
import image4 from "../assets/images/s-img-1.png";
import image5 from "../assets/images/solarImg4.jpg";
import image6 from "../assets/images/Bulb.jpg";
import ImageSlider from "../components/Slider";
import photob from "../assets/images/photob.png";
import solarBanner4 from "../assets/images/solarBanner4.png";
import solarImg4 from "../assets/images/solarImg4.jpg";
import simg2 from "../assets/images/s-img-2.png";
import box1 from "../assets/images/box-1.png";
import box2 from "../assets/images/box-2.png";
import box3 from "../assets/images/box-3.png";
import box4 from "../assets/images/box-4.png";
import box5 from "../assets/images/box-5.png";
import home from "../assets/images/Home.jpg";
import adani from "../assets/images/adani.png";
import havells from "../assets/images/havells.png";
import vikramsolor from "../assets/images/vikram-solor.png";
import home2 from "../assets/images/home-2.png";
import polycab from "../assets/images/polycab.png";
import tata from "../assets/images/tata.png"
import utl from "../assets/images/utl.png";
import growatt from "../assets/images/growatt.png"
import waree from "../assets/images/waree.png"
 
const image = [
  adani,
  growatt,
  havells,
  polycab,

 tata,
  utl,
  vikramsolor,
waree,
 tata,
];

const SlideImage = [
  "src/assets/images/photob.png",
  "src/assets/images/photob.png",
  "src/assets/images/photob.png",
];

const images = [image1, image2, image3, image4, image5, image6];

function Home() {
  return (
    <>
      <div className="lg:flex space-y-4 lg:space-y-0 mx-5 lg:mx-0  lg:mt-32 mt-20 lg:ml-40">
        <div className=" lg:mt-20  lg:ml-20  ml-2 flex-col lg:w-1/2 ">
          <div className="font-sans flex flex-col lg:space-y-3 lg:text-6xl text-3xl font-bold text-gray-800 tracking-tight">
            <span>More Solar,</span>
            <span>More Renewable</span>
            <span>Energy</span>
          </div>
          <p className="text-sm  mt-4 lg:mt-8 md:text-base max-w-lg font-normal">
            The solar energy industry is at the forefront of the global shift
            toward sustainable and renewable energy solutions.
          </p>

          <button className=" mt-5 w-[50%] lg:w-[35%] border border-[#FDB93A] text-[22px] px-3 py-2   font-normal rounded-[15px] bg-[#FDB93A] text-white hover:bg-white hover:border-yellow-400 hover:text-black">
            Explore +
          </button>
        </div>

        <div className="swiper-start lg:w-1/2  lg:mr-20 ">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className=" lg:shadow-lg rounded-3xl lg:rounded-full lg:w-[65%]  "
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-60  lg:h-[590px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div>
        <div className="  mt-10 text-center font-bold lg:text-5xl">
          Save <span className="text-yellow-500"> Energy,</span> Safe{" "}
          <span className="text-yellow-500">Tomorow</span>{" "}
        </div>

        <div>
          <motion.div
            initial={{ y: 100, opacity: 1 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <img 
              className="w-full lg:h-full h-28 mt-5 border-2"
              src={photob}
              alt="image"
            />
          </motion.div>
        </div>
      </div>

      <div className=" lg:flex items-center justify-center lg:mt-20 mt-20 p-3 lg:my-20 w-full ">
        <div className="lg:flex w-full max-w-6xl  items-center gap-6">
          <motion.div
            className="w-full lg:w-1/2  lg:text-left "
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <h3 className=" -mt-24 lg:py-8 pt-7 font-sans   lg:text-5xl font-bold text-gray-800 tracking-tight ">
              About <span className="text-yellow-300"> SOLOR</span>
              <span className="text-[#0d626e]">GRAM</span>
            </h3>
            <span className="">
              <p className="text-gray-500  leading-loose text-sm ">
                The solar energy industry is at the forefront of the global
                shift toward sustainable and renewable energy solutions.
                Harnessing the power of the sun, this industry has become a key
                player in reducing carbon emissions, mitigating climate change,
                and promoting energy independence across the world.
              </p>{" "}
              <p className="pt-8  leading-loose text-gray-500 text-sm ">
                {" "}
                Key Features of the Solar Energy Industry: Sustainable Energy
                Source: Solar energy is a clean and inexhaustible resource that
                reduces dependency on fossil fuels and minimizes environmental
                impact.
              </p>{" "}
            </span>
          </motion.div>

          {/* Mobile image */}
          <motion.div
            className="lg:hidden w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <img
              className="w-full h-auto rounded-2xl shadow-lg"
              src={simg2}
              alt="Solar Energy"
            />
          </motion.div>

          {/* Desktop image */}
          <motion.div
            className="hidden lg:flex w-1/2 justify-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <img
              className="w-full h-auto rounded-2xl shadow-lg"
              src={simg2}
              alt="Solar Energy"
            />
          </motion.div>
        </div>
      </div>

      <div>
        <img
          className="w-full mt-5 border-2"
          src={solarBanner4}
          alt="image"
        />
      </div>

      <div className="text-center px-4">
        <h3 className="mt-10 text-center font-bold text-4xl md:text-5xl">
          Our <span className="text-yellow-400">Achievement</span>
        </h3>

        <div className="flex flex-col md:flex-row p-6 items-center gap-10">
          <div className="w-full md:w-1/2 flex justify-end ">
            <img
              className="w-full md:w-[70%] lg:w-[78%] h-auto rounded-3xl"
              src={solarImg4}
              alt="Solar Project"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-6">
            <div className="grid grid-cols-1 lg:w-[80%] sm:grid-cols-2 gap-6">
              <div className="flex flex-col items-center justify-center h-40 w-full sm:w-60 bg-gray-200 border-2 rounded-3xl shadow-md">
                <h4 className="font-semibold text-3xl">27MW+</h4>
                <p className="font-semibold text-gray-600">Solar Projects</p>
              </div>

              <div className="flex flex-col items-center justify-center h-40 w-full sm:w-60 bg-gray-200 border-2 rounded-3xl shadow-md">
                <h4 className="font-semibold text-3xl">42+</h4>
                <p className="font-semibold text-gray-600">Pan India</p>
              </div>

              <div className="flex flex-col items-center justify-center h-40 w-full sm:w-60 bg-gray-200 border-2 rounded-3xl shadow-md">
                <h4 className="font-semibold text-3xl">90%</h4>
                <p className="font-semibold text-gray-600">Energy Saving</p>
              </div>

              <div className="flex flex-col items-center justify-center h-40 w-full sm:w-60 bg-gray-200 border-2 rounded-3xl shadow-md">
                <h4 className="font-semibold text-3xl">86+</h4>
                <p className="font-semibold text-gray-600">Our Partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center lg:px-4">
        <div className="flex flex-col lg:flex-row lg:my-14 py-10  gap-10 bg-gradient-to-r from-[#e6faef] via-[#ffffff] to-[#ffffff]">
          <div className="w-full md:w-[60%] lg:ps-60    ">
            <h3 className="mt-10  font-bold text-4xl md:text-5xl ">
              Why <span className="text-yellow-400">SOLAR</span>
              <span className="text-[#0D626E]">GRAM</span>
            </h3>
            <div className="lg:w-[100%] space-y-6 lg:mx-0 mt-5 mx-4   lg:mt-10">
              <div className="flex ">
                <img
                  className="w-7 h-7"
                  src={box1}
                  alt=""
                />
                <div className="text-sm text-gray-600 ps-4  text-start leading-loose ">
                  <span className="text-[#0D626E] font-bold">
                    {" "}
                    Clean and Renewable Energy:
                  </span>{" "}
                  Solar energy is an abundant and inexhaustible resource. Unlike
                  fossil fuels, it generates electricity without emitting
                  harmful greenhouse gases or pollutants, contributing to a
                  healthier planet.
                </div>
              </div>
              <div className="flex ">
                <img
                  className="w-7 h-7"
                  src={box2}
                  alt=""
                />
                <div className="text-sm text-gray-600 ps-4 text-start leading-loose">
                  <span className="text-[#0D626E] font-bold">
                    {" "}
                    Future-Proof Investment:
                  </span>{" "}
                  Solar energy is abundant and inexhaustible, making it one of
                  the most reliable renewable energy sources.
                </div>
              </div>
              <div className="flex ">
                <img
                  className="w-7 h-7"
                  src={box3}
                  alt=""
                />
                <div className="text-sm text-gray-600  ps-4 text-start leading-loose">
                  <span className="text-[#0D626E] font-bold">Our Service:</span>{" "}
                  Providing seamless service for a company involves creating a
                  smooth, efficient, and consistent experience for clients
                </div>
              </div>
              <div className="flex ">
                <img
                  className="w-7 h-7"
                  src={box4}
                  alt=""
                />
                <div className="text-sm text-gray-600  ps-4 text-start leading-loose">
                  <span className="text-[#0D626E] font-bold">
                    {" "}
                    Reduced Carbon Footprint:
                  </span>{" "}
                  Switching to solar significantly lowers your carbon footprint,
                  contributing to a cleaner environment.
                </div>
              </div>
              <div className="flex ">
                <img
                  className="w-7 h-7"
                  src={box5}
                  alt=""
                />
                <div className="text-sm text-gray-600 ps-4 leading-loose text-start">
                  <span className="text-[#0D626E] font-bold">
                    Cyclone-Proof, Safe Rooftop Solar:
                  </span>{" "}
                  Safe installations that can handle scary storms and winds up
                  to 170 kmph speeds.
                </div>
              </div>
            </div>

            <div>
              {" "}
              <span></span>
            </div>
          </div>
          <div className="w-full md:w-[40%] space-y-6 py-10">
            <div className=" sticky top-20 mb-0 ">
              {" "}
              <img
                className="w-full  md:w-[70%] lg:w-[78%] h-auto rounded-3xl"
                src={home}
                alt="Solar Project"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row p-6 gap-8 min-h-screen bg-white">
        {/* LEFT BLOCK – Products & Services */}
        <div className="w-full lg:w-1/2 lg:ms-60">
          <h3 className="font-bold lg:text-5xl text-2xl w-full py-3">
            Products & Services of SOLARGRAM
          </h3>
          <p className="text-slate-500 text-sm py-1">
            Solar upgrade and maintenance services include cleaning, monitoring,
            and repairs for solar panels and systems. These services can help
            extend the life of your solar panels and ensure they perform
            optimally.
          </p>

          {/* Service 1 */}
          <div className="py-3">
            <div className="flex items-center gap-3">
              <div className="border-2 rounded-full w-12 h-12 flex items-center justify-center">
                <img
                  className="w-8 h-6"
                  src={adani}
                  alt=""
                />
              </div>
              <h5 className="font-bold">On Grid Solar System</h5>
            </div>
            <p className="text-gray-500">
              An on-grid solar system is connected to the local electricity
              grid. It's the most popular type for homes and businesses.
            </p>
          </div>

          {/* Service 2 */}
          <div className="mt-6">
            <div className="flex items-center gap-3">
              <div className="border-2 rounded-full w-12 h-12 flex items-center justify-center">
                <img
                  className="w-8 h-6"
                  src={adani}
                  alt=""
                />
              </div>
              <h5 className="font-bold">Off-Grid Solar System</h5>
            </div>
            <p className="text-gray-500">
              A system that generates electricity and stores it in batteries,
              operating independently from the main power grid.
            </p>
          </div>

          {/* Service 3 */}
          <div className="mt-6">
            <div className="flex items-center gap-3">
              <div className="border-2 rounded-full w-12 h-12 flex items-center justify-center">
                <img
                  className="w-8 h-6"
                  src={havells}
                  alt=""
                />
              </div>
              <h5 className="font-bold">Hybrid Solar System</h5>
            </div>
            <p className="text-gray-500">
              Combines solar panels, batteries, and inverters to offer
              continuous power with both solar and stored energy.
            </p>
          </div>

          {/* Service 4 */}
          <div className="mt-6">
            <div className="flex items-center gap-3">
              <div className="border-2 rounded-full w-12 h-12 flex items-center justify-center">
                <img
                  className="w-12 h-4"
                  src={vikramsolor}
                  alt=""
                />
              </div>
              <h5 className="font-bold">
                Commercial and Industrial (C&I) Solar Power
              </h5>
            </div>
            <p className="text-gray-500">
              Supplies electricity to businesses and large operations. Useful
              for lighting, cooling, heating, and equipment.
            </p>
          </div>

          {/* Service 5 */}
          <div className="mt-6">
            <div className="flex items-center gap-3">
              <div className="border-2 rounded-full w-12 h-12 flex items-center justify-center">
                <img
                  className="w-8 h-6"
                  src={havells}
                  alt=""
                />
              </div>
              <h5 className="font-bold">
                Solar Upgrade & Maintenance Services
              </h5>
            </div>
            <p className="text-gray-500">
              Includes cleaning, monitoring, and repairs to boost lifespan and
              efficiency of your solar systems.
            </p>
          </div>
        </div>

        {/* RIGHT BLOCK – Sticky Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="sticky top-20">
            <img
              className="w-[500px] rounded-3xl lg:rounded-none"
              src={home2}
              alt="Solar Services"
            />
          </div>
        </div>
      </div>

      {/* <div className="  lg:px-4">
        <h3 className="lg:mt-10 my-8 text-center font-bold text-4xl md:text-5xl">
          Our <span className="text-yellow-400">Projects</span>
        </h3>

        <div className="flex flex-col lg:flex-row lg:space-x-12 space-y-8 lg:space-y-0 mx-8 lg:ms-10 ">
          <div
            className="  flex flex-col  cursor-pointer rounded-lg  
          transition-transform duration-1000  ease-in-out hover:-translate-y-4"
          >
            {" "}
            <img
              className="w-96 items-end lg:my-5 border border-gray-300 justify-end lg:ms-20 rounded-3xl"
              src="src/assets/images/man.jpg"
              alt=""
            />
            <span className="lg:ps-24 text-2xl text-yellow-500 font-semibold">
              On-Grid Solar.
            </span>
            <button className="relative text-start hover:text-white w-28 lg:ps-2 group  lg:py-1 rounded-bl-2xl lg:ms-24 text-white  overflow-hidden transition duration-300 ease-in-out">
              <span className=" relative z-10 text-gray-500 hover:text-white text-sm ">
                {" "}
                READ MORE
              </span>
              <span className="absolute inset-0 bg-[#286881] hover:text-white z-0 transform scale-y-0 origin-bottom transition-transform duration-300 ease-in-out group-hover:scale-y-100" />
            </button>
          </div>
          <div
            className="  flex flex-col  cursor-pointer rounded-lg  
          transition-transform duration-1000 ease-in-out hover:-translate-y-4 "
          >
            <img
              className="w-96 lg:my-5 border border-gray-300 rounded-3xl"
              src="src/assets/images/bulb.jpg"
              alt=""
            />{" "}
            <span className="lg:ps-5 text-2xl text-yellow-500 font-semibold">
              Off-Grid Solar.
            </span>
            <button className="relative text-start hover:text-white w-28 ps-2 group  py-1 rounded-bl-2xl lg:-5 text-white  overflow-hidden transition duration-300 ease-in-out">
              <span className=" relative z-10 text-gray-500 hover:text-white text-sm ">
                {" "}
                READ MORE
              </span>
              <span className="absolute inset-0 bg-[#286881] hover:text-white z-0 transform scale-y-0 origin-bottom transition-transform duration-300 ease-in-out group-hover:scale-y-100" />
            </button>
          </div>
          <div
            className="  flex flex-col  cursor-pointer rounded-lg  
          transition-transform duration-1000 ease-in-out hover:-translate-y-4"
          >
            <img
              className="w-96 h-64 lg:my-5 border border-gray-300 rounded-3xl "
              src="src/assets/images/Ghar.png"
              alt=""
            />{" "}
            <span className="lg:ps-5 text-2xl text-yellow-500 font-semibold">
              Goverment Projects{" "}
            </span>
            <button className="relative text-start hover:text-white w-28 lg:ps-2 group  py-1 rounded-bl-2xl lg:ms-5 text-white  overflow-hidden transition duration-300 ease-in-out">
              <span className=" relative z-10 text-gray-500 hover:text-white text-sm ">
                {" "}
                READ MORE
              </span>
              <span className="absolute inset-0 bg-[#286881] hover:text-white z-0 transform scale-y-0 origin-bottom transition-transform duration-300 ease-in-out group-hover:scale-y-100" />
            </button>
          </div>
        </div>
      </div> */}
      <div>
        <ZoomCard />
      </div>

      <div className="lg:mt-0 my-5  space-y-8 lg:space-y-0   ">
        <h3 className="lg:my-10 mx-8 lg:mx-0 lg:text-center font-bold text-2xl lg:text-5xl">
          Up Next<span className="text-yellow-400"> SOLARGRAM</span>
        </h3>
        <div className="max-w-[80%] md:ml-20 lg:ml-40 ml-10">
          <Swiper
            slidesPerView={5}
            spaceBetween={10}
            loop={true}
            autoplay={{ delay: 2000 }}
            modules={[Autoplay]}
          >
            {image.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Slide ${index}`}
                  className="lg:w-[150px] w-[150px] lg:px-4 h-[35px] lg:h-[60px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div>
        <Tabs />
      </div>
      <div>
        <ImageSlider />
      </div>
    </>
  );
}

export default Home;
