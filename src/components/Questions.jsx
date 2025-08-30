import React from "react";
import { useState } from "react";
import { MdArrowDropUp } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
const faqs = [
  {
    question: "Why I should choose SolarGram:",
    answer:
      "SolarGram is India’s a leading provider of solar energy solutions, specializing in residential and industrial solar system installations. We offer reliable, high-quality services to help customers transition to clean and sustainable energy.",
  },
  {
    question: "What is a solar rooftop system?:",
    answer:
      "A solar rooftop system is a setup where solar panels are installed on your rooftop to convert sunlight into electricity, minimizing your reliance on the grid and lowering your energy bills. It’s a clean, renewable, and cost-effective way to power your home or business. Plus, it’s a simple and maintenance-free solution.",
  },
  {
    question: "Why should I go solar?:",
    answer:
      "Solar power helps you save money on your electricity bills, reduces your dependence on the grid, and allows you to generate your own clean, renewable energy. It’s also a great contribution toward a greener environment.",
  },
  {
    question: "Is solar power safe?:",
    answer:
      "Yes, solar power is safe. Solar panels are designed to be durable and reliable, with strict safety standards. They don’t produce harmful emissions, and professional installation ensures everything is set up correctly and safely.",
  },
  {
    question:
      "Do solar panels generate electricity during monsoon and winter?:",
    answer:
      "Yes, solar panels generate electricity during monsoon and winter. While their efficiency might be slightly lower due to cloudy skies and shorter daylight hours, they still produce power from the available sunlight. Modern solar panels are designed to work well even in low-light conditions.",
  },
  {
    question:
      "Does a rooftop solar PV system generate power during a power failure?:",
    answer:
      "Yes, solar panels generate electricity during monsoon and winter. While their efficiency might be slightly lower due to cloudy skies and shorter daylight hours, they still produce power from the available sunlight. Modern solar panels are designed to work well even in low-light conditions.",
  },
  {
    question: "What is Net metering?:",
    answer:
      "You can use your solar system to support the fridge, AC, dryer, electric oven, and other electrical devices. However, you should check the energy requirement of each appliance to ensure your solar panels produce enough energy to support them.",
  },
  {
    question: "What installation services does SolarGram offer?:",
    answer:
      "SolarGram offers comprehensive installation services for residential and industrial solar rooftop systems. Our team handles everything from site assessment and system design to installation and grid connection, ensuring a smooth and efficient process tailored to your energy needs.",
  },
  {
    question: "How long does the installation process take?:",
    answer:
      "The installation process usually takes 1 to 3 days, depending on the system’s size and complexity. Our team ensures a quick and efficient setup once approvals are in place.",
  },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("general");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-6  my-10  flex flex-col ">
    
      <h2 className="text-4xl font-bold lg:text-center mb-5">
        Frequently Asked Questions
      </h2>
      <div className="flex space-x-4  lg:mx-40 mx-auto">
        <button
          className={`px-4 py-3 rounded-md ${
            activeTab === "general"
              ? "bg-[#FDB93A] text-white text-sm  font-medium"
              : "border border-orange-300 rounded-2xl text-sm  font-medium text-black-900"
          }`}
          onClick={() => setActiveTab("general")}
        >
          General
        </button>
        <button
          className={`px-4 py-3  rounded-md ${
            activeTab === "profile"
              ? "bg-[#FDB93A] text-white text-sm  font-medium"
              : "border border-orange-300 rounded-2xl text-sm  font-medium text-black-900"
          }`}
          onClick={() => setActiveTab("profile")}
        >
         Solar Maintenance
        </button>
        <button
          className={`px-4 py-3 rounded-md ${
            activeTab === "soler-economics"
              ? "bg-[#FDB93A] text-white text-sm  font-medium"
              : "border border-orange-300  rounded-2xl  text-sm  font-medium text-black-000"
          }`}
          onClick={() => setActiveTab("soler-economics")}
        >
         Soler Econoics
        </button>
      </div>

      <div className="mt-2 w-full ">
        {activeTab === "general" && (
          <div className="tab-content">
            <div className=" lg:mx-32 mx-auto lg:p-6 pt-4 lg:pt-0 min-h-screen">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-orange-300 rounded-2xl"
                  >
                    <button
                      className="w-full flex justify-between items-center p-4 text-left font-medium "
                      onClick={() => toggleFAQ(index)}
                    >
                      {faq.question}
                      <span className="text-xl ">
                        {openIndex === index ?  <MdArrowDropUp />:<MdArrowDropDown /> }
                      </span>
                    </button>
                    {openIndex === index && (
                      <div className="p-4  border-t text-gray-600  border-gray-300">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {activeTab === "profile" }
          {activeTab === "soler-economics"} 
      </div>
    </div>
  );
}
