import React from 'react'

function OffGrid() {
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
              Off Grid Solar.{" "}
            </span>
            
          </div>
        </div>
      </div>
      <div className='lg:flex mx-5 lg:mx-48 lg:space-x-10 lg:my-20 mt-12 lg:mt-0'>
        <div className=''>
        <img
          src="/src/assets/images/bulb.jpg"
          alt="Background"
        className=" lg:h-[530px] lg:w-[1000px]  lg:rounded-full rounded-3xl "
        />
        </div>
        <div className='mt-5'>
            <h1 className='text-3xl text-yellow-500 font-semibold mb-5'>Off-Grid Solar</h1>
            <span className='text-gray-700'>Frozen mix vegetables can often be prepared with minimal effort, making them a quick and convenient alternative to fresh vegetables. They tend to have a longer shelf life, helping you get the most bang for your buck.
               What’s more, they’re available year-ro</span>
        </div>
     

      </div>
      <div className='lg:flex mx-5 lg:my-8'>
        <div className='lg:w-1/2 lg:ml-40'>
            <h1 className='lg:text-5xl text-3xl font-bold lg:text-end my-4'>Uses and <span className='text-yellow-500'>Benefits</span></h1>
                <div className='ml-5 flex flex-col space-y-5 mt-2 text-gray-500'>
                    <span> <span className='text-2xl '> •    </span> When you eat mixed vegetables, you get the nutrients from each vegetable. This means you can also enjoy the health benefits of each vegetable. In other words, mixed vegetables can provide you with dietary diversity. Also, they can help you achieve a healthy rainbow plate. Which means more colour on your plate. 
                    And this results in a healthier diet.</span>
                        <span><span className='text-2xl '> • </span>
                        Eating mixed vegetables regularly allows gives access to different healthful phytochemicals in one meal. This is better than eating one type of vegetable in each meal. Because then you would only get the nutrients or phytochemicals from a single vegetable. And with individual vegetables, you can spend many days without eating other vegetables due to rotation. And mixed 
                        vegetables help you harness the power of variety in each meal.
                        </span>
                </div>
        </div>
        <div className='lg:mt-20 my-5 lg:my-0'>
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

export default OffGrid