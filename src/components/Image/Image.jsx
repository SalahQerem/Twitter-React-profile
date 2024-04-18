import React from "react";

function Image({ src, alt, style }) {
  return <img src={src} alt={alt} className={`rounded-full ${style}`} />;
}

export default Image;
