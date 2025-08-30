import React from 'react'

function Stiky() {
    return(
        <div className="flex flex-col lg:flex-row p-6 gap-8 min-h-screen bg-white">
        {/* LEFT BLOCK – Products & Services */}
        <div className="w-full lg:w-1/2 lg:ms-60">
          <h3 className="font-bold lg:text-5xl text-2xl w-full py-3">
            Products & Services of SOLARGRAM
          </h3>
          <p className="text-slate-500 text-sm py-1">
            Solar upgrade and maintenance services include cleaning, monitoring,
            and repairs for solar panels and systems. These services can help
            extend the life of your solar panels and ensure they perform
            optimally.
          </p>

          {/* Service 1 */}
          <div className="py-3">
            <div className="flex items-center gap-3">
              <div className="border-2 rounded-full w-12 h-12 flex items-center justify-center">
                <img
                  className="w-8 h-6"
                  src="src/assets/images/adani.png"
                  alt=""
                />
              </div>
              <h5 className="font-bold">On Grid Solar System</h5>
            </div>
            <p className="text-gray-500">
              An on-grid solar system is connected to the local electricity
              grid. It's the most popular type for homes and businesses.
            </p>
          </div>

          {/* Service 2 */}
          <div className="mt-6">
            <div className="flex items-center gap-3">
              <div className="border-2 rounded-full w-12 h-12 flex items-center justify-center">
                <img
                  className="w-8 h-6"
                  src="src/assets/images/adani.png"
                  alt=""
                />
              </div>
              <h5 className="font-bold">Off-Grid Solar System</h5>
            </div>
            <p className="text-gray-500">
              A system that generates electricity and stores it in batteries,
              operating independently from the main power grid.
            </p>
          </div>

          {/* Service 3 */}
          <div className="mt-6">
            <div className="flex items-center gap-3">
              <div className="border-2 rounded-full w-12 h-12 flex items-center justify-center">
                <img
                  className="w-8 h-6"
                  src="src/assets/images/havells.png"
                  alt=""
                />
              </div>
              <h5 className="font-bold">Hybrid Solar System</h5>
            </div>
            <p className="text-gray-500">
              Combines solar panels, batteries, and inverters to offer
              continuous power with both solar and stored energy.
            </p>
          </div>

          {/* Service 4 */}
          <div className="mt-6">
            <div className="flex items-center gap-3">
              <div className="border-2 rounded-full w-12 h-12 flex items-center justify-center">
                <img
                  className="w-12 h-4"
                  src="src/assets/images/vikram-solor.png"
                  alt=""
                />
              </div>
              <h5 className="font-bold">
                Commercial and Industrial (C&I) Solar Power
              </h5>
            </div>
            <p className="text-gray-500">
              Supplies electricity to businesses and large operations. Useful
              for lighting, cooling, heating, and equipment.
            </p>
          </div>

          {/* Service 5 */}
          <div className="mt-6">
            <div className="flex items-center gap-3">
              <div className="border-2 rounded-full w-12 h-12 flex items-center justify-center">
                <img
                  className="w-8 h-6"
                  src="src/assets/images/havells.png"
                  alt=""
                />
              </div>
              <h5 className="font-bold">
                Solar Upgrade & Maintenance Services
              </h5>
            </div>
            <p className="text-gray-500">
              Includes cleaning, monitoring, and repairs to boost lifespan and
              efficiency of your solar systems.
            </p>
          </div>
        </div>

        {/* RIGHT BLOCK – Sticky Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="sticky top-20">
            <img
              className="w-[500px] rounded-3xl lg:rounded-none"
              src="src/assets/images/home-2.png"
              alt="Solar Services"
            />
          </div>
        </div>
      </div>
    )

}

return Stiky