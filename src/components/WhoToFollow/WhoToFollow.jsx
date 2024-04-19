import React from "react";
import WhoToFollowItem from "../WhoToFollowItem/WhoToFollowItem.jsx";
import freeCodeCamp from "../../assets/freeCodeCamp.jpg";
import tailwindCSS from "../../assets/test.png";
import typescript from "../../assets/typescript.png";

function WhoToFollow() {
  return (
    <div className="p-2 border-b border-[#333]">
      <h3 className="font-bold text-sm">Who to follow</h3>
      <div className="flex flex-col gap-3 mt-3">
        <WhoToFollowItem
          name="freeCodeCamp.org"
          sub="@freeCodeCamp"
          description={`
              We're a community of millions of people who are building new
              skills and getting new jobs together. A 501(c)(3) public charity.
              Tweets by
              `}
          descriptionLink="@abbeyrenn"
          otherFollowers="Nodejs and 9"
          accountImg={freeCodeCamp}
        />
        <WhoToFollowItem
          name="TypeScript"
          sub="@typescript"
          description={`
               TypeScript is a language for application-scale JavaScript development. 
               It's a typed superset of JavaScript that compiles to plain JavaScript
          `}
          otherFollowers="Nodejs and 5"
          accountImg={typescript}
        />
        <WhoToFollowItem
          name="Tailwind CSS"
          sub="@tailwindcss"
          description={`The utility-first CSS framework. Rapidly build modern websites, without ever leaving your HTML`}
          otherFollowers="Yazeed Obaid and 9"
          accountImg={tailwindCSS}
        />
      </div>
      <a href="#" className="text-[#1D9BF0] block mt-2 ms-2">
        Show more
      </a>
    </div>
  );
}

export default WhoToFollow;
