import React from "react";

export default function Ironman({ image, title }) {
  return (
    <div className="flex flex-col justify-center items-center px-2 py-4 min-w-[140px] min-h-[78px] shadow-gray-300">
      <img src={image} alt={title} className="min-w-[120px] min-h-[78px] object-contain" />
      <p className="mt-3 text-[14px]  text-gray-800 font-semibold">{title}</p>
    </div>
  );
}
