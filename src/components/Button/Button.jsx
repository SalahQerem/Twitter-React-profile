import React from "react";

function Button({ style, content }) {
  return (
    <div className={`rounded-full text-center font-medium ${style}`}>
      {content}
    </div>
  );
}

export default Button;
