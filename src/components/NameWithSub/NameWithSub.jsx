import React from "react";

function NameWithSub({ name, sub, nameStyle, containerStyle }) {
  return (
    <div className={`${containerStyle}`}>
      <p className={`font-bold text-[0.75rem] ${nameStyle}`}>{name}</p>
      <p className="text-secondary text-[0.7rem]">{sub}</p>
    </div>
  );
}

export default NameWithSub;
