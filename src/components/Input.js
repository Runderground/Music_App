import React from 'react';

const Input = ({ className, ...props }) => {
  return (
    <input
      className={`px-4 py-2 rounded focus:outline-none focus:ring ${className}`}
      {...props}
    />
  );
};

export default Input;
