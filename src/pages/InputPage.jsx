import React, { useContext, useState } from 'react';
import Input from '../components/Input';
import { IoSend } from "react-icons/io5";
import { MyContext } from '../context/CreateContext';
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai";
import { EDIT_DATA_URL, GET_DATA_URL } from '../utils/urls';
import axios from 'axios';

const InputPage = ({ setInputMode }) => {
  const { myValue, setMyValue } = useContext(MyContext);
  const nav = useNavigate();
  const [inputValues, setInputValues] = useState({
    Altitude: 0,
    HIS: 0,
    ADI: 0
  });

  const handleInputChange = (type, value) => {
    setInputValues(prevState => ({
      ...prevState,
      [type]: value
    }));
  };

  const handleSubmint = async () => {
    try {
      const data = await axios.put(EDIT_DATA_URL, inputValues);
      console.log(data);
      setMyValue(inputValues);
      console.log('Input values:', inputValues);
    } catch (e) {
      console.log(e);
    }

  };

  return (
    <div className='absolute w-full h-full left-0 z-10 bg-opacity-40 bg-slate-600'>
      <div className="w-[500px] mx-auto mt-[100px] p-6 bg-white shadow-lg rounded-lg">
        <AiOutlineClose className='ml-auto w-[30px] h-[30px] p-1 rounded-full hover:bg-slate-300 cursor-pointer' onClick={() => setInputMode(false)} />
        <h2 className="text-2xl font-semibold mb-4">Enter Flight Data</h2>
        <Input type="Altitude" maxValue={3000} onChange={(value) => handleInputChange('Altitude', value)} value={myValue.Altitude} />
        <Input type="HIS" maxValue={360} onChange={(value) => handleInputChange('HIS', value)} value={myValue.HIS} />
        <Input type="ADI" maxValue={100} onChange={(value) => handleInputChange('ADI', value)} value={myValue.ADI} />
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => { handleSubmint(), setInputMode(false) }}>
          <IoSend className="inline-block mr-2" />
          Submit
        </button>
      </div>
    </div>
  );
};

export default InputPage;
