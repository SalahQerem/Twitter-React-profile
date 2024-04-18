import React from "react";

function AsideItem({ icon, name }) {
  return (
    <li className="flex items-center justify-start gap-3">
      <div>{icon}</div>
      <p>{name}</p>
    </li>
  );
}

export default AsideItem;
