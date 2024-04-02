import React, { useContext, useState } from 'react';
import Input from '../components/Input';
import { IoSend } from "react-icons/io5";
import { MyContext } from '../context/CreateContext';
import { useNavigate } from 'react-router-dom';

const InputPage = () => {
  const { myValue, setMyValue } = useContext(MyContext);
  const nav = useNavigate();
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
    setMyValue(inputValues);
    console.log('Input values:', inputValues);
    nav("/visualPage");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-green-400 to-blue-500">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Enter Flight Data</h2>
        <Input type="Altitude" maxValue={3000} onChange={(value) => handleInputChange('Altitude', value)} />
        <Input type="HIS" maxValue={360} onChange={(value) => handleInputChange('HIS', value)} />
        <Input type="ADI" maxValue={100} onChange={(value) => handleInputChange('ADI', value)} />

        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleSubmint}>
          <IoSend className="inline-block mr-2" />
          Submit
        </button>
      </div>
    </div>
  );
};

export default InputPage;
