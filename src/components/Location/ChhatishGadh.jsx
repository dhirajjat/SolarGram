import React from 'react'

function ChhatishGadh() {
  return (
    <>
    <div className="relative flex items-center lg:mt-10 justify-center top-10">
    <img
      src="/src/assets/images/footer.jpg"
      alt="Background"
      className="absolute inset-0 w-full h-52 lg:h-[350px] object-cover -z-10"
    />

    <div className=" bg-black text-white text-sm w-full h-52 lg:h-[350px] lg:px-10 lg:py-10   bg-opacity-60 relative z-10">
      <div className=" lg:mt-20 mt-16 mx-10 lg:mx-32">
        <span className="lg:text-5xl text-2xl font-bold">
        Solar Power Solution Providers in Chhattisgarh{" "}
        </span>
        
      </div>
    </div>
  </div>
  <div className='lg:flex  mx-5  lg:ml-52  lg:space-x-10  lg:my-20 mt-12'>
    <div className=''>
    <img
      src="/src/assets/images/chhatisgadh.png"
      alt="Background"
      className=" lg:h-[550px] lg:w-[450px] rounded-3xl  lg:rounded-[180px] object-cover "
    />
    </div>
    <div className='mt-5 '>
        <h1 className='lg:text-4xl text-3xl text-yellow-500 font-semibold mb-5 text-wrap lg:me-32'>Solar Power Solution Providers in Chhattisgarh</h1>
        <span className='text-gray-700'>Solar Power Solution Providers in Madhya Pradesh.

</span>
    </div>
 

  </div>
  <div className='lg:flex lg:my-8'>
    <div className='lg:w-1/2  mx-5 lg:ml-40'>
        <h1 className='lg:text-5xl font-bold lg:text-end text-2xl mt-5 lg:my-5'>Specialities and <span className='text-yellow-500'>More +</span></h1>
        <span className='text-gray-500 lg:pl-20'>Solar Power Solution Providers in Chhattisgarh </span>
      
    </div>
    <div className='lg:mt-20'>
    <img
      src="/src/assets/images/bulb.png"
      alt="Background"
      className=" lg:h-96 w-80 lg:ml-20 ml-10  "
    />
    </div>
  </div>
  </>
  )
}

export default ChhatishGadh