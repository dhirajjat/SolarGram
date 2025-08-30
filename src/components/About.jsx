import React from "react";

function About() {
  return (
    <>
      <div className="relative flex items-center lg:mt-10 justify-center top-10">
        <img
          src="/src/assets/images/footer.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-52 lg:h-[350px] object-cover -z-10"
        />

        <div className=" bg-black text-white text-sm w-full h-52 lg:h-[350px] lg:px-10 lg:py-10   bg-opacity-60 relative z-10">
          <div className=" lg:mt-20 mt-20 mx-10 lg:mx-32">
            <span className="lg:text-5xl text-3xl font-bold">
              About <span className=" text-yellow-500 ">SOLARGRAM</span>{" "}
            </span>
            <h4 className=" lg:text-2xl text-lg"> → About Us</h4>
          </div>
        </div>
      </div>

      <div className="w-full  flex flex-col lg:flex-row  mt-10">
        <div className="  md:w-[50%] lg:m-20 ">
          <img
            className="w-full lg:w-full h-auto rounded-[100px] p-4 lg:p-0   lg:rounded-3xl"
            src="src/assets/images/aimage.png"
            alt="Solar Project"
          />
        </div>
        <div className="w-full md:w-[50%] mt-2 lg:mt-20 lg:px-0 px-4  mr-20  ">
          <h3 className=" font-bold text-5xl md:text-6xl ">
            <span className="text-[#FACC15]">SOLAR</span>
            <span className="text-[#0D626E]">GRAM</span>
          </h3>{" "}
          <div className="flex flex-col   space-y-6 mt-5  text-gray-500">
            <span>
              The solar energy industry is at the forefront of the global shift
              toward sustainable and renewable energy solutions. Harnessing the
              power of the sun, this industry has become a key player in
              reducing carbon emissions, mitigating climate change, and
              promoting energy independence across the world.{" "}
            </span>
            <span>
              Key Features of the Solar Energy Industry: Sustainable Energy
              Source: Solar energy is a clean and inexhaustible resource that
              reduces dependency on fossil fuels and minimizes environmental
              impact.
            </span>
            <span>
              Technological Innovation: Continuous advancements in photovoltaic
              (PV) technology, energy storage systems, and smart grid
              integration are driving increased efficiency and affordability.
            </span>
            <span>
              Economic Growth: The industry contributes significantly to job
              creation, with roles spanning manufacturing, installation,
              maintenance, and research and development.
            </span>
            <span>
              Government Support: Many governments incentivize solar adoption
              through subsidies, tax credits, and renewable energy targets,
              further accelerating its growth.
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row  lg:py-10 px-5  gap-10 bg-gradient-to-r from-[#e6faef] via-[#ffffff] to-[#ffffff]">
        <div className="w-full md:w-[60%] lg:ps-60   ">
          <h3 className="lg:mt-10 mt-4 p-4 lg:p-0  font-bold text-3xl md:text-5xl ">
            Why <span className="text-[#FACC15]">SOLAR</span>
            <span className="text-[#0D626E]">GRAM</span>
          </h3>
          <div className="lg:w-[100%] space-y-6   lg:mt-10">
            <div className="flex p-2 lg:p-0">
              <img
                className="w-7 h-7"
                src="src/assets/images/box-1.png"
                alt=""
              />
              <div className="text-sm text-gray-600 lg:ps-4  ps-2 text-start leading-loose ">
                <span className="text-[#0D626E] font-bold">
                  {" "}
                  Clean and Renewable Energy:
                </span>{" "}
                Solar energy is an abundant and inexhaustible resource. Unlike
                fossil fuels, it generates electricity without emitting harmful
                greenhouse gases or pollutants, contributing to a healthier
                planet.
              </div>
            </div>
            <div className="flex p-2 lg:p-0">
              <img
                className="w-7 h-7"
                src="src/assets/images/box-2.png"
                alt=""
              />
              <div className="text-sm text-gray-600 lg:ps-4 ps-2 text-start leading-loose">
                <span className="text-[#0D626E] font-bold">
                  {" "}
                  Future-Proof Investment:
                </span>{" "}
                Solar energy is abundant and inexhaustible, making it one of the
                most reliable renewable energy sources.
              </div>
            </div>
            <div className="flex p-2 lg:p-0">
              <img
                className="w-7 h-7"
                src="src/assets/images/box-3.png"
                alt=""
              />
              <div className="text-sm text-gray-600  lg:ps-4 ps-2 text-start leading-loose">
                <span className="text-[#0D626E] font-bold">Our Service:</span>{" "}
                Providing seamless service for a company involves creating a
                smooth, efficient, and consistent experience for clients
              </div>
            </div>
            <div className="flex p-2 lg:p-0 ">
              <img
                className="w-7 h-7"
                src="src/assets/images/box-4.png"
                alt=""
              />
              <div className="text-sm text-gray-600  lg:ps-4 ps-2 text-start leading-loose">
                <span className="text-[#0D626E] font-bold">
                  {" "}
                  Reduced Carbon Footprint:
                </span>{" "}
                Switching to solar significantly lowers your carbon footprint,
                contributing to a cleaner environment.
              </div>
            </div>
            <div className="flex p-2 lg:p-0 ">
              <img
                className="w-7 h-7"
                src="src/assets/images/box-5.png"
                alt=""
              />
              <div className="text-sm text-gray-600 lg:ps-4 ps-2 leading-loose text-start">
                <span className="text-[#0D626E] font-bold">
                  Cyclone-Proof, Safe Rooftop Solar:
                </span>{" "}
                Safe installations that can handle scary storms and winds up to
                170 kmph speeds.
              </div>
            </div>
          </div>

         
        </div>

        <div className="w-full  md:w-[40%] lg:space-y-6 lg:py-10">
          <img
            className="w-full md:w-[70%] lg:w-[78%] h-auto rounded-3xl"
            src="src/assets/images/Home-removebg-preview.png"
            alt="Solar Project"
          />
        </div>
      </div>
    </>
  );
}

export default About;
