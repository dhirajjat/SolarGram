import React from 'react'
import housing from "../../assets/images/housing.png";
import bulb from "../../assets/images/bulb.png";
import footer from "../../assets/images/footer.jpg";
function HousingSociety() {
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
          
        Housing Society.{" "}
        </span>
        
      </div>
    </div>
  </div>
  <div className='lg:flex mx-5 lg:mx-60 lg:space-x-10 lg:my-20 mt-12 lg:mt-12'>
    <div className=''>
    <img
      src={housing}
      alt="Background"
    className=" w-[400px] h-[550px]  lg:rounded-[180px] rounded-3xl "
    />
    </div>
    <div className='mt-5'>
        <h1 className='text-3xl text-yellow-500 font-semibold lg:mb-5 mb-2'> 
        
Housing Society.</h1>
        <span className='text-gray-700'>
        Housing Society.</span>
    </div>
 

  </div>
  <div className='lg:flex  mx-5 lg:mx-0 lg:my-8'>
    <div className='lg:w-1/2 lg:ml-40'>
        <h1 className='lg:text-5xl text-3xl font-bold lg:text-end lg:my-4 mt-5 lg:mt-0'>Uses and <span className='text-yellow-500'>Benefits</span></h1>
            <div className='lg:ml-5 flex flex-col space-y-5 mt-2 text-gray-500'>
                <span>
                Housing Society.  </span>
            </div>
    </div>
    <div className='lg:mt-20 mt-5' >
    <img
      src={bulb}
      alt="Background"
      className=" lg:h- h-80 lg:ml-20  ml-10 "
    />
    </div>
  </div>
  </>
  )
}

export default HousingSociety



// import React, { useRef } from "react";
// import { useState } from "react";
// import { NavLink, Link } from "react-router-dom";

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setIsDropdownOpen] = useState(null);

//   let timeoutRef = useRef(null);

//   const handleMouseEnter = (dropdown) => {
//     clearTimeout(timeoutRef.current);
//     setIsDropdownOpen(dropdown);
//   };

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => {
//       setIsDropdownOpen(null);
//     }, 200);
//   };

//   return (
//     <nav className="bg-slate-50 lg:p-3 p-2 shadow-md  fixed top-0 left-0 w-full z-40">
//       <div className="container mx-auto flex justify-between items-center lg:px-10">
//         <img
//           src="/logo.png"
//           className=" h-12 lg:h-16 lg:ml-36 rounded-lg object-contain"
//           alt="Logo"
//         />

//         <button
//           className="lg:hidden text-black focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <span className="material-symbols-outlined mr-3 text-3xl">
//             {isOpen ? "close" : "menu"}
//           </span>
//         </button>

//         <div
//           className={`lg:flex lg:items-center lg:space-x-9 absolute lg:relative top-10  lg:top-0 lg:right-32 w-full lg:w-auto text-sm lg:text-base font-medium text-black-900   bg-slate-50 lg:bg-transparent  p-5 lg:p-0 transition-all duration-300 ease-in-out ${
//             isOpen ? "block" : "hidden"
//           }`}
//         >
//           <Link
//             to="/"
//             className={location.pathname === "/" ? "text-yellow-500 p-2 lg:p-0" : "block lg:inline text-sm lg:text-base font-medium text-black-900 hover:text-orange-500 p-2 lg:p-0" }
     
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             className= {location.pathname === "/about" ? "text-yellow-500 p-2 lg:p-0":"block lg:inline  hover:text-orange-500 p-2 lg:p-0"}
//           >
//             About Us
//           </Link>
//           <div
//             className="relative group  "
//             onMouseEnter={() => handleMouseEnter("Services")}
//             onMouseLeave={handleMouseLeave}
//           >
//             <button
//               href="#"
//               className="block lg:inline  hover:text-orange-500 p-2 lg:p-0"
//             >
//               Services{" "}
//               <span className="material-symbols-outlined text-sm ">
//                 expand_more
//               </span>
//             </button>
//             {dropdownOpen === "Services" && (
//               <div className="absolute mt-10  w-80 bg-gray-100 shadow-xl rounded-2xl p-4 z-10">
//                 <div className="flex flex-col  text-sm">
//                   <Link
//                     to="/onGrid"
//                     className={location.pathname==="/onGrid"?"text-yellow-500 p-4 " :"hover:bg-yellow-500 p-4 rounded-xl"}
//                   >
//                     {" "}
//                     On-Grid Solar.
//                   </Link>{" "}
//                   <hr />
//                   <Link
//                     to="/offGrid"
//                     className={ location.pathname==="/offGrid"?"text-yellow-500 p-4 ": "hover:bg-yellow-500 p-4 rounded-xl"}
//                   >
//                     {" "}
//                     Off-Grid Solar.
//                   </Link>{" "}
//                   <hr />
//                   <Link
//                     to="/GovernmentProject"
//                     className={ location.pathname==="/GovernmentProject"?"text-yellow-500 p-4 ": "hover:bg-yellow-500 p-4 rounded-xl"}
//                   >
//                     {" "}
//                     Government Projects
//                   </Link>{" "}
//                   <hr />
//                   <Link
//                     to="/SolarUpgradeMantanace"
//                     className={ location.pathname==="/SolarUpgradeMantanace"?"text-yellow-500 p-4 ": "hover:bg-yellow-500 p-4 rounded-xl"}
//                   >
//                     {" "}
//                     Solar Upgrade & Mantanace.
//                   </Link>{" "}
//                   <hr />
//                   <Link
//                     to="/HousingSociety"
//                     className={ location.pathname==="/HousingSociety"?"text-yellow-500 p-4 ": "hover:bg-yellow-500 p-4 rounded-xl"}
//                   >
//                     {" "}
//                     Housing Society.
//                   </Link>{" "}
//                   <hr />
//                 </div>
//               </div>
//             )}
//           </div>
//           <div
//             className="relative group  "
//             onMouseEnter={() => handleMouseEnter("Location")}
//             onMouseLeave={handleMouseLeave}
//           >
//             <button
//               href="#"
//               className="block lg:inline  hover:text-orange-500 p-2 lg:p-0"
//             >
//               Location{" "}
//               <span className="material-symbols-outlined text-sm ">
//                 expand_more
//               </span>
//             </button>
//             {dropdownOpen === "Location" && (
//               <div className="absolute mt-10  w-[420px] bg-gray-100 shadow-xl rounded-2xl p-4 z-10">
//                 <div className="flex flex-col  text-sm">
//                   <Link
//                     to="/Maharastra"
//                      className={ location.pathname ==="/Maharastra"?"text-yellow-500 py-2 p-2": "hover:bg-yellow-500  py-2 p-2 rounded-xl"}
//                   >
//                     {" "}
//                     Solar Power Solution Providers in Maharastra
//                   </Link>{" "}
//                   <hr />
//                   <Link
//                     to="/MadhyaPradesh"
//                     className={ location.pathname ==="/MadhyaPradesh"?"text-yellow-500 py-2 p-2": "hover:bg-yellow-500  py-2 p-2 rounded-xl"}                  >
//                     {" "}
//                     Solar Power Solution Providers in Madhya Pradesh
//                   </Link>{" "}
//                   <hr />
//                   <Link
//                     to="/chhattisgarhh"
//                     className={ location.pathname ==="/chhattisgarhh"?"text-yellow-500 py-2 p-2": "hover:bg-yellow-500  py-2 p-2 rounded-xl"}                  >
//                     {" "}
//                     Solar Power Solution Providers in Chhattisgarh
//                   </Link>{" "}
//                   <hr />
//                   <Link
//                     to="/Talngana"
//                     className={ location.pathname ==="/Talngana"?"text-yellow-500 py-2 p-2": "hover:bg-yellow-500  py-2 p-2 rounded-xl"}                  >
//                     {" "}
//                     Solar Power Solution Providers in Telangana
//                   </Link>{" "}
//                   <hr />
//                   <Link
//                     to="/UtterPreadesh"
//                     className={ location.pathname ==="/UtterPreadesh"?"text-yellow-500 py-2 p-2": "hover:bg-yellow-500  py-2 p-2 rounded-xl"}                  >
//                     {" "}
//                     Solar Power Solution Providers in Utter Pradesh
//                   </Link>{" "}
//                   <hr />
//                 </div>
//               </div>
//             )}
//           </div>

//           <Link
//             to="/blogs"
//             className={location.pathname === "/blogs" ? "text-yellow-500 p-2 lg:p-0":"block lg:inline   hover:text-orange-500 p-2 lg:p-0"}
//           >
//             Blogs
//           </Link>
//           <Link
//             to="/contact"
//             className={location.pathname === "/contact" ? "text-yellow-500 p-2 lg:p-0":"block lg:inline   hover:text-orange-500 p-2 lg:p-0"}
//           >
//             Contact Us
//           </Link>
//           <Link
//             to="/enquiry"
//             className={location.pathname === "/enquiry" ? "text-yellow-500 p-2 lg:p-0":"block lg:inline   hover:text-orange-500 p-2 lg:p-0"}
//           >
//             Enquiry
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
