import React, { useContext, useState } from 'react';
import Input from '../components/Input';
import { IoSend } from "react-icons/io5";
import { MyContext } from '../context/CreateContext';
import { useNavigate } from 'react-router-dom';

const InputPage = () => {
  const { myValue, setMyValue } = useContext(MyContext)
  const nav = useNavigate()
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
    setMyValue(inputValues)
    console.log('Input values:', inputValues);
    nav("/visualPage")

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
