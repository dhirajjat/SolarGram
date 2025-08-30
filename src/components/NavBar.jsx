import { easeInOut } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/Logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const location = useLocation();
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);

    setIsOpen(false);
    setDropdownOpen(null);

    return () => window.removeEventListener("resize", handleResize);
  }, [location]);

  const toggleDropdown = (name) => {
    if (dropdownOpen === name) {
      setTimeout(() => {
        setDropdownOpen(null);
      }, easeInOut);
    } else {
      setTimeout(() => {
        setDropdownOpen(name);
      }, easeInOut);
    }
  };

  const handleMouseEnter = (name) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setDropdownOpen(name), 200);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(null);
    }, 200);
  };

  return (
    <nav className="bg-slate-50 lg:p-3 p-2 shadow-md fixed top-0 left-0 w-full z-40">
      <div className="container mx-auto flex justify-between items-center lg:px-10">
        <img
          src={logo}
          className="h-12 lg:h-16 lg:ml-36 rounded-lg object-contain"
          alt="Logo"
        />

        <button
          className="lg:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined mr-3 text-3xl">
            {isOpen ? "close" : "menu"}
          </span>
        </button>

        <div
          className={`lg:flex lg:items-center lg:space-x-9 absolute lg:relative top-10 lg:top-0 lg:right-32 w-full lg:w-auto text-sm lg:text-base font-medium text-black-900 bg-slate-50 lg:bg-transparent p-5 lg:p-0 transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={
              location.pathname === "/"
                ? "text-yellow-500 p-2 lg:p-0"
                : "block lg:inline hover:text-orange-500 p-2 lg:p-0"
            }
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className={
              location.pathname === "/about"
                ? "text-yellow-500 p-2 lg:p-0"
                : "block lg:inline hover:text-orange-500 p-2 lg:p-0"
            }
          >
            About Us
          </Link>

        
          <div
            className="relative"
            onMouseEnter={() => !isMobile && handleMouseEnter("Services")}
            onMouseLeave={() => !isMobile && handleMouseLeave()}
          >
            <button
              className="block lg:inline hover:text-orange-500 p-2 lg:p-0 w-full text-left"
              onClick={() => toggleDropdown("Services")}
            >
              Services{" "}
              <span className="material-symbols-outlined text-sm">
                expand_more
              </span>
            </button>
            {dropdownOpen === "Services" && (
              <div
                className={`${
                  isMobile
                    ? "block relative lg:mt-2 w-full"
                    : "absolute lg:mt-8 w-80"
                } lg:bg-gray-100 lg:shadow-xl p lg:rounded-2xl lg:p-4  p-2 pl-5  lg:pl-0 z-10`}
              >
                <div className="flex flex-col  text-sm">
                  {[
                    ["/onGrid", "On-Grid Solar"],
                    ["/offGrid", "Off-Grid Solar"],
                    ["/GovernmentProject", "Government Projects"],
                    ["/SolarUpgradeMantanace", "Solar Upgrade & Maintenance"],
                    ["/HousingSociety", "Housing Society"],
                  ].map(([path, label], index) => (
                    <Link
                      key={index}
                      to={path}
                      onClick={() => {
                        setIsOpen(false);
                        setDropdownOpen(null);
                      }}
                      className={`${
                        location.pathname === path
                          ? "text-yellow-500"
                          : "hover:bg-yellow-500"
                      } lg:p-4 p-2 rounded-xl`}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

         
          <div
            className="relative"
            onMouseEnter={() => !isMobile && handleMouseEnter("Location")}
            onMouseLeave={() => !isMobile && handleMouseLeave()}
          >
            <button
              className="block lg:inline hover:text-orange-500 p-2 lg:p-0 w-full text-left"
              onClick={() => toggleDropdown("Location")}
            >
              Location{" "}
              <span className="material-symbols-outlined text-sm">
                expand_more
              </span>
            </button>
            {dropdownOpen === "Location" && (
              <div
                className={`${
                  isMobile
                    ? "block relative mt-2 w-full"
                    : "absolute lg:mt-9 w-[420px]"
                } lg:bg-gray-100 lg:shadow-xl lg:rounded-2xl lg:p-4 p-1 pl-5 z-10`}
              >
                <div className="flex flex-col text-sm">
                  {[
                    ["/Maharastra", "Maharastra"],
                    ["/MadhyaPradesh", "Madhya Pradesh"],
                    ["/chhattisgarhh", "Chhattisgarh"],
                    ["/Talngana", "Telangana"],
                    ["/UtterPreadesh", "Uttar Pradesh"],
                  ].map(([path, label], index) => (
                    <Link
                      key={index}
                      to={path}
                      onClick={() => {
                        setIsOpen(false);
                        setDropdownOpen(null);
                      }}
                      className={`${
                        location.pathname === path
                          ? "text-yellow-500"
                          : "hover:bg-yellow-500"
                      } lg:py-2 p-2 rounded-xl`}
                    >
                      Solar Power Solution Providers in {label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/blogs"
            onClick={() => setIsOpen(false)}
            className={
              location.pathname === "/blogs"
                ? "text-yellow-500 p-2 lg:p-0"
                : "block lg:inline hover:text-orange-500 p-2 lg:p-0"
            }
          >
            Blogs
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={
              location.pathname === "/contact"
                ? "text-yellow-500 p-2 lg:p-0"
                : "block lg:inline hover:text-orange-500 p-2 lg:p-0"
            }
          >
            Contact Us
          </Link>

          <Link
            to="/enquiry"
            onClick={() => setIsOpen(false)}
            className={
              location.pathname === "/enquiry"
                ? "text-yellow-500 p-2 lg:p-0"
                : "block lg:inline hover:text-orange-500 p-2 lg:p-0"
            }
          >
            Enquiry
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
