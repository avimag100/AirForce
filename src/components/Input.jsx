import React, { useState } from 'react';


const Input = ({ type, maxValue, onChange, value }) => {
    const [topValue, setTopValue] = useState(value);
    

    const handleChange = (event) => {
        let newValue = event.target.value;

        if (newValue > maxValue) {
            newValue = maxValue;
        }
        if (newValue < 0) {
            newValue = 0
        }

        setTopValue(newValue);
        onChange(newValue);
    };
  
    return (
        <div className="flex items-center mb-4">
            <label className="px-2 text-gray-700">{type}</label>
            <input
                type="number"
                min={0}
                max={maxValue}
                // defaultValue={value}
                value={topValue}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500"
            />
        </div>

    );
};

export default Input;
