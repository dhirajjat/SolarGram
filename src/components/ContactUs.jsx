import React from "react";

function ContactUs() {
  
  return (
    <>
      <div className="relative flex items-center lg:mt-10 lg:justify-center top-10 mb-10">
        <img
          src="/src/assets/images/footer.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-52  lg:h-[350px] object-cover -z-10"
        />

        <div className=" bg-black  text-white text-sm w-full h-52 lg:h-[350px] lg:px-10 lg:py-10   bg-opacity-60 relative z-10">
          <div className=" lg:mt-20 mt-16 mx-10 lg:mx-32">
            <span className="lg:text-5xl text-3xl font-bold">
              Let's <span className=" text-yellow-500 ">Contact</span>{" "}
            </span>
            <h4 className=" lg:text-2xl text-lg"> → Contact Details</h4>
          </div>
        </div>
      </div>
      <div className="text-center lg:my-10 mt-20 ">
        <span className="text-[#FACC15] text-5xl font-bold">
          Connect <span className="text-[#0D626E]"> With Us</span>{" "}
        </span>
        <div className="lg:flex flex-col lg:flex-row space-y-10  lg:space-x-4  lg:mx-10 lg:ms-40  ">
          <div className="relative lg:mt-10 ms-5 lg:ms-0">
            <img
              src="/src/assets/images/solar.png"
              alt="Background"
              className="absolute inset-0  lg:w-96 w-80  h-52 lg:h-[250px] rounded-3xl object-cover -z-10"
            />

            <div className=" bg-black px-4 py-5 text-white text-sm lg:w-96 w-80 rounded-3xl font-medium space-y-2 text-start h-52 lg:h-[250px] lg:px-10 lg:py-10   bg-opacity-70 relative z-10">
              <img
                src="/src/assets/images/map.png"
                className="lg:w-12 w-10 p-1 bg-white object-cover rounded-full"
                alt=""
              />
              <h4 className="text-lg font-bold">Our Address</h4>
              <h4>SOLARGRAM</h4>
              <span>NH753. Tirora Road , Gondia (MS)</span>
            </div>
          </div>
          <div className="relative flex lg:ms-0  items-center lg:mt-10 justify-center ">
            <img
              src="/src/assets/images/solar.png"
              alt="Background"
              className="absolute inset-0  lg:w-96 ms-8 w-80 h-52 lg:ms-0 lg:h-[250px] rounded-3xl object-cover "
            />

            <div className=" bg-black px-4 py-5  text-white text-sm lg:w-96 w-80 rounded-3xl font-medium space-y-2 text-start h-52 lg:h-[250px] lg:px-10 lg:py-10   bg-opacity-70 relative">
              <img
                src="/src/assets/images/phonecall.png"
                className="w-12 my-3 p-2 bg-white object-cover rounded-full"
                alt=""
              />
              <h4 className="text-lg font-bold">Phone Number</h4>
              <h4>+919970906129</h4>
              <span>+919970906129</span>
            </div>
          </div>
          <div className="relative flex items-center lg:mt-10 justify-center">
            <img
              src="/src/assets/images/solar.png"
              alt="Background"
              className="absolute inset-0 lg:w-96 w-80 h-52 lg:h-[250px] ms-8 lg:ms-0 rounded-3xl object-cover -z-10"
            />

            <div className=" bg-black px-4 py-5  text-white text-sm lg:w-96 w-80  rounded-3xl font-medium space-y-2 text-start h-52 lg:h-[250px] lg:px-10 lg:py-10   bg-opacity-70 relative z-10">
              <img
                src="/src/assets/images/email.png"
                className="w-12 my-3 p-2 bg-white object-cover rounded-full"
                alt=""
              />
              <h4 className="text-lg font-bold">Email Address </h4>
              <h4>hello@solargram.in</h4>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center mt-10  mb-11">
          <iframe
            className="rounded-lg border border-yellow-500 w-full sm:w-[1050px] h-[300px] sm:h-[400px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3757.223723456661!2d79.9958!3d21.4677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4d3e3e3e3e3e3%3A0x1e2a1e2a1e2a1e2a!2sSOLARGRAM!5e0!3m2!1sen!2sin!4v1700000000000"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
                  
        </div>
      </div>
    </>
  );
}

export default ContactUs;
