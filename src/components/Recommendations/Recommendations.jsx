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
    <Box className="w-[600px] ps-4 pe-2 flex flex-col gap-3 h-full pt-2">
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
          sx={{ fontSize: "14px" }}
        />
      </SearchInput>
      <Box className="bg-[rgba(255,255,255,0.1)] rounded-xl px-3 py-2 w-[100%]">
        <Typography variant="h3" fontSize={"0.9rem"} fontWeight={"700"}>
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
          sx={{
            color: "#1D9BF0",
            textDecoration: "none",
            marginBlockStart: "0.75rem",
            display: "block",
          }}
        >
          Show more
        </Link>
      </Box>
      <Box className="bg-[rgba(255,255,255,0.1)] rounded-xl px-3 py-2">
        <Typography
          variant="h3"
          fontSize={"0.9rem"}
          fontWeight={"700"}
          className="font-bold text-sm"
        >
          Trends for you
        </Typography>
        <Box className="flex flex-col gap-4 mt-3">{renderTrends}</Box>
        <Link
          href="#"
          fontSize={"0.75rem"}
          sx={{
            color: "#1D9BF0",
            textDecoration: "none",
            marginBlockStart: "1rem",
            display: "block",
          }}
        >
          Show more
        </Link>
      </Box>
      <Box className="ps-3">
        <Typography
          color="rgb(102 102 102 / 1)"
          fontSize={"0.6rem"}
          className="flex flex-wrap gap-x-2"
        >
          <Link
            href="#"
            color="rgb(102 102 102 / 1)"
            underline="none"
            className="hover:underline"
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            color="rgb(102 102 102 / 1)"
            underline="none"
            className="hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            color="rgb(102 102 102 / 1)"
            underline="none"
            className="hover:underline"
          >
            Cookie Policy
          </Link>
          <Link
            href="#"
            color="rgb(102 102 102 / 1)"
            underline="none"
            className="hover:underline"
          >
            Accessibility
          </Link>
          <Link
            href="#"
            color="rgb(102 102 102 / 1)"
            underline="none"
            className="hover:underline"
          >
            Ads info
          </Link>
          <Link
            href="#"
            color="rgb(102 102 102 / 1)"
            underline="none"
            className="hover:underline"
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
