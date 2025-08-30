import { useState, useEffect } from "react";

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("solar_popup_shown");

    if (!hasVisited) {
      setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem("solar_popup_shown", "true");
      }, 1000);
    }
  }, []);

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
      
          <button
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>

     
          <h2 className="text-xl font-bold bg-yellow-400 p-4 rounded-t-lg text-white">
            Book a Free Solar Consultation.
          </h2>

         
          <div className="p-4">
            <input
              type="text"
              placeholder="Full Name*"
              className="w-full p-2 border rounded-md my-2"
            />
            <input
              type="text"
              placeholder="WhatsApp No.*"
              className="w-full p-2 border rounded-md my-2"
            />


            <div className="my-4">
              <p className="text-sm font-semibold">Monthly Electricity Bill</p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {["Less than ₹1500", "₹1500 - ₹3000", "₹3000 - ₹5000", "₹5000 - ₹9000", "More than ₹9000"].map(
                  (amount, index) => (
                    <button
                      key={index}
                      className="border rounded-md py-2 px-3 text-sm hover:bg-yellow-400 hover:text-white transition"
                    >
                      {amount}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Other Inputs */}
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="Pin Code"
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="City*"
                className="w-full p-2 border rounded-md"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded-md my-2"
            />

            {/* Checkbox */}
            <div className="flex items-center my-2 text-sm">
              <input type="checkbox" className="mr-2" />
              <label>
                I agree to SolarGram's{" "}
                <a href="#" className="text-blue-500 underline">
                  terms of services
                </a>{" "}
                &{" "}
                <a href="#" className="text-blue-500 underline">
                  privacy policy
                </a>.
              </label>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-yellow-400 text-white py-2 rounded-md mt-4 hover:bg-yellow-500">
              Send Message
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default PopupForm;
