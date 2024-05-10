import React from "react";
import WhoToFollowItem from "../WhoToFollowItem/WhoToFollowItem.jsx";
import freeCodeCamp from "../../assets/freeCodeCamp.jpg";
import tailwindCSS from "../../assets/test.png";
import typescript from "../../assets/typescript.png";
import { Box, Link, Typography } from "@mui/material";

const WhoToFollow = () => {
  return (
    <Box className="p-2 border-b border-[#333] mb-3">
      <Typography variant="h3" className="text-sm font-bold">
        Who to follow
      </Typography>
      <Box className="flex flex-col gap-3 mt-3">
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
      </Box>
      <Link
        href="#"
        sx={{
          color: "#1D9BF0",
          textDecoration: "none",
          marginBlockStart: "0.5rem",
          marginInlineStart: "0.5rem",
          display: "block",
        }}
        className="text-[#1D9BF0] no-underline block mt-2 ms-2"
      >
        Show more
      </Link>
    </Box>
  );
};

export default WhoToFollow;
