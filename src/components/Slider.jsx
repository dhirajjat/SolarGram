import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

const SlideImage = [
  "src/assets/images/photob.png",
  "src/assets/images/photob.png",
  "src/assets/images/photob.png",
];

export default function ImageSlider() {
  return (

    <div className=" py-5 mx-3 ">
        
      <h3 className="lg:my-10 -mt-20 lg:mt-0 text-center font-bold text-4xl md:text-5xl">
        Our Associated<span className="text-yellow-400"> Partners</span>
      </h3>
      <div className=" relative">
      <motion.div
            initial={{ y: 100, opacity: 1 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
          >
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          speed={1200} 
          modules={[Autoplay, Navigation]}
          navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }} 
        >
          {SlideImage.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Slide ${index}`}
                className="lg:w-full w-full  h-32 lg:h-[380px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        </motion.div>
        

     
        <button className="prev-btn absolute top-1/2 left-5 transform -translate-y-1/2 bg-yellow-500 text-white lg:p-3 p-1 rounded-3xl  z-10">
          ◀
        </button>

        
        <button className="next-btn absolute top-1/2 right-5 transform -translate-y-1/2 bg-yellow-500 text-white lg:p-3 p-1 rounded-3xl z-10">
          ▶
        </button>
      </div>
    </div>
  );
}
