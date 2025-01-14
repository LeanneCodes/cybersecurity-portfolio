import React from 'react';

const OutlineButton = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`btn border-2 border-black rounded-lg p-4 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
