import React from 'react';

const Input = ({ type = 'text', placeholder, value, onChange, className }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`border p-2 rounded bg-darkBg text-primaryText border-secondaryText ${className}`}
        />
    );
};

export default Input;
