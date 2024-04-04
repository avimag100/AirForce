import React, { useState, useEffect } from 'react';
import { CgArrowLongUpC } from "react-icons/cg";

const HIS = ({ Value }) => {
  // how the number looks like in the circle
  const numberStyle = "absolute w-6 h-6 bg-white border border-black flex justify-center items-center rounded-full";

  return (
    <div style={{transform: `rotate(${360-Value}deg)`}} className="relative w-80 h-80">
      {/*Created Circle */}
      <div className="absolute w-full h-full rounded-full border-2 border-black flex justify-center items-center">
        {/*imported Arrow icon */}
        <CgArrowLongUpC size={40} style={{ color: 'orange', transform: `rotate(-${360-Value}deg)`}} />

        {/*Numbers on the circle */}
        <div className={numberStyle} style={{ top: '-3px', left: 'calc(50% - 3px)' ,transform: `rotate(-${360-Value}deg)` }}>0</div>
        <div className={numberStyle} style={{ top: 'calc(50% - 3px)', right: '-3px',transform: `rotate(-${360-Value}deg)` }}>90</div>
        <div className={numberStyle} style={{ bottom: '-3px', left: 'calc(50% - 3px)' , transform: `rotate(-${360-Value}deg)` }}>180</div>
        <div className={numberStyle} style={{ top: 'calc(50% - 3px)', left: '-3px', transform: `rotate(-${360-Value}deg)` }}>270</div>
      </div>
    </div>
  );
}

export default HIS;
