import React from "react";

const Button = ({ className, children }) => {
  return (
    <button
      className={`rounded-full text-center font-medium text-[0.75rem] p-1 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
