import React, { useState } from 'react';

const Input = ({ type, maxValue, onChange }) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
        onChange(newValue);
    };

    return (
        <div className="flex items-center mb-4">
            <label className="px-2 text-gray-700">{type}</label>
            <input
                type="number"
                min={0}
                max={maxValue}
                value={value}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500"
            />
        </div>

    );
};

export default Input;
