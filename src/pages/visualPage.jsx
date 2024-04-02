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
            <button onClick={()=>nav("/TextPage")}>blabal</button>
            <div className='flex flex-wrap justify-evenly '>
                <Altitude value={myValue["Altitude"]} />
                <HIS Value={myValue["HIS"]} />
                <ADI value={myValue["ADI"]} />
            </div>
        </>
    );
};

export default VisualPage;

