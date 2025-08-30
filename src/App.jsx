import React, { Suspense, useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./components/About'));
import NavBar from "./components/NavBar";

import Blogs from "./components/Blogs";
import ContactUs from "./components/ContactUs";
import Enquiry from "./components/Enquiry";
import OnGrid from "./components/services/OnGrid";
import OffGrid from "./components/services/OffGrid";
import SolarUpgradeMantanace from "./components/services/SolarUpgradeMantanace";
import HousingSociety from "./components/services/HousingSociety";
import GovernmentProject from "./components/services/GovernmentProject";
import ImageFooter from "./components/Footer";
import ScrollToTopButton from "./components/button";
import loaderGif from "./assets/sunGif2.gif"; 
import Maharashtra from "./components/Location/Maharashtra";
import MadhyaPradesh from "./components/Location/MadhyaPradesh";
import UtterPreadesh from "./components/Location/UtterPreadesh";
import Talngana from "./components/Location/Talngana";
import ChhatishGadh from "./components/Location/ChhatishGadh";
import PopupForm from "./components/PopupForm";
import ProjectSection from "./components/CardZoom";

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, [location]);

  const {pathname} = useLocation();
  useEffect (()=>{
    window.scrollTo(0,0);
  }, [pathname] )

  return (
    <div className="overflow-y-scroll scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-black">
      {loading && (
        <div className="fixed flex inset-0  items-center justify-center bg-white  z-50">
          <img src={loaderGif} className="lg:w-96 lg:mt-0  h-60 lg:ml-20  w-60 lg:h-96 z-50" alt="Loading..." />
        </div>
      )}

        <NavBar />
        <PopupForm/>
      <img
        src="src/assets/images/whatsapp.png"
        className="z-50 fixed w-14 bottom-5 left-3"
        alt="WhatsApp"
      />
       <Suspense fallback={<div>Loading Page...</div>}>
        <Routes>
          <Route path="/" element={<Home/>} />
           <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
      <Routes>
     
        
       
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/onGrid" element={<OnGrid />} />
        <Route path="/offGrid" element={<OffGrid />} />
        <Route path="/SolarUpgradeMantanace" element={<SolarUpgradeMantanace />} />
        <Route path="/HousingSociety" element={<HousingSociety />} />
        <Route path="/GovernmentProject" element={<GovernmentProject />} />
        <Route path="/chhattisgarhh" element ={<ChhatishGadh/>} />
        <Route path="/Maharastra" element={<Maharashtra/>} />
        <Route path="/MadhyaPradesh" element={<MadhyaPradesh/>} />
        <Route path="/chhattisgarhh" element ={<ChhatishGadh/>} />
        <Route path="/Talngana" element ={<Talngana/>} />
        <Route path="/UtterPreadesh" element={<UtterPreadesh/>} />
      
      
        
      </Routes>

      <ScrollToTopButton />
      {/* <ProjectSection/> */}
      <ImageFooter />
      
      
     
    </div>
  );
}

export default App;
