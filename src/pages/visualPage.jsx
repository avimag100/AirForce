import React, { useContext, useState } from 'react';
import HIS from '../components/HIS';
import ADI from '../components/ADI.jsx';
import Altitude from '../components/Altitude.jsx';
import { MyContext } from '../context/CreateContext.jsx';
import { useNavigate } from 'react-router-dom';

const VisualPage = () => {
    const { myValue, setMyValue } = useContext(MyContext)
    const nav = useNavigate()
    return (
        <>
            <div className="flex justify-center space-x-4 py-6">
                <button onClick={()=>nav("/TextPage")} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out">Text</button>
                <button onClick={()=>nav("/VisualPage")} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300 ease-in-out">Visual</button>
                <button onClick={()=>nav("/InputPage")} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-300 ease-in-out">+</button>
            </div>

            <div className='flex flex-wrap justify-evenly '>
                <Altitude value={myValue["Altitude"]} />
                <HIS Value={myValue["HIS"]} />
                <ADI value={myValue["ADI"]} />
            </div>
        </>
    );
};

export default VisualPage;

