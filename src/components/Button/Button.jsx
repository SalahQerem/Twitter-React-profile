import React from "react";

const Button = ({ style, children }) => {
  return (
    <button
      className={`rounded-full text-center font-medium text-[0.75rem] p-1 ${style}`}
    >
      {children}
    </button>
  );
};

export default Button;
