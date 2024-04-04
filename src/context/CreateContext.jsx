import React, { createContext, useContext, useEffect, useState } from 'react';
import { GET_DATA_URL } from '../utils/urls';
import axios from 'axios';


// Create a context
export const MyContext = createContext();

// Create a provider component
const CreateContext = ({ children }) => {
  const [myValue, setMyValue] = useState('');
  useEffect(() => {
    const fun = async () => {
      try {
        const data = await axios.get(GET_DATA_URL);
        const { ADI, Altitude, HIS } = data.data;
        setMyValue({
          ADI,
          Altitude,
          HIS
        })
      } catch (err) {
        console.log(err);
      }
    }
    window.addEventListener('reload', fun());
  }, [])

  return (
    <MyContext.Provider value={{ myValue, setMyValue }}>
      {children}
    </MyContext.Provider>
  );
};

export default CreateContext;