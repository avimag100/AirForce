import React, { createContext, useContext, useState } from 'react';

// Create a context
export const MyContext = createContext();

// Create a provider component
const CreateContext = ({ children }) => {
  const [myValue, setMyValue] = useState('');

  return (
    <MyContext.Provider value={{ myValue, setMyValue }}>
      {children}
    </MyContext.Provider>
  );
};

export default CreateContext;