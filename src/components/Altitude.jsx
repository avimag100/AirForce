import React from "react";
import { CgArrowLongRight } from "react-icons/cg";

const Altitude = ({ value }) => {
  value = value / 3000 * 100;
  return (
    <div className="flex items-end h-72 relative">
      <div className="w-24 h-72 bg-gray-300 flex flex-col justify-between rounded-lg">
        <div className="text-center">3000</div>
        <div className="text-center">2000</div>
        <div className="text-center">1000</div>
        <div className="text-center">0</div>
      </div>
      <div className="absolute flex hover-full transform -translate-y-1/2 items-center" style={{ height: `${value}%` }}>
        <CgArrowLongRight className="w-24 text-blue-600" size={50} style={{ transform: 'scaleX(2)' }} />
      </div>
    </div>
  );
};

export default Altitude;
