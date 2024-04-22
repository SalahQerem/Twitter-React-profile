import { Ellipsis } from "lucide-react";
import React from "react";

const Trend = ({ name, type, posts, isArabic }) => {
  return (
    <div className={`${!isArabic && "flex items-center justify-between"}`}>
      <div>
        {type && <p className="text-secondary text-[0.65rem]">{type}</p>}
        <p
          className={`font-bold text-[0.75rem] ${
            isArabic && "text-end w-full"
          }`}
        >
          {name}
        </p>
        {posts && <p className="text-secondary text-[0.65rem]">{posts}</p>}
      </div>
      {!isArabic && (
        <div className="flex items-start">
          <Ellipsis size="15px" color="#666" />
        </div>
      )}
    </div>
  );
};

export default Trend;
