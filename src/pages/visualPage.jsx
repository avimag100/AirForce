import React, { useState } from 'react';
import HIS from '../components/HIS';
import ADI from '../components/ADI.jsx';

const VisualPage = () => {
    return (
        <>
            <div className='flex justify-evenly'>
                <HIS />
                <ADI />
            </div>
        </>
    );
};

export default VisualPage;

