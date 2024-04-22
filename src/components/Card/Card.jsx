import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] rounded-xl px-3 py-2">
      {children}
    </div>
  );
};

export default Card;
