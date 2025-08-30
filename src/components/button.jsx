
import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScroll = () => {
    if (window.scrollY > 120) {
      setIsVisible(true);
    } else {
      setIsVisible(false); 
    }
  };

 
  const scrollToTop = () => {
    const scrollStep = () => {
      if (window.scrollY > 0) {
        window.scrollBy(0, -50); 
        requestAnimationFrame(scrollStep);
      }
    };
    requestAnimationFrame(scrollStep);
  };

 
  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-4 z-50 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <img
        src="src/assets/images/arrowUP.png"
        className="w-12  bg-yellow-400 rounded-3xl cursor-pointer shadow-xl shadow-gray-500"
        alt="Scroll to Top"
        onClick={scrollToTop}
      />
    </div>
  );
};

export default ScrollToTopButton;
