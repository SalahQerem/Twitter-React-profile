import React from "react";

const Button = ({ style, content }) => {
  return (
    <button
      className={`rounded-full text-center font-medium text-[0.75rem] p-1 ${style}`}
    >
      {content}
    </button>
  );
};

export default Button;
