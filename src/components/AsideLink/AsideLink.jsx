import React from "react";

const AsideItem = ({ icon, name }) => {
  return (
    <a href="#" className="flex items-center justify-start gap-3">
      <div>{icon}</div>
      <p className="text-[0.9rem]">{name}</p>
    </a>
  );
};

export default AsideItem;
