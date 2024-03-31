import React from 'react';

const Circle = () => {
  const circleStyle = {
    width: '200px', // Adjust the width and height as needed
    height: '200px',
    borderRadius: '50%', // Ensures it's a perfect circle
    border: '2px solid black', // Border color and thickness
    backgroundColor: 'transparent', // No color inside the circle
  };

  return (
    <div style={circleStyle}></div>
  );
}

export default Circle;
