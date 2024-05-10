import { Search } from "lucide-react";
import React from "react";
import freeCodeCamp from "../../assets/freeCodeCamp.jpg";
import tailwindCSS from "../../assets/test.png";
import typescript from "../../assets/typescript.png";
import Trend from "../Trend/Trend.jsx";
import RecomendedPage from "../RecomendedPage/RecomendedPage.jsx";
import { SearchIconWrapper, SearchInput, StyledInputBase } from "./styls.js";
import { trends } from "./trends.js";
import { Box, Link, Typography } from "@mui/material";

function Recommendations() {
  const renderTrends = trends.map((trend) => (
    <Trend
      key={trend.name}
      name={trend.name}
      posts={trend?.posts}
      type={trend?.type}
      isArabic={trend.isArabic}
    />
  ));

  return (
    <Box className="w-[600px] ps-4 pe-2 flex flex-col gap-2 h-full pt-2">
      <SearchInput
        sx={{
          borderRadius: "9999px",
          width: "100%",
          backgroundColor: "rgba(255,255,255,0.1)",
          margin: "0 !important",
        }}
      >
        <SearchIconWrapper>
          <Search color="#666" size="15px" />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
          className="text-sm"
        />
      </SearchInput>
      <Box className="bg-[rgba(255,255,255,0.1)] rounded-xl px-3 py-2 w-[100%]">
        <Typography variant="h3" className="text-sm font-bold">
          You might like
        </Typography>
        <Box className="flex flex-col gap-3 mt-3">
          <RecomendedPage
            accountImg={tailwindCSS}
            name="Tailwind CSS"
            sub="@tailwindcss"
          />
          <RecomendedPage
            accountImg={typescript}
            name="TypeScript"
            sub="@typescript"
          />
          <RecomendedPage
            accountImg={freeCodeCamp}
            name="freeCodeCamp.org"
            sub="@freeCodeCamp"
          />
        </Box>
        <Link
          href="#"
          fontSize={"0.75rem"}
          className="text-[#1D9BF0] no-underline block mt-2"
        >
          Show more
        </Link>
      </Box>
      <Box className="bg-[rgba(255,255,255,0.1)] rounded-xl px-3 py-2">
        <Typography variant="h3" className="font-bold text-sm">
          Trends for you
        </Typography>
        <Box className="flex flex-col gap-4 mt-3">{renderTrends}</Box>
        <Link
          href="#"
          fontSize={"0.75rem"}
          className="text-[#1D9BF0] no-underline block mt-2"
        >
          Show more
        </Link>
      </Box>
      <Box className="ps-3">
        <Typography className="flex flex-wrap gap-x-2 text-secondary text-[0.6rem]">
          <Link
            href="#"
            className="text-secondary no-underline hover:underline"
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-secondary no-underline hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-secondary no-underline hover:underline"
          >
            Cookie Policy
          </Link>
          <Link
            href="#"
            className="text-secondary no-underline hover:underline"
          >
            Accessibility
          </Link>
          <Link
            href="#"
            className="text-secondary no-underline hover:underline"
          >
            Ads info
          </Link>
          <Link
            href="#"
            className="text-secondary no-underline hover:underline"
          >
            More...
          </Link>
          © 2024 X Corp.
        </Typography>
      </Box>
    </Box>
  );
}

export default Recommendations;
