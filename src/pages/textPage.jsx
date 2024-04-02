import React, { useContext } from 'react';
import { MyContext } from '../context/CreateContext';

const TextPage = () => {
  const { myValue } = useContext(MyContext);

  return (
    <div className="flex flex-wrap justify-center">
      {Object.keys(myValue).map((key) => (
        <div key={key} className="m-4 p-4 bg-gray-200 rounded-lg text-center">
          <strong className="block mb-2">{key}:</strong>
          <span>{myValue[key]}</span>
        </div>
      ))}
    </div>
  );
};

export default TextPage;
