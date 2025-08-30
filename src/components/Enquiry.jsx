import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineCall } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { PiCity } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";

const Enquiry = () => {
  const [selectedPrice, setSelectedPrice] = useState("");

  const prices = [
    { value: "less-1500", label: "Less than ₹1500" },
    { value: "1500-3000", label: "₹1500 - ₹3000" },
    { value: "3000-5000", label: "₹3000 - ₹5000" },
    { value: "5000-9000", label: "₹5000 - ₹9000" },
    { value: "more-9000", label: "More than ₹9000" },
  ];
  return (
    <>
      <div>
        <div className="bg-[#FDB93A] flex flex-col lg:flex-row w-full lg:mt-20 mt-10 lg:space-x-32 lg:h-[700px] h-auto pb-10   ">
          <div className="flex  flex-col font-bold lg:mt-52 mt-20 lg:ms-56 ms-10 text-white lg:text-5xl text-3xl ">
            <span>Schedule a</span>
            <span className="text-[#0D626E]">FREE consultation</span>
            <span>with us today!</span>
            <span className=" my-1 font-medium text-sm text-[#0D626E]">
              Get genuine advice from our solar experts.
            </span>
            <span className="font-medium text-sm text-[#0D626E]">
              No pressure , book only if you are satisfied!
            </span>
          </div>
          <div className="bg-white lg:w-[550px] border-[1px] border-[#0D626E] mx-3 lg:mx-0 lg:h-[580px] h-auto mt-10 pb-5 rounded-2xl">
            <div className=" relative space-y-4">
              <h1 className="pt-8 ps-5 font-bold  text-3xl text-[#FDB93A]">
                {" "}
                <span className="text-[#0D626E] ">Write a</span> Message !
              </h1>

              <FaRegUser className="absolute ml-6 pt-3 text-3xl text-gray-500" />
              <input
                className="  border-gray-600 pl-10 border-2  p-2 w-[90%] ms-4 rounded-xl py-2"
                type="text"
                placeholder="Full Name*"
              />
              <MdOutlineCall className="absolute    left-6 pt-3  text-3xl text-gray-500" />
              <input
                className="  border-gray-600 pl-10  border-2  p-2 w-[90%] ms-4 rounded-xl py-2"
                type="text"
                placeholder="WhatsApp No*."
              />
              <h4 className="text-[#0D626E] font-bold m-5  text-lg">
                Monthly Electicity Bill
              </h4>
              <div className="grid grid-cols-1 px-4 pr-10 lg:grid-cols-3 gap-3">
                {prices.map((price, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPrice(price.value)}
                    className={`w-40 py-3  rounded-xl border-2 border-[#FDB93A] text-sm font-medium transition-all duration-300 px-2
            ${
              selectedPrice === price.value
                ? "bg-[#FDB93A] text-white"
                : "bg-white text-gray-700 hover:bg-[#fde4b4]"
            }`}
                  >
                    {price.label}
                  </button>
                ))}
              </div>
              <span className="flex ">
                <CiLocationOn className="absolute    left-6 pt-3  text-3xl text-gray-500" />
                <input
                  className="  border-gray-600  border-2 w-[44%]  p-2  ms-4 ps-10 rounded-xl py-2"
                  type="text"
                  placeholder="Pin Code"
                />
                <PiCity className="absolute    lg:left-[270px] left-48 ps-3 pt-3  text-3xl text-gray-500" />
                <input
                  className="  border-gray-600  border-2 lg:w-[43%] w-[42%] ps-8 p-2 ms-4 rounded-xl py-2"
                  type="text"
                  placeholder="City"
                />
              </span>
              <MdOutlineEmail className="absolute    left-6 pt-3  text-3xl text-gray-500" />
              <input
                className="  border-gray-600  border-2 pl-10  p-2 w-[90%] ms-4 rounded-xl py-2"
                type="text"
                placeholder="Eamil"
              />
              <label className="flex items-center ms-5 space-x-2 ">
                <input
                  type="checkbox"
                  className="w-4 mb-4 lg:mb-0 h-5 text-blue-600 rounded-md border-gray-300 "
                />
                <span className="text-gray-700 text-sm lg:text-sm">
                  I agree to SolarGram's
                  <span className="cursor-pointer text-black underline hover:text-gray-600">
                    {" "}
                    terms of services{" "}
                  </span>
                  &{" "}
                  <span className="cursor-pointer text-black underline hover:text-gray-600">
                    Conditions
                  </span>{" "}
                </span>
              </label>

              <button className="w-40  h-10  rounded-2xl text-white lg:ms-40 ms-24  bg-[#FDB93A] font-medium hover:bg-white hover:text-black border-2 hover:border-[#FDB93A]">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enquiry;
// import { FaUser } from "react-icons/fa";

// const InputWithIcon = () => {
//   return (
//     <div className="relative w-72">
//       <FaUser className="absolute left-3 mt-3 " />
//       <input
//         type="text"
//         placeholder="Enter your name"
//         className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//        <FaUser className="absolute left-3 mt-3 " />
//          <input
//         type="text"
//         placeholder="Enter your name"
//         className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//     </div>
//   );
// };

// export default InputWithIcon;
