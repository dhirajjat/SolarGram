import React from 'react'

function GovernmentProject() {
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
        <span className="lg:text-5xl text-3xl font-bold">
          Government Projects{" "}
        </span>
        
      </div>
    </div>
  </div>
  <div className='lg:flex  mx-5  lg:mx-48 lg:space-x-10 lg:my-20 mt-12 lg:mt-20'>
    <div className=' '>
    <img
      src="/src/assets/images/Ghar.png"
      alt="Background"
      className=" h-[400px] w-[800px]  lg:rounded-full rounded-3xl "
    />
    </div>
    <div className='mt-5'>
        <h1 className='text-3xl text-yellow-500 font-semibold lg:mb-5 mb-2'> Government Projects</h1>
        <span className='text-gray-700'>An on-grid solar system, also known as a grid-tied solar system, is a popular choice for solar panel installation in Lucknow, functions alongside the grid. Accordingly, any excess or shortage of energy can
           be fed into the grid through net metering. Since</span>
    </div>
 

  </div>
  <div className='lg:flex mx-5 lg:my-8 my-5'>
    <div className='lg:w-1/2 lg:ml-40'>
        <h1 className='lg:text-5xl text-xl font-bold lg:text-end lg:my-4'>Uses and <span className='text-yellow-500'>Benefits</span></h1>
            <div className='lg:ml-5 flex flex-col space-y-5 mt-2 text-gray-500'>
                <span> <span > Solarium Green Energy is powering homes, businesses, and communities with innovative, sustainable solutions! Explore our impactful solar projects from rooftop solar, and carport to ground mount solar and solar trees all over India, covering residential, 
                  commercial, and government sectors.</span>
                  </span>
            </div>
    </div>
    <div className='lg:mt-20'>
    <img
      src="/src/assets/images/bulb.png"
      alt="Background"
      className=" h-96 lg:ml-20  ml-10 "
    />
    </div>
  </div>
  </>
  )
}

export default GovernmentProject