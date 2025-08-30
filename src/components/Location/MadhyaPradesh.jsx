import React from 'react'
import mp from "../../assets/images/mp.png";
import bulb from "../../assets/images/bulb.png";
import footer from "../../assets/images/footer.jpg";

function MadhyaPradesh() {
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
            <span className="lg:text-5xl text-2xl font-bold">
            Solar Power Solution Providers in Madhya Pradesh.{" "}
            </span>
            
          </div>
        </div>
      </div>
      <div className='lg:flex   lg:ml-52 mx-5  lg:space-x-10  lg:my-20 my-10 pt-5 lg:pt-0'>
        <div className=''>
        <img
          src={mp}
          alt="Background"
          className=" lg:h-[550px] lg:w-[450px] rounded-3xl  lg:rounded-[180px] object-cover "
        />
        </div>
        <div className='mt-5 '>
            <h1 className='lg:text-4xl text-3xl text-yellow-500 font-semibold mb-5 text-wrap lg:me-32'>Solar Power Solution Providers in Madhya Pradesh.</h1>
            <span className='text-gray-700'>Solar Power Solution Providers in Madhya Pradesh.

</span>
        </div>
     

      </div>
      <div className='lg:flex lg:my-8 mx-5'>
        <div className='lg:w-1/2 lg:ml-40'>
            <h1 className='lg:text-5xl text-2xl font-bold lg:text-end lg:my-5'>Specialities and <span className='text-yellow-500'>More +</span></h1>
            <span className='text-gray-500 lg:pl-20'>Solar Power Solution Providers in Madhya Pradesh. </span>
          
        </div>
        <div className='lg:mt-20 lg:my-0 my-5'>
        <img
          src={bulb}
          alt="Background"
          className=" lg:h-96 h-80 lg:ml-20  ml-10 "
        />
        </div>
      </div>
      </>
  )
}

export default MadhyaPradesh