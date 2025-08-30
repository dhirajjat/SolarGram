

import { useState } from "react";

const PriceFilter = () => {
  const [selectedPrice, setSelectedPrice] = useState("");

  const prices = [
    { value: "less-1500", label: "Less than ₹1500" },
    { value: "1500-3000", label: "₹1500 - ₹3000" },
    { value: "3000-5000", label: "₹3000 - ₹5000" },
    { value: "5000-9000", label: "₹5000 - ₹9000" },
    { value: "more-9000", label: "More than ₹9000" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {prices.map((price, index) => (
        <button
          key={index}
          onClick={() => setSelectedPrice(price.value)}
          className={`w-full px-4 py-3 rounded-xl border-2 border-[#FDB93A] text-sm font-medium transition-all duration-300 
            ${
              selectedPrice === price.value
                ? "bg-[#FDB93A] text-white"
                : "bg-white text-gray-700 hover:bg-[#fde4b4]"
            }`}
        >
          {price.label}
        </button>
      ))}
    </div>
  );
};

export default PriceFilter;
