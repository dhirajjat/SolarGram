
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";


import Heart from "../assets/images/heart.png";
function ImageFooter() {
  const icons = [
    { icon: <FaFacebookF />, name: "Facebook" },
    { icon: <FaInstagram />, name: "Instagram" },
    { icon: <FaTwitter />, name: "Twitter" },
    { icon: <FaLinkedinIn />, name: "LinkedIn" },
  ];
  return (
    <>
      <div className="relative flex items-center   justify-center">
        <img
          src="/src/assets/images/footer.jpg"
          alt="Background"
          className="absolute inset-0  w-full h-[700px] lg:h-[350px] object-cover -z-10"
        />
        <div className=" bg-black text-white text-sm w-full h-auto lg:h-[350px] lg:px-10 lg:py-10  bg-opacity-60 lg:p-6 relative z-10">
          <div className="lg:flex sm:space-x-3 lg:space-x-40 lg:p-10">
            <div className=" lg:space-y-8 lg:ml-20">
              <img
                src="/logo.png"
                className=" my-5 mx-16 lg:mx-0 h-14 w-64 lg:w-52 lg:h-12 rounded-lg "
                alt="Logo"
              />
              <div className="flex gap-4 items-center justify-center mt-10">
                {icons.map((item, index) => (
                  <div key={index} className="relative group">
                    <div className="w-10 h-10 flex items-center justify-center bg-[#5869AC] rounded-full text-white hover:bg-blue-600 hover:text-white transition duration-100 cursor-pointer">
                      {item.icon}
                    </div>
                    <div className="absolute ease-in-out bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100  duration-100 bg-gray-800 text-white text-xs rounded px-2 py-1  z-10  scale-y-150  group-hover:scale-y-100 ">
                      {item.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8 m-5 lg:m-0 pl-12 lg:pl-0">
              <h3 className="font-bold text-yellow-500  text-2xl ">
                INFORMATION
              </h3>
              <div className="flex space-x-4">
                <ul className="space-y-5 ">
                  <li className="flex  hover:text-yellow-600 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>{" "}
                    <a href="#"> Home</a>
                  </li>
                  <li className="flex hover:text-yellow-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>{" "}
                    <a href="#"> Products</a>
                  </li>
                  <li className="flex hover:text-yellow-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>{" "}
                    <a href="#"> Contacts Us</a>
                  </li>
                  <li className="flex hover:text-yellow-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>{" "}
                    <a href="#"> Terms & Conditions </a>
                  </li>
                  <li className="flex hover:text-yellow-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>{" "}
                    <a href="#"> FAQ's</a>
                  </li>
                </ul>
                <ul className="space-y-5">
                  <li className="flex hover:text-yellow-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>{" "}
                    <a href="#"> About Us</a>
                  </li>
                  <li className="flex hover:text-yellow-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>{" "}
                    <a href="#"> Blogs</a>
                  </li>
                  <li className="flex hover:text-yellow-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>{" "}
                    <a href="#"> Enquiry</a>
                  </li>
                  <li className="flex hover:text-yellow-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>{" "}
                    <a href="#"> Pricavy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="m-5 pl-12 lg:pl-0 lg:m-0">
              <h3 className="text-yellow-500 font-bold  text-2xl mb-4">
                GET IN TOUCH
              </h3>

              <ul className=" lg:space-y-5 space-y-3  text-white">
                <li>
                  <h4 className=" font-bold">Address</h4>
                  NH753, Tirora Road, Gondia (MS)
                </li>
                <li>
                  <h4 className=" font-bold">Phone</h4>
                  +919970906129
                </li>
                <li>
                  <h4 className="font-bold">Email Address</h4>
                  hello@solargram.in
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#11132A] w-full h-full lg:py-8 py-4  lg:px-24 lg:h-96">
        <h3 className="font-bold text-white text-2xl px-8">
          SOLARGRAM present here
        </h3>

        <ul className="text-gray-400 text-md flex  flex-wrap space-x-6 space-y-5">
          <li className=" font-bold "> </li>
          <li className=" font-bold text-white ">• Maharashtra </li>
          <li>Solar in Gondia</li>
          <li>Solar in Bhandara</li>
          <li>Solar in Nagpur</li>
          <li> Solar in Chandrapur</li>
          <li>Solar in Gadchiroli</li>
          <li>Solar in Amravati</li>
          <li>Solar in Akola</li>
          <li> Solar in Nashik</li>
          <li>Solar in Pune</li>
          <li>Solar in Thane</li>
          <li>Solar in Kolhapur</li>
          <li className=" font-bold text-white ">• Madhya Pradesh </li>
          <li>Solar in Bhopal </li>
          <li> Solar in Indore</li>
          <li>Solar in Ujjain</li>
          <li>Solar in Dewas</li>
          <li>Solar in Balaghat</li>
          <li>Solar in Seoni</li>
          <li>Solar in Chhindwadra</li>
          <li>Solar in Betul</li>
          <li>Solar in Katni</li>
          <li>Solar in Jabalpur</li>
          <li>Solar in Satna</li>
          <li>Solar in Gwalior</li>
          <li className=" font-bold text-white ">• Chhattishgarh </li>
          <li>Solar in Raipur</li>
          <li>Solar in Bilaspur</li>
          <li>Solar in Durg</li>
          <li>Solar in RajNadgaon</li>
          <li className=" font-bold  text-white">• Telangana </li>
          <li>Solar in Hyderabad</li>
          <li>Solar in Rangareddy</li>
          <li>Solar in Sangareddy</li>
          <li> Solar in Trimulgherry</li>
          <li>Solar in Warangal</li>
          <li className=" font-bold text-white ">• Uttar Pradesh </li>
          <li>Solar in Lucknow</li>
          <li>Solar in Varanasi</li>
          <li>Solar in Gautam Buddha Nagar</li>
          <li>Solar in Ghaziabad</li>
          <li>Solar in Kanpur Nagar</li>
          <li>Solar in Meerut</li>
          <li>Solar in Barabanki</li>
          <li>Solar in Moradabad</li>
          <li>Solar in Bareily</li>
          <li>Solar in Amroha</li>
        </ul>
        <div className="text-white  text-right justify-end p-4 space-x-2 flex">
          <p className="text-white text-xl ">Proudly made by Dhiraj Jat </p>
          <img src={Heart} className="w-6 " alt="" />
        </div>
      </div>
      <div className=" lg:flex bg-black lg:px-32 px-20 text-sm  text-white justify-between p-2">
        <span>Copyright ©2025-26 All Rights Reserved </span>
        <span>Designed  By Alphawizz Technology PVT LTD</span>
      </div>
    </>
  );
}

export default ImageFooter;
