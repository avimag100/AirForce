import React, { useContext } from 'react';
import { MyContext } from '../context/CreateContext';
import { useNavigate } from 'react-router-dom';

const TextPage = () => {
  const { myValue } = useContext(MyContext);
  const nav = useNavigate()
  return (
    <div>
      <div className="flex justify-center space-x-4 py-6">
        <button onClick={() => nav("/TextPage")} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out">Text</button>
        <button onClick={() => nav("/VisualPage")} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300 ease-in-out">Visual</button>
        <button onClick={() => nav("/InputPage")} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-300 ease-in-out">+</button>
      </div>
      <div className="flex flex-wrap justify-center">
        {Object.keys(myValue).map((key) => (
          <div key={key} className="m-4 p-6 bg-gray-200 rounded-lg shadow-md text-center">
            <strong className="block mb-4 text-lg">{key}:</strong>
            <span className="text-xl font-bold">{myValue[key]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextPage;
