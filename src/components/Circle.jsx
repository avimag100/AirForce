import React from 'react';
import { CgArrowLongUpC } from "react-icons/cg";
const Circle = () => {
  return (
    <div>
      <div className="flex justify-center items-center w-80 h-80  rounded-full border-2 border-black">
      <CgArrowLongUpC size={40} style={{color:'orange'}}/>
      </div>
    </div>
  );
}

export default Circle;
