import React from 'react';
import { CgArrowLongUpC } from "react-icons/cg";

const HIS = () => {
  const numberStyle = "absolute w-6 h-6 bg-white border border-black flex justify-center items-center rounded-full";

  return (
    <div className="relative w-80 h-80">
      {/* Circle */}
      <div className="absolute w-full h-full rounded-full border-2 border-black flex justify-center items-center">
        {/* Arrow */}
        <CgArrowLongUpC size={40} style={{ color: 'orange' }} />

        {/* Numbers */}
        <div className={numberStyle} style={{ top: '-3px', left: 'calc(50% - 3px)' }}>0</div>
        <div className={numberStyle} style={{ top: 'calc(50% - 3px)', right: '-3px' }}>90</div>
        <div className={numberStyle} style={{ bottom: '-3px', left: 'calc(50% - 3px)' }}>180</div>
        <div className={numberStyle} style={{ top: 'calc(50% - 3px)', left: '-3px' }}>270</div>
      </div>
    </div>
  );
}

export default HIS;
