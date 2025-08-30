import React from 'react'

function SolarUpgradeMantanace() {
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
          
Solar Upgrade & Mantanace.{" "}
        </span>
        
      </div>
    </div>
  </div>
  <div className='flex  mx-48 space-x-10 my-20'>
    <div className=''>
    <img
      src="/src/assets/images/Home.jpg"
      alt="Background"
      className=" h-[530px] w-[1200px] rounded-[180px] "
    />
    </div>
    <div className='mt-5'>
        <h1 className='text-3xl text-yellow-500 font-semibold mb-5'> 
        Solar Upgrade & Mantanace.</h1>
        <span className='text-gray-700'>As electricity consumption and costs continue to rise, the world looks to renewable energy sources to meet its energy needs. Solar energy, including Solar Panel for Home UPNEDA, has gained popularity as a renewable energy source in recent years due to its</span>
    </div>
 

  </div>
  <div className='flex my-8'>
    <div className='w-1/2 ml-40'>
        <h1 className='text-5xl font-bold text-end my-4'>Uses and <span className='text-yellow-500'>Benefits</span></h1>
            <div className='ml-5 flex flex-col space-y-5 mt-2 text-gray-500'>
                <span>As electricity consumption and costs continue to rise, the world looks to renewable energy sources to meet its energy needs. Solar energy, including Solar Panel for Home UPNEDA, has gained popularity as a renewable energy source in recent years due to its decreasing costs and increasing efficiency.  </span>
            </div>
    </div>
    <div className='mt-20'>
    <img
      src="/src/assets/images/bulb.png"
      alt="Background"
      className=" h-96 ml-20  "
    />
    </div>
  </div>
  </>
  )
}

export default SolarUpgradeMantanace