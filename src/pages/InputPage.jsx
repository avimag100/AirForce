import React, { useState } from 'react';
import Input from '../components/Input';
import { IoSend } from "react-icons/io5";
import Circle from '../components/Circle';

const InputPage = () => {
  const [inputValues, setInputValues] = useState({
    Altitude: '',
    HIS: '',
    ADI: ''
  });

  const handleInputChange = (type, value) => {
    setInputValues(prevState => ({
      ...prevState,
      [type]: value
    }));
  };

  const handleSubmint = () => {
    console.log('Input values:', inputValues);
  };

  return (
    <div className='flex'>
      <div>
        <Input type="Altitude" maxValue={3000} onChange={(value) => handleInputChange('Altitude', value)} />
        <Input type="HIS" maxValue={360} onChange={(value) => handleInputChange('HIS', value)} />
        <Input type="ADI" maxValue={100} onChange={(value) => handleInputChange('ADI', value)} />

        <button className='self-end' onClick={handleSubmint}><IoSend /></button>
      </div>
    </div>
  );
};

export default InputPage;
