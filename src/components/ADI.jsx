import React from 'react';

const ADI = ({value}) => {
    // make sure it is between 0 and 100
    const percentage = Math.min(100, Math.max(0, value)); 
    // 80 is the height of the container
    const fillHeight = (percentage / 100) * 80 + 'px'; 

    const numberStyle = "absolute w-6 h-6 bg-white border border-black flex justify-center items-center rounded-full";
    return (
            <div className="relative w-80 h-80 rounded-full border-2 border-black flex justify-center items-center overflow-hidden" style={{ backgroundColor: '#0E9F6E' }}>
                <div style={{ height: `${value}%`, backgroundColor: '#3F83F8', position: 'absolute', top: 0, left: 0, right: 0 }} />
            </div>
    );
};

export default ADI;
