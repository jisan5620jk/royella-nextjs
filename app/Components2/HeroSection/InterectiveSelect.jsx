'use client';

import React from 'react';

const InteractiveSelect = ({ options, className }) => {
  const handleFocus = (e) => {
    e.target.size = 6;
  };

  const handleBlur = (e) => {
    e.target.size = 0;
  };

  const handleChange = (e) => {
    e.target.size = 1;
    e.target.blur();
  };

  return (
    <select
      className={className}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange}
    >
      {options.map((option, index) => (
        <option
          key={index}
          value={option.value}
          className='bg-lightBlack text-sm lg:text-base px-3 py-1 text-white'
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default InteractiveSelect;
