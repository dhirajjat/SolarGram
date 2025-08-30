import React from "react";
import man from "../../assets/images/man.jpg";
import bulb from "../../assets/images/bulb.png";
import footer from "../../assets/images/footer.jpg";

function OnGrid() {
  return (
    <>
      <div className="relative flex items-center lg:mt-10 justify-center top-10">
        <img
          src={footer}
          alt="Background"
          className="absolute inset-0 w-full h-52 lg:h-[350px] object-cover -z-10"
        />

        <div className=" bg-black text-white text-sm w-full h-52 lg:h-[350px] lg:px-10 lg:py-10   bg-opacity-60 relative z-10">
          <div className=" lg:mt-20 mt-16 mx-10 lg:mx-32">
            <span className="lg:text-5xl text-3xl font-bold">
              On Grid Solar.{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="lg:flex   lg:mx-40 lg:space-x-10 lg:my-20 mt-12">
        <div className="mx-5 lg:mx-0">
          <img
            src={man}
            alt="Background"
            className=" lg:h-[530px] lg:w-[1000px]  lg:rounded-full rounded-3xl "
          />
        </div>
        <div className="mt-5 mx-5  lg:mx-0">
          <h1 className="lg:text-3xl text-2xl  text-yellow-500 font-semibold lg:mb-5 mb-2 ">
            On-Grid Solar
          </h1>
          <span className="text-gray-700">
            Corn is a staple food, one of the most commonly eaten and grown in
            the world. Corn is naturally gluten-free, and are loaded with
            important vitamins, minerals, and antioxidants that can help your
            health in a number of ways.
          </span>
        </div>
      </div>
      <div className="lg:flex lg:my-8 mt-8 lg:mt-8">
        <div className="lg:w-1/2 lg:ml-40 mx-5 lg:mx-0">
          <h1 className="lg:text-5xl text-3xl font-bold text-center  lg:text-end my-4">
            Uses and <span className="text-yellow-500">Benefits</span>
          </h1>
          <span className="text-gray-500">
            Corn is a great source of potassium, an essential nutrient that many
            Americans don’t get enough of. Potassium helps regulate the
            circulatory system, maintaining adequate blood flow and a strong
            heartbeat. Low potassium levels may lead to a potentially serious
            condition called hypokalemia.{" "}
          </span>
          <div className="ml-5 flex flex-col lg:space-y-5 space-y-2 mt-2 text-gray-500">
            <span>
              {" "}
              <span className="text-2xl "> • </span> Eye Health – Corn contains
              lutein, a carotenoid similar to vitamin A that’s more commonly
              found in fruits and vegetables. Lutein is known for lowering the
              risk of macular degeneration, cataracts, and other eye conditions.
            </span>
            <span>
              <span className="text-2xl "> • </span>
              Digestive Health – Corn is high in dietary fiber, which is
              necessary for maintaining a healthy lifestyle. Fiber is the bulk
              in plant-based foods that your body doesn’t digest. Although it’s
              indigestible, the fiber in corn offers many other advantages, like
              regulating bowel movements, managing blood sugar levels, and more.
              abc
            </span>
          </div>
        </div>
        <div className="lg:mt-20 my-5">
          <img
            src={bulb}
            alt="Background"
            className=" h-96 lg:ml-20  ml-12 "
          />
        </div>
      </div>
    </>
  );
}

export default OnGrid;
