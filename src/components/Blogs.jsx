import React from 'react'
import photob from "../assets/images/photob.png";
import footer from "../assets/images/footer.jpg";

function Blogs() {
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
              Our <span className=" text-yellow-500 ">Blogs</span>{" "}
            </span>
            <h4 className=" lg:text-2xl text-lg"> → Blog Details</h4>
          </div>
        </div>
      </div>
      <div className='mt-16 my-10 lg:pt-10 lg:mx-40 mx-10 space-y-4 lg:space-y-10'>
        <img src={photob} className=' bg-gray-100  w-full' alt="" />
        <img src={photob}  className='bg-gray-100  w-full' alt="" />
      </div>
      </>
  )
}

export default Blogs